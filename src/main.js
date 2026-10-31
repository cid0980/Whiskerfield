import * as THREE from 'three';
import { World, CHUNK, hashString, random, districtName, COUNTRIES, COUNTRY_IDS } from './world.js';
import { Train } from './train.js';
import { Lifts } from './lifts.js';
import { Vehicles } from './vehicles.js';
import { DayCycle } from './daynight.js';
import { Planes, Flight, Sky, PLANE } from './plane.js';
import { Cat } from './cat.js';
import { NeighborhoodAudio } from './audio.js';
import { CAT, PhysicsWorld, createPlayer, stepPlayer, surfaceHeight } from './physics.js';
import { People } from './npc.js';
import { Fun, HATS, WARDROBE, SLOTS, SLOT_NAMES, DEFAULT_OUTFIT, SHINY_KINDS, findItem, buildItem, lockReason } from './fun.js';
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
let savedKnocks = Number.isFinite(saved?.knocks) ? saved.knocks : 0;
// The outfit: one item per slot. Older saves only had a hat.
const cleanOutfit = o => { const out = { ...DEFAULT_OUTFIT }; for (const slot of SLOTS) if (typeof o?.[slot] === 'string' && findItem(slot, o[slot])) out[slot] = o[slot]; return out; };
const outfit = cleanOutfit(saved?.outfit && typeof saved.outfit === 'object' ? saved.outfit : { hat: saved?.hat });
let hatId = outfit.hat;
// Shinies found in other countries of the same town used to live in their own journeys; fold them in.
for (const k of Object.keys(localStorage)) if (saved?.seed && k.startsWith(SAVE_KEY + ':' + saved.seed + '~')) { try { const j = JSON.parse(localStorage.getItem(k)); for (const v of j?.shinies || []) if (typeof v === 'string' && !v.includes('/')) savedShinies.push(k.slice((SAVE_KEY + ':' + saved.seed + '~').length) + '/' + v); } catch {} }
let fun = null, ducks = null, train = null, lifts = null, vehicles = null, day = null, hemi = null, planes = null, sky = null, boardTimer = 0, boardingPlane = null;
const flight = new Flight();
let countryId = COUNTRIES[saved?.country] ? saved.country : 'whiskerfield';
const journeyKey = (seed, country) => country && country !== 'whiskerfield' ? seed + '~' + country : seed;
const audio = new NeighborhoodAudio(); audio.enabled = settings.audio; audio.volume = settings.volume;
let world, physics, people, cat, renderer, scene, camera, sun, ground, leafMesh, butterflyMesh, sparkMesh, clouds = [], birds;
let started = false, resting = false, modal = null, previousFocus = null, ready = false, storageWarning = false;
let cameraYaw = Number.isFinite(saved?.cameraYaw) ? saved.cameraYaw : .56, cameraPitch = .34, cameraDistance = mobile ? 5 : 5.4;
let cameraYawTarget = cameraYaw, cameraPitchTarget = cameraPitch, cameraDistanceTarget = cameraDistance, cameraInputTimer = 0;
// One orbit rig for drag, touch and gamepad. Pitch runs from looking up at the sky to looking down
// at the cat's paws; drag and stick are scaled by the same sensitivity setting, so the camera feels
// the same whatever is in your hands.
const PITCH_MIN = -1.32, PITCH_MAX = 1.4, DIST_MIN = 2.4, DIST_MAX = 14;
const sensitivity = () => settings.sensitivity / .7;
function orbit(yaw, pitch, timeout = 1.6) {
  if (!yaw && !pitch) return;
  cameraYawTarget -= yaw; cameraPitchTarget = clamp(cameraPitchTarget + pitch, PITCH_MIN, PITCH_MAX);
  cameraInputTimer = timeout;
}
const orbitDrag = (dx, dy) => orbit(dx * .0034 * sensitivity(), dy * .0023 * sensitivity());
const orbitStick = (rx, ry, dt) => orbit(rx * 2.6 * dt * sensitivity(), ry * 1.8 * dt * sensitivity());
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
  try { localStorage.setItem(SAVE_KEY, JSON.stringify({ version: 1, seed: world.seedText, country: countryId, position: { x: player.pos.x, y: player.pos.y, z: player.pos.z }, heading: player.heading, cameraYaw, roofs: [...visitedRoofs].slice(-10000), gardens: [...visitedGardens].slice(-10000), places: [...visitedPlaces].slice(-10000), friends: friendsMade, shinies: [...fun.collected].slice(-20000), knocks: fun.knocks, hat: outfit.hat, outfit, settings, started, hour: day ? day.hour : undefined })); }
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
  for (const b of document.querySelectorAll('#time-options button')) b.classList.toggle('on', (settings.time || 'cycle') === b.dataset.time);
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
  if (id === 'wardrobe-modal') { syncWardrobe(); $('hat-button').classList.remove('new'); wardrobeShow(true); }
  requestAnimationFrame(() => $(id).querySelector('button')?.focus({ preventScroll: true }));
}
function closeModal() {
  if (!modal) return; if (modal === 'wardrobe-modal') wardrobeShow(false); modal = null; $('modal-backdrop').hidden = true; document.querySelectorAll('.modal').forEach(el => el.hidden = true); clearInput();
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
  camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, .06, 350);
  hemi = new THREE.HemisphereLight('#dfe6d8', '#7e8a68', 1.35); scene.add(hemi);
  sun = new THREE.DirectionalLight('#ffe6c0', 2.2); sun.position.set(-35, 60, 25); sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048); sun.shadow.camera.left = -36; sun.shadow.camera.right = 36; sun.shadow.camera.top = 36; sun.shadow.camera.bottom = -36; sun.shadow.camera.near = 1; sun.shadow.camera.far = 150; sun.shadow.bias = -.0003; sun.shadow.normalBias = .03; sun.shadow.radius = 3;
  scene.add(sun); scene.add(sun.target); flight.attach(scene);
  day = new DayCycle(scene, renderer, sun, hemi); day.setMode(settings.time || 'cycle'); if (typeof saved?.hour === 'number' && (settings.time || 'cycle') === 'cycle') day.hour = saved.hour;
  const groundTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); x.fillStyle = '#ffffff'; x.fillRect(0, 0, 128, 128); for (let i = 0; i < 2400; i++) { x.fillStyle = `rgba(60,75,45,${Math.random() * .1})`; x.fillRect(Math.random() * 128, Math.random() * 128, 1 + Math.random() * 2, 1); } const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(180, 180); return t; })();
  ground = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), new THREE.MeshStandardMaterial({ color: '#93a86f', roughness: 1, map: groundTex })); ground.rotation.x = -Math.PI / 2; ground.position.y = -.45; ground.receiveShadow = true; scene.add(ground);
  createWorld(urlSeed || saved?.seed || defaultSeed(), countryId);
  cat = new Cat(scene, CAT.scale); cat.root.position.copy(player.pos); cat.root.rotation.y = player.heading; applyOutfit();
  createAtmosphere(); createUI(); syncSettings(); updateCounts();
  cameraTarget.copy(player.pos); updateCamera(1, true);
  $('seed-label').textContent = 'Seed: ' + world.seedText;
  if (saved?.started) { $('start-button').firstChild.textContent = 'Wander on '; $('welcome-note').lastChild.textContent = ' Just as you left it. Ready when you are.'; }
  ready = true; renderer.render(scene, camera);
  requestAnimationFrame(() => { requestAnimationFrame(() => { $('loading').classList.add('done'); setTimeout(() => $('loading').hidden = true, 700); }); });
  requestAnimationFrame(loop);
  if (params.get('test') === '1') window.__whiskerfield = {
    player, get world() { return world; }, get people() { return people; }, get birds() { return birds; }, get physics() { return physics; }, cat, renderer, camera, input, hold, keys, start, save, adapt: adaptQuality, getQuality: () => ({ level: qualityLevel, pixelRatio: renderer.getPixelRatio(), shadows: renderer.shadowMap.enabled }), mapCenter: () => mapCenter, step: dt => { simulate(dt); people.interactive = started && !modal; people.update(dt, player.pos, player.speed, camera); birds.update(dt, player.pos, player.speed); fun.sync(); fun.update(dt, player, people); ducks.sync(player.pos); ducks.update(dt, player.pos, time); const ride = train.update(dt, player.pos, !!player.support?.train); if (player.support?.train && !flight.active) player.pos.z += ride; lifts.sync(); const lifted = lifts.update(dt, player.pos, player.support); if (lifted) player.pos.y += lifted; vehicles.sync(); carry(vehicles.update(dt, player.pos, player.support)); if (flight.active) { flight.update(dt); if (flight.active && flight.plane) { player.pos.copy(flight.seat); player.heading = flight.plane.group.rotation.y + Math.PI / 2; } } else { const pl = planes.at(player.pos); if (pl) { boardTimer += dt; if (boardTimer > .9) { boardTimer = -999; offerFlight(pl); } } else boardTimer = 0; } planes.sync(); time += dt; }, get fun() { return fun; }, get ducks() { return ducks; }, get train() { return train; }, get planes() { return planes; }, get vehicles() { return vehicles; }, flight, get country() { return countryId; }, travel, offerFlight, board: id => beginFlight(id), wearHat, hats: HATS, discover: checkDiscoveries, platformCalls: platform.calls,
    getState: () => ({ ready, started, resting, modal, position: player.pos.toArray(), heading: player.heading, speed: player.speed, grounded: player.grounded, climbing: !!player.climbing, support: player.support?.kind || null, roofs: visitedRoofs.size, gardens: visitedGardens.size, places: visitedPlaces.size, friends: friendsMade, shinies: fun ? fun.found : 0, knocks: fun ? fun.knocks : 0, hat: outfit.hat, outfit: { ...outfit }, counts: fun ? fun.counts() : {}, chunks: world.chunks.size, colliders: world.colliders.length, npcs: people.list.length, greetings: people.greetings, drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles, offlineReady, installed, installButtonHidden: $('install-button').hidden, fullscreen: platform.isFullscreen(), cameraDistance, indoors: camIndoors, cameraPitch, cameraYaw }),
    wear, outfit, wardrobe, get lifts() { return lifts; }, get day() { return day; }, teleport: (x, y, z) => { player.pos.set(x, y, z); player.vx = player.vz = player.vy = 0; player.climbing = null; player.grounded = false; world.update(player.pos, 25); },
    // What the camera is doing right now: is it indoors, is the cat actually in view (nothing solid
    // between the eye and the cat, and the eye inside nothing), and how far away is it.
    cameraInfo: () => {
      const eye = camera.position, head = player.pos.clone(); head.y += .3;
      const blocked = physics.segmentHit(eye, head, .06, s => cameraOccluder(s, head.y)).t;
      let inside = null;
      for (const s of physics.query(eye.x, eye.z, .3)) {
        if (s.sensor || s.person || s.shape === 'ellipsoid') continue;
        if (eye.x > s.minX && eye.x < s.maxX && eye.z > s.minZ && eye.z < s.maxZ && eye.y > s.minY && eye.y < s.maxY) { inside = s.kind; break; }
      }
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      return { indoors: camIndoors, blocked, inside, distance: eye.distanceTo(player.pos), lookUp: +Math.asin(clamp(fwd.y, -1, 1)).toFixed(2) };
    },
    // Settle the camera the way the render loop does, without waiting for frames (software WebGL is slow).
    settle: (n = 90, dt = 1 / 60) => { for (let i = 0; i < n; i++) updateCamera(dt); },
    drawMinimap: () => drawMinimap(),
    setCamera: (yaw, pitch = cameraPitch, distance = cameraDistance) => { cameraYaw = cameraYawTarget = yaw; cameraPitch = cameraPitchTarget = clamp(pitch, PITCH_MIN, PITCH_MAX); cameraDistance = cameraDistanceTarget = distance; cameraInputTimer = 1.6; },
    getSettings: () => ({ ...settings })
  };
}

