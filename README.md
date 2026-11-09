# sowallab Design Docs

sowallab 디자인 시스템 문서 사이트입니다. 빌드 도구 없이 HTML·CSS·JS 파일만으로 동작하고, 본문은 마크다운 파일로 씁니다.

- 원본: [yuk0220/sowallab-site](https://github.com/yuk0220/sowallab-site) 프로토타입 v30 (f97c26c)
- 미리보기: https://claude.ai/artifact/KAjTGQzVurzhqAVcRW9raJ (비공개)

## 로컬에서 보기

`index.html`을 파일로 바로 열면 문서를 읽어 오지 못합니다. 이 폴더에서 간단한 서버를 띄워 주세요.

```bash
cd ~/Documents/GitHub/sowallab-DS
python3 -m http.server 4173
```

브라우저에서 http://localhost:4173 을 엽니다.

## 폴더 구성

```
index.html          화면 뼈대 (위쪽 바, 왼쪽 메뉴, 본문, 오른쪽 목차)
site.css            문서 사이트 스타일 (밝은·어두운 화면)
app.js              메뉴, 페이지 이동, 목차, 대표 비주얼, Do/Don't 카드
nav.json            왼쪽 메뉴 구성과 순서  ← 구성을 바꿀 때
content/*.md        문서 본문            ← 내용을 바꿀 때
previews/*.html     컴포넌트 미리보기 마크업
tokens.json         디자인 토큰 원본       ← 색·간격을 바꿀 때
tokens.css          tokens.json에서 만든 CSS 변수 (직접 고치지 않음)
components.css      컴포넌트 스타일 (프로토타입 원본 CSS)
data.json           색 견본, 컴포넌트 미리보기 높이, 에셋 목록
fonts.css, fonts/   Pretendard (사이트에 쓰인 글자만 담은 파일)
assets/             로고, 브랜드 이미지, 도구 로고, 사진, 영상
tools/              토큰·글꼴을 다시 만드는 스크립트
```

## 내용 고치기

`content/` 안의 마크다운 파일을 고치고 새로고침하면 바로 반영됩니다.

| 마크다운 | 사이트에서 |
| --- | --- |
| `# 제목` | 페이지 제목 (파일마다 하나) |
| 제목 바로 아래 첫 문단 | 제목 아래 소개 문장 |
| `## 소제목` | 섹션 제목, 오른쪽 목차에 자동으로 들어감 |
| `` `text-sub` `` 처럼 색 토큰 이름 | 이름 앞에 색 견본이 자동으로 붙음 |
| `**Do** — 문장` / `**Don't** — 문장` | 색 띠가 있는 Do / Don't 카드로 바뀜 |
| 표 | 둥근 테두리 표, 좁은 화면에서는 가로 스크롤 |

## 메뉴 구성 바꾸기

`nav.json`에서 순서, 이름, 묶음을 바꿉니다.

```json
{ "slug": "color", "name": "Color", "ko": "색상" }
```

- `slug` — 주소(`#color`)이자 `content/color.md` 파일 이름
- `name` — 메뉴에 보이는 이름
- `ko` — 메뉴 오른쪽 한국어 이름, 검색에도 쓰임
- `preview: true` — 페이지 위에 `previews/<slug>.html` 미리보기와 HTML 탭을 보여 줌
- 묶음은 `groups`, 컴포넌트처럼 한 단계 더 나눌 때는 `subgroups`

위쪽 바의 Getting Started · Foundations · Components · Assets 링크는 `index.html`의 `.topnav`에 있습니다.

## 새 문서 추가

1. `content/<slug>.md`를 만듭니다.
2. `nav.json`의 원하는 위치에 `{ "slug": "<slug>", "name": "...", "ko": "..." }`를 넣습니다.
3. 컴포넌트라면 `previews/<slug>.html`도 만들고 `"preview": true`를 붙입니다. 미리보기 첫 높이는 `data.json`의 `components`에 `{ "slug": "<slug>", "height": 200 }`처럼 넣을 수 있습니다(없으면 내용에 맞춰 늘어납니다).

## 대표 비주얼

Color, Typography, Grid, Icons, Elevation, Motion, Writing, Tokens, Overview 페이지 위의 그림은 `app.js`의 `HEROES`에서 그립니다. 새 페이지에 그림을 넣으려면 같은 이름(slug)으로 함수를 추가합니다.

## 토큰 바꾸기

`tokens.json`을 고친 뒤 실행합니다.

```bash
python3 tools/build-tokens.py
```

`tokens.css`와 `data.json`의 색 견본이 다시 만들어집니다.

## 글꼴 다시 만들기

문서에 새 글자가 많이 늘면 글자가 기본 서체로 보일 수 있습니다. 그때 실행합니다.

```bash
pip install fonttools brotli
PRETENDARD_DIR=~/Library/Fonts python3 tools/build-fonts.py
```

## 배포

정적 파일이라 Vercel, GitHub Pages, Netlify 어디든 이 폴더를 그대로 올리면 됩니다. 페이지 주소는 `#color`처럼 해시로 나뉩니다.

## 라이선스 메모

- Pretendard: SIL Open Font License 1.1
- 도구 로고: Simple Icons. 각 브랜드 로고 사용 허가는 아직 확인 전입니다.
- sowallab 로고는 이미지에서 따라 그린 임시 벡터입니다.
