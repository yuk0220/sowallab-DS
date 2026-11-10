# Tokens

디자인 토큰은 색상, 간격, 반경, 그림자 값을 이름으로 묶어 코드와 디자인이 같은 값을 쓰도록 돕습니다.

## Theme

다크 테마(`dark`) 하나만 있습니다. 원본 프로토타입에는 라이트 값도 있지만, 그래픽과 배너의 대비 문제로 실서비스에서는 쓰지 않기로 했습니다.

## Token groups

| 묶음 | 개수 | 예 |
| --- | --- | --- |
| Atomic color | 58 | `primary-500`, `white-8` |
| Semantic color | 59 | `text-sub`, `fill-primary-hover` |
| shadcn alias | 12 | `background`, `card`, `muted`, `ring` |
| Category · Figure | 8 | `cat-2`, `thumb-default` |
| Spacing | 14 | `space-4`, `container-max` |
| Radius | 10 | `radius-card`, `radius-full` |
| Shadow | 6 | `shadow-modal` |

## Naming

시맨틱 토큰은 `{요소}-{역할}-{상태}` 순서로 이름을 붙입니다.

| 자리 | 값 |
| --- | --- |
| 요소 | text, icon, border, fill, layer |
| 역할 | primary, secondary, warning, success, sub, minimum |
| 상태 | hover, pressed, disable, selected |

예: `text-secondary-hover`, `fill-primary-pressed`

원색은 `{계열}-{단계}`로, 투명도는 `{계열}-t{퍼센트}` 또는 `white-{퍼센트}`로 씁니다.

## Radius

| 토큰 | 값 | 쓰는 곳 |
| --- | --- | --- |
| `radius-full` | 999px | 버튼, 탭, 필터, 배지, 칩 |
| `radius-footcard` | 20px | 푸터 연락처 카드 |
| `radius-card` | 16px | 카드, 배너, 모달 |
| `radius-media` | 12px | 미디어, 안내 콜아웃 |
| `radius-thumb` | 10px | 뉴스 썸네일 |
| `radius-input` | 8px | 입력창, 동의 상세 |

## Usage

CSS 변수로 씁니다.

```css
.card { background: var(--card); border-radius: var(--radius-card); }
.lead { color: var(--text-minimum); }
```

shadcn/ui 컴포넌트는 별칭을 읽습니다: `background`, `card`, `foreground`, `muted`, `muted-foreground`, `border`, `input`, `ring`, `primary`, `primary-foreground`, `accent`.

## Source

Figma 소월랩 파일의 'v26 · Foundations / Components' 페이지에 같은 변수, 텍스트 스타일, 컴포넌트가 있습니다. 코드 기준은 sowallab-site 저장소의 `tokens/tokens.css`와 `docs/DESIGN-SYSTEM.md`입니다.

## How to use

**Do** — 화면에는 시맨틱 토큰을 쓰고, 원색은 토큰 정의와 그래픽에만 씁니다.

**Don't** — 색상이나 간격 값을 코드에 직접 적지 않습니다.