function applyCountryLook() {
  const c = COUNTRIES[countryId];
  scene.fog.color.set(c.sky); ground.material.color.set(c.ground); if (day) day.setDaySky(c.sky);
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
  vehicles = new Vehicles(scene, world, physics); vehicles.sync(); vehicles.onEvent = vehicleEvent;
  lifts = new Lifts(scene, world, physics); lifts.sync(); lifts.onChime = d => audio.chime(d); lifts.onHum = d => audio.hum(d);
  if (!sky) sky = new Sky(scene);
  fun = new Fun(scene, world, physics, { collected: savedShinies, knocks: savedKnocks, prefix: countryId === 'whiskerfield' ? '' : countryId + '/' }); fun.sync();
  fun.onShiny = shiny => {
    const n = fun.found, counts = fun.counts(); updateCounts(); audio.shiny(); burst(shiny.x, shiny.y, shiny.z); markDirty();
    const unlocked = [];
    for (const slot of SLOTS) for (const h of WARDROBE[slot]) { if (h.id === 'none' || !h.need && !h.kind) continue; if (h.kind ? h.kind === shiny.kind.kind && counts[h.kind] === 1 : h.need === n) unlocked.push(h); }
    const names = unlocked.map(h => h.name.toLowerCase());
    toast(unlocked.length ? `${shiny.kind.line} ${names.length > 1 ? `The ${names.slice(0, -1).join(', ')} and the ${names.at(-1)} are` : `The ${names[0]} is`} yours — press H.` : n === 1 ? `${shiny.kind.line} A cat could start a collection.` : shiny.kind.line, 'sun', unlocked.length ? 4600 : 2600);
    if (unlocked.length) $('hat-button').classList.add('new');
    if (n % 5 === 0 || unlocked.length) save();
  };
  fun.onKnock = (prop, sound, soft) => {
    audio.clatter(sound, soft); if (soft) return; markDirty();
    if (fun.knocks === 1) toast('Oops. It was in the way.', 'leaf', 2600);
    else if (fun.knocks === 10) toast('Ten things knocked over. The street has noticed.', 'leaf', 3000);
  };
  if (cat) applyOutfit();
}
// ---- wardrobe -----------------------------------------------------------------------------------
function applyOutfit(target = cat) { if (!target) return; for (const slot of SLOTS) target.setItem(slot, outfit[slot], buildItem(slot, outfit[slot])); }
function wear(slot, id, silent = false) {
  const item = findItem(slot, id) || WARDROBE[slot]?.[0]; if (!item) return false;
  const why = fun ? lockReason(item, fun.found, fun.counts()) : null;
  if (why) { if (!silent) toast(why.kind ? `The ${item.name.toLowerCase()} needs ${why.name} first. Keep looking.` : `Find ${why.need} more ${why.need === 1 ? 'shiny' : 'shinies'} for the ${item.name.toLowerCase()}.`, 'note', 2600); return false; }
  outfit[slot] = item.id; hatId = outfit.hat; cat.setItem(slot, item.id, buildItem(slot, item.id)); if (wardrobe.cat) wardrobe.cat.setItem(slot, item.id, buildItem(slot, item.id));
  markDirty(); if (!silent) { save(); syncWardrobe(); audio.chirp(); }
  return true;
}
const wearHat = (id, silent = false) => wear('hat', id, silent);
const wardrobe = { tab: 'hat', renderer: null, scene: null, camera: null, cat: null, yaw: .5, yawTarget: .5, drag: null, open: false, time: 0, bob: 0 };
function syncWardrobe() {
  const list = $('hat-list'), tabs = $('wardrobe-tabs'); if (!list || !tabs) return;
  const found = fun ? fun.found : 0, counts = fun ? fun.counts() : {}; $('hat-found').textContent = found;
  tabs.textContent = '';
  for (const slot of [...SLOTS, 'collection']) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'tab' + (wardrobe.tab === slot ? ' active' : ''); b.dataset.tab = slot; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', wardrobe.tab === slot ? 'true' : 'false');
    b.textContent = slot === 'collection' ? 'Collection' : SLOT_NAMES[slot];
    if (slot !== 'collection' && WARDROBE[slot].some(h => !lockReason(h, found, counts) && h.id !== outfit[slot] && (h.need || h.kind))) b.classList.add('has-new');
    b.addEventListener('click', () => { wardrobe.tab = slot; syncWardrobe(); });
    tabs.appendChild(b);
  }
  list.textContent = '';
  if (wardrobe.tab === 'collection') {
    list.classList.add('collection');
    for (const k of SHINY_KINDS) {
      const card = document.createElement('div'); card.className = 'hat-card collect' + (counts[k.kind] ? '' : ' locked');
      card.innerHTML = `<span class="swatch"></span><strong></strong><small></small><em></em>`;
      card.querySelector('.swatch').style.background = k.color; card.querySelector('strong').textContent = k.name.replace(/^an? /, '').replace(/^\w/, c => c.toUpperCase());
      card.querySelector('small').textContent = counts[k.kind] ? k.line : 'Not found yet. Try rooftops and ledges.'; card.querySelector('em').textContent = counts[k.kind] ? `× ${counts[k.kind]}` : '?';
      list.appendChild(card);
    }
    const tally = document.createElement('div'); tally.className = 'hat-card tally'; tally.innerHTML = `<strong>${found} shinies · ${fun ? fun.knocks : 0} things knocked over</strong><small>Shinies count across every country you have flown to. Things you wear can all be worn at once.</small>`; list.appendChild(tally);
    return;
  }
  list.classList.remove('collection');
  for (const h of WARDROBE[wardrobe.tab]) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'hat-card'; b.dataset.hat = h.id; b.dataset.slot = wardrobe.tab;
    const why = lockReason(h, found, counts), wearing = outfit[wardrobe.tab] === h.id;
    b.classList.toggle('locked', !!why); b.classList.toggle('wearing', wearing); b.setAttribute('aria-pressed', wearing ? 'true' : 'false');
    b.innerHTML = `<strong></strong><small></small><em></em>`;
    b.querySelector('strong').textContent = h.name; b.querySelector('small').textContent = h.blurb;
    b.querySelector('em').textContent = wearing ? 'Wearing' : why ? (why.kind ? `needs ${why.name}` : `${h.need} shinies`) : h.need || h.kind ? 'Found' : '';
    b.addEventListener('click', () => { if (wear(wardrobe.tab, h.id)) syncWardrobe(); });
    list.appendChild(b);
  }
}
// A second little scene with its own cat, so you can see the outfit from every side.
function wardrobeShow(on) {
  wardrobe.open = on; if (!on) return;
  const canvas = $('wardrobe-canvas'); if (!canvas) return;
  if (!wardrobe.renderer) {
    try { wardrobe.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' }); } catch { return; }
    wardrobe.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); wardrobe.renderer.outputColorSpace = THREE.SRGBColorSpace;
    wardrobe.scene = new THREE.Scene();
    wardrobe.scene.add(new THREE.HemisphereLight('#fff6e4', '#b7a98a', 1.4));
    const key = new THREE.DirectionalLight('#fff1d6', 1.6); key.position.set(2, 4, 3); wardrobe.scene.add(key);
    const rim = new THREE.DirectionalLight('#cfe3ff', .8); rim.position.set(-3, 2, -2); wardrobe.scene.add(rim);
    wardrobe.camera = new THREE.PerspectiveCamera(32, 1, .1, 50); wardrobe.camera.position.set(0, 1.0, 4.4); wardrobe.camera.lookAt(0, .62, 0);
    wardrobe.cat = new Cat(wardrobe.scene, 1); wardrobe.cat.shadow.material.opacity = .18;
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.3, 40), new THREE.MeshStandardMaterial({ color: '#e7dcc3', roughness: 1 })); disc.rotation.x = -Math.PI / 2; disc.position.y = -.005; wardrobe.scene.add(disc);
    const down = e => { wardrobe.drag = { x: e.clientX, yaw: wardrobe.yawTarget }; canvas.setPointerCapture?.(e.pointerId); };
    const move = e => { if (wardrobe.drag) wardrobe.yawTarget = wardrobe.drag.yaw + (e.clientX - wardrobe.drag.x) * .012; };
    const up = () => { wardrobe.drag = null; };
    canvas.addEventListener('pointerdown', down); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  }
  applyOutfit(wardrobe.cat); wardrobe.yawTarget = .5; wardrobe.yaw = .5;
}
function renderWardrobe(dt) {
  const w = wardrobe; if (!w.open || !w.renderer) return;
  const canvas = w.renderer.domElement, size = Math.max(120, Math.min(canvas.clientWidth, canvas.clientHeight) || 260);
  if (canvas.width !== Math.round(size * w.renderer.getPixelRatio())) { w.renderer.setSize(size, size, false); w.camera.aspect = 1; w.camera.updateProjectionMatrix(); }
  w.time += dt; if (!w.drag) w.yawTarget += dt * .25; w.yaw = THREE.MathUtils.damp(w.yaw, w.yawTarget, 10, dt);
  w.cat.root.rotation.y = w.yaw; w.cat.update(dt, w.time, { speed: 0, grounded: true, resting: false }, 0, settings.reducedMotion);
  w.renderer.render(w.scene, w.camera);
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
  $('minimap').addEventListener('click', () => { mapCenter = { x: player.pos.x, z: player.pos.z }; openModal('map-modal'); });
  $('hat-button').addEventListener('click', () => openModal('wardrobe-modal'));
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
  for (const b of document.querySelectorAll('#time-options button')) b.addEventListener('click', () => { settings.time = b.dataset.time; day.setMode(settings.time); syncSettings(); save(); });
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
    if (e.code === 'KeyH' && !e.repeat) { openModal('wardrobe-modal'); return; }
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
    if (pointers.size === 2) { const a = [...pointers.values()], d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); cameraDistanceTarget = clamp(cameraDistanceTarget - (d - lastPinch) * .012, DIST_MIN, mobile ? 9 : DIST_MAX); lastPinch = d; cameraInputTimer = 1.6; }
    else orbitDrag(dx, dy);
  });
  const release = e => pointers.delete(e.pointerId); canvas.addEventListener('pointerup', release); canvas.addEventListener('pointercancel', release); canvas.addEventListener('lostpointercapture', release);
  canvas.addEventListener('wheel', e => { e.preventDefault(); if (!modal) { cameraDistanceTarget = clamp(cameraDistanceTarget + e.deltaY * .006, DIST_MIN, DIST_MAX); cameraInputTimer = 1.6; } }, { passive: false });
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
  closeModal(); resting = false; clearInput(); audio.jet(); document.body.classList.add('flying');
  flight.begin(plane, id); toast(`Doors closing. This is the flight to ${COUNTRIES[id].name}.`, 'sun', 3000);
  return true;
}
flight.onFade = v => { const f = $('fade'); f.style.opacity = v; f.hidden = v <= 0; };
$('skip-flight').addEventListener('click', () => { flight.skip(); });
flight.onTravel = id => { const airport = travel(id); planes.sync(); const np = planes.list.get(airport.id); if (np) { np.flying = true; np.updateSolids(false); np.setDoor(0); flight.plane = np; } return airport; };
flight.onArrive = airport => {
  // The cat stays in its seat; the door is open, the steps are down, and the rest is up to it.
  player.pos.copy(flight.seat); player.vx = player.vz = player.vy = 0; player.climbing = null; player.grounded = true; player.heading = Math.PI / 2;
  cat.root.position.copy(player.pos); cameraYaw = cameraYawTarget = -.3; cameraPitch = cameraPitchTarget = .42; cameraDistance = cameraDistanceTarget = 2.6; cameraTarget.copy(player.pos); boardTimer = -999;
  toast(COUNTRIES[countryId].line, 'sun', 4200); audio.discovery(); save();
};
flight.onPhase = (phase) => {
  document.body.classList.toggle('flying', flight.active);
  const name = COUNTRIES[flight.to]?.name || '';
  const lines = { taxi: 'Taxiing out. Seat belts on, tails in.', roll: 'Take-off.', climb: 'Climbing. Look out of the window.', cruise: 'Cruising above the clouds.', descend: `Descending into ${name}.`, taxiIn: 'Taxiing to the stand.', stand: `Doors open. Welcome to ${name}.` };
  if (lines[phase]) toast(lines[phase], phase === 'stand' ? 'sun' : 'note', 2600);
  if (phase === 'climb' || phase === 'descend') audio.jet();
};
// Swap the whole town for the destination country's, keeping the cat, the hat, and the settings.
function travel(id) {
  stashJourney({ version: 1, seed: world.seedText, country: countryId, position: { x: player.pos.x, y: player.pos.y, z: player.pos.z }, heading: player.heading, cameraYaw, roofs: [...visitedRoofs].slice(-10000), gardens: [...visitedGardens].slice(-10000), places: [...visitedPlaces].slice(-10000), friends: friendsMade, shinies: [...fun.collected], knocks: fun.knocks, hat: hatId, started });
  const seed = world.seedText;
  people.dispose(); birds.dispose(); ducks.dispose(); train.dispose(); planes.dispose(); lifts.dispose(); vehicles.dispose(); for (const [, t] of fun.tracked) scene.remove(t.group); world.dispose();
  const prior = loadJourney(seed, id);
  // Shinies and knock-overs are the cat's, not the town's: they come along. Roofs, gardens and friends belong to the place.
  visitedRoofs.clear(); visitedGardens.clear(); visitedPlaces.clear(); friendsMade = 0; savedShinies.length = 0; savedShinies.push(...fun.collected); savedKnocks = fun.knocks;
  if (prior) { for (const v of prior.roofs || []) visitedRoofs.add(v); for (const v of prior.gardens || []) visitedGardens.add(v); for (const v of prior.places || []) visitedPlaces.add(v); friendsMade = prior.friends || 0; }
  // The nearest airport to the origin of every country sits at chunk (2, 0); land there.
  player.pos.set(2 * CHUNK + 2.1, .3, 9.9); player.vx = player.vz = player.vy = 0;
  createWorld(seed, id); updateCounts(); currentDistrict = '';
  const airport = world.airports.reduce((a, b) => !a || Math.hypot(b.x - player.pos.x, b.z - player.pos.z) < Math.hypot(a.x - player.pos.x, a.z - player.pos.z) ? b : a, null);
  visitedPlaces.add(airport.id); save();
  return airport;
}

