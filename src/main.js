import * as THREE from 'three';
import { World, CHUNK, hashString, random, districtName } from './world.js';
import { Cat } from './cat.js';
import { NeighborhoodAudio } from './audio.js';

const $ = id => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const SAVE_KEY = 'whiskerfield.journey.v1';
const mobile = matchMedia('(pointer:coarse)').matches;
const defaultSeed = () => ['clover','willow','honey','fern','peach','moss'][Math.floor(Math.random()*6)] + '-' + Math.floor(100+Math.random()*900);
let saved = null;
try { const s=JSON.parse(localStorage.getItem(SAVE_KEY)); if(s?.version===1&&typeof s.seed==='string')saved=s; } catch {}
const settings = { audio:true, volume:.4, sensitivity:.7, shadows:!mobile, reducedMotion:matchMedia('(prefers-reduced-motion:reduce)').matches, ...saved?.settings };
const validPoint = p => p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&Number.isFinite(p.z)&&Math.abs(p.x)<1e6&&Math.abs(p.z)<1e6&&p.y>=0&&p.y<100;
const player = { pos:new THREE.Vector3(...(validPoint(saved?.position)?[saved.position.x,saved.position.y,saved.position.z]:[1.1,0,7.1])), vx:0,vz:0,vy:0,grounded:true,climbing:null,climbCooldown:0,heading:Number.isFinite(saved?.heading)?saved.heading:.55,speed:0,coyote:0,jumpBuffer:0,jumpHeld:false,jumpCut:false,landImpact:0,turnRate:0,accel:0,runBlend:0,moveAmount:0 };
const visitedRoofs = new Set(Array.isArray(saved?.roofs)?saved.roofs.filter(v=>typeof v==='string').slice(-10000):[]);
const visitedGardens = new Set(Array.isArray(saved?.gardens)?saved.gardens.filter(v=>typeof v==='string').slice(-10000):[]);
const audio = new NeighborhoodAudio(); audio.enabled=settings.audio; audio.volume=settings.volume;
let world, cat, renderer, scene, camera, sun, ground, leafMesh, butterflyMesh, sparkMesh, sunMeshes=[];
let started=false, resting=false, modal=null, previousFocus=null, ready=false, storageWarning=false;
let cameraYaw=Number.isFinite(saved?.cameraYaw)?saved.cameraYaw:.56, cameraPitch=.61, cameraDistance=20.5;
let cameraYawTarget=cameraYaw,cameraPitchTarget=cameraPitch,cameraDistanceTarget=cameraDistance,cameraInputTimer=0;
let time=0,lastTime=0,saveTimer=0,discoveryTimer=0,purrTimer=0,toastTimer=0,frameCount=0;
let jumpQueued=false,touchClimb=false,touchRun=false,joyX=0,joyY=0,wallHint=null;
let gamepadMoveX=0,gamepadMoveY=0,gamepadRun=false,gamepadClimb=false,gamepadActive=false,prevPadButtons=[];
let currentDistrict='', mapCenter=null, mapDrag=null;
const keys=new Set(), pointers=new Map(), cameraTarget=new THREE.Vector3(), cameraDesired=new THREE.Vector3(), tempVec=new THREE.Vector3();
const dummy=new THREE.Object3D(), particleColor=new THREE.Color();
const leaves=[],butterflies=[],sparks=[];
let installPrompt=null,offlineReady=false,installed=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
let lastPinch=0,swRegistration=null;

function save(){
  if(!world)return;
  try{localStorage.setItem(SAVE_KEY,JSON.stringify({version:1,seed:world.seedText,position:{x:player.pos.x,y:player.pos.y,z:player.pos.z},heading:player.heading,cameraYaw,roofs:[...visitedRoofs].slice(-10000),gardens:[...visitedGardens].slice(-10000),settings,started}));}
  catch{if(!storageWarning){storageWarning=true;toast('A small heads-up','Your browser can’t save this journey. Try leaving private browsing.');}}
}
function toast(title,text,duration=4400){
  clearTimeout(toastTimer);$('toast-title').textContent=title;$('toast-text').textContent=text;$('toast').classList.add('show');
  toastTimer=setTimeout(()=>$('toast').classList.remove('show'),duration);
}
function updateCounts(){ $('roof-count').textContent=visitedRoofs.size;$('garden-count').textContent=visitedGardens.size; }
function setIcon(button,id){button.querySelector('use')?.setAttribute('href',id);}
function syncSettings(){
  for(const [id,key] of [['audio-toggle','audio'],['shadow-toggle','shadows'],['motion-toggle','reducedMotion']]){
    $(id).classList.toggle('on',!!settings[key]);$(id).setAttribute('aria-checked',String(!!settings[key]));
  }
  $('volume-slider').value=Math.round(settings.volume*100);$('volume-label').textContent=Math.round(settings.volume*100)+'%';
  $('sensitivity-slider').value=Math.round(settings.sensitivity*100);
  setIcon($('sound-button'),settings.audio?'#i-sound':'#i-muted');$('sound-button').setAttribute('aria-label',settings.audio?'Turn sound off':'Turn sound on');
  if(renderer)renderer.shadowMap.enabled=settings.shadows;
  if(leafMesh)leafMesh.count=settings.reducedMotion?12:48;
}
function clearInput(){keys.clear();jumpQueued=false;touchClimb=false;joyX=joyY=0;gamepadMoveX=gamepadMoveY=0;gamepadRun=false;gamepadClimb=false;player.vx=player.vz=0;player.jumpHeld=false;player.jumpBuffer=0;$('joystick-knob').style.transform='translate(0px,0px)';document.querySelectorAll('.touch-action.pressed').forEach(el=>el.classList.remove('pressed'));}
function openModal(id){
  previousFocus=document.activeElement;clearInput();modal=id;
  $('modal-backdrop').hidden=false;
  document.querySelectorAll('.modal').forEach(el=>el.hidden=el.id!==id);
  $(id).scrollTop=0;
  if(id==='map-modal'){mapCenter={x:player.pos.x,z:player.pos.z};drawMap();}
  if(id==='settings-modal'){$('seed-label').textContent='Seed: '+world.seedText;$('new-world-confirm').hidden=true;syncSettings();}
  if(id==='install-modal')syncInstall();
  requestAnimationFrame(()=>$(id).querySelector('button')?.focus({preventScroll:true}));
}
function closeModal(){
  if(!modal)return;modal=null;$('modal-backdrop').hidden=true;document.querySelectorAll('.modal').forEach(el=>el.hidden=true);clearInput();
  if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});else $('world').focus({preventScroll:true});
}
function start(){
  if(!ready)return;
  started=true;resting=false;document.body.classList.add('playing');document.body.classList.remove('resting');$('welcome').setAttribute('aria-hidden','true');$('welcome').inert=true;
  $('world').focus({preventScroll:true});if(settings.audio)audio.start();save();
  toast(saved?.started?'There you are.':'The afternoon is yours.',saved?.started?'Your little world was waiting for you.':'Find a rooftop, a garden, or a perfectly good patch of sunshine.',5200);
}
function toggleRest(){
  if(!started||modal)return;
  if(!player.grounded){toast('Paws on the ground first.','Find a comfortable spot for a little catnap.');return;}
  resting=!resting;clearInput();document.body.classList.toggle('resting',resting);$('rest-button').querySelector('span').textContent=resting?'Dream a little':'Stay a while';
  if(resting){toast('This spot feels like home.','Move whenever you’re ready. Or don’t.',3500);audio.purr();}
}

