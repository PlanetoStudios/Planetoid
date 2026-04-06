const CACHE_NAME = 'planetoid-v3';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instala o Service Worker e guarda o básico em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Faz o site funcionar mesmo se o servidor falhar momentaneamente
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
