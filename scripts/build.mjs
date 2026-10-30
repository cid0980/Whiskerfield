import { build } from 'esbuild';
import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

await build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'esm',target:['es2020'],outfile:'assets/game.js',legalComments:'none',logLevel:'info'});
await copyFile('node_modules/three/LICENSE','assets/Three-LICENSE.txt');
const svg=await readFile('icons/icon.svg');
await sharp(svg).resize(192,192).png().toFile('icons/icon-192.png');
await sharp(svg).resize(512,512).png().toFile('icons/icon-512.png');
const maskable=Buffer.from(svg.toString().replace('viewBox="0 0 512 512"','viewBox="-72 -72 656 656"'));
await sharp(maskable).resize(512,512).flatten({background:'#52734d'}).png().toFile('icons/icon-maskable-512.png');
const files=['./','./index.html','./styles.css','./assets/game.js','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./assets/fonts/dm-sans-regular.woff2','./assets/fonts/dm-sans-medium.woff2','./assets/fonts/dm-sans-semibold.woff2'];
const hash=createHash('sha256');for(const file of files.slice(1))hash.update(await readFile(file));
const version=hash.digest('hex').slice(0,12);
const sw=`/* Whiskerfield: every game asset is local and precached. */
const CACHE='whiskerfield-${version}';
const FILES=${JSON.stringify(files)};
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
`;
await writeFile('sw.js',sw);
console.log(`Offline app built: ${version}, ${files.length} precached files.`);
