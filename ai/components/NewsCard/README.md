# NewsCard

뉴스룸의 기사 카드입니다. 채움 카드가 아니라 선으로 나눈 그리드의 한 칸입니다.

## Anatomy

1. Thumbnail (16:10, `radius-thumb`, 안쪽 1px 선)
2. Title (H3, 18px / 1.45)
3. Summary (Body sm, 최대 3줄)
4. Meta — CategoryChip + 날짜

## Size

카드 좌우 여백 28px로 모든 썸네일 크기를 같게 맞춥니다. 위 28px, 아래 32px.

## States

| 상태 | 모양 |
| --- | --- |
| Default | 썸네일 안쪽 `border` 선 |
| Hover | 썸네일 선 `border-secondary`, 제목 흰색, 썸네일 2% 확대, 아래쪽 점 격자 |

## Layout

그리드 위와 각 행 아래에 가로 선, 열 사이에 세로 선(`border`)을 둡니다. 바깥 세로 테두리는 없습니다. 3열 → 1000px 2열 → 640px 1열(세로 선 없음).

## Empty thumbnail

이미지가 없는 기사는 `thumb-default` 바탕에 로고를 16% 불투명도로 둡니다.

## How to use

**Do** — 날짜는 `2026.11.06` 형식으로 씁니다.

**Don't** — 카드에 바탕색을 채우지 않습니다.
