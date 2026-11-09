# Banner

홈 아래쪽에서 무료 3D 시안을 권하는 배너입니다. 배너 전체가 하나의 링크입니다.

## Anatomy

1. Kicker (회신 안내, 숫자만 `primary-200`)
2. Title (H1)
3. Description (Body)
4. Button label (`btn btn-primary btn-lg` 모양)
5. Art (컬러 구 영상 `sphere.mp4`)

## Size

| 항목 | 값 |
| --- | --- |
| 안쪽 여백 | clamp(28px, 3.6vw, 48px) clamp(28px, 4.5vw, 64px) |
| 반경 | `radius-card` 16px |
| 영상 | clamp(150px, 16vw, 210px) |

## Background

`neutral-900` → `primary-900` 115도 그라디언트 위에 오른쪽 청보라 빛과 40px 격자(white 4%)를 겹칩니다. 영상은 원형 마스크와 `mix-blend-mode: screen`으로 검정 배경을 지웁니다.

## Responsive

760px 이하에서는 1열이 되고, 영상은 오른쪽 위로 비켜 50% 투명도로 둡니다.

## How to use

**Do** — 배너 전체를 링크로 겁니다.

**Don't** — hover 효과를 넣지 않습니다.
