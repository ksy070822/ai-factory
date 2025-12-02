// 기존 계정에 병원 권한 추가 스크립트
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyAMubJk9qXmaz_V3uHiCGs0hRe6FSu9ji4",
  authDomain: "ai-factory-c6d58.firebaseapp.com",
  projectId: "ai-factory-c6d58",
  storageBucket: "ai-factory-c6d58.firebasestorage.app",
  messagingSenderId: "213197152130",
  appId: "1:213197152130:web:7c19f9c3c88bea7cc1399b",
  measurementId: "G-4D82WS9H7K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 사용자 UID (회원가입 후 Firebase Console에서 확인)
const USER_ID = process.argv[2];
const CLINIC_ID = 'clinicA';
const CLINIC_NAME = '행복 동물병원';

async function addClinicPermission() {
  if (!USER_ID) {
    console.error('❌ 사용자 ID가 필요합니다.');
    console.log('\n사용 방법:');
    console.log('  node scripts/addClinicPermission.js <USER_ID>\n');
    console.log('예시:');
    console.log('  node scripts/addClinicPermission.js abc123xyz\n');
    process.exit(1);
  }

  console.log('🏥 병원 권한 추가 시작...\n');
  console.log(`사용자 ID: ${USER_ID}`);
  console.log(`병원 ID: ${CLINIC_ID}\n`);

  try {
    // 1. 사용자 정보 확인
    console.log('1️⃣ 사용자 정보 확인 중...');
    const userDoc = await getDoc(doc(db, 'users', USER_ID));

    if (!userDoc.exists()) {
      console.error('❌ 사용자를 찾을 수 없습니다.');
      process.exit(1);
    }

    const userData = userDoc.data();
    console.log(`✅ 사용자 확인: ${userData.displayName || userData.email}`);

    // 2. users 문서 업데이트
    console.log('\n2️⃣ users 컬렉션 업데이트 중...');
    await updateDoc(doc(db, 'users', USER_ID), {
      userMode: 'both', // 보호자+병원 모드
      roles: ['veterinarian'],
      defaultClinicId: CLINIC_ID,
      updatedAt: new Date().toISOString()
    });
    console.log('✅ users 컬렉션 업데이트 완료');

    // 3. clinics 컬렉션에 병원 정보 저장
    console.log('\n3️⃣ clinics 컬렉션 생성/업데이트 중...');
    await setDoc(doc(db, 'clinics', CLINIC_ID), {
      id: CLINIC_ID,
      name: CLINIC_NAME,
      address: '서울시 강남구 테헤란로 123',
      phone: '02-1234-5678',
      email: 'contact@happyvet.com',
      businessHours: {
        weekday: '09:00-18:00',
        saturday: '09:00-13:00',
        sunday: '휴무'
      },
      specialties: ['내과', '외과', '치과', '피부과'],
      createdAt: new Date().toISOString()
    }, { merge: true });
    console.log('✅ clinics 컬렉션 저장 완료');

    // 4. clinicStaff 컬렉션에 직원 매핑 저장
    console.log('\n4️⃣ clinicStaff 컬렉션에 매핑 저장 중...');
    const staffId = `staff_${USER_ID}`;
    await setDoc(doc(db, 'clinicStaff', staffId), {
      id: staffId,
      userId: USER_ID,
      clinicId: CLINIC_ID,
      role: 'veterinarian',
      isActive: true,
      joinedAt: new Date().toISOString()
    });
    console.log('✅ clinicStaff 컬렉션 저장 완료');

    // 완료 메시지
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎉 병원 권한 추가 완료!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('✅ 변경사항:');
    console.log(`   사용자: ${userData.displayName || userData.email}`);
    console.log(`   모드: both (보호자 + 병원)`);
    console.log(`   역할: veterinarian (수의사)`);
    console.log(`   병원: ${CLINIC_NAME}`);
    console.log('\n💡 사용 방법:');
    console.log('   1. 앱에서 로그아웃 후 다시 로그인');
    console.log('   2. 하단 탭에서 모드 전환 버튼으로 병원 모드로 전환');
    console.log('   3. 또는 "병원" 모드로 로그인하면 자동으로 병원 대시보드 표시\n');

  } catch (error) {
    console.error('\n❌ 오류 발생:', error);
  }

  process.exit(0);
}

// 실행
addClinicPermission();
