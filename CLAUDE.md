# 이 저장소에서 일하는 Claude에게

sowallab DS의 사람용 독스 사이트예요. 기준은 AI용 Design System 아티팩트(https://claude.ai/artifact/HP4CV4eEUqCwJsCKu4jdDb)이고, `ai/`는 그 사본이에요.

- "DS 정비하자"라는 말을 들으면 `MAINTENANCE.md`의 순서를 따라요.
- 에이전틱 DS로 키워 가는 방향은 `AGENTIC.md`의 5단계(Audit → Structure → Connect → Instruct → Validate)를 참고해요. 정비가 끝나면 그 문서의 '지금 상태' 표도 고쳐요.
- main에 바로 커밋하지 않아요. `ds/날짜-주제` 브랜치에서 고칠 때마다 커밋·푸시하고 PR을 열어요. 커밋 메시지는 `[영역] 무엇`.
- 토큰이나 규칙을 바꿀 때는 `ai/` → 독스 → Figma를 PR 안에서 맞추고, DS 아티팩트는 사람이 머지한 뒤에 올려요. 한 곳만 고치지 않아요.
- 머지는 사람이 해요. 사람이 "머지해"라고 하면 `gh pr merge --squash --delete-branch`로 해요.
- 고친 뒤에는 `python3 tools/check-sync.py`가 "모두 맞음"이 될 때까지 확인하고, `DECISIONS.md`에 한 줄을 남겨요.
- `tokens.css`, `data.json`은 직접 고치지 않아요. `tokens.json`을 고치고 `python3 tools/build-tokens.py`를 돌려요.
- 규칙을 혼자 새로 만들지 않아요. 사람이 점검하고 정한 것만 넣어요. 애매하면 `MAINTENANCE.md`의 '열린 일'에 적고 물어봐요.
- 답과 문서는 한국어로, 쉬운 말로 써요.
