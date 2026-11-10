# Typography

타이포그래피는 글자 크기, 굵기, 줄 높이, 자간을 조합해 정보의 위계와 가독성을 만듭니다. sowallab은 한 가지 서체와 세 가지 굵기로 차분한 목소리를 유지합니다.

## Basic typography

영문을 포함한 모든 글자에 **Pretendard**를 씁니다. 굵기는 SemiBold 600, Medium 500, Regular 400 세 가지만 씁니다. 가장 큰 제목도 600을 넘지 않습니다.

대체 서체는 `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`입니다.

## Word break

한국어는 `word-break: keep-all`로 단어 단위로 줄을 바꿉니다. 제목은 `text-wrap: balance`로 줄 길이를 고르게 맞춥니다.

## Web style

웹사이트에 쓰는 스타일입니다. 큰 제목은 화면 너비에 따라 줄어듭니다.

| 명칭 | 크기 | 줄 높이 | 굵기 | 자간 |
| --- | --- | --- | --- | --- |
| Display | 40 → 68px | 1.12 | 600 | -0.04em |
| H1 | 32 → 46px | 1.2 | 600 | -0.035em |
| H2 | 26 → 36px | 1.28 | 600 | -0.03em |
| H3 | 20px | 1.4 | 600 | -0.02em |
| Lead | 16 → 18px | 1.7 | 400 | |
| Body | 16px | 1.6 | 400 | -0.01em |
| Body sm | 14px | 1.6 | 400 | |
| Nav | 15px | | 600 | -0.04em |
| Mono | 12px | 1.4 | 500 | 0.08em |
| Mono sm | 11.5px | 1.4 | 400 | 0.02em |

## Usage

| 명칭 | 쓰는 곳 |
| --- | --- |
| Display | 히어로 제목. 한 페이지에 하나만 씁니다. |
| H1 | 페이지 제목, 배너 제목 |
| H2 | 섹션 제목, 솔루션 영역 제목 |
| H3 | 카드 제목. 뉴스 카드는 18px / 1.45로 씁니다. |
| Lead | 제목 아래 소개 문장. 한 줄은 34em 안쪽으로 둡니다. |
| Body | 본문 |
| Body sm | 카드 요약, 보조 설명 |
| Nav | 헤더 메뉴 |
| Mono | 영문 대문자 라벨 |
| Mono sm | 날짜, 사양 수치 |

## Product UI style

제품 화면(sowallab DS)에 쓰는 스타일입니다. Heading은 제목, Body는 본문과 안내, Label은 버튼·입력창·상태값 같은 짧은 라벨에 씁니다.

| 명칭 | 크기 | 줄 높이 | 굵기 |
| --- | --- | --- | --- |
| Heading 2xlarge-bold | 28px | 36px | 600 |
| Heading xlarge-bold | 24px | 32px | 600 |
| Heading large-bold | 20px | 24px | 600 |
| Heading medium-bold / medium | 18px | 22px | 600 / 500 |
| Heading small-bold | 16px | 20px | 600 |
| Heading small | 14px | 20px | 600 |
| Heading xsmall | 12px | 16px | 600 |
| Body large / medium / small | 16 / 14 / 12px | 24 / 20 / 16px | 400 |
| Label large / medium / small / xsmall | 16 / 14 / 12 / 10px | 24 / 20 / 16 / 16px | 500 |

## Numbers

날짜, 번호, 사양처럼 숫자가 세로로 줄 서는 곳은 `font-variant-numeric: tabular-nums`를 씁니다.

## How to use

**Do** — 히어로 제목에만 흰색 → `neutral-300` 세로 그라디언트 글자를 씁니다.

**Do** — 강조는 `primary-300` 글자색으로 한 구절만 줍니다.

**Don't** — 700 이상 굵기를 쓰지 않습니다.

**Don't** — 기울임체나 밑줄로 강조하지 않습니다. 밑줄은 링크에만 씁니다.
