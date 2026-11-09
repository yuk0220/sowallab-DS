"""tokens.json을 고친 뒤 실행합니다. tokens.css와 data.json의 색·간격·반경·그림자 값을 다시 만듭니다.

    python3 tools/build-tokens.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
t = json.load(open(os.path.join(ROOT, "tokens.json"), encoding="utf-8"))
theme = t["color"]["themes"][0]["id"]


def raw(v):
    return v[theme] if isinstance(v, dict) else v


def css(v):
    return re.sub(r"^\{(.+)\}$", r"var(--\1)", raw(v))


lines = ["/* sowallab tokens — generated from tokens.json */", ":root {"]
for x in t["color"]["tokens"]:
    lines.append(f"  --{x['name']}: {css(x['value'])};")
for fam in ("spacing", "radius", "shadow"):
    for x in t.get(fam, {}).get("tokens", []):
        lines.append(f"  --{x['name']}: {css(x['value'])};")
for k, v in t["type"]["families"].items():
    lines.append(f"  --font-{k}: {v};")
lines.append("}")
open(os.path.join(ROOT, "tokens.css"), "w", encoding="utf-8").write("\n".join(lines) + "\n")

H = {x["name"]: raw(x["value"]) for x in t["color"]["tokens"]}


def resolve(n):
    v = H[n]
    while v.startswith("{"):
        v = H[v[1:-1]]
    return v


p = os.path.join(ROOT, "data.json")
data = json.load(open(p, encoding="utf-8"))
data["colors"] = {n: resolve(n) for n in H}
data["usage"] = {x["name"]: x.get("usage", "") for x in t["color"]["tokens"]}
for fam in ("spacing", "radius", "shadow"):
    data[fam] = t.get(fam, {}).get("tokens", [])
json.dump(data, open(p, "w", encoding="utf-8"), ensure_ascii=False)
print("tokens.css, data.json 갱신:", len(H), "colors")