function init(){
  scene=new THREE.Scene();scene.background=new THREE.Color('#c9d4c8');scene.fog=new THREE.Fog('#c9d4c8',58,mobile?108:145);
  renderer=new THREE.WebGLRenderer({canvas:$('world'),antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1.4:1.5));renderer.setSize(innerWidth,innerHeight);
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  renderer.shadowMap.enabled=settings.shadows;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  camera=new THREE.PerspectiveCamera(43,innerWidth/innerHeight,.15,350);
  const hemi=new THREE.HemisphereLight('#dfe6d8','#7e8a68',1.35);scene.add(hemi);
  sun=new THREE.DirectionalLight('#ffe6c0',2.2);sun.position.set(-35,60,25);sun.castShadow=true;
  sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);sun.shadow.camera.left=-53;sun.shadow.camera.right=53;sun.shadow.camera.top=53;sun.shadow.camera.bottom=-53;sun.shadow.camera.near=1;sun.shadow.camera.far=155;sun.shadow.bias=-.00035;sun.shadow.normalBias=.035;sun.shadow.radius=3;
  scene.add(sun);scene.add(sun.target);
  const groundTex=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.fillStyle='#ffffff';x.fillRect(0,0,128,128);for(let i=0;i<2400;i++){x.fillStyle=`rgba(60,75,45,${Math.random()*.1})`;x.fillRect(Math.random()*128,Math.random()*128,1+Math.random()*2,1);}const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(180,180);return t;})();
  ground=new THREE.Mesh(new THREE.PlaneGeometry(1200,1200),new THREE.MeshStandardMaterial({color:'#93a86f',roughness:1,map:groundTex}));ground.rotation.x=-Math.PI/2;ground.position.y=-.45;ground.receiveShadow=true;scene.add(ground);
  world=new World(scene,saved?.seed||defaultSeed());world.radius=mobile?1:2;world.update(player.pos,mobile?5:9);
  cat=new Cat(scene);cat.root.position.copy(player.pos);cat.root.rotation.y=player.heading;
  createAtmosphere();createUI();syncSettings();updateCounts();
  cameraTarget.copy(player.pos);updateCamera(1,true);
  $('seed-label').textContent='Seed: '+world.seedText;
  if(saved?.started){$('start-button').firstChild.textContent='Wander on ';document.querySelector('.welcome-note').lastChild.textContent=' Just as you left it. Ready when you are.';}
  ready=true;renderer.render(scene,camera);
  requestAnimationFrame(()=>{requestAnimationFrame(()=>{$('loading').classList.add('done');setTimeout(()=>$('loading').hidden=true,700);});});
  requestAnimationFrame(loop);
  if(new URLSearchParams(location.search).get('test')==='1')window.__whiskerfield={player,world,cat,renderer,camera,start,save,step:updatePlayer,discover:checkDiscoveries,getState:()=>({ready,started,resting,modal,position:player.pos.toArray(),grounded:player.grounded,climbing:!!player.climbing,roofs:visitedRoofs.size,gardens:visitedGardens.size,chunks:world.chunks.size,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,offlineReady}),teleport:(x,y,z)=>{player.pos.set(x,y,z);player.vx=player.vz=player.vy=0;player.climbing=null;world.update(player.pos,25);},getSettings:()=>({...settings})};
}

function createAtmosphere(){
  const r=random(hashString(world.seedText+'air'));
  leafMesh=new THREE.InstancedMesh(new THREE.PlaneGeometry(.14,.25),new THREE.MeshBasicMaterial({color:'#e8d59a',side:THREE.DoubleSide,transparent:true,opacity:.72}),48);leafMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);leafMesh.frustumCulled=false;scene.add(leafMesh);
  for(let i=0;i<48;i++)leaves.push({x:(r()-.5)*70,y:1+r()*12,z:(r()-.5)*70,phase:r()*Math.PI*2,speed:.3+r()*.5});
  butterflyMesh=new THREE.InstancedMesh(new THREE.PlaneGeometry(.2,.25),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}),24);butterflyMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);butterflyMesh.frustumCulled=false;scene.add(butterflyMesh);
  for(let i=0;i<12;i++){butterflies.push({x:(r()-.5)*55,z:(r()-.5)*55,y:.8+r()*2,phase:r()*7});butterflyMesh.setColorAt(i*2,particleColor.set(['#f1d995','#e7ba95','#e9e7c7'][i%3]));butterflyMesh.setColorAt(i*2+1,particleColor.set(['#f1d995','#e7ba95','#e9e7c7'][i%3]));}
  sparkMesh=new THREE.InstancedMesh(new THREE.OctahedronGeometry(.19),new THREE.MeshStandardMaterial({color:'#edcc7d',emissive:'#c7a04d',emissiveIntensity:.3,roughness:.5}),400);sparkMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);sparkMesh.count=0;sparkMesh.frustumCulled=false;scene.add(sparkMesh);
  const cloudMat=new THREE.MeshLambertMaterial({color:'#f2f2df',transparent:true,opacity:.65,depthWrite:false});
  const cloudGeo=new THREE.IcosahedronGeometry(1,1);
  for(let i=0;i<9;i++){
    const group=new THREE.Group();for(let j=0;j<4;j++){const m=new THREE.Mesh(cloudGeo,cloudMat);m.position.set(j*3.5,Math.sin(j)*1.2,0);m.scale.set(4.5,2.1+j%2,2.8);group.add(m);}
    group.position.set((r()-.5)*240,38+r()*20,(r()-.5)*240);group.userData.phase=r()*7;scene.add(group);sunMeshes.push(group);
  }
}

