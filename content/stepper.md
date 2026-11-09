# Stepper

여러 단계로 나뉜 양식에서 지금 어느 단계인지 보여 줍니다. 문의 양식 오른쪽 위에 둡니다.

## Anatomy

1. Step number (20px 원)
2. Step label
3. Container (높이 30px 알약)

## States

| 상태 | 번호 원 | 글자 |
| --- | --- | --- |
| Upcoming | `border` 테두리 | `muted-foreground` |
| Current (`on`) | `foreground` 채움 | `foreground` + `muted` 바탕 |
| Done (`done`) | `accent` 채움 + 흰 숫자 | `muted-foreground` |

## Usage

단계는 두 개입니다: 1) 문의 내용 2) 연락처.

## How to use

**Do** — 단계 이름은 짧은 명사로 씁니다.

**Don't** — 단계를 누르면 이동하게 만들지 않습니다. 이동은 양식 아래 버튼으로 합니다.
