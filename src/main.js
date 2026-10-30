import * as THREE from 'three';
import { World, CHUNK, hashString, random, districtName, COUNTRIES, COUNTRY_IDS } from './world.js';
import { Train } from './train.js';
import { Planes, Flight, Sky, PLANE } from './plane.js';
import { Cat } from './cat.js';
import { NeighborhoodAudio } from './audio.js';
import { CAT, PhysicsWorld, createPlayer, stepPlayer } from './physics.js';
import { People } from './npc.js';
import { Fun, HATS, buildHat } from './fun.js';
import { Ducks } from './ducks.js';
import { Birds } from './birds.js';
import * as platform from './platform.js';

const $ = id => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const SAVE_KEY = 'whiskerfield.journey.v1';
const VERSION = '1.3';
const mobile = platform.coarse;
const BASE_SPEED = 7, SPRINT_SPEED = 12.5, STEP = 1 / 90, MAP_SCALE = 3.15;
const params = new URLSearchParams(location.search);
const defaultSeed = () => ['clover', 'willow', 'honey', 'fern', 'peach', 'moss'][Math.floor(Math.random() * 6)] + '-' + Math.floor(100 + Math.random() * 900);
let saved = null;
try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); if (s?.version === 1 && typeof s.seed === 'string') saved = s; } catch {}
// A different town in the URL means a fresh journey there: position and discoveries belong to the old seed, settings travel with you.
// Each town keeps its own journey, so a bookmarked seed brings you back to where you left it.
const urlSeed = params.get('seed')?.trim().slice(0, 40) || null;
const stashJourney = s => { if (s?.seed) try { localStorage.setItem(SAVE_KEY + ':' + (s.country && s.country !== 'whiskerfield' ? s.seed + '~' + s.country : s.seed), JSON.stringify({ ...s, settings: undefined })); } catch {} };
const loadJourney = (seed, country = null) => { try { const j = JSON.parse(localStorage.getItem(SAVE_KEY + ':' + (country && country !== 'whiskerfield' ? seed + '~' + country : seed))); return j?.version === 1 && j.seed === seed ? j : null; } catch { return null; } };
if (saved && urlSeed && urlSeed !== saved.seed) {
  stashJourney(saved);
  const prior = loadJourney(urlSeed);
  saved = prior ? { ...prior, settings: saved.settings } : { version: 1, settings: saved.settings, started: saved.started };
}
const settings = { audio: true, volume: .4, sensitivity: .7, shadows: !mobile, reducedMotion: matchMedia('(prefers-reduced-motion:reduce)').matches, immersive: true, ...saved?.settings };
const validPoint = p => p && Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z) && Math.abs(p.x) < 1e6 && Math.abs(p.z) < 1e6 && p.y >= 0 && p.y < 100;
const player = createPlayer(validPoint(saved?.position) ? { ...saved.position, heading: Number.isFinite(saved?.heading) ? saved.heading : .55 } : null);
const visitedRoofs = new Set(Array.isArray(saved?.roofs) ? saved.roofs.filter(v => typeof v === 'string').slice(-10000) : []);
const visitedGardens = new Set(Array.isArray(saved?.gardens) ? saved.gardens.filter(v => typeof v === 'string').slice(-10000) : []);
const visitedPlaces = new Set(Array.isArray(saved?.places) ? saved.places.filter(v => typeof v === 'string').slice(-10000) : []);
let friendsMade = Number.isFinite(saved?.friends) ? saved.friends : 0;
const savedShinies = Array.isArray(saved?.shinies) ? saved.shinies.filter(v => typeof v === 'string').slice(-20000) : [];
let savedKnocks = Number.isFinite(saved?.knocks) ? saved.knocks : 0, hatId = typeof saved?.hat === 'string' && HATS.some(h => h.id === saved.hat) ? saved.hat : 'none';
let fun = null, ducks = null, train = null, planes = null, sky = null, boardTimer = 0, boardingPlane = null;
const flight = new Flight();
let countryId = COUNTRIES[saved?.country] ? saved.country : 'whiskerfield';
const journeyKey = (seed, country) => country && country !== 'whiskerfield' ? seed + '~' + country : seed;
const audio = new NeighborhoodAudio(); audio.enabled = settings.audio; audio.volume = settings.volume;
let world, physics, people, cat, renderer, scene, camera, sun, ground, leafMesh, butterflyMesh, sparkMesh, clouds = [], birds;
let started = false, resting = false, modal = null, previousFocus = null, ready = false, storageWarning = false;
let cameraYaw = Number.isFinite(saved?.cameraYaw) ? saved.cameraYaw : .56, cameraPitch = .34, cameraDistance = mobile ? 5 : 5.4;
let cameraYawTarget = cameraYaw, cameraPitchTarget = cameraPitch, cameraDistanceTarget = cameraDistance, cameraInputTimer = 0;
let time = 0, lastTime = 0, saveTimer = 0, hudTimer = 0, purrTimer = 0, toastTimer = 0, playTime = 0, slowTime = 0, frameAvg = 16;
let jumpQueued = false, jumpHeld = false, touchClimb = false, touchRun = false, joyX = 0, joyY = 0, wallHint = null, wallPush = 0, scramble = false;
let gamepadMoveX = 0, gamepadMoveY = 0, gamepadRun = false, gamepadClimb = false, prevPadButtons = [];
let currentDistrict = '', mapCenter = null, mapDrag = null, portraitOk = sessionStorage.getItem('whiskerfield.portrait') === '1';
const keys = new Set(), pointers = new Map(), cameraTarget = new THREE.Vector3(), cameraDesired = new THREE.Vector3(), tempVec = new THREE.Vector3(), bubbleVec = new THREE.Vector3();
const dummy = new THREE.Object3D(), particleColor = new THREE.Color();
const leaves = [], butterflies = [], sparks = [];
let installPrompt = null, offlineReady = false, installed = platform.launchedStandalone() || platform.wasInstalled(), updateReady = false;
let lastPinch = 0, swRegistration = null;
const input = { x: 0, y: 0, yaw: 0, sprint: false, baseSpeed: BASE_SPEED, sprintSpeed: SPRINT_SPEED, jump: false, jumpHeld: false, climb: false, autoClimb: true, resting: false };
const events = { jump: () => audio.jump(), land: () => audio.land(), mantle: () => audio.chirp(), bounce: () => { audio.chirp(); burst(); } };
// Test-only virtual controller (merged into the real input when ?test=1 is used).
const hold = { x: 0, y: 0, climb: false, sprint: false, jump: false, jumpHeld: false };