function createUI(){
  $('start-button').addEventListener('click',start);
  $('welcome-help').addEventListener('click',()=>openModal('help-modal'));
  $('settings-help').addEventListener('click',()=>openModal('help-modal'));
  $('settings-button').addEventListener('click',()=>openModal('settings-modal'));
  $('map-button').addEventListener('click',()=>openModal('map-modal'));
  $('brand').addEventListener('click',e=>{e.preventDefault();openModal('settings-modal');});
  $('rest-button').addEventListener('click',toggleRest);
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
  $('modal-backdrop').addEventListener('click',e=>{if(e.target===$('modal-backdrop'))closeModal();});
  $('sound-button').addEventListener('click',()=>{settings.audio=!settings.audio;audio.setEnabled(settings.audio);syncSettings();save();});
  $('audio-toggle').addEventListener('click',()=>{settings.audio=!settings.audio;audio.setEnabled(settings.audio);syncSettings();save();});
  $('shadow-toggle').addEventListener('click',()=>{settings.shadows=!settings.shadows;syncSettings();renderer.shadowMap.needsUpdate=true;scene.traverse(o=>{if(o.material)o.material.needsUpdate=true;});save();});
  $('motion-toggle').addEventListener('click',()=>{settings.reducedMotion=!settings.reducedMotion;syncSettings();save();});
  $('volume-slider').addEventListener('input',e=>{settings.volume=Number(e.target.value)/100;audio.setVolume(settings.volume);$('volume-label').textContent=e.target.value+'%';save();});
  $('sensitivity-slider').addEventListener('input',e=>{settings.sensitivity=Number(e.target.value)/100;save();});
  $('new-world-button').addEventListener('click',()=>$('new-world-confirm').hidden=false);
  $('cancel-new-world').addEventListener('click',()=>$('new-world-confirm').hidden=true);
  $('confirm-new-world').addEventListener('click',newWorld);
  $('map-recenter').addEventListener('click',()=>{mapCenter={x:player.pos.x,z:player.pos.z};drawMap();});
  $('install-button').addEventListener('click',()=>openModal('install-modal'));
  $('install-now-button').addEventListener('click',async()=>{
    if(installPrompt){const p=installPrompt;installPrompt=null;try{await p.prompt();const choice=await p.userChoice;if(choice.outcome==='accepted'){installed=true;syncInstall();toast('A little world, kept.','Whiskerfield is now on your device.');}else syncInstall();}catch{installPrompt=null;syncInstall();}}
    else closeModal();
  });
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;syncInstall();});
  window.addEventListener('appinstalled',()=>{installed=true;installPrompt=null;syncInstall();save();});
  window.addEventListener('keydown',e=>{
    if(e.code==='Escape'){e.preventDefault();modal?closeModal():openModal('settings-modal');return;}
    if(modal){
      if(e.code==='Tab'){
        const focusable=[...$(modal).querySelectorAll('button,input,[tabindex="0"]')].filter(el=>!el.disabled&&el.offsetParent!==null);
        const first=focusable[0],last=focusable.at(-1);
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
      }
      return;
    }
    if(!started)return;
    if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD','KeyE','ShiftLeft','ShiftRight','KeyM','KeyN'].includes(e.code))e.preventDefault();
    if(e.code==='KeyM'&&!e.repeat){openModal('map-modal');return;}
    if(e.code==='KeyN'&&!e.repeat){toggleRest();return;}
    if(e.code==='Space'&&!e.repeat&&!keys.has('Space')){jumpQueued=true;player.jumpBuffer=.16;}
    if(e.code==='Space')player.jumpHeld=true;
    keys.add(e.code);
  });
  window.addEventListener('keyup',e=>{keys.delete(e.code);if(e.code==='Space')player.jumpHeld=false;});
  window.addEventListener('blur',()=>{clearInput();pointers.clear();save();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){clearInput();save();audio.suspend();}else{lastTime=performance.now();audio.resume();}});
  window.addEventListener('pagehide',save);
  window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
  $('world').addEventListener('webglcontextlost',e=>{e.preventDefault();save();$('error-message').textContent='The graphics took a little catnap. Reload to return to your saved spot.';$('error-screen').hidden=false;});
  const canvas=$('world');
  canvas.addEventListener('contextmenu',e=>e.preventDefault());
  canvas.addEventListener('pointerdown',e=>{
    if(modal)return;canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===2){const a=[...pointers.values()];lastPinch=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);}
  });
  canvas.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId)||modal)return;const p=pointers.get(e.pointerId),dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;
    if(pointers.size===2){const a=[...pointers.values()],d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);cameraDistanceTarget=clamp(cameraDistanceTarget-(d-lastPinch)*.045,9,34);lastPinch=d;}
    else{cameraYawTarget-=dx*.005*settings.sensitivity;cameraPitchTarget=clamp(cameraPitchTarget+dy*.003*settings.sensitivity,.25,1.12);}
    cameraInputTimer=1.6;
  });
  const release=e=>pointers.delete(e.pointerId);canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.addEventListener('lostpointercapture',release);
  canvas.addEventListener('wheel',e=>{e.preventDefault();if(!modal){cameraDistanceTarget=clamp(cameraDistanceTarget+e.deltaY*.015,9,34);cameraInputTimer=1.6;}},{passive:false});
  // Touch joystick and hold-to-climb controls.
  const joy=$('joystick');let joyPointer=null;
  const moveJoy=e=>{const rect=joy.getBoundingClientRect(),max=rect.width*.34;let dx=e.clientX-rect.left-rect.width/2,dy=e.clientY-rect.top-rect.height/2;const d=Math.hypot(dx,dy);if(d>max){dx*=max/d;dy*=max/d;}const n=Math.min(1,d/max),dead=.12;const shaped=n<dead?0:Math.pow((n-dead)/(1-dead),1.15);joyX=d?dx/d*shaped:0;joyY=d?dy/d*shaped:0;$('joystick-knob').style.transform=`translate(${dx}px,${dy}px)`;joy.classList.toggle('engaged',n>dead);};
  joy.addEventListener('pointerdown',e=>{e.preventDefault();joyPointer=e.pointerId;joy.setPointerCapture(e.pointerId);moveJoy(e);});
  joy.addEventListener('pointermove',e=>{if(e.pointerId===joyPointer)moveJoy(e);});
  const releaseJoy=e=>{if(e.pointerId!==joyPointer)return;joyPointer=null;joyX=joyY=0;$('joystick-knob').style.transform='translate(0px,0px)';joy.classList.remove('engaged');};
  joy.addEventListener('pointerup',releaseJoy);joy.addEventListener('pointercancel',releaseJoy);joy.addEventListener('lostpointercapture',releaseJoy);
  const hold=(id,on,off)=>{const el=$(id);el.addEventListener('pointerdown',e=>{e.preventDefault();el.setPointerCapture(e.pointerId);el.classList.add('pressed');on();});for(const ev of ['pointerup','pointercancel','lostpointercapture'])el.addEventListener(ev,()=>{el.classList.remove('pressed');off();});};
  hold('touch-jump',()=>{jumpQueued=true;player.jumpBuffer=.16;player.jumpHeld=true;},()=>{player.jumpHeld=false;});
  hold('touch-climb',()=>{touchClimb=true;},()=>{touchClimb=false;});
  $('touch-run').addEventListener('click',()=>{touchRun=!touchRun;$('touch-run').classList.toggle('active',touchRun);$('touch-run').setAttribute('aria-pressed',String(touchRun));});
  const map=$('map-canvas');
  map.addEventListener('pointerdown',e=>{map.setPointerCapture(e.pointerId);mapDrag={x:e.clientX,y:e.clientY};});
  map.addEventListener('pointermove',e=>{if(!mapDrag)return;const scale=3*(map.clientWidth/960);mapCenter.x-=(e.clientX-mapDrag.x)/scale;mapCenter.z-=(e.clientY-mapDrag.y)/scale;mapDrag={x:e.clientX,y:e.clientY};drawMap();});
  for(const ev of ['pointerup','pointercancel','lostpointercapture'])map.addEventListener(ev,()=>mapDrag=null);
}

