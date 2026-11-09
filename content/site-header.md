# SiteHeader

모든 페이지 위에 고정되는 헤더입니다. 어디서든 주요 페이지와 무료 3D 시안 신청으로 이동할 수 있게 돕습니다.

## Anatomy

1. Logo (`lockup-white.svg`, 높이 26px)
2. Navigation (홈 / 솔루션 / 뉴스룸 / 문의하기)
3. CTA (`btn btn-secondary btn-beam-dark btn-sm`)
4. Menu button (860px 이하)

## Size

높이 64px, 아래 `border` 선. 바탕은 `background` 88% + blur 12px로 아래 내용이 비쳐 보입니다.

## States

| 상태 | 메뉴 글자 |
| --- | --- |
| Default | `muted-foreground` |
| Hover | `foreground` |
| Current (`aria-current="page"`) | `foreground` |

## Responsive

860px 이하에서는 메뉴와 CTA를 숨기고 햄버거 버튼(`Menu`)을 보여 줍니다. 모바일 메뉴는 16px 600 목록이며 항목 사이에 `border` 선을 둡니다.

## How to use

**Do** — 메뉴는 가운데, CTA는 오른쪽에 둡니다.

**Don't** — 헤더에 밝은 빛줄기 버튼(`btn-beam`)을 두지 않습니다. 헤더는 hover 때만 빛나는 어두운 버튼입니다.
