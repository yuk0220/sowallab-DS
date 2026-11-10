# Carousel

솔루션 영역 제목과 세부 카드 네 장을 한 줄로 보여 줍니다. 좁은 화면에서는 가로로 넘겨 봅니다.

## Anatomy

1. Area title (H2)
2. Previous / Next button (`btn btn-outline car-btn`, 40px 원)
3. Card track (SolutionCard × 4)

## Responsive

| 너비 | 보이는 카드 | 버튼 |
| --- | --- | --- |
| >1100px | 4장 | 숨김 |
| 901~1100px | 2.6장 | 보임 |
| ≤900px | 78% 폭 한 장씩 | 보임, 제목 아래로 |

## States

| 상태 | 버튼 |
| --- | --- |
| 이동 가능 | 기본 |
| 끝에 닿음 | 35% 불투명도, 비활성 |

버튼은 카드 한 장 + 16px씩 움직입니다. 스크롤바는 숨기고 scroll-snap으로 카드 끝에 맞춥니다.

## How to use

**Do** — 탭을 바꾸면 제목과 카드가 함께 페이드로 바뀌게 합니다.

**Don't** — 자동으로 넘어가게 하지 않습니다.
