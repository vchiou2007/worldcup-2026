// 2026 世界盃 PWA Service Worker
const CACHE = 'worldcup-2026-v1';
const URLS = [
  '/worldcup-2026/',
  '/worldcup-2026/index.html',
  '/worldcup-2026/groups.html',
  '/worldcup-2026/teams.html',
  '/worldcup-2026/matches.html',
  '/worldcup-2026/knockout.html',
  '/worldcup-2026/css/style.css',
  '/worldcup-2026/js/app.js',
  '/worldcup-2026/data/worldcup-data.js',
  '/worldcup-2026/data/player_images.js',
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
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => {
      // Offline fallback: return home page
      if (e.request.mode === 'navigate') {
        return caches.match('/worldcup-2026/index.html');
      }
      return new Response('Offline', { status: 503 });
    }))
  );
});