let lastSaved = null, saveDirty = false;
const markDirty = () => { saveDirty = true; };
function save() {
  if (!world) return;
  saveDirty = false; lastSaved = { x: player.pos.x, z: player.pos.z, yaw: cameraYaw };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify({ version: 1, seed: world.seedText, country: countryId, position: { x: player.pos.x, y: player.pos.y, z: player.pos.z }, heading: player.heading, cameraYaw, roofs: [...visitedRoofs].slice(-10000), gardens: [...visitedGardens].slice(-10000), places: [...visitedPlaces].slice(-10000), friends: friendsMade, shinies: [...fun.collected].slice(-20000), knocks: fun.knocks, hat: hatId, settings, started })); }
  catch { if (!storageWarning) { storageWarning = true; toast('Saving is blocked in this browser (private mode?). Progress will not be kept.', 'note', 5000); } }
}
// One quiet line at the top of the screen; never a panel over the world.
function toast(text, kind = 'sun', duration = 3200) {
  clearTimeout(toastTimer); const el = $('toast');
  $('toast-text').textContent = text; el.dataset.kind = kind; el.classList.add('show'); el.classList.toggle('action', kind === 'update');
  toastTimer = setTimeout(() => el.classList.remove('show'), duration);
}
function updateCounts() { $('roof-count').textContent = visitedRoofs.size; $('garden-count').textContent = visitedGardens.size; $('friend-count').textContent = friendsMade; $('place-count').textContent = visitedPlaces.size; $('shiny-count').textContent = fun ? fun.found : 0; }
function setIcon(button, id) { button.querySelector('use')?.setAttribute('href', id); }
function syncSettings() {
  for (const [id, key] of [['audio-toggle', 'audio'], ['shadow-toggle', 'shadows'], ['motion-toggle', 'reducedMotion'], ['immersive-toggle', 'immersive']]) {
    $(id).classList.toggle('on', !!settings[key]); $(id).setAttribute('aria-checked', String(!!settings[key]));
  }
  $('volume-slider').value = Math.round(settings.volume * 100); $('volume-label').textContent = Math.round(settings.volume * 100) + '%';
  $('sensitivity-slider').value = Math.round(settings.sensitivity * 100); $('sensitivity-label').textContent = Math.round(settings.sensitivity * 100) + '%';
  setIcon($('sound-button'), settings.audio ? '#i-sound' : '#i-muted'); $('sound-button').setAttribute('aria-label', settings.audio ? 'Turn sound off' : 'Turn sound on');
  if (renderer) applyQuality();
  if (leafMesh) leafMesh.count = settings.reducedMotion ? 12 : 48;
}
function clearInput() {
  keys.clear(); jumpQueued = false; jumpHeld = false; touchClimb = false; joyX = joyY = 0; gamepadMoveX = gamepadMoveY = 0; gamepadRun = false; gamepadClimb = false; player.jumpBuffer = 0;
  $('joystick-knob').style.transform = 'translate(0px,0px)'; $('joystick').classList.remove('engaged');
  document.querySelectorAll('.touch-action.pressed').forEach(el => el.classList.remove('pressed'));
}
function openModal(id) {
  previousFocus = document.activeElement; clearInput(); modal = id;
  $('modal-backdrop').hidden = false;
  document.querySelectorAll('.modal').forEach(el => el.hidden = el.id !== id);
  $(id).scrollTop = 0;
  if (id === 'map-modal') { mapCenter = { x: player.pos.x, z: player.pos.z }; drawMap(); }
  if (id === 'settings-modal') { $('seed-label').textContent = 'Seed: ' + world.seedText; $('new-world-confirm').hidden = true; syncSettings(); syncInstall(); }
  if (id === 'install-modal') syncInstall();
  if (id === 'hats-modal') { syncHats(); $('hat-button').classList.remove('new'); }
  requestAnimationFrame(() => $(id).querySelector('button')?.focus({ preventScroll: true }));
}
function closeModal() {
  if (!modal) return; modal = null; $('modal-backdrop').hidden = true; document.querySelectorAll('.modal').forEach(el => el.hidden = true); clearInput();
  if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true }); else $('world').focus({ preventScroll: true });
}
function start() {
  if (!ready || started) return;
  started = true; resting = false; playTime = 0; document.body.classList.add('playing'); document.body.classList.remove('resting'); platform.keepAwake(true);
  $('welcome').setAttribute('aria-hidden', 'true'); $('welcome').inert = true;
  $('world').focus({ preventScroll: true }); if (settings.audio) audio.start(); save();
  if (settings.immersive) platform.goImmersive().then(syncOrientation);
  toast(saved?.started ? 'Welcome back. You are where you left off.' : 'Try a roof first. Hold E at a wall, or jump at it and keep pushing.', 'sun', 4200);
}
function toggleRest() {
  if (!started || modal) return;
  if (!player.grounded) { toast('You can only nap on the ground.', 'note', 2200); return; }
  resting = !resting; clearInput(); document.body.classList.toggle('resting', resting);
  $('rest-button').setAttribute('aria-pressed', String(resting));
  if (resting) { toast('Napping. Move to get up.', 'moon', 2600); audio.purr(); }
}
function syncOrientation() {
  const needRotate = started && platform.phoneLike() && platform.isPortrait() && !portraitOk;
  $('rotate').hidden = !needRotate;
  document.body.classList.toggle('portrait', platform.isPortrait());
  const fs = platform.isFullscreen();
  setIcon($('fullscreen-button'), fs ? '#i-shrink' : '#i-expand'); $('fullscreen-button').setAttribute('aria-label', fs ? 'Leave fullscreen' : 'Fullscreen');
}

function init() {
  scene = new THREE.Scene(); scene.background = new THREE.Color('#c9d4c8'); scene.fog = new THREE.Fog('#c9d4c8', 58, mobile ? 108 : 145);
  renderer = new THREE.WebGLRenderer({ canvas: $('world'), antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.4 : 1.5)); renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = settings.shadows; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, .08, 350);
  scene.add(new THREE.HemisphereLight('#dfe6d8', '#7e8a68', 1.35));
  sun = new THREE.DirectionalLight('#ffe6c0', 2.2); sun.position.set(-35, 60, 25); sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048); sun.shadow.camera.left = -36; sun.shadow.camera.right = 36; sun.shadow.camera.top = 36; sun.shadow.camera.bottom = -36; sun.shadow.camera.near = 1; sun.shadow.camera.far = 150; sun.shadow.bias = -.0003; sun.shadow.normalBias = .03; sun.shadow.radius = 3;
  scene.add(sun); scene.add(sun.target);
  const groundTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); x.fillStyle = '#ffffff'; x.fillRect(0, 0, 128, 128); for (let i = 0; i < 2400; i++) { x.fillStyle = `rgba(60,75,45,${Math.random() * .1})`; x.fillRect(Math.random() * 128, Math.random() * 128, 1 + Math.random() * 2, 1); } const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(180, 180); return t; })();
  ground = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), new THREE.MeshStandardMaterial({ color: '#93a86f', roughness: 1, map: groundTex })); ground.rotation.x = -Math.PI / 2; ground.position.y = -.45; ground.receiveShadow = true; scene.add(ground);
  createWorld(urlSeed || saved?.seed || defaultSeed(), countryId);
  cat = new Cat(scene, CAT.scale); cat.root.position.copy(player.pos); cat.root.rotation.y = player.heading; wearHat(hatId, true);
  createAtmosphere(); createUI(); syncSettings(); updateCounts();
  cameraTarget.copy(player.pos); updateCamera(1, true);
  $('seed-label').textContent = 'Seed: ' + world.seedText;
  if (saved?.started) { $('start-button').firstChild.textContent = 'Wander on '; $('welcome-note').lastChild.textContent = ' Just as you left it. Ready when you are.'; }
  ready = true; renderer.render(scene, camera);
  requestAnimationFrame(() => { requestAnimationFrame(() => { $('loading').classList.add('done'); setTimeout(() => $('loading').hidden = true, 700); }); });
  requestAnimationFrame(loop);
  if (params.get('test') === '1') window.__whiskerfield = {
    player, get world() { return world; }, get people() { return people; }, get birds() { return birds; }, get physics() { return physics; }, cat, renderer, camera, input, hold, keys, start, save, adapt: adaptQuality, getQuality: () => ({ level: qualityLevel, pixelRatio: renderer.getPixelRatio(), shadows: renderer.shadowMap.enabled }), mapCenter: () => mapCenter, step: dt => { simulate(dt); people.interactive = started && !modal; people.update(dt, player.pos, player.speed, camera); birds.update(dt, player.pos, player.speed); fun.sync(); fun.update(dt, player, people); ducks.sync(player.pos); ducks.update(dt, player.pos, time); const ride = train.update(dt, player.pos, !!player.support?.train); if (player.support?.train && !flight.active) player.pos.z += ride; if (flight.active) flight.update(dt); else { const pl = planes.at(player.pos); if (pl) { boardTimer += dt; if (boardTimer > .9) { boardTimer = -999; offerFlight(pl); } } else boardTimer = 0; } planes.sync(); time += dt; }, get fun() { return fun; }, get ducks() { return ducks; }, get train() { return train; }, get planes() { return planes; }, flight, get country() { return countryId; }, travel, offerFlight, board: id => beginFlight(id), wearHat, hats: HATS, discover: checkDiscoveries, platformCalls: platform.calls,
    getState: () => ({ ready, started, resting, modal, position: player.pos.toArray(), speed: player.speed, grounded: player.grounded, climbing: !!player.climbing, support: player.support?.kind || null, roofs: visitedRoofs.size, gardens: visitedGardens.size, places: visitedPlaces.size, friends: friendsMade, shinies: fun ? fun.found : 0, knocks: fun ? fun.knocks : 0, hat: hatId, chunks: world.chunks.size, colliders: world.colliders.length, npcs: people.list.length, greetings: people.greetings, drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles, offlineReady, installed, installButtonHidden: $('install-button').hidden, fullscreen: platform.isFullscreen(), cameraDistance }),
    teleport: (x, y, z) => { player.pos.set(x, y, z); player.vx = player.vz = player.vy = 0; player.climbing = null; player.grounded = false; world.update(player.pos, 25); },
    setCamera: (yaw, pitch = cameraPitch, distance = cameraDistance) => { cameraYaw = cameraYawTarget = yaw; cameraPitch = cameraPitchTarget = pitch; cameraDistance = cameraDistanceTarget = distance; },
    getSettings: () => ({ ...settings })
  };
}

