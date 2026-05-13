const CACHE_NAME = 'masoem-v1';
const assets = [
  'index.html',
  'manifest.json',
  'https://code.jquery.com/jquery-3.6.0.min.js',
  'https://unpkg.com/html5-qrcode'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});