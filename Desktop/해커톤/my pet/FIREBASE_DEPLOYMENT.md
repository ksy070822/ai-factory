# Firebase Cloud Functions 배포 가이드

## 개요

OpenAI API 호출 시 CORS 문제를 해결하기 위해 Firebase Cloud Functions를 백엔드 프록시로 사용합니다.

## 배포 방법

### 1. Firebase CLI 로그인

```bash
firebase login
```

브라우저가 열리면 Google 계정으로 로그인합니다.

### 2. Firebase Functions 배포

```bash
cd "Desktop/해커톤/my pet"
firebase deploy --only functions
```

배포가 완료되면 다음과 같은 URL이 생성됩니다:
```
https://us-central1-ai-factory-c6d58.cloudfunctions.net/openaiProxy
```

### 3. 배포 확인

배포가 성공하면 다음 메시지를 확인할 수 있습니다:
```
✔  functions[openaiProxy(us-central1)] Successful create operation.
Function URL (openaiProxy): https://us-central1-ai-factory-c6d58.cloudfunctions.net/openaiProxy
```

## 코드 변경 사항

다음 파일들이 Firebase Functions 프록시를 사용하도록 업데이트되었습니다:

### 1. `functions/index.js` (새 파일)
- OpenAI API 프록시 Cloud Function
- CORS 헤더 자동 설정
- API 키를 백엔드에서 처리

### 2. `src/services/ai/informationAgent.js`
- Line 193-217: Firebase Function URL 사용
- OpenAI API 직접 호출 → Firebase 프록시 호출로 변경

### 3. `src/services/ai/collaborativeDiagnosis.js`
- Line 239-257: Firebase Function URL 사용
- OpenAI API 직접 호출 → Firebase 프록시 호출로 변경

## 환경 변수 (선택사항)

다른 Firebase 프로젝트나 커스텀 URL을 사용하려면 `.env` 파일에 추가:

```bash
VITE_OPENAI_PROXY_URL=https://your-region-your-project.cloudfunctions.net/openaiProxy
```

설정하지 않으면 기본값인 `https://us-central1-ai-factory-c6d58.cloudfunctions.net/openaiProxy`가 사용됩니다.

## 문제 해결

### 인증 오류
```bash
Error: Failed to authenticate
```
→ `firebase login`을 먼저 실행하세요.

### 배포 권한 오류
```bash
Error: HTTP Error: 403
```
→ Firebase 프로젝트(ai-factory-c6d58)에 대한 권한이 있는지 확인하세요.

### Function 실행 오류
- Firebase Console → Functions 탭에서 로그 확인
- API 키가 올바르게 전달되는지 확인

## 테스트

배포 후 앱에서 AI 진단을 실행하여 다음을 확인하세요:

1. ✅ CORS 오류가 없어야 함
2. ✅ GPT-4o Vision 이미지 분석이 작동해야 함
3. ✅ 협진 시스템의 제2 의견이 작동해야 함
4. ✅ Browser Console에 "⚠️ OpenAI API 키가 없습니다" 경고가 없어야 함

## 참고

- Firebase Functions 무료 플랜: 하루 125,000회 호출, 월 2백만회 호출
- 프레젠테이션 데모용으로는 충분합니다
- 필요시 Firebase Console에서 사용량 모니터링 가능
