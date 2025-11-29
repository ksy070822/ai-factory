import { useState, useEffect } from 'react'
import './App.css'

// ============ 로컬 스토리지 유틸리티 ============
const STORAGE_KEY = 'petMedical_pets';
const DIAGNOSIS_KEY = 'petMedical_diagnoses';

const getPetsFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const savePetsToStorage = (pets) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pets));
  } catch (error) {
    console.error('Failed to save pets:', error);
  }
};

const saveDiagnosisToStorage = (diagnosis) => {
  try {
    const diagnoses = JSON.parse(localStorage.getItem(DIAGNOSIS_KEY) || '[]');
    diagnoses.unshift({ ...diagnosis, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem(DIAGNOSIS_KEY, JSON.stringify(diagnoses));
  } catch (error) {
    console.error('Failed to save diagnosis:', error);
  }
};

// ============ 프로필 등록 화면 ============
function ProfileRegistration({ onComplete }) {
  const [formData, setFormData] = useState({
    petName: '',
    species: 'dog',
    breed: '',
    birthDate: '',
    sex: 'M',
    neutered: true,
    sido: '',
    sigungu: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const regions = {
    '서울특별시': ['강남구', '강동구', '강북구', '강서구', '관악구'],
    '경기도': ['수원시', '성남시', '고양시', '용인시'],
    '부산광역시': ['해운대구', '수영구', '남구'],
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const newPet = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      const pets = getPetsFromStorage();
      pets.push(newPet);
      savePetsToStorage(pets);
      onComplete(newPet);
    }, 1000);
  };
  
  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="header-gradient">
          <h1>🐾 PetMedical.AI</h1>
          <p>반려동물 건강 관리의 시작</p>
        </div>
        
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>등록 중입니다...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label>반려동물 이름 *</label>
              <input
                type="text"
                required
                placeholder="예: 초코"
                value={formData.petName}
                onChange={(e) => setFormData({...formData, petName: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>종류 *</label>
              <div className="radio-group">
                <div className={`radio-item ${formData.species === 'dog' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    id="dog"
                    name="species"
                    value="dog"
                    checked={formData.species === 'dog'}
                    onChange={(e) => setFormData({...formData, species: e.target.value})}
                  />
                  <label htmlFor="dog">🐕 개</label>
                </div>
                <div className={`radio-item ${formData.species === 'cat' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    id="cat"
                    name="species"
                    value="cat"
                    checked={formData.species === 'cat'}
                    onChange={(e) => setFormData({...formData, species: e.target.value})}
                  />
                  <label htmlFor="cat">🐈 고양이</label>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label>품종</label>
              <input
                type="text"
                placeholder="예: 푸들"
                value={formData.breed}
                onChange={(e) => setFormData({...formData, breed: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>생년월일 *</label>
              <input
                type="date"
                required
                value={formData.birthDate}
                onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>성별 *</label>
              <div className="radio-group">
                <div className={`radio-item ${formData.sex === 'M' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    id="male"
                    name="sex"
                    value="M"
                    checked={formData.sex === 'M'}
                    onChange={(e) => setFormData({...formData, sex: e.target.value})}
                  />
                  <label htmlFor="male">♂ 수컷</label>
                </div>
                <div className={`radio-item ${formData.sex === 'F' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    id="female"
                    name="sex"
                    value="F"
                    checked={formData.sex === 'F'}
                    onChange={(e) => setFormData({...formData, sex: e.target.value})}
                  />
                  <label htmlFor="female">♀ 암컷</label>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label>중성화 여부 *</label>
              <div className="radio-group">
                <div className={`radio-item ${formData.neutered === true ? 'active' : ''}`}>
                  <input
                    type="radio"
                    id="neutered-yes"
                    name="neutered"
                    checked={formData.neutered === true}
                    onChange={() => setFormData({...formData, neutered: true})}
                  />
                  <label htmlFor="neutered-yes">✓ 완료</label>
                </div>
                <div className={`radio-item ${formData.neutered === false ? 'active' : ''}`}>
                  <input
                    type="radio"
                    id="neutered-no"
                    name="neutered"
                    checked={formData.neutered === false}
                    onChange={() => setFormData({...formData, neutered: false})}
                  />
                  <label htmlFor="neutered-no">✗ 미완료</label>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label>거주 지역 *</label>
              <select
                required
                value={formData.sido}
                onChange={(e) => setFormData({...formData, sido: e.target.value, sigungu: ''})}
              >
                <option value="">시/도 선택</option>
                {Object.keys(regions).map(sido => (
                  <option key={sido} value={sido}>{sido}</option>
                ))}
              </select>
            </div>
            
            {formData.sido && (
              <div className="form-group">
                <select
                  required
                  value={formData.sigungu}
                  onChange={(e) => setFormData({...formData, sigungu: e.target.value})}
                >
                  <option value="">시/군/구 선택</option>
                  {regions[formData.sido]?.map(sigungu => (
                    <option key={sigungu} value={sigungu}>{sigungu}</option>
                  ))}
                </select>
              </div>
            )}
            
            <button type="submit" className="submit-btn">등록 완료</button>
          </form>
        )}
      </div>
    </div>
  );
}

// ============ 프로필 목록 화면 ============
function ProfileList({ pets, onSelectPet, onAddNew, onNavigate }) {
  return (
    <div className="profile-list-container">
      <div className="profile-list-header">
        <h1>🐾 내 반려동물</h1>
        <button className="add-pet-btn" onClick={onAddNew}>+ 새 반려동물 등록</button>
      </div>
      
      {pets.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🐾</div>
          <p>등록된 반려동물이 없습니다</p>
          <button className="submit-btn" onClick={onAddNew}>첫 반려동물 등록하기</button>
        </div>
      ) : (
        <div className="profile-grid">
          {pets.map(pet => (
            <div key={pet.id} className="profile-item" onClick={() => onSelectPet(pet)}>
              <div className="profile-item-photo">
                {pet.species === 'dog' ? '🐕' : '🐈'}
              </div>
              <div className="profile-item-info">
                <h3>{pet.petName}</h3>
                <p>{pet.breed || '품종 미등록'}</p>
                <p className="profile-item-location">{pet.sido} {pet.sigungu}</p>
              </div>
              <div className="profile-item-arrow">→</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============ 대시보드 화면 ============
function Dashboard({ petData, pets, onNavigate, onSelectPet }) {
  const calculateAge = (birthDate) => {
    if (!birthDate) return '나이 미등록';
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    return `${age}세`;
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-btn" onClick={() => onNavigate('profile-list')}>← 목록</button>
        <button className="switch-pet-btn" onClick={() => onNavigate('profile-list')}>
          반려동물 변경
        </button>
      </div>
      
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-photo">
            {petData.species === 'dog' ? '🐕' : '🐈'}
          </div>
          <div className="profile-info">
            <h2>{petData.petName}</h2>
            <p>{petData.breed || '품종 미등록'} • {calculateAge(petData.birthDate)}</p>
          </div>
        </div>
      </div>
      
      <div className="greeting-card">
        <h1>안녕하세요! 👋</h1>
        <p>{petData.petName}의 건강을 지키는 PetMedical.AI입니다.</p>
      </div>
      
      <div className="action-grid">
        <div className="action-card primary" onClick={() => onNavigate('symptom-input')}>
          <div className="action-icon">🏥</div>
          <h3>증상이 있어요</h3>
          <p>AI가 빠르게 진단하고 조치방법을 알려드립니다</p>
        </div>
        
        <div className="action-card" onClick={() => onNavigate('hospital')}>
          <div className="action-icon">📍</div>
          <h3>병원 찾기</h3>
          <p>우리 동네 추천 동물병원</p>
        </div>
        
        <div className="action-card" onClick={() => onNavigate('history')}>
          <div className="action-icon">📋</div>
          <h3>진료 기록</h3>
          <p>지난 진료 기록 확인</p>
        </div>
        
        <div className="action-card">
          <div className="action-icon">💊</div>
          <h3>건강 케어 팁</h3>
          <p>품종별 맞춤 가이드</p>
        </div>
      </div>
    </div>
  );
}

// ============ 증상 입력 화면 ============
function SymptomInput({ petData, onComplete, onBack }) {
  const [symptomText, setSymptomText] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagePromises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then(previews => {
      setImages(prev => [...prev, ...previews]);
    });
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!symptomText.trim() && images.length === 0) {
      alert('증상을 입력하거나 사진을 업로드해주세요.');
      return;
    }

    setLoading(true);
    
    // 증상 데이터를 진료 화면으로 전달
    setTimeout(() => {
      onComplete({
        symptomText,
        images,
        petData
      });
    }, 500);
  };

  return (
    <div className="symptom-input-container">
      <div className="symptom-input-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <h1>증상 입력</h1>
      </div>

      <div className="symptom-input-card">
        <div className="pet-selector">
          <div className="selected-pet">
            <span className="pet-icon">{petData.species === 'dog' ? '🐕' : '🐈'}</span>
            <span className="pet-name">{petData.petName}</span>
          </div>
        </div>

        <div className="input-section">
          <label>증상 설명 *</label>
          <textarea
            placeholder="예: 귀를 자꾸 긁어요, 식욕이 없어요, 기침을 해요..."
            value={symptomText}
            onChange={(e) => setSymptomText(e.target.value)}
            rows={5}
            className="symptom-textarea"
          />
        </div>

        <div className="input-section">
          <label>증상 사진 (선택)</label>
          <div className="image-upload-area">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              id="image-upload"
              style={{ display: 'none' }}
            />
            <label htmlFor="image-upload" className="upload-btn">
              📷 사진 추가
            </label>
            
            {images.length > 0 && (
              <div className="image-preview-grid">
                {images.map((img, index) => (
                  <div key={index} className="image-preview">
                    <img src={img} alt={`증상 ${index + 1}`} />
                    <button className="remove-image-btn" onClick={() => removeImage(index)}>×</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button 
          className="submit-btn" 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? '진료 준비 중...' : 'AI 진료 시작하기'}
        </button>
      </div>
    </div>
  );
}

// ============ 멀티에이전트 진료 (핵심!) ============
function MultiAgentDiagnosis({ petData, symptomData, onComplete, onBack }) {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  
  useEffect(() => {
    const symptomText = symptomData?.symptomText || '증상 정보 없음';
    const hasImages = symptomData?.images?.length > 0;
    
    const agentMessages = [
      {
        agent: 'CS Agent',
        role: '상담 간호사',
        icon: '💬',
        type: 'cs',
        content: `접수 완료했습니다.\n${petData.petName} (${petData.breed || '품종 미등록'})\n증상: ${symptomText}\n${hasImages ? `사진 ${symptomData.images.length}장 확인\n` : ''}→ Information 팀에게 전달합니다.`
      },
      {
        agent: 'Information Agent',
        role: '정보수집가',
        icon: '🔍',
        type: 'info',
        content: `증상 정보 수집 완료.\n${hasImages ? '이미지 분석 중...\n' : ''}유사 케이스 검색 중...\n이전 진료 기록 확인 중...\n→ Veterinarian 팀에게 전달합니다.`
      },
      {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        content: `종합 진단 수행 중...\n\n분석 결과:\n• 외이염 가능성 75%\n• 알러지 반응 20%\n• 기타 5%\n\n위험도: Medium\n응급도: 보통\n→ Data 팀, 기록 부탁합니다.`
      },
      {
        agent: 'Data Agent',
        role: '데이터 처리자',
        icon: '💾',
        type: 'data',
        content: `진료 기록 생성 완료.\n진단서 템플릿 준비 중...\n데이터 저장 완료.\n\n→ 진단서 생성 완료!`
      }
    ];
    
    agentMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
        setCurrentStep(index + 1);
        
        if (index === agentMessages.length - 1) {
          setTimeout(() => {
            const result = {
              diagnosis: '외이염 (확률 75%)',
              emergency: 'medium',
              actions: ['귀 긁는 것 방지 (넥카라 사용)', '귀 세정 금지', '청결한 환경 유지'],
              hospitalVisit: true,
              hospitalVisitTime: '24시간 내'
            };
            setDiagnosisResult(result);
            setShowResult(true);
            
            // 진단서 저장
            saveDiagnosisToStorage({
              petId: petData.id,
              petName: petData.petName,
              symptom: symptomText,
              ...result
            });
          }, 1000);
        }
      }, index * 2500);
    });
  }, [petData, symptomData]);
  
  const steps = [
    { label: '접수', icon: '1' },
    { label: '분석', icon: '2' },
    { label: '진단', icon: '3' },
    { label: '완료', icon: '4' }
  ];
  
  const getEmergencyColor = (emergency) => {
    switch(emergency) {
      case 'low': return '#4caf50';
      case 'medium': return '#ff9800';
      case 'high': return '#f44336';
      default: return '#666';
    }
  };

  return (
    <div className="diagnosis-container">
      <div className="diagnosis-header">
        <button className="back-btn" onClick={onBack} style={{ position: 'absolute', left: '20px', top: '20px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>←</button>
        <h1>👨‍⚕️ AI 온라인 진료실</h1>
        <p>AI 의료진 4명이 {petData.petName}를 진료합니다</p>
      </div>
      
      <div className="progress-bar">
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className={`step ${index + 1 <= currentStep ? 'active' : ''}`}>
              <div className="step-circle">{index + 1 <= currentStep ? '✓' : step.icon}</div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-header">
              <div className={`agent-icon ${msg.type}`}>{msg.icon}</div>
              <div>
                <div className="agent-name">{msg.agent}</div>
                <div className="agent-role">{msg.role}</div>
              </div>
            </div>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
        
        {messages.length < 4 && (
          <div className="typing-indicator">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        )}
      </div>
      
      {showResult && diagnosisResult && (
        <div className="diagnosis-result">
          <h2>✅ 진료 완료!</h2>
          
          <div className="result-section">
            <h3>🎯 진단 결과</h3>
            <p><strong>{diagnosisResult.diagnosis}</strong></p>
            <div className="emergency-badge" style={{ 
              backgroundColor: getEmergencyColor(diagnosisResult.emergency),
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              display: 'inline-block',
              marginTop: '10px',
              fontSize: '14px'
            }}>
              {diagnosisResult.emergency === 'low' ? '🟢 경미' : 
               diagnosisResult.emergency === 'medium' ? '🟡 보통' : '🔴 응급'}
            </div>
          </div>
          
          <div className="result-section">
            <h3>💊 즉시 조치</h3>
            <ul>
              {diagnosisResult.actions.map((action, idx) => (
                <li key={idx}>✓ {action}</li>
              ))}
            </ul>
          </div>

          {diagnosisResult.hospitalVisit && (
            <div className="result-section">
              <h3>🏥 병원 방문 권장</h3>
              <p>{diagnosisResult.hospitalVisitTime} 내 병원 방문을 권장합니다.</p>
            </div>
          )}

          <div className="action-buttons">
            <button className="action-btn primary" onClick={() => onComplete('treatment')}>
              직접 치료하기
            </button>
            <button className="action-btn secondary" onClick={() => onComplete('hospital')}>
              병원 예약하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ 메인 앱 ============
function App() {
  const [currentView, setCurrentView] = useState('profile-list');
  const [petData, setPetData] = useState(null);
  const [pets, setPets] = useState([]);
  const [symptomData, setSymptomData] = useState(null);

  useEffect(() => {
    const savedPets = getPetsFromStorage();
    setPets(savedPets);
    
    // 첫 방문 시 프로필 등록 화면으로
    if (savedPets.length === 0) {
      setCurrentView('registration');
    } else if (!petData) {
      // 저장된 반려동물이 있으면 첫 번째 선택
      setPetData(savedPets[0]);
    }
  }, []);

  const handleRegistrationComplete = (data) => {
    const updatedPets = getPetsFromStorage();
    setPets(updatedPets);
    setPetData(data);
    setCurrentView('dashboard');
  };

  const handleSelectPet = (pet) => {
    setPetData(pet);
    setCurrentView('dashboard');
  };

  const handleSymptomSubmit = (data) => {
    setSymptomData(data);
    setCurrentView('diagnosis');
  };

  const handleDiagnosisComplete = (action) => {
    if (action === 'treatment') {
      setCurrentView('treatment');
    } else if (action === 'hospital') {
      setCurrentView('hospital');
    } else {
      setCurrentView('dashboard');
    }
  };
  
  return (
    <div className="App">
      {currentView === 'registration' && (
        <ProfileRegistration 
          onComplete={handleRegistrationComplete}
        />
      )}
      
      {currentView === 'profile-list' && (
        <ProfileList
          pets={pets}
          onSelectPet={handleSelectPet}
          onAddNew={() => setCurrentView('registration')}
          onNavigate={(view) => setCurrentView(view)}
        />
      )}
      
      {currentView === 'dashboard' && petData && (
        <Dashboard 
          petData={petData} 
          pets={pets}
          onNavigate={(view) => setCurrentView(view)}
          onSelectPet={handleSelectPet}
        />
      )}

      {currentView === 'symptom-input' && petData && (
        <SymptomInput
          petData={petData}
          onComplete={handleSymptomSubmit}
          onBack={() => setCurrentView('dashboard')}
        />
      )}
      
      {currentView === 'diagnosis' && petData && symptomData && (
        <MultiAgentDiagnosis 
          petData={petData}
          symptomData={symptomData}
          onComplete={handleDiagnosisComplete}
          onBack={() => setCurrentView('symptom-input')}
        />
      )}

      {currentView === 'treatment' && (
        <div className="treatment-container">
          <button className="back-btn" onClick={() => setCurrentView('dashboard')}>← 뒤로</button>
          <h1>🏠 직접 치료 가이드</h1>
          <div className="treatment-content">
            <h2>상세 치료 방법</h2>
            <p>이 기능은 Day 3에 구현 예정입니다.</p>
          </div>
        </div>
      )}

      {currentView === 'hospital' && (
        <div className="hospital-container">
          <button className="back-btn" onClick={() => setCurrentView('dashboard')}>← 뒤로</button>
          <h1>🏥 병원 찾기</h1>
          <div className="hospital-content">
            <p>이 기능은 Day 4에 구현 예정입니다.</p>
          </div>
        </div>
      )}

      {currentView === 'history' && (
        <div className="history-container">
          <button className="back-btn" onClick={() => setCurrentView('dashboard')}>← 뒤로</button>
          <h1>📋 진료 기록</h1>
          <div className="history-content">
            <p>이 기능은 Day 5에 구현 예정입니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
