# Icons

아이콘은 화면을 빠르게 이해하고 탐색하도록 돕습니다. 모든 UI 아이콘은 **lucide**(`lucide-react`)를 씁니다. 브랜드 로고와 사용 도구 로고만 예외입니다.

## Size

| 종류 | 크기 | 선 굵기 |
| --- | --- | --- |
| UI 아이콘 | 16~20px | 1.75~2 |
| 솔루션 기능 아이콘 | 32px | 1.4 |
| 제품 UI 아이콘 (sowallab DS) | 20×20 그리드 | 약 1.25, 둥근 끝 |

## Color

아이콘은 글자색을 따릅니다(`currentColor`).

| 토큰 | 쓰는 곳 |
| --- | --- |
| `icon` | 기본 아이콘 |
| `icon-sub` | 보조 아이콘 |
| `icon-primary` | 안내 콜아웃의 info 아이콘 |
| `icon-on` | 채움 버튼 위 아이콘 |

## UI icons

| 자리 | lucide |
| --- | --- |
| 모바일 메뉴 | `Menu` |
| 버튼 화살표 | `ArrowRight` |
| 캐러셀, 관련 소식, 자세히 보기 | `ChevronLeft`, `ChevronRight` |
| 닫기 | `X` |
| 회사 소개서 받기 | `Download` |
| 기사 상세 뒤로가기 | `ArrowLeft` |
| 문의 안내 콜아웃 | `Info` |
| 3D 뷰어 확대·축소·처음 시점 | `Plus`, `Minus`, `RotateCcw` |
| 파일 형식 칩 | `File` |

## Feature icons

솔루션 기능 16종에 쓰는 아이콘입니다.

| 영역 | 기능 → lucide |
| --- | --- |
| 3D 영업자료 | 3D 카탈로그 `Rotate3d` · 분해·단면 뷰어 `Layers` · 라인업 비교 `ChartColumnIncreasing` · 작동 원리 `Cog` |
| 홈페이지 | 제품 상세 3D `Box` · 사양 계산기 `Calculator` · 열람 기록 링크 `Eye` · 다국어 페이지 `Languages` |
| 제품 영상 | 실사 렌더 `Image` · 작동 영상 `Clapperboard` · 전시회 화면 `Monitor` · 출시 전 공개 `PackageOpen` |
| AX·시뮬레이션 | 자동화 셀 `Bot` · 라인 계산기 `ChartLine` · 견적·문의 자동화 `FileCheck` · 사내 자료 검색 `FileSearch` |

## Product UI icons

제품 화면(sowallab DS)에는 자체 아이콘을 씁니다. 채움은 Bookmarked 같은 상태 표현에만 씁니다.

| 그룹 | 예 |
| --- | --- |
| Creation | Box, Sphere, Cylinder, Torus, Prism |
| Tools | Move n Rotate, Align, Extrude, Fillet, Mirror, Lock |
| View type | Camera Mode, Orthographic, Perspective, Turntable, Top/Front View |
| Transform | Position, Rotate, Scale, Arrow, Undo/Redo, Chevron |
| Management | Download, Save, History, Link, Gen AI, Help, Filter, Plus/Minus/Close |

## Logos

- 브랜드 로고는 **Logos** 에셋을 씁니다. 어두운 바탕에는 `lockup-white.svg`를 씁니다.
- 사용 도구 로고는 **Tools** 에셋(Simple Icons, 단색)을 씁니다. 면적이 비슷해 보이도록 로고마다 크기를 보정합니다.

## How to use

**Do** — 아이콘만 있는 버튼에는 `aria-label`을 붙입니다.

**Don't** — lucide와 다른 아이콘 세트를 섞지 않습니다.

**Don't** — 이모지를 아이콘 대신 쓰지 않습니다.
