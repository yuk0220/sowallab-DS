# 이 저장소에서 일하는 Claude에게

sowallab DS의 사람용 독스 사이트예요. 기준은 AI용 Design System 아티팩트(https://claude.ai/artifact/HP4CV4eEUqCwJsCKu4jdDb)이고, `ai/`는 그 사본이에요.

- "DS 정비하자"라는 말을 들으면 `MAINTENANCE.md`의 순서를 따라요.
- 토큰이나 규칙을 바꿀 때는 아티팩트 → `ai/` → 독스 → Figma 순서로 네 곳을 다 바꿔요. 한 곳만 고치지 않아요.
- 고친 뒤에는 `python3 tools/check-sync.py`가 "모두 맞음"이 될 때까지 확인하고, `DECISIONS.md`에 한 줄을 남겨요.
- `tokens.css`, `data.json`은 직접 고치지 않아요. `tokens.json`을 고치고 `python3 tools/build-tokens.py`를 돌려요.
- 규칙을 혼자 새로 만들지 않아요. 사람이 점검하고 정한 것만 넣어요. 애매하면 `MAINTENANCE.md`의 '열린 일'에 적고 물어봐요.
- 답과 문서는 한국어로, 쉬운 말로 써요.
