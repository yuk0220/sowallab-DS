# Field

라벨과 입력칸을 묶은 입력 요소입니다. 문의 양식과 회사 소개서 받기 폼에 씁니다.

## Anatomy

1. Label (14px 500)
2. Optional mark ("선택", 12px `muted-foreground`)
3. Input 또는 Textarea
4. Error message (12px)

## Size

| 항목 | 값 |
| --- | --- |
| 입력칸 높이 | 42px |
| 좌우 여백 | 12px |
| 반경 | `radius-input` 8px |
| 글자 | 14px |
| 라벨과 입력칸 사이 | 8px |

## States

| 상태 | 모양 |
| --- | --- |
| Default | `input` 테두리(white 32%) + `card` 바탕 |
| Placeholder | `muted-foreground` |
| Focus | `foreground` 테두리 + `focus-ring` |
| Error (`aria-invalid="true"`) | `foreground` 점선 테두리 + 아래 오류 문구 |

## Layout

두 칸을 나란히 둘 때는 `div.two`(gap 16px)를 쓰고, 560px 이하에서는 1열로 바꿉니다.

## How to use

**Do** — placeholder는 '예:'로 실제 값을 보여 줍니다.

**Do** — 오류 문구는 "회사명을 입력해 주세요."처럼 할 일을 씁니다.

**Don't** — 라벨 없이 placeholder만 두지 않습니다.
