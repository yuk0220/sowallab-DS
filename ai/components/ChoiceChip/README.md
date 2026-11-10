# ChoiceChip

여러 항목을 고르는 알약 모양 체크입니다. 문의 양식의 '보유 자료'에 씁니다.

## Anatomy

1. Check mark (14px 원)
2. Label
3. Container

## Size

높이 38px, 좌우 14px, 14px, `radius-full`. 칩 사이 8px.

## States

| 상태 | 모양 |
| --- | --- |
| Default | `input` 테두리, 빈 원 |
| Checked | `accent` 테두리 + `accent`로 채운 원 |

## Consent

개인정보 동의는 칩 대신 `label.consent`(16px 기본 체크박스, `accent-color: accent`)를 씁니다. 자세한 문구는 `consent-detail`(`muted` 바탕, `radius-input`)에 둡니다.

## How to use

**Do** — '없음'처럼 해당 없음을 고를 수 있게 합니다.

**Don't** — 하나만 골라야 할 때는 쓰지 않습니다.
