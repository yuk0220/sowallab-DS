# Tabs

같은 자리에서 내용을 바꿔 보여 주는 세그먼트 컨트롤입니다. 솔루션 영역 탭과 문의 유형 탭에 씁니다.

## Anatomy

1. Track (`muted` 바탕)
2. Indicator (선택 배경, `card` + `shadow-tab`)
3. Tab label

## Size

| 항목 | 값 |
| --- | --- |
| 트랙 안쪽 여백 | 4px |
| 탭 높이 | 36px |
| 탭 좌우 여백 | 18px (640px 이하 11px) |
| 글자 | 14px 500 (640px 이하 13.5px) |

## States

| 상태 | 모양 |
| --- | --- |
| Default | `muted-foreground` 글자 |
| Selected | `foreground` 글자 + 선택 배경 |
| Pressed | scale .97 |

## Motion

선택 배경은 380ms cubic-bezier(.32,.72,0,1)로 다음 탭까지 미끄러집니다. 탭을 바꾸면 아래 내용이 500ms 동안 페이드로 바뀝니다.

## Code

```html
<div class="tabs" role="tablist">
  <span class="tab-ind" aria-hidden="true"></span>
  <button class="tab" role="tab" aria-selected="true">3D 영업자료</button>
  <button class="tab" role="tab" aria-selected="false">홈페이지</button>
</div>
```

선택 배경의 위치와 폭은 스크립트로 선택된 탭에 맞춥니다.

## How to use

**Do** — 탭은 2~4개로 둡니다.

**Do** — 좌우 화살표 키로 탭을 옮길 수 있게 합니다.

**Don't** — 페이지 이동에 탭을 쓰지 않습니다. 페이지 이동은 헤더 메뉴로 합니다.
