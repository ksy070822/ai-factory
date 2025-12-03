import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../App.css'

// Service Worker 등록 (푸시 알림용)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('✅ Service Worker 등록 성공:', registration.scope);
      })
      .catch((error) => {
        // 404 오류는 무시 (푸시 알림이 필요 없을 경우)
        if (error.message?.includes('404') || error.message?.includes('bad HTTP response code')) {
          console.warn('⚠️ Service Worker 파일이 없습니다. 푸시 알림 기능이 비활성화됩니다.');
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