function applyCountryLook() {
  const c = COUNTRIES[countryId];
  scene.background.set(c.sky); scene.fog.color.set(c.sky); ground.material.color.set(c.ground);
  if (leafMesh) leafMesh.material.color.set(c.leaf);
  $('seed-label').textContent = 'Seed: ' + world.seedText + (countryId === 'whiskerfield' ? '' : ' · ' + c.name);
  document.body.dataset.country = countryId;
}
function createWorld(seed, country = 'whiskerfield') {
  countryId = COUNTRIES[country] ? country : 'whiskerfield';
  world = new World(scene, seed, countryId); world.radius = mobile ? 1 : 2; world.update(player.pos, mobile ? 5 : 9);
  physics = new PhysicsWorld(world); applyCountryLook();
  people = new People(scene, physics, mobile ? 9 : 14, seed);
  people.onGreet = () => { friendsMade++; updateCounts(); audio.greet(); if (friendsMade === 1) toast('Your first hello. People remember a friendly cat.', 'heart', 3600); if (friendsMade % 10 === 0) save(); };
  people.spawnAll(player.pos);
  birds = new Birds(scene, world, mobile ? 8 : 14);
  birds.onStartle = b => { birds.startles++; if (b.crow) audio.caw(); else if (Math.random() < .5) audio.tweet(); };
  birds.spawnAll(player.pos);
  ducks = new Ducks(scene, world, physics); ducks.sync(player.pos); ducks.onQuack = (kind, idle) => audio.quack(kind === 'duckling', idle);
  train = new Train(scene, world, physics); train.onWhistle = d => audio.whistle(d); train.onChuff = (d, k) => audio.chuff(d, k);
  planes = new Planes(scene, world, physics); planes.sync();
  if (!sky) sky = new Sky(scene);
  fun = new Fun(scene, world, physics, { collected: savedShinies, knocks: savedKnocks }); fun.sync();
  fun.onShiny = shiny => {
    const n = fun.found; updateCounts(); audio.shiny(); burst(shiny.x, shiny.y, shiny.z); markDirty();
    const unlocked = HATS.find(h => h.need === n && h.id !== 'none');
    toast(unlocked ? `${shiny.kind.line} That makes ${n} — the ${unlocked.name.toLowerCase()} is yours. Press H.` : n === 1 ? `${shiny.kind.line} A cat could start a collection.` : shiny.kind.line, 'sun', unlocked ? 4600 : 2600);
    if (unlocked) $('hat-button').classList.add('new');
    if (n % 5 === 0 || unlocked) save();
  };
  fun.onKnock = (prop, sound, soft) => {
    audio.clatter(sound, soft); if (soft) return; markDirty();
    if (fun.knocks === 1) toast('Oops. It was in the way.', 'leaf', 2600);
    else if (fun.knocks === 10) toast('Ten things knocked over. The street has noticed.', 'leaf', 3000);
  };
  if (cat) wearHat(hatId, true);
}
function wearHat(id, silent = false) {
  const hat = HATS.find(h => h.id === id) || HATS[0];
  if (fun && fun.found < hat.need) { if (!silent) toast(`Find ${hat.need - fun.found} more ${hat.need - fun.found === 1 ? 'shiny' : 'shinies'} for the ${hat.name.toLowerCase()}.`, 'note', 2600); return false; }
  hatId = hat.id; cat.setHat(hat.id, buildHat(hat.id)); markDirty(); if (!silent) { save(); syncHats(); }
  return true;
}
function syncHats() {
  const list = $('hat-list'); if (!list) return; list.textContent = '';
  const found = fun ? fun.found : 0; $('hat-found').textContent = found;
  for (const h of HATS) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'hat-card'; b.dataset.hat = h.id;
    const locked = found < h.need, wearing = hatId === h.id;
    b.classList.toggle('locked', locked); b.classList.toggle('wearing', wearing); b.setAttribute('aria-pressed', wearing ? 'true' : 'false');
    b.innerHTML = `<strong></strong><small></small><em></em>`;
    b.querySelector('strong').textContent = h.name; b.querySelector('small').textContent = h.blurb;
    b.querySelector('em').textContent = wearing ? 'Wearing' : locked ? `${h.need} shinies` : h.need ? 'Found' : '';
    b.addEventListener('click', () => { if (wearHat(h.id)) syncHats(); });
    list.appendChild(b);
  }
}

function createAtmosphere() {
  const r = random(hashString(world.seedText + 'air'));
  leafMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(.14, .25), new THREE.MeshBasicMaterial({ color: '#e8d59a', side: THREE.DoubleSide, transparent: true, opacity: .72 }), 48); leafMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); leafMesh.frustumCulled = false; scene.add(leafMesh);
  for (let i = 0; i < 48; i++) leaves.push({ x: (r() - .5) * 70, y: 1 + r() * 12, z: (r() - .5) * 70, phase: r() * Math.PI * 2, speed: .3 + r() * .5 });
  butterflyMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(.12, .15), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), 24); butterflyMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); butterflyMesh.frustumCulled = false; scene.add(butterflyMesh);
  for (let i = 0; i < 12; i++) { butterflies.push({ x: (r() - .5) * 55, z: (r() - .5) * 55, y: .6 + r() * 1.6, phase: r() * 7 }); butterflyMesh.setColorAt(i * 2, particleColor.set(['#f1d995', '#e7ba95', '#e9e7c7'][i % 3])); butterflyMesh.setColorAt(i * 2 + 1, particleColor.set(['#f1d995', '#e7ba95', '#e9e7c7'][i % 3])); }
  sparkMesh = new THREE.InstancedMesh(new THREE.OctahedronGeometry(.19), new THREE.MeshStandardMaterial({ color: '#edcc7d', emissive: '#c7a04d', emissiveIntensity: .3, roughness: .5 }), 400); sparkMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); sparkMesh.count = 0; sparkMesh.frustumCulled = false; scene.add(sparkMesh);
  const cloudMat = new THREE.MeshLambertMaterial({ color: '#f2f2df', transparent: true, opacity: .65, depthWrite: false });
  const cloudGeo = new THREE.IcosahedronGeometry(1, 1);
  for (let i = 0; i < 9; i++) {
    const group = new THREE.Group(); for (let j = 0; j < 4; j++) { const m = new THREE.Mesh(cloudGeo, cloudMat); m.position.set(j * 3.5, Math.sin(j) * 1.2, 0); m.scale.set(4.5, 2.1 + j % 2, 2.8); group.add(m); }
    group.position.set((r() - .5) * 240, 38 + r() * 20, (r() - .5) * 240); scene.add(group); clouds.push(group);
  }
}