function newWorld(){
  world.dispose();world=new World(scene,defaultSeed());world.radius=mobile?1:2;visitedRoofs.clear();visitedGardens.clear();player.pos.set(1.1,0,7.1);player.vx=player.vz=player.vy=0;player.climbing=null;player.grounded=true;player.heading=.55;player.landImpact=0;player.runBlend=0;cameraYaw=cameraYawTarget=.56;cameraPitch=cameraPitchTarget=.61;cameraDistance=cameraDistanceTarget=20.5;resting=false;saved=null;
  world.update(player.pos,mobile?5:9);updateCounts();$('seed-label').textContent='Seed: '+world.seedText;closeModal();save();
  document.body.classList.remove('resting');$('rest-button').querySelector('span').textContent='Stay a while';
  toast('A fresh little beginning.','New streets, new rooftops, the same curious cat.');
}

function moveAxis(axis,amount){
  if(Math.abs(amount)<1e-7)return;
  const radius=.34,old=player.pos[axis];let next=old+amount;
  const other=axis==='x'?'z':'x',min=axis==='x'?'minX':'minZ',max=axis==='x'?'maxX':'maxZ',omin=other==='x'?'minX':'minZ',omax=other==='x'?'maxX':'maxZ';
  for(const s of world.colliders){
    if(player.pos.y+1.32<=s.minY+.02||player.pos.y>=s.maxY-.07)continue;
    if(player.pos[other]<=s[omin]-radius||player.pos[other]>=s[omax]+radius)continue;
    const lo=s[min]-radius,hi=s[max]+radius;
    if(amount>0&&old<=lo+.035&&next>lo)next=Math.min(next,lo);
    if(amount<0&&old>=hi-.035&&next<hi)next=Math.max(next,hi);
  }
  player.pos[axis]=next;
}

