# Color

sowallab의 컬러 시스템은 무채색 바탕 위에 청보라를 아주 적게 얹는 구조입니다. 시맨틱 토큰을 쓰면 상황에 맞는 색을 일관되게 고를 수 있습니다. 화면은 다크 테마 하나만 씁니다.

## Background

화면의 바탕 색상입니다. 페이지는 `bg`, 카드와 패널처럼 바탕과 구분해야 하는 면은 `bg-elevation`을 씁니다.

| 토큰 | 값 | 쓰는 곳 |
| --- | --- | --- |
| `bg` | neutral-900 #15171D | 페이지 바탕 |
| `bg-elevation` | neutral-800 #1F2229 | 카드, 패널, 모달 |

## Layer

바탕 위에 옅은 면이 필요할 때 씁니다. 투명도가 있어서 어떤 바탕 위에서도 자연스럽게 겹칩니다.

| 토큰 | 값 | 쓰는 곳 |
| --- | --- | --- |
| `layer-secondary` | white 4% | hover 면, 반투명 버튼 |
| `layer-secondary-selected` | white 8% | 탭 트랙, 알약 링크, 닫기 버튼 |
| `layer-primary` | primary 8% | 청보라 옅은 면 |
| `layer-primary-selected` | primary 16% | 안내 콜아웃 바탕 |

## Text

글자 색상입니다. `text` → `text-sub` → `text-minimum` 순으로 정보의 위계를 나타냅니다.

| 토큰 | 값 | 쓰는 곳 |
| --- | --- | --- |
| `text` | neutral-100 | 본문, 제목 |
| `text-sub` | neutral-200 | 보조 글자, 히어로 소개 |
| `text-minimum` | neutral-300 | 날짜, 메타, 작은 안내 |
| `text-disable` | neutral-500 | 비활성 글자 |
| `text-primary` | primary-400 | 청보라 글자 링크 |
| `text-warning` | warning-400 | 오류 메시지 |
| `text-success` | success-400 | 완료·성공 메시지, 독스 Do 카드 |
| `text-on` | white | 채움 버튼 위 글자 |

## Line

요소 사이를 나누는 선입니다. 대부분 `border-default` 하나로 나누고, 누를 수 있는 요소에만 `border-secondary`를 씁니다.

| 토큰 | 값 | 쓰는 곳 |
| --- | --- | --- |
| `border-default` | white 8% | 헤더 아래, 그리드 선, 카드 테두리 |
| `border-secondary` | white 32% | 입력창, 누를 수 있는 카드 hover |
| `border-secondary-hover` | white 50% | outline 버튼 hover |
| `border-primary` | primary-500 | 포커스 |
| `border-warning` | warning-500 | 오류 입력창 |
| `border-success` | success-500 | 완료된 입력창 |

## Fill

버튼과 선택 상태의 채움 색입니다. hover는 한 단계 밝게, pressed는 한 단계 어둡게 바뀝니다.

| 토큰 | 기본 / hover / pressed | 쓰는 곳 |
| --- | --- | --- |
| `fill-primary` | primary-500 / 400 / 600 | 뉴스룸 필터 선택 |
| `fill-secondary` | neutral-600 / 500 / 700 | 헤더·푸터의 어두운 CTA |
| `fill-warning` | warning-500 / 400 / 600 | 위험한 행동 |
| `fill-success` | success-500 / 400 / 600 | 완료·성공 상태 |

## Brand Point

청보라는 정해진 자리에만 씁니다. 한 화면에서 차지하는 면적은 5% 안쪽으로 둡니다.

1. 무료 3D 시안 CTA의 빛줄기 테두리 (`primary-300` → `cta-vivid-2`)
2. 문의 안내 콜아웃 (`primary-t16` 바탕, `primary-100` 글자, `primary-300` 아이콘)
3. 솔루션 영역명과 카드 제목 (`primary-300`)
4. 본문 한 구절 강조 (`primary-300`)
5. 뉴스룸 필터 선택 (`fill-primary`)
6. 배너 그라디언트 끝색 (`primary-900`)

