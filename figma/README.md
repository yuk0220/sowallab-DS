# Figma 변수 내보내기

`check-sync.py`가 이 폴더의 `variables.json`을 읽어 토큰과 비교합니다. 파일이 없으면 Figma 점검은 건너뜁니다.

## 넣는 방법 (둘 중 하나)

1. **Claude에게 맡기기** — Figma 연결(/mcp에서 figma 인증)을 켠 뒤 "피그마 변수 내보내 줘"라고 하면 Claude가 로컬 변수를 읽어 이 파일을 만듭니다.
2. **직접 내보내기** — Figma 플러그인(예: Variables Export)으로 JSON을 받아 `variables.json`으로 저장합니다.

## 형식

아래 간단한 형식을 권장합니다. Figma REST API(`/v1/files/:key/variables/local`) 응답 그대로 넣어도 읽습니다.

```json
{
  "file": "소월랩 · v26 Foundations",
  "exported": "2026-11-10",
  "variables": [
    { "name": "primary/500", "value": "#6767f1" },
    { "name": "text/sub", "value": "{neutral-200}" }
  ]
}
```

이름의 `/`는 `-`로 바꿔 토큰 이름과 맞춥니다(`primary/500` → `primary-500`). 앞에 붙은 묶음 이름(`Color/`, `Semantic/` 등)은 떼고 비교합니다.
