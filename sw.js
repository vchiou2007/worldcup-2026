// 2026 世界盃 PWA Service Worker
const CACHE = 'worldcup-2026-v4';
const URLS = [
  '/worldcup-2026/',
  '/worldcup-2026/index.html',
  '/worldcup-2026/groups.html',
  '/worldcup-2026/teams.html',
  '/worldcup-2026/matches.html',
  '/worldcup-2026/knockout.html',
  '/worldcup-2026/css/style.css',
  '/worldcup-2026/js/app.js',
  '/worldcup-2026/manifest.json',
  '/worldcup-2026/icons/icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // 資料檔案、JS、CSS：一律從網路取得最新版，快取作為離線備援
  if (url.pathname.includes('/data/worldcup-data.js') ||
      url.pathname.includes('/data/player_images.js') ||
      url.pathname.includes('/js/') ||
      url.pathname.includes('/css/')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request).then(r => {
          return r || new Response('Offline', { status: 503 });
        }))
    );
    return;
  }

  // HTML 頁面與其他靜態資源：快取優先
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => {
      if (e.request.mode === 'navigate') {
        return caches.match('/worldcup-2026/index.html');
      }
      return new Response('Offline', { status: 503 });
    }))
  );
});
