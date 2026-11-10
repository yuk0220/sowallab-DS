# AreaCard

홈의 '비즈니스 솔루션'에서 영역 하나를 소개하는 카드입니다. 누르면 솔루션 페이지의 해당 탭으로 이동합니다.

## Anatomy

1. Icon (32px, stroke 1.4)
2. Number (01~04)
3. Area name (`primary-300`, 13px 500)
4. Title (H3, 18px)
5. Service list (4개)
6. More (자세히 보기 알약)

## Size

안쪽 여백 22px 22px 20px. 테두리 없이 `card` 바탕만 씁니다.

## States

| 상태 | 모양 |
| --- | --- |
| Default | `card` 바탕, 테두리 투명 |
| Hover | `border-secondary` 테두리 + 아래쪽 점 격자와 옅은 청보라 빛 + '자세히 보기'가 밝게 반전 |

점 격자는 8px 간격, 점 22%로 아래 62% 영역에서 450ms에 걸쳐 나타나 3.2초 주기로 흐릅니다.

## Layout

4열 → 1100px 2열 → 560px 1열, 카드 사이 16px.

## How to use

**Do** — 네 카드의 세부 서비스 개수를 4개로 맞춥니다.

**Don't** — 카드에 그림자를 넣지 않습니다.
