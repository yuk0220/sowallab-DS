# Notice

사용자에게 다음에 일어날 일을 알려 주는 안내 콜아웃입니다. 문의 유형 탭 아래에 씁니다.

## Anatomy

1. Info icon (18px, `primary-300`)
2. Message (14px 500, `primary-100`)
3. Container (`primary-t16` 바탕)

## Size

안쪽 여백 12px 16px, `radius-media` 12px, 테두리 없음.

## Motion

문의 유형을 바꾸면 문구가 450ms 페이드로 바뀝니다.

## Code

```html
<p class="notice">신청 후 24시간 이내에 회신 메일로 웹 3D 시안 링크를 보내 드립니다.</p>
```

아이콘은 CSS 마스크로 붙으므로 마크업에 넣지 않습니다.

## How to use

**Do** — 한두 문장, 존댓말 평서문으로 씁니다.

**Don't** — 오류 안내에 쓰지 않습니다. 오류는 Field의 오류 문구로 보여 줍니다.