주 버튼은 청보라가 아닙니다. `neutral-100` 바탕에 `neutral-900` 글자를 씁니다.

## Category

뉴스 분류를 구분하는 색입니다. 칩 바탕은 분류 색 13%, 글자는 88%로 씁니다. 색만으로 구분하지 않고 이름을 늘 함께 씁니다.

| 분류 | 토큰 | 값 |
| --- | --- | --- |
| 기사 | `cat-1` | neutral-300 |
| 3D 카탈로그 | `cat-2` | primary-300 |
| 시뮬레이션 | `cat-3` | #9DFFFF |
| 영업 도구 | `cat-4` | #F9FFAC |

## Effect - Dimmer

모달처럼 층이 생길 때 뒤를 어둡게 덮습니다.

| 토큰 | 값 | 쓰는 곳 |
| --- | --- | --- |
| `overlay` | black 70% | 모달 백드롭 |
| `dimmed-basic` | black 50% | 사진 위 닫기 버튼 |
| `dimmed-light` | black 20% | 옅은 디밍 |

## Atomic

시맨틱 토큰이 가리키는 원색입니다. 화면에는 직접 쓰지 않고 시맨틱 토큰을 거쳐 씁니다.

| 계열 | 단계 |
| --- | --- |
| Primary | 100 #DADCFF · 200 #B8BAF8 · 300 #9BA1F0 · 400 #878FFF · **500 #6767F1** · 600 #4646C6 · 700 #2E2E90 · 800 #1D2063 · 900 #161742 |
| Primary Tinted | #6767F1의 8 · 16 · 32 · 48 · 72% |
| Neutral | white · 100 #F3F5F9 · 200 #D8DCE5 · 300 #ABB0BC · 400 #848A99 · 500 #575C68 · 600 #3F434D · 700 #2C2F37 · 800 #1F2229 · 900 #15171D · black |
| Warning | 100 #FFDFDF · 200 #FFC5C5 · 300 #FF88A1 · 400 #FF4C83 · 500 #FF2E79 · 600 #ED1565 · 700 #CF0A51 · 800 #B50047 · 900 #69002F |
| Success | 100 #D9F8E7 · 200 #B3F0CF · 300 #6FE3A7 · **400 #22D37F** · 500 #14B86B · 600 #0FA05C · 700 #0B8A4C · 800 #07733F · 900 #033D22 |
| Alpha | white 4 · 8 · 16 · 32 · 50% / black 20 · 50 · 70% |
| CTA vivid | #F9FFAC → #9DFFFF → #FFBFFE |
| CTA soft | #FCFFDE → #E4FFF5 → #E9F4FF → #FEE6FF |

## Contrast

글자는 바탕과 4.5:1 이상 대비를 지킵니다.

| 글자 / 바탕 | 대비 | 판정 |
| --- | --- | --- |
| `text` / `bg` | 16.4:1 | 통과 |
| `text-minimum` / `bg` · `card` | 8.2:1 · 7.3:1 | 통과 |
| `text-primary` / `bg` | 6.3:1 | 통과 |
| `text-warning` / `bg` | 5.6:1 | 통과 |
| `text-success` / `bg` | 9.1:1 | 통과 |
| 흰 글자 / `fill-secondary` | 9.9:1 | 통과 |
| 흰 글자 / `fill-primary` | 4.4:1 | 14px 기준 미달, 15px 이상 500으로 씁니다 |
| `text-disable` / `bg` | 2.7:1 | 비활성 전용 |

## How to use

**Do** — 화면에는 시맨틱 토큰을 씁니다. `var(--text-sub)`처럼 씁니다.

**Do** — 누를 수 있는 요소의 hover는 `border-secondary`로 표현합니다.

**Don't** — 청보라를 넓은 면에 깔지 않습니다.

**Don't** — 경고색을 강조용으로 쓰지 않습니다.
