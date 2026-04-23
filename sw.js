const CACHE_NAME = 'medlog-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Installation & Caching
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Offline-Support: Dateien aus dem Cache laden
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});


