// Firebase Cloud Messaging Service Worker
// 이 파일은 public 폴더에 있어야 합니다

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyAMubJk9qXmaz_V3uHiCGs0hRe6FSu9ji4",
  authDomain: "ai-factory-c6d58.firebaseapp.com",
  projectId: "ai-factory-c6d58",
  storageBucket: "ai-factory-c6d58.firebasestorage.app",
  messagingSenderId: "213197152130",
  appId: "1:213197152130:web:7c19f9c3c88bea7cc1399b",
  measurementId: "G-4D82WS9H7K"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Messaging 인스턴스 가져오기
const messaging = firebase.messaging();

// 백그라운드 메시지 수신 처리
messaging.onBackgroundMessage((payload) => {
  console.log('[Service Worker] 백그라운드 메시지 수신:', payload);
  
  const notificationTitle = payload.notification?.title || payload.data?.title || '알림';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || '',
    icon: '/icon/dog.png',
    badge: '/icon/dog.png',
    tag: payload.data?.type || 'notification',
    data: payload.data || {},
    requireInteraction: true, // 사용자가 클릭할 때까지 알림 유지
    actions: [
      {
        action: 'open',
        title: '확인'
      }
    ]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// 알림 클릭 처리
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] 알림 클릭:', event);
  
  event.notification.close();
  
  // 알림 데이터에서 URL 가져오기
  const data = event.notification.data || {};
  const urlToOpen = data.url || '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // 이미 열려있는 창이 있으면 포커스
      for (const client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // 새 창 열기
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});




