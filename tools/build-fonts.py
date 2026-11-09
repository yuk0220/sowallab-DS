"""문서에 새 글자가 늘면 실행합니다. 사이트에 쓰인 글자만 골라 Pretendard를 가볍게 다시 만듭니다.

    pip install fonttools brotli
    PRETENDARD_DIR=~/Library/Fonts python3 tools/build-fonts.py

PRETENDARD_DIR에는 Pretendard-Regular/Medium/SemiBold.otf가 있어야 합니다.
"""
import glob, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = os.path.expanduser(os.environ.get("PRETENDARD_DIR", "~/Library/Fonts"))
text = ""
for pat in ("content/*.md", "previews/*.html", "app.js", "index.html", "nav.json", "data.json"):
    for f in glob.glob(os.path.join(ROOT, pat)):
        text += open(f, encoding="utf-8").read()
chars = set(text) | {chr(c) for c in range(0x20, 0x7F)} | set("·—–→←…’‘“”©×")
tmp = os.path.join(ROOT, "tools", ".chars.txt")
open(tmp, "w", encoding="utf-8").write("".join(sorted(chars)))
for w in ("Regular", "Medium", "SemiBold"):
    subprocess.run([sys.executable, "-m", "fontTools.subset", os.path.join(src, f"Pretendard-{w}.otf"),
                    f"--text-file={tmp}", "--flavor=woff2", "--layout-features=*",
                    f"--output-file={os.path.join(ROOT, 'fonts', f'Pretendard-{w}.subset.woff2')}"], check=True)
os.remove(tmp)
print(len(chars), "글자로 글꼴 3개를 다시 만들었습니다.")
