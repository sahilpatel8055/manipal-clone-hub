/* AVEDU service worker — v3
 *
 * Navigation requests are ALWAYS network-first: a cached HTML shell that points
 * at hashed asset filenames from an older deploy is what produced blank white
 * pages on deep links. Hashed build assets are cache-first (they are immutable).
 */
const CACHE_NAME = 'avedu-v3';
const PRECACHE = ['/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE).catch(() => undefined))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))),
      )
      .then(() => self.clients.claim()),
  );
});

const isHashedAsset = (url) =>
  url.pathname.startsWith('/assets/') || url.pathname.startsWith('/lovable-uploads/');

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // HTML / SPA navigations: network first, cache only as offline fallback.
  if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/', copy)).catch(() => undefined);
          return response;
        })
        .catch(() => caches.match('/').then((cached) => cached || Response.error())),
    );
    return;
  }

  // Immutable build assets and images: cache first.
  if (isHashedAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches
                .open(CACHE_NAME)
                .then((cache) => cache.put(request, copy))
                .catch(() => undefined);
            }
            return response;
          }),
      ),
    );
    return;
  }

  // Everything else: straight to the network.
  event.respondWith(fetch(request).catch(() => caches.match(request).then((c) => c || Response.error())));
});
