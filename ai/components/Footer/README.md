# Footer

모든 페이지 아래의 푸터. 연락처 카드 + 링크 열 + 저작권 줄.

- 연락처 카드 `div.foot-card`: `card` 바탕, `radius-footcard`(20px), 안쪽 clamp(24px, 3.2vw, 40px). 왼쪽 `.fc-main`에 로고(`lockup-white.svg`, 높이 24px) · 한 줄 소개(`.bc-k` 13px `muted-foreground`) · 메일 주소(`.mail` clamp(22px, 2.4vw, 32px) 600, mailto 링크). 오른쪽 `.fc-cta`에 "회사 소개서 받기"(`btn btn-outline btn-lg` + lucide `Download`)와 "무료 3D 시안 신청"(`btn btn-secondary btn-beam-dark btn-lg`). 뒤에 심볼을 3.5% 불투명도로 크게 깐다.
- 링크 열 `div.foot-cols`: 메뉴 · 솔루션 · 담당 조직(팀 이름 + 하는 일). 열 제목 `.fh` 12px 600, 링크 14px `muted-foreground` → hover `foreground`.
- 저작권 줄 `div.foot-bottom`: 위 `border` 선, 12px. 오른쪽 88px는 플로팅 버튼 자리로 비운다.
- 860px 이하: 카드 1열, 링크 2열(담당 조직은 전체 폭). 480px 이하: 카드 버튼이 한 줄씩 꽉 찬다.
- "회사 소개서 받기"는 [BrochureModal](../BrochureModal)을 연다.
