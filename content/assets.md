# Assets

로고, 브랜드 이미지, 도구 로고, 사진, 영상 파일입니다. 원본 파일을 그대로 쓰고, 다시 그리거나 색을 바꾸지 않습니다.

## Logos

sowallab 로고. 지금은 이미지에서 따라 그린 **임시 벡터**다(원본 AI/SVG 대기 중).

- `lockup-white.svg` — 흰 잉크(#FFFFFF). 어두운 바탕(헤더, 푸터, OG)에 쓴다. 헤더 높이 26px, 푸터 24px.
- `lockup_lo.svg` — 검정 잉크(#000). 밝은 바탕 전용(회사소개서 PDF 등).
- `wordmark_lo.svg` — 글자만, 검정 잉크. `symbol.svg` — 구(球) 심볼만, 검정 잉크. 어두운 바탕에 쓸 때는 인라인 SVG로 `currentColor`를 입힌다.
- `favicon.svg` — `neutral-900` 둥근 사각(r14/64) + 흰 심볼. 플로팅 버튼 아이콘에도 쓴다.
- 이미지 없는 기사 썸네일에는 lockup을 16% 불투명도로 `thumb-default` 위에 둔다.

## Brand

배포용 브랜드 이미지. 실서비스에서는 사이트 루트(`/`)에 둔다.

- `og-image.jpg` (1200×630) — 링크 미리보기. 검정 바탕 + 가운데 흰 로고(폭 약 43%). og:image는 절대 주소여야 한다.
- `apple-touch-icon.png` (180px, 모서리 없음 — iOS가 둥글림), `icon-512.png` (안드로이드 홈 화면).
- theme-color는 `neutral-900` #15171D.

## Tools

'사용 도구와 지원 파일 형식' 마키에 쓰는 도구 로고(Simple Icons, 24×24 단색 SVG). 잉크는 검정(fill 없음 = 기본 검정)이라 어두운 바탕에서는 인라인 SVG로 `currentColor`(`muted-foreground`, hover `foreground`)를 입힌다.

- 면적이 비슷해 보이도록 로고마다 크기를 보정한다.
- SolidWorks·Fusion 360·Substance 3D는 개별 로고가 없어 다쏘(`dassaultsystemes.svg`)·Autodesk·Adobe 로고로 대신했다. 사용 허가는 아직 확인 전.

## Photography

현행 sowallab.com의 공장·설비 사진. 사람 얼굴 없이 설비와 공정을 보여 준다.

- `hero-factory.jpg`, `hero-factory-m.jpg`(모바일) — 공장 전경. 무료 3D 시안 기사 대표 이미지.
- `rec-*.jpg` — 뉴스룸 기사 이미지(컨베이어, 필름, LCD, 라인, 로봇, 툴체인저, 용접). 썸네일은 16:10, `radius-thumb`, 안쪽 1px `border`.

## Video

심볼 구(球) 루프 영상. 검정 배경 영상이라 원형 마스크(`radial-gradient(circle, #000 58%, transparent 70%)`) + `mix-blend-mode: screen`으로 배경을 지운다. 음소거·반복·인라인 재생, '동작 줄이기'에서는 멈춘다.

- `sphere_mono.mp4` — 무채색. 홈 히어로 제목 위(60~80px), 6초 주기로 8px 떠오른다. 포스터 `sphere_mono_poster.jpg`.
- `sphere.mp4` — 컬러. 무료 3D 시안 배너 오른쪽(150~210px).
