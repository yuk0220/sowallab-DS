# ToolChip

사용 도구와 지원 파일 형식을 보여 주는 알약 칩입니다. 홈의 흐르는 마키 안에 놓입니다.

## Anatomy

1. Logo (30px 칸) 또는 형식 라벨
2. Name
3. Container

## Variants

| Variant | 구성 |
| --- | --- |
| Tool | Tools 에셋 로고 + 도구 이름 |
| File format | 대문자 라벨(10.5px) + 확장자 |

## Size

높이 60px(640px 이하 52px), 좌우 20~26px, 15px 500, `radius-full`.

## States

| 상태 | 로고 색 |
| --- | --- |
| Default | `muted-foreground` |
| Hover | `foreground` |

## Marquee

세 줄이 서로 다른 속도와 방향(64초, 역방향 58초)으로 흐르고, hover 때 멈춥니다. 양 끝 6%는 페이드로 흐립니다.

## How to use

**Do** — 로고는 면적이 비슷해 보이도록 크기를 보정합니다.

**Don't** — 로고를 원래 브랜드 색으로 칠하지 않습니다. 모두 단색입니다.
