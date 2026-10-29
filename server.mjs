import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.txt':'text/plain; charset=utf-8','.md':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{
  try{
    const url=new URL(req.url,'http://localhost');let pathname=decodeURIComponent(url.pathname);
    if(pathname==='/')pathname='/index.html';
    const file=path.resolve(root,'.'+pathname);
    if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
    let info;try{info=await stat(file);}catch{}
    if(info?.isDirectory())pathname=path.join(pathname,'index.html');
    const target=path.resolve(root,'.'+pathname);
    if(!target.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
    const data=await readFile(target);const ext=path.extname(target);
    const revalidate=['.html','.js','.webmanifest','.css'].includes(ext);
    res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream','Cache-Control':revalidate?'no-cache':'public, max-age=86400','X-Content-Type-Options':'nosniff','Service-Worker-Allowed':'/'});
    res.end(req.method==='HEAD'?undefined:data);
  }catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
});
server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Whiskerfield is awake on http://0.0.0.0:'+(Number(process.env.PORT)||3000)));
