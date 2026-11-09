# Elevation

깊이감으로 요소 사이의 층을 나눕니다. 어두운 화면에서는 그림자가 잘 보이지 않기 때문에, 깊이는 바탕 밝기와 선으로 나누고 그림자는 떠 있는 요소에만 씁니다.

## Layer

| 층 | 바탕 | 구분 방법 |
| --- | --- | --- |
| 0 · Page | `bg` | |
| 1 · Card | `card` | 바탕 밝기 차이, 그림자 없음 |
| 1 · Layer | `muted` | 탭 트랙, 알약 링크 |
| 2 · Floating | `card` + 그림자 | 탭 선택 배경, 플로팅 버튼·카드 |
| 3 · Modal | `card` + `shadow-modal` 위 `overlay` | 회사 소개서 받기 |

## Shadow

| 토큰 | 값 | 쓰는 곳 |
| --- | --- | --- |
| `shadow-tab` | 0 1px 2px rgba(0,0,0,.2) | 세그먼트 탭 선택 배경 |
| `shadow-fab` | 0 12px 30px -10px rgba(0,0,0,.55) | 플로팅 버튼 |
| `shadow-panel` | 0 24px 60px -24px rgba(0,0,0,.5) | 플로팅 안내 카드 |
| `shadow-modal` | 0 30px 80px -30px rgba(0,0,0,.7) | 모달 |
| `focus-ring` | 0 0 0 3px rgba(132,138,153,.35) | 입력창 포커스 |

## Line

선으로 층을 나눌 때는 `border-default`(white 8%) 하나를 씁니다. 썸네일은 바깥 테두리 대신 안쪽 1px 선(`box-shadow: inset 0 0 0 1px`)으로 감쌉니다.

## Blur

| 쓰는 곳 | 효과 |
| --- | --- |
| 헤더 | `background` 88% + blur 12px |
| 모달 백드롭 | `overlay` + blur 4px |
| 사진 위 닫기 버튼 | `dimmed-basic` + blur 6px |

## How to use

**Do** — 카드는 그림자 없이 `card` 바탕만으로 구분합니다.

**Don't** — 버튼에 입체 하이라이트, 안쪽 그림자, 글로우를 넣지 않습니다.

**Don't** — 한 요소에 강한 그림자와 테두리를 함께 쓰지 않습니다.