function updatePlayer(dt){
  player.climbCooldown=Math.max(0,player.climbCooldown-dt);
  player.jumpBuffer=Math.max(0,player.jumpBuffer-dt);
  player.landImpact=THREE.MathUtils.damp(player.landImpact,0,6,dt);
  let ix=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0)+joyX+gamepadMoveX;
  let iz=(keys.has('KeyS')||keys.has('ArrowDown')?1:0)-(keys.has('KeyW')||keys.has('ArrowUp')?1:0)+joyY+gamepadMoveY;
  const magnitude=Math.hypot(ix,iz);if(magnitude>1){ix/=magnitude;iz/=magnitude;}
  player.moveAmount=Math.min(1,magnitude);
  if(magnitude>.15&&resting){resting=false;document.body.classList.remove('resting');$('rest-button').querySelector('span').textContent='Stay a while';}
  const climbHeld=keys.has('KeyE')||keys.has('Space')||touchClimb||gamepadClimb;
  wallHint=world.nearbyWall(player.pos);
  const canClimb=wallHint&&player.pos.y<wallHint.solid.maxY+.05&&player.climbCooldown<=0&&!resting;
  if(climbHeld&&canClimb){
    const w=wallHint;player.climbing=w;player.grounded=false;player.vy=0;player.vx=player.vz=0;player.speed=2.5;player.turnRate=0;player.accel=0;
    player.pos.x=THREE.MathUtils.damp(player.pos.x,w.qx+w.nx*.405,18,dt);
    player.pos.z=THREE.MathUtils.damp(player.pos.z,w.qz+w.nz*.405,18,dt);
    const target=Math.atan2(-w.nx,-w.nz),diff=Math.atan2(Math.sin(target-player.heading),Math.cos(target-player.heading));
    player.heading+=diff*(1-Math.exp(-14*dt));player.pos.y+=4.1*dt;
    if(player.pos.y>=w.solid.maxY-.02){
      player.pos.y=w.solid.maxY+.08;player.pos.x-=w.nx*.94;player.pos.z-=w.nz*.94;
      const b=w.solid.building;
      if(b&&Math.abs(w.solid.maxY-b.h)<.01){const rh=world.roofHeight(b,player.pos.x,player.pos.z);if(Number.isFinite(rh)&&rh>player.pos.y)player.pos.y=rh+.06;}
      player.vy=.6;player.climbing=null;player.climbCooldown=.55;player.grounded=false;player.landImpact=.35;
    }
    jumpQueued=false;player.jumpBuffer=0;return;
  }
  player.climbing=null;
  const running=keys.has('ShiftLeft')||keys.has('ShiftRight')||touchRun||gamepadRun||player.moveAmount>.92;
  player.runBlend=THREE.MathUtils.damp(player.runBlend,running&&player.moveAmount>.1?1:0,6,dt);
  let speed=(4.3+4.1*player.runBlend)*player.moveAmount;
  if(world.inWater(player.pos.x,player.pos.z)&&player.pos.y<.3)speed*=.55;
  if(resting)speed=0;
  const co=Math.cos(cameraYaw),si=Math.sin(cameraYaw),dx=(ix*co+iz*si)*speed,dz=(-ix*si+iz*co)*speed;
  const oldSpeed=Math.hypot(player.vx,player.vz);
  const accel=player.grounded?(player.moveAmount>.1?11:16):3.8;
  player.vx=THREE.MathUtils.damp(player.vx,dx,accel,dt);player.vz=THREE.MathUtils.damp(player.vz,dz,accel,dt);
  player.accel=clamp((Math.hypot(player.vx,player.vz)-oldSpeed)/Math.max(dt,.001),-30,30);
  player.coyote=player.grounded?.12:Math.max(0,player.coyote-dt);
  if(player.jumpBuffer>0&&player.coyote>0&&!resting){player.vy=8.4;player.grounded=false;player.coyote=0;player.jumpBuffer=0;player.jumpCut=false;audio.jump();}
  if(!player.jumpHeld&&player.vy>2.5&&!player.jumpCut){player.vy*=.55;player.jumpCut=true;}
  jumpQueued=false;
  const oldY=player.pos.y;
  moveAxis('x',player.vx*dt);moveAxis('z',player.vz*dt);
  if(player.grounded){const step=world.supportHeight(player.pos.x,player.pos.z,oldY);if(step>oldY&&step-oldY<=.56)player.pos.y=step;}
  player.vy=Math.max(-32,player.vy-24*dt);player.pos.y+=player.vy*dt;
  if(player.vy>0)for(const s of world.colliders){
    if(player.pos.x<s.minX-.2||player.pos.x>s.maxX+.2||player.pos.z<s.minZ-.2||player.pos.z>s.maxZ+.2)continue;
    if(oldY+1.35<=s.minY+.03&&player.pos.y+1.35>=s.minY){player.pos.y=s.minY-1.35;player.vy=0;break;}
  }
  const support=world.supportHeight(player.pos.x,player.pos.z,oldY);
  const wasGrounded=player.grounded;player.grounded=false;
  if(player.pos.y<=support&&player.vy<=0){player.landImpact=clamp(-player.vy/14,0,1);player.pos.y=support;player.vy=0;player.grounded=true;player.jumpCut=false;if(!wasGrounded)audio.land();}
  player.speed=Math.hypot(player.vx,player.vz);
  if(player.speed>.18&&!climbHeld){
    const target=Math.atan2(player.vx,player.vz),diff=Math.atan2(Math.sin(target-player.heading),Math.cos(target-player.heading));
    player.heading+=diff*(1-Math.exp(-11*dt));
    player.turnRate=THREE.MathUtils.damp(player.turnRate,clamp(diff*8,-6,6),8,dt);
  }else player.turnRate=THREE.MathUtils.damp(player.turnRate,0,8,dt);
  if(player.pos.y<-10){player.pos.set(1.1,1,7.1);player.vy=0;}
}

function pollGamepad(dt){
  const pads=navigator.getGamepads?navigator.getGamepads():[];
  const pad=[...pads].find(p=>p&&p.connected);
  gamepadActive=!!pad;
  if(!pad){gamepadMoveX=gamepadMoveY=0;gamepadRun=false;gamepadClimb=false;prevPadButtons=[];return;}
  const dead=v=>Math.abs(v)<.18?0:(Math.abs(v)-.18)/.82*Math.sign(v);
  gamepadMoveX=dead(pad.axes[0]||0);gamepadMoveY=dead(pad.axes[1]||0);
  const rx=dead(pad.axes[2]||0),ry=dead(pad.axes[3]||0);
  if(rx||ry){cameraYawTarget-=rx*2.6*dt;cameraPitchTarget=clamp(cameraPitchTarget+ry*1.8*dt,.25,1.12);cameraInputTimer=1.6;}
  const b=i=>!!pad.buttons[i]?.pressed;
  gamepadRun=b(6)||b(7)||b(10);gamepadClimb=b(1)||b(5)||b(4);
  if(b(0)&&!prevPadButtons[0]){jumpQueued=true;player.jumpBuffer=.16;}
  player.jumpHeld=player.jumpHeld||b(0);
  if(!b(0)&&prevPadButtons[0])player.jumpHeld=false;
  if(b(9)&&!prevPadButtons[9]){modal?closeModal():openModal('settings-modal');}
  prevPadButtons=pad.buttons.map(x=>x.pressed);
}

