# sowallab Design System

sowallab 디자인 시스템은 소월랩 웹사이트와 브랜드 자료를 같은 언어로 만들 수 있도록 돕습니다. 색상, 타이포그래피, 간격 같은 기초 요소와 컴포넌트, 글쓰기 규칙으로 구성되어 있습니다.

## What is sowallab

소월랩(sowallab)은 제조기업이 제품을 더 쉽게 소개하고 업무 시간을 줄일 수 있도록 돕습니다. 도면과 제품 데이터로 3D 영업자료, 홈페이지, 제품 영상을 만들고, 반복 업무는 AI로 자동화합니다.

이 시스템은 sowallab.com 리뉴얼 프로토타입(v30, 개발 전달용 확정본)과 sowallab DS에서 가져왔습니다. 웹사이트, 브랜드 가이드, 회사소개서 PDF의 기준으로 씁니다.

## Design Principles

| 원칙 | 설명 |
| --- | --- |
| **Quiet** | 바탕은 무채색으로 두고, 청보라는 꼭 필요한 곳에만 씁니다. |
| **Flat** | 버튼과 카드는 평면입니다. 깊이는 그림자 대신 바탕 밝기와 선으로 나눕니다. |
| **Plain** | 50대 독자도 한 번에 이해하는 쉬운 말로 씁니다. |
| **Calm** | 움직임은 은은하게 두고, '동작 줄이기'에서는 모두 멈춥니다. |

## Getting Started

처음이라면 아래 순서로 읽어 보세요.

1. **Color**에서 바탕·글자·선 토큰과 청보라를 쓰는 자리를 확인합니다.
2. **Typography**와 **Grid**에서 글자 크기와 화면 구성을 확인합니다.
3. 만들 화면에 맞는 컴포넌트를 골라 문서의 Do / Don't를 확인합니다.
4. 문구는 **Writing** 가이드에 맞춰 다듬습니다.

## Foundations

| 문서 | 내용 |
| --- | --- |
| Color | 원색, 시맨틱 토큰, 청보라를 쓰는 자리, 대비 |
| Typography | 웹 스타일 10개, 제품 UI 스타일 15개, 줄바꿈 |
| Grid | 간격 단계, 컨테이너, 그리드, 반응형 기준점 |
| Icons | lucide 크기, 자리별 아이콘, 기능 아이콘 16종 |
| Elevation | 층, 그림자, 선, 디밍 |
| Motion | 시간과 곡선, 반복 움직임, 동작 줄이기 |
| Writing | 말투, 이름 표기, 버튼·안내·오류 문구 |
| Tokens | 토큰 묶음, 이름 규칙, 반경, 쓰는 법 |

## Components

컴포넌트 20개가 있습니다. 문서마다 Anatomy, Variants, Usage, How to use 순서로 정리되어 있습니다.

| 분류 | 컴포넌트 |
| --- | --- |
| Actions | Button |
| Navigation | SiteHeader, Footer, Tabs, Filter |
| Cards | AreaCard, SolutionCard, Carousel, NewsCard, Banner |
| Forms | Field, ChoiceChip, Stepper |
| Feedback | Notice |
| Display | Badge, CategoryChip, ToolChip, FlowList |
| Overlays | FloatingWidget, BrochureModal |

스타일은 `components/bundle.css` 한 파일에 원본 클래스 이름 그대로 들어 있습니다. 실서비스 권장 스택은 React + TypeScript + Tailwind + shadcn/ui, 3D는 react-three-fiber, 아이콘은 lucide-react입니다.

## Assets

| 그룹 | 내용 |
| --- | --- |
| Logos | 심볼, 워드마크, 로크업(흰색·검정), 파비콘. 지금은 이미지에서 따라 그린 임시 벡터입니다. |
| Brand | OG 이미지, 앱 아이콘 |
| Tools | 사용 도구 로고 16개(Simple Icons) |
| Photography | 현행 사이트의 공장·설비 사진 9장 |
| Video | 히어로·배너의 구(球) 루프 영상 |

## Open Issues

개발 전에 정해야 하는 것입니다.

- 로고 원본 벡터(AI/SVG)
- 로봇 3D 사양 수치(지금은 예시 값)
- 문의 접수처와 개인정보 처리 문구
- 뉴스룸 글 관리 방식(데이터 파일 또는 CMS)
- 도구 로고 사용 허가(SolidWorks·Fusion 360·Substance 3D는 다쏘·Autodesk·Adobe 로고로 대신함)
- 히어로 최종 비주얼, 회사 소개서 PDF

## Not Included

- Pretendard 글꼴 파일은 저장소에 없어 jsDelivr 웹폰트(v1.3.9)를 불러옵니다.
- 히어로 배경(`beams-background.tsx`, `wave-mesh.tsx`)과 three.js 로봇 뷰어는 캔버스 애니메이션이라 미리보기가 없습니다.
- 도구 마키(3줄 흐르는 띠)는 카드로 만들지 않았습니다. 칩 하나는 ToolChip에 있습니다.
- `bundle.css`의 `.bizcard`·`.org-group`은 원본 CSS에만 남아 있고 화면에서 쓰이지 않습니다.
- 원본의 라이트 테마 값은 "다크 단일 제공" 결정에 따라 넣지 않았습니다.