function createUI() {
  $('start-button').addEventListener('click', start);
  $('welcome-help').addEventListener('click', () => openModal('help-modal'));
  $('settings-help').addEventListener('click', () => openModal('help-modal'));
  $('settings-button').addEventListener('click', () => openModal('settings-modal'));
  $('map-button').addEventListener('click', () => openModal('map-modal'));
  $('hat-button').addEventListener('click', () => openModal('hats-modal'));
  $('brand').addEventListener('click', e => { e.preventDefault(); openModal('settings-modal'); });
  $('rest-button').addEventListener('click', toggleRest);
  $('fullscreen-button').addEventListener('click', async () => { if (platform.isFullscreen()) await platform.exitFullscreen(); else { await platform.enterFullscreen(); if (mobile) await platform.lockLandscape(); } syncOrientation(); });
  $('rotate-continue').addEventListener('click', () => { portraitOk = true; sessionStorage.setItem('whiskerfield.portrait', '1'); syncOrientation(); });
  $('rotate-fullscreen').addEventListener('click', async () => { await platform.goImmersive(); syncOrientation(); });
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  $('modal-backdrop').addEventListener('click', e => { if (e.target === $('modal-backdrop')) closeModal(); });
  $('sound-button').addEventListener('click', () => { settings.audio = !settings.audio; audio.setEnabled(settings.audio); syncSettings(); save(); });
  $('audio-toggle').addEventListener('click', () => { settings.audio = !settings.audio; audio.setEnabled(settings.audio); syncSettings(); save(); });
  $('shadow-toggle').addEventListener('click', () => { settings.shadows = !settings.shadows; syncSettings(); renderer.shadowMap.needsUpdate = true; scene.traverse(o => { if (o.material) o.material.needsUpdate = true; }); save(); });
  $('motion-toggle').addEventListener('click', () => { settings.reducedMotion = !settings.reducedMotion; syncSettings(); save(); });
  $('immersive-toggle').addEventListener('click', () => { settings.immersive = !settings.immersive; syncSettings(); save(); });
  $('volume-slider').addEventListener('input', e => { settings.volume = Number(e.target.value) / 100; audio.setVolume(settings.volume); $('volume-label').textContent = e.target.value + '%'; save(); });
  $('sensitivity-slider').addEventListener('input', e => { settings.sensitivity = Number(e.target.value) / 100; $('sensitivity-label').textContent = e.target.value + '%'; save(); });
  $('new-world-button').addEventListener('click', () => $('new-world-confirm').hidden = false);
  $('cancel-new-world').addEventListener('click', () => $('new-world-confirm').hidden = true);
  $('confirm-new-world').addEventListener('click', newWorld);
  $('map-recenter').addEventListener('click', () => { mapCenter = { x: player.pos.x, z: player.pos.z }; drawMap(); });
  $('install-button').addEventListener('click', () => openModal('install-modal'));
  $('install-link').addEventListener('click', () => openModal('install-modal'));
  $('install-now-button').addEventListener('click', async () => {
    if (installPrompt) {
      const p = installPrompt; installPrompt = null;
      try { await p.prompt(); const choice = await p.userChoice; if (choice.outcome === 'accepted') { markInstalled(); toast('Installed.', 'heart'); } else syncInstall(); }
      catch { installPrompt = null; syncInstall(); }
    } else closeModal();
  });
  $('toast').addEventListener('click', () => { if (updateReady) location.reload(); });
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; syncInstall(); });
  window.addEventListener('appinstalled', () => { markInstalled(); save(); });
  platform.detectInstalled().then(v => { if (v) markInstalled(); });
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') { e.preventDefault(); modal ? closeModal() : openModal('settings-modal'); return; }
    if (modal) {
      if (e.code === 'Tab') {
        const focusable = [...$(modal).querySelectorAll('button,input,[tabindex="0"]')].filter(el => !el.disabled && el.offsetParent !== null);
        const first = focusable[0], last = focusable.at(-1);
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
      return;
    }
    if (!started) return;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyE', 'ShiftLeft', 'ShiftRight', 'KeyM', 'KeyN', 'KeyF', 'KeyH'].includes(e.code)) e.preventDefault();
    if (e.code === 'KeyM' && !e.repeat) { openModal('map-modal'); return; }
    if (e.code === 'KeyH' && !e.repeat) { openModal('hats-modal'); return; }
    if (e.code === 'KeyN' && !e.repeat) { toggleRest(); return; }
    if (e.code === 'KeyF' && !e.repeat) { $('fullscreen-button').click(); return; }
    if (e.code === 'Space' && !e.repeat && !keys.has('Space')) jumpQueued = true;
    if (e.code === 'Space') jumpHeld = true;
    keys.add(e.code);
  });
  window.addEventListener('keyup', e => { keys.delete(e.code); if (e.code === 'Space') jumpHeld = false; });
  window.addEventListener('blur', () => { clearInput(); pointers.clear(); save(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { clearInput(); save(); audio.suspend(); } else { lastTime = performance.now(); audio.resume(); } });
  window.addEventListener('pagehide', save);
  const resize = () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); syncOrientation(); };
  window.addEventListener('resize', resize);
  screen.orientation?.addEventListener?.('change', resize);
  document.addEventListener('fullscreenchange', () => { if (!platform.isFullscreen()) platform.unlockOrientation(); syncOrientation(); });
  $('world').addEventListener('webglcontextlost', e => { e.preventDefault(); save(); $('error-message').textContent = 'The graphics context was lost. Reload to continue from your saved spot.'; $('error-screen').hidden = false; });
  const canvas = $('world');
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  canvas.addEventListener('pointerdown', e => {
    if (modal) return; canvas.setPointerCapture(e.pointerId); pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) { const a = [...pointers.values()]; lastPinch = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); }
  });
  canvas.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId) || modal) return; const p = pointers.get(e.pointerId), dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (pointers.size === 2) { const a = [...pointers.values()], d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); cameraDistanceTarget = clamp(cameraDistanceTarget - (d - lastPinch) * .012, 3.2, mobile ? 9 : 14); lastPinch = d; }
    else { cameraYawTarget -= dx * .0048 * settings.sensitivity; cameraPitchTarget = clamp(cameraPitchTarget + dy * .0032 * settings.sensitivity, .16, mobile ? .95 : 1.15); }
    cameraInputTimer = 1.6;
  });
  const release = e => pointers.delete(e.pointerId); canvas.addEventListener('pointerup', release); canvas.addEventListener('pointercancel', release); canvas.addEventListener('lostpointercapture', release);
  canvas.addEventListener('wheel', e => { e.preventDefault(); if (!modal) { cameraDistanceTarget = clamp(cameraDistanceTarget + e.deltaY * .006, 3.2, 14); cameraInputTimer = 1.6; } }, { passive: false });
  // Touch joystick, latching sprint, hold-to-climb, and jump.
  const joy = $('joystick'); let joyPointer = null;
  const moveJoy = e => { const rect = joy.getBoundingClientRect(), max = rect.width * .36; let dx = e.clientX - rect.left - rect.width / 2, dy = e.clientY - rect.top - rect.height / 2; const d = Math.hypot(dx, dy); if (d > max) { dx *= max / d; dy *= max / d; } const n = Math.min(1, d / max), dead = .1; const shaped = n < dead ? 0 : (n - dead) / (1 - dead); joyX = d ? dx / d * shaped : 0; joyY = d ? dy / d * shaped : 0; $('joystick-knob').style.transform = `translate(${dx}px,${dy}px)`; joy.classList.toggle('engaged', n > dead); };
  joy.addEventListener('pointerdown', e => { e.preventDefault(); joyPointer = e.pointerId; joy.setPointerCapture(e.pointerId); moveJoy(e); });
  joy.addEventListener('pointermove', e => { if (e.pointerId === joyPointer) moveJoy(e); });
  const releaseJoy = e => { if (e.pointerId !== joyPointer) return; joyPointer = null; joyX = joyY = 0; $('joystick-knob').style.transform = 'translate(0px,0px)'; joy.classList.remove('engaged'); };
  joy.addEventListener('pointerup', releaseJoy); joy.addEventListener('pointercancel', releaseJoy); joy.addEventListener('lostpointercapture', releaseJoy);
  const hold = (id, on, off) => { const el = $(id); el.addEventListener('pointerdown', e => { e.preventDefault(); el.setPointerCapture(e.pointerId); el.classList.add('pressed'); on(); }); for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) el.addEventListener(ev, () => { el.classList.remove('pressed'); off(); }); };
  hold('touch-jump', () => { jumpQueued = true; jumpHeld = true; }, () => { jumpHeld = false; });
  hold('touch-climb', () => { touchClimb = true; }, () => { touchClimb = false; });
  const setRun = v => { touchRun = v; $('touch-run').classList.toggle('active', touchRun); $('touch-run').setAttribute('aria-pressed', String(touchRun)); };
  $('touch-run').addEventListener('pointerdown', e => { e.preventDefault(); setRun(!touchRun); });
  const map = $('map-canvas');
  map.addEventListener('pointerdown', e => { map.setPointerCapture(e.pointerId); mapDrag = { x: e.clientX, y: e.clientY }; });
  map.addEventListener('pointermove', e => { if (!mapDrag) return; const scale = MAP_SCALE * (map.clientWidth / 960); mapCenter.x -= (e.clientX - mapDrag.x) / scale; mapCenter.z -= (e.clientY - mapDrag.y) / scale; mapDrag = { x: e.clientX, y: e.clientY }; drawMap(); });
  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) map.addEventListener(ev, () => mapDrag = null);
  syncOrientation();
}

function markInstalled() { installed = true; installPrompt = null; platform.rememberInstalled(); syncInstall(); }

