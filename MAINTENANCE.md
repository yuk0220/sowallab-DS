# DS 정비 루틴

sowallab DS는 아직 공사 중이에요. 스킬로 만들기 전까지 틈틈이 이 루틴으로 다듬어요. 한 번에 15~30분, 문서 한두 개씩 보면 충분해요.

Claude에게 **"DS 정비하자"**라고 하면 이 순서대로 같이 진행해요.

## 원칙

DS는 두 벌로 관리하고, 둘이 늘 같아야 해요.

| 구분 | 무엇 | 어디 |
| --- | --- | --- |
| **AI용 (기준)** | Design System 아티팩트. 토큰·가이드·컴포넌트 규칙 | https://claude.ai/artifact/HP4CV4eEUqCwJsCKu4jdDb · 사본은 `ai/` |
| **사람용 (거울)** | 독스 사이트. 나중에 블로그, 디자인 센터 사이트도 여기 붙어요 | 이 저장소 → https://yuk0220.github.io/sowallab-DS/ |
| **Figma** | 소월랩 파일 'v26 · Foundations / Components'의 variable | `figma/variables.json`으로 내보내 비교 |

- 값과 이름은 AI용이 기준이에요. 사람용과 Figma는 AI용을 따라가요.
- 셋 중 하나만 고치고 끝내지 않아요. 바꾸면 세 곳 다 바꿔요.
- 작업 중에는 커밋만 하고, 마무리할 때 점검을 통과한 것만 main에 올려요.
- 사람용은 설명을 더 풀어 써도 되지만, 토큰 이름·값·규칙(Do/Don't)은 똑같이 써요.

## 정비 한 번 하는 순서

PR 없이 main에서 작업하고, 작업을 마무리할 때 한 번에 main에 올려요.

1. **받아오기**
   - `git pull`로 main을 최신으로 맞춰요.
   - AI용 DS 아티팩트를 `ai/`에 다시 내려받아요. `ai/SYNC.txt`에 버전과 날짜를 적어요.
   - Figma variable을 `figma/variables.json`으로 내보내요(방법은 `figma/README.md`).
2. **기계 점검**
   - `python3 tools/check-sync.py`
   - 토큰, 컴포넌트 목록, 문서 속 토큰 이름, Figma 변수, 굵기 600 상한을 봐요.
3. **사람 점검**
   - 아래 점검표에서 다음 차례 문서를 한두 개 골라 읽어요.
   - 이상한 곳, 헷갈리는 말, 규칙으로 만들 것을 메모해요.
4. **고치고 커밋하기** — 고칠 때마다 커밋만 하고, 아직 올리지 않아요.
   1. `ai/` 사본
   2. 독스(`tokens.json` → `python3 tools/build-tokens.py`, `content/*.md`)
   3. Figma variable
   4. `DECISIONS.md`에 "무엇을, 왜" 한 줄
   - 커밋 메시지는 `[영역] 무엇` 한 줄로 써요. 예: `[토큰] success 계열 추가`, `[문서] button Do/Don't 정리`
5. **마무리: main에 올리기**
   - 점검을 다시 돌려 "모두 맞음"인지 봐요. 어긋남이 있으면 올리지 않고 먼저 고쳐요.
   - `git push`로 main에 올려요. GitHub Pages가 다시 만들어지고, GitHub도 점검을 한 번 더 돌려요.
   - DS 아티팩트에 `ai/`의 바뀐 파일을 올리고, `design-system.json`의 `lastChange`를 적어요.
   - 독스 미리보기 아티팩트도 다시 올려요.
   - `AGENTIC.md`의 '지금 상태' 표가 달라졌으면 고쳐요.

## 방향

어디까지 왔는지는 `AGENTIC.md`의 5단계와 '지금 상태' 표로 봐요. 처음에는 Button과 Field부터 다듬어요.

## 점검표

사람이 직접 읽고 확인한 날짜를 적어요. 비어 있으면 아직 안 본 문서예요.

| 묶음 | 문서 | 점검한 날 | 메모 |
| --- | --- | --- | --- |
| 시작 | getting-started | | |
| 시작 | assets | | |
| 기초 | color | | |
| 기초 | typography | | |
| 기초 | grid | | |
| 기초 | icons | | |
| 기초 | elevation | | |
| 기초 | motion | | |
| 기초 | writing | | |
| 기초 | tokens | | |
| 컴포넌트 | button | | |
| 컴포넌트 | site-header | | |
| 컴포넌트 | footer | | |
| 컴포넌트 | tabs | | |
| 컴포넌트 | filter | | |
| 컴포넌트 | area-card | | |
| 컴포넌트 | solution-card | | |
| 컴포넌트 | carousel | | |
| 컴포넌트 | news-card | | |
| 컴포넌트 | banner | | |
| 컴포넌트 | field | | |
| 컴포넌트 | choice-chip | | |
| 컴포넌트 | stepper | | |
| 컴포넌트 | notice | | |
| 컴포넌트 | badge | | |
| 컴포넌트 | category-chip | | |
| 컴포넌트 | tool-chip | | |
| 컴포넌트 | flow-list | | |
| 컴포넌트 | floating-widget | | |
| 컴포넌트 | brochure-modal | | |
| 모티프 | ORBIT (아직 문서 없음) | | 히어로·솔루션 다이어그램용 궤도 그래픽 |

## 열린 일

정비하다 판단이 필요한 것을 적어 두는 곳이에요.

- [x] 뉴스 카드 그래픽 제목(`.gen b`) 굵기 700 → 600으로 낮춤 (2026-11-10)
- [ ] Figma 연결: /mcp에서 figma 인증 후 첫 변수 내보내기
- [ ] ORBIT 모티프를 AI용·사람용 문서에 넣기
