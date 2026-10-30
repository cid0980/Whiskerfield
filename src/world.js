import * as THREE from 'three';
import { makeMarket, makeFactory, makeTower, makePlayground, makeInterior, makeWarehouse, makeStation, makeAllotments, makeRailway, makeAirport, railTrack } from './places.js';
import { hollow, doorway, furnishHouse, FLOORS, PLACE_NAMES } from './rooms.js';

export const CHUNK = 72;
// Pedestrian network: pavements (28.45 / 43.55 mod 72) and the block footpaths (0 mod 72).
export const NAV = Object.freeze({ offsets: [0, 28.45, 43.55], pavement: [28.45, 43.55] });
const TAU = Math.PI * 2;
const Y = new THREE.Vector3(0, 1, 0);
const tempMatrix = new THREE.Matrix4();
const tempQuaternion = new THREE.Quaternion();
const tempPosition = new THREE.Vector3();
const tempScale = new THREE.Vector3();
const tempNormal = new THREE.Vector3();
const tempColor = new THREE.Color();

export function hashString(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export function hash(x, z, seed = 0, salt = 0) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(z | 0, 668265263) ^ seed ^ Math.imul(salt, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return (h ^ (h >>> 16)) >>> 0;
}
export function random(seed) {
  let a = seed >>> 0;
  return () => { a += 0x6D2B79F5; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const cylinderGeo = new THREE.CylinderGeometry(1, 1, 1, 10);
const taperedGeo = new THREE.CylinderGeometry(.72, 1, 1, 9);
const coneGeo = new THREE.ConeGeometry(1, 1, 8);
const sphereGeo = new THREE.IcosahedronGeometry(1, 1);
const softSphereGeo = new THREE.IcosahedronGeometry(1, 1);
const potGeo = new THREE.CylinderGeometry(1, .72, 1, 9);
const torusGeo = new THREE.TorusGeometry(1, .12, 5, 16);
export const GEO = Object.freeze({ box: boxGeo, cylinder: cylinderGeo, tapered: taperedGeo, cone: coneGeo, sphere: sphereGeo, softSphere: softSphereGeo, pot: potGeo, torus: torusGeo });

export class Batch {
  constructor() { this.p = []; this.n = []; this.c = []; this.i = []; this.count = 0; this.items = []; }
  add(geometry, x, y, z, sx, sy, sz, color, rx = 0, ry = 0, rz = 0) {
    this.items.push({ geometry, x, y, z, sx, sy, sz, rx, ry, rz });
    tempPosition.set(x, y, z); tempScale.set(sx, sy, sz);
    tempQuaternion.setFromEuler(new THREE.Euler(rx, ry, rz));
    tempMatrix.compose(tempPosition, tempQuaternion, tempScale);
    tempColor.set(color);
    const pos = geometry.attributes.position, norm = geometry.attributes.normal;
    const offset = this.count;
    for (let v = 0; v < pos.count; v++) {
      tempPosition.fromBufferAttribute(pos, v).applyMatrix4(tempMatrix);
      this.p.push(tempPosition.x, tempPosition.y, tempPosition.z);
      tempNormal.set(norm.getX(v) / sx, norm.getY(v) / sy, norm.getZ(v) / sz).applyQuaternion(tempQuaternion).normalize();
      this.n.push(tempNormal.x, tempNormal.y, tempNormal.z);
      this.c.push(tempColor.r, tempColor.g, tempColor.b);
    }
    if (geometry.index) for (let j = 0; j < geometry.index.count; j++) this.i.push(geometry.index.getX(j) + offset);
    else for (let j = 0; j < pos.count; j++) this.i.push(j + offset);
    this.count += pos.count;
    return this;
  }
  box(x, y, z, w, h, d, color, ry = 0) { return this.add(boxGeo, x, y, z, w, h, d, color, 0, ry); }
  cyl(x, y, z, r, h, color, rx = 0, rz = 0) { return this.add(cylinderGeo, x, y, z, r, h, r, color, rx, 0, rz); }
  ball(x, y, z, rx, ry, rz, color, soft = false) { return this.add(soft ? softSphereGeo : sphereGeo, x, y, z, rx, ry, rz, color); }
  beam(a, b, radius, color) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b), delta = end.clone().sub(start);
    const q = new THREE.Quaternion().setFromUnitVectors(Y, delta.clone().normalize());
    const e = new THREE.Euler().setFromQuaternion(q);
    return this.add(cylinderGeo, ...start.add(end).multiplyScalar(.5).toArray(), radius, delta.length(), radius, color, e.x, e.y, e.z);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setIndex(this.i); g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}

// Countries. Each is a palette and a few habits (what the trees look like, whether it snows);
// the same generator builds all of them, so a flight lands you somewhere that feels different
// without a second set of rules.
export const COUNTRIES = {
  whiskerfield: {
    id: 'whiskerfield', name: 'Whiskerfield', code: 'WF', line: 'Home. The kettle is probably on.',
    sky: '#c9d4c8', ground: '#93a86f', grass: ['#93a86f', '#9aae75', '#8fa46a', '#a0b27b'], lawn: '#8fa66b', road: '#b9ae96', pavement: '#cfc4ab', trees: 'round', snow: false,
    walls: ['#d6c4a6', '#c9b79b', '#b9c0ae', '#aeb9b2', '#d8cbb2', '#c4b49a', '#b7bfae', '#cbb9a4', '#c2c7b6', '#d2c1a4'],
    roofs: ['#8a5a44', '#96604a', '#7b5140', '#5c6b66', '#65756d', '#6f6252', '#8a6a4c', '#5a6870'],
    leaves: ['#6f8a52', '#7d965c', '#8a9f66', '#62804f', '#93a26b', '#6b8757'], flowers: ['#d9b76a', '#d69a86', '#e6d9b4', '#b98a9a', '#d9a85e'], leaf: '#e8d59a',
    first: ['Clover', 'Willow', 'Honey', 'Fern', 'Moss', 'Clementine', 'Juniper', 'Lavender', 'Pebble', 'Marigold', 'Chestnut', 'Meadow', 'Rosemary', 'Hazel', 'Poppy', 'Bramble'], last: ['Quarter', 'Gardens', 'Lane', 'Hill', 'Corner', 'Heights', 'Common', 'Terrace']
  },
  sunmarch: {
    id: 'sunmarch', name: 'Sunmarch', code: 'SM', line: 'Sunmarch. Warm stone, warmer roofs. Find some shade.',
    sky: '#dfe6e3', ground: '#bdae74', grass: ['#bdae74', '#c4b57a', '#b7a76e', '#c9ba80'], lawn: '#b3a86c', road: '#cbbd9f', pavement: '#dfd3b6', trees: 'palm', snow: false,
    walls: ['#e8c9a0', '#f0d9b5', '#d9a77a', '#e6b58a', '#f2e2c4', '#cf9b76', '#e9d2a9', '#dcb48e', '#f4e4c8', '#d7a583'],
    roofs: ['#b4553c', '#c4654a', '#a8503a', '#bd6147', '#9d4a36', '#c86e52', '#ad5b43', '#b85f45'],
    leaves: ['#5f7f4a', '#6e8a4f', '#7f9a56', '#557a44', '#8ea563', '#64854c'], flowers: ['#e8578a', '#f29b4b', '#f4e37a', '#d94f6b', '#f7b267'], leaf: '#f1c27a',
    first: ['Lemon', 'Olive', 'Almond', 'Saffron', 'Fig', 'Cicada', 'Terracotta', 'Amber', 'Salt', 'Orange', 'Mimosa', 'Pomegranate', 'Dune', 'Siesta', 'Oleander', 'Sage'], last: ['Piazza', 'Walk', 'Steps', 'Court', 'Orchard', 'Rise', 'Yard', 'Terrace']
  },
  norrholm: {
    id: 'norrholm', name: 'Norrholm', code: 'NH', line: 'Norrholm. Snow on everything. Mind your paws.',
    sky: '#d9e0e6', ground: '#e9edf1', grass: ['#e9edf1', '#eef1f4', '#e4e9ee', '#f0f3f6'], lawn: '#e6eaee', road: '#a9adb2', pavement: '#c3c7cb', trees: 'pine', snow: true,
    walls: ['#8a3f35', '#9c4a3c', '#5d4a3a', '#6e5542', '#d9d3c3', '#4f5d6b', '#7a3a32', '#c9c1ad', '#3f4f5a', '#8b6a50'],
    roofs: ['#eef1f4', '#e8ecf0', '#f2f4f6', '#e4e8ec', '#edf0f3', '#e9edf1', '#f0f3f6', '#e6eaee'],
    leaves: ['#3f6b4a', '#466f4e', '#3a6245', '#4c7553', '#427050', '#3b6647'], flowers: ['#ffffff', '#e7ecf0', '#f3f5f7', '#dfe6ea', '#eef1f4'], leaf: '#ffffff',
    first: ['Birch', 'Elk', 'Frost', 'Lantern', 'Pine', 'Ember', 'Ice', 'Aurora', 'Sled', 'Wool', 'Candle', 'Harbour', 'Reindeer', 'Lingon', 'Cinnamon', 'Fjord'], last: ['Gate', 'Hollow', 'Way', 'Hill', 'Square', 'Ridge', 'Quay', 'Row']
  },
  hanamura: {
    id: 'hanamura', name: 'Hanamura', code: 'HM', line: 'Hanamura. Blossom on the wind and tiles the colour of rain.',
    sky: '#d8dfe0', ground: '#8fa87a', grass: ['#8fa87a', '#97ae80', '#89a274', '#9cb285'], lawn: '#8aa676', road: '#b5b1a3', pavement: '#cfcabb', trees: 'blossom', snow: false,
    walls: ['#efe6d2', '#e9dfc9', '#f3ead6', '#e4d9c0', '#d8cbb0', '#eee4ce', '#e6dcc6', '#f0e7d4', '#dfd4ba', '#ece2cc'],
    roofs: ['#4b5058', '#555b63', '#3f454d', '#5a6068', '#484e56', '#60666e', '#43494f', '#515760'],
    leaves: ['#f0b7c8', '#f5c6d4', '#6f8a52', '#e9a7bb', '#7d965c', '#f7cfdb'], flowers: ['#f6c9d6', '#ffffff', '#f1b4c6', '#fbe3ea', '#e99ab3'], leaf: '#f6c9d6',
    first: ['Plum', 'Crane', 'Maple', 'Koi', 'Moon', 'Bamboo', 'Paper', 'Tea', 'Heron', 'Iris', 'Lotus', 'Pine', 'Mist', 'Lantern', 'Willow', 'Stone'], last: ['Street', 'Gardens', 'Bridge', 'Steps', 'Crossing', 'Lane', 'Terrace', 'Ward']
  }
};
export const COUNTRY_IDS = Object.keys(COUNTRIES);
let country = COUNTRIES.whiskerfield;
let walls = country.walls, roofs = country.roofs, leaves = country.leaves, flowers = country.flowers;
export function applyCountry(id) { country = COUNTRIES[id] || COUNTRIES.whiskerfield; walls = country.walls; roofs = country.roofs; leaves = country.leaves; flowers = country.flowers; return country; }
export function currentCountry() { return country; }
export function districtName(cx, cz, seed) { const h = hash(Math.floor(cx / 2), Math.floor(cz / 2), seed, 71); return `${country.first[h % country.first.length]} ${country.last[(h >>> 8) % country.last.length]}`; }
const mod = (a, n) => ((a % n) + n) % n;
// Railway lines run north–south every six chunks; airports sit two chunks east of them, every six chunks north–south.
export const isRailColumn = cx => mod(cx, 6) === 1;
export const railX = cx => cx * CHUNK - 9;
export const isAirportChunk = (cx, cz) => mod(cx, 6) === 2 && mod(cz, 6) === 0;
export const isStationChunk = (cx, cz) => isRailColumn(cx) && mod(cz, 2) === 0;

export class World {
  constructor(scene, seedText, countryId = 'whiskerfield') {
    this.scene = scene; this.seedText = seedText; this.country = applyCountry(countryId); this.seed = hashString(countryId === 'whiskerfield' ? seedText : seedText + '~' + countryId);
    this.airports = [];
    this.chunks = new Map(); this.colliders = []; this.buildings = []; this.parks = []; this.water = []; this.jobs = []; this.grounds = []; this.landmarks = []; this.spatial = new Map();
    this.material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .98, metalness: 0, flatShading: true });
    this.center = ''; this.radius = 2; this.pending = [];
  }

  update(position, budget = 1) {
    const cx = Math.floor((position.x + CHUNK / 2) / CHUNK), cz = Math.floor((position.z + CHUNK / 2) / CHUNK);
    const key = `${cx},${cz}`;
    if (key !== this.center) {
      this.center = key; this.pending = [];
      for (let x = cx - this.radius; x <= cx + this.radius; x++) for (let z = cz - this.radius; z <= cz + this.radius; z++) {
        if (!this.chunks.has(`${x},${z}`)) this.pending.push({ x, z, d: (x - cx) ** 2 + (z - cz) ** 2 });
      }
      this.pending.sort((a, b) => a.d - b.d);
      for (const [k, chunk] of this.chunks) if (Math.abs(chunk.cx - cx) > this.radius + 1 || Math.abs(chunk.cz - cz) > this.radius + 1) this.removeChunk(k);
      this.refreshColliders();
    }
    let made = 0;
    while (this.pending.length && made < budget) {
      const { x, z } = this.pending.shift();
      if (!this.chunks.has(`${x},${z}`)) { this.createChunk(x, z); made++; }
    }
    if (made) this.refreshColliders();
    return made;
  }

  refreshColliders() {
    this.colliders = []; this.buildings = []; this.parks = []; this.water = []; this.jobs = []; this.grounds = []; this.landmarks = []; this.airports = [];
    for (const c of this.chunks.values()) { this.colliders.push(...c.colliders); this.buildings.push(...c.buildings); this.parks.push(...c.parks); this.water.push(...c.water); this.jobs.push(...c.jobs); this.grounds.push(...c.grounds); this.landmarks.push(...c.landmarks); if (c.airports) this.airports.push(...c.airports); }
    // 8 m spatial hash so physics, NPCs, and the camera only touch nearby solids.
    const index = new Map();
    for (const s of this.colliders) {
      for (let ix = Math.floor(s.minX / 8); ix <= Math.floor(s.maxX / 8); ix++) for (let iz = Math.floor(s.minZ / 8); iz <= Math.floor(s.maxZ / 8); iz++) {
        const k = ix + ',' + iz; let cell = index.get(k); if (!cell) index.set(k, cell = []); cell.push(s);
      }
    }
    this.spatial = index;
  }

  removeChunk(key) {
    const c = this.chunks.get(key); if (!c) return;
    this.scene.remove(c.mesh); c.mesh.geometry.dispose(); if (c.group) this.scene.remove(c.group); this.chunks.delete(key);
  }

  dispose() { for (const key of this.chunks.keys()) this.removeChunk(key); this.material.dispose(); }

  solid(c, x, y, z, w, h, d, options = {}) {
    const s = { shape: 'box', minX: x - w / 2, maxX: x + w / 2, minY: y - h / 2, maxY: y + h / 2, minZ: z - d / 2, maxZ: z + d / 2, climbable: true, ...options };
    c.colliders.push(s); return s;
  }
  cylinderSolid(c, x, y, z, r, h, options = {}) {
    const s = { shape: 'cylinder', x, z, r, minX: x - r, maxX: x + r, minY: y, maxY: y + h, minZ: z - r, maxZ: z + r, climbable: false, ...options };
    c.colliders.push(s); return s;
  }
  ellipsoidSolid(c, x, y, z, rx, ry, rz, options = {}) {
    const s = { shape: 'ellipsoid', x, y, z, rx, ry, rz, minX: x - rx, maxX: x + rx, minY: y - ry, maxY: y + ry, minZ: z - rz, maxZ: z + rz, climbable: true, ...options };
    c.colliders.push(s); return s;
  }

  // Global rule: everything that is drawn is solid. Every primitive placed in a chunk gets a
  // collider unless it is lower than the cat's step height (paving, cobbles, lawns), string-thin
  // (bunting, chains), a roof shell (those have their own sloped colliders) or already inside an
  // explicit collider. Hand-placed colliders stay in charge of climbing/perching behaviour.
  autoColliders(c, items) {
    const explicit = c.colliders.filter(s => s.shape !== 'roof');
    const step = .27, euler = new THREE.Euler(), q = new THREE.Quaternion(), v = new THREE.Vector3();
    for (const it of items) {
      const { geometry: g, x, y, z, sx, sy, sz, rx, ry, rz } = it;
      const sphere = g === sphereGeo || g === softSphereGeo;
      const round = g === cylinderGeo || g === taperedGeo || g === potGeo || g === coneGeo;
      if (!sphere && !round && g !== boxGeo && g !== torusGeo) continue; // roof shells etc.
      const hx = sphere || round || g === torusGeo ? sx * (g === torusGeo ? 1.12 : 1) : sx / 2;
      const hy = sphere ? sy : g === torusGeo ? sy * .12 : sy / 2;
      const hz = sphere || round || g === torusGeo ? sz * (g === torusGeo ? 1.12 : 1) : sz / 2;
      const upright = Math.abs(rx) < .05 && Math.abs(rz) < .05;
      if (Math.max(hx, hz) * 2 < .05) continue; // strings, wires
      if (sphere && Math.max(sx, sz) < .25) continue; // flowers, leaf tufts
      if (g === coneGeo && sx < .6) continue; // finials, lamp caps, lampshades
      if (!upright && round && sx < .15) continue; // thin rafters, branches
      if (!upright && g === boxGeo && [sx, sy, sz].sort((a, b) => a - b)[1] < .1) continue; // tilted rods and tile strips: their boxes would wall off whole roofs
      let minX, maxX, minY, maxY, minZ, maxZ;
      if (upright && Math.abs(ry) < .02) { minX = x - hx; maxX = x + hx; minY = y - hy; maxY = y + hy; minZ = z - hz; maxZ = z + hz; }
      else {
        q.setFromEuler(euler.set(rx, ry, rz));
        minX = minY = minZ = Infinity; maxX = maxY = maxZ = -Infinity;
        for (let i = 0; i < 8; i++) {
          v.set(i & 1 ? hx : -hx, i & 2 ? hy : -hy, i & 4 ? hz : -hz).applyQuaternion(q);
          minX = Math.min(minX, x + v.x); maxX = Math.max(maxX, x + v.x); minY = Math.min(minY, y + v.y); maxY = Math.max(maxY, y + v.y); minZ = Math.min(minZ, z + v.z); maxZ = Math.max(maxZ, z + v.z);
        }
      }
      if (maxY < step) continue; // low enough to walk over
      if (maxY - minY < .05) continue; // rugs, mats, posters, plates
      if (maxX - minX > 20 || maxZ - minZ > 20) continue; // ground slabs
      let covered = false;
      for (const s of explicit) {
        const pad = s.auto ? .02 : .3;
        if (minX >= s.minX - pad && maxX <= s.maxX + pad && minY >= s.minY - pad && maxY <= s.maxY + Math.min(pad, .12) && minZ >= s.minZ - pad && maxZ <= s.maxZ + pad) { covered = true; break; }
      }
      if (covered) continue;
      let made;
      // Pieces touching a tree become part of that tree (so climbing follows the crown, not an invisible wall).
      const tree = explicit.find(s => s.tree && minX < s.maxX && maxX > s.minX && minY < s.maxY && maxY > s.minY && minZ < s.maxZ && maxZ > s.minZ)?.tree;
      const tag = tree ? { kind: 'tree', tree, auto: true } : { kind: 'auto', auto: true };
      if (g === coneGeo && upright) made = this.ellipsoidSolid(c, x, y - hy + sy * .25, z, sx, sy * .75, sz, { ...tag, climbable: !!tree });
      else if (sphere && upright) made = this.ellipsoidSolid(c, x, y, z, sx, sy, sz, { ...tag, climbable: !!tree || y + sy > 1.1 });
      else if (round && upright) made = this.cylinderSolid(c, x, y - hy, z, Math.max(sx, sz), hy * 2, { ...tag, climbable: Math.max(sx, sz) > .3 });
      else c.colliders.push(made = { shape: 'box', minX, maxX, minY, maxY, minZ, maxZ, climbable: maxY - minY > .4, ...tag });
      if (tree && made.shape === 'ellipsoid') tree.canopies.push(made);
      explicit.push(made);
    }
  }

  createChunk(cx, cz) {
    const key = `${cx},${cz}`, rng = random(hash(cx, cz, this.seed));
    const c = { cx, cz, key, batch: new Batch(), colliders: [], buildings: [], parks: [], water: [], mesh: null, jobs: [], extras: [], grounds: [], landmarks: [], smoke: [], group: null, ticks: [] };
    const ox = cx * CHUNK, oz = cz * CHUNK;
    const grass = country.grass[hash(cx, cz, this.seed, 4) % 4];
    c.batch.box(ox, -.2, oz, CHUNK + .05, .4, CHUNK + .05, grass);
    // Neighborhood streets are continuous across chunk boundaries.
    const road = country.road, pavement = country.pavement;
    for (const s of [-1, 1]) {
      c.batch.box(ox + s * 32.5, .005, oz, 7, .08, CHUNK, road);
      c.batch.box(ox, .006, oz + s * 32.5, CHUNK, .08, 7, road);
      for (const edge of [-1, 1]) {
        c.batch.box(ox + s * 32.5 + edge * 4.05, .055, oz, 1.05, .15, CHUNK - 9, pavement);
        c.batch.box(ox, .056, oz + s * 32.5 + edge * 4.05, CHUNK - 9, .15, 1.05, pavement);
      }
    }
    // A footpath crosses the middle of every block, linking the pavements.
    c.batch.box(ox, .015, oz, 3, .07, 58, '#b3a88f');
    c.batch.box(ox, .016, oz, 58, .07, 3, '#b3a88f');
    this.cars(c, rng);
    // A few sun-bleached cobbles, rather than a repeating road texture.
    for (let i = 0; i < 100; i++) {
      const along = rng() * 68 - 34, across = (rng() - .5) * 5.4;
      const x = i % 2 ? ox + 32.5 + across : ox + along;
      const z = i % 2 ? oz + along : oz + 32.5 + across;
      c.batch.box(x, .052, z, .45 + rng() * .6, .018, .3 + rng() * .35, rng() > .5 ? '#aaa08a' : '#c4b99f', (rng() - .5) * .2);
    }
    const airport = isAirportChunk(cx, cz);
    if (isRailColumn(cx)) railTrack(this, c, railX(cx), oz, rng, isStationChunk(cx, cz));
    if (airport) makeAirport(this, c, ox, oz, rng, key);
    for (let i = 0; i < 4 && !airport; i++) {
      const lx = i % 2 ? 16.5 : -16.5, lz = i < 2 ? -16.5 : 16.5;
      const x = ox + lx, z = oz + lz;
      const r = random(hash(cx * 4 + i, cz, this.seed, 901));
      const lot = this.lotKind(cx, cz, i, r), id = `${key}:${i}`;
      if (lot === 'park') this.makePark(c, x, z, r, i);
      else if (lot === 'market') makeMarket(this, c, x, z, r, id);
      else if (lot === 'works') makeFactory(this, c, x, z, r, id);
      else if (lot === 'depot') makeWarehouse(this, c, x, z, r, id);
      else if (lot === 'tower') makeTower(this, c, x, z, r, id, 1);
      else if (lot === 'spire') makeTower(this, c, x, z, r, id, 1.6);
      else if (lot === 'play') makePlayground(this, c, x, z, r, id);
      else if (lot === 'station') makeStation(this, c, x, z, r, id);
      else if (lot === 'rail') makeRailway(this, c, x, z, r, id, isStationChunk(cx, cz) ? 'bridge' : hash(cx, cz, this.seed, 33) % 2 ? 'yard' : 'crossing');
      else if (lot === 'allotments') makeAllotments(this, c, x, z, r, id);
      else if (lot === 'cafe' || lot === 'shop' || lot === 'home') makeInterior(this, c, x, z, r, id, lot);
      else this.makeBuilding(c, x, z, r, id, cx === 0 && cz === 0 ? i : -1);
    }
    // Street trees, lanterns, and small places to pause.
    for (const s of [-1, 1]) {
      if (!airport) { this.tree(c, ox + s * 27.4, oz + 5, rng, .65); this.tree(c, ox - 7, oz + s * 27.4, rng, .65); }
      this.lamp(c, ox + s * 27.2, oz - 27.2);
      if (rng() > .35 && !airport) this.bench(c, ox + s * 27, oz + 14, s * Math.PI / 2);
    }
    if (cx === 0 && cz === 0) {
      this.makeSpawn(c, rng);
    } else if (rng() > .65 && !country.snow && !airport) {
      this.bunting(c, ox - 12, oz, ox + 12, oz, 6.5);
    }
    this.autoColliders(c, c.batch.items);
    this.buildExtras(c);
    const mesh = new THREE.Mesh(c.batch.geometry(), this.material);
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.name = `neighborhood-${key}`;
    c.mesh = mesh; c.batch = null; this.chunks.set(key, c); this.scene.add(mesh);
  }

  // Every chunk has a character; the character decides what its four lots become.
  theme(cx, cz) {
    if (cx === 0 && cz === 0) return 'square';
    if (isAirportChunk(cx, cz)) return 'airport';
    const h = hash(cx, cz, this.seed, 77) % 100;
    const t = h < 34 ? 'lanes' : h < 49 ? 'market' : h < 62 ? 'works' : h < 76 ? 'towers' : h < 88 ? 'play' : 'allot';
    return isRailColumn(cx) ? 'rail-' + t : t;
  }
  lotKind(cx, cz, i, r) {
    let t = this.theme(cx, cz); const v = hash(cx * 4 + i, cz, this.seed, 905) % 100;
    if (t === 'airport') return 'airport';
    if (t.startsWith('rail-')) {
      // The two western lots carry the line: a station every other chunk, sidings or a crossing otherwise.
      if (i === 0) return isStationChunk(cx, cz) ? 'station' : 'rail';
      if (i === 2) return 'rail';
      t = t.slice(5); if (t === 'towers' || t === 'works') t = 'lanes';
    }
    if (t === 'square') return ['building', 'market', 'cafe', 'park'][i];
    if (t === 'market') return ['market', 'cafe', 'shop', v < 50 ? 'park' : 'home'][i];
    if (t === 'works') return ['works', 'depot', v < 40 ? 'park' : 'building', 'building'][i];
    if (t === 'towers') return ['tower', 'spire', 'tower', v < 60 ? 'park' : 'building'][i];
    if (t === 'play') return ['play', 'park', v < 50 ? 'home' : 'building', 'building'][i];
    if (t === 'allot') return ['allotments', 'home', 'park', 'building'][i];
    if (v < 20) return 'park';
    if (v < 30) return 'home';
    if (v < 34) return 'cafe';
    return 'building';
  }
  // Animated set dressing lives in real meshes beside the merged chunk geometry.
  buildExtras(c) {
    if (!c.extras.length && !c.smoke.length) return;
    const group = new THREE.Group(); group.name = `extras-${c.key}`; c.group = group; this.scene.add(group);
    const mat = color => new THREE.MeshStandardMaterial({ color, roughness: .85, flatShading: true });
    for (const e of c.extras) {
      if (e.kind === 'rollers') {
        const m = mat('#9aa4a0'), geo = new THREE.CylinderGeometry(.11, .11, .9, 8); geo.rotateZ(Math.PI / 2); geo.rotateY(Math.PI / 2);
        const rollers = [];
        for (let i = 0; i < e.count; i++) { const mesh = new THREE.Mesh(geo, m); mesh.position.set(e.x - (e.count - 1) / 2 * e.spacing + i * e.spacing, e.y, e.z); group.add(mesh); rollers.push(mesh); }
        const box = new THREE.Mesh(new THREE.BoxGeometry(.7, .5, .6), mat('#c7a97b')); group.add(box);
        c.ticks.push(t => { for (const r of rollers) r.rotation.x = t * 3; box.position.set(e.x - 3.2 + ((t * .9) % 6.4), e.y + .36, e.z); });
      } else if (e.kind === 'piston') {
        const ram = new THREE.Mesh(new THREE.BoxGeometry(1.4, .5, 1), mat('#8a9893')), rod = new THREE.Mesh(new THREE.CylinderGeometry(.14, .14, 1.6, 8), mat('#5f6b66'));
        group.add(ram); group.add(rod);
        c.ticks.push(t => { const k = (Math.sin(t * 2.2) + 1) / 2; ram.position.set(e.x, e.y - .9 + k * .8, e.z); rod.position.set(e.x, e.y + .2 + k * .8, e.z); });
      } else if (e.kind === 'cog') {
        const g = new THREE.Group(); g.position.set(e.x, e.y, e.z);
        g.add(new THREE.Mesh(new THREE.TorusGeometry(e.r, .14, 6, 14), mat('#5f6b66')));
        for (let i = 0; i < 8; i++) { const tooth = new THREE.Mesh(new THREE.BoxGeometry(.3, .3, .2), mat('#5f6b66')); const a = i / 8 * Math.PI * 2; tooth.position.set(Math.cos(a) * (e.r + .15), Math.sin(a) * (e.r + .15), 0); tooth.rotation.z = a; g.add(tooth); }
        for (let i = 0; i < 3; i++) { const spoke = new THREE.Mesh(new THREE.BoxGeometry(e.r * 2, .12, .1), mat('#5f6b66')); spoke.rotation.z = i / 3 * Math.PI; g.add(spoke); }
        g.rotation.y = Math.PI / 2; group.add(g); c.ticks.push(t => { g.rotation.x = t * .6; });
      } else if (e.kind === 'beacon') {
        const m = new THREE.MeshStandardMaterial({ color: '#ff5a4a', emissive: '#ff3b2b', emissiveIntensity: 1.2 });
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(.22, 8, 6), m); mesh.position.set(e.x, e.y, e.z); group.add(mesh);
        c.ticks.push(t => { const k = .6 + .4 * Math.sin(t * 3); mesh.scale.setScalar(k); m.emissiveIntensity = .4 + k; });
      } else if (e.kind === 'swing') {
        const g = new THREE.Group(); g.position.set(e.x, e.y, e.z);
        const rope = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, 1.2, 5), mat('#8d8470')); rope.position.y = -.6; g.add(rope);
        const tyre = new THREE.Mesh(new THREE.TorusGeometry(.4, .12, 6, 14), mat('#2f3331')); tyre.position.y = -1.4; tyre.rotation.x = Math.PI / 2; g.add(tyre);
        group.add(g); c.ticks.push(t => { g.rotation.z = Math.sin(t * 1.4) * .32; });
      }
    }
    for (const s of c.smoke) {
      const m = new THREE.MeshStandardMaterial({ color: '#dcd8d0', transparent: true, opacity: .5, roughness: 1, depthWrite: false });
      const puffs = [];
      for (let i = 0; i < 7; i++) { const p = new THREE.Mesh(GEO.softSphere, m); group.add(p); puffs.push(p); }
      c.ticks.push(t => { puffs.forEach((p, i) => { const k = ((t * .18 + i / 7) % 1); p.position.set(s.x + Math.sin(i * 2.1 + t * .3) * (.3 + k * 1.5) + k * 1.8, s.y + k * 7.5, s.z + Math.cos(i * 1.7) * .3 + k * .8); p.scale.setScalar(.55 + k * 1.9); }); });
    }
  }
  animate(t) { for (const c of this.chunks.values()) for (const tick of c.ticks) tick(t); }

  makeBuilding(c, x, z, r, id, special = -1) {
    const b = c.batch;
    let w = 12.5 + r() * 7.5, d = 12 + r() * 7.5;
    let floors = 2 + Math.floor(r() * 3), floorH = 2.65 + r() * .55;
    let h = floors * floorH + .4;
    let wall = walls[Math.floor(r() * walls.length)], roofColor = roofs[Math.floor(r() * roofs.length)];
    let roofType = Math.floor(r() * 4);
    if (special === 0) { w = 15 + r() * 3; d = 13 + r() * 3; floors = 2 + Math.floor(r() * 2); h = floors * 3 + .3; wall = ['#c9a684','#d2b795','#c4a083','#d6c1a0'][Math.floor(r()*4)]; roofColor = roofs[Math.floor(r()*3)]; roofType = 0; }
    if (special === 1) { w = 14 + r() * 4; d = 13 + r() * 3; h = 6.5 + r() * 1.5; floors = 2; wall = ['#d8cbb2','#d2c5aa','#cbcbb4','#d6c4a4'][Math.floor(r()*4)]; roofColor = roofs[3+Math.floor(r()*3)]; roofType = 2; }
    if (special === 2) { w = 14 + r() * 3; d = 14 + r() * 3; h = 9 + r() * 2; floors = 3; wall = ['#aeb9b2','#b3c0bc','#b9c0ae','#a8b7ab'][Math.floor(r()*4)]; roofColor = roofs[Math.floor(r()*roofs.length)]; roofType = 3; }
    x += (r() - .5) * 1.6; z += (r() - .5) * 1.6;
    const ridgeX = r() > .5;
    const roofRise = roofType === 0 ? 2.4 + r() * 2 : roofType === 1 ? 2.5 + r() * 1.7 : 0;
    const building = { id, x, z, w, d, h, roofType, roofRise, ridgeX, wall, roofColor, cx: c.cx, cz: c.cz, kind: 'roof' };
    c.buildings.push(building);
    const doorSide = special >= 0 ? (special === 2 ? 1 : 0) : Math.floor(r() * 4);
    const doorU = (r() - .5) * w * .28, doorW = 1.5, doorH = 2.3;
    // The ground floor is a real room: four walls round a doorway, a floor, and the upper
    // storeys as one block above it (its underside is the ceiling).
    const fy = .42, t = .32;
    const body = this.solid(c, x, (floorH + h) / 2, z, w, h - floorH, d, { buildingId: id, building, kind: 'wall' });
    building.body = body;
    if (roofType < 2) c.colliders.push({ shape: 'roof', building, kind: 'roof', climbable: false, minX: x - w / 2 - .55, maxX: x + w / 2 + .55, minY: h, maxY: h + roofRise, minZ: z - d / 2 - .55, maxZ: z + d / 2 + .55 });
    b.box(x, .18, z, w + .35, .45, d + .35, '#b8b6a0');
    b.box(x, (floorH + h) / 2, z, w, h - floorH, d, wall);
    const floorColor = FLOORS[Math.floor(r() * FLOORS.length)];
    b.box(x, fy - .05, z, w - .1, .1, d - .1, floorColor); this.solid(c, x, fy / 2, z, w, fy, d, { climbable: false, kind: 'floor', buildingId: id });
    b.box(x, floorH - .08, z, w - .2, .16, d - .2, '#efe8d6');
    const inside = hollow(this, c, x, z, w, d, 0, floorH, t, { side: doorSide, u: doorU, width: doorW, height: doorH }, wall, { buildingId: id, building });
    for (const sd of [0, 1, 2, 3]) { const a = sd * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)); b.box(x + nx * (sd % 2 ? w / 2 - t - .02 : 0), fy + .06, z + nz * (sd % 2 ? 0 : d / 2 - t - .02), sd % 2 ? .05 : w - 2 * t, .12, sd % 2 ? d - 2 * t : .05, '#efe8d6'); } // skirting
    const rooms = furnishHouse(this, c, inside, fy, floorH, r, doorSide, doorU, wall, id, special === 0 ? 'bakery' : null);
    c.landmarks.push({ id: id + ':in', kind: 'house', x, z, radius: 3, name: `${PLACE_NAMES[rooms[0].kit]} and ${PLACE_NAMES[rooms[1].kit]}`, inside, y: fy, kits: rooms.map(k => k.kit) });
    b.box(x, h - .12, z, w + .38, .25, d + .38, '#e8dfc4');
    const trim = '#ede5cd', glass = '#647e78', shutter = roofColor;
    // Lightly articulated plaster, corner stones, and floor courses.
    for (let f = 1; f < floors; f++) {
      if (r() > .3) b.box(x, f * floorH + .25, z, w + .1, .11, d + .1, '#d7d2b7');
    }
    if (r() > .35) for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (let yy = .7; yy < h - .5; yy += .85) {
      b.box(x + sx * (w / 2 - .06), yy, z + sz * (d / 2 - .06), .56, .37, .56, '#ded6bc');
    }
    for (let side = 0; side < 4; side++) {
      const angle = side * Math.PI / 2, nx = Math.sin(angle), nz = Math.cos(angle), tx = nz, tz = -nx;
      const faceW = side % 2 ? d : w, halfD = side % 2 ? w / 2 : d / 2;
      const cols = Math.max(2, Math.floor(faceW / 3.5));
      for (let f = 0; f < floors; f++) for (let col = 0; col < cols; col++) {
        const u = (col - (cols - 1) / 2) * (faceW / (cols + .45));
        if (side === doorSide && f === 0 && Math.abs(u - doorU) < 2) continue;
        if (r() < .07) continue;
        const wx = x + nx * (halfD + .055) + tx * u, wz = z + nz * (halfD + .055) + tz * u;
        const wy = f * floorH + 1.65, ww = 1.12 + r() * .32, wh = 1.5 + r() * .24;
        const lit = r() > .82;
        b.box(wx, wy, wz, ww + .24, wh + .23, .16, trim, angle);
        b.box(wx + nx * .10, wy, wz + nz * .10, ww, wh, .06, lit ? '#dfcf97' : glass, angle);
        b.box(wx + nx * .15, wy, wz + nz * .15, .065, wh, .06, trim, angle);
        b.box(wx + nx * .15, wy + .05, wz + nz * .15, ww, .065, .06, trim, angle);
        b.box(wx + nx * .13, wy - wh / 2 - .1, wz + nz * .13, ww + .42, .16, .37, '#ded5bb', angle);
        this.solid(c, wx + nx * .13, wy - wh / 2 - .1, wz + nz * .13, side % 2 ? .37 : ww + .42, .16, side % 2 ? ww + .42 : .37, { climbable: false, kind: 'sill' });
        if (r() > .38) for (const sign of [-1, 1]) {
          b.box(wx + tx * sign * (ww / 2 + .3), wy, wz + tz * sign * (ww / 2 + .3), .39, wh + .1, .12, shutter, angle);
          for (let sl = 0; sl < 4; sl++) b.box(wx + tx * sign * (ww / 2 + .3) + nx * .075, wy - .5 + sl * .32, wz + tz * sign * (ww / 2 + .3) + nz * .075, .32, .045, .045, '#a5ad91', angle);
        }
        if (r() > .76) {
          b.box(wx + nx * .28, wy - wh / 2 - .13, wz + nz * .28, ww + .15, .27, .47, '#a78060', angle);
          for (let fl = 0; fl < 4; fl++) {
            const ff = (fl - 1.5) * .29;
            b.ball(wx + tx * ff + nx * .3, wy - wh / 2 + .1, wz + tz * ff + nz * .3, .22, .2, .22, leaves[fl % leaves.length]);
            b.ball(wx + tx * ff + nx * .3, wy - wh / 2 + .25, wz + tz * ff + nz * .3, .105, .1, .105, flowers[Math.floor(r() * flowers.length)]);
          }
        }
      }
    }
    // Every house has an inviting doorway, sometimes a striped canopy.
    {
      const a = doorSide * Math.PI / 2, nx = Math.sin(a), nz = Math.cos(a), tx = nz, tz = -nx;
      const half = doorSide % 2 ? w / 2 : d / 2;
      const dx = x + nx * (half + .1) + tx * doorU, dz = z + nz * (half + .1) + tz * doorU;
      doorway(this, c, x + nx * half, z + nz * half, doorSide, doorU, doorW, doorH, trim, '#5d796a');
      for (const [off, sy, sh, sw] of [[.3, .21, .42, .55], [.8, .1, .2, .5]]) { b.box(dx + nx * off, sy, dz + nz * off, doorSide % 2 ? sw : 2.15, sh, doorSide % 2 ? 2.15 : sw, '#cdc7ae'); this.solid(c, dx + nx * off, sy, dz + nz * off, doorSide % 2 ? sw : 2.15, sh, doorSide % 2 ? 2.15 : sw, { climbable: false, kind: 'step' }); }
      if (r() > .4) {
        const stripe = roofs[Math.floor(r() * roofs.length)];
        for (let s = 0; s < 8; s++) {
          const u = (s - 3.5) * .38;
          b.add(boxGeo, dx + tx * u + nx * .65, 2.85, dz + tz * u + nz * .65, .38, .1, 1.65, s % 2 ? '#eee4c8' : stripe, .17, a);
          b.box(dx + tx * u + nx * 1.43, 2.62, dz + tz * u + nz * 1.43, .38, .28, .1, s % 2 ? '#eee4c8' : stripe, a);
        }
        this.solid(c, dx + nx * .7, 2.88, dz + nz * .7, doorSide % 2 ? 1.5 : 3.04, .1, doorSide % 2 ? 3.04 : 1.5, { climbable: false, kind: 'awning' });
      }
      this.pot(c, dx + tx * 1.45 + nx * .5, dz + tz * 1.45 + nz * .5, r, .7);
    }
    // Balconies are actual jumpable platforms, not painted-on details.
    if (r() > .38 || special === 0) {
      const side = doorSide, a = side * Math.PI / 2, nx = Math.sin(a), nz = Math.cos(a), tx = nz, tz = -nx;
      const half = side % 2 ? w / 2 : d / 2, by = floorH + .38, u = 1.8;
      const bx = x + nx * (half + .6) + tx * u, bz = z + nz * (half + .6) + tz * u;
      const bw = side % 2 ? 1.5 : 3.7, bd = side % 2 ? 3.7 : 1.5;
      b.box(bx, by, bz, bw, .23, bd, '#c6bea1');
      this.solid(c, bx, by, bz, bw, .23, bd, { climbable: false });
      for (const end of [-1, 1]) {
        b.box(bx + nx * .68 + tx * end * 1.65, by + .55, bz + nz * .68 + tz * end * 1.65, side % 2 ? .08 : 3.5, .08, side % 2 ? 3.5 : .08, '#667b68');
        for (let j = 0; j < 7; j++) {
          const v = (j - 3) * .52;
          b.box(bx + nx * .68 + tx * v, by + .3, bz + nz * .68 + tz * v, .055, .55, .055, '#667b68');
        }
      }
      this.pot(c, bx + tx * 1.2, bz + tz * 1.2, r, .5, by + .13);
    }
    if (roofType === 0) this.gable(c, building, roofRise, roofColor, ridgeX);
    else if (roofType === 1) this.hip(c, building, roofRise, roofColor);
    else if (roofType === 2) this.flatRoof(c, building, r);
    else this.steppedRoof(c, building, r);
    // A chimney, climbing ivy, and a stack of crates make each facade distinct.
    if (roofType < 2 && r() > .2) {
      const chx = x + (r() - .5) * w * .55, chz = z + (r() - .5) * d * .55;
      const chy = this.roofHeight(building, chx, chz);
      b.box(chx, chy + .8, chz, 1.05, 1.9, 1.05, '#c4aa8b');
      this.solid(c, chx, (chy - .15 + chy + 1.95) / 2, chz, 1.05, 2.1, 1.05, { kind: 'chimney' });
      b.box(chx, chy + 1.8, chz, 1.3, .22, 1.3, '#ded0b1');
      b.box(chx, chy + 1.93, chz, .7, .04, .7, '#6d7060');
      for (let yy = .3; yy < 1.7; yy += .38) b.box(chx, chy + yy, chz + .532, 1.05, .035, .015, '#b3977a');
    }
    if (r() > .43) {
      const side = Math.floor(r() * 4), a = side * Math.PI / 2, nx = Math.sin(a), nz = Math.cos(a);
      const half = side % 2 ? w / 2 : d / 2, u = (r() - .5) * 5;
      const ix = x + nx * (half + .14) + nz * u, iz = z + nz * (half + .14) - nx * u;
      for (let j = 0; j < h * 3; j++) {
        const yy = .3 + j * .32, spread = Math.sin(j * 1.8) * .42;
        b.ball(ix + nz * spread, yy, iz - nx * spread, .3 + r() * .24, .28, .3 + r() * .24, leaves[j % leaves.length]);
      }
    }
    const crateX = x - w / 2 - .8, crateZ = z + d * .22;
    if (r() > .3) {
      this.crate(c, crateX, .43, crateZ, .86);
      if (r() > .5) this.crate(c, crateX, 1.23, crateZ, .76);
      this.crate(c, crateX - .05, .36, crateZ + 1, .72);
    }
    this.pot(c, x + w / 2 + .7, z + d / 2 - 1, r, .85);
    // Narrow garden strips soften the edges of the plaster.
    for (let j = 0; j < 6; j++) {
      const fx = x - w / 2 + 1 + j * (w - 2) / 5;
      if (Math.abs(fx - (x + doorU)) < 1.5 && doorSide === 0) continue;
      b.ball(fx, .28, z + d / 2 + 1.1, .55, .38, .5, leaves[Math.floor(r() * leaves.length)]);
      if (r() > .4) b.ball(fx, .61, z + d / 2 + 1.1, .14, .13, .14, flowers[Math.floor(r() * flowers.length)]);
    }
  }

  roofHeight(b, x, z) {
    if (x < b.x - b.w / 2 - .55 || x > b.x + b.w / 2 + .55 || z < b.z - b.d / 2 - .55 || z > b.z + b.d / 2 + .55) return -Infinity;
    if (b.roofType === 0) {
      const u = b.ridgeX ? z - b.z : x - b.x, half = (b.ridgeX ? b.d : b.w) / 2 + .55;
      return b.h + b.roofRise * Math.max(0, 1 - Math.abs(u) / half);
    }
    if (b.roofType === 1) {
      const u = 1 - Math.abs(x - b.x) / (b.w / 2 + .55), v = 1 - Math.abs(z - b.z) / (b.d / 2 + .55);
      return b.h + b.roofRise * Math.min(1, Math.max(0, Math.min(u, v) / .84));
    }
    if (b.upper && Math.abs(x - b.upper.x) < b.upper.w / 2 && Math.abs(z - b.upper.z) < b.upper.d / 2) return b.upper.h;
    return b.h;
  }

  gable(c, b, rise, color, ridgeX) {
    const w = b.w / 2 + .55, d = b.d / 2 + .55;
    // Ridge along z by default; for ridgeX the slopes run along z and the ridge along x, so the
    // extents swap before the axes do (otherwise a non-square roof ends up rotated on its body).
    const a = ridgeX ? d : w, e = ridgeX ? w : d;
    let verts = [[-a,0,-e],[a,0,-e],[a,0,e],[-a,0,e],[0,rise,-e],[0,rise,e]];
    if (ridgeX) verts = verts.map(([x,y,z]) => [z,y,x]);
    const tris = [[0,3,5],[0,5,4],[4,5,2],[4,2,1]];
    const p = [];
    for (const tri of tris) for (const i of tri) p.push(...verts[i]);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(p,3)); geo.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(p.length),3)); geo.computeVertexNormals();
    // Double-sided vertex-colored roof surfaces.
    const back = geo.clone(); const ix = back.index; const arr = back.attributes.position.array;
    for (let i = 0; i < arr.length; i += 9) { for (let k = 0; k < 3; k++) { const t = arr[i+k]; arr[i+k] = arr[i+6+k]; arr[i+6+k] = t; } }
    back.computeVertexNormals();
    c.batch.add(geo,b.x,b.h,b.z,1,1,1,color); c.batch.add(back,b.x,b.h,b.z,1,1,1,color);
    geo.dispose(); back.dispose();
    const endColor = b.wall;
    for (const sign of [-1,1]) {
      const ep = ridgeX ? [sign*w,0,-d, sign*w,0,d, sign*w,rise,0] : [-w,0,sign*d,w,0,sign*d,0,rise,sign*d];
      const eg = new THREE.BufferGeometry(); eg.setAttribute('position',new THREE.Float32BufferAttribute(ep,3)); eg.setAttribute('normal',new THREE.Float32BufferAttribute(new Float32Array(9),3)); eg.computeVertexNormals();
      c.batch.add(eg,b.x,b.h-.02,b.z,1,1,1,endColor);
      const rev = eg.clone(); const ar = rev.attributes.position.array; for(let i=0;i<3;i++){const t=ar[i];ar[i]=ar[6+i];ar[6+i]=t;} rev.computeVertexNormals();
      c.batch.add(rev,b.x,b.h-.02,b.z,1,1,1,endColor); eg.dispose(); rev.dispose();
    }
    const slope = Math.atan2(rise, ridgeX ? d : w), length = Math.hypot(rise, ridgeX ? d : w);
    const tileColor = new THREE.Color(color).multiplyScalar(1.075);
    const count = Math.floor((ridgeX ? w : d) * 2 / 1.05);
    for (let j = 0; j <= count; j++) {
      const u = (j / count * 2 - 1) * (ridgeX ? w : d);
      for (const sign of [-1,1]) {
        if (ridgeX) c.batch.add(boxGeo,b.x+u,b.h+rise/2+.045,b.z+sign*d/2,.045,.045,length,tileColor,sign*slope,0,0);
        else c.batch.add(boxGeo,b.x+sign*w/2,b.h+rise/2+.045,b.z+u,length,.045,.045,tileColor,0,0,-sign*slope);
      }
    }
    if (ridgeX) c.batch.cyl(b.x,b.h+rise+.04,b.z,.13,b.w+1.25,color,0,Math.PI/2);
    else c.batch.cyl(b.x,b.h+rise+.04,b.z,.13,b.d+1.25,color,Math.PI/2);
  }

  hip(c, b, rise, color) {
    const w = b.w/2+.55,d = b.d/2+.55, tw = w*.16,td=d*.16;
    const v = [[-w,0,-d],[w,0,-d],[w,0,d],[-w,0,d],[-tw,rise,-td],[tw,rise,-td],[tw,rise,td],[-tw,rise,td]];
    const faces = [[0,4,5],[0,5,1],[1,5,6],[1,6,2],[2,6,7],[2,7,3],[3,7,4],[3,4,0],[4,7,6],[4,6,5]];
    const p=[]; for(const f of faces) for(const i of f)p.push(...v[i]);
    const g = new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(new Float32Array(p.length),3));g.computeVertexNormals();
    c.batch.add(g,b.x,b.h,b.z,1,1,1,color);
    const rev=g.clone();const a=rev.attributes.position.array;for(let i=0;i<a.length;i+=9)for(let k=0;k<3;k++){const t=a[i+k];a[i+k]=a[i+6+k];a[i+6+k]=t;}rev.computeVertexNormals();c.batch.add(rev,b.x,b.h,b.z,1,1,1,color);g.dispose();rev.dispose();
    for(const sx of [-1,1])for(const sz of [-1,1])c.batch.beam([b.x+sx*w,b.h,b.z+sz*d],[b.x+sx*tw,b.h+rise+.03,b.z+sz*td],.095,'#a89779');
  }

  flatRoof(c,b,r) {
    const {x,z,w,d,h}=b, color='#d9d3b8';
    c.batch.box(x,h+.04,z,w-.3,.1,d-.3,'#b9bca3');
    for(const s of [-1,1]) {
      c.batch.box(x+s*(w/2-.12),h+.32,z,.26,.6,d,color);
      c.batch.box(x,h+.32,z+s*(d/2-.12),w,.6,.26,color);
      this.solid(c,x+s*(w/2-.12),h+.3,z,.26,.6,d,{climbable:false});
      this.solid(c,x,h+.3,z+s*(d/2-.12),w,.6,.26,{climbable:false});
    }
    if(r()>.35){
      const px=x-w*.22,pz=z-d*.2, pw=4.5,pd=3.6;
      for(const sx of [-1,1])for(const sz of [-1,1]){c.batch.box(px+sx*pw/2,h+1.35,pz+sz*pd/2,.16,2.7,.16,'#a39370');this.solid(c,px+sx*pw/2,h+1.35,pz+sz*pd/2,.16,2.7,.16,{kind:'post'});}
      for(let j=0;j<7;j++)c.batch.box(px-pw/2+j*pw/6,h+2.75,pz,.14,.18,pd+.5,'#b4a17b');
      this.solid(c,px,h+2.78,pz,pw+.14,.18,pd+.5,{climbable:false,kind:'pergola'});
      this.bench(c,px,pz,0,h);
      this.pot(c,px+pw/2+.6,pz+pd/2,r,.8,h);
    }
    // Water butts, herb planters, and a little laundry on the warmer roofs.
    const tx=x+w*.28,tz=z-d*.26;
    c.batch.add(taperedGeo,tx,h+.75,tz,.75,1.5,.75,'#8a9c8b');
    c.batch.add(torusGeo,tx,h+1.3,tz,.73,.73,.73,'#6d8273',Math.PI/2);
    this.solid(c,tx,h+.75,tz,1.4,1.5,1.4,{climbable:false});
    for(let j=0;j<3;j++)this.pot(c,x-w*.3+j*1.4,z+d*.31,r,.6,h);
    if(r()>.45){
      const lz=z+d*.16;
      c.batch.beam([x-3,h+1.8,lz],[x+3,h+1.8,lz],.025,'#9b9479');
      for(const s of [-1,1])c.batch.box(x+s*3,h+.9,lz,.07,1.8,.07,'#a29475');
      for(let j=0;j<4;j++)c.batch.box(x-2+j*1.25,h+1.28,lz,.85,1.02,.035,['#e9dfc3','#b7c7bc','#d5af94','#e4d6ad'][j],.06);
    }
  }

  steppedRoof(c,b,r) {
    const w=b.w*.64,d=b.d*.65,h=2.8+r()*1.5,x=b.x-b.w*.12,z=b.z-b.d*.1;
    c.batch.box(x,b.h+h/2,z,w,h,d,b.wall);
    this.solid(c,x,b.h+(h+.21)/2,z,w,h+.21,d,{buildingId:b.id,building:b,kind:'wall'});
    c.batch.box(x,b.h+h,z,w+.35,.25,d+.35,'#e4dac0');
    c.batch.box(x,b.h+h+.15,z,w-.3,.12,d-.3,'#aeb69b');
    for(const s of [-1,1]){
      c.batch.box(x+s*w/2,b.h+1.5,z,.12,1.5,1.5,'#ece2c7');
      c.batch.box(x+s*(w/2+.08),b.h+1.5,z,.05,1.25,1.25,'#71897d');
    }
    for(let j=0;j<3;j++)this.pot(c,b.x+b.w*.32,b.z-d/2+j*1.7,r,.7,b.h);
    b.upper = {x,z,w,d,h:b.h+h+.21};
  }

  crate(c,x,y,z,size){
    this.solid(c,x,y,z,size,size,size,{climbable:false});
    c.batch.box(x,y,z,size,size,size,'#b99b70');
    for(const s of [-1,1]){
      c.batch.box(x+s*size*.42,y,z+size*.51,size*.1,size,.055,'#d0b18a');
      c.batch.box(x,y+s*size*.42,z+size*.51,size,size*.1,.055,'#d0b18a');
      c.batch.box(x+size*.51,y,z+s*size*.42,.055,size,size*.1,'#d0b18a');
    }
    c.batch.add(boxGeo,x,y,z+size*.53,size*.1,size*1.1,.055,'#c9aa80',0,0,-.75);
  }

  pot(c,x,z,r,scale=1,y=0){
    this.cylinderSolid(c,x,y,z,.5*scale,1.3*scale,{kind:'pot'});
    c.batch.add(potGeo,x,y+.35*scale,z,.46*scale,.7*scale,.46*scale,'#ba8b68');
    c.batch.add(cylinderGeo,x,y+.69*scale,z,.48*scale,.11*scale,.48*scale,'#caa17d');
    c.batch.ball(x,y+1.02*scale,z,.55*scale,.55*scale,.55*scale,leaves[Math.floor(r()*leaves.length)]);
    if(r()>.5)c.batch.ball(x+.15*scale,y+1.4*scale,z,.16*scale,.13*scale,.16*scale,flowers[Math.floor(r()*flowers.length)]);
  }

  tree(c,x,z,r,scale=1,y=0){
    const h=(3.9+r()*1.4)*Math.pow(scale,.55), color=leaves[Math.floor(r()*leaves.length)];
    c.batch.add(taperedGeo,x,y+h*.43,z,.27*scale,h*.86,.27*scale,'#9b8965');
    const tree={x,z,canopies:[]};
    const crown=(cx,cy,cz,rx,ry,rz)=>tree.canopies.push(this.ellipsoidSolid(c,cx,cy,cz,rx,ry,rz,{tree,kind:'tree'}));
    const kind=country.trees==='pine'?(r()>.15?'pine':'round'):country.trees==='palm'?(r()>.3?'palm':'round'):r()>.82?'pine':'round';
    if(kind==='palm'){
      // Tall curved trunk, a fan of fronds, two coconuts.
      const lean=(r()-.5)*.5, th=h*1.35, tx=x+Math.sin(lean)*th*.5, tz=z;
      c.batch.beam([x,y,z],[tx,y+th,tz],.22*scale,'#9b8965');
      for(let k=0;k<4;k++)c.batch.add(torusGeo,x+Math.sin(lean)*th*(k+.5)/4.5,y+th*(k+.5)/4.5,z,.26*scale,.26*scale,.26*scale,'#8a7a5a',Math.PI/2);
      for(let k=0;k<8;k++){const a=k*TAU/8+r()*.4,fl=2.6*scale,droop=.55+r()*.3;const cx=tx+Math.cos(a)*fl*.45,cz=tz+Math.sin(a)*fl*.45;c.batch.add(boxGeo,cx,y+th-.25*scale-Math.sin(droop)*fl*.25,cz,fl*.9,.08*scale,.55*scale,color,0,-a,0);c.batch.add(boxGeo,cx+Math.cos(a)*fl*.3,y+th-.6*scale-Math.sin(droop)*fl*.4,cz+Math.sin(a)*fl*.3,fl*.5,.07*scale,.4*scale,color,0,-a,droop*Math.sign(Math.cos(a)||1)*0);}
      c.batch.ball(tx,y+th-.1*scale,tz,.35*scale,.3*scale,.35*scale,'#6f8a52');
      c.batch.ball(tx+.3*scale,y+th-.4*scale,tz,.17*scale,.15*scale,.17*scale,'#8a6a4c');c.batch.ball(tx-.2*scale,y+th-.45*scale,tz+.25*scale,.17*scale,.15*scale,.17*scale,'#8a6a4c');
      crown(tx,y+th-.1*scale,tz,1.9*scale,.7*scale,1.9*scale);
      this.cylinderSolid(c,(x+tx)/2,y,z,.26*scale,th-.3,{climbable:true,tree,kind:'trunk'});
      return;
    }
    if(kind==='pine'){
      for(let j=0;j<3;j++){c.batch.add(coneGeo,x,y+h*.6+j*h*.23,z,(1.5-j*.28)*scale,h*.65,(1.5-j*.28)*scale,color);if(country.snow)c.batch.add(coneGeo,x,y+h*.6+j*h*.23+h*.07,z,(1.5-j*.28)*scale*.9,h*.52,(1.5-j*.28)*scale*.9,'#f0f3f6');}
      crown(x,y+h*.78,z,1.05*scale,h*.42,1.05*scale);
    }else{
      c.batch.beam([x,y+h*.5,z],[x+.8*scale,y+h*.88,z+.3*scale],.13*scale,'#9b8965');
      c.batch.ball(x,y+h,z,2.15*scale,2.1*scale,1.95*scale,color,true);
      c.batch.ball(x-1.15*scale,y+h*.9,z+.3*scale,1.45*scale,1.35*scale,1.5*scale,color);
      c.batch.ball(x+.95*scale,y+h*1.07,z-.45*scale,1.45*scale,1.4*scale,1.45*scale,leaves[(leaves.indexOf(color)+1)%leaves.length]);
      crown(x,y+h,z,2.15*scale,2.1*scale,1.95*scale);
      crown(x-1.15*scale,y+h*.9,z+.3*scale,1.45*scale,1.35*scale,1.5*scale);
      crown(x+.95*scale,y+h*1.07,z-.45*scale,1.45*scale,1.4*scale,1.45*scale);
    }
    const top=Math.max(...tree.canopies.map(k=>k.y+k.ry));
    this.cylinderSolid(c,x,y,z,.27*scale,top-.05-y,{climbable:true,tree,kind:'trunk'});
  }

  bench(c,x,z,angle=0,y=0){
    const b=c.batch,co=Math.cos(angle),si=Math.sin(angle);
    const at=(u,v)=>[x+u*co+v*si,z-u*si+v*co];
    for(let j=0;j<4;j++){const p=at(0,(j-1.5)*.18);b.box(p[0],y+.67,p[1],2.6,.12,.15,'#b49b73',angle);}
    for(const s of [-1,1]){
      const p=at(s*1.02,0);b.box(p[0],y+.34,p[1],.13,.65,.65,'#73816a',angle);
      b.box(p[0],y+.95,p[1]+.3,.12,1.1,.12,'#73816a',angle);
    }
    for(let j=0;j<3;j++){const p=at(0,.32);b.box(p[0],y+.9+j*.19,p[1],2.6,.13,.1,'#b49b73',angle);}
    this.solid(c,x,y+.64,z,Math.abs(co)*2.6+Math.abs(si)*.75,.18,Math.abs(si)*2.6+Math.abs(co)*.75,{climbable:false,kind:'bench'});
  }

  lamp(c,x,z){
    this.cylinderSolid(c,x,0,z,.14,3.83,{climbable:true,kind:'lamp'});
    c.batch.add(taperedGeo,x,1.7,z,.11,3.4,.11,'#667b63');
    c.batch.cyl(x,.15,z,.25,.3,'#78866b');
    c.batch.box(x,3.5,z,.46,.65,.46,'#eee0ae');
    c.batch.add(coneGeo,x,3.94,z,.43,.36,.43,'#657b62');
    for(const sx of [-1,1])for(const sz of [-1,1])c.batch.box(x+sx*.23,3.5,z+sz*.23,.045,.7,.045,'#667b63');
  }

  bunting(c,x1,z1,x2,z2,y){
    for(const [x,z] of [[x1,z1],[x2,z2]]){c.batch.add(taperedGeo,x,y/2,z,.09,y,.09,'#a09270');c.batch.ball(x,y+.08,z,.13,.13,.13,'#b4a37d');this.cylinderSolid(c,x,0,z,.1,y+.2,{kind:'pole',walkable:false});}
    let prev=[x1,y,z1];
    for(let j=1;j<=14;j++){
      const t=j/14,x=x1+(x2-x1)*t,z=z1+(z2-z1)*t,yy=y-Math.sin(t*Math.PI)*1.2;
      c.batch.beam(prev,[x,yy,z],.024,'#a39778');prev=[x,yy,z];
      if(j%2===0){
        const p=[x,yy-.04,z,x+.52,yy-.08,z,x+.22,yy-.75,z];
        for(const reverse of [false,true]){
          const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(reverse?[...p.slice(6,9),...p.slice(3,6),...p.slice(0,3)]:p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(new Float32Array(9),3));g.computeVertexNormals();
          c.batch.add(g,0,0,0,1,1,1,['#c88f6e','#e1c780','#91a991','#c5b2a0'][j/2%4]);g.dispose();
        }
      }
    }
  }

  makePark(c,x,z,r,index){
    const b=c.batch, id=`park:${c.key}:${index}`;
    c.parks.push({id,x,z,r:10,cx:c.cx,cz:c.cz});
    b.box(x,.025,z,24,.1,24,country.lawn);
    b.box(x,.085,z,3.2,.08,25,'#c2b79d');
    b.box(x,.086,z,25,.08,3.2,'#c2b79d');
    const px=x+4.5,pz=z-4.3,pr=3.4+r()*1.2;
    b.cyl(px,.01,pz,pr,.1,'#8ebbb0');
    b.cyl(px,.047,pz,pr-.25,.03,'#a1c9ba');
    c.water.push({x:px,z:pz,r:pr});
    for(let j=0;j<18;j++){
      const a=j/18*TAU,xx=px+Math.cos(a)*(pr+.13),zz=pz+Math.sin(a)*(pr+.13);
      b.ball(xx,.21,zz,.52,.28,.45,j%3?'#c5c6a8':'#d7d3b6');
      this.solid(c,xx,.2,zz,.7,.4,.65,{climbable:false});
    }
    for(let j=0;j<5;j++){
      const a=r()*TAU,rr=r()*pr*.75,xx=px+Math.cos(a)*rr,zz=pz+Math.sin(a)*rr;
      b.cyl(xx,.14,zz,.35,.025,'#82a67c');
      if(j%2===0)b.ball(xx,.24,zz,.12,.12,.12,'#e5c4b0');
    }
    // A small arched footbridge over the pond.
    for(let j=0;j<11;j++){
      const t=j/10,zz=pz-pr+.3+t*(pr*2-.6),yy=.22+Math.sin(t*Math.PI)*.42;
      b.box(px,yy,zz,1.6,.15,.58,'#c3ac83');
      this.solid(c,px,yy,zz,1.6,.15,.58,{climbable:false});
    }
    for(const s of [-1,1])for(let j=0;j<4;j++){
      const t=j/3,zz=pz-pr+.4+t*(pr*2-.8),yy=.55+Math.sin(t*Math.PI)*.42;
      b.box(px+s*.8,yy,zz,.08,.75,.08,'#a79570');
    }
    this.tree(c,x-6,z-6,r,1.35);
    this.tree(c,x+7,z+7,r,1.1);
    this.tree(c,x-7,z+6,r,.9);
    this.bench(c,x-4.5,z+2.2,Math.PI/2);
    this.bench(c,x+3,z+7,0);
    this.lamp(c,x-2.3,z+8.5);
    if(country.snow){ // a snowman, because somebody always builds one
      const sx=x-7,sz=z+6,b=c.batch;b.ball(sx,.55,sz,.75,.6,.75,'#f4f6f8');b.ball(sx,1.4,sz,.55,.5,.55,'#f4f6f8');b.ball(sx,2.1,sz,.4,.38,.4,'#f4f6f8');
      b.add(coneGeo,sx,2.1,sz+.5,.08,.4,.08,'#e2733f',Math.PI/2);for(const e of[-.14,.14])b.ball(sx+e,2.2,sz+.36,.04,.04,.04,'#2f3331');for(let k=0;k<3;k++)b.ball(sx,1.2+k*.22,sz+.52,.04,.04,.04,'#2f3331');
      b.cyl(sx,2.5,sz,.3,.08,'#2f3331');b.cyl(sx,2.75,sz,.22,.45,'#2f3331');b.box(sx,1.75,sz,1.1,.14,.3,'#c9524a',.3);for(const e of[-1,1])b.beam([sx+e*.5,1.45,sz],[sx+e*1.2,1.9,sz+.2],.03,'#6d5a44');
      this.cylinderSolid(c,sx,0,sz,.7,2.3,{climbable:true,kind:'snowman'});
    }
    for(let j=0;j<26;j++){
      const fx=x-9+r()*5,fz=z-1+r()*10;
      b.ball(fx,.2,fz,.18,.23,.18,'#86a269');
      b.ball(fx,.42,fz,.14,.12,.14,flowers[Math.floor(r()*flowers.length)]);
    }
    for(let j=0;j<6;j++){
      b.box(x-10+j*1.6,.5,z+11,1.35,.85,.75,'#8fa873');
      this.solid(c,x-10+j*1.6,.43,z+11,1.35,.86,.75,{climbable:false});
    }
  }

  cars(c,rng){
    // Parked hatchbacks along the kerb give the streets a sense of scale (3.9 m long, 1.5 m tall).
    const ox=c.cx*CHUNK,oz=c.cz*CHUNK,palette=['#b7c4c9','#c9b8a2','#8a9aa6','#a8b59a','#d2c7b4','#7c7f86','#b48c7a','#9fb3a0'];
    for(const s of [-1,1])for(const axis of ['x','z']){
      const count=rng()<.25?0:1+Math.floor(rng()*2.6);
      let u=-24+rng()*6;
      for(let i=0;i<count&&u<23;i++){
        const alongZ=axis==='x';
        const x=alongZ?ox+s*30.15:ox+u,z=alongZ?oz+u:oz+s*30.15;
        this.car(c,x,z,alongZ,palette[Math.floor(rng()*palette.length)],rng);
        u+=5.2+rng()*7;
      }
    }
  }

  car(c,x,z,alongZ,color,r){
    const b=c.batch,L=3.9,W=1.7,ry=alongZ?0:Math.PI/2;
    const dims=(l,w)=>alongZ?[w,l]:[l,w];
    const [bw,bd]=dims(L,W),[cw,cd]=dims(L*.52,W-.22);
    const cabinOffset=(r()-.5)*.3;
    const cx=alongZ?x:x+cabinOffset,cz=alongZ?z+cabinOffset:z;
    b.box(x,.62,z,bw,.62,bd,color);
    b.box(x,.36,z,bw-.1,.14,bd-.1,'#4f5551');
    b.box(cx,1.2,cz,cw,.54,cd,color);
    const glass='#5f7579';
    for(const side of [-1,1]){
      if(alongZ)b.box(cx+side*(cd/2-.0),1.23,cz,.05,.36,cw-.5,glass);else b.box(cx,1.23,cz+side*(cd/2),cw-.5,.36,.05,glass);
      const [fw,fd]=dims(.08,W-.5);
      if(alongZ)b.box(cx,1.23,cz+side*cw/2,fd,.4,fw,glass);else b.box(cx+side*cw/2,1.23,cz,fw,.4,fd,glass);
      const [lw,ld]=dims(.08,.3);
      for(const e of [-1,1]){const lx=alongZ?x+side*.55:x+e*(L/2),lz=alongZ?z+e*(L/2):z+side*.55;b.box(lx,.68,lz,lw,.16,ld,e===1?'#ecd9a6':'#b8604f');}
    }
    for(const sx of [-1,1])for(const sz of [-1,1]){
      const wx=alongZ?x+sx*(W/2-.02):x+sz*1.25,wz=alongZ?z+sz*1.25:z+sx*(W/2-.02);
      if(alongZ)b.cyl(wx,.33,wz,.33,.24,'#30302c',0,Math.PI/2);else b.cyl(wx,.33,wz,.33,.24,'#30302c',Math.PI/2,0);
      if(alongZ)b.cyl(wx+sx*.02,.33,wz,.17,.26,'#a9aba2',0,Math.PI/2);else b.cyl(wx,.33,wz+sx*.02,.17,.26,'#a9aba2',Math.PI/2,0);
    }
    this.solid(c,x,.48,z,bw,.95,bd,{kind:'car'});
    this.solid(c,cx,1.22,cz,cw,.54,cd,{kind:'car'});
  }

  makeSpawn(c,r){
    const b=c.batch;
    b.cyl(0,.045,3,6.5,.1,'#c2b79d');
    b.cyl(0,.105,3,5.8,.025,'#cfc4aa');
    for(let j=0;j<22;j++){
      const a=j/22*TAU;
      b.box(Math.cos(a)*6.1,.13,3+Math.sin(a)*6.1,.65,.035,.38,'#cbc8aa',-a);
    }
    // A tiny dry fountain leaves the center of the square open for paws.
    const fx=-3.8,fz=4.5;
    b.cyl(fx,.25,fz,1.35,.45,'#c4c5a8');
    b.cyl(fx,.49,fz,1.15,.08,'#a8bca6');
    b.add(taperedGeo,fx,.95,fz,.25,1.1,.25,'#c9c9ad');
    b.cyl(fx,1.48,fz,.7,.2,'#d7d3b6');
    b.ball(fx,1.67,fz,.18,.2,.18,'#c1c5a5');
    // Colliders follow the fountain's real shape: basin rim to sit on, slim column, and a top dish to leap onto.
    this.cylinderSolid(c,fx,0,fz,1.35,.53,{climbable:false,kind:'fountain'});
    this.cylinderSolid(c,fx,.53,fz,.27,.85,{climbable:false,kind:'fountain'});
    this.cylinderSolid(c,fx,1.38,fz,.7,.2,{climbable:false,kind:'fountain'});
    this.bench(c,3.8,6.5,-.4);
    this.pot(c,4.5,1,r,1);
    this.tree(c,-7.5,-4.5,r,.9);
    this.bunting(c,-12,-6,12,-6,6.2);
    for(let j=0;j<8;j++){
      const a=r()*TAU,rr=7+r()*2;
      b.ball(Math.cos(a)*rr,.16,3+Math.sin(a)*rr,.2,.18,.2,'#91ab70');
      b.ball(Math.cos(a)*rr,.34,3+Math.sin(a)*rr,.12,.12,.12,flowers[j%flowers.length]);
    }
  }

  inWater(x,z){return this.water.find(w=>(x-w.x)**2+(z-w.z)**2<w.r*w.r);}
  // Height of the walkable ground surface: pavements, roads, footpaths, park lawns and paths, the square.
  // Keeps paws on top of the paving instead of inside it.
  groundHeight(x,z){
    for(const g of this.grounds) if(x>=g.minX&&x<=g.maxX&&z>=g.minZ&&z<=g.maxZ) return g.y;
    const lx=x-Math.round(x/CHUNK)*CHUNK, lz=z-Math.round(z/CHUNK)*CHUNK, ax=Math.abs(lx), az=Math.abs(lz);
    const pave=v=>Math.abs(v-28.45)<.525||Math.abs(v-35.45)<.525;
    if((pave(ax)&&az<=31.5)||(pave(az)&&ax<=31.5))return .13;
    let h=0;
    for(const p of this.parks){
      const dx=Math.abs(x-p.x), dz=Math.abs(z-p.z);
      if(dx<12&&dz<12){ if((dx<1.6&&dz<12.5)||(dz<1.6&&dx<12.5))return .125; h=.075; break; }
    }
    if(h)return h;
    if(Math.abs(x)<36&&Math.abs(z)<36){ const d=Math.hypot(x,z-3); if(d<5.8)return .1175; if(d<6.5)return .095; }
    if((ax<1.5&&az<29)||(az<1.5&&ax<29))return .05;
    if((ax>29&&ax<=36)||(az>29&&az<=36))return .045;
    return 0;
  }
}
