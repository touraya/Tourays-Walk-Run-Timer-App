/* Tourays Fitness V10 Core — Stage 3 update-safe service worker */
const CACHE_NAME = 'tourays-fitness-v10-10100';
const APP_SHELL = [
  './',
  './index.html',
  './style-v8-5-2.css?v=10100',
  './app-v8-5-2.js?v=10100',
  './manifest.json',
  './icon.svg',
  './pushup-premium-master.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request, fallbackKey) {
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response && response.ok) {
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

  // HTML always checks the network first so new GitHub uploads appear immediately.
  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request, './index.html'));
    return;
  }

  // Versioned JS/CSS and the worker-controlled app shell also check network first.
  const isCoreAsset = /(?:app-v8-5-2\.js|style-v8-5-2\.css|manifest\.json|icon\.svg|pushup-premium-master\.png)$/.test(url.pathname);
  if (isCoreAsset) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // Other same-origin files remain cache-first for fast offline use.
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