function rayBox(origin,dir,s,pad=.25){
  let tmin=0,tmax=1;
  for(const [o,d,lo,hi] of [[origin.x,dir.x,s.minX-pad,s.maxX+pad],[origin.y,dir.y,s.minY-pad,s.maxY+pad],[origin.z,dir.z,s.minZ-pad,s.maxZ+pad]]){
    if(Math.abs(d)<1e-7){if(o<lo||o>hi)return Infinity;}
    else{let a=(lo-o)/d,b=(hi-o)/d;if(a>b)[a,b]=[b,a];tmin=Math.max(tmin,a);tmax=Math.min(tmax,b);if(tmin>tmax)return Infinity;}
  }
  return tmin>0.02?tmin:Infinity;
}
function updateCamera(dt,instant=false){
  cameraYaw=THREE.MathUtils.damp(cameraYaw,cameraYawTarget,12,dt);
  cameraPitch=THREE.MathUtils.damp(cameraPitch,cameraPitchTarget,10,dt);
  cameraDistance=THREE.MathUtils.damp(cameraDistance,cameraDistanceTarget,8,dt);
  cameraInputTimer=Math.max(0,cameraInputTimer-dt);
  const isWelcome=!started,small=innerWidth<600;
  const rightX=Math.cos(cameraYaw),rightZ=-Math.sin(cameraYaw);
  const desiredTarget=tempVec.copy(player.pos);
  desiredTarget.y+=isWelcome?(small?-2.6:1.3):1.0;
  if(!isWelcome){desiredTarget.x+=player.vx*.24;desiredTarget.z+=player.vz*.24;desiredTarget.y+=Math.max(0,player.vy)*.02;}
  if(isWelcome){const offset=small?-2.4:-7.8;desiredTarget.x+=rightX*offset;desiredTarget.z+=rightZ*offset;desiredTarget.x-=Math.sin(cameraYaw)*2.5;desiredTarget.z-=Math.cos(cameraYaw)*2.5;}
  if(instant)cameraTarget.copy(desiredTarget);else cameraTarget.lerp(desiredTarget,1-Math.exp(-6*dt));
  const pitch=isWelcome?.70:cameraPitch,distance=isWelcome?(small?35:46):cameraDistance;
  cameraDesired.set(Math.sin(cameraYaw)*Math.cos(pitch)*distance,Math.sin(pitch)*distance,Math.cos(cameraYaw)*Math.cos(pitch)*distance);
  let allowed=1;
  if(!isWelcome){
    for(const s of world.colliders){if(Math.abs((s.minX+s.maxX)/2-player.pos.x)>40||Math.abs((s.minZ+s.maxZ)/2-player.pos.z)>40)continue;allowed=Math.min(allowed,rayBox(cameraTarget,cameraDesired,s));}
    for(const b of world.buildings)if(b.roofRise>0){const s={minX:b.x-b.w/2,maxX:b.x+b.w/2,minY:b.h,maxY:b.h+b.roofRise,minZ:b.z-b.d/2,maxZ:b.z+b.d/2};allowed=Math.min(allowed,rayBox(cameraTarget,cameraDesired,s));}
  }
  if(allowed<1)cameraDesired.multiplyScalar(Math.max(.2,allowed-.55/distance));
  cameraDesired.add(cameraTarget);
  if(instant)camera.position.copy(cameraDesired);else camera.position.lerp(cameraDesired,1-Math.exp(-(allowed<1?14:7.5)*dt));
  camera.lookAt(cameraTarget);
  const targetFov=43+(isWelcome?0:player.runBlend*4);
  if(Math.abs(camera.fov-targetFov)>.02){camera.fov=THREE.MathUtils.damp(camera.fov,targetFov,5,dt);camera.updateProjectionMatrix();}
}

function burst(){
  for(let i=0;i<16;i++)sparks.push({x:player.pos.x,y:player.pos.y+1,z:player.pos.z,vx:(Math.random()-.5)*2.5,vy:1+Math.random()*2,vz:(Math.random()-.5)*2.5,life:1.5});
  if(sparks.length>80)sparks.splice(0,sparks.length-80);
}
function checkDiscoveries(){
  const p=player.pos;
  for(const b of world.buildings){
    if(visitedRoofs.has(b.id))continue;
    if(p.y>=b.h-.15&&Math.abs(p.x-b.x)<b.w/2&&Math.abs(p.z-b.z)<b.d/2){
      visitedRoofs.add(b.id);updateCounts();burst();audio.discovery();
      const n=visitedRoofs.size;
      toast(n===1?'A new point of view.':n%5===0?`${n} rooftops. So many afternoons.`:'A little closer to the clouds.',n===1?'Your first rooftop. The town looks softer from up here.':'Another rooftop, another lovely place to pause.');save();break;
    }
  }
  for(const park of world.parks){
    if(!visitedGardens.has(park.id)&&p.y<1.5&&(p.x-park.x)**2+(p.z-park.z)**2<81){
      visitedGardens.add(park.id);updateCounts();audio.discovery();burst();toast('A place to slow down.','A quiet garden discovered. Even cats need a little green.');save();break;
    }
  }
  const name=districtName(Math.floor((p.x+36)/72),Math.floor((p.z+36)/72),world.seed);
  if(name!==currentDistrict){currentDistrict=name;$('district-name').textContent=name;}
}

