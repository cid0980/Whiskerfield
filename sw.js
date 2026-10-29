/* Whiskerfield: every game asset is local and precached. */
const CACHE='whiskerfield-7eae7af598b3';
const FILES=["./","./index.html","./styles.css","./assets/game.js","./manifest.webmanifest","./icons/icon.svg","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./assets/fonts/dm-sans-regular.woff2","./assets/fonts/dm-sans-medium.woff2","./assets/fonts/dm-sans-semibold.woff2","./assets/fonts/fraunces-medium.woff2"];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('whiskerfield-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()).then(()=>self.clients.matchAll({includeUncontrolled:true})).then(clients=>clients.forEach(client=>client.postMessage({type:'OFFLINE_READY'}))));});
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin||url.pathname.endsWith('/sw.js'))return;
  event.respondWith(caches.open(CACHE).then(async cache=>{
    const cached=await cache.match(request,{ignoreSearch:true});
    if(cached)return cached;
    try{const response=await fetch(request);if(response.ok&&response.type==='basic')await cache.put(request,response.clone());return response;}
    catch(error){if(request.mode==='navigate'){const shell=await cache.match('./index.html');if(shell)return shell;}throw error;}
  }));
});
