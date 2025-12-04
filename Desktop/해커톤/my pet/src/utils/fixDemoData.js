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
