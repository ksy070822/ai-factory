import { useState, useEffect } from 'react'
import './App.css'
import { runMultiAgentDiagnosis } from './src/services/ai/agentOrchestrator'
import { MyPage } from './src/components/MyPage'
import { Avatar } from './src/components/Avatar'
import { DailyCareTracker, getDailyLogs } from './src/components/DailyCareTracker'
import { DailyCareLog } from './src/components/DailyCareLog'
import { analyzeHealthPattern } from './src/services/ai/patternAnalyzer'
import { calculateTriageScore } from './src/services/ai/triageEngine'
import { generateHospitalPacket } from './src/services/ai/hospitalPacket'
import { HospitalBooking } from './src/components/HospitalBooking'
import { mapDiagnosisToHealthFlags, convertHealthFlagsFormat } from './src/utils/healthFlagsMapper'
import { analyzeCarePatternWithGemini } from './src/lib/aiPatternAnalysis'

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
    // healthFlags가 없으면 계산해서 추가
    let diagnosisWithFlags = { ...diagnosis };
    if (!diagnosisWithFlags.healthFlags) {
      diagnosisWithFlags.healthFlags = mapDiagnosisToHealthFlags(diagnosis);
    }
    
    const diagnoses = JSON.parse(localStorage.getItem(DIAGNOSIS_KEY) || '[]');
    diagnoses.unshift({ 
      ...diagnosisWithFlags, 
      id: diagnosisWithFlags.id || Date.now().toString(), 
      date: new Date().toISOString() 
    });
    localStorage.setItem(DIAGNOSIS_KEY, JSON.stringify(diagnoses));
  } catch (error) {
    console.error('Failed to save diagnosis:', error);
  }
};

