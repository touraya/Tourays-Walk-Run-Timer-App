/* Tourays Fitness V12.0 — release candidate offline shell */
const CACHE_NAME = 'tourays-fitness-v12-2';
const CORE = [
  './', './index.html',
  './style-v8-5-2.css?v=12200',
  './app-v8-5-2.js?v=12200',
  './navigation-v20.js?v=12200',
  './manifest.json', './icon.svg', './pushup-premium-master.png'
];

self.addEventListener('install', event => {
  // Cache the small app shell only. Large workout videos are loaded on demand.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.allSettled(CORE.map(url => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request, fallback) {
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone()).catch(() => {});
    }
    return response;
  } catch (_) {
    return (await caches.match(request)) || (fallback ? await caches.match(fallback) : Response.error());
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const update = fetch(request).then(response => {
    if (response && response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone())).catch(() => {});
    return response;
  }).catch(() => null);
  return cached || (await update) || Response.error();
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Range requests must reach the server so iPhone/Safari receives HTTP 206.
  if (url.pathname.endsWith('.mp4') || request.headers.has('range')) {
    event.respondWith(fetch(request, { cache: 'no-store' }));
    return;
  }
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, './index.html'));
    return;
  }
  if (/\.(?:css|js|svg|png|jpg|jpeg|webp|json)$/i.test(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }
  event.respondWith(caches.match(request).then(hit => hit || fetch(request)));
});
