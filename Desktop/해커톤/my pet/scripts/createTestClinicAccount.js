// 테스트용 병원 직원 계정 생성 스크립트
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';

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
const auth = getAuth(app);
const db = getFirestore(app);

// 테스트 병원 직원 계정 정보
const TEST_ACCOUNT = {
  email: 'clinic@happyvet.com',
  password: 'test1234',
  displayName: '김수의',
  clinicId: 'clinicA',
  clinicName: '행복 동물병원',
  role: 'veterinarian'
};

async function createTestAccount() {
  console.log('🏥 테스트 병원 직원 계정 생성 시작...\n');

  try {
    // 1. Firebase Auth 계정 생성
    console.log('1️⃣ Firebase Auth 계정 생성 중...');
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      TEST_ACCOUNT.email,
      TEST_ACCOUNT.password
    );
    const user = userCredential.user;
    console.log(`✅ Auth 계정 생성 완료: ${user.uid}`);

    // 2. Firestore users 컬렉션에 사용자 정보 저장
    console.log('\n2️⃣ Firestore users 컬렉션에 저장 중...');
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: TEST_ACCOUNT.email,
      displayName: TEST_ACCOUNT.displayName,
      userMode: 'clinic',
      roles: [TEST_ACCOUNT.role],
      defaultClinicId: TEST_ACCOUNT.clinicId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    console.log('✅ users 컬렉션 저장 완료');

    // 3. clinics 컬렉션에 병원 정보 저장 (없으면)
    console.log('\n3️⃣ clinics 컬렉션 확인/생성 중...');
    await setDoc(doc(db, 'clinics', TEST_ACCOUNT.clinicId), {
      id: TEST_ACCOUNT.clinicId,
      name: TEST_ACCOUNT.clinicName,
      address: '서울시 강남구 테헤란로 123',
      phone: '02-1234-5678',
      email: TEST_ACCOUNT.email,
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
    const staffId = `staff_${user.uid}`;
    await setDoc(doc(db, 'clinicStaff', staffId), {
      id: staffId,
      userId: user.uid,
      clinicId: TEST_ACCOUNT.clinicId,
      role: TEST_ACCOUNT.role,
      isActive: true,
      joinedAt: new Date().toISOString()
    });
    console.log('✅ clinicStaff 컬렉션 저장 완료');

    // 완료 메시지
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎉 테스트 계정 생성 완료!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📋 로그인 정보:');
    console.log(`   이메일: ${TEST_ACCOUNT.email}`);
    console.log(`   비밀번호: ${TEST_ACCOUNT.password}`);
    console.log(`   이름: ${TEST_ACCOUNT.displayName}`);
    console.log(`   병원: ${TEST_ACCOUNT.clinicName}`);
    console.log(`   역할: ${TEST_ACCOUNT.role}`);
    console.log(`   User ID: ${user.uid}`);
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('💡 사용 방법:');
    console.log('   1. 앱에서 "병원" 모드 선택');
    console.log('   2. 위 이메일과 비밀번호로 로그인');
    console.log('   3. 자동으로 병원 대시보드로 이동합니다\n');

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('\n❌ 이미 존재하는 이메일입니다.');
      console.log('\n📋 기존 계정 로그인 정보:');
      console.log(`   이메일: ${TEST_ACCOUNT.email}`);
      console.log(`   비밀번호: ${TEST_ACCOUNT.password}`);
      console.log(`   병원: ${TEST_ACCOUNT.clinicName}\n`);
    } else {
      console.error('\n❌ 계정 생성 실패:', error);
    }
  }

  process.exit(0);
}

// 실행
createTestAccount();