function updateAtmosphere(dt){
  const p=player.pos,t=time;
  for(let i=0;i<leaves.length;i++){
    const l=leaves[i];l.x+=dt*l.speed;l.z+=dt*.15;
    if(l.x-p.x>35)l.x-=70;if(l.x-p.x<-35)l.x+=70;if(l.z-p.z>35)l.z-=70;if(l.z-p.z<-35)l.z+=70;
    dummy.position.set(l.x,l.y+Math.sin(t*.5+l.phase)*.6,l.z);dummy.rotation.set(t*.4+l.phase,t*.3+l.phase,t*.2);dummy.scale.setScalar(1);dummy.updateMatrix();leafMesh.setMatrixAt(i,dummy.matrix);
  }
  leafMesh.instanceMatrix.needsUpdate=true;
  for(let i=0;i<butterflies.length;i++){
    const b=butterflies[i];if(b.x-p.x>30)b.x-=60;if(b.x-p.x<-30)b.x+=60;if(b.z-p.z>30)b.z-=60;if(b.z-p.z<-30)b.z+=60;
    const x=b.x+Math.sin(t*.55+b.phase)*1.7,z=b.z+Math.cos(t*.4+b.phase)*1.7,y=b.y+Math.sin(t*1.4+b.phase)*.35;
    for(let side=0;side<2;side++){dummy.position.set(x+(side?-.08:.08),y,z);dummy.rotation.set(Math.PI/2,Math.sin(t*13+b.phase)*(side?-.8:.8),t*.2+b.phase);dummy.scale.set(1,1,1);dummy.updateMatrix();butterflyMesh.setMatrixAt(i*2+side,dummy.matrix);}
  }
  butterflyMesh.instanceMatrix.needsUpdate=true;
  let count=0;
  for(const b of world.buildings){
    if(visitedRoofs.has(b.id)||(b.x-p.x)**2+(b.z-p.z)**2>65**2||count>=320)continue;
    let y=world.roofHeight(b,b.x,b.z);if(b.upper)y=Math.max(y,b.upper.h);
    dummy.position.set(b.x,y+1.25+Math.sin(t*1.7+b.x)*.15,b.z);dummy.rotation.set(0,t*.7,0);dummy.scale.setScalar(1);dummy.updateMatrix();sparkMesh.setMatrixAt(count++,dummy.matrix);
  }
  for(let i=sparks.length-1;i>=0;i--){
    const s=sparks[i];s.life-=dt;if(s.life<=0){sparks.splice(i,1);continue;}s.x+=s.vx*dt;s.y+=s.vy*dt;s.z+=s.vz*dt;s.vy-=dt;
    if(count<390){dummy.position.set(s.x,s.y,s.z);dummy.rotation.set(t,t,0);dummy.scale.setScalar(Math.min(1,s.life)*.45);dummy.updateMatrix();sparkMesh.setMatrixAt(count++,dummy.matrix);}
  }
  sparkMesh.count=count;sparkMesh.instanceMatrix.needsUpdate=true;
  for(const cloud of sunMeshes){cloud.position.x+=dt*.18;if(cloud.position.x-p.x>150)cloud.position.x-=300;if(cloud.position.x-p.x<-150)cloud.position.x+=300;if(cloud.position.z-p.z>150)cloud.position.z-=300;if(cloud.position.z-p.z<-150)cloud.position.z+=300;}
}

