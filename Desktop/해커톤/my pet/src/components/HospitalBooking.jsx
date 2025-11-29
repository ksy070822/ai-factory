import { useState, useEffect, useRef } from 'react';
import { generateHospitalPacket } from '../services/ai/hospitalPacket';
import { getCurrentPosition, searchAnimalHospitals, initKakaoMap, addMarker, loadKakao } from '../services/kakaoMap';

export function HospitalBooking({ petData, diagnosis, symptomData, onBack }) {
  const [hospitalPacket, setHospitalPacket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [mapLoading, setMapLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  // 1. 병원 패킷 생성 및 현재 위치 가져오기
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      try {
        // 패킷 생성
        if (diagnosis && petData && !hospitalPacket) {
          const packet = await generateHospitalPacket(petData, diagnosis, symptomData);
          if (isMounted) {
            setHospitalPacket(packet);
            setLoading(false);
          }
        } else {
          if (isMounted) setLoading(false);
        }

        // 위치 및 병원 검색
        const position = await getCurrentPosition();
        if (isMounted) setUserLocation(position);

        const hospitalList = await searchAnimalHospitals(position.lat, position.lng);
        if (isMounted) {
          setHospitals(hospitalList);
          setMapLoading(false);
        }
      } catch (error) {
        console.error('초기화 오류:', error);
        if (isMounted) {
          setLoading(false);
          setMapLoading(false);
        }
      }
    };

    init();

    return () => {
      isMounted = false;
    };
  }, [petData, diagnosis, symptomData]);

  // 2. 지도 초기화 및 마커 표시
  useEffect(() => {
    if (!userLocation || !mapContainerRef.current || hospitals.length === 0) return;

    const initMap = async () => {
      try {
        const containerId = 'kakao-map-container';
        let mapDiv = document.getElementById(containerId);
        
        // 이미 지도가 있으면 재사용하지 않고 새로 생성 (간단한 처리를 위해)
        if (mapContainerRef.current.innerHTML === '') {
           mapDiv = document.createElement('div');
           mapDiv.id = containerId;
           mapDiv.style.width = '100%';
           mapDiv.style.height = '300px';
           mapDiv.style.borderRadius = '12px';
           mapContainerRef.current.appendChild(mapDiv);
        } else {
           return; // 이미 지도가 있으면 패스
        }

        const map = await initKakaoMap(containerId, userLocation.lat, userLocation.lng);
        mapRef.current = map;

        // 현재 위치 마커 (파란색 원)
        const kakao = await loadKakao();
        const myPos = new kakao.maps.LatLng(userLocation.lat, userLocation.lng);
        
        const myCircle = new kakao.maps.Circle({
          center: myPos,
          radius: 50,
          strokeWeight: 2,
          strokeColor: '#4C6FFF',
          strokeOpacity: 0.7,
          fillColor: '#4C6FFF',
          fillOpacity: 0.2, 
        });
        myCircle.setMap(map);

        // 병원 마커 추가
        for (const hospital of hospitals) {
          await addMarker(
            map,
            hospital.lat,
            hospital.lng,
            hospital.name,
            hospital.is24Hours
          );
        }

        // 지도 중심 재조정 (첫번째 병원 기준)
        if (hospitals.length > 0) {
          const firstHospital = hospitals[0];
          const moveLatLon = new kakao.maps.LatLng(firstHospital.lat, firstHospital.lng);
          map.panTo(moveLatLon);
        }
      } catch (error) {
        console.error('지도 렌더링 오류:', error);
      }
    };

    initMap();
  }, [userLocation, hospitals]);

  const handleBookAppointment = (hospital) => {
    setSelectedHospital(hospital);
    // 여기에 실제 예약 전송 로직 추가 가능
  };

  const handleRefreshLocation = async () => {
    setMapLoading(true);
    try {
      const position = await getCurrentPosition();
      setUserLocation(position);
      const hospitalList = await searchAnimalHospitals(position.lat, position.lng);
      setHospitals(hospitalList);
    } catch (error) {
      console.error('위치 갱신 오류:', error);
    } finally {
      setMapLoading(false);
    }
  };

  const formatDistance = (meters) => {
    if (meters < 1000) {
      return `${meters}m`;
    }
    return `${(meters / 1000).toFixed(1)}km`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center px-4 z-50">
        <div className="max-w-md mx-auto w-full flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <span className="text-lg">←</span>
          </button>
          <h1 className="text-lg font-bold text-gray-900">병원 찾기</h1>
        </div>
      </div>

      <div className="pt-20 p-4 max-w-md mx-auto pb-24 space-y-6">
        {/* AI 진단 패킷 미리보기 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-teal-50 p-4 border-b border-teal-100">
            <h3 className="font-bold text-teal-800 flex items-center gap-2">
              <span>📦</span> AI 진단 패킷 준비 완료
            </h3>
            <p className="text-xs text-teal-600 mt-1">선택한 병원에 자동으로 전송됩니다</p>
          </div>
          
          {loading ? (
            <div className="p-8 text-center text-gray-500">
              <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              패킷 생성 중...
            </div>
          ) : hospitalPacket && (
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-2 font-mono bg-gray-50 p-2 rounded border border-gray-100 max-h-32 overflow-y-auto">
                {hospitalPacket.packet_text}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                <span>작성일: {new Date().toLocaleDateString()}</span>
                <span>상태: <span className="text-green-500 font-bold">준비됨</span></span>
              </div>
            </div>
          )}
        </div>

        {/* Triage Score 표시 */}
        {diagnosis?.triage_score !== undefined && (
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-900">🚨 응급도 평가</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                diagnosis.triage_score >= 4 ? 'bg-red-100 text-red-600' : 
                diagnosis.triage_score >= 3 ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
              }`}>
                {diagnosis.triage_level || 'Normal'}
              </span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                  diagnosis.triage_score >= 4 ? 'bg-red-500' : 
                  diagnosis.triage_score >= 3 ? 'bg-orange-500' : 
                  diagnosis.triage_score >= 2 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${(diagnosis.triage_score / 5) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 text-right">{diagnosis.hospitalVisitTime || '24시간 내'} 권장</p>
          </div>
        )}

        {/* 지도 및 병원 목록 */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-lg">📍 내 주변 병원</h3>
            <button 
              onClick={handleRefreshLocation}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
            >
              🔄 현 위치 재검색
            </button>
          </div>

          {/* 지도 영역 */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-[300px] relative shadow-inner border border-gray-200">
            {mapLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                <p className="text-gray-500 text-sm">지도를 불러오는 중...</p>
              </div>
            )}
            <div ref={mapContainerRef} className="w-full h-full"></div>
          </div>

          {/* 병원 리스트 */}
          <div className="space-y-3">
            {hospitals.length === 0 && !mapLoading ? (
              <div className="text-center py-8 text-gray-500 bg-white rounded-2xl border border-gray-100">
                주변에 동물병원을 찾을 수 없습니다.
              </div>
            ) : (
              hospitals.map(hospital => (
                <div key={hospital.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-teal-200 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900">{hospital.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{hospital.roadAddress || hospital.address}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-teal-600 font-bold text-sm">{formatDistance(hospital.distance)}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {hospital.is24Hours ? (
                      <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-md">24시 응급</span>
                    ) : (
                      <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded-md">진료중</span>
                    )}
                    <span className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] rounded-md">{hospital.category}</span>
                  </div>

                  <div className="flex gap-2">
                    {hospital.phone && (
                      <a 
                        href={`tel:${hospital.phone}`}
                        className="flex-1 py-2 text-center border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        📞 전화
                      </a>
                    )}
                    <button 
                      onClick={() => handleBookAppointment(hospital)}
                      className="flex-1 py-2 text-center bg-teal-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-teal-700 transition-colors"
                    >
                      예약하기
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 예약 완료 모달 */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm text-center shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ✅
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">예약 요청 완료!</h2>
            <p className="text-gray-600 mb-6">
              <span className="font-bold text-gray-800">{selectedHospital.name}</span>으로<br/>
              AI 진단 패킷이 전송되었습니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl mb-6 text-left text-sm border border-gray-100">
              <p className="mb-1"><strong>보낸 내용:</strong> {hospitalPacket?.packet_json?.packet_title || 'AI 진단 요약'}</p>
              <p><strong>병원 연락처:</strong> {selectedHospital.phone || '정보 없음'}</p>
            </div>
            <button 
              onClick={() => {
                setSelectedHospital(null);
                onBack();
              }}
              className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold shadow-lg shadow-teal-200 hover:bg-teal-700 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
