# BrochureModal

메일 주소를 받아 회사 소개서를 보내는 모달입니다. 사이트에서 화면을 가리는 모달은 이것 하나입니다.

## Anatomy

1. Backdrop (`overlay` + blur 4px)
2. Container (`card`, 최대 440px, `shadow-modal`)
3. Close button (34px 원, `X`)
4. Title, Description
5. Form — 회사명, 담당자 성함, 이메일, 개인정보 동의
6. Submit (`btn btn-primary btn-lg`, 전체 폭)

## States

| 상태 | 모양 |
| --- | --- |
| Input | 폼 |
| Error | 빈 필수 항목 아래 오류 문구 |
| Done | 44px 원 아이콘 + 완료 문구 |

## Usage

접수처는 contact@sowallab.com입니다. 프로토타입은 mailto로 메일 작성 화면을 띄우고, 실서비스는 서버에서 접수한 뒤 소개서 PDF를 자동으로 보내는 방식을 권장합니다(미결정).

## How to use

**Do** — 열릴 때 첫 입력칸에 포커스를 둡니다.

**Do** — 바깥을 누르거나 Esc를 누르면 닫히게 합니다.

**Don't** — 이 모달 외에 다른 모달을 만들지 않습니다.