// ---- flights ----------------------------------------------------------------------------------
function offerFlight(plane) {
  boardingPlane = plane;
  const list = $('flight-list'); list.innerHTML = '';
  for (const id of COUNTRY_IDS) {
    if (id === countryId) continue;
    const c = COUNTRIES[id], b = document.createElement('button'); b.className = 'flight-card'; b.type = 'button'; b.dataset.country = id;
    b.innerHTML = `<span class="flight-code">${c.code}</span><strong>${c.name}</strong><small>${id === 'whiskerfield' ? 'Home' : c.trees === 'palm' ? 'Warm. Palms. Red roofs.' : c.snow ? 'Snow. Pines. Red cabins.' : 'Blossom. Dark tiles.'}</small>`;
    b.addEventListener('click', () => beginFlight(id)); list.appendChild(b);
  }
  $('flight-from').textContent = COUNTRIES[countryId].name;
  openModal('flight-modal');
}
function beginFlight(id) {
  const plane = boardingPlane || planes.at(player.pos) || [...planes.list.values()][0];
  if (!plane || !COUNTRIES[id] || id === countryId) return false;
  closeModal(); resting = false; clearInput(); cat.root.visible = false; audio.jet();
  flight.begin(plane, id); toast('Doors closing. Hold on to something.', 'sun', 2600);
  return true;
}
flight.onFade = v => { const f = $('fade'); f.style.opacity = v; f.hidden = v <= 0; };
flight.onTravel = id => travel(id);
flight.onArrive = airport => {
  player.pos.set(airport.door.x, .3, airport.stand.z + 8.6); player.vx = player.vz = player.vy = 0; player.climbing = null; player.grounded = true; player.heading = Math.PI;
  cat.root.visible = true; cat.root.position.copy(player.pos); cameraYaw = cameraYawTarget = Math.PI + .4; cameraTarget.copy(player.pos);
  toast(COUNTRIES[countryId].line, 'sun', 4200); audio.discovery(); save();
};
// Swap the whole town for the destination country's, keeping the cat, the hat, and the settings.
function travel(id) {
  stashJourney({ version: 1, seed: world.seedText, country: countryId, position: { x: player.pos.x, y: player.pos.y, z: player.pos.z }, heading: player.heading, cameraYaw, roofs: [...visitedRoofs].slice(-10000), gardens: [...visitedGardens].slice(-10000), places: [...visitedPlaces].slice(-10000), friends: friendsMade, shinies: [...fun.collected], knocks: fun.knocks, hat: hatId, started });
  const seed = world.seedText;
  people.dispose(); birds.dispose(); ducks.dispose(); train.dispose(); planes.dispose(); for (const [, t] of fun.tracked) scene.remove(t.group); world.dispose();
  const prior = loadJourney(seed, id);
  visitedRoofs.clear(); visitedGardens.clear(); visitedPlaces.clear(); friendsMade = 0; savedShinies.length = 0; savedKnocks = 0;
  if (prior) { for (const v of prior.roofs || []) visitedRoofs.add(v); for (const v of prior.gardens || []) visitedGardens.add(v); for (const v of prior.places || []) visitedPlaces.add(v); friendsMade = prior.friends || 0; savedShinies.push(...(prior.shinies || [])); savedKnocks = prior.knocks || 0; }
  // The nearest airport to the origin of every country sits at chunk (2, 0); land there.
  player.pos.set(2 * CHUNK + 2.1, .3, 9.9); player.vx = player.vz = player.vy = 0;
  createWorld(seed, id); updateCounts(); currentDistrict = '';
  const airport = world.airports.reduce((a, b) => !a || Math.hypot(b.x - player.pos.x, b.z - player.pos.z) < Math.hypot(a.x - player.pos.x, a.z - player.pos.z) ? b : a, null);
  visitedPlaces.add(airport.id); save();
  return airport;
}

function newWorld() {
  stashJourney({ version: 1, seed: world.seedText, country: countryId, position: { x: player.pos.x, y: player.pos.y, z: player.pos.z }, heading: player.heading, cameraYaw, roofs: [...visitedRoofs].slice(-10000), gardens: [...visitedGardens].slice(-10000), places: [...visitedPlaces].slice(-10000), friends: friendsMade, shinies: [...fun.collected], knocks: fun.knocks, hat: hatId, started });
  people.dispose(); birds.dispose(); ducks.dispose(); train.dispose(); planes.dispose(); for (const [, t] of fun.tracked) scene.remove(t.group); world.dispose(); visitedRoofs.clear(); visitedGardens.clear(); visitedPlaces.clear(); friendsMade = 0; savedShinies.length = 0; savedKnocks = 0; hatId = 'none';
  player.pos.set(1.1, 0, 7.1); player.vx = player.vz = player.vy = 0; player.climbing = null; player.grounded = true; player.heading = .55; player.landImpact = 0; player.runBlend = 0;
  cameraYaw = cameraYawTarget = .56; cameraPitch = cameraPitchTarget = .34; cameraDistance = cameraDistanceTarget = mobile ? 5 : 5.4; resting = false; saved = null;
  createWorld(defaultSeed(), 'whiskerfield'); updateCounts(); closeModal(); save();
  document.body.classList.remove('resting'); $('rest-button').setAttribute('aria-pressed', 'false');
  toast('New town. Same cat.', 'leaf');
}

// Fixed-rate physics (90 Hz substeps) so a slow phone and a fast monitor move the cat identically.
function simulate(dt) {
  if (flight.active) { player.speed = 0; return; }
  const ix = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0) + joyX + gamepadMoveX + hold.x;
  const iz = (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0) - (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) + joyY + gamepadMoveY + hold.y;
  if (hold.jump) { jumpQueued = true; hold.jump = false; }
  const amount = Math.hypot(ix, iz);
  if (amount > .15 && resting) { resting = false; document.body.classList.remove('resting'); $('rest-button').setAttribute('aria-pressed', 'false'); }
  input.x = ix; input.y = iz; input.yaw = cameraYaw;
  input.sprint = keys.has('ShiftLeft') || keys.has('ShiftRight') || touchRun || gamepadRun || hold.sprint;
  input.jump = input.jump || jumpQueued; jumpQueued = false; input.jumpHeld = jumpHeld || hold.jumpHeld;
  const explicitClimb = keys.has('KeyE') || touchClimb || gamepadClimb || hold.climb;
  input.resting = resting;
  const steps = Math.min(12, Math.max(1, Math.ceil(dt / STEP))), h = dt / steps;
  for (let i = 0; i < steps; i++) {
    // Walking into a climbable wall for a moment starts a scramble, like a real cat.
    const blocked = wallHint && player.grounded && amount > .5 && player.speed < 1.2 && !resting;
    wallPush = blocked ? wallPush + h : Math.max(0, wallPush - h * 3);
    if (wallPush > .32) { scramble = true; wallPush = 0; }
    input.climb = explicitClimb || scramble;
    const result = stepPlayer(player, input, physics, h, events);
    wallHint = result.wall;
    saveTimer += h;
    if (saveTimer > 5) {
      saveTimer = 0;
      const moved = !lastSaved || Math.hypot(player.pos.x - lastSaved.x, player.pos.z - lastSaved.z) > .3 || Math.abs(cameraYaw - lastSaved.yaw) > .05;
      if (saveDirty || moved) save();
    }
    // A scramble lasts until the top (or until the stick is released), never a single frame.
    if (!player.climbing || amount < .3) scramble = false;
  }
  input.jump = false;
}

function pollGamepad(dt) {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const pad = [...pads].find(p => p && p.connected);
  if (!pad) { gamepadMoveX = gamepadMoveY = 0; gamepadRun = false; gamepadClimb = false; prevPadButtons = []; return; }
  const dead = v => Math.abs(v) < .16 ? 0 : (Math.abs(v) - .16) / .84 * Math.sign(v);
  gamepadMoveX = dead(pad.axes[0] || 0); gamepadMoveY = dead(pad.axes[1] || 0);
  const rx = dead(pad.axes[2] || 0), ry = dead(pad.axes[3] || 0);
  if (rx || ry) { cameraYawTarget -= rx * 2.6 * dt; cameraPitchTarget = clamp(cameraPitchTarget + ry * 1.8 * dt, .16, 1.15); cameraInputTimer = 1.6; }
  const b = i => !!pad.buttons[i]?.pressed;
  if (b(10) && !prevPadButtons[10]) touchRun = !touchRun;
  gamepadRun = b(6) || b(7); gamepadClimb = b(1) || b(5) || b(4);
  if (b(0) && !prevPadButtons[0]) jumpQueued = true;
  if (b(0)) jumpHeld = true; else if (prevPadButtons[0]) jumpHeld = false;
  if (b(9) && !prevPadButtons[9]) { modal ? closeModal() : openModal('settings-modal'); }
  if (b(3) && !prevPadButtons[3]) toggleRest();
  prevPadButtons = pad.buttons.map(x => x.pressed);
}