function newWorld() {
  stashJourney({ version: 1, seed: world.seedText, country: countryId, position: { x: player.pos.x, y: player.pos.y, z: player.pos.z }, heading: player.heading, cameraYaw, roofs: [...visitedRoofs].slice(-10000), gardens: [...visitedGardens].slice(-10000), places: [...visitedPlaces].slice(-10000), friends: friendsMade, shinies: [...fun.collected], knocks: fun.knocks, hat: hatId, started });
  people.dispose(); birds.dispose(); ducks.dispose(); train.dispose(); planes.dispose(); lifts.dispose(); vehicles.dispose(); for (const [, t] of fun.tracked) scene.remove(t.group); world.dispose(); visitedRoofs.clear(); visitedGardens.clear(); visitedPlaces.clear(); friendsMade = 0; savedShinies.length = 0; savedKnocks = 0; Object.assign(outfit, DEFAULT_OUTFIT); hatId = 'none';
  player.pos.set(1.1, 0, 7.1); player.vx = player.vz = player.vy = 0; player.climbing = null; player.grounded = true; player.heading = .55; player.landImpact = 0; player.runBlend = 0;
  cameraYaw = cameraYawTarget = .56; cameraPitch = cameraPitchTarget = .34; cameraDistance = cameraDistanceTarget = mobile ? 5 : 5.4; resting = false; saved = null;
  createWorld(defaultSeed(), 'whiskerfield'); updateCounts(); closeModal(); save();
  document.body.classList.remove('resting'); $('rest-button').setAttribute('aria-pressed', 'false');
  toast('New town. Same cat.', 'leaf');
}

