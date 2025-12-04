import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../App.css'

// Service Worker 등록 (푸시 알림용)
// 파일이 없어도 오류 없이 처리
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // base URL을 고려한 경로 설정
    const baseUrl = import.meta.env.BASE_URL || '/ai-factory/';
    const swPath = `${baseUrl}firebase-messaging-sw.js`;
    
    // 파일 존재 여부 확인 후 등록
    fetch(swPath, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          return navigator.serviceWorker.register(swPath);
        } else {
          // 파일이 없으면 조용히 무시
          return Promise.reject(new Error('Service Worker 파일 없음'));
        }
      })
      .then((registration) => {
        console.log('✅ Service Worker 등록 성공:', registration.scope);
      })
      .catch((error) => {
        // 404 오류는 조용히 무시 (푸시 알림이 필요 없을 경우)
        if (error.message?.includes('404') || 
            error.message?.includes('bad HTTP response code') ||
            error.message?.includes('Service Worker 파일 없음')) {
          // 조용히 무시 (콘솔 메시지 없음)
        } else {
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

