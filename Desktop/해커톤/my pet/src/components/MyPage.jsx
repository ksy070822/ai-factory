import { useState, useEffect } from 'react';

const DIAGNOSIS_KEY = 'petMedical_diagnoses';
const STORAGE_KEY = 'petMedical_pets';

const getDiagnosesFromStorage = () => {
  try {
    const data = localStorage.getItem(DIAGNOSIS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const getPetsFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export function MyPage({ onBack, onSelectPet, onViewDiagnosis }) {
  const [activeTab, setActiveTab] = useState('pets'); // 'pets' or 'records'
  const [pets, setPets] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);

  useEffect(() => {
    setPets(getPetsFromStorage());
    setDiagnoses(getDiagnosesFromStorage());
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRiskColor = (riskLevel) => {
    switch(riskLevel) {
      case 'Emergency':
      case 'high': return '#f44336';
      case 'High': return '#ff9800';
      case 'Moderate':
      case 'medium': return '#ff9800';
      case 'Low':
      case 'low': return '#4caf50';
      default: return '#666';
    }
  };

  const getRiskLabel = (riskLevel) => {
    switch(riskLevel) {
      case 'Emergency':
      case 'high': return '🔴 응급';
      case 'High': return '🟠 위험';
      case 'Moderate':
      case 'medium': return '🟡 보통';
      case 'Low':
      case 'low': return '🟢 경미';
      default: return riskLevel;
    }
  };

  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <h1>마이페이지</h1>
      </div>

      <div className="mypage-tabs">
        <button
          className={`mypage-tab ${activeTab === 'pets' ? 'active' : ''}`}
          onClick={() => setActiveTab('pets')}
        >
          내 반려동물
        </button>
        <button
          className={`mypage-tab ${activeTab === 'records' ? 'active' : ''}`}
          onClick={() => setActiveTab('records')}
        >
          진료 기록
        </button>
      </div>

      {activeTab === 'pets' && (
        <div className="mypage-content">
          <div className="pets-section">
            {pets.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🐾</div>
                <p>등록된 반려동물이 없습니다</p>
                <button className="submit-btn" onClick={() => onBack()}>
                  반려동물 등록하기
                </button>
              </div>
            ) : (
              <div className="pets-list">
                {pets.map(pet => (
                  <div key={pet.id} className="pet-record-card" onClick={() => onSelectPet && onSelectPet(pet)}>
                    <div className="pet-record-header">
                      <div className="pet-record-icon">
                        {pet.species === 'dog' ? '🐕' : '🐈'}
                      </div>
                      <div className="pet-record-info">
                        <h3>{pet.petName}</h3>
                        <p>{pet.breed || '품종 미등록'} • {pet.age || '나이 미등록'}세</p>
                        <p className="pet-record-location">{pet.sido} {pet.sigungu}</p>
                      </div>
                    </div>
                    <div className="pet-record-actions">
                      <button className="action-btn-small" onClick={(e) => {
                        e.stopPropagation();
                        onSelectPet && onSelectPet(pet);
                      }}>
                        선택
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'records' && (
        <div className="mypage-content">
          <div className="records-section">
            {diagnoses.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📋</div>
                <p>아직 진료 기록이 없습니다</p>
                <p className="empty-hint">AI 진료를 받으면 기록이 저장됩니다</p>
              </div>
            ) : (
              <div className="records-list">
                {diagnoses.map(record => (
                  <div
                    key={record.id}
                    className="record-card"
                    onClick={() => onViewDiagnosis && onViewDiagnosis(record)}
                  >
                    <div className="record-header">
                      <div className="record-pet-info">
                        <span className="record-pet-name">{record.petName}</span>
                        <span className="record-date">{formatDate(record.created_at || record.date)}</span>
                      </div>
                      <div
                        className="record-risk-badge"
                        style={{ backgroundColor: getRiskColor(record.riskLevel || record.emergency) }}
                      >
                        {getRiskLabel(record.riskLevel || record.emergency)}
                      </div>
                    </div>
                    <div className="record-diagnosis">
                      <strong>진단:</strong> {record.diagnosis || record.suspectedConditions?.[0]?.name || '일반 건강 이상'}
                    </div>
                    {record.symptom && (
                      <div className="record-symptom">
                        <strong>증상:</strong> {record.symptom}
                      </div>
                    )}
                    <div className="record-actions">
                      <button className="record-view-btn" onClick={(e) => {
                        e.stopPropagation();
                        onViewDiagnosis && onViewDiagnosis(record);
                      }}>
                        상세 보기 →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