function rayBox(origin, dir, s, pad = .2) {
  let tmin = 0, tmax = 1;
  for (const [o, d, lo, hi] of [[origin.x, dir.x, s.minX - pad, s.maxX + pad], [origin.y, dir.y, s.minY - pad, s.maxY + pad], [origin.z, dir.z, s.minZ - pad, s.maxZ + pad]]) {
    if (Math.abs(d) < 1e-7) { if (o < lo || o > hi) return Infinity; }
    else { let a = (lo - o) / d, b = (hi - o) / d; if (a > b) [a, b] = [b, a]; tmin = Math.max(tmin, a); tmax = Math.min(tmax, b); if (tmin > tmax) return Infinity; }
  }
  return tmin > 0.02 ? tmin : Infinity;
}
function updateCamera(dt, instant = false) {
  if (hold.camera) { camera.position.set(...hold.camera.pos); camera.lookAt(...hold.camera.at); return; }
  if (flight.active && flight.camPos) { camera.position.copy(flight.cam.pos); camera.lookAt(flight.cam.at); return; }
  cameraYaw = THREE.MathUtils.damp(cameraYaw, cameraYawTarget, 12, dt);
  cameraPitch = THREE.MathUtils.damp(cameraPitch, cameraPitchTarget, 10, dt);
  cameraDistance = THREE.MathUtils.damp(cameraDistance, cameraDistanceTarget * (1 + player.runBlend * .14), 6, dt);
  cameraInputTimer = Math.max(0, cameraInputTimer - dt);
  const isWelcome = !started, narrow = innerWidth < 700 || innerWidth < innerHeight;
  const rightX = Math.cos(cameraYaw), rightZ = -Math.sin(cameraYaw);
  const desiredTarget = tempVec.copy(player.pos);
  desiredTarget.y += isWelcome ? .9 : .38 + (player.climbing ? .25 : 0);
  if (!isWelcome) { desiredTarget.x += player.vx * .1; desiredTarget.z += player.vz * .1; desiredTarget.y += clamp(player.vy, -4, 4) * .03; }
  if (isWelcome) { const offset = narrow ? 0 : -3.4; desiredTarget.x += rightX * offset; desiredTarget.z += rightZ * offset; }
  if (instant) cameraTarget.copy(desiredTarget); else cameraTarget.lerp(desiredTarget, 1 - Math.exp(-10 * dt));
  const pitch = isWelcome ? .3 : cameraPitch, distance = isWelcome ? (narrow ? 9 : 11) : cameraDistance;
  cameraDesired.set(Math.sin(cameraYaw) * Math.cos(pitch) * distance, Math.sin(pitch) * distance, Math.cos(cameraYaw) * Math.cos(pitch) * distance);
  let allowed = 1, needY = -Infinity;
  if (!isWelcome) {
    for (const s of physics.query(player.pos.x, player.pos.z, distance + 1.5)) {
      if (s.shape === 'ellipsoid' || s.person || (s.shape === 'cylinder' && s.r < .2) || s.maxY - s.minY < .3) continue;
      const t = rayBox(cameraTarget, cameraDesired, s);
      if (t >= 1) continue;
      // Tall things block the camera (walls, roofs, crates, fountain columns, trunks) and pull it closer;
      // low things (fountain rims, pond stones, benches) just lift the camera so it can see over them.
      if (s.maxY - s.minY >= .7) allowed = Math.min(allowed, t);
      else if (t > .05) needY = Math.max(needY, cameraTarget.y + (s.maxY + .22 - cameraTarget.y) / t);
    }
  }
  if (allowed < 1) cameraDesired.multiplyScalar(Math.max(.18, allowed - .3 / distance));
  cameraDesired.add(cameraTarget);
  if (needY > cameraDesired.y) cameraDesired.y = Math.min(needY, cameraTarget.y + distance * .9);
  // Never let the camera sink into the ground, a pond, a fountain rim, or a bench top.
  if (!isWelcome) {
    const floor = physics.highest(cameraDesired.x, cameraDesired.z, cameraDesired.y);
    const minY = Math.max(0, floor) + .42;
    if (cameraDesired.y < minY) cameraDesired.y = minY;
  }
  if (instant) camera.position.copy(cameraDesired); else camera.position.lerp(cameraDesired, 1 - Math.exp(-(allowed < 1 ? 16 : 9) * dt));
  camera.lookAt(cameraTarget);
  const targetFov = isWelcome ? 46 : 50 + player.runBlend * 6;
  if (Math.abs(camera.fov - targetFov) > .02) { camera.fov = THREE.MathUtils.damp(camera.fov, targetFov, 5, dt); camera.updateProjectionMatrix(); }
}

function burst(x = player.pos.x, y = player.pos.y + .4, z = player.pos.z) {
  for (let i = 0; i < 14; i++) sparks.push({ x, y, z, vx: (Math.random() - .5) * 2, vy: .8 + Math.random() * 1.8, vz: (Math.random() - .5) * 2, life: 1.4 });
  if (sparks.length > 80) sparks.splice(0, sparks.length - 80);
}
const PLACE_LINES = {
  market: () => 'Market day. Mind the stallholders’ feet.',
  works: () => 'The old works. Something in there is still turning.',
  warehouse: () => 'The depot. Pallets make excellent stairs.',
  tower: () => 'Top of the tower. You can see the whole district.',
  playground: () => 'The playground. Beams, a climbing frame, a slide, a trampoline.',
  cafe: () => 'Inside the café.',
  shop: () => 'The little grocer. Please do not knock over the tins.',
  home: () => 'Somebody’s living room.',
  station: () => 'The station. The train is in, and in no hurry.',
  allotments: () => 'The allotments. Mind the lettuces.',
  house: p => `Inside. ${p.name[0].toUpperCase()}${p.name.slice(1)}.`,
  worksfloor: () => 'The works floor. Loud, warm, and nobody minds a cat.',
  lobby: () => 'The lobby. Very shiny floor.',
  depotfloor: () => 'Inside the depot. Rows and rows of boxes.',
  bridge: () => 'The footbridge. Best place to watch the train.',
  yard: () => 'The goods yard.',
  signalbox: () => 'The signal box. All the levers.',
  airport: () => 'The airport. Walk up the steps if you fancy going somewhere.'
};
function checkDiscoveries() {
  const p = player.pos;
  for (const b of world.buildings) {
    if (visitedRoofs.has(b.id)) continue;
    const top = player.support; const onTop = !!top && (top.building === b || top.buildingId === b.id || ['roof', 'chimney', 'wall', 'box', 'pergola', 'pot'].includes(top.kind));
    if (player.grounded && onTop && p.y >= b.h - .15 && Math.abs(p.x - b.x) < b.w / 2 + .3 && Math.abs(p.z - b.z) < b.d / 2 + .3) {
      visitedRoofs.add(b.id); updateCounts(); burst(); audio.discovery();
      const n = visitedRoofs.size;
      toast(n === 1 ? 'First rooftop. Roofs connect most of the town.' : n % 5 === 0 ? `${n} rooftops.` : 'New rooftop.', 'sun', n === 1 ? 3600 : 2200); save(); break;
    }
  }
  for (const park of world.parks) {
    if (!visitedGardens.has(park.id) && p.y < 1.5 && (p.x - park.x) ** 2 + (p.z - park.z) ** 2 < 81) {
      visitedGardens.add(park.id); updateCounts(); audio.discovery(); burst(); toast('A park.', 'leaf', 2600); save(); break;
    }
  }
  for (const place of world.landmarks) {
    if (visitedPlaces.has(place.id)) continue;
    let here;
    if (place.inside) here = p.x > place.inside.minX && p.x < place.inside.maxX && p.z > place.inside.minZ && p.z < place.inside.maxZ && p.y < place.y + 1.5;
    else if (place.kind === 'tower') here = player.grounded && p.y > place.y - .5 && Math.abs(p.x - place.x) < place.radius && Math.abs(p.z - place.z) < place.radius;
    else here = (p.x - place.x) ** 2 + (p.z - place.z) ** 2 < place.radius ** 2 && p.y < 6;
    if (!here) continue;
    visitedPlaces.add(place.id); updateCounts(); burst(); audio.discovery();
    const n = visitedPlaces.size;
    toast(PLACE_LINES[place.kind]?.(place, n) || `You found ${place.name}.`, 'sun', 3200); save(); break;
  }
  const name = districtName(Math.floor((p.x + 36) / 72), Math.floor((p.z + 36) / 72), world.seed);
  if (name !== currentDistrict) {
    const first = !currentDistrict; currentDistrict = name; $('district-name').textContent = name;
    const card = $('location-card'); card.classList.remove('fresh'); void card.offsetWidth; card.classList.add('fresh');
    if (!first && getComputedStyle(card).display === 'none') toast(name, 'leaf', 2000);
  }
}

