# 🧪 테스트 계정 생성 가이드

## 📋 목차
1. [보호자 테스트 계정](#보호자-테스트-계정)
2. [병원 직원 테스트 계정](#병원-직원-테스트-계정)
3. [기존 계정에 병원 권한 추가](#기존-계정에-병원-권한-추가)

---

## 👨‍👩‍👧‍👦 보호자 테스트 계정

### 계정 정보
```
이메일: guardian@test.com
비밀번호: test1234
이름: 홍길동
```

### 생성 방법
1. 앱 실행
2. **"보호자"** 모드 선택
3. **"회원가입"** 클릭
4. 위 정보로 회원가입

### 사용 가능 기능
- ✅ 반려동물 등록
- ✅ AI 진단 상담
- ✅ 케어 로그 작성
- ✅ 병원 예약
- ✅ OCR 진료기록 스캔

---

## 🏥 병원 직원 테스트 계정

### 계정 정보
```
이메일: clinic@happyvet.com
비밀번호: test1234
이름: 김수의
병원: 행복 동물병원
역할: 수의사
```

### 방법 1: 앱에서 직접 생성 (간단)

1. 앱 실행
2. **"병원"** 모드 선택
3. **"회원가입"** 클릭
4. 위 정보로 회원가입
5. **아래 "기존 계정에 병원 권한 추가" 참고하여 권한 추가**

### 방법 2: Firebase Console에서 직접 추가

Firebase Console에서 수동으로 데이터 추가:

1. **users 컬렉션**
```json
{
  "uid": "<회원가입_후_받은_UID>",
  "email": "clinic@happyvet.com",
  "displayName": "김수의",
  "userMode": "clinic",
  "roles": ["veterinarian"],
  "defaultClinicId": "clinicA"
}
```

2. **clinics 컬렉션**
```json
{
  "id": "clinicA",
  "name": "행복 동물병원",
  "address": "서울시 강남구 테헤란로 123",
  "phone": "02-1234-5678"
}
```

3. **clinicStaff 컬렉션**
```json
{
  "id": "staff_<UID>",
  "userId": "<회원가입_후_받은_UID>",
  "clinicId": "clinicA",
  "role": "veterinarian",
  "isActive": true
}
```

### 사용 가능 기능
- ✅ 오늘 예약 관리
- ✅ 환자 기록 조회
- ✅ 진료 결과 입력
- ✅ 예방접종 스케줄 확인
- ✅ 병원 통계 대시보드

---

## 🔧 기존 계정에 병원 권한 추가

이미 회원가입한 계정을 병원 직원으로 전환하는 방법입니다.

### 1단계: 사용자 UID 확인

**방법 A: Firebase Console에서 확인**
1. [Firebase Console](https://console.firebase.google.com/) 접속
2. `ai-factory-c6d58` 프로젝트 선택
3. Authentication → Users → 해당 이메일의 UID 복사

**방법 B: 개발자 도구에서 확인**
1. 앱에서 로그인 후 F12 (개발자 도구)
2. Console 탭에서 입력:
```javascript
firebase.auth().currentUser.uid
```

### 2단계: 권한 추가 스크립트 실행

터미널에서 실행:
```bash
cd "/home/user/ai-factory/Desktop/해커톤/my pet"
node scripts/addClinicPermission.js <복사한_UID>
```

예시:
```bash
node scripts/addClinicPermission.js abc123xyz456
```

### 3단계: 앱에서 확인

1. 앱에서 **로그아웃**
2. 다시 **로그인**
3. 하단 탭에 **모드 전환 버튼** 표시됨
4. 또는 "병원" 모드로 로그인 시 자동으로 병원 대시보드 표시

---

## 🎯 빠른 테스트 방법

가장 빠르게 테스트하려면:

### 1. 보호자 모드 테스트
```bash
1. 앱 실행
2. "보호자" 선택
3. 이메일로 시작하기
4. guardian@test.com / test1234 입력
   (없으면 회원가입)
```

### 2. 병원 모드 테스트
```bash
1. 위에서 회원가입한 계정의 UID 확인
2. 터미널: node scripts/addClinicPermission.js <UID>
3. 앱에서 로그아웃 후 다시 로그인
4. 병원 대시보드 자동 표시
```

---

## 📞 문제 해결

### Q: 병원 모드로 로그인했는데 보호자 모드가 나와요
**A**: 로그아웃 후 다시 로그인하세요. 세션 캐시 문제일 수 있습니다.

### Q: 모드 전환 버튼이 안 보여요
**A**: `userMode: "both"` 또는 `roles` 배열이 있는지 확인하세요.

### Q: 병원 대시보드가 비어있어요
**A**: `clinicStaff` 컬렉션에 userId-clinicId 매핑이 있는지 확인하세요.

---

## 🔑 모든 테스트 계정 요약

| 타입 | 이메일 | 비밀번호 | 이름 | 용도 |
|------|--------|----------|------|------|
| 보호자 | guardian@test.com | test1234 | 홍길동 | 반려동물 관리 |
| 병원 | clinic@happyvet.com | test1234 | 김수의 | 병원 대시보드 |

---

**💡 Tip**: 개발 중에는 "로그인 없이 바로 입장하기" 버튼을 사용하면 더 빠르게 테스트할 수 있습니다.
