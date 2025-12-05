import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../App.css'

// Service Worker 등록 (푸시 알림용)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // base URL을 고려한 경로 설정
    const baseUrl = import.meta.env.BASE_URL || '/ai-factory/';
    const swPath = `${baseUrl}firebase-messaging-sw.js`;
    
    // Service Worker 등록 시도 (404 오류는 정상적으로 처리)
    navigator.serviceWorker.register(swPath)
      .then((registration) => {
        console.log('✅ Service Worker 등록 성공:', registration.scope);
      })
      .catch((error) => {
        // 404 오류는 파일이 없을 때 발생 (정상적인 경우일 수 있음)
        // 네트워크 오류나 404는 조용히 처리 (푸시 알림은 선택적 기능)
        if (error.message?.includes('404') || 
            error.message?.includes('Failed to fetch') ||
            error.message?.includes('bad HTTP response code') ||
            error.name === 'NetworkError') {
          // 조용히 무시 (콘솔 메시지 없음)
        } else {
          // 다른 오류는 로그에 기록
          console.error('❌ Service Worker 등록 실패:', error);
        }
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

