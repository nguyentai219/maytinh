// Service Worker – Máy Tính Đọc Kết Quả
const CACHE_NAME = 'mt-maytinh-v4';

const ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-192x192-maskable.png',
  './icons/icon-512x512.png',
  './icons/icon-512x512-maskable.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .catch(err => console.warn('SW cache error:', err))
  );
  self.skipWaiting();
});

// Chỉ xoá cache CŨ CỦA APP NÀY (tiền tố riêng) — bộ nhớ cache dùng chung cả tên miền
// nguyentai219.github.io, xoá hết sẽ làm mất bản offline của các app khác (Mủ Cao Su, Quản Lý Heo...).
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => (k.startsWith('mt-maytinh-') || k === 'may-tinh-v2' || k === 'may-tinh-v3') && k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith('http')) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      }).catch(() => cached);
    })
  );
});
