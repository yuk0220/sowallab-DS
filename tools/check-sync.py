"""AI용 DS(ai/) · 사람용 독스 · Figma 변수가 서로 맞는지 점검합니다.

    python3 tools/check-sync.py

고치지는 않고 어긋난 곳만 알려 줍니다. 문제가 없으면 마지막 줄에 '모두 맞음'이 나옵니다.
"""
import json, os, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = lambda *a: os.path.join(ROOT, *a)
problems, notes = [], []
FAMS = ("color", "spacing", "radius", "shadow")


def load(path):
    return json.load(open(path, encoding="utf-8"))


def flat(t):
    """토큰 파일을 {이름: 값} 하나로 펼칩니다."""
    theme = t["color"]["themes"][0]["id"]
    out = {}
    for fam in FAMS:
        for x in t.get(fam, {}).get("tokens", []):
            v = x["value"]
            out[x["name"]] = (v.get(theme) if isinstance(v, dict) else v)
    return out


def norm(v):
    return re.sub(r"\s+", "", str(v)).lower()


# 1. AI용 ↔ 사람용 토큰
ai_t, hu_t = load(P("ai", "tokens.json")), load(P("tokens.json"))
A, H = flat(ai_t), flat(hu_t)
for n in sorted(set(A) - set(H)):
    problems.append(f"[토큰] AI용에만 있음: {n}")
for n in sorted(set(H) - set(A)):
    problems.append(f"[토큰] 독스에만 있음: {n}")
for n in sorted(set(A) & set(H)):
    if norm(A[n]) != norm(H[n]):
        problems.append(f"[토큰] 값이 다름: {n}  AI={A[n]}  독스={H[n]}")
if ai_t.get("type") != hu_t.get("type"):
    problems.append("[토큰] 타이포(type) 묶음이 서로 다름")

# 2. tokens.css가 tokens.json으로 다시 만들어졌는지
css = open(P("tokens.css"), encoding="utf-8").read()
for n, v in H.items():
    want = re.sub(r"^\{(.+)\}$", r"var(--\1)", v)
    if f"--{n}: {want};" not in css:
        problems.append(f"[빌드] tokens.css가 오래됨: --{n} (python3 tools/build-tokens.py 실행)")
        break

# 3. 컴포넌트 목록
kebab = lambda s: re.sub(r"(?<!^)(?=[A-Z])", "-", s).lower()
ai_comp = {kebab(os.path.basename(d)) for d in glob.glob(P("ai", "components", "*")) if os.path.isdir(d)}
ai_comp -= {"cover"}  # 미리보기 전용(문서 없음)
nav = load(P("nav.json"))
def items(g):
    return g.get("items", []) + [i for sg in g.get("subgroups", []) for i in sg.get("items", [])]
slugs = {i["slug"] for g in nav["groups"] for i in items(g)}
comp_group = {i["slug"] for g in nav["groups"] if g.get("section") == "components" for i in items(g)}
for c in sorted(ai_comp - slugs):
    problems.append(f"[컴포넌트] AI용에 있는데 독스 메뉴에 없음: {c}")
for c in sorted(comp_group - ai_comp):
    problems.append(f"[컴포넌트] 독스에 있는데 AI용에 없음: {c}")
for s in sorted(slugs):
    if not os.path.exists(P("content", s + ".md")):
        problems.append(f"[독스] 메뉴에 있는데 문서 파일이 없음: content/{s}.md")

# 4. 문서에 적힌 토큰 이름이 실제로 있는지
PREFIX = r"(?:text|icon|border|fill|layer|bg|primary|neutral|warning|success|space|radius|shadow|cat|white|black|dimmed)"
pat = re.compile(r"`(" + PREFIX + r"(?:-[a-z0-9]+)+)`")
known = set(H) | {"bg"}
for f in sorted(glob.glob(P("ai", "guides", "*.md")) + glob.glob(P("ai", "components", "*", "README.md")) + glob.glob(P("content", "*.md"))):
    rel = os.path.relpath(f, ROOT)
    for m in sorted(set(pat.findall(open(f, encoding="utf-8").read()))):
        if m not in known:
            problems.append(f"[문서] 없는 토큰 이름: `{m}` ({rel})")

# 5. Figma 변수
fp = P("figma", "variables.json")
if not os.path.exists(fp):
    notes.append("[Figma] figma/variables.json 없음 — Figma 점검을 건너뜀 (figma/README.md 참고)")
else:
    fj = load(fp)
    F = {}
    if "variables" in fj and isinstance(fj["variables"], list):
        for x in fj["variables"]:
            F[x["name"]] = x.get("value")
    elif "meta" in fj:  # REST API 응답
        for x in fj["meta"]["variables"].values():
            vals = list(x.get("valuesByMode", {}).values())
            F[x["name"]] = vals[0] if vals else None
    def fname(n):
        parts = [p for p in re.split(r"[/\s]+", n.strip().lower()) if p]
        for i in range(len(parts)):
            cand = "-".join(parts[i:])
            if cand in H:
                return cand
        return "-".join(parts)
    FN = {fname(n): v for n, v in F.items()}
    for n in sorted(set(H) - set(FN)):
        problems.append(f"[Figma] 토큰은 있는데 Figma 변수에 없음: {n}")
    for n in sorted(set(FN) - set(H)):
        problems.append(f"[Figma] Figma 변수에만 있음: {n}")
    for n in sorted(set(FN) & set(H)):
        fv = FN[n]
        if isinstance(fv, dict) and "r" in fv:  # REST 색 값
            fv = "#%02x%02x%02x" % tuple(round(fv[k] * 255) for k in "rgb")
        if isinstance(fv, str) and fv.startswith("#") and H[n].startswith("#") and norm(fv)[:7] != norm(H[n])[:7]:
            problems.append(f"[Figma] 값이 다름: {n}  Figma={fv}  토큰={H[n]}")

# 6. 규칙: 굵기 600 상한
for f in [P("site.css"), P("components.css"), P("ai", "components", "bundle.css")] + glob.glob(P("previews", "*.html")):
    for i, line in enumerate(open(f, encoding="utf-8").read().splitlines(), 1):
        if re.search(r"font-weight\s*:\s*(7|8|9)00|font-weight\s*:\s*bold", line):
            problems.append(f"[규칙] 굵기 600 초과: {os.path.relpath(f, ROOT)}:{i}")

sync = open(P("ai", "SYNC.txt"), encoding="utf-8").read().strip().splitlines()
print("AI용 사본 —", " · ".join(sync[1:]))
print(f"토큰 {len(H)}개 · 컴포넌트 {len(ai_comp)}개 · 독스 문서 {len(slugs)}개\n")
for n in notes:
    print(n)
for p in problems:
    print(p)
print(f"\n어긋남 {len(problems)}건" if problems else "\n모두 맞음")