function drawMap(){
  if(!mapCenter)return;const canvas=$('map-canvas'),ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,scale=3.15;
  const px=x=>(x-mapCenter.x)*scale+w/2,pz=z=>(z-mapCenter.z)*scale+h/2;
  ctx.fillStyle='#dce6c9';ctx.fillRect(0,0,w,h);
  for(const c of world.chunks.values()){
    const x=c.cx*CHUNK,z=c.cz*CHUNK;
    ctx.fillStyle=(c.cx+c.cz)%2?'#d4e1bf':'#d8e3c4';ctx.fillRect(px(x-36),pz(z-36),72*scale,72*scale);
    ctx.fillStyle='#eee9d4';
    for(const s of [-1,1]){ctx.fillRect(px(x+s*32.5-3.5),pz(z-36),7*scale,72*scale);ctx.fillRect(px(x-36),pz(z+s*32.5-3.5),72*scale,7*scale);}
    ctx.fillStyle='#e7e5cd';ctx.fillRect(px(x-1.6),pz(z-29),3.2*scale,58*scale);ctx.fillRect(px(x-29),pz(z-1.6),58*scale,3.2*scale);
    ctx.fillStyle='#8fa27b';ctx.font='500 12px "DM Sans", sans-serif';ctx.textAlign='center';ctx.fillText(districtName(c.cx,c.cz,world.seed).toUpperCase(),px(x),pz(z-27));
  }
  for(const park of world.parks){
    ctx.fillStyle='#b7cd98';ctx.beginPath();ctx.roundRect(px(park.x-12),pz(park.z-12),24*scale,24*scale,9);ctx.fill();
    ctx.fillStyle='#e8e2c7';ctx.fillRect(px(park.x-1.5),pz(park.z-12),3*scale,24*scale);ctx.fillRect(px(park.x-12),pz(park.z-1.5),24*scale,3*scale);
    ctx.fillStyle='#94bfb0';ctx.beginPath();ctx.ellipse(px(park.x+4.5),pz(park.z-4.3),4*scale,3.7*scale,0,0,Math.PI*2);ctx.fill();
    for(const [x,z] of [[-6,-6],[7,7],[-7,6]]){ctx.fillStyle='#91ad78';ctx.beginPath();ctx.arc(px(park.x+x),pz(park.z+z),7,0,Math.PI*2);ctx.fill();}
    if(visitedGardens.has(park.id)){ctx.fillStyle='#64865c';ctx.font='16px sans-serif';ctx.fillText('✓',px(park.x),pz(park.z+4));}
  }
  for(const b of world.buildings){
    const visited=visitedRoofs.has(b.id);ctx.fillStyle='#a8b596';ctx.beginPath();ctx.roundRect(px(b.x-b.w/2)+3,pz(b.z-b.d/2)+4,b.w*scale,b.d*scale,3);ctx.fill();
    ctx.fillStyle=visited?'#7f9d79':b.wall;ctx.strokeStyle=visited?'#5f805d':'#aab397';ctx.lineWidth=1.3;ctx.beginPath();ctx.roundRect(px(b.x-b.w/2),pz(b.z-b.d/2),b.w*scale,b.d*scale,3);ctx.fill();ctx.stroke();
    ctx.strokeStyle=visited?'#a8c29a':b.roofColor;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(px(b.x-b.w/2+1),pz(b.z));ctx.lineTo(px(b.x+b.w/2-1),pz(b.z));ctx.stroke();
    if(visited){ctx.fillStyle='#f4f4df';ctx.font='bold 15px sans-serif';ctx.textAlign='center';ctx.fillText('✓',px(b.x),pz(b.z)+5);}
    else{ctx.fillStyle='#c5a15d';ctx.beginPath();ctx.arc(px(b.x),pz(b.z),2.5,0,Math.PI*2);ctx.fill();}
  }
  // The cat is always easy to find, even after a very long wander.
  const x=px(player.pos.x),y=pz(player.pos.z);
  ctx.fillStyle='#ffffff';ctx.beginPath();ctx.arc(x,y,12,0,Math.PI*2);ctx.fill();ctx.shadowColor='#6b775333';ctx.shadowBlur=8;ctx.fillStyle='#cb8b50';ctx.beginPath();ctx.arc(x,y,8.5,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
  ctx.save();ctx.translate(x,y);ctx.rotate(-player.heading);ctx.fillStyle='#fff9e9';ctx.beginPath();ctx.moveTo(0,6);ctx.lineTo(-4,-3);ctx.lineTo(4,-3);ctx.closePath();ctx.fill();ctx.restore();
  const rn=visitedRoofs.size,gn=visitedGardens.size;
  $('map-description').textContent=`${currentDistrict||districtName(0,0,world.seed)} · ${rn} rooftop${rn===1?'':'s'} and ${gn} garden${gn===1?'':'s'} discovered. Drag to look further.`;
}

function loop(now){
  requestAnimationFrame(loop);if(document.hidden){lastTime=now;return;}
  const dt=Math.min(.035,Math.max(.001,(now-(lastTime||now-16))/1000));lastTime=now;time+=dt;frameCount++;
  pollGamepad(dt);
  world.update(player.pos,1);
  if(started&&!modal)updatePlayer(dt);else{player.speed=0;player.turnRate=0;player.accel=0;wallHint=null;}
  cat.root.position.copy(player.pos);cat.root.rotation.y=player.heading;
  const groundY=world.supportHeight(player.pos.x,player.pos.z,player.pos.y);
  cat.update(dt,time,{speed:player.speed,grounded:player.grounded,climbing:!!player.climbing,resting,vy:player.vy,turnRate:player.turnRate,accel:player.accel,landImpact:player.landImpact,runBlend:player.runBlend},groundY,settings.reducedMotion);
  if(!started&&!settings.reducedMotion)cameraYawTarget+=dt*.012;
  updateCamera(dt);updateAtmosphere(dt);audio.update(dt);
  ground.position.x=player.pos.x;ground.position.z=player.pos.z;
  sun.position.set(player.pos.x-35,60,player.pos.z+25);sun.target.position.set(player.pos.x,0,player.pos.z);
  discoveryTimer+=dt;saveTimer+=dt;
  if(discoveryTimer>.3){discoveryTimer=0;if(started&&!modal)checkDiscoveries();
    const hint=$('context-hint');hint.classList.toggle('visible',!!wallHint&&!player.climbing&&!resting&&started&&!modal);
    if(wallHint)hint.querySelector('span').innerHTML=mobile?'Hold <strong>climb</strong> to scramble up':'Hold <kbd>E</kbd> to climb';
    if(modal==='map-modal'&&!mapDrag)drawMap();
  }
  if(resting){purrTimer+=dt;if(purrTimer>1.7){purrTimer=0;audio.purr();}}
  if(saveTimer>5){saveTimer=0;save();}
  renderer.render(scene,camera);
}

function syncInstall(){
  const label=installed?'Installed':offlineReady?'Offline ready':'Getting cozy…';$('offline-label').textContent=!navigator.onLine&&offlineReady?'Playing offline':label;$('offline-status').classList.toggle('ready',offlineReady);
  $('install-ready').querySelector('span').textContent=offlineReady?'All tucked in. This world is ready to play offline.':'Getting the offline files ready…';
  $('install-button').querySelector('span').textContent=installed?'Installed':'Install game';
  $('install-now-button').firstChild.textContent=installPrompt?'Install Whiskerfield ':installed?'Back to my world ':'Got it. Thank you ';
  $('install-instructions').hidden=!!installPrompt;
}
async function setupPWA(){
  syncInstall();
  window.addEventListener('online',syncInstall);window.addEventListener('offline',syncInstall);
  if(!('serviceWorker'in navigator)||!window.isSecureContext){$('offline-label').textContent='Online preview';$('install-ready').querySelector('span').textContent='Offline install needs HTTPS or localhost.';return;}
  try{
    swRegistration=await navigator.serviceWorker.register('./sw.js',{scope:'./'});
    await navigator.serviceWorker.ready;offlineReady=true;syncInstall();
    if(navigator.storage?.persist)navigator.storage.persist().catch(()=>{});
    navigator.serviceWorker.addEventListener('message',e=>{if(e.data?.type==='OFFLINE_READY'){offlineReady=true;syncInstall();}});
  }catch(err){console.warn('Offline cache unavailable:',err);$('offline-label').textContent='Online preview';$('install-ready').querySelector('span').textContent='Offline files couldn’t be saved. Reconnect and reload to try again.';}
}

try{init();setupPWA();}catch(err){console.error(err);$('loading').hidden=true;$('error-screen').hidden=false;$('error-message').textContent='This little world needs WebGL. Try an up-to-date Chrome, Edge, Firefox, or Safari browser with hardware acceleration enabled. '+err.message;}
