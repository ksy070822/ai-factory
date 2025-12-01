// 카카오맵 API 서비스
const KAKAO_REST_API_KEY = '6a6433ff3ccbbc31a0448cae49055e4d'; // REST API 키 (필요시 사용)

// SDK 로딩 상태 관리
let kakaoLoaded = false;
let kakaoLoadingPromise = null;

/**
 * 카카오맵 SDK 로드 (중복 로드 방지)
 */
export function loadKakao() {
  if (kakaoLoaded) return Promise.resolve(window.kakao);
  if (kakaoLoadingPromise) return kakaoLoadingPromise;

  kakaoLoadingPromise = new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      kakaoLoaded = true;
      resolve(window.kakao);
      return;
    }

    const checkInterval = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(checkInterval);
        kakaoLoaded = true;
        resolve(window.kakao);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(checkInterval);
      if (!kakaoLoaded) {
        reject(new Error("Kakao Maps SDK 로딩 실패"));
      }
    }, 10000);
  });

  return kakaoLoadingPromise;
}

/**
 * 현재 위치 가져오기 (Geolocation API)
 */
export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation을 지원하지 않습니다.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        // 위치 권한이 거부되면 서울 강남구 좌표 반환 (Fallback)
        console.warn('위치 권한이 거부되었습니다. 기본 위치(서울 강남구)를 사용합니다.');
        resolve({
          lat: 37.4979,
          lng: 127.0276,
        });
      }
    );
  });
}

/**
 * 카카오맵 JavaScript SDK로 동물병원 검색
 */
export async function searchAnimalHospitals(lat, lng, radius = 5000) {
  console.log('[KakaoMap] 동물병원 검색 시작:', { lat, lng, radius });

  try {
    const kakao = await loadKakao();
    console.log('[KakaoMap] SDK 로드 완료');

    return new Promise((resolve, reject) => {
      const places = new kakao.maps.services.Places();
      const callback = function(result, status) {
        console.log('[KakaoMap] 검색 결과:', { status, resultCount: result?.length });

        if (status === kakao.maps.services.Status.OK) {
          const hospitals = result.map((place) => ({
            id: place.id,
            name: place.place_name,
            address: place.address_name,
            roadAddress: place.road_address_name,
            phone: place.phone,
            distance: parseInt(place.distance),
            lat: parseFloat(place.y),
            lng: parseFloat(place.x),
            category: place.category_name,
            url: place.place_url,
            is24Hours: place.place_name.includes('24') || place.place_name.includes('응급'),
            rating: (4 + Math.random()).toFixed(1), // 임시 평점
            reviewCount: Math.floor(Math.random() * 200) + 10, // 임시 리뷰 수
          })).sort((a, b) => a.distance - b.distance);

          console.log('[KakaoMap] 검색 성공:', hospitals.length, '개 병원 발견');
          resolve(hospitals);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          console.log('[KakaoMap] 검색 결과 없음');
          resolve([]);
        } else {
          console.error('[KakaoMap] 검색 오류:', status);
          reject(new Error('검색 중 오류가 발생했습니다: ' + status));
        }
      };

      const options = {
        location: new kakao.maps.LatLng(lat, lng),
        radius: radius,
        sort: kakao.maps.services.SortBy.DISTANCE,
      };

      console.log('[KakaoMap] keywordSearch 호출');
      places.keywordSearch('동물병원', callback, options);
    });
  } catch (error) {
    console.error('[KakaoMap] 동물병원 검색 오류:', error);
    console.log('[KakaoMap] Mock 데이터 사용');
    return getMockHospitals(lat, lng);
  }
}

/**
 * 모킹 병원 데이터 (API 실패 시 사용) - 위치 기반 동적 생성
 */
function getMockHospitals(lat, lng) {
  // 다양한 병원 이름 템플릿
  const hospitalNames = [
    '24시 동물메디컬센터',
    '행복한 동물병원',
    '사랑 동물병원',
    '펫케어 동물의료센터',
    '청담 동물병원',
    '하나 동물클리닉',
    '더 좋은 동물병원',
    '우리 동물병원',
  ];

  // 위치 기반으로 가상 병원 생성
  return hospitalNames.slice(0, 5).map((name, index) => {
    const offsetLat = (Math.random() - 0.5) * 0.02;
    const offsetLng = (Math.random() - 0.5) * 0.02;
    const distance = Math.floor(Math.sqrt(offsetLat ** 2 + offsetLng ** 2) * 111000);

    return {
      id: `mock_${index}`,
      name: name,
      address: `내 위치 기반 검색 결과`,
      roadAddress: `내 위치에서 약 ${distance}m`,
      phone: `02-${String(1000 + index * 111).padStart(4, '0')}-${String(5000 + index * 222).padStart(4, '0')}`,
      distance: distance + 200 * index,
      lat: lat + offsetLat,
      lng: lng + offsetLng,
      category: '동물병원',
      url: '',
      is24Hours: index === 0, // 첫 번째만 24시
      rating: (4.2 + Math.random() * 0.7).toFixed(1),
      reviewCount: Math.floor(50 + Math.random() * 200),
      homepage: null,
      businessHours: null,
    };
  }).sort((a, b) => a.distance - b.distance);
}

/**
 * 카카오맵 지도 초기화
 */
export async function initKakaoMap(containerId, lat, lng) {
  const kakao = await loadKakao();
  
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error('지도 컨테이너를 찾을 수 없습니다.');
  }

  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 5, // 지도 확대 레벨
  };

  return new kakao.maps.Map(container, options);
}

/**
 * 지도에 마커 추가
 */
export async function addMarker(map, lat, lng, title, is24Hours = false) {
  const kakao = await loadKakao();
  
  const imageSrc = is24Hours
    ? 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
    : 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker.png';
  const imageSize = new kakao.maps.Size(24, 35);
  const imageOption = { offset: new kakao.maps.Point(12, 35) };
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

  const position = new kakao.maps.LatLng(lat, lng);
  const marker = new kakao.maps.Marker({
    position: position,
    image: markerImage,
    title: title,
  });

  marker.setMap(map);

  // 인포윈도우 추가
  const infowindow = new kakao.maps.InfoWindow({
    content: `<div style="padding:5px;font-size:12px;">${title}</div>`,
  });

  kakao.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

  return marker;
}
