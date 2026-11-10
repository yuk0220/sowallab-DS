# CategoryChip

뉴스의 분류를 색과 이름으로 함께 보여 주는 칩입니다. 뉴스 카드 아래쪽과 기사 상세 제목 아래에 씁니다.

## Anatomy

1. Label
2. Container (분류 색 13%)

## Variants

| 분류 | 색 토큰 |
| --- | --- |
| 기사 | `cat-1` |
| 3D 카탈로그 | `cat-2` |
| 시뮬레이션 | `cat-3` |
| 영업 도구 | `cat-4` |

## Size

높이 22px, 좌우 9px, 12px 500, `radius-full`.

## Code

```html
<span class="cat" data-cat="시뮬레이션">시뮬레이션</span>
```

`data-cat` 값으로 색이 정해집니다. 바탕은 분류 색 13%, 글자는 분류 색 88%입니다.

## How to use

**Do** — 분류 이름을 늘 함께 씁니다.

**Don't** — 색만 보이는 점이나 막대로 분류를 나타내지 않습니다.