// Fixed-rate physics (90 Hz substeps) so a slow phone and a fast monitor move the cat identically.
// Whatever the cat stands on that moves, the cat moves with.
function carry(c) { if (!c || !c.vehicle) return; player.pos.x += c.dx; player.pos.y += c.dy; player.pos.z += c.dz; if (c.vehicle.kind === 'balloon' && c.vehicle.state !== 'moored' && c.vehicle.state !== 'landed') { player.vy = Math.min(player.vy, 0); } }
function vehicleEvent(kind, v) {
  const lines = {
    'balloon-up': ['Casting off. Hold on to the basket.', 'sun'], 'balloon-drift': ['Up with the wind now. It goes where it likes.', 'note'], 'balloon-down': ['Coming down. Let’s see where.', 'note'], 'balloon-landed': ['Landed. The balloon will find its own way home.', 'sun'],
    'boat-go': ['Under way. The boat keeps going until you point it somewhere else, or meet the shore.', 'note'], 'boat-shore': ['The shore. Step off, or point back out to the water.', 'note'],
  };
  const l = lines[kind]; if (l) toast(l[0], l[1], 3600);
  if (kind === 'balloon-up' || kind === 'boat-go') { audio.chime?.(0); save(); }
}
function simulate(dt) {
  if (flight.active) { player.speed = 0; return; }
  const ix = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0) + joyX + gamepadMoveX + hold.x;
  const iz = (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0) - (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) + joyY + gamepadMoveY + hold.y;
  if (hold.jump) { jumpQueued = true; hold.jump = false; }
  const amount = Math.hypot(ix, iz);
  if (amount > .15 && resting) { resting = false; document.body.classList.remove('resting'); $('rest-button').setAttribute('aria-pressed', 'false'); }
  // On a boat, the stick points the boat (unless it points at dry land, when the cat just walks).
  const steering = vehicles.control(player.support, ix, iz, cameraYaw);
  input.x = steering ? 0 : ix; input.y = steering ? 0 : iz; input.yaw = cameraYaw;
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
  orbitStick(rx, ry, dt);
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
// ---- the camera ------------------------------------------------------------------------------
// One orbit rig for the whole game. The eye is placed on a sphere around the cat, then a single
// swept-sphere test against *every* nearby shape (boxes, cylinders, pitched roofs, carriages,
// cabins, floors above) pulls it in until nothing is between it and the cat. Indoors the rig
// shortens up and looks slightly higher, so a wall behind the cat never hides it; outside it
// relaxes back out slowly. Looking up is a real thing here: pitch runs to -1.32, and when the eye
// is lifted off the ground to keep it out of the grass, the look-at point rises with it.
const CAM = { radius: .15, min: 1.15, interior: 3.4, ceiling: 6 };
const camEye = new THREE.Vector3(), camRay = new THREE.Vector3(), camDir = new THREE.Vector3(), camLook = new THREE.Vector3(), camLast = new THREE.Vector3(), camDelta = new THREE.Vector3();
let camIndoors = false;

