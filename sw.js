const CACHE='fuel-log-v2.0-shell';
const SHELL=[
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);

  // Cache only our own PWA files. OCR libraries/models may come from their
  // public CDNs, but no personal fill-up/photo/GPS data is sent to them.
  if(url.origin===self.location.origin){
    event.respondWith(
      caches.match(event.request).then(cached=>{
        const network=fetch(event.request).then(resp=>{
          if(resp && resp.ok){
            const copy=resp.clone();
            caches.open(CACHE).then(cache=>cache.put(event.request,copy));
          }
          return resp;
        }).catch(()=>cached);
        return cached||network;
      })
    );
  }
});
