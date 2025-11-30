# 배포 가이드

## GitHub Pages 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### 배포 URL

배포가 완료되면 다음 URL에서 접근할 수 있습니다:
```
https://ksy070822.github.io/ai-factory/
```

### 자동 배포 설정

1. **GitHub 저장소 설정**
   - 저장소 페이지로 이동: https://github.com/ksy070822/ai-factory
   - Settings → Pages 메뉴로 이동
   - Source를 "GitHub Actions"로 선택

2. **자동 배포**
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - GitHub Actions 탭에서 배포 상태를 확인할 수 있습니다

### 수동 배포

```bash
# 빌드
npm run build

# dist 폴더를 gh-pages 브랜치에 푸시
npm install -g gh-pages
gh-pages -d dist
```

### 환경 변수 설정

GitHub Pages에서는 환경 변수를 직접 설정할 수 없으므로, 필요한 경우 빌드 시점에 환경 변수를 주입해야 합니다.

#### 백엔드 API URL 설정 (중요!)

**현재 문제**: GitHub Pages에서 AI 진단이 작동하지 않는 이유는 백엔드 서버가 로컬(`127.0.0.1:8000`)에만 있기 때문입니다.

**해결 방법**:

1. **백엔드 서버 배포** (필수)
   - Railway, Render, Fly.io, Heroku 등에 백엔드 서버 배포
   - 배포 후 받은 URL 예: `https://petcare-backend.railway.app`

2. **GitHub Actions 빌드 시 환경 변수 주입**
   - GitHub 저장소 → Settings → Secrets and variables → Actions
   - 새 레포지토리 시크릿 추가: `VITE_TRIAGE_API_BASE_URL`
   - 값: 배포된 백엔드 서버 URL (예: `https://petcare-backend.railway.app`)

3. **워크플로우 파일 수정**
   ```yaml
   - name: Build
     run: npm run build
     env:
       NODE_ENV: production
       VITE_TRIAGE_API_BASE_URL: ${{ secrets.VITE_TRIAGE_API_BASE_URL }}
   ```

4. **또는 코드에서 직접 설정** (임시 방법)
   - `App.jsx`의 `getTriageApiBaseUrl()` 함수에서 프로덕션 URL 직접 설정

`.env` 파일의 API 키는 클라이언트 측에서 사용되므로, GitHub Pages에 배포할 때는:
- API 키가 코드에 노출되지 않도록 주의
- 또는 환경 변수 대신 다른 방식으로 관리

### 소셜 로그인 설정 (중요!)

GitHub Pages 배포 후 소셜 로그인이 작동하려면 다음 설정이 필요합니다:

#### 1. 카카오 로그인 설정

**로컬 개발 환경 설정 (필수):**
1. [카카오 개발자 콘솔](https://developers.kakao.com/) 접속
2. 내 애플리케이션 → 앱 설정 → 플랫폼 → Web 플랫폼 등록
3. 사이트 도메인 추가:
   - `http://localhost:5173` (Vite 기본 포트)
   - `http://localhost:3000` (다른 포트 사용 시)
4. Redirect URI 등록:
   - `http://localhost:5173`
   - `http://localhost:5173/`
   - `http://localhost:3000` (다른 포트 사용 시)

**프로덕션 배포 환경 설정:**
1. 사이트 도메인 추가:
   - `https://ksy070822.github.io`
2. Redirect URI 등록:
   - `https://ksy070822.github.io/ai-factory/`
   - `https://ksy070822.github.io/ai-factory` (슬래시 없이도)

**공통 설정:**
- 동의 항목 설정 (필요한 정보 수집)
- 카카오 로그인 활성화 확인

#### 2. Firebase (구글 로그인) 설정
1. [Firebase 콘솔](https://console.firebase.google.com/) 접속
2. 프로젝트 선택: `ai-factory-c6d58`
3. Authentication → Settings → 승인된 도메인
4. 도메인 추가:
   - `ksy070822.github.io`
5. Google 로그인 제공업체가 활성화되어 있는지 확인

#### 3. 배포 후 확인 사항
- 배포 URL: `https://ksy070822.github.io/ai-factory/`
- 카카오/구글 로그인 버튼 클릭 시 정상 작동 확인
- 리다이렉트 후 로그인 완료 확인

### 로컬 테스트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드 미리보기
npm run build
npm run preview
```

### 문제 해결

1. **404 에러**: `vite.config.js`의 `base` 경로가 올바른지 확인
2. **빌드 실패**: GitHub Actions 로그 확인
3. **API 키 오류**: 환경 변수 설정 확인

