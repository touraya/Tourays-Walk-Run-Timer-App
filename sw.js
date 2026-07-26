/* Tourays Fitness V10 Core — Stage 50D functional exercise filters */
const CACHE_NAME = 'tourays-fitness-v10-10520';
const APP_SHELL = [
  './', './index.html',
  './style-v8-5-2.css?v=10520',
  './app-v8-5-2.js?v=10520',
  './manifest.json', './icon.svg', './pushup-premium-master.png',
  './push-ups.mp4?v=10520', './squats.mp4?v=10520',
  './high-knees.mp4?v=10520', './lunges.mp4?v=10520',
  './plank.mp4?v=10520', './mountain-climbers.mp4?v=10520',
  './burpees.mp4?v=10520', './jumping-jacks.mp4?v=10520'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
async function networkFirst(request, fallbackKey) {
  try {
    const response = await fetch(request, {cache:'no-store'});
    if (response && response.ok && !request.headers.has('range')) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    return (await caches.match(request)) || (fallbackKey ? await caches.match(fallbackKey) : undefined);
  }
}
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Safari/iPhone requests MP4 data in byte ranges. Always let the server return a real 206 response.
  if (url.pathname.endsWith('.mp4') || event.request.headers.has('range')) {
    event.respondWith(fetch(event.request, {cache:'no-store'}));
    return;
  }
  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request, './index.html'));
    return;
  }
  const isCoreAsset = /(?:app-v8-5-2\.js|style-v8-5-2\.css|manifest\.json|icon\.svg|pushup-premium-master\.png)$/.test(url.pathname);
  if (isCoreAsset) {
    event.respondWith(networkFirst(event.request));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response && response.ok) caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
    return response;
  })));
});
