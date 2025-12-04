/**
 * 발표 전 긴급 데이터 수정 유틸리티
 * 앱에서 직접 호출 가능
 */

import { db } from '../lib/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore';

function getRandomDiagnosis() {
  const diagnoses = [
    '경미한 상기도 감염',
    '피부 알레르기',
    '위장염',
    '정기 건강검진',
    '예방접종'
  ];
  return diagnoses[Math.floor(Math.random() * diagnoses.length)];
}

export async function fixPpukuData() {
  console.log('🔧 발표 전 데이터 수정 시작...\n');

  const ppukuId = 'HjxrCWoW5WlFymH1A0tH';

  try {
    // 1. 뿌꾸의 완료된 예약 조회
    console.log('1️⃣ 뿌꾸의 완료된 예약 조회...');
    const bookingsQuery = query(
      collection(db, 'bookings'),
      where('petId', '==', ppukuId),
      where('status', '==', 'completed')
    );

    const bookingsSnapshot = await getDocs(bookingsQuery);
    console.log(`   뿌꾸의 완료된 예약: ${bookingsSnapshot.size}건\n`);

    if (bookingsSnapshot.empty) {
      return {
        success: false,
        message: '완료된 예약이 없습니다.'
      };
    }

    let createdCount = 0;
    let sharedCount = 0;

    // 2. 각 완료된 예약에 대해 진료 결과 생성
    for (const bookingDoc of bookingsSnapshot.docs) {
      const booking = { id: bookingDoc.id, ...bookingDoc.data() };

      // 이미 진료 결과가 있는지 확인
      const resultsQuery = query(
        collection(db, 'clinicResults'),
        where('bookingId', '==', booking.id)
      );

      const resultsSnapshot = await getDocs(resultsQuery);

      if (resultsSnapshot.empty) {
        // 진료 결과 생성
        console.log(`2️⃣ 예약 ${booking.id}에 진료 결과 생성...`);

        const resultData = {
          clinicId: booking.clinicId || 'unknown_clinic',
          clinicName: booking.clinicName || '행복 동물병원',
          bookingId: booking.id,
          userId: booking.userId,
          ownerId: booking.ownerId || booking.userId,
          petId: booking.petId,
          petName: booking.petName || '뿌꾸',
          visitDate: booking.date,
          visitTime: booking.time,
          mainDiagnosis: getRandomDiagnosis(),
          triageScore: Math.floor(Math.random() * 3) + 1, // 1-3
          soap: {
            subjective: '보호자 진술: 약간의 기침과 재채기가 있었음',
            objective: '체온 정상(38.5℃), 심박수 정상, 청진 이상 없음',
            assessment: '경미한 상기도 감염 의심',
            plan: '항생제 처방 및 3일 후 재진 권장'
          },
          sharedToGuardian: true, // 바로 공유 처리
          sharedAt: serverTimestamp(),
          createdAt: serverTimestamp()
        };

        const resultRef = await addDoc(collection(db, 'clinicResults'), resultData);
        console.log(`   ✅ 진료 결과 생성 완료: ${resultRef.id}`);
        createdCount++;
        sharedCount++;

        // 최대 3개까지만 생성 (데모용)
        if (createdCount >= 3) {
          console.log('   📌 3개 생성 완료, 중단\n');
          break;
        }
      } else {
        // 이미 진료 결과가 있으면 공유 처리만
        const resultDoc = resultsSnapshot.docs[0];
        const result = resultDoc.data();

        if (!result.sharedToGuardian) {
          console.log(`3️⃣ 진료 결과 ${resultDoc.id}를 공유 처리...`);
          await updateDoc(doc(db, 'clinicResults', resultDoc.id), {
            sharedToGuardian: true,
            sharedAt: serverTimestamp()
          });
          console.log(`   ✅ 공유 처리 완료\n`);
          sharedCount++;
        }
      }
    }

    console.log('\n🎉 데이터 수정 완료!');
    console.log(`   생성된 진료 결과: ${createdCount}건`);
    console.log(`   공유 처리된 진료 결과: ${sharedCount}건`);

    return {
      success: true,
      created: createdCount,
      shared: sharedCount,
      message: `진료 결과 ${createdCount}건 생성, ${sharedCount}건 공유 완료`
    };
  } catch (error) {
    console.error('❌ 오류 발생:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// 미공유 진료 결과를 모두 공유 처리
export async function shareAllResults() {
  console.log('📤 미공유 진료 결과 모두 공유 처리...');

  try {
    const resultsQuery = query(
      collection(db, 'clinicResults'),
      where('sharedToGuardian', '==', false)
    );

    const resultsSnapshot = await getDocs(resultsQuery);
    console.log(`   미공유 진료 결과: ${resultsSnapshot.size}건\n`);

    let count = 0;
    for (const resultDoc of resultsSnapshot.docs) {
      await updateDoc(doc(db, 'clinicResults', resultDoc.id), {
        sharedToGuardian: true,
        sharedAt: serverTimestamp()
      });
      count++;
    }

    console.log(`✅ ${count}건 공유 처리 완료`);

    return {
      success: true,
      count,
      message: `${count}건의 진료 결과를 공유했습니다.`
    };
  } catch (error) {
    console.error('❌ 오류 발생:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// 🏥 건강검진 기록 추가
export async function addCheckupRecords(userId, petId = 'HjxrCWoW5WlFymH1A0tH') {
  console.log('🏥 건강검진 기록 추가 시작...');

  try {
    const checkups = [
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-09-05',
        hospitalName: '행복 동물병원',
        type: '종합건강검진',
        results: [
          { item: '혈액검사', status: 'normal', note: '모든 수치 정상 범위' },
          { item: '소변검사', status: 'normal', note: '요비중 정상' },
          { item: '심장초음파', status: 'normal', note: '심장 기능 양호' },
          { item: '복부초음파', status: 'normal', note: '장기 상태 양호' }
        ],
        overallStatus: '건강',
        createdAt: serverTimestamp()
      },
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-03-15',
        hospitalName: '24시 강남동물의료센터',
        type: '기본건강검진',
        results: [
          { item: '혈액검사', status: 'normal', note: '정상' },
          { item: '체중측정', status: 'caution', note: '약간 과체중 (4.8kg → 5.2kg)' },
          { item: '치아검사', status: 'normal', note: '치석 약간 있음' }
        ],
        overallStatus: '주의',
        createdAt: serverTimestamp()
      }
    ];

    let count = 0;
    for (const checkup of checkups) {
      await addDoc(collection(db, 'healthCheckups'), checkup);
      count++;
      console.log(`   ✅ 건강검진 기록 추가: ${checkup.date} - ${checkup.type}`);
    }

    console.log(`\n✅ 총 ${count}건의 건강검진 기록 추가 완료`);

    return {
      success: true,
      count,
      message: `${count}건의 건강검진 기록을 추가했습니다.`
    };
  } catch (error) {
    console.error('❌ 건강검진 기록 추가 오류:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// 💉 예방접종 기록 추가
export async function addVaccinationRecords(userId, petId = 'HjxrCWoW5WlFymH1A0tH') {
  console.log('💉 예방접종 기록 추가 시작...');

  try {
    const vaccinations = [
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-08-20',
        name: '종합백신 (DHPPL)',
        hospitalName: '행복 동물병원',
        nextDue: '2025-08-20',
        status: 'completed',
        createdAt: serverTimestamp()
      },
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-11-01',
        name: '심장사상충 예방',
        hospitalName: '행복 동물병원',
        nextDue: '2024-12-01',
        status: 'due_soon',
        createdAt: serverTimestamp()
      },
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-06-15',
        name: '광견병 예방접종',
        hospitalName: '24시 강남동물의료센터',
        nextDue: '2025-06-15',
        status: 'completed',
        createdAt: serverTimestamp()
      }
    ];

    let count = 0;
    for (const vaccination of vaccinations) {
      await addDoc(collection(db, 'vaccinations'), vaccination);
      count++;
      console.log(`   ✅ 예방접종 기록 추가: ${vaccination.date} - ${vaccination.name}`);
    }

    console.log(`\n✅ 총 ${count}건의 예방접종 기록 추가 완료`);

    return {
      success: true,
      count,
      message: `${count}건의 예방접종 기록을 추가했습니다.`
    };
  } catch (error) {
    console.error('❌ 예방접종 기록 추가 오류:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// 💊 의약품 처방 기록 추가
export async function addMedicationRecords(userId, petId = 'HjxrCWoW5WlFymH1A0tH') {
  console.log('💊 의약품 처방 기록 추가 시작...');

  try {
    const medications = [
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-11-28',
        medications: ['피부연고 (히드로코르티손)', '항히스타민제'],
        pharmacyName: '행복 동물병원',
        daysSupply: '7일분',
        status: 'effective',
        evaluation: {
          userFeedback: 'effective',
          feedbackAt: serverTimestamp()
        },
        createdAt: serverTimestamp()
      },
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-11-20',
        medications: ['아목시실린 (항생제)', '소염진통제'],
        pharmacyName: '24시 강남동물의료센터',
        daysSupply: '5일분',
        status: 'effective',
        evaluation: {
          userFeedback: 'effective',
          feedbackAt: serverTimestamp()
        },
        createdAt: serverTimestamp()
      },
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-11-15',
        medications: ['프로바이오틱스', '장영양제'],
        pharmacyName: '행복 동물병원',
        daysSupply: '14일분',
        status: 'none',
        createdAt: serverTimestamp()
      },
      {
        userId,
        petId,
        petName: '뿌꾸',
        date: '2024-10-28',
        medications: ['넥스가드 스펙트라'],
        pharmacyName: '행복 동물병원',
        daysSupply: '1회분',
        status: 'none',
        createdAt: serverTimestamp()
      }
    ];

    let count = 0;
    for (const medication of medications) {
      await addDoc(collection(db, 'medicationLogs'), medication);
      count++;
      console.log(`   ✅ 의약품 처방 기록 추가: ${medication.date} - ${medication.medications.join(', ')}`);
    }

    console.log(`\n✅ 총 ${count}건의 의약품 처방 기록 추가 완료`);

    return {
      success: true,
      count,
      message: `${count}건의 의약품 처방 기록을 추가했습니다.`
    };
  } catch (error) {
    console.error('❌ 의약품 처방 기록 추가 오류:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// 🎯 한 번에 모든 기록 추가
export async function addAllMedicalRecords(userId, petId = 'HjxrCWoW5WlFymH1A0tH') {
  console.log('🎯 모든 의료 기록 추가 시작...\n');

  const results = {
    checkups: await addCheckupRecords(userId, petId),
    vaccinations: await addVaccinationRecords(userId, petId),
    medications: await addMedicationRecords(userId, petId)
  };

  const totalCount =
    (results.checkups.count || 0) +
    (results.vaccinations.count || 0) +
    (results.medications.count || 0);

  console.log('\n🎉 모든 의료 기록 추가 완료!');
  console.log(`   건강검진: ${results.checkups.count || 0}건`);
  console.log(`   예방접종: ${results.vaccinations.count || 0}건`);
  console.log(`   의약품 처방: ${results.medications.count || 0}건`);
  console.log(`   총: ${totalCount}건`);

  return {
    success: true,
    results,
    totalCount,
    message: `총 ${totalCount}건의 의료 기록을 추가했습니다.`
  };
}