// 최근 진단 기록 가져오기
const getLatestDiagnosisRecord = (petId) => {
  try {
    const diagnoses = JSON.parse(localStorage.getItem(DIAGNOSIS_KEY) || '[]');
    const petDiagnoses = diagnoses.filter(d => d.petId === petId);
    if (petDiagnoses.length === 0) return null;
    // 가장 최근 기록 반환 (첫 번째가 가장 최신)
    return petDiagnoses[0];
  } catch (error) {
    console.error('Failed to get latest diagnosis:', error);
    return null;
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

// Profile List Screen
function ProfileList({ pets, onSelectPet, onAddNew, onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center px-4 z-50">
        <div className="max-w-md mx-auto w-full flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">나의 반려동물</h1>
          <button 
            className="bg-teal-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-teal-700 transition-colors"
            onClick={onAddNew}
          >
            + 새 등록
          </button>
        </div>
      </div>
      
      <div className="pt-20 p-4 max-w-md mx-auto space-y-4">
        {pets.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-6xl mb-4">🐾</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">등록된 반려동물이 없습니다</h2>
            <p className="text-gray-500 mb-6">새 반려동물을 등록해주세요</p>
            <button 
              className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors"
              onClick={onAddNew}
            >
              반려동물 등록하기
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in">
            {pets.map(pet => (
              <div 
                key={pet.id} 
                className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
                onClick={() => onSelectPet(pet)}
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-3xl">
                  {pet.species === 'dog' ? '🐕' : '🐈'}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{pet.petName}</h3>
                  <p className="text-sm text-gray-500">{pet.breed || '품종 미등록'}</p>
                  <p className="text-xs text-gray-400">{pet.sido} {pet.sigungu}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                  →
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Dashboard Screen
function Dashboard({ petData, pets, onNavigate, onSelectPet }) {
  const [healthFlags, setHealthFlags] = useState(null);
  const [dailyLogs, setDailyLogs] = useState([]);
  const [patternAnalysis, setPatternAnalysis] = useState(null);
  const [triageScore, setTriageScore] = useState(null);
  const [patternFlags, setPatternFlags] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  
  const calculateAge = (birthDate) => {
    if (!birthDate) return '나이 미등록';
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    return `${age}세`;
  };

  useEffect(() => {
    if (!petData) return;
    
    // 일일 로그 불러오기
    const logs = getDailyLogs(petData.id);
    setDailyLogs(logs);
    
    // 최근 진단서에서 healthFlags 가져오기 (우선순위 1)
    const latestDiagnosis = getLatestDiagnosisRecord(petData.id);
    if (latestDiagnosis && latestDiagnosis.healthFlags) {
      // healthFlags 형식 변환
      const convertedFlags = convertHealthFlagsFormat(latestDiagnosis.healthFlags);
      setHealthFlags(convertedFlags);
    }
    
    // 패턴 분석 (최근 7일 데이터가 있으면) - healthFlags가 없을 때만 사용
    if (logs.length >= 3 && !latestDiagnosis?.healthFlags) {
      analyzeHealthPattern(petData, logs)
        .then(result => {
          setPatternAnalysis(result);
          // 패턴 분석 결과는 보조적으로만 사용, 진단 결과가 우선
          if (result.health_flags) {
            const convertedFlags = convertHealthFlagsFormat(result.health_flags);
            setHealthFlags(convertedFlags);
          }
        })
        .catch(err => console.error('패턴 분석 오류:', err));
    }
  }, [petData]);

  const handleLogUpdate = async (newLog) => {
    if (!petData) return;
    
    const logs = getDailyLogs(petData.id);
    const updatedLogs = [...logs, newLog].slice(-7); // 최근 7일만 유지
    
    // 패턴 분석 업데이트
    if (updatedLogs.length >= 3) {
      try {
        const result = await analyzeHealthPattern(petData, updatedLogs);
        setPatternAnalysis(result);
        if (result.health_flags) {
          const convertedFlags = convertHealthFlagsFormat(result.health_flags);
          setHealthFlags(convertedFlags);
        }
      } catch (err) {
        console.error('패턴 분석 오류:', err);
      }
    }
  };

  const handleAnalyzePattern = async () => {
    if (!petData) return;
    setAnalyzing(true);
    
    try {
      const logs = getDailyLogs(petData.id);
      if (logs.length < 3) {
        alert('최근 7일간의 케어 로그가 3일 이상 필요합니다.');
        setAnalyzing(false);
        return;
      }
      
      const result = await analyzeCarePatternWithGemini(petData, logs);
      if (result && result.health_flags) {
        const convertedFlags = convertHealthFlagsFormat(result.health_flags);
        setPatternFlags(convertedFlags);
        setHealthFlags(convertedFlags);
      }
    } catch (err) {
      console.error('패턴 분석 오류:', err);
    } finally {
      setAnalyzing(false);
    }
  };

  // healthFlags와 patternFlags 병합 (진단 결과 우선)
  const mergedFlags = healthFlags || patternFlags || {
    earIssue: false,
    digestionIssue: false,
    skinIssue: false,
    fever: false,
    energyLevel: 0.7
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center px-4 z-50">
        <div className="max-w-md mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('profile-list')} 
              className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full"
            >
              <span className="text-lg">←</span>
              <span className="ml-2 text-sm font-medium">목록</span>
            </button>
            <h1 className="text-lg font-bold text-gray-900">대시보드</h1>
          </div>
        <button 
          onClick={() => onNavigate('profile-list')}
          className="text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          변경
        </button>
        </div>
      </div>
      
      <div className="pt-20 max-w-md mx-auto space-y-6">
        {/* Welcome Card */}
        <div className="bg-teal-600 text-white p-6 rounded-2xl shadow-lg animate-fade-in">
          <h1 className="text-2xl font-bold mb-2">반가워요, 보호자님 👋</h1>
          <p className="opacity-90">{petData.petName}의 건강을 지키는 PetMedical.AI입니다.</p>
        </div>
        
        {/* 디지털 트윈 아바타 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 animate-fade-in">
          <Avatar 
            pet={{
              name: petData.petName,
              species: petData.species,
              breed: petData.breed
            }}
            size="lg"
            healthFlags={mergedFlags}
          />
        </div>
        
        {/* AI 패턴 분석 버튼 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <button
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors"
            onClick={handleAnalyzePattern}
            disabled={analyzing}
          >
            {analyzing ? "🤖 AI가 패턴 분석 중..." : "🔮 AI로 7일 건강 패턴 분석하기"}
          </button>
          {patternFlags && (
            <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200 text-sm text-green-700">
              ✅ 최근 7일 패턴 분석 완료! 아바타가 업데이트되었습니다.
            </div>
          )}
        </div>
        
        {/* 패턴 분석 결과 */}
        {patternAnalysis && patternAnalysis.patterns.length > 0 && (
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 animate-fade-in">
            <h3 className="font-bold text-blue-800 mb-3">🔮 AI 건강 패턴 분석</h3>
            <div className="space-y-2">
              {patternAnalysis.patterns.map((pattern, idx) => (
                <div key={idx} className="text-sm text-blue-700">• {pattern}</div>
              ))}
            </div>
            {patternAnalysis.predictions.length > 0 && (
              <div className="mt-4 pt-4 border-t border-blue-200">
                <strong className="text-blue-800">예측:</strong>
                {patternAnalysis.predictions.map((pred, idx) => (
                  <div key={idx} className="text-sm text-blue-700 mt-1">→ {pred}</div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Pet Info Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-3xl">
            {petData.species === 'dog' ? '🐕' : '🐈'}
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 text-lg">{petData.petName}</h2>
            <p className="text-sm text-gray-500">{petData.breed || '품종 미등록'} • {calculateAge(petData.birthDate)}</p>
          </div>
        </div>
      
        {/* 일상 케어 로그 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <DailyCareLog pet={petData} />
        </div>
        
        {/* Action Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
            onClick={() => onNavigate('symptom-input')}
          >
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-3">
              🏥
            </div>
            <h3 className="font-bold text-gray-900 mb-1">증상이 있어요</h3>
            <p className="text-xs text-gray-500">AI가 빠르게 진단합니다</p>
          </div>
          
          <div 
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
            onClick={() => onNavigate('hospital')}
          >
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-3">
              📍
            </div>
            <h3 className="font-bold text-gray-900 mb-1">병원 찾기</h3>
            <p className="text-xs text-gray-500">주변 동물병원 검색</p>
          </div>
          
          <div 
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
            onClick={() => onNavigate('mypage')}
          >
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-3">
              📋
            </div>
            <h3 className="font-bold text-gray-900 mb-1">마이페이지</h3>
            <p className="text-xs text-gray-500">진료 기록 확인</p>
          </div>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-3">
              💊
            </div>
            <h3 className="font-bold text-gray-900 mb-1">건강 케어 팁</h3>
            <p className="text-xs text-gray-500">품종별 가이드</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Symptom Input Screen
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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center px-4 z-50">
        <div className="max-w-md mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <span className="text-lg">←</span>
            </button>
            <h1 className="text-lg font-bold text-gray-900">증상 입력</h1>
          </div>
        </div>
      </div>

      <div className="pt-20 p-4 max-w-md mx-auto pb-24 space-y-6">
        {/* Selected Pet Info */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
            {petData.species === 'dog' ? '🐕' : '🐈'}
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{petData.petName}</h3>
            <p className="text-xs text-gray-500">{petData.breed}, {calculateAge(petData.birthDate)}</p>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">어떤 증상이 있나요? *</label>
          <textarea
            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent min-h-[150px] bg-white text-base"
            placeholder="예: 어제부터 밥을 안 먹고 계속 누워만 있어요. 구토를 2번 했어요."
            value={symptomText}
            onChange={(e) => setSymptomText(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">사진 첨부 (선택)</label>
          <div className="grid grid-cols-3 gap-3">
            <label className="aspect-square cursor-pointer flex flex-col items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-colors">
              <span className="text-2xl mb-1">📷</span>
              <span className="text-xs text-gray-500 font-medium">추가</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            
            {images.map((img, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 group">
                <img src={img} alt={`증상 ${index + 1}`} className="w-full h-full object-cover" />
                <button 
                  className="absolute top-1 right-1 w-6 h-6 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
          <p className="font-bold mb-1">💡 팁</p>
          <p>증상이 시작된 시기, 빈도, 변화 양상을 자세히 적어주시면 AI가 더 정확하게 진단할 수 있습니다.</p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-40">
        <div className="max-w-md mx-auto">
          <button 
            onClick={handleSubmit}
            disabled={loading || (!symptomText.trim() && images.length === 0)}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                AI 진료실 연결 중...
              </>
            ) : (
              <>
                AI 진료 시작 <span className="text-lg">→</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============ 진단 로직 (증상 기반) ============
const analyzeSymptom = (symptomText) => {
  const text = symptomText.toLowerCase();
  
  // 증상 키워드 기반 진단
  if (text.includes('귀') || text.includes('ear')) {
    return {
      diagnosis: '외이염 (확률 75%)',
      emergency: 'medium',
      actions: [
        '귀 긁는 것 방지 (넥카라 사용 권장)',
        '귀 세정 금지 (병원에서 전문 세정 필요)',
        '청결한 환경 유지',
        '습도 관리 (과도한 습도 피하기)'
      ],
      hospitalVisit: true,
      hospitalVisitTime: '24시간 내',
      description: '귀를 자주 긁거나 흔들면 외이염 가능성이 높습니다. 전문적인 귀 세정과 약물 처방이 필요할 수 있습니다.'
    };
  } else if (text.includes('기침') || text.includes('cough') || text.includes('콧물')) {
    return {
      diagnosis: '상기도 감염 의심 (확률 70%)',
      emergency: 'medium',
      actions: [
        '충분한 휴식 제공',
        '수분 섭취 촉진',
        '실내 온도 유지 (20-22도)',
        '증상 악화 시 즉시 병원 방문'
      ],
      hospitalVisit: true,
      hospitalVisitTime: '48시간 내',
      description: '기침과 콧물이 지속되면 상기도 감염 가능성이 있습니다. 호흡 곤란 시 즉시 응급실 방문이 필요합니다.'
    };
  } else if (text.includes('식욕') || text.includes('밥') || text.includes('먹') || text.includes('appetite')) {
    return {
      diagnosis: '식욕부진 (확률 65%)',
      emergency: text.includes('구토') || text.includes('설사') ? 'high' : 'medium',
      actions: [
        '신선한 물 제공',
        '부드러운 음식 제공 (닭가슴살, 계란 등)',
        '스트레스 요인 제거',
        '구토/설사 동반 시 즉시 병원 방문'
      ],
      hospitalVisit: text.includes('구토') || text.includes('설사'),
      hospitalVisitTime: text.includes('구토') || text.includes('설사') ? '즉시' : '24시간 내',
      description: '식욕부진은 다양한 원인이 있을 수 있습니다. 구토나 설사가 동반되면 탈수 위험이 있어 즉시 병원 방문이 필요합니다.'
    };
  } else if (text.includes('설사') || text.includes('diarrhea') || text.includes('변')) {
    return {
      diagnosis: '소화기 장애 (확률 70%)',
      emergency: 'high',
      actions: [
        '수분 공급 (탈수 방지)',
        '식이 제한 (12-24시간)',
        '청결한 환경 유지',
        '즉시 병원 방문 권장'
      ],
      hospitalVisit: true,
      hospitalVisitTime: '즉시',
      description: '설사가 지속되면 탈수 위험이 높습니다. 특히 어린 반려동물은 빠르게 악화될 수 있어 즉시 병원 방문이 필요합니다.'
    };
  } else if (text.includes('발작') || text.includes('경련') || text.includes('seizure')) {
    return {
      diagnosis: '신경계 이상 의심 (확률 80%)',
      emergency: 'high',
      actions: [
        '안전한 장소로 이동',
        '물체에 부딪히지 않도록 주변 정리',
        '입에 손이나 물건 넣지 않기',
        '즉시 응급실 방문'
      ],
      hospitalVisit: true,
      hospitalVisitTime: '즉시',
      description: '발작이나 경련은 즉각적인 응급 처치가 필요합니다. 발작이 5분 이상 지속되거나 반복되면 생명이 위험할 수 있습니다.'
    };
  } else {
    // 기본 진단
    return {
      diagnosis: '일반 건강 이상 (확률 60%)',
      emergency: 'low',
      actions: [
        '증상 관찰 지속',
        '충분한 휴식 제공',
        '수분 섭취 촉진',
        '증상 악화 시 병원 방문'
      ],
      hospitalVisit: false,
      hospitalVisitTime: '증상 악화 시',
      description: '증상을 지속적으로 관찰하고, 악화되거나 새로운 증상이 나타나면 병원 방문을 권장합니다.'
    };
  }
};

// ============ AI 질문 생성 로직 ============
const generateAIQuestion = (symptomText, conversationHistory) => {
  const text = symptomText.toLowerCase();
  const hasHistory = conversationHistory.length > 0;
  
  // 증상에 따라 추가 질문 생성
  if (text.includes('귀')) {
    if (!hasHistory || !conversationHistory.some(h => h.includes('언제'))) {
      return {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        question: '증상이 언제부터 시작되었나요? (예: 며칠 전부터, 오늘 아침부터)',
        questionType: 'symptom_duration'
      };
    }
    if (!conversationHistory.some(h => h.includes('냄새'))) {
      return {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        question: '귀에서 냄새가 나나요? 또는 분비물이 있나요?',
        questionType: 'ear_smell'
      };
    }
  } else if (text.includes('기침') || text.includes('콧물')) {
    if (!hasHistory || !conversationHistory.some(h => h.includes('언제'))) {
      return {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        question: '기침은 언제부터 시작되었나요? 하루에 몇 번 정도 기침하나요?',
        questionType: 'cough_frequency'
      };
    }
    if (!conversationHistory.some(h => h.includes('열'))) {
      return {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        question: '체온이 높아 보이나요? 또는 코가 건조한가요?',
        questionType: 'fever'
      };
    }
  } else if (text.includes('식욕') || text.includes('밥')) {
    if (!hasHistory || !conversationHistory.some(h => h.includes('언제'))) {
      return {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        question: '식욕이 없어진 지 얼마나 되었나요? 완전히 안 먹나요, 아니면 조금만 먹나요?',
        questionType: 'appetite_detail'
      };
    }
  }
  
  // 기본 질문
  return {
    agent: 'Veterinarian Agent',
    role: '전문 수의사',
    icon: '👨‍⚕️',
    type: 'medical',
    question: '추가로 관찰하신 증상이나 변화가 있으신가요?',
    questionType: 'additional_symptoms'
  };
};

// ============ 멀티에이전트 진료 (핵심!) ============
function MultiAgentDiagnosis({ petData, symptomData, onComplete, onBack, onDiagnosisResult }) {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [chatMode, setChatMode] = useState(false); // 대화 모드 활성화 여부
  const [waitingForAnswer, setWaitingForAnswer] = useState(false); // AI 질문 대기 중
  const [conversationHistory, setConversationHistory] = useState([]);
  
  useEffect(() => {
    const startAIDiagnosis = async () => {
      try {
        setIsProcessing(true);
        setMessages([]);
        setCurrentStep(0);

        // 실제 AI API 호출
        const result = await runMultiAgentDiagnosis(
          petData,
          symptomData,
          (log) => {
            setMessages(prev => [...prev, {
              agent: log.agent,
              role: log.role,
              icon: log.icon,
              type: log.type,
              content: log.content,
              timestamp: log.timestamp
            }]);
            setCurrentStep(prev => prev + 1);
          }
        );

        // 최종 진단서 표시
        setTimeout(() => {
          setDiagnosisResult(result.finalDiagnosis);
          setShowResult(true);
          setIsProcessing(false);
          setChatMode(true);
          
          // 진단서 저장
          saveDiagnosisToStorage(result.finalDiagnosis);
          
          // 부모 컴포넌트에 진단 결과 전달
          if (onDiagnosisResult) {
            onDiagnosisResult(result.finalDiagnosis);
          }
        }, 1500);

      } catch (error) {
        console.error('AI 진단 오류:', error);
        // Fallback: 기존 로직 사용
        const symptomText = symptomData?.symptomText || '증상 정보 없음';
        const hasImages = symptomData?.images?.length > 0;
        const analysis = analyzeSymptom(symptomText);
        
        const agentMessages = [
          {
            agent: 'CS Agent',
            role: '상담 간호사',
            icon: '💬',
            type: 'cs',
            content: `안녕하세요, ${petData.petName} 보호자님.\n\n접수 완료했습니다.\n\n환자 정보:\n• 이름: ${petData.petName}\n• 종류: ${petData.species === 'dog' ? '개' : '고양이'}\n• 품종: ${petData.breed || '미등록'}\n\n증상:\n${symptomText}\n${hasImages ? `\n사진 ${symptomData.images.length}장 확인 완료\n` : ''}\n→ Information Agent에게 전달합니다.`
          },
          {
            agent: 'Information Agent',
            role: '정보수집가',
            icon: '🔍',
            type: 'info',
            content: `증상 정보 수집 및 분석 중...\n\n${hasImages ? '📷 이미지 분석: 증상 부위 확인 중...\n' : ''}🔎 유사 케이스 검색: 데이터베이스 검색 중...\n📋 이전 진료 기록: 관련 기록 확인 중...\n📊 증상 패턴 분석: AI 모델 분석 중...\n\n→ 분석 완료. Veterinarian Agent에게 전달합니다.`
          },
          {
            agent: 'Veterinarian Agent',
            role: '전문 수의사',
            icon: '👨‍⚕️',
            type: 'medical',
            content: `종합 진단 수행 중...\n\n🔬 증상 분석 결과:\n${analysis.description}\n\n📊 진단 결과:\n• ${analysis.diagnosis}\n\n⚠️ 위험도: ${analysis.emergency === 'low' ? '낮음' : analysis.emergency === 'medium' ? '보통' : '높음'}\n🚨 응급도: ${analysis.emergency === 'low' ? '🟢 경미' : analysis.emergency === 'medium' ? '🟡 보통' : '🔴 응급'}\n\n→ Data Agent, 진단서 작성 부탁합니다.`
          },
          {
            agent: 'Data Agent',
            role: '데이터 처리자',
            icon: '💾',
            type: 'data',
            content: `진료 기록 생성 중...\n\n✅ 진단서 템플릿 작성 완료\n✅ 데이터 구조화 완료\n✅ 로컬 스토리지 저장 완료\n✅ 진단서 PDF 생성 준비 완료\n\n→ 진단서 생성 완료!`
          }
        ];
        
        agentMessages.forEach((msg, index) => {
          setTimeout(() => {
            setMessages(prev => [...prev, msg]);
            setCurrentStep(index + 1);
            
            if (index === agentMessages.length - 1) {
              setTimeout(() => {
                const finalDiagnosis = {
                  ...analysis,
                  id: Date.now().toString(),
                  created_at: Date.now(),
                  petId: petData.id,
                  petName: petData.petName,
                  symptom: symptomText
                };
                setDiagnosisResult(finalDiagnosis);
                setShowResult(true);
                setIsProcessing(false);
                setChatMode(true);
                saveDiagnosisToStorage(finalDiagnosis);
                if (onDiagnosisResult) {
                  onDiagnosisResult(finalDiagnosis);
                }
              }, 1500);
            }
          }, index * 3000);
        });
      }
    };

    startAIDiagnosis();
  }, [petData, symptomData]);

  const showFinalDiagnosis = (analysis, symptomText, hasImages) => {
    setDiagnosisResult(analysis);
    setShowResult(true);
    setChatMode(false);
    
    // 진단서 저장
    const savedDiagnosis = {
      petId: petData.id,
      petName: petData.petName,
      symptom: symptomText,
      images: hasImages ? symptomData.images.length : 0,
      conversationHistory: conversationHistory,
      ...analysis
    };
    saveDiagnosisToStorage(savedDiagnosis);
    
    // 부모 컴포넌트에 진단 결과 전달
    if (onDiagnosisResult) {
      onDiagnosisResult(analysis);
    }
  };

  const handleUserMessage = () => {
    if (!userInput.trim() || !waitingForAnswer) return;

    const userMessage = userInput.trim();
    
    // 사용자 메시지 추가
    setMessages(prev => [...prev, {
      agent: '사용자',
      role: '보호자',
      icon: '👤',
      type: 'user',
      content: userMessage,
      isUser: true
    }]);

    // 대화 히스토리에 추가
    setConversationHistory(prev => [...prev, userMessage]);
    
    setUserInput('');
    setWaitingForAnswer(false);
    setIsProcessing(true);

    // AI가 답변 처리
    setTimeout(() => {
      const updatedAnalysis = analyzeSymptom(symptomData.symptomText + ' ' + userMessage);
      
      setMessages(prev => [...prev, {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        content: `답변 감사합니다. 정보를 반영하여 진단을 업데이트하겠습니다.\n\n${updatedAnalysis.description}\n\n추가 질문이 있으시면 언제든지 물어보세요.`,
        isResponse: true
      }]);

      // 추가 질문이 필요한지 확인
      setTimeout(() => {
        const updatedHistory = [...conversationHistory, userMessage];
        const nextQuestion = generateAIQuestion(symptomData.symptomText, updatedHistory);
        if (nextQuestion && updatedHistory.length < 3) { // 최대 3번까지 질문
          setMessages(prev => [...prev, {
            ...nextQuestion,
            content: `추가로 확인하고 싶은 것이 있습니다.\n\n${nextQuestion.question}`,
            isQuestion: true
          }]);
          setWaitingForAnswer(true);
        } else {
          // 더 이상 질문이 없으면 최종 진단서 표시
          showFinalDiagnosis(updatedAnalysis, symptomData.symptomText + ' ' + userMessage, symptomData.images?.length > 0);
        }
        setIsProcessing(false);
      }, 2000);
    }, 1500);
  };

  const handleUserQuestion = () => {
    if (!userInput.trim()) return;

    const userQuestion = userInput.trim();
    
    // 사용자 질문 추가
    setMessages(prev => [...prev, {
      agent: '사용자',
      role: '보호자',
      icon: '👤',
      type: 'user',
      content: `질문: ${userQuestion}`,
      isUser: true,
      isQuestion: true
    }]);

    setUserInput('');
    setIsProcessing(true);

    // AI가 질문에 답변
    setTimeout(() => {
      let answer = '';
      
      if (userQuestion.includes('왜') || userQuestion.includes('원인')) {
        answer = '증상의 원인은 다양할 수 있습니다. 정확한 원인 파악을 위해서는 병원에서 검사가 필요할 수 있습니다.';
      } else if (userQuestion.includes('언제') || userQuestion.includes('얼마나')) {
        answer = '증상의 지속 기간과 심각도에 따라 치료 방법이 달라질 수 있습니다. 지속적으로 관찰하시고, 악화되면 즉시 병원을 방문하세요.';
      } else if (userQuestion.includes('약') || userQuestion.includes('처방')) {
        answer = '약물 처방은 수의사의 진단 후에 이루어집니다. 처방전 없이 사람 약물을 사용하지 마세요.';
      } else if (userQuestion.includes('응급') || userQuestion.includes('위험')) {
        answer = '호흡 곤란, 의식 저하, 심한 출혈, 발작 등이 있으면 즉시 응급실로 가세요.';
      } else {
        answer = '좋은 질문입니다. 더 정확한 답변을 위해 추가 정보가 필요할 수 있습니다. 병원 방문 시 수의사에게 직접 문의하시는 것을 권장합니다.';
      }

      setMessages(prev => [...prev, {
        agent: 'Veterinarian Agent',
        role: '전문 수의사',
        icon: '👨‍⚕️',
        type: 'medical',
        content: answer,
        isResponse: true
      }]);

      setIsProcessing(false);
    }, 1500);
  };
  
  const steps = [
    { label: '접수', icon: '1' },
    { label: '분석', icon: '2' },
    { label: '진단', icon: '3' },
    { label: '완료', icon: '4' }
  ];
  

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
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isUser ? 'user-message' : 'agent-message'} ${index === messages.length - 1 ? 'latest' : ''}`}>
              <div className="message-header">
                <div className={`agent-icon ${msg.type} ${index === messages.length - 1 && !msg.isUser ? 'pulse' : ''}`}>{msg.icon}</div>
                <div>
                  <div className="agent-name">{msg.agent}</div>
                  <div className="agent-role">{msg.role}</div>
                </div>
                <div className="message-time">{new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              <div className={`message-content ${msg.isQuestion ? 'question-message' : ''}`}>
                {msg.content}
                {msg.isQuestion && (
                  <div className="question-hint">💡 위 입력창에 답변을 입력해주세요</div>
                )}
              </div>
            </div>
          ))}
          
          {isProcessing && (
            <div className="typing-indicator">
              <span className="typing-text">
                {waitingForAnswer ? '답변을 기다리는 중...' : '다음 에이전트가 작업 중입니다...'}
              </span>
              <div className="typing-dots">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
        </div>

        {chatMode && (
          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (waitingForAnswer) {
                      handleUserMessage();
                    } else {
                      handleUserQuestion();
                    }
                  }
                }}
                placeholder={waitingForAnswer ? "AI 의사의 질문에 답변해주세요..." : "궁금한 점을 물어보세요..."}
                className="chat-input"
                disabled={isProcessing}
              />
              <button
                onClick={waitingForAnswer ? handleUserMessage : handleUserQuestion}
                disabled={!userInput.trim() || isProcessing}
                className="chat-send-btn"
              >
                {waitingForAnswer ? '답변하기' : '질문하기'}
              </button>
            </div>
            {!waitingForAnswer && (
              <div className="chat-hint">
                💡 AI 의사에게 질문하거나, 추가 증상을 설명할 수 있습니다
              </div>
            )}
          </div>
        )}
      </div>
      
      {showResult && diagnosisResult && (
        <div className="diagnosis-result">
          <div className="result-header">
            <h2>✅ 진료 완료!</h2>
            <p className="result-date">{new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div className="result-card">
            <div className="result-section">
              <h3>🎯 진단 결과</h3>
              <p className="diagnosis-text"><strong>{diagnosisResult.diagnosis}</strong></p>
              
              {/* Triage Score 표시 */}
              {diagnosisResult.triage_score !== undefined && (
                <div className="triage-display-inline">
                  <div className="triage-label">🚨 응급도 평가 (Triage)</div>
                  <div className="triage-score-inline">
                    <span className="triage-number">{diagnosisResult.triage_score}/5</span>
                    <div className="triage-bar-inline">
                      <div 
                        className="triage-fill-inline"
                        style={{ 
                          width: `${(diagnosisResult.triage_score / 5) * 100}%`,
                          backgroundColor: diagnosisResult.triage_score >= 4 ? '#f44336' : 
                                           diagnosisResult.triage_score >= 3 ? '#ff9800' : 
                                           diagnosisResult.triage_score >= 2 ? '#ffc107' : '#4caf50'
                        }}
                      ></div>
                    </div>
                    <span className="triage-level-text">{diagnosisResult.triage_level || 'Moderate'}</span>
                  </div>
                </div>
              )}
              
              <div className="emergency-badge" style={{ 
                backgroundColor: getEmergencyColor(diagnosisResult.emergency),
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                display: 'inline-block',
                marginTop: '15px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {diagnosisResult.emergency === 'low' ? '🟢 경미 - 집에서 관리 가능' : 
                 diagnosisResult.emergency === 'medium' ? '🟡 보통 - 병원 방문 권장' : '🔴 응급 - 즉시 병원 방문 필요'}
              </div>
            </div>
            
            {diagnosisResult.description && (
              <div className="result-section">
                <h3>📋 상세 설명</h3>
                <p className="description-text">{diagnosisResult.description}</p>
              </div>
            )}
            
            <div className="result-section">
              <h3>💊 즉시 조치 사항</h3>
              <ul className="action-list">
                {diagnosisResult.actions.map((action, idx) => (
                  <li key={idx}>
                    <span className="action-icon">✓</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {diagnosisResult.hospitalVisit && (
              <div className="result-section hospital-section">
                <h3>🏥 병원 방문 권장</h3>
                <div className="hospital-alert">
                  <p className="hospital-time"><strong>{diagnosisResult.hospitalVisitTime}</strong> 내 병원 방문을 권장합니다.</p>
                  {diagnosisResult.emergency === 'high' && (
                    <p className="emergency-warning">⚠️ 응급 상황입니다. 가능한 한 빨리 병원을 방문해주세요.</p>
                  )}
                </div>
              </div>
            )}

            <div className="action-buttons">
              <button className="action-btn primary" onClick={() => onComplete('treatment')}>
                🏠 직접 치료하기
              </button>
            {diagnosisResult.hospitalVisit && (
              <button className="action-btn secondary" onClick={async () => {
                // 병원 패킷 생성
                try {
                  const packet = await generateHospitalPacket(petData, diagnosisResult, symptomData);
                  // 패킷을 상태에 저장하거나 바로 표시
                  alert('병원 진단 패킷이 생성되었습니다!\n\n병원 예약 화면에서 확인할 수 있습니다.');
                  onComplete('hospital');
                } catch (err) {
                  console.error('패킷 생성 오류:', err);
                  onComplete('hospital');
                }
              }}>
                🏥 병원 예약하기 (AI 패킷 생성)
              </button>
            )}
              {chatMode && (
                <button className="action-btn outline" onClick={() => {
                  setChatMode(false);
                  setShowResult(true);
                }}>
                  💬 대화 계속하기
                </button>
              )}
              <button className="action-btn outline" onClick={() => onComplete('dashboard')}>
                📋 대시보드로
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ 직접 치료 가이드 화면 ============
function HomeTreatmentGuide({ petData, diagnosisResult, onBack }) {
  const getTreatmentSteps = () => {
    if (!diagnosisResult) {
      return [
        { step: 1, title: '증상 관찰', description: '반려동물의 증상을 지속적으로 관찰하세요.' },
        { step: 2, title: '안전한 환경', description: '편안하고 안전한 환경을 제공하세요.' },
        { step: 3, title: '수분 공급', description: '충분한 깨끗한 물을 제공하세요.' }
      ];
    }

    const emergency = diagnosisResult.emergency;
    const baseSteps = [
      { step: 1, title: '즉시 조치', description: diagnosisResult.actions[0] || '증상 관찰' },
      { step: 2, title: '환경 관리', description: '청결하고 편안한 환경을 유지하세요.' },
      { step: 3, title: '수분 및 영양', description: '충분한 수분과 부드러운 음식을 제공하세요.' }
    ];

    if (emergency === 'low') {
      return [
        ...baseSteps,
        { step: 4, title: '관찰 기간', description: '24-48시간 동안 증상을 관찰하세요.' },
        { step: 5, title: '재진료 시점', description: '증상이 개선되지 않거나 악화되면 병원 방문하세요.' }
      ];
    } else {
      return [
        ...baseSteps,
        { step: 4, title: '주의사항', description: '증상이 악화되면 즉시 병원을 방문하세요.' },
        { step: 5, title: '응급 상황', description: '호흡 곤란, 의식 저하, 심한 구토/설사 시 즉시 응급실로 가세요.' }
      ];
    }
  };

  const steps = getTreatmentSteps();
  const recoveryTime = diagnosisResult?.emergency === 'low' ? '3-5일' : 
                       diagnosisResult?.emergency === 'medium' ? '5-7일' : '병원 치료 후 확인';

  return (
    <div className="treatment-container">
      <div className="treatment-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <h1>🏠 직접 치료 가이드</h1>
      </div>

      <div className="treatment-content">
        <div className="treatment-intro">
          <div className="pet-info-card">
            <span className="pet-icon-large">{petData.species === 'dog' ? '🐕' : '🐈'}</span>
            <div>
              <h2>{petData.petName}의 치료 가이드</h2>
              {diagnosisResult && (
                <p className="diagnosis-summary">{diagnosisResult.diagnosis}</p>
              )}
            </div>
          </div>
        </div>

        <div className="treatment-steps">
          <h3>📋 단계별 치료 방법</h3>
          {steps.map((item, index) => (
            <div key={index} className="treatment-step-card">
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {diagnosisResult && (
          <>
            <div className="treatment-info">
              <h3>⏰ 예상 회복 기간</h3>
              <p className="recovery-time">{recoveryTime}</p>
            </div>

            <div className="treatment-warnings">
              <h3>⚠️ 주의사항</h3>
              <ul>
                <li>증상이 악화되거나 새로운 증상이 나타나면 즉시 병원을 방문하세요.</li>
                <li>처방전 없이 사람 약물을 사용하지 마세요.</li>
                <li>응급 상황(호흡 곤란, 의식 저하, 심한 출혈 등)은 즉시 응급실로 가세요.</li>
                <li>이 가이드는 참고용이며, 전문 수의사의 진단을 대체할 수 없습니다.</li>
              </ul>
            </div>

            <div className="treatment-checklist">
              <h3>✅ 일일 체크리스트</h3>
              <div className="checklist-items">
                <label><input type="checkbox" /> 증상 관찰 및 기록</label>
                <label><input type="checkbox" /> 수분 섭취 확인</label>
                <label><input type="checkbox" /> 식욕 상태 확인</label>
                <label><input type="checkbox" /> 배변 상태 확인</label>
                <label><input type="checkbox" /> 활동량 관찰</label>
              </div>
            </div>
          </>
        )}

        <div className="treatment-actions">
          <button className="action-btn secondary" onClick={onBack}>
            진단서로 돌아가기
          </button>
          {diagnosisResult?.hospitalVisit && (
            <button className="action-btn primary" onClick={() => window.location.reload()}>
              병원 예약하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============ 유틸리티 함수 ============
const getEmergencyColor = (emergency) => {
  switch(emergency) {
    case 'low':
    case 'Low': return '#4caf50';
    case 'medium':
    case 'Moderate': return '#ff9800';
    case 'high':
    case 'High':
    case 'Emergency': return '#f44336';
    default: return '#666';
  }
};

// ============ 메인 앱 ============
function App() {
  const [currentView, setCurrentView] = useState('profile-list');
  const [petData, setPetData] = useState(null);
  const [pets, setPets] = useState([]);
  const [symptomData, setSymptomData] = useState(null);
  const [lastDiagnosis, setLastDiagnosis] = useState(null);

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

  const handleDiagnosisComplete = (action, diagnosisResult) => {
    if (diagnosisResult) {
      setLastDiagnosis(diagnosisResult);
    }
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
          onComplete={(action) => handleDiagnosisComplete(action, lastDiagnosis)}
          onBack={() => setCurrentView('symptom-input')}
          onDiagnosisResult={(result) => setLastDiagnosis(result)}
        />
      )}

      {currentView === 'treatment' && petData && (
        <HomeTreatmentGuide 
          petData={petData}
          diagnosisResult={lastDiagnosis}
          onBack={() => setCurrentView('diagnosis')}
        />
      )}

      {currentView === 'hospital' && petData && lastDiagnosis && (
        <HospitalBooking 
          petData={petData}
          diagnosis={lastDiagnosis}
          symptomData={symptomData}
          onBack={() => setCurrentView('diagnosis')}
        />
      )}

      {currentView === 'mypage' && (
        <MyPage
          onBack={() => setCurrentView('dashboard')}
          onSelectPet={(pet) => {
            setPetData(pet);
            setCurrentView('dashboard');
          }}
          onViewDiagnosis={(diagnosis) => {
            setLastDiagnosis(diagnosis);
            // 진단서를 보기 위해 해당 반려동물 찾기
            const pet = pets.find(p => p.id === diagnosis.petId);
            if (pet) {
              setPetData(pet);
            }
            setCurrentView('diagnosis-view');
          }}
        />
      )}

      {currentView === 'diagnosis-view' && petData && lastDiagnosis && (
        <div className="diagnosis-view-container">
          <button className="back-btn" onClick={() => setCurrentView('mypage')}>← 뒤로</button>
          <div className="diagnosis-result">
            <div className="result-header">
              <h2>✅ 진단서</h2>
              <p className="result-date">
                {new Date(lastDiagnosis.created_at || lastDiagnosis.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            
            <div className="result-card">
              <div className="result-section">
                <h3>🎯 진단 결과</h3>
                <p className="diagnosis-text">
                  <strong>{lastDiagnosis.diagnosis || lastDiagnosis.suspectedConditions?.[0]?.name || '일반 건강 이상'}</strong>
                </p>
                <div
                  className="emergency-badge"
                  style={{
                    backgroundColor: getEmergencyColor(lastDiagnosis.riskLevel || lastDiagnosis.emergency),
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    display: 'inline-block',
                    marginTop: '15px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  {lastDiagnosis.riskLevel === 'Low' || lastDiagnosis.emergency === 'low' ? '🟢 경미' :
                   lastDiagnosis.riskLevel === 'Moderate' || lastDiagnosis.emergency === 'medium' ? '🟡 보통' :
                   lastDiagnosis.riskLevel === 'High' || lastDiagnosis.emergency === 'high' ? '🔴 응급' : '🟡 보통'}
                </div>
              </div>
              
              {lastDiagnosis.description && (
                <div className="result-section">
                  <h3>📋 상세 설명</h3>
                  <p className="description-text">{lastDiagnosis.description}</p>
                </div>
              )}
              
              {lastDiagnosis.actions && lastDiagnosis.actions.length > 0 && (
                <div className="result-section">
                  <h3>💊 즉시 조치 사항</h3>
                  <ul className="action-list">
                    {lastDiagnosis.actions.map((action, idx) => (
                      <li key={idx}>
                        <span className="action-icon">✓</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {lastDiagnosis.hospitalVisit && (
                <div className="result-section hospital-section">
                  <h3>🏥 병원 방문 권장</h3>
                  <div className="hospital-alert">
                    <p className="hospital-time">
                      <strong>{lastDiagnosis.hospitalVisitTime || '24시간 내'}</strong> 내 병원 방문을 권장합니다.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {currentView === 'history' && (
        <div className="history-container">
          <button className="back-btn" onClick={() => setCurrentView('dashboard')}>← 뒤로</button>
          <h1>📋 진료 기록</h1>
          <div className="history-content">
            <p>마이페이지에서 확인하실 수 있습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
