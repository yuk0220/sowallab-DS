# Button

작업을 실행하는 데 쓰는 클릭 가능한 요소입니다. 모든 버튼은 평면 알약 모양이며, 무료 3D 시안 신청 CTA만 테두리를 따라 빛줄기가 돕니다.

## Anatomy

1. Label
2. Trailing icon (선택, `ArrowRight` 16px)
3. Container

## Variants

| Variant | 클래스 | 쓰는 곳 |
| --- | --- | --- |
| Beam | `btn btn-beam` | 무료 3D 시안 신청 (히어로, 모바일 메뉴, 플로팅 카드, 기사 끝) |
| Beam dark | `btn btn-secondary btn-beam-dark` | 무료 3D 시안 신청 (헤더, 푸터) |
| Primary | `btn btn-primary` | 일반 주 버튼 (신청하기, 다음, 소개서 요청하기) |
| Outline | `btn btn-outline` | 보조 행동 (회사 소개서 받기, 캐러셀 이동) |
| Ghost | `btn btn-ghost` | 배경 없는 가벼운 행동 |
| Ghost light | `btn btn-ghost-light` | 사진·영상 위 보조 행동 (솔루션 보기) |
| Link | `btn btn-link` | 밑줄 링크 |

## Size

너비는 내용에 맞추고 높이는 고정합니다.

| Size | 클래스 | 높이 | 좌우 여백 | 글자 |
| --- | --- | --- | --- | --- |
| Small | `btn-sm` | 34px | 14px | 13px |
| Medium | 기본 | 40px | 18px | 14px 500 |
| Large | `btn-lg` | 48px | 24px | 15px |
| Icon only | `btn-icon` | 36 × 36px | 0 | |

## States

| 상태 | Primary | Outline |
| --- | --- | --- |
| Default | `neutral-100` 바탕 + `neutral-900` 글자 | `border-secondary` 테두리 + `text-sub` 글자 |
| Hover | `neutral-200` 바탕 | `layer-secondary` 바탕 + white 50% 테두리 |
| Pressed | `neutral-300` 바탕 | |
| Focus | `accent` 2px 아웃라인, 2px 띄움 | 같음 |

화살표가 있으면 hover 때 오른쪽으로 2px 밀립니다.

## Hierarchy

| 단계 | Variant | 역할 |
| --- | --- | --- |
| Level 3 | Beam | 사이트 전체에서 가장 중요한 행동, 무료 3D 시안 신청 |
| Level 2 | Primary | 화면 안의 주 행동 |
| Level 1 | Outline, Ghost | 보조 행동, 취소, 이동 |

## How to use

**Do** — 빛줄기 CTA는 한 화면에 하나만 둡니다.

**Do** — 앞으로 가는 행동에는 `ArrowRight`, 내려받기에는 `Download`를 붙입니다.

**Don't** — 주 버튼을 청보라로 칠하지 않습니다. 주 버튼은 밝은 무채색입니다.

**Don't** — 입체 하이라이트, 안쪽 그림자, 글로우를 넣지 않습니다.

**Don't** — 높이와 둥글기를 바꾸지 않습니다.
