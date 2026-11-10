sowallab 로고. 지금은 이미지에서 따라 그린 **임시 벡터**다(원본 AI/SVG 대기 중).

- `lockup-white.svg` — 흰 잉크(#FFFFFF). 어두운 바탕(헤더, 푸터, OG)에 쓴다. 헤더 높이 26px, 푸터 24px.
- `lockup_lo.svg` — 검정 잉크(#000). 밝은 바탕 전용(회사소개서 PDF 등).
- `wordmark_lo.svg` — 글자만, 검정 잉크. `symbol.svg` — 구(球) 심볼만, 검정 잉크. 어두운 바탕에 쓸 때는 인라인 SVG로 `currentColor`를 입힌다.
- `favicon.svg` — `neutral-900` 둥근 사각(r14/64) + 흰 심볼. 플로팅 버튼 아이콘에도 쓴다.
- 이미지 없는 기사 썸네일에는 lockup을 16% 불투명도로 `thumb-default` 위에 둔다.
