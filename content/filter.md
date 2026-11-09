# Filter

목록을 분류별로 걸러 보는 알약 버튼 묶음입니다. 뉴스룸에 씁니다.

## Anatomy

1. Label
2. Container

## Size

높이 36px, 좌우 16px, 14px, `radius-full`. 버튼 사이 8px.

## States

| 상태 | 모양 |
| --- | --- |
| Default | `border` 테두리 + `card` 바탕 + `muted-foreground` 글자 |
| Selected (`aria-pressed="true"`) | `fill-primary` 바탕 + `primary-foreground` 글자 |

## Usage

분류는 전체 / 기사 / 3D 카탈로그 / 시뮬레이션 / 영업 도구입니다. 640px 이하에서는 한 줄로 두고 가로로 스크롤합니다.

## How to use

**Do** — 맨 앞에 '전체'를 둡니다.

**Don't** — 선택 글자를 14px보다 작게 쓰지 않습니다. 청보라 위 흰 글자 대비가 4.4:1로 빠듯합니다.