function updateAtmosphere(dt) {
  const p = player.pos, t = time;
  for (let i = 0; i < leaves.length; i++) {
    const l = leaves[i]; l.x += dt * l.speed; l.z += dt * .15;
    if (l.x - p.x > 35) l.x -= 70; if (l.x - p.x < -35) l.x += 70; if (l.z - p.z > 35) l.z -= 70; if (l.z - p.z < -35) l.z += 70;
    dummy.position.set(l.x, l.y + Math.sin(t * .5 + l.phase) * .6, l.z); dummy.rotation.set(t * .4 + l.phase, t * .3 + l.phase, t * .2); dummy.scale.setScalar(1); dummy.updateMatrix(); leafMesh.setMatrixAt(i, dummy.matrix);
  }
  leafMesh.instanceMatrix.needsUpdate = true;
  for (let i = 0; i < butterflies.length; i++) {
    const b = butterflies[i]; if (b.x - p.x > 30) b.x -= 60; if (b.x - p.x < -30) b.x += 60; if (b.z - p.z > 30) b.z -= 60; if (b.z - p.z < -30) b.z += 60;
    const x = b.x + Math.sin(t * .55 + b.phase) * 1.7, z = b.z + Math.cos(t * .4 + b.phase) * 1.7, y = b.y + Math.sin(t * 1.4 + b.phase) * .35;
    for (let side = 0; side < 2; side++) { dummy.position.set(x + (side ? -.05 : .05), y, z); dummy.rotation.set(Math.PI / 2, Math.sin(t * 13 + b.phase) * (side ? -.8 : .8), t * .2 + b.phase); dummy.scale.set(1, 1, 1); dummy.updateMatrix(); butterflyMesh.setMatrixAt(i * 2 + side, dummy.matrix); }
  }
  butterflyMesh.instanceMatrix.needsUpdate = true;
  let count = 0;
  for (const b of world.buildings) {
    if (visitedRoofs.has(b.id) || (b.x - p.x) ** 2 + (b.z - p.z) ** 2 > 65 ** 2 || count >= 320) continue;
    const y = world.roofHeight(b, b.x, b.z);
    dummy.position.set(b.x, y + 1.25 + Math.sin(t * 1.7 + b.x) * .15, b.z); dummy.rotation.set(0, t * .7, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); sparkMesh.setMatrixAt(count++, dummy.matrix);
  }
  for (let i = sparks.length - 1; i >= 0; i--) {
    const s = sparks[i]; s.life -= dt; if (s.life <= 0) { sparks.splice(i, 1); continue; } s.x += s.vx * dt; s.y += s.vy * dt; s.z += s.vz * dt; s.vy -= dt;
    if (count < 390) { dummy.position.set(s.x, s.y, s.z); dummy.rotation.set(t, t, 0); dummy.scale.setScalar(Math.min(1, s.life) * .3); dummy.updateMatrix(); sparkMesh.setMatrixAt(count++, dummy.matrix); }
  }
  sparkMesh.count = count; sparkMesh.instanceMatrix.needsUpdate = true;
  for (const cloud of clouds) { cloud.position.x += dt * .18; if (cloud.position.x - p.x > 150) cloud.position.x -= 300; if (cloud.position.x - p.x < -150) cloud.position.x += 300; if (cloud.position.z - p.z > 150) cloud.position.z -= 300; if (cloud.position.z - p.z < -150) cloud.position.z += 300; }
}

// A line of speech only shows when the speaker can actually be seen: not through a roof or a wall.
const rayFrom = new THREE.Vector3(), rayDir = new THREE.Vector3();
function speakerVisible(p) {
  rayFrom.copy(camera.position); rayDir.set(p.x, p.y + p.H * .8, p.z).sub(rayFrom);
  const len = rayDir.length(), mx = (rayFrom.x + p.x) / 2, mz = (rayFrom.z + p.z) / 2;
  for (const s of physics.query(mx, mz, len / 2 + 1)) {
    if (s.shape === 'ellipsoid' || s.person || s.auto || (s.shape === 'cylinder') || s.maxY - s.minY < .3) continue;
    if (s.kind !== 'wall' && s.kind !== 'roof' && s.kind !== 'floor') continue;
    if (rayBox(rayFrom, rayDir, s, 0) < .985) return false;
  }
  return true;
}
function updateBubble() {
  const el = $('bubble'), speaker = started && !modal ? people.speaker(player.pos, speakerVisible) : null;
  if (!speaker) { el.classList.remove('show'); return; }
  bubbleVec.set(speaker.x, speaker.y + speaker.H + .22, speaker.z).project(camera);
  if (bubbleVec.z > 1 || Math.abs(bubbleVec.x) > 1.3 || Math.abs(bubbleVec.y) > 1.3) { el.classList.remove('show'); return; }
  const x = clamp((bubbleVec.x + 1) / 2 * innerWidth, 90, innerWidth - 90), y = clamp((1 - bubbleVec.y) / 2 * innerHeight, 52, innerHeight - 40);
  if (el.textContent !== speaker.line) el.textContent = speaker.line;
  el.style.transform = `translate(${x}px,${y}px) translate(-50%,-100%)`; el.classList.add('show');
}

