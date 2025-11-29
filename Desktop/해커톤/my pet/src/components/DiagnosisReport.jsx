import React, { useState, useRef } from 'react';
import './DiagnosisReport.css';

function DiagnosisReport({ petData, diagnosisResult, symptomData, onClose, onGoToHospital, onGoToTreatment }) {
  const [isSaving, setIsSaving] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const reportRef = useRef(null);

  const reportDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const getEmergencyInfo = (emergency) => {
    switch(emergency) {
      case 'high':
        return { text: '응급', color: '#ef4444', icon: '🔴', desc: '즉시 병원 방문 필요' };
      case 'medium':
        return { text: '주의', color: '#f59e0b', icon: '🟡', desc: '병원 방문 권장' };
      default:
        return { text: '경미', color: '#22c55e', icon: '🟢', desc: '가정 내 관리 가능' };
    }
  };

  const emergencyInfo = getEmergencyInfo(diagnosisResult?.emergency);

  const handleSaveAsImage = async () => {
    setIsSaving(true);
    try {
      // html2canvas 동적 로딩 시도
      if (typeof html2canvas === 'undefined') {
        // 간단한 텍스트 저장 대안
        const reportText = generateReportText();
        const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `진단서_${petData?.name || '반려동물'}_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('진단서가 텍스트 파일로 저장되었습니다.');
      }
    } catch (error) {
      console.error('저장 오류:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  const generateReportText = () => {
    return `
═══════════════════════════════════════
       🐾 PetMedical.AI 진단서
═══════════════════════════════════════

📅 발급일시: ${reportDate}
📋 진단서 번호: PMD-${Date.now().toString(36).toUpperCase()}

───────────────────────────────────────
              환자 정보
───────────────────────────────────────
🐕 이름: ${petData?.name || '미등록'}
🎂 나이: ${petData?.age || '미상'}
⚖️ 몸무게: ${petData?.weight || '미상'}
🏷️ 품종: ${petData?.breed || '미상'}
${petData?.gender ? `⚥ 성별: ${petData.gender === 'male' ? '수컷' : '암컷'}` : ''}

───────────────────────────────────────
              증상 분석
───────────────────────────────────────
📝 보호자 설명: ${symptomData?.description || '없음'}
⏱️ 증상 지속 기간: ${symptomData?.duration || '미상'}
📍 관찰된 증상: ${symptomData?.symptoms?.join(', ') || '직접 입력'}

───────────────────────────────────────
              진단 결과
───────────────────────────────────────
🎯 진단명: ${diagnosisResult?.diagnosis || '진단 없음'}

${emergencyInfo.icon} 응급도: ${emergencyInfo.text} - ${emergencyInfo.desc}
${diagnosisResult?.triage_score ? `📊 Triage Score: ${diagnosisResult.triage_score}/5` : ''}

───────────────────────────────────────
              상세 설명
───────────────────────────────────────
${diagnosisResult?.description || '상세 설명 없음'}

───────────────────────────────────────
              권장 조치사항
───────────────────────────────────────
${diagnosisResult?.actions?.map((action, idx) => `${idx + 1}. ${action}`).join('\n') || '없음'}

${diagnosisResult?.hospitalVisit ? `
───────────────────────────────────────
           병원 방문 안내
───────────────────────────────────────
⏰ 권장 시간: ${diagnosisResult.hospitalVisitTime || '가능한 빨리'}
⚠️ ${emergencyInfo.desc}
` : ''}

═══════════════════════════════════════
    ⚕️ 본 진단서는 AI 분석 결과입니다.
    정확한 진단을 위해 수의사 상담을
    권장합니다.
═══════════════════════════════════════
`;
  };

  const handleSendToHospital = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      if (onGoToHospital) {
        onGoToHospital();
      }
    }, 1000);
  };

  return (
    <div className="diagnosis-report-overlay">
      <div className="diagnosis-report-container">
        <button className="report-close-btn" onClick={onClose}>✕</button>

        <div className="diagnosis-report-paper" ref={reportRef}>
          {/* 헤더 */}
          <div className="report-header">
            <div className="report-logo">🐾</div>
            <h1>PetMedical.AI 진단서</h1>
            <p className="report-subtitle">AI 기반 반려동물 건강 분석 리포트</p>
          </div>

          <div className="report-meta">
            <span className="report-date">📅 {reportDate}</span>
            <span className="report-number">No. PMD-{Date.now().toString(36).toUpperCase().slice(-6)}</span>
          </div>

          {/* 환자 정보 */}
          <div className="report-section patient-info">
            <h2>🏥 환자 정보</h2>
            <div className="patient-grid">
              <div className="patient-avatar">
                {petData?.species === 'cat' ? '🐱' : '🐕'}
              </div>
              <div className="patient-details">
                <div className="detail-row">
                  <span className="label">이름</span>
                  <span className="value">{petData?.name || '미등록'}</span>
                </div>
                <div className="detail-row">
                  <span className="label">품종</span>
                  <span className="value">{petData?.breed || '미상'}</span>
                </div>
                <div className="detail-row">
                  <span className="label">나이</span>
                  <span className="value">{petData?.age || '미상'}</span>
                </div>
                <div className="detail-row">
                  <span className="label">체중</span>
                  <span className="value">{petData?.weight || '미상'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 증상 요약 */}
          <div className="report-section symptoms-summary">
            <h2>📝 증상 요약</h2>
            <p className="symptom-description">
              {symptomData?.description || '보호자가 직접 입력한 증상 설명'}
            </p>
            {symptomData?.duration && (
              <p className="symptom-duration">⏱️ 증상 지속: {symptomData.duration}</p>
            )}
          </div>

          {/* 진단 결과 (핵심) */}
          <div className="report-section diagnosis-main">
            <h2>🎯 진단 결과</h2>
            <div className="diagnosis-box">
              <p className="diagnosis-name">{diagnosisResult?.diagnosis || '진단 결과 없음'}</p>
            </div>

            <div className="emergency-row">
              <div
                className="emergency-badge-report"
                style={{ backgroundColor: emergencyInfo.color }}
              >
                {emergencyInfo.icon} {emergencyInfo.text}
              </div>
              <span className="emergency-desc">{emergencyInfo.desc}</span>
            </div>

            {diagnosisResult?.triage_score !== undefined && (
              <div className="triage-section">
                <span className="triage-label">응급도 점수</span>
                <div className="triage-visual">
                  <div className="triage-bar">
                    {[1, 2, 3, 4, 5].map(num => (
                      <div
                        key={num}
                        className={`triage-dot ${num <= diagnosisResult.triage_score ? 'active' : ''}`}
                        style={{
                          backgroundColor: num <= diagnosisResult.triage_score
                            ? (diagnosisResult.triage_score >= 4 ? '#ef4444' :
                               diagnosisResult.triage_score >= 3 ? '#f59e0b' : '#22c55e')
                            : '#e5e7eb'
                        }}
                      />
                    ))}
                  </div>
                  <span className="triage-score">{diagnosisResult.triage_score}/5</span>
                </div>
              </div>
            )}
          </div>

          {/* 상세 설명 */}
          {diagnosisResult?.description && (
            <div className="report-section description-section">
              <h2>📋 상세 설명</h2>
              <p>{diagnosisResult.description}</p>
            </div>
          )}

          {/* 권장 조치사항 */}
          <div className="report-section actions-section">
            <h2>💊 권장 조치사항</h2>
            <ul className="actions-list">
              {diagnosisResult?.actions?.map((action, idx) => (
                <li key={idx}>
                  <span className="action-number">{idx + 1}</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 병원 방문 안내 */}
          {diagnosisResult?.hospitalVisit && (
            <div className="report-section hospital-notice">
              <h2>🏥 병원 방문 안내</h2>
              <div className="hospital-time-box">
                <span className="time-icon">⏰</span>
                <span className="time-text">
                  <strong>{diagnosisResult.hospitalVisitTime || '가능한 빨리'}</strong> 내 방문 권장
                </span>
              </div>
            </div>
          )}

          {/* 푸터 */}
          <div className="report-footer">
            <div className="footer-divider"></div>
            <p className="disclaimer">
              ⚕️ 본 진단서는 AI 분석 결과로, 참고용입니다.<br/>
              정확한 진단을 위해 반드시 수의사와 상담하세요.
            </p>
            <div className="footer-logo">
              <span>🐾</span> PetMedical.AI
            </div>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="report-actions">
          <button
            className="report-action-btn save"
            onClick={handleSaveAsImage}
            disabled={isSaving}
          >
            {isSaving ? '저장 중...' : '💾 진단서 저장'}
          </button>
          <button
            className="report-action-btn send"
            onClick={handleSendToHospital}
            disabled={isSending}
          >
            {isSending ? '전송 중...' : '🏥 병원에 전송'}
          </button>
          <button
            className="report-action-btn treatment"
            onClick={onGoToTreatment}
          >
            🏠 직접 치료하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisReport;