// Is this pitched roof over the cat's head? Then it is that room's ceiling, not scenery to be seen
// over. (It is never a *wall*: a roof solid is "solid below the tiles", so a swept sphere inside the
// house would start already buried in it and jam the eye against the cat. It limits the eye's
// height instead — see `headroomAbove` below and the ceiling clamp at the end of updateCamera.)
function roofOverCat(s) {
  return surfaceHeight(s, player.pos.x, player.pos.z) > player.pos.y + .4;
}
// What may hide the cat from the eye. Low, walk-over things (kerbs, benches, fountain rims) are
// lifted over further down instead of yanking the camera in; foliage, people and thin posts never
// block. Anything tall blocks, and so does a surface overhead — a ceiling, an awning, the deck of
// a footbridge, the floor of the storey above.
function cameraOccluder(s, eyeY) {
  if (s.sensor || s.person || s.shape === 'ellipsoid' || s.shape === 'roof') return false;
  if (s.shape === 'cylinder' && s.r < .16) return false;
  if (s.maxY - s.minY >= .7) return true;
  return s.minY > eyeY + .06;
}

function updateCamera(dt, instant = false) {
  if (hold.camera) { camera.position.set(...hold.camera.pos); camera.lookAt(...hold.camera.at); return; }
  if (flight.active && flight.camPos) { camera.position.copy(flight.cam.pos); camera.lookAt(flight.cam.at); return; }
  cameraYaw = THREE.MathUtils.damp(cameraYaw, cameraYawTarget, 12, dt);
  cameraPitch = THREE.MathUtils.damp(cameraPitch, cameraPitchTarget, 10, dt);
  cameraDistance = THREE.MathUtils.damp(cameraDistance, cameraDistanceTarget, 6, dt);
  cameraInputTimer = Math.max(0, cameraInputTimer - dt);
  const isWelcome = !started, narrow = innerWidth < 700 || innerWidth < innerHeight;
  const rightX = Math.cos(cameraYaw), rightZ = -Math.sin(cameraYaw);
  // What the camera orbits around: the cat, with a small lead from its own motion.
  const desiredTarget = tempVec.copy(player.pos);
  desiredTarget.y += isWelcome ? .9 : .38 + (player.climbing ? .25 : 0);
  if (!isWelcome) { desiredTarget.x += player.vx * .08; desiredTarget.z += player.vz * .08; desiredTarget.y += clamp(player.vy, -4, 4) * .02; }
  if (isWelcome) { const offset = narrow ? 0 : -3.4; desiredTarget.x += rightX * offset; desiredTarget.z += rightZ * offset; }
  // Riding something that moves: the cat has already been carried this frame, so follow the whole
  // of that movement before smoothing. A boat, train, lift or balloon then never drags the view.
  const riding = !isWelcome && !!player.support && !!(player.support.vehicle || player.support.train || player.support.lift || player.support.plane);
  if (instant) { cameraTarget.copy(desiredTarget); camLast.copy(player.pos); }
  else {
    camDelta.copy(player.pos).sub(camLast);
    if (riding && camDelta.lengthSq() < 4) cameraTarget.add(camDelta);
    cameraTarget.lerp(desiredTarget, 1 - Math.exp(-(riding ? 30 : 10) * dt));
  }
  camLast.copy(player.pos);
  const pitch = isWelcome ? .3 : cameraPitch;
  let distance = isWelcome ? (narrow ? 9 : 11) : cameraDistance * (1 + player.runBlend * .14);
  // Indoors: a ceiling overhead means a room, a shop, a carriage or a cabin, where a long lens is
  // just a wall. It is not a height test — a café's ceiling is 3.55 m up and a hall's is higher —
  // only "is there a roof over the cat at all" within a couple of storeys.
  const headroom = isWelcome ? Infinity : physics.headroomAbove(player.pos.x, player.pos.z, player.pos.y, .35, true);
  camIndoors = headroom < CAM.ceiling;
  if (camIndoors) {
    // Shorten only as much as the ceiling demands: a long carriage still gives a long view down
    // the aisle, a cabin or a small room gives a short one. The cast below trims whatever is left.
    const vertical = Math.max(.9, headroom - .42) / Math.max(.12, Math.abs(Math.sin(pitch)));
    distance = Math.min(distance, Math.max(1.9, Math.min(CAM.interior, vertical)));
  }
  // 1. The swept sphere: everything solid between the cat and where the eye wants to be. The
  // sweep radius is a little smaller than the cat, so a cat pressed against a wall still has one
  // clear direction (straight out from it) to look from.
  const cast = (yaw, p) => {
    camDir.set(Math.sin(yaw) * Math.cos(p), Math.sin(p), Math.cos(yaw) * Math.cos(p));
    camEye.copy(cameraTarget).addScaledVector(camDir, distance);
    const hit = physics.segmentHit(cameraTarget, camEye, CAM.radius, s => cameraOccluder(s, cameraTarget.y));
    const t = hit.t < 1 ? Math.max(0, hit.t - .03 / Math.max(1, distance)) : 1;
    return { yaw, pitch: p, t, dist: distance * t };
  };
  let shot = cast(cameraYaw, pitch), needY = -Infinity;
  // The cat can be standing with its nose against something. Rather than jam the eye against its
  // back (a screenful of fur), look for the nearest direction that actually has room: a little to
  // the side, a little higher, over the shoulder. The requested angle is strongly preferred, so
  // this only happens where the view would otherwise be useless.
  if (shot.dist < CAM.min && !isWelcome) {
    let bestScore = shot.dist;
    const requested = shot;
    for (const dy of [0, .45, -.45, .9, -.9, 1.4, -1.4]) {
      for (const dp of [0, .35, .8, 1.15]) {
        if (!dy && !dp) continue;
        const alt = cast(cameraYaw + dy, Math.min(1.32, Math.max(PITCH_MIN, pitch + dp)));
        if (alt.dist < requested.dist * 1.3) continue;
        const score = alt.dist / (1 + Math.abs(dy) * 1.5 + Math.abs(dp) * 1.1);
        if (score > bestScore) { bestScore = score; shot = alt; }
      }
    }
  }
  camDir.set(Math.sin(shot.yaw) * Math.cos(shot.pitch), Math.sin(shot.pitch), Math.cos(shot.yaw) * Math.cos(shot.pitch));
  const allowed = shot.t;
  if (!isWelcome) {
    // 2. Two things are not walls: pitched roofs and low scenery. Rather than pulling the eye in,
    // lift it just enough that the line of sight clears them — but never indoors, where "seeing over
    // the roof" would mean leaving the room through the ceiling.
    for (const s of camIndoors ? [] : physics.query(player.pos.x, player.pos.z, distance + 1.5)) {
      // Walls, ceilings and a roof overhead are blockers — the cast above has already pulled the
      // eye in for those — so what is left here is scenery low enough to see over.
      if (cameraOccluder(s, cameraTarget.y)) continue;
      if (s.shape === 'roof' && roofOverCat(s)) continue;
      if (s.shape === 'cylinder' && s.r < .16) continue;
      if (s.shape === 'roof') {
        for (let k = 1; k <= 6; k++) { const q = k / 6, hx = cameraTarget.x + camDir.x * distance * q, hz = cameraTarget.z + camDir.z * distance * q, hy = surfaceHeight(s, hx, hz); if (Number.isFinite(hy) && cameraTarget.y + camDir.y * distance * q < hy + .35) needY = Math.max(needY, cameraTarget.y + (hy + .35 - cameraTarget.y) / q); }
        continue;
      }
      const t = rayBox(cameraTarget, camRay.copy(camDir).multiplyScalar(distance), s);
      if (t < 1 && t > .05) needY = Math.max(needY, cameraTarget.y + (s.maxY + .22 - cameraTarget.y) / t);
    }
  }
  cameraDesired.copy(camDir).multiplyScalar(Math.max(shot.dist, CAM.min * .6)).add(cameraTarget);
  if (needY > cameraDesired.y) cameraDesired.y = Math.min(needY, cameraTarget.y + Math.min(2.4, distance * 1.1));
  // 3. Never let the eye sink into the ground, a pond, a bench top — and when that lift happens
  // while looking up, carry the look-at point up with it, so "look at the sky" really looks up.
  camLook.copy(cameraTarget);
  if (!isWelcome) {
    const floor = Math.max(0, physics.highest(cameraDesired.x, cameraDesired.z, cameraDesired.y));
    const minY = floor + (cameraPitch < -.1 ? .22 : .42);
    if (cameraDesired.y < minY) {
      const lift = minY - cameraDesired.y;
      cameraDesired.y = minY;
      camLook.y += Math.min(3.4, lift * .92);
    }
  }
  // Keep the eye under the ceiling: the one over the cat, and the (lower, by the eaves) one over
  // wherever the eye has ended up. Rooms, shops, carriages and cabins all have a real roof — and in
  // a plane the inner skin of the fuselage hangs lower than its collider, so give it room.
  if (camIndoors) {
    const overEye = physics.headroomAbove(cameraDesired.x, cameraDesired.z, player.pos.y, .25, true);
    cameraDesired.y = Math.min(cameraDesired.y, player.pos.y + Math.min(headroom, overEye) - .75);
  }
  if (instant) camera.position.copy(cameraDesired);
  else camera.position.lerp(cameraDesired, 1 - Math.exp(-(riding ? 30 : allowed < 1 ? 20 : camIndoors ? 12 : 9) * dt));
  camera.lookAt(camLook);
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
  lake: () => 'The lake. There is a jetty, and boats, and ducks who have seen it all.',
  coast: () => 'The seafront. The town stops here; the sea does not.',
  balloons: () => 'The balloon field. Climb in the basket and wait a moment.',
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

// One colour per kind of place, shared by the big map and the little one.
const MAP_ICON = { lake: '#7fb3ad', coast: '#6fa3a6', balloons: '#d9544f', market: '#d7a048', works: '#8a6a4c', warehouse: '#8a8072', tower: '#5f6b66', playground: '#d9544f', cafe: '#c88f6e', shop: '#6f9a4f', home: '#b48c9c', station: '#4f7f96', allotments: '#8fb04f', airport: '#5f6b66', bridge: '#4f5a56', yard: '#8a6a4c', signalbox: '#8f5f4e', house: '#b48c9c', worksfloor: '#9a6b55', lobby: '#8fb0b8', depotfloor: '#8a9893' };

// A small square of the neighbourhood, always in the corner: the streets and buildings round the
// cat, the places it has found, the cat itself in the middle and the way it is facing. North is up,
// like the big map, and the faint cone shows where the camera is looking. Cheap enough to redraw a
// dozen times a second: only the chunks and buildings inside the square are touched.
const MINI_SPAN = 86;
let miniTimer = 0, miniDrawn = false;
function drawMinimap(force = false) {
  const canvas = $('minimap'); if (!canvas) return;
  if (!miniDrawn) { const side = Math.round((canvas.clientWidth || 116) * Math.min(devicePixelRatio || 1, 2)); canvas.width = canvas.height = side; miniDrawn = true; }
  const ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height, scale = w / MINI_SPAN;
  const k = w / 116; // backing pixels per CSS pixel: the decorations keep their size on a retina screen
  const cx = player.pos.x, cz = player.pos.z, reach = MINI_SPAN / 2 + 14;
  const px = x => (x - cx) * scale + w / 2, pz = z => (z - cz) * scale + h / 2;
  ctx.fillStyle = '#dce6c9'; ctx.fillRect(0, 0, w, h);
  for (const c of world.chunks.values()) {
    const x = c.cx * CHUNK, z = c.cz * CHUNK;
    if (Math.abs(x - cx) > CHUNK + reach || Math.abs(z - cz) > CHUNK + reach) continue;
    ctx.fillStyle = (c.cx + c.cz) % 2 ? '#d4e1bf' : '#d8e3c4'; ctx.fillRect(px(x - 36), pz(z - 36), 72 * scale, 72 * scale);
    ctx.fillStyle = '#eee9d4';
    for (const s of [-1, 1]) { ctx.fillRect(px(x + s * 32.5 - 3.5), pz(z - 36), 7 * scale, 72 * scale); ctx.fillRect(px(x - 36), pz(z + s * 32.5 - 3.5), 72 * scale, 7 * scale); }
    ctx.fillStyle = '#e7e5cd'; ctx.fillRect(px(x - 1.5), pz(z - 29), 3 * scale, 58 * scale); ctx.fillRect(px(x - 29), pz(z - 1.5), 58 * scale, 3 * scale);
  }
  ctx.fillStyle = '#b7cd98';
  for (const park of world.parks) {
    if (Math.abs(park.x - cx) > reach || Math.abs(park.z - cz) > reach) continue;
    ctx.beginPath(); ctx.roundRect(px(park.x - 12), pz(park.z - 12), 24 * scale, 24 * scale, 5); ctx.fill();
  }
  for (const b of world.buildings) {
    if (Math.abs(b.x - cx) > reach || Math.abs(b.z - cz) > reach) continue;
    const visited = visitedRoofs.has(b.id);
    ctx.fillStyle = visited ? '#7f9d79' : b.wall; ctx.strokeStyle = visited ? '#5f805d' : '#aab397'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect(px(b.x - b.w / 2), pz(b.z - b.d / 2), Math.max(2, b.w * scale), Math.max(2, b.d * scale), 2); ctx.fill(); ctx.stroke();
  }
  for (const l of world.landmarks) {
    if (Math.abs(l.x - cx) > reach || Math.abs(l.z - cz) > reach) continue;
    ctx.fillStyle = MAP_ICON[l.kind] || '#999'; ctx.strokeStyle = '#fffaf0'; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(px(l.x), pz(l.z), 3.6 * k, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  }
  // Where the camera is looking, as a soft wedge; then the cat, pointing where it is headed.
  ctx.save(); ctx.translate(w / 2, h / 2); ctx.rotate(-cameraYaw + Math.PI);
  const cone = ctx.createRadialGradient(0, 0, 3, 0, 0, w * .34);
  cone.addColorStop(0, 'rgba(255,250,240,.5)'); cone.addColorStop(1, 'rgba(255,250,240,0)');
  ctx.fillStyle = cone; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, w * .34, Math.PI / 2 - .46, Math.PI / 2 + .46); ctx.closePath(); ctx.fill();
  ctx.restore();
  // The cat faces (sin h, cos h) in the world, which is (x, +y) on the canvas — so an arrow drawn
  // pointing down and turned by -h points the way the cat is going.
  ctx.save(); ctx.translate(w / 2, h / 2); ctx.rotate(-player.heading);
  ctx.fillStyle = '#fffaf0'; ctx.beginPath(); ctx.arc(0, 0, 9.5 * k, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#cb8b50'; ctx.beginPath(); ctx.arc(0, 0, 7 * k, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#3c362c'; ctx.beginPath(); ctx.moveTo(0, 11 * k); ctx.lineTo(-5 * k, 2 * k); ctx.lineTo(0, 4.4 * k); ctx.lineTo(5 * k, 2 * k); ctx.closePath(); ctx.fill();
  ctx.restore();
  ctx.fillStyle = 'rgba(60,54,44,.62)'; ctx.font = `700 ${Math.round(11 * k)}px "DM Sans", sans-serif`; ctx.textAlign = 'center'; ctx.fillText('N', w - 10 * k, 14 * k);
  // What the little arrow is actually pointing at, so a test (or a curious player) can check it.
  canvas.dataset.heading = (+player.heading).toFixed(2); canvas.dataset.yaw = (+cameraYaw).toFixed(2);
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
  for (const l of world.landmarks) {
    const seen = visitedPlaces.has(l.id); ctx.fillStyle = MAP_ICON[l.kind] || '#999'; ctx.strokeStyle = '#fffaf0'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(px(l.x), pz(l.z), seen ? 7 : 5.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    if (seen) { ctx.fillStyle = '#fffaf0'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('✓', px(l.x), pz(l.z) + 3.5); }
    if (Math.abs(l.x - mapCenter.x) < 110 && Math.abs(l.z - mapCenter.z) < 70) { ctx.fillStyle = '#5f6b5a'; ctx.font = '600 10px "DM Sans", sans-serif'; ctx.textAlign = 'center'; ctx.fillText(l.name.replace(/^the |^somebody’s /, ''), px(l.x), pz(l.z) + 18); }
  }
  for (const p of people.list) { ctx.fillStyle = p.job ? '#a37c5a' : '#7c8fa6'; ctx.beginPath(); ctx.arc(px(p.x), pz(p.z), 3, 0, Math.PI * 2); ctx.fill(); }
  const x = px(player.pos.x), y = pz(player.pos.z);
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.fill(); ctx.shadowColor = '#6b775333'; ctx.shadowBlur = 8; ctx.fillStyle = '#cb8b50'; ctx.beginPath(); ctx.arc(x, y, 8.5, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
  ctx.save(); ctx.translate(x, y); ctx.rotate(-player.heading); ctx.fillStyle = '#fff9e9'; ctx.beginPath(); ctx.moveTo(0, 9); ctx.lineTo(-4.6, -3.4); ctx.lineTo(4.6, -3.4); ctx.closePath(); ctx.fill(); ctx.restore();
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
  if (world.update(flight.active ? flight.anchor : player.pos, 1)) fun.sync(); world.animate(time);
  const ride = train.update(dt, player.pos, !!player.support?.train);
  if (player.support?.train && !flight.active) player.pos.z += ride;
  const lifted = lifts.update(dt, player.pos, player.support);
  if (lifted) player.pos.y += lifted;
  carry(vehicles.update(dt, player.pos, player.support));
  if (started && !modal) simulate(dt); else { player.speed = 0; player.turnRate = 0; player.accel = 0; wallHint = null; }
  if (flight.active) { flight.update(dt); if (flight.active && flight.plane) { player.pos.copy(flight.seat); player.vx = player.vz = player.vy = 0; player.grounded = true; player.heading = flight.plane.group.rotation.y + Math.PI / 2; } }
  else if (started && !modal) { const pl = planes.at(player.pos); if (pl) { boardTimer += dt; if (boardTimer > .9) { boardTimer = -999; offerFlight(pl); } } else boardTimer = 0; }
  sky.update(dt, player.pos);
  cat.root.position.copy(player.pos); cat.root.rotation.y = player.heading;
  if (flight.active && flight.plane) { cat.root.quaternion.copy(flight.plane.group.quaternion).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2)); }
  const groundY = physics.support(player.pos.x, player.pos.z, player.pos.y + .05).y;
  cat.update(dt, time, { speed: player.speed, grounded: player.grounded, climbing: !!player.climbing, resting: resting || flight.active, vy: player.vy, turnRate: player.turnRate, accel: player.accel, landImpact: player.landImpact, runBlend: player.runBlend }, groundY, settings.reducedMotion);
  people.interactive = started && !modal; people.update(dt, player.pos, player.speed, camera); birds.update(dt, player.pos, player.speed);
  if (started && !modal) fun.update(dt, player, people);
  ducks.update(dt, player.pos, time);
  if (!started && !settings.reducedMotion) cameraYawTarget += dt * .03;
  updateCamera(dt); updateAtmosphere(dt); audio.update(dt); updateBubble();
  ground.position.x = player.pos.x; ground.position.z = player.pos.z;
  day.update(dt, camera, player.pos, world.lamps);
  hudTimer += dt;
  if (hudTimer > .25) {
    hudTimer = 0; if (started && !modal) checkDiscoveries(); fun.sync(); ducks.sync(player.pos); planes.sync(); lifts.sync(); vehicles.sync(); $('clock-label').textContent = day.label(); $('clock-card').dataset.period = day.period();
    const showHint = !!wallHint && !player.climbing && !resting && started && !modal && player.grounded;
    $('context-hint').classList.toggle('visible', showHint && !mobile);
    $('touch-climb').classList.toggle('ready', showHint);
    document.body.classList.toggle('sprinting', player.runBlend > .5);
    document.body.classList.toggle('settled', playTime > 14);
    if (modal === 'map-modal' && !mapDrag) drawMap();
  }
  miniTimer += dt;
  if (miniTimer > 1 / 12 && started && !modal) { miniTimer = 0; drawMinimap(); }
  if (resting) { purrTimer += dt; if (purrTimer > 1.7) { purrTimer = 0; audio.purr(); } }
  renderer.render(scene, camera);
  renderWardrobe(dt);
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
// Version and updates. The build stamps the version in; "Check for updates" asks the service worker
// to look for a newer build (and compares version.json straight from the server as a fallback).
const APP_VERSION = typeof __APP_VERSION__ === 'string' ? __APP_VERSION__ : 'dev', BUILD_ID = typeof __BUILD_ID__ === 'string' ? __BUILD_ID__ : '';
function setUpdateLabel(text) { const l = $('update-label'); if (l) l.textContent = text; }
async function checkForUpdates(manual = false) {
  const btn = $('update-button'); if (btn) btn.disabled = true; setUpdateLabel('Checking…');
  try {
    if (updateReady) { setUpdateLabel('Update ready — reloading…'); setTimeout(() => location.reload(), 400); return; }
    let remote = null; try { const res = await fetch(`./version.json?v=${Date.now()}`, { cache: 'no-store' }); if (res.ok) remote = await res.json(); } catch {}
    if (swRegistration) { await swRegistration.update().catch(() => {}); }
    const newer = remote && (remote.version !== APP_VERSION || remote.build !== BUILD_ID);
    if (swRegistration?.waiting) { updateReady = true; setUpdateLabel(`Update to ${remote?.version || 'a newer build'} ready — reloading…`); swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' }); setTimeout(() => location.reload(), 600); return; }
    if (newer && !swRegistration) { setUpdateLabel(`Version ${remote.version} is available — reloading…`); setTimeout(() => location.reload(true), 600); return; }
    if (newer) { setUpdateLabel(`Version ${remote.version} is downloading… tap again in a moment.`); }
    else setUpdateLabel(remote ? `Up to date (${APP_VERSION}, built ${BUILD_ID})` : navigator.onLine ? `Up to date (${APP_VERSION})` : 'Offline — using the saved copy.');
  } finally { if (btn) btn.disabled = false; }
}
async function setupPWA() {
  syncInstall();
  $('version-label').textContent = `Whiskerfield ${APP_VERSION}`; $('version-label').title = BUILD_ID ? `Built ${BUILD_ID}` : '';
  $('update-button').addEventListener('click', () => checkForUpdates(true));
  setTimeout(() => checkForUpdates(false), 2500);
  window.addEventListener('online', syncInstall); window.addEventListener('offline', syncInstall);
  if (!('serviceWorker' in navigator) || !window.isSecureContext) { $('offline-label').textContent = 'Online preview'; $('install-ready').querySelector('span').textContent = 'Offline install needs HTTPS or localhost.'; return; }
  try {
    const hadController = !!navigator.serviceWorker.controller;
    swRegistration = await navigator.serviceWorker.register('./sw.js', { scope: './' });
    swRegistration.addEventListener('updatefound', () => {
      const worker = swRegistration.installing;
      worker?.addEventListener('statechange', () => { if (worker.state === 'installed' && hadController) { updateReady = true; setUpdateLabel('Update ready — tap Check for updates to reload.'); if (started) toast('Update ready. Tap to reload.', 'update', 9000); else location.reload(); } });
    });
    await navigator.serviceWorker.ready; offlineReady = true; syncInstall();
    if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});
    navigator.serviceWorker.addEventListener('message', e => { if (e.data?.type === 'OFFLINE_READY') { offlineReady = true; syncInstall(); } });
  } catch (err) { console.warn('Offline cache unavailable:', err); $('offline-label').textContent = 'Online preview'; $('install-ready').querySelector('span').textContent = 'Offline files couldn’t be saved. Reconnect and reload to try again.'; }
}

try { init(); setupPWA(); } catch (err) { console.error(err); $('loading').hidden = true; $('error-screen').hidden = false; $('error-message').textContent = 'This little world needs WebGL. Try an up-to-date Chrome, Edge, Firefox, or Safari browser with hardware acceleration enabled. ' + err.message; }