function drawMap() {
  if (!mapCenter) return; const canvas = $('map-canvas'), ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height, scale = MAP_SCALE;
  const px = x => (x - mapCenter.x) * scale + w / 2, pz = z => (z - mapCenter.z) * scale + h / 2;
  ctx.fillStyle = '#dce6c9'; ctx.fillRect(0, 0, w, h);
  for (const c of world.chunks.values()) {
    const x = c.cx * CHUNK, z = c.cz * CHUNK;
    ctx.fillStyle = (c.cx + c.cz) % 2 ? '#d4e1bf' : '#d8e3c4'; ctx.fillRect(px(x - 36), pz(z - 36), 72 * scale, 72 * scale);
    ctx.fillStyle = '#eee9d4';
    for (const s of [-1, 1]) { ctx.fillRect(px(x + s * 32.5 - 3.5), pz(z - 36), 7 * scale, 72 * scale); ctx.fillRect(px(x - 36), pz(z + s * 32.5 - 3.5), 72 * scale, 7 * scale); }
    ctx.fillStyle = '#e7e5cd'; ctx.fillRect(px(x - 1.5), pz(z - 29), 3 * scale, 58 * scale); ctx.fillRect(px(x - 29), pz(z - 1.5), 58 * scale, 3 * scale);
    ctx.fillStyle = '#8fa27b'; ctx.font = '500 12px "DM Sans", sans-serif'; ctx.textAlign = 'center'; ctx.fillText(districtName(c.cx, c.cz, world.seed).toUpperCase(), px(x), pz(z - 27));
  }
  for (const park of world.parks) {
    ctx.fillStyle = '#b7cd98'; ctx.beginPath(); ctx.roundRect(px(park.x - 12), pz(park.z - 12), 24 * scale, 24 * scale, 9); ctx.fill();
    ctx.fillStyle = '#e8e2c7'; ctx.fillRect(px(park.x - 1.5), pz(park.z - 12), 3 * scale, 24 * scale); ctx.fillRect(px(park.x - 12), pz(park.z - 1.5), 24 * scale, 3 * scale);
    ctx.fillStyle = '#94bfb0'; ctx.beginPath(); ctx.ellipse(px(park.x + 4.5), pz(park.z - 4.3), 4 * scale, 3.7 * scale, 0, 0, Math.PI * 2); ctx.fill();
    for (const [x, z] of [[-6, -6], [7, 7], [-7, 6]]) { ctx.fillStyle = '#91ad78'; ctx.beginPath(); ctx.arc(px(park.x + x), pz(park.z + z), 7, 0, Math.PI * 2); ctx.fill(); }
    if (visitedGardens.has(park.id)) { ctx.fillStyle = '#64865c'; ctx.font = '16px sans-serif'; ctx.fillText('✓', px(park.x), pz(park.z + 4)); }
  }
  for (const b of world.buildings) {
    const visited = visitedRoofs.has(b.id); ctx.fillStyle = '#a8b596'; ctx.beginPath(); ctx.roundRect(px(b.x - b.w / 2) + 3, pz(b.z - b.d / 2) + 4, b.w * scale, b.d * scale, 3); ctx.fill();
    ctx.fillStyle = visited ? '#7f9d79' : b.wall; ctx.strokeStyle = visited ? '#5f805d' : '#aab397'; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.roundRect(px(b.x - b.w / 2), pz(b.z - b.d / 2), b.w * scale, b.d * scale, 3); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = visited ? '#a8c29a' : b.roofColor; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(px(b.x - b.w / 2 + 1), pz(b.z)); ctx.lineTo(px(b.x + b.w / 2 - 1), pz(b.z)); ctx.stroke();
    if (visited) { ctx.fillStyle = '#f4f4df'; ctx.font = 'bold 15px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('✓', px(b.x), pz(b.z) + 5); }
    else { ctx.fillStyle = '#c5a15d'; ctx.beginPath(); ctx.arc(px(b.x), pz(b.z), 2.5, 0, Math.PI * 2); ctx.fill(); }
  }
  const ICON = { market: '#d7a048', works: '#8a6a4c', warehouse: '#8a8072', tower: '#5f6b66', playground: '#d9544f', cafe: '#c88f6e', shop: '#6f9a4f', home: '#b48c9c', station: '#4f7f96', allotments: '#8fb04f', airport: '#5f6b66', bridge: '#4f5a56', yard: '#8a6a4c', signalbox: '#8f5f4e', house: '#b48c9c', worksfloor: '#9a6b55', lobby: '#8fb0b8', depotfloor: '#8a9893' };
  for (const l of world.landmarks) {
    const seen = visitedPlaces.has(l.id); ctx.fillStyle = ICON[l.kind] || '#999'; ctx.strokeStyle = '#fffaf0'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(px(l.x), pz(l.z), seen ? 7 : 5.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    if (seen) { ctx.fillStyle = '#fffaf0'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('✓', px(l.x), pz(l.z) + 3.5); }
    if (Math.abs(l.x - mapCenter.x) < 110 && Math.abs(l.z - mapCenter.z) < 70) { ctx.fillStyle = '#5f6b5a'; ctx.font = '600 10px "DM Sans", sans-serif'; ctx.textAlign = 'center'; ctx.fillText(l.name.replace(/^the |^somebody’s /, ''), px(l.x), pz(l.z) + 18); }
  }
  for (const p of people.list) { ctx.fillStyle = p.job ? '#a37c5a' : '#7c8fa6'; ctx.beginPath(); ctx.arc(px(p.x), pz(p.z), 3, 0, Math.PI * 2); ctx.fill(); }
  const x = px(player.pos.x), y = pz(player.pos.z);
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.fill(); ctx.shadowColor = '#6b775333'; ctx.shadowBlur = 8; ctx.fillStyle = '#cb8b50'; ctx.beginPath(); ctx.arc(x, y, 8.5, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
  ctx.save(); ctx.translate(x, y); ctx.rotate(-player.heading); ctx.fillStyle = '#fff9e9'; ctx.beginPath(); ctx.moveTo(0, 6); ctx.lineTo(-4, -3); ctx.lineTo(4, -3); ctx.closePath(); ctx.fill(); ctx.restore();
  const rn = visitedRoofs.size, gn = visitedGardens.size, pn = visitedPlaces.size;
  $('map-seed').textContent = 'Seed ' + world.seedText; $('map-description').textContent = `${currentDistrict || districtName(0, 0, world.seed)} · ${rn} rooftop${rn === 1 ? '' : 's'}, ${gn} garden${gn === 1 ? '' : 's'}, ${pn} place${pn === 1 ? '' : 's'}, ${friendsMade} friend${friendsMade === 1 ? '' : 's'}. Drag to look further.`;
}

// Quietly lower the render resolution on devices that cannot keep up, instead of slowing the cat,
// and step back up once frames have been smooth for a while.
let qualityLevel = 0, smoothTime = 0, qualityToasted = false;
const basePixelRatio = () => Math.min(devicePixelRatio, mobile ? 1.4 : 1.5);
function applyQuality() {
  const ratio = Math.max(.75, basePixelRatio() - .2 * Math.min(qualityLevel, 3));
  if (Math.abs(renderer.getPixelRatio() - ratio) > .01) { renderer.setPixelRatio(ratio); renderer.setSize(innerWidth, innerHeight); }
  const shadows = settings.shadows && qualityLevel < 4;
  if (renderer.shadowMap.enabled !== shadows) { renderer.shadowMap.enabled = shadows; scene.traverse(o => { if (o.material) o.material.needsUpdate = true; }); }
}
function adaptQuality(frameMs) {
  frameAvg += (frameMs - frameAvg) * .05;
  if (frameAvg > 30) { slowTime += frameMs / 1000; smoothTime = 0; }
  else if (frameAvg < 20) { slowTime = 0; smoothTime += frameMs / 1000; }
  else slowTime = Math.max(0, slowTime - frameMs / 2000);
  if (slowTime > 2.5 && qualityLevel < 4) {
    slowTime = 0; smoothTime = 0; qualityLevel++; applyQuality();
    if (!qualityToasted) { qualityToasted = true; toast('Softening the picture to keep the frame rate up.', 'note', 3200); }
  } else if (smoothTime > 8 && qualityLevel > 0) {
    smoothTime = 0; slowTime = 0; qualityLevel--; applyQuality(); frameAvg = 16;
  }
}

function loop(now) {
  requestAnimationFrame(loop); if (document.hidden) { lastTime = now; return; }
  const frameMs = now - (lastTime || now - 16), dt = Math.min(.12, Math.max(.001, frameMs / 1000)); lastTime = now; time += dt;
  if (started) { adaptQuality(frameMs); playTime += dt; }
  pollGamepad(dt);
  if (world.update(player.pos, 1)) fun.sync(); world.animate(time);
  const ride = train.update(dt, player.pos, !!player.support?.train);
  if (player.support?.train && !flight.active) player.pos.z += ride;
  if (started && !modal) simulate(dt); else { player.speed = 0; player.turnRate = 0; player.accel = 0; wallHint = null; }
  if (flight.active) flight.update(dt);
  else if (started && !modal) { const pl = planes.at(player.pos); if (pl) { boardTimer += dt; if (boardTimer > .9) { boardTimer = -999; offerFlight(pl); } } else boardTimer = 0; }
  sky.update(dt, player.pos);
  cat.root.position.copy(player.pos); cat.root.rotation.y = player.heading;
  const groundY = physics.support(player.pos.x, player.pos.z, player.pos.y + .05).y;
  cat.update(dt, time, { speed: player.speed, grounded: player.grounded, climbing: !!player.climbing, resting, vy: player.vy, turnRate: player.turnRate, accel: player.accel, landImpact: player.landImpact, runBlend: player.runBlend }, groundY, settings.reducedMotion);
  people.interactive = started && !modal; people.update(dt, player.pos, player.speed, camera); birds.update(dt, player.pos, player.speed);
  if (started && !modal) fun.update(dt, player, people);
  ducks.update(dt, player.pos, time);
  if (!started && !settings.reducedMotion) cameraYawTarget += dt * .03;
  updateCamera(dt); updateAtmosphere(dt); audio.update(dt); updateBubble();
  ground.position.x = player.pos.x; ground.position.z = player.pos.z;
  sun.position.set(player.pos.x - 35, 60, player.pos.z + 25); sun.target.position.set(player.pos.x, 0, player.pos.z);
  hudTimer += dt;
  if (hudTimer > .25) {
    hudTimer = 0; if (started && !modal) checkDiscoveries(); fun.sync(); ducks.sync(player.pos); planes.sync();
    const showHint = !!wallHint && !player.climbing && !resting && started && !modal && player.grounded;
    $('context-hint').classList.toggle('visible', showHint && !mobile);
    $('touch-climb').classList.toggle('ready', showHint);
    document.body.classList.toggle('sprinting', player.runBlend > .5);
    document.body.classList.toggle('settled', playTime > 14);
    if (modal === 'map-modal' && !mapDrag) drawMap();
  }
  if (resting) { purrTimer += dt; if (purrTimer > 1.7) { purrTimer = 0; audio.purr(); } }
  renderer.render(scene, camera);
}

function syncInstall() {
  const label = installed ? 'Installed' : offlineReady ? 'Offline ready' : 'Loading…';
  $('offline-label').textContent = !navigator.onLine && offlineReady ? 'Playing offline' : label; $('offline-status').classList.toggle('ready', offlineReady);
  $('install-ready').querySelector('span').textContent = offlineReady ? 'All tucked in. This world is ready to play offline.' : 'Getting the offline files ready…';
  // The install button only appears when installing is actually possible, and never once installed.
  const canInstall = !installed && (!!installPrompt || platform.isIOS || platform.isSafari);
  $('install-button').hidden = !canInstall;
  $('install-link').hidden = installed;
  $('install-link').textContent = installPrompt ? 'Install on this device' : 'How to install';
  $('installed-note').hidden = !installed;
  $('install-now-button').firstChild.textContent = installPrompt ? 'Install Whiskerfield ' : installed ? 'Back to my world ' : 'Got it. Thank you ';
  $('install-instructions').hidden = !!installPrompt || installed;
}
async function setupPWA() {
  syncInstall();
  window.addEventListener('online', syncInstall); window.addEventListener('offline', syncInstall);
  if (!('serviceWorker' in navigator) || !window.isSecureContext) { $('offline-label').textContent = 'Online preview'; $('install-ready').querySelector('span').textContent = 'Offline install needs HTTPS or localhost.'; return; }
  try {
    const hadController = !!navigator.serviceWorker.controller;
    swRegistration = await navigator.serviceWorker.register('./sw.js', { scope: './' });
    swRegistration.addEventListener('updatefound', () => {
      const worker = swRegistration.installing;
      worker?.addEventListener('statechange', () => { if (worker.state === 'installed' && hadController) { updateReady = true; if (started) toast('Update ready. Tap to reload.', 'update', 9000); else location.reload(); } });
    });
    await navigator.serviceWorker.ready; offlineReady = true; syncInstall();
    if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});
    navigator.serviceWorker.addEventListener('message', e => { if (e.data?.type === 'OFFLINE_READY') { offlineReady = true; syncInstall(); } });
  } catch (err) { console.warn('Offline cache unavailable:', err); $('offline-label').textContent = 'Online preview'; $('install-ready').querySelector('span').textContent = 'Offline files couldn’t be saved. Reconnect and reload to try again.'; }
}

try { init(); setupPWA(); } catch (err) { console.error(err); $('loading').hidden = true; $('error-screen').hidden = false; $('error-message').textContent = 'This little world needs WebGL. Try an up-to-date Chrome, Edge, Firefox, or Safari browser with hardware acceleration enabled. ' + err.message; }
