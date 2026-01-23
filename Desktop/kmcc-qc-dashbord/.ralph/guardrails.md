# Guardrails (교훈)

프로젝트: KMCC QC 대시보드

---

## 기본 규칙

1. 파일을 수정하기 전에 반드시 읽을 것
2. TypeScript 오류가 있으면 태스크를 완료로 표시하지 말 것
3. 빌드가 실패하면 반드시 수정할 것
4. 환경 변수는 하드코딩하지 말고 process.env 사용
5. API 응답은 항상 에러 케이스를 처리할 것

## 프로젝트 특이사항

- Next.js 16 + React 19 사용
- BigQuery 연동 (splyquizkm 프로젝트)
- Google AI (Gemini) API 사용
- 날짜 형식: "YYYY-MM-DD" 표준 사용
