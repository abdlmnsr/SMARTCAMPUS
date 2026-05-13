const CACHE_NAME = 'masoem-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo1.png',        // Pastikan logo masuk cache
  './fotokelas.jpeg',   // Pastikan foto masuk cache
  'https://code.jquery.com/jquery-3.6.0.min.js',
  'https://unpkg.com/html5-qrcode',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:ital,wght@1,600&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching shell assets');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
