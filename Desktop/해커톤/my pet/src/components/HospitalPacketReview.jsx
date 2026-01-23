import { useState } from 'react';

// 동물 이미지 경로 유틸리티 import
import { getPetImage } from '../utils/imagePaths';

export function HospitalPacketReview({ petData, diagnosis, hospital, hospitalPacket, onBack, onEdit, onSend, onSave }) {
  const [requestNote, setRequestNote] = useState('');
  const [attachDiagnosis, setAttachDiagnosis] = useState(true); // AI 진단서 첨부 여부 (기본: 권장)

  // 동물 종류에 맞는 캐릭터 이미지 가져오기
  const getAnimalImage = () => {
    return getPetImage(petData, false); // 프로필 영역이므로 false
  };

  // 보호자 요청사항을 패킷에 추가하는 함수
  const createFinalPacket = () => {
    if (!hospitalPacket) return null;

    const ownerRequest = requestNote.trim();
    let updatedPacketText = hospitalPacket.packet_text || '';

    // 기존 패킷에 보호자 요청사항이 없으면 추가
    if (!updatedPacketText.includes('[보호자 요청사항]')) {
      updatedPacketText += `\n\n[보호자 요청사항]\n${ownerRequest || '- 없음'}`;
    } else {
      // 이미 있으면 교체
      updatedPacketText = updatedPacketText.replace(
        /\[보호자 요청사항\]\n[\s\S]*$/,
        `[보호자 요청사항]\n${ownerRequest || '- 없음'}`
      );
    }

    return {
      ...hospitalPacket,
      packet_text: updatedPacketText,
      packet_json: {
        ...hospitalPacket.packet_json,
        owner_request_note: ownerRequest
      },
      requestNote: ownerRequest
    };
  };

  if (!petData || !diagnosis || !hospital) {
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTriageColor = (score) => {
    if (score >= 4) return 'text-red-600 bg-red-100';
    if (score >= 3) return 'text-orange-600 bg-orange-100';
    if (score >= 2) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const getTriageLabel = (score) => {
    if (score >= 4) return '응급';
    if (score >= 3) return '주의';
    if (score >= 2) return '경미';
    return '정상';
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div className="flex size-12 shrink-0 items-center text-slate-800">
          <button onClick={onBack} className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-full">
            <span className="material-symbols-outlined text-3xl">arrow_back_ios_new</span>
          </button>
        </div>
        <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-display">진단서 검토</h2>
        <div className="flex size-12 shrink-0 items-center justify-end">
          <span className="material-symbols-outlined text-3xl text-slate-400">more_horiz</span>
        </div>
      </div>

      <div className="px-4 pt-6 pb-6">
        {/* Welcome Message */}
        <div className="flex items-center gap-3 px-1 pt-2 pb-6">
          <div className="w-14 h-14 rounded-full bg-sky-100 overflow-hidden border-2 border-sky-200">
            <img
              src={getAnimalImage()}
              alt={petData.petName || '반려동물'}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center', display: 'block' }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-slate-900 text-2xl font-bold leading-tight tracking-tight font-display whitespace-nowrap">확인해주세요!</h1>
            <p className="text-slate-500 text-sm font-normal leading-normal whitespace-nowrap">이 내용이 사전진단으로 병원에 전송돼요</p>
          </div>
        </div>

        {/* 선택한 병원 정보 */}
        <div className="mb-6 rounded-lg bg-surface-light p-4 shadow-soft">
          <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] pb-4 font-display">선택한 병원 정보</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12 text-primary">
                <span className="material-symbols-outlined text-3xl">local_hospital</span>
              </div>
              <div>
                <p className="text-slate-800 text-base font-medium leading-normal">{hospital.name}</p>
                <p className="text-slate-500 text-sm font-normal leading-normal">{hospital.distance ? `${(hospital.distance / 1000).toFixed(1)}km` : ''}</p>
              </div>
            </div>
            {hospital.phone && (
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center shrink-0 size-12">
                  <span className="material-symbols-outlined text-slate-400 text-3xl">call</span>
                </div>
                <p className="text-slate-800 text-base font-normal leading-normal flex-1">{hospital.phone}</p>
              </div>
            )}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center shrink-0 size-12">
                <span className="material-symbols-outlined text-slate-400 text-3xl">location_on</span>
              </div>
              <p className="text-slate-800 text-base font-normal leading-normal flex-1">{hospital.roadAddress || hospital.address}</p>
            </div>
          </div>
        </div>

        {/* 반려동물 정보 */}
        <div className="mb-6 rounded-lg bg-surface-light p-4 shadow-soft">
          <h3 className="flex items-center gap-2 text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] pb-4 font-display">
            <span className="material-symbols-outlined text-secondary">pets</span>
            <span>반려동물 정보</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-slate-500">이름</span>
              <span className="text-slate-800 font-medium">{petData.petName}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500">품종</span>
              <span className="text-slate-800 font-medium">{petData.breed || '미등록'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500">나이</span>
              <span className="text-slate-800 font-medium">
                {petData.birthDate ? (() => {
                  const birth = new Date(petData.birthDate);
                  const today = new Date();
                  const age = today.getFullYear() - birth.getFullYear();
                  return `${age}세`;
                })() : '미등록'}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500">성별</span>
              <span className="text-slate-800 font-medium">
                {petData.sex === 'M' ? '수컷' : petData.sex === 'F' ? '암컷' : '미등록'}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500">중성화</span>
              <span className="text-slate-800 font-medium">{petData.neutered ? '완료' : '미완료'}</span>
            </div>
          </div>
        </div>

        {/* AI 진단명 (주요 질환) */}
        {diagnosis.possible_diseases && diagnosis.possible_diseases.length > 0 && (
          <div className="mb-6 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined">diagnosis</span>
              <span className="font-bold">AI 진단명</span>
            </div>
            <p className="text-2xl font-bold">
              {typeof diagnosis.possible_diseases[0] === 'string'
                ? diagnosis.possible_diseases[0]
                : (diagnosis.possible_diseases[0]?.name || '진단 정보')}
            </p>
            {diagnosis.possible_diseases[0]?.probability && (
              <p className="text-white/80 text-sm mt-1">
                AI 예측 확률: {diagnosis.possible_diseases[0].probability}%
              </p>
            )}
          </div>
        )}

        {/* 방문 이유 & 증상 타임라인 */}
        {diagnosis.symptom && (
          <div className="mb-6 rounded-lg bg-surface-light p-4 shadow-soft">
            <h3 className="flex items-center gap-2 text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] pb-4 font-display">
              <span className="material-symbols-outlined text-secondary">history</span>
              <span>방문 이유 & 증상 타임라인</span>
            </h3>
            <p className="text-slate-800 font-medium pb-3">{diagnosis.symptom}</p>
            {diagnosis.symptomTimeline && diagnosis.symptomTimeline.length > 0 ? (
              <ul className="space-y-2 pl-1">
                {diagnosis.symptomTimeline.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <span className="material-symbols-outlined text-base mt-1 text-primary">check_circle</span>
                    <p>{typeof item === 'string' ? item : (item?.text || item?.description || JSON.stringify(item))}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-600 text-sm">증상 타임라인 정보가 없습니다.</p>
            )}
          </div>
        )}

        {/* AI 감별진단 요약 */}
        {diagnosis.possible_diseases && diagnosis.possible_diseases.length > 0 && (
          <div className="mb-6 rounded-lg bg-surface-light p-4 shadow-soft">
            <h3 className="flex items-center gap-2 text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] pb-4 font-display">
              <span className="material-symbols-outlined text-secondary">smart_toy</span>
              <span>AI 감별진단 요약</span>
            </h3>
            <div className="space-y-3">
              {diagnosis.possible_diseases.map((disease, idx) => (
                <div key={idx} className={`rounded-lg border border-slate-200 p-3 ${idx === 0 ? 'bg-slate-50/50' : ''}`}>
                  <div className="flex justify-between items-center">
                    <p className="text-base font-semibold text-slate-900">{disease.name || disease}</p>
                    <p className={`text-lg font-bold ${idx === 0 ? 'text-primary' : idx === 1 ? 'text-primary/70' : 'text-primary/50'}`}>
                      {disease.probability || disease.probability_percent || 'N/A'}%
                    </p>
                  </div>
                  {disease.related_area && (
                    <p className="text-sm text-slate-500">관련 부위: {disease.related_area}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 응급도 */}
        {diagnosis.triage_score !== undefined && (
          <div className={`mb-6 rounded-lg p-4 border ${getTriageColor(diagnosis.triage_score)}`}>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-3xl">warning</span>
              <div>
                <h3 className={`text-lg font-bold leading-tight ${getTriageColor(diagnosis.triage_score).split(' ')[0]}`}>
                  응급도: {getTriageLabel(diagnosis.triage_score)}
                </h3>
                <p className="text-slate-700 mt-1">{diagnosis.triage_note || '지속적인 모니터링이 필요해요.'}</p>
                <p className="text-slate-800 mt-3 font-semibold">
                  권장 조치: {diagnosis.hospitalVisitTime || '24시간 이내'} 병원 방문
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 병원에 요청사항 */}
        <div className="mb-6 rounded-lg bg-surface-light p-4 shadow-soft">
          <h3 className="flex items-center gap-2 text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] pb-4 font-display">
            <span className="material-symbols-outlined text-secondary">edit_note</span>
            <span>병원에 전달할 메시지 (선택)</span>
          </h3>
          <textarea
            className="w-full rounded-lg border-slate-300 bg-slate-100 text-slate-900 focus:ring-primary focus:border-primary p-3 text-base"
            rows="3"
            placeholder="추가로 전달하고 싶은 내용이 있으면 입력해주세요"
            value={requestNote}
            onChange={(e) => setRequestNote(e.target.value)}
          />
          <p className="text-xs text-slate-400 mt-2">※ AI 진단서가 함께 전송됩니다.</p>
        </div>

        {/* AI 진단서 첨부 옵션 */}
        <div className="mb-6 rounded-xl border-2 border-sky-200 bg-sky-50 p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={attachDiagnosis}
              onChange={(e) => setAttachDiagnosis(e.target.checked)}
              className="w-5 h-5 mt-1 text-sky-500 rounded border-sky-300 focus:ring-sky-400"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sky-600 text-lg">📄</span>
                <span className="font-bold text-slate-900">AI 사전 진단서 첨부</span>
                <span className="px-2 py-0.5 bg-sky-500 text-white text-xs font-bold rounded-full">권장</span>
              </div>
              <p className="text-sm text-slate-600 mb-3">병원에서 사전에 진료 계획을 세울 수 있어요</p>

              <div className="space-y-2 pl-1">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-green-500">✓</span>
                  <span>반려동물 기본 정보</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-green-500">✓</span>
                  <span>증상 및 타임라인</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-green-500">✓</span>
                  <span>AI 감별진단 (Top 3 의심 질환)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-green-500">✓</span>
                  <span>응급도 평가 및 권장 조치</span>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Bottom Buttons - 본문 안에 배치 */}
      <div className="px-4 pb-28">
        <button
          onClick={onEdit}
          className="w-full bg-slate-100 text-slate-700 font-bold py-4 px-4 rounded-xl text-base hover:bg-slate-200 transition-colors mb-3"
        >
          내용 수정하기
        </button>
        <button
          onClick={() => onSend && onSend(createFinalPacket())}
          className="w-full bg-sky-400 text-white font-bold py-4 px-4 rounded-xl text-base hover:bg-sky-500 transition-colors shadow-lg"
        >
          병원에 전송하기
        </button>
      </div>
    </div>
  );
}

