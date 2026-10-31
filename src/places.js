import * as THREE from 'three';
import { GEO } from './world.js';
import { hollow, doorway, KITS, PLACE_NAMES, person as roomPerson } from './rooms.js';

// Landmark lots. Each function fills one 24 x 24 m lot centred on (x, z) in chunk `c`.
// They draw with c.batch (merged static geometry), register colliders through the World helpers,
// and leave behind jobs (standing NPCs), extras (animated meshes), grounds (walkable paving
// heights) and landmarks (places the cat can discover).

const TAU = Math.PI * 2;
const Z = new THREE.Vector3(0, 0, 1), Y = new THREE.Vector3(0, 1, 0), X = new THREE.Vector3(1, 0, 0);
const pick = (r, list) => list[Math.floor(r() * list.length)];

// ---- shared bits -----------------------------------------------------------------------------

// A walkable slope: short segments so the cat climbs it as a run of shallow steps.
export function ramp(W, c, x1, y1, z1, x2, y2, z2, width, thick, color) {
  const a = new THREE.Vector3(x1, y1, z1), b = new THREE.Vector3(x2, y2, z2), delta = b.clone().sub(a), len = delta.length();
  // Yaw first, then pitch about the ramp's own width axis, so the treads stay level across.
  const yaw = Math.atan2(delta.x, delta.z), pitch = Math.atan2(delta.y, Math.hypot(delta.x, delta.z));
  const seg = Math.min(.42, .12 / Math.max(.05, Math.abs(Math.sin(pitch)))), n = Math.max(2, Math.ceil(len / seg)), q = new THREE.Quaternion().setFromAxisAngle(Y, yaw).multiply(new THREE.Quaternion().setFromAxisAngle(X, -pitch)), e = new THREE.Euler().setFromQuaternion(q);
  for (let i = 0; i < n; i++) {
    const t = (i + .5) / n, p = a.clone().lerp(b, t);
    c.batch.add(GEO.box, p.x, p.y, p.z, width, thick, len / n + .02, color, e.x, e.y, e.z);
  }
}
export function ladder(W, c, x, z, y0, y1, facing, color = '#8d8470') {
  const nx = Math.sin(facing), nz = Math.cos(facing), tx = nz, tz = -nx;
  for (const s of [-1, 1]) c.batch.box(x + tx * s * .22, (y0 + y1) / 2, z + tz * s * .22, .06 + Math.abs(tx) * .0, y1 - y0, .06, color, facing);
  for (let y = y0 + .3; y < y1; y += .3) { c.batch.box(x, y, z, Math.abs(tx) * .5 + Math.abs(nx) * .06, .05, Math.abs(tz) * .5 + Math.abs(nz) * .06, color); }
  W.solid(c, x, (y0 + y1) / 2, z, Math.abs(tx) * .5 + .08, y1 - y0, Math.abs(tz) * .5 + .08, { climbable: true, kind: 'ladder' });
}
function flag(W, c, x, z, y, color) {
  c.batch.cyl(x, y + 1.1, z, .035, 2.2, '#9a9078');
  c.batch.box(x + .32, y + 1.95, z, .6, .36, .02, color);
  W.cylinderSolid(c, x, y, z, .05, 2.2, { kind: 'pole', walkable: false });
}
function sign(W, c, x, y, z, w, h, angle, colour, plate = '#f3ead6') {
  c.batch.box(x, y, z, w, h, .12, colour, angle);
  const nx = Math.sin(angle), nz = Math.cos(angle);
  c.batch.box(x + nx * .07, y, z + nz * .07, w * .78, h * .5, .02, plate, angle);
}
function person(c, x, z, heading, role, y = 0, pose = 'stand') { c.jobs.push({ x, z, y, heading, role, pose }); }
function paving(c, x, z, w, d, y) { c.grounds.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, y }); }

// ---- market square ---------------------------------------------------------------------------

export function makeMarket(W, c, x, z, r, id) {
  const b = c.batch;
  b.box(x, .03, z, 24, .12, 24, '#cdbf9f'); paving(c, x, z, 24, 24, .09);
  for (let i = 0; i < 60; i++) b.box(x + (r() - .5) * 22, .092, z + (r() - .5) * 22, .5 + r() * .6, .012, .4 + r() * .4, r() > .5 ? '#c2b391' : '#d8caa8', (r() - .5) * .3);
  c.landmarks.push({ id, kind: 'market', x, z, radius: 11, name: 'the market square' });
  // Bandstand in the middle: eight posts, a conical roof and a stage the cat can hop onto.
  b.cyl(x, .28, z, 3.4, .5, '#d9cfae'); b.cyl(x, .55, z, 3.1, .06, '#b8a98a');
  W.cylinderSolid(c, x, 0, z, 3.4, .55, { climbable: false, kind: 'stage' });
  for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; b.cyl(x + Math.cos(a) * 2.8, 2.1, z + Math.sin(a) * 2.8, .09, 3.1, '#f1e8d2'); W.cylinderSolid(c, x + Math.cos(a) * 2.8, .55, z + Math.sin(a) * 2.8, .1, 3.1, { kind: 'post', walkable: false }); }
  b.add(GEO.cone, x, 4.25, z, 3.9, 1.5, 3.9, '#8c6a52'); b.cyl(x, 3.55, z, 3.75, .18, '#f1e8d2');
  W.cylinderSolid(c, x, 3.45, z, 3.75, .3, { climbable: false, kind: 'bandstand' });
  b.ball(x, 5.05, z, .2, .2, .2, '#d7b36a');
  for (let i = 0; i < 8; i++) { const a = (i + .5) / 8 * TAU; b.box(x + Math.cos(a) * 2.8, 1.05, z + Math.sin(a) * 2.8, 1.9, .08, .08, '#f1e8d2', -a + Math.PI / 2); for (let k = -3; k <= 3; k++) b.box(x + Math.cos(a) * 2.8 + Math.sin(a) * k * .27, .8, z + Math.sin(a) * 2.8 - Math.cos(a) * k * .27, .05, .5, .05, '#f1e8d2'); }
  // Stalls: striped awnings, trestle tables, goods on top and a stallholder behind each.
  const goods = [['#d9544f', '#e0603b', '#c84b3f'], ['#e9c04b', '#f0cf6a', '#d8a93c'], ['#7eaa5c', '#93b86b', '#6f9a4f'], ['#c7b2d9', '#b29ac7', '#d6c5e3'], ['#efe5cf', '#e4d7bb', '#f5ecd8'], ['#e39a6e', '#d98a5a', '#ea9f78']];
  const names = ['fruit', 'bread', 'veg', 'flowers', 'cheese', 'spices'];
  const stripes = [['#c9524a', '#f3ead6'], ['#4f7f96', '#f3ead6'], ['#6f9a4f', '#f3ead6'], ['#d7a048', '#f3ead6'], ['#8c6a9c', '#f3ead6'], ['#c9524a', '#e9c04b']];
  const spots = [[-8, -8, 0], [0, -8.5, 0], [8, -8, 0], [-8, 8, Math.PI], [0, 8.5, Math.PI], [8, 8, Math.PI], [-9, 0, Math.PI / 2], [9, 0, -Math.PI / 2]];
  spots.forEach(([sx, sz, a], i) => {
    const px = x + sx, pz = z + sz, nx = Math.sin(a), nz = Math.cos(a), tx = nz, tz = -nx, g = goods[i % goods.length], s = stripes[i % stripes.length];
    const at = (u, v) => [px + tx * u + nx * v, pz + tz * u + nz * v];
    // table
    const [cx, cz] = at(0, 0); b.box(cx, .78, cz, 2.6, .1, 1.1, '#b89a70', a); b.box(cx, .4, cz, 2.3, .66, .6, '#e3dcc6', a);
    W.solid(c, cx, .42, cz, Math.abs(tx) * 2.6 + Math.abs(nx) * 1.1, .84, Math.abs(tz) * 2.6 + Math.abs(nz) * 1.1, { climbable: false, kind: 'stall' });
    for (const u of [-1.2, 1.2]) for (const v of [-.5, .5]) { const [qx, qz] = at(u, v); b.box(qx, 1.45, qz, .08, 2.9, .08, '#8d7f67'); }
    // awning: two slanted halves with stripes
    for (let k = 0; k < 6; k++) { const u = -1.25 + k * .5 + .25; const [qx, qz] = at(u, -.25); b.add(GEO.box, qx, 2.95, qz, .5, .06, 1.75, s[k % 2], -.32 * (a === 0 ? 1 : a === Math.PI ? -1 : 0), a, .32 * (Math.abs(a) === Math.PI / 2 ? (a > 0 ? 1 : -1) : 0)); }
    const [bx, bz] = at(0, .55); b.box(bx, 2.72, bz, 2.7, .2, .1, s[0], a);
    W.solid(c, cx, 2.9, cz, Math.abs(tx) * 2.7 + Math.abs(nx) * 1.9, .2, Math.abs(tz) * 2.7 + Math.abs(nz) * 1.9, { climbable: false, kind: 'awning' });
    // goods: crates with heaps of colour
    for (const u of [-.75, 0, .75]) { const [qx, qz] = at(u, -.1); b.box(qx, .93, qz, .62, .2, .5, '#a78a62', a); for (let m = 0; m < 5; m++) b.ball(qx + (r() - .5) * .35, 1.08, qz + (r() - .5) * .25, .11, .1, .11, g[m % 3]); }
    // stallholder behind the table, facing the square
    const [hx, hz] = at(0, -.95); person(c, hx, hz, a, 'vendor:' + names[i % names.length]);
    const [fx, fz] = at(-1.2, .5); b.box(fx, 1.4, fz, .9, .5, .05, s[0], a); b.box(fx + nx * .03, 1.4, fz + nz * .03, .7, .3, .02, '#f3ead6', a);
  });
  // Corner planters, a shop row along the far side, and a few shoppers.
  for (const [sx, sz] of [[-11, -11], [11, -11], [-11, 11], [11, 11]]) W.pot(c, x + sx, z + sz, r, 1.1);
  W.bench(c, x - 5, z + 1.5, Math.PI / 2); W.bench(c, x + 5, z - 1.5, -Math.PI / 2);
  W.lamp(c, x - 5, z - 5); W.lamp(c, x + 5, z + 5);
  person(c, x - 3, z - 4, r() * TAU, 'shopper'); person(c, x + 4, z + 3.5, r() * TAU, 'shopper'); person(c, x + 3.4, z - 5.5, r() * TAU, 'shopper');
  W.bunting(c, x - 11, z - 11, x + 11, z + 11, 5.4); W.bunting(c, x + 11, z - 11, x - 11, z + 11, 5.6);
}

// ---- the works -------------------------------------------------------------------------------

export function makeFactory(W, c, x, z, r, id) {
  const b = c.batch, brick = pick(r, ['#9a6b55', '#a8735a', '#8f6a5a', '#b07a60']), w = 17, d = 11, h = 6.5;
  const fx = x - 2.5, fz = z - 4;
  b.box(x, .02, z, 24, .1, 24, '#b6ad99'); paving(c, x, z, 24, 24, .07);
  c.landmarks.push({ id, kind: 'works', x, z, radius: 12, name: 'the old works' });
  // Main shed with a sawtooth roof: each tooth is a short stair the cat can climb.
  // The shed is hollow: brick walls round a works floor, with the big sliding door open.
  const building = { id, x: fx, z: fz, w, d, h, roofType: 2, roofRise: 0, wall: brick, roofColor: '#7b8a86', cx: c.cx, cz: c.cz, kind: 'roof', body: null };
  c.buildings.push(building);
  const inside = hollow(W, c, fx, fz, w, d, 0, h, .4, { side: 3, u: 1, width: 4, height: 4.2 }, brick, { buildingId: id, building });
  b.box(fx, h - .15, fz, w - .2, .3, d - .2, '#6c7873'); building.body = W.solid(c, fx, h - .15, fz, w, .3, d, { kind: 'roof', buildingId: id, building, climbable: false });
  worksFloor(W, c, fx, fz, inside, .07, r, id);
  for (let f = 0; f < 2; f++) b.box(fx, 2.6 + f * 2.4, fz, w + .1, .18, d + .1, '#7d564a');
  const teeth = 4, tw = d / teeth;
  for (let t = 0; t < teeth; t++) {
    const z0 = fz - d / 2 + t * tw;
    for (let s = 0; s < 6; s++) { const sh = .22, sd = (tw - .5) / 6; b.box(fx, h + sh * (s + .5), z0 + .25 + sd * (s + .5), w, sh, sd + .02, s % 2 ? '#74827e' : '#7b8a86'); }
    b.box(fx, h + .7, z0 + tw - .2, w - .4, 1.3, .12, '#a9c3c9'); // north-light glass
    b.box(fx, h + .7, z0 + tw - .1, w, 1.36, .08, '#6c7873');
  }
  // Tall chimney with brick bands and a slow plume of smoke.
  const cx = fx + w / 2 - 1.2, cz = fz - d / 2 + 1.2;
  b.add(GEO.tapered, cx, 7.5, cz, 1.1, 15, 1.1, brick); b.cyl(cx, 14.6, cz, .95, .4, '#7d564a'); b.cyl(cx, 13.2, cz, .9, .3, '#7d564a');
  W.cylinderSolid(c, cx, 0, cz, 1.0, 15, { climbable: true, kind: 'chimney' });
  c.smoke.push({ x: cx, y: 15.1, z: cz });
  // Big doors, a sign, pipes along the wall, and a wall cog that turns.
  b.box(fx - w / 2 - .08, 2.1, fz + 4.9, .1, 4.2, 3.8, '#5f6b66'); b.box(fx - w / 2 - .12, 2.1, fz + 4.9, .05, 3.8, .12, '#3f4a46'); // door slid open
  b.box(fx - w / 2 - .02, 4.45, fz + 1.5, .16, .16, 9, '#3f4a46'); // its rail
  sign(W, c, fx, 5.6, fz + d / 2 + .08, 6.5, 1.1, 0, '#3f4a46');
  for (let k = 0; k < 3; k++) { const py = 1.2 + k * .55; b.cyl(fx + w / 2 + .3, py, fz + 2, .16, 6, '#8a9893'); }
  for (let k = 0; k < 3; k++) { const py = 1.2 + k * .55; b.add(GEO.cylinder, fx + w / 2 + .3, py, fz + 2, .17, 7, .17, '#8a9893', Math.PI / 2, 0, 0); }
  W.solid(c, fx + w / 2 + .3, 1.75, fz + 2, .4, 1.5, 7, { climbable: true, kind: 'pipes' });
  // Water tower on legs: a favourite perch.
  const tx = x + 8.5, tz = z + 7;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { b.box(tx + sx * 1.1, 3.2, tz + sz * 1.1, .18, 6.4, .18, '#6c6459'); W.solid(c, tx + sx * 1.1, 3.2, tz + sz * 1.1, .18, 6.4, .18, { kind: 'post' }); }
  b.box(tx, 1.6, tz, 2.4, .1, .1, '#6c6459', .78); b.box(tx, 3.4, tz, 2.4, .1, .1, '#6c6459', -.78);
  b.box(tx, 6.45, tz, 2.9, .2, 2.9, '#857b6b'); W.solid(c, tx, 6.45, tz, 2.9, .2, 2.9, { climbable: false, kind: 'deck' });
  b.cyl(tx, 8, tz, 1.3, 2.9, '#a79c88'); b.add(GEO.cone, tx, 9.9, tz, 1.45, .9, 1.45, '#6f6a5f');
  W.cylinderSolid(c, tx, 6.55, tz, 1.3, 2.9, { climbable: true, kind: 'tank' });
  ladder(W, c, tx - 1.1, tz, .2, 6.4, -Math.PI / 2);
  // Yard: pallet stacks as stairs, a forklift, barrels, a conveyor with rollers that spin.
  const px = x - 9.5, pz = z + 8;
  for (let k = 0; k < 4; k++) { const ph = .55 * (k + 1); b.box(px + k * 1.35, ph / 2, pz, 1.3, ph, 1.3, k % 2 ? '#b89a70' : '#c7a97b'); W.solid(c, px + k * 1.35, ph / 2, pz, 1.3, ph, 1.3, { climbable: false, kind: 'pallet' }); }
  for (let k = 0; k < 5; k++) { const bx = x + 3 + (k % 3) * .9, bz = z + 9.5 - Math.floor(k / 3) * .9; b.cyl(bx, .5, bz, .4, 1, pick(r, ['#6d7f8a', '#8f5f4e', '#7d8a5d'])); b.cyl(bx, .3, bz, .42, .05, '#4a4f4c'); b.cyl(bx, .8, bz, .42, .05, '#4a4f4c'); }
  W.solid(c, x + 3.9, .5, z + 9.05, 2.8, 1, 1.9, { climbable: false, kind: 'barrels' });
  // forklift
  const kx = x + 7, kz = z - 9; b.box(kx, .55, kz, 1.3, .7, 2.2, '#d9a53a'); b.box(kx, 1.35, kz + .2, 1.2, .9, 1.1, '#d9a53a'); b.box(kx, 2.05, kz + .2, 1.25, .1, 1.3, '#3f4a46');
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.add(GEO.cylinder, kx + sx * .65, .32, kz + sz * .75, .32, .25, .32, '#2f3331', 0, 0, Math.PI / 2);
  for (const sx of [-1, 1]) { b.box(kx + sx * .3, 1.2, kz - 1.35, .08, 2.6, .08, '#4a4f4c'); b.box(kx + sx * .3, .12, kz - 1.9, .1, .06, 1.1, '#6a6f6c'); }
  W.solid(c, kx, .9, kz, 1.3, 1.8, 2.2, { climbable: false, kind: 'forklift' });
  // conveyor
  const vx = x + 1, vz = z + 3.5; b.box(vx, .75, vz, 7, .12, 1, '#4a4f4c'); for (const s of [-2.8, 0, 2.8]) for (const e of [-1, 1]) b.box(vx + s, .35, vz + e * .4, .12, .7, .12, '#4a4f4c');
  W.solid(c, vx, .75, vz, 7, .14, 1, { climbable: false, kind: 'belt' });
  c.extras.push({ kind: 'rollers', x: vx, y: .88, z: vz, count: 10, spacing: .65 });
  c.extras.push({ kind: 'cog', x: fx - w / 2 - .25, y: 3.2, z: fz - 3, r: 1.1 });
  // Workers at their stations.
  person(c, vx - 3.9, vz - .9, Math.PI / 2, 'worker'); person(c, px + 5.6, pz, -Math.PI / 2, 'worker'); person(c, fx - w / 2 - 1.2, fz + 3.2, Math.PI / 2, 'foreman');
  for (let k = 0; k < 4; k++) W.crate(c, x - 9 + k * 1.1, .4, z - 9.5 + (k % 2) * .4, .8);
  W.lamp(c, x + 10.5, z - 10.5); W.tree(c, x - 10.5, z - 2, r, .7);
}

// ---- towers ----------------------------------------------------------------------------------

export function makeTower(W, c, x, z, r, id, tall = 1) {
  const b = c.batch, floors = Math.round((7 + r() * 5) * tall), fh = 3.1, h = floors * fh + .6, w = 12 + r() * 3, d = 12 + r() * 3;
  const glass = pick(r, ['#8fb0b8', '#9bb5a9', '#a2b7c6', '#88a7b5']), frame = pick(r, ['#e9e3d2', '#d8d3c3', '#5f6b66', '#c8bfae']);
  b.box(x, .14, z, 22, .3, 22, '#c6c0ae'); paving(c, x, z, 22, 22, .29);
  // Lobby on the ground floor; above it the tower is hollow: a floor every 3.1 m, a scissor stair
  // along the back wall, and a lift in the back corner that goes all the way up.
  const lobbyH = fh + .3, top = h + .3, t = .3;
  const building = { id, x, z, w, d, h: top, roofType: 2, roofRise: 0, wall: glass, roofColor: '#9aa49c', cx: c.cx, cz: c.cz, kind: 'roof', body: null };
  c.buildings.push(building);
  hollow(W, c, x, z, w, d, lobbyH, top, t, null, glass, { buildingId: id, building });
  b.box(x, top - .1, z, w, .2, d, '#9aa49c'); W.solid(c, x, top - .1, z, w, .2, d, { kind: 'roof', climbable: false, buildingId: id, building });
  const lobby = hollow(W, c, x, z, w, d, .29, lobbyH, t, { side: 0, u: 0, width: 2.6, height: 2.9 }, glass, { buildingId: id, building });
  b.box(x, .3, z, w - .6, .04, d - .6, '#cfc8b4');
  lobbyFloor(W, c, x, z, { ...lobby, minZ: lobby.minZ + 3.6 }, .32, r, id, frame);
  // Shaft in the back-right corner, stair strip along the back wall to its left.
  const inner = { minX: x - w / 2 + t, maxX: x + w / 2 - t, minZ: z - d / 2 + t, maxZ: z + d / 2 - t };
  const shaftW = 2.5, sx = inner.maxX - shaftW / 2 - .05, sz = inner.minZ + shaftW / 2 + .05;
  const shaft = { minX: sx - shaftW / 2, maxX: sx + shaftW / 2, minZ: sz - shaftW / 2, maxZ: sz + shaftW / 2 };
  const lane = 1.45, stairZ0 = inner.minZ + .05, stairX0 = inner.minX + .05, stairX1 = shaft.minX - .35, landing = 1.7;
  const runX0 = stairX0 + landing, runX1 = stairX1 - landing; // the sloped part runs between the landings
  const levels = [.32]; for (let k = 1; k < floors; k++) levels.push(lobbyH + (k - 1) * fh);
  const kits = ['office', 'office', 'living', 'study', 'gym', 'office', 'bedroom', 'cafe', 'kitchen'];
  const slabColor = '#e9e3d2', wallColor = frame;
  for (let k = 1; k < floors; k++) {
    const y = levels[k], below = levels[k - 1];
    // Holes: the shaft, and the top of the stair that arrives at this level (so a cat on the stair has headroom).
    const arrivesRight = (k - 1) % 2 === 0, laneZ = stairZ0 + ((k - 1) % 2) * lane; // stair k-1 -> k uses lane (k-1)%2, rising to the right on even k-1
    const holeStair = arrivesRight ? { minX: runX1 - 1.9, maxX: runX1 + .05, minZ: laneZ, maxZ: laneZ + lane } : { minX: runX0 - .05, maxX: runX0 + 1.9, minZ: laneZ, maxZ: laneZ + lane };
    slabWithHoles(W, c, inner, y - .08, .16, [shaft, holeStair], slabColor, { kind: 'floor', climbable: false, buildingId: id });
    // The stair from the level below up to here.
    const x0 = arrivesRight ? runX0 : runX1, x1 = arrivesRight ? runX1 : runX0;
    ramp(W, c, x0, below + .02, laneZ + lane / 2, x1, y + .02, laneZ + lane / 2, lane - .1, .14, '#8d8470');
    b.box(arrivesRight ? stairX0 + landing / 2 : stairX1 - landing / 2, below - .03, laneZ + lane / 2, landing, .06, lane, '#a39c88'); // landing at the foot
    // Handrail on the open side of the stair strip (a tilted rod: no collider).
    const rz = stairZ0 + lane * 2 + .05; b.add(GEO.box, (x0 + x1) / 2, (below + y) / 2 + .95, rz, Math.abs(x1 - x0) + .4, .06, .05, '#4a4f4c', 0, 0, Math.atan2(y - below, x1 - x0));
    for (let k2 = 0; k2 <= 3; k2++) { const px = x0 + (x1 - x0) * k2 / 3, py = below + (y - below) * k2 / 3; b.box(px, py + .5, rz, .05, 1, .05, '#4a4f4c'); }
    // The room on this floor, kept clear of the stair strip and the shaft.
    const room = { minX: inner.minX + .1, maxX: inner.maxX - .1, minZ: stairZ0 + lane * 2 + .5, maxZ: inner.maxZ - .1 };
    const kit = kits[(k + Math.floor(r() * 2)) % kits.length];
    KITS[kit](W, c, room, y, r, 2);
    // Call button and floor number by the shaft, a strip of lights, a window band so the floor reads from outside.
    b.box(shaft.minX - .08, y + 1.1, shaft.maxZ + .3, .12, .18, .12, '#e9e3d2'); b.ball(shaft.minX - .14, y + 1.1, shaft.maxZ + .3, .03, .03, .03, '#e9c04b');
    b.box(x, y + fh - .25, z + 1, 1.2, .06, .3, '#f6ecc8', 0, .8);
    if (k % 3 === 1) c.landmarks.push({ id: `${id}:f${k}`, kind: 'floor', x, z: z + 2, radius: 4.5, name: `floor ${k}, ${PLACE_NAMES[kit] || kit}`, y, inside: room });
  }
  // The shaft itself: three glass sides and guide rails; open towards the room.
  for (const [wx, wz, ww, wd] of [[shaft.maxX + .03, sz, .06, shaftW + .1], [sx, shaft.minZ - .03, shaftW + .1, .06], [shaft.minX - .03, sz, .06, shaftW + .1]]) { b.box(wx, (top + .32) / 2, wz, ww, top - .32, wd, '#9fd3e6'); W.solid(c, wx, (top + .32) / 2, wz, ww, top - .32, wd, { kind: 'shaft', climbable: false }); }
  for (const e of [-1, 1]) b.box(sx + e * (shaftW / 2 - .12), (top + .32) / 2, shaft.minZ + .14, .08, top - .32, .08, '#4a4f4c');
  b.box(sx, top + .9, sz, shaftW + .4, 1.8, shaftW + .4, '#a9a79a'); W.solid(c, sx, top + .9, sz, shaftW + .4, 1.8, shaftW + .4, { kind: 'wall', buildingId: id, building }); // motor room on the roof
  c.lifts = c.lifts || []; c.lifts.push({ id: `${id}:lift`, x: sx, z: sz, w: shaftW - .2, d: shaftW - .2, levels, openSide: 0 });
  // Ledges every floor and vertical fins: a facade made for climbing.
  for (let f = 1; f <= floors; f++) { const y = .3 + f * fh; for (const e of [-1, 1]) { b.box(x + e * (w / 2 + .125), y, z, .25, .16, d + .5, frame); b.box(x, y, z + e * (d / 2 + .125), w + .5, .16, .25, frame); } }
  const fins = Math.floor(w / 1.6);
  for (let k = 0; k <= fins; k++) { const u = -w / 2 + k * (w / fins); b.box(x + u, h / 2 + .3, z + d / 2 + .12, .14, h, .24, frame); b.box(x + u, h / 2 + .3, z - d / 2 - .12, .14, h, .24, frame); }
  const finsD = Math.floor(d / 1.6);
  for (let k = 0; k <= finsD; k++) { const u = -d / 2 + k * (d / finsD); b.box(x + w / 2 + .12, h / 2 + .3, z + u, .24, h, .14, frame); b.box(x - w / 2 - .12, h / 2 + .3, z + u, .24, h, .14, frame); }
  // Lobby: recessed glass doors and a canopy you can jump onto from a planter.
  for (const s of [-1, 1]) b.box(x + s * 1.4, 1.75, z + d / 2 + .02, .14, 2.9, .2, frame); b.box(x, 3.22, z + d / 2 + .02, 3, .14, .2, frame); b.box(x + 1.3 - .04, 1.75, z + d / 2 - .55, .04, 2.8, 1.1, '#a9c3c9', 0); // one glass leaf held open
  b.box(x, 3.6, z + d / 2 + 1.4, 6.5, .22, 2.8, frame);
  W.solid(c, x, 3.6, z + d / 2 + 1.4, 6.5, .22, 2.8, { climbable: false, kind: 'awning' });
  W.pot(c, x + 4.4, z + d / 2 + 2.6, r, 1.2); W.pot(c, x - 4.4, z + d / 2 + 2.6, r, 1.2);
  W.bench(c, x + 7, z + d / 2 + 3, 0); W.bench(c, x - 7, z + d / 2 + 3, 0);
  // Roof: parapet, antenna mast, helipad.
  for (const s of [-1, 1]) { b.box(x + s * (w / 2 - .15), top + .4, z, .3, .8, d, frame); b.box(x, top + .4, z + s * (d / 2 - .15), w, .8, .3, frame); W.solid(c, x + s * (w / 2 - .15), top + .4, z, .3, .8, d, { climbable: false }); W.solid(c, x, top + .4, z + s * (d / 2 - .15), w, .8, .3, { climbable: false }); }
  b.cyl(x - w * .22, top + .5, z + d * .25, 2.4, .12, '#8c8a7e'); b.box(x - w * .22, top + .57, z + d * .25, .5, .02, 1.6, '#e9e3d2'); b.box(x - w * .22, top + .57, z + d * .25, 1.6, .02, .4, '#e9e3d2');
  b.add(GEO.tapered, x - w * .3, top + 4.5, z - d * .3, .12, 9, .12, '#8c8a7e'); W.cylinderSolid(c, x - w * .3, top, z - d * .3, .13, 9, { climbable: true, kind: 'mast' }); b.ball(x - w * .3, top + 9.1, z - d * .3, .18, .18, .18, '#d9544f');
  c.extras.push({ kind: 'beacon', x: x - w * .3, y: top + 9.1, z: z - d * .3 });
  // Window-cleaning cradle part way up: a mid-air resting platform.
  const cy = .3 + Math.floor(floors * .55) * fh - .9; b.box(x + 2, cy, z + d / 2 + .7, 3, .15, 1, '#5f6b66'); W.solid(c, x + 2, cy, z + d / 2 + .7, 3, .15, 1, { climbable: false, kind: 'cradle' });
  for (const s of [-1, 1]) { b.box(x + 2 + s * 1.4, (cy + top) / 2, z + d / 2 + .7, .04, top - cy, .04, '#3f4a46'); b.box(x + 2 + s * 1.4, cy + .4, z + d / 2 + .7, .06, .8, 1, '#5f6b66'); }
  c.landmarks.push({ id, kind: 'tower', x, z, radius: 9, name: 'the tower top', y: top });
  person(c, x + 1.5, z + d / 2 + 2.2, Math.PI, 'suit'); person(c, x - 2, z + d / 2 + 4, r() * TAU, 'suit');
}

// A floor slab with rectangular holes cut out of it (for shafts and stairwells): the slab is split
// into the grid the hole edges make, and every cell that is not a hole becomes a box.
export function slabWithHoles(W, c, bounds, y, thick, holes, color, tag) {
  const xs = [bounds.minX, bounds.maxX], zs = [bounds.minZ, bounds.maxZ];
  for (const h of holes) { xs.push(h.minX, h.maxX); zs.push(h.minZ, h.maxZ); }
  const ux = [...new Set(xs.map(v => +v.toFixed(3)))].filter(v => v >= bounds.minX - 1e-3 && v <= bounds.maxX + 1e-3).sort((a, b) => a - b);
  const uz = [...new Set(zs.map(v => +v.toFixed(3)))].filter(v => v >= bounds.minZ - 1e-3 && v <= bounds.maxZ + 1e-3).sort((a, b) => a - b);
  const cells = [];
  for (let i = 0; i < ux.length - 1; i++) for (let j = 0; j < uz.length - 1; j++) {
    const x0 = ux[i], x1 = ux[i + 1], z0 = uz[j], z1 = uz[j + 1], cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    if (x1 - x0 < .02 || z1 - z0 < .02) continue;
    if (holes.some(h => cx > h.minX && cx < h.maxX && cz > h.minZ && cz < h.maxZ)) continue;
    cells.push({ x0, x1, z0, z1 });
  }
  // Merge cells along x where they share the same z band to keep the collider count down.
  cells.sort((a, b) => a.z0 - b.z0 || a.x0 - b.x0);
  const merged = [];
  for (const cell of cells) { const last = merged[merged.length - 1]; if (last && Math.abs(last.z0 - cell.z0) < 1e-6 && Math.abs(last.z1 - cell.z1) < 1e-6 && Math.abs(last.x1 - cell.x0) < 1e-6) last.x1 = cell.x1; else merged.push({ ...cell }); }
  for (const m of merged) { const cx = (m.x0 + m.x1) / 2, cz = (m.z0 + m.z1) / 2; c.batch.box(cx, y, cz, m.x1 - m.x0, thick, m.z1 - m.z0, color); W.solid(c, cx, y, cz, m.x1 - m.x0, thick, m.z1 - m.z0, tag); }
}

// ---- parkour playground ----------------------------------------------------------------------

export function makePlayground(W, c, x, z, r, id) {
  const b = c.batch, sand = '#dfcf9f', rubber = '#b87a6b', wood = '#b89a70', steel = '#6d7f8a', paint = ['#d9544f', '#e9c04b', '#4f7f96', '#6f9a4f'];
  b.box(x, .025, z, 24, .1, 24, '#8fa66b'); b.box(x, .06, z, 20, .1, 14, rubber); paving(c, x, z, 20, 14, .11);
  c.landmarks.push({ id, kind: 'playground', x, z, radius: 12, name: 'the parkour park' });
  // 1. Stepping poles rising to a platform.
  for (let k = 0; k < 6; k++) { const px = x - 9 + k * 1.1, pz = z - 5, ph = .5 + k * .3; b.cyl(px, ph / 2, pz, .26, ph, paint[k % 4]); W.cylinderSolid(c, px, 0, pz, .27, ph, { climbable: false, kind: 'pole' }); }
  const p1x = x - 2.2, p1z = z - 5; b.box(p1x, 2.05, p1z, 1.8, .16, 1.8, wood); W.solid(c, p1x, 2.05, p1z, 1.8, .16, 1.8, { climbable: false, kind: 'deck' });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { b.box(p1x + sx * .8, 1, p1z + sz * .8, .12, 2, .12, steel); }
  // 2. Balance beam to a second platform, then a wobbly rope-bridge of planks.
  b.box(x + 1.2, 2.05, z - 5, 5, .14, .22, wood); W.solid(c, x + 1.2, 2.05, z - 5, 5, .14, .22, { climbable: false, kind: 'beam' });
  const p2x = x + 4.6, p2z = z - 5; b.box(p2x, 2.05, p2z, 1.8, .16, 1.8, wood); W.solid(c, p2x, 2.05, p2z, 1.8, .16, 1.8, { climbable: false, kind: 'deck' });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.box(p2x + sx * .8, 1, p2z + sz * .8, .12, 2, .12, steel);
  for (let k = 0; k < 9; k++) { const t = k / 8, pz = p2z + 1 + t * 5, py = 2.05 - Math.sin(t * Math.PI) * .45; b.box(p2x, py, pz, 1.2, .08, .45, k % 2 ? '#c7a97b' : wood); W.solid(c, p2x, py, pz, 1.2, .08, .5, { climbable: false, kind: 'plank' }); }
  for (const s of [-1, 1]) { b.beam([p2x + s * .65, 2.9, p2z + .9], [p2x + s * .65, 2.9, p2z + 6.1], .025, '#8d8470'); }
  // 3. Tall lookout with a ladder, a slide down, and a trampoline at the bottom.
  const lx = x + 4.6, lz = z + 2.2, lh = 4.2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { b.box(lx + sx * 1.1, lh / 2, lz + sz * 1.1, .16, lh, .16, steel); W.solid(c, lx + sx * 1.1, lh / 2, lz + sz * 1.1, .16, lh, .16, { kind: 'post' }); }
  b.box(lx, lh, lz, 2.5, .16, 2.5, wood); W.solid(c, lx, lh, lz, 2.5, .16, 2.5, { climbable: false, kind: 'lookout' });
  b.add(GEO.cone, lx, lh + 1.1, lz, 2.1, 1.4, 2.1, paint[0]);
  for (const s of [-1, 1]) { b.box(lx + s * 1.2, lh + .5, lz, .06, .8, 2.5, '#e9e3d2'); b.box(lx, lh + .5, lz - 1.2, 2.5, .8, .06, '#e9e3d2'); W.solid(c, lx + s * 1.2, lh + .5, lz, .06, .8, 2.5, { climbable: false }); }
  W.solid(c, lx, lh + .5, lz - 1.2, 2.5, .8, .06, { climbable: false });
  ladder(W, c, lx - 1.3, lz, .2, lh, Math.PI / 2);
  ramp(W, c, lx + .4, lh - .05, lz + 1.3, lx + .4, .5, lz + 7.6, 1, .1, paint[1]);
  for (const s of [-1, 1]) ramp(W, c, lx + .4 + s * .5, lh + .2, lz + 1.3, lx + .4 + s * .5, .75, lz + 7.6, .08, .4, paint[1]);
  const tx = lx + .4, tz = lz + 9.3; b.cyl(tx, .35, tz, 1.4, .12, '#2f3331'); b.cyl(tx, .42, tz, 1.15, .06, '#3f4a46');
  for (let k = 0; k < 6; k++) { const a = k / 6 * TAU; b.box(tx + Math.cos(a) * 1.2, .18, tz + Math.sin(a) * 1.2, .08, .36, .08, steel); }
  W.cylinderSolid(c, tx, 0, tz, 1.4, .45, { climbable: false, kind: 'trampoline', bouncy: 12.5 });
  // 4. Climbing wall with coloured holds and a top ledge; monkey bars; hoops to jump through.
  const wx = x - 7, wz = z + 3; b.box(wx, 1.9, wz, .4, 3.8, 4.5, '#cbbfa3'); W.solid(c, wx, 1.9, wz, .4, 3.8, 4.5, { climbable: true, kind: 'climbing-wall' });
  for (let k = 0; k < 22; k++) b.box(wx + .25, .3 + r() * 3.3, wz - 2 + r() * 4, .12, .12, .14, paint[k % 4]);
  b.box(wx, 3.85, wz, 1.2, .14, 4.5, wood); W.solid(c, wx, 3.85, wz, 1.2, .14, 4.5, { climbable: false, kind: 'ledge' });
  const mx = x - 2.5, mz = z + 3.5; for (const s of [-1, 1]) for (const e of [-1, 1]) { b.box(mx + s * 1.8, 1.25, mz + e * .5, .1, 2.5, .1, steel); }
  for (let k = 0; k < 7; k++) { b.add(GEO.cylinder, mx - 1.8 + k * .6, 2.5, mz, .035, 1, .035, paint[k % 4], Math.PI / 2, 0, 0); }
  b.box(mx, 2.5, mz, 3.7, .06, .06, steel); W.solid(c, mx, 2.5, mz, 3.7, .08, 1.05, { climbable: false, kind: 'bars' });
  for (let k = 0; k < 3; k++) { const hx = x - 8 + k * 2.2, hz = z - 1.2; b.add(GEO.torus, hx, 1.2 + k * .3, hz, .7, .7, .7, paint[(k + 1) % 4]); }
  // 5. A sandpit, tyre swing, seesaw, picnic benches, and the finish flag on the lookout.
  b.box(x + 9, .09, z - 3, 4.5, .08, 4.5, sand); for (let k = 0; k < 5; k++) b.ball(x + 7.5 + r() * 3, .17, z - 4.5 + r() * 3, .25, .14, .25, '#e8dbb0');
  const sx = x + 9.5, sz = z + 4; b.box(sx, 2.4, sz, 2.6, .12, .12, steel, 0); for (const s of [-1, 1]) b.box(sx + s * 1.3, 1.2, sz, .12, 2.4, .12, steel);
  W.solid(c, sx, .85, sz, .9, .25, .9, { climbable: false, kind: 'swing' });
  c.extras.push({ kind: 'swing', x: sx, y: 2.35, z: sz });
  b.box(x - 7, .55, z + 8.5, .6, .4, .6, steel); b.add(GEO.box, x - 7, .85, z + 8.5, 3.6, .1, .4, wood, 0, 0, .22);
  W.bench(c, x + 2, z + 9.5, 0); W.bench(c, x - 2.5, z - 9.5, Math.PI);
  flag(W, c, lx + 1, lz - 1, lh + .1, paint[0]);
  W.tree(c, x - 10.5, z - 10, r, .8); W.tree(c, x + 10.5, z + 10, r, .8);
  person(c, x + 7.8, z + 8.5, -2.4, 'kid'); person(c, x - 4, z - 8, .6, 'kid'); person(c, x + 1, z + 7, 2.8, 'parent');
}

// ---- buildings you can walk into -------------------------------------------------------------

export function makeInterior(W, c, x, z, r, id, kind) {
  const b = c.batch, w = kind === 'home' ? 10 : 12, d = kind === 'home' ? 8 : 9, h = 3.6, t = .3;
  const wall = kind === 'cafe' ? pick(r, ['#d9b48c', '#c9a684', '#d6c1a0']) : kind === 'shop' ? pick(r, ['#9fb3a6', '#b7bfae', '#cbb9a4']) : pick(r, ['#d8cbb2', '#c4b49a', '#d2c1a4']);
  const floorColor = kind === 'cafe' ? '#a7805b' : kind === 'shop' ? '#cfc8b4' : '#b89a70', roofColor = pick(r, ['#8a5a44', '#96604a', '#5c6b66', '#6f6252']);
  const front = z + d / 2, door = 1.6, inside = { minX: x - w / 2 + t, maxX: x + w / 2 - t, minZ: z - d / 2 + t, maxZ: front - t };
  // Plinth, floor and ceiling (which doubles as the roof deck).
  b.box(x, .1, z, w + .5, .2, d + .5, '#b8b6a0'); b.box(x, .3, z, w - .2, .12, d - .2, floorColor);
  b.box(x, .1, front + .35, door + .8, .2, .9, '#b8b6a0'); W.solid(c, x, .1, front + .35, door + .8, .2, .9, { climbable: false, kind: 'step' });
  W.solid(c, x, .18, z, w, .36, d, { climbable: false, kind: 'floor' });
  b.box(x, h + .1, z, w, .3, d, wall); W.solid(c, x, h + .1, z, w, .3, d, { kind: 'wall', buildingId: id, climbable: false });
  // Walls: back, two sides, and a front split around the doorway.
  const wallSolid = (wx, wz, ww, wd) => { b.box(wx, h / 2 + .1, wz, ww, h, wd, wall); W.solid(c, wx, h / 2 + .1, wz, ww, h, wd, { kind: 'wall', buildingId: id }); };
  wallSolid(x, z - d / 2 + t / 2, w, t); wallSolid(x - w / 2 + t / 2, z, t, d); wallSolid(x + w / 2 - t / 2, z, t, d);
  const sideW = (w - door) / 2; wallSolid(x - door / 2 - sideW / 2, front - t / 2, sideW, t); wallSolid(x + door / 2 + sideW / 2, front - t / 2, sideW, t);
  b.box(x, 2.3 + (h - 2.3) / 2 + .1, front - t / 2, door + .1, h - 2.3, t, wall); W.solid(c, x, 2.3 + (h - 2.3) / 2 + .1, front - t / 2, door + .1, h - 2.3, t, { kind: 'wall', buildingId: id });
  for (const sd of [-1, 1]) b.box(x + sd * (door / 2 + .08), 1.25, front, .16, 2.5, .1, '#f1e8d2'); b.box(x, 2.42, front, door + .3, .16, .1, '#f1e8d2'); // door frame
  b.box(x, .37, front + .3, 1.3, .03, .6, '#8f5f4e'); // mat
  // Front windows either side of the door, with sills.
  for (const s of [-1, 1]) { const wx = x + s * (door / 2 + sideW / 2); b.box(wx, 1.85, front + .02, sideW - 1.2, 1.7, .08, '#a9c3c9'); b.box(wx, 1.85, front + .05, sideW - 1.1, 1.8, .04, '#f1e8d2'); b.box(wx, .95, front + .1, sideW - 1, .14, .36, '#ded5bb'); W.solid(c, wx, .95, front + .1, sideW - 1, .14, .36, { climbable: false, kind: 'sill' }); }
  const building = { id, x, z, w, d, h: h + .25, roofType: 0, roofRise: 2.2, ridgeX: true, wall, roofColor, cx: c.cx, cz: c.cz, kind: 'roof', body: null, interior: kind };
  c.buildings.push(building);
  c.colliders.push({ shape: 'roof', building, kind: 'roof', climbable: false, minX: x - w / 2 - .55, maxX: x + w / 2 + .55, minY: h + .25, maxY: h + .25 + 2.2, minZ: z - d / 2 - .55, maxZ: z + d / 2 + .55 });
  b.box(x, h + .25, z, w + .38, .25, d + .38, '#e8dfc4');
  W.gable(c, { ...building, h: h + .25 }, 2.2, roofColor, true);
  paving(c, x, z, w, d, .36);
  c.landmarks.push({ id, kind, x, z, radius: Math.min(w, d) / 2 - .6, name: kind === 'cafe' ? 'the corner café' : kind === 'shop' ? 'the little grocer' : 'somebody’s living room', inside, y: .36 });
  const fy = .36; // floor top
  if (kind === 'cafe') {
    // Counter with an espresso machine and cake stand, shelves of jars, round tables and chairs, a cat bed.
    const kx = x - w / 2 + 2.2, kz = z - d / 2 + 2.6;
    b.box(kx, fy + .5, kz, 1, 1, 4.2, '#6d5a44'); b.box(kx, fy + 1.02, kz, 1.2, .08, 4.4, '#e3dcc6'); W.solid(c, kx, fy + .53, kz, 1.2, 1.06, 4.4, { climbable: false, kind: 'counter' });
    b.box(kx, fy + 1.35, kz - 1.2, .6, .55, .7, '#8a9893'); b.box(kx, fy + 1.66, kz - 1.2, .5, .08, .5, '#3f4a46'); b.cyl(kx, fy + 1.2, kz + .8, .3, .04, '#f1e8d2'); b.cyl(kx, fy + 1.3, kz + .8, .24, .14, '#e39a6e');
    for (let k = 0; k < 3; k++) { const sy = fy + 1.5 + k * .55; b.box(x - w / 2 + t + .18, sy, z - .5, .3, .05, 3, '#8d7f67'); for (let j = 0; j < 6; j++) b.cyl(x - w / 2 + t + .18, sy + .17, z - 1.75 + j * .5, .1, .3, pick(r, ['#d9544f', '#e9c04b', '#6f9a4f', '#c7b2d9', '#e39a6e'])); }
    sign(W, c, x - w / 2 + t + .08, fy + 2.2, z + 2.2, 1.6, 1.1, Math.PI / 2, '#3f4a46', '#4a4f4c');
    const tables = [[x + 1.2, z - 1.6], [x + 3.4, z + .6], [x + .4, z + 1.4], [x + 3.2, z - 2]];
    tables.forEach(([tx, tz], i) => {
      b.cyl(tx, fy + .74, tz, .55, .06, '#e3dcc6'); b.cyl(tx, fy + .36, tz, .06, .72, '#4a4f4c'); b.cyl(tx, fy + .03, tz, .3, .05, '#4a4f4c');
      W.cylinderSolid(c, tx, fy, tz, .55, .78, { climbable: false, kind: 'table' });
      b.cyl(tx, fy + .8, tz, .07, .07, '#f1e8d2'); if (i % 2) b.ball(tx + .2, fy + .82, tz, .1, .05, .1, '#e39a6e');
      for (let k = 0; k < 2; k++) { const a = i * 1.3 + k * Math.PI, cx = tx + Math.cos(a) * .95, cz = tz + Math.sin(a) * .95; b.box(cx, fy + .46, cz, .42, .06, .42, '#8f5f4e', -a); b.box(cx + Math.cos(a) * .18, fy + .72, cz + Math.sin(a) * .18, .06, .6, .42, '#8f5f4e', -a); for (const u of [-.16, .16]) for (const v of [-.16, .16]) b.box(cx + u, fy + .22, cz + v, .04, .45, .04, '#4a4f4c'); W.solid(c, cx, fy + .25, cz, .45, .5, .45, { climbable: false, kind: 'chair' }); if (k === 0 && i < 3) person(c, cx, cz, Math.atan2(tx - cx, tz - cz), 'customer', fy, 'sit'); }
    });
    for (let k = 0; k < 3; k++) { const px = x - 2 + k * 2.5; b.beam([px, h, z], [px, fy + 2.3, z], .015, '#4a4f4c'); b.add(GEO.cone, px, fy + 2.15, z, .32, .3, .32, '#d9a53a'); }
    b.add(GEO.torus, x + w / 2 - 1.2, fy + .1, z + d / 2 - 1.3, .45, .45, .45, '#b48c9c', Math.PI / 2); b.cyl(x + w / 2 - 1.2, fy + .06, z + d / 2 - 1.3, .4, .1, '#d3c7e0');
    W.cylinderSolid(c, x + w / 2 - 1.2, fy, z + d / 2 - 1.3, .5, .2, { climbable: false, kind: 'catbed' });
    person(c, kx + 1.1, kz + .4, -Math.PI / 2, 'barista', fy); person(c, kx + 1.3, kz - 1.4, Math.PI / 2, 'customer', fy);
    b.box(x, 3.3, front + .2, 4.6, .9, .14, '#8f5f4e'); b.box(x, 3.3, front + .28, 3.8, .5, .02, '#f1e8d2'); // café sign
    b.box(x, 2.65, front + .6, w - 1, .08, 1.3, '#c9524a'); W.solid(c, x, 2.65, front + .6, w - 1, .08, 1.3, { climbable: false, kind: 'awning' });
    for (let k = 0; k < 2; k++) { const tx = x + (k ? 3.2 : -3.2), tz = front + 1.6; b.cyl(tx, .72, tz, .5, .05, '#e3dcc6'); b.cyl(tx, .36, tz, .05, .7, '#4a4f4c'); W.cylinderSolid(c, tx, 0, tz, .5, .75, { climbable: false, kind: 'table' }); b.cyl(tx, 2.3, tz, .06, 2.6, '#f1e8d2'); b.add(GEO.cone, tx, 3.5, tz, 1.5, .5, 1.5, k ? '#c9524a' : '#e9c04b'); W.cylinderSolid(c, tx, 3.3, tz, 1.5, .3, { climbable: false, kind: 'parasol' }); }
  } else if (kind === 'shop') {
    // Grocer: aisles of shelves stacked with tins and fruit, a till, a freezer, baskets.
    for (let a = 0; a < 2; a++) { const sx = x - 1.5 + a * 3.2; b.box(sx, fy + .9, z - .3, .9, 1.8, 5.5, '#cbbfa3'); W.solid(c, sx, fy + .9, z - .3, .9, 1.8, 5.5, { climbable: true, kind: 'shelf' }); for (let lvl = 0; lvl < 3; lvl++) for (const s of [-1, 1]) { const sy = fy + .5 + lvl * .55; b.box(sx + s * .5, sy, z - .3, .1, .04, 5.5, '#8d7f67'); for (let j = 0; j < 10; j++) { const col = pick(r, ['#d9544f', '#e9c04b', '#4f7f96', '#6f9a4f', '#efe5cf', '#e39a6e']); if (j % 3) b.cyl(sx + s * .5, sy + .14, z - 2.9 + j * .55, .1, .25, col); else b.ball(sx + s * .5, sy + .12, z - 2.9 + j * .55, .13, .12, .13, col); } } }
    const kx = x + w / 2 - 2, kz = z + d / 2 - 2.2; b.box(kx, fy + .5, kz, 1.6, 1, .8, '#8f5f4e'); b.box(kx, fy + 1.03, kz, 1.7, .06, .9, '#e3dcc6'); b.box(kx - .4, fy + 1.3, kz, .4, .4, .4, '#4a4f4c'); W.solid(c, kx, fy + .55, kz, 1.7, 1.1, .9, { climbable: false, kind: 'counter' });
    person(c, kx, kz - 1, Math.PI, 'grocer', fy); person(c, x - 3.1, z + 1, -Math.PI / 2, 'shopper', fy);
    b.box(x - w / 2 + t + .6, fy + .5, z - d / 2 + t + 1.5, 1.1, 1, 2.6, '#e9e3d2'); b.box(x - w / 2 + t + .6, fy + 1.02, z - d / 2 + t + 1.5, 1.1, .04, 2.6, '#a9c3c9'); W.solid(c, x - w / 2 + t + .6, fy + .5, z - d / 2 + t + 1.5, 1.1, 1.04, 2.6, { climbable: false, kind: 'freezer' });
    for (let k = 0; k < 3; k++) b.box(x + 3.6, fy + .15 + k * .12, z + 2.8, .5, .12, .4, '#d9a53a');
    b.box(x, 3.3, front + .2, 5.2, .9, .14, '#4f7f96'); b.box(x, 3.3, front + .28, 4.4, .5, .02, '#f1e8d2');
    for (let k = 0; k < 2; k++) { const bx = x - 3.2 + k * 6.4, bz = front + 1; b.box(bx, .45, bz, 1.6, .2, .9, '#a78a62'); b.box(bx, .25, bz, 1.4, .4, .7, '#8d7f67'); for (let m = 0; m < 10; m++) b.ball(bx - .6 + (m % 5) * .3, .62, bz - .2 + Math.floor(m / 5) * .4, .13, .12, .13, k ? '#d9544f' : '#6f9a4f'); W.solid(c, bx, .3, bz, 1.6, .6, .9, { climbable: false, kind: 'display' }); }
  } else {
    // Home: sofa, armchair, rug, TV, bookshelf, kitchen counter, dining table, bed in the corner.
    b.box(x + 1, fy + .02, z + .5, 3.5, .03, 2.4, '#b48c9c');
    b.box(x + 1, fy + .3, z + 1.5, 2.4, .6, .9, '#8ea48c'); b.box(x + 1, fy + .75, z + 1.85, 2.4, .5, .25, '#8ea48c'); for (const s of [-1, 1]) b.box(x + 1 + s * 1.1, fy + .5, z + 1.5, .2, .4, .9, '#8ea48c'); W.solid(c, x + 1, fy + .35, z + 1.5, 2.4, .7, .9, { climbable: false, kind: 'sofa' });
    b.box(x + 1, fy + .25, z - .3, 1, .5, .6, '#8d7f67'); b.box(x + 1, fy + .5, z - .3, .9, .04, .5, '#e3dcc6'); W.solid(c, x + 1, fy + .27, z - .3, 1, .54, .6, { climbable: false, kind: 'table' });
    b.box(x + 1, fy + .25, z - 2.6, 1.6, .5, .45, '#6d5a44'); b.box(x + 1, fy + 1.05, z - 2.6, 1.5, .9, .06, '#2f3331'); b.box(x + 1, fy + 1.05, z - 2.6 + .035, 1.3, .7, .01, '#a9c3c9'); W.solid(c, x + 1, fy + .25, z - 2.6, 1.6, .5, .45, { climbable: false, kind: 'cabinet' });
    const ax = x + 3.6, az = z - .2; b.box(ax, fy + .3, az, .9, .6, .9, '#c88f6e'); b.box(ax + .35, fy + .75, az, .2, .5, .9, '#c88f6e'); W.solid(c, ax, fy + .35, az, .9, .7, .9, { climbable: false, kind: 'chair' });
    b.box(x - w / 2 + t + .2, fy + 1, z - 1, .35, 2, 2.2, '#8d7f67'); for (let k = 0; k < 4; k++) { const sy = fy + .3 + k * .45; for (let j = 0; j < 7; j++) b.box(x - w / 2 + t + .2, sy + .15, z - 1.9 + j * .3, .25, .3, .22, pick(r, ['#d9544f', '#4f7f96', '#6f9a4f', '#e9c04b', '#c7b2d9'])); } W.solid(c, x - w / 2 + t + .2, fy + 1, z - 1, .4, 2, 2.2, { climbable: true, kind: 'shelf' });
    b.box(x - 2.5, fy + .45, z - d / 2 + t + .5, 4, .9, 1, '#cbbfa3'); b.box(x - 2.5, fy + .93, z - d / 2 + t + .5, 4.1, .06, 1.1, '#5f6b66'); b.box(x - 3.5, fy + 1.1, z - d / 2 + t + .5, .8, .2, .6, '#e9e3d2'); b.box(x - 2.5, fy + 2, z - d / 2 + t + .3, 4, .7, .5, '#cbbfa3'); W.solid(c, x - 2.5, fy + .48, z - d / 2 + t + .5, 4.1, .96, 1.1, { climbable: false, kind: 'counter' });
    b.box(x - 1.2, fy + 1.1, z - d / 2 + t + .5, .5, .15, .5, '#6d7f8a'); b.cyl(x - 1.6, fy + 1.1, z - d / 2 + t + .5, .14, .2, '#d9544f');
    b.box(x - 2, fy + .72, z + 1, 1.5, .06, .9, '#e3dcc6'); for (const u of [-.65, .65]) for (const v of [-.35, .35]) b.box(x - 2 + u, fy + .35, z + 1 + v, .06, .7, .06, '#8d7f67'); W.solid(c, x - 2, fy + .38, z + 1, 1.5, .76, .9, { climbable: false, kind: 'table' });
    for (const s of [-1, 1]) { b.box(x - 2 + s * .5, fy + .45, z + 1.9, .4, .05, .4, '#8f5f4e'); b.box(x - 2 + s * .5, fy + .7, z + 2.1, .4, .55, .05, '#8f5f4e'); W.solid(c, x - 2 + s * .5, fy + .3, z + 2, .4, .6, .4, { climbable: false, kind: 'chair' }); }
    const bx = x + w / 2 - 1.6, bz = z + d / 2 - 1.9; b.box(bx, fy + .3, bz, 1.8, .4, 2.4, '#8d7f67'); b.box(bx, fy + .55, bz, 1.7, .25, 2.3, '#e9e3d2'); b.box(bx, fy + .6, bz + .3, 1.7, .22, 1.6, pick(r, ['#c9524a', '#4f7f96', '#b48c9c'])); b.box(bx, fy + .75, bz - .9, 1.4, .18, .5, '#f3ead6'); W.solid(c, bx, fy + .35, bz, 1.8, .7, 2.4, { climbable: false, kind: 'bed' });
    person(c, x - 1.3, z + 1.9, 0, 'resident', fy); if (r() > .5) person(c, x + 1.9, z + 1.5, Math.PI, 'resident', fy, 'sit');
    b.box(x + 1, 3.3, z, 1.2, .1, 1.2, '#e9e3d2'); b.beam([x + 1, h, z], [x + 1, fy + 2.5, z], .015, '#4a4f4c'); b.add(GEO.cone, x + 1, fy + 2.4, z, .5, .4, .5, '#e9c04b');
    b.box(x - 3.5, 1.4, front + .8, .9, .9, .9, '#6f9a4f'); W.crate(c, x + 3.6, .43, front + 1.2, .86);
    W.pot(c, x - 3.5, front + 1.2, r, .9);
  }
}

// ---- warehouse ------------------------------------------------------------------------------

export function makeWarehouse(W, c, x, z, r, id) {
  const b = c.batch, w = 16, d = 14, h = 5.2, color = pick(r, ['#8a9893', '#9fa89d', '#b0a58f']);
  b.box(x, .02, z, 24, .1, 24, '#b6ad99'); paving(c, x, z, 24, 24, .07);
  const building = { id, x: x - 2, z, w, d, h, roofType: 2, roofRise: 0, wall: color, roofColor: '#7b8a86', cx: c.cx, cz: c.cz, kind: 'roof', body: null };
  c.buildings.push(building);
  const inside = hollow(W, c, x - 2, z, w, d, 0, h, .35, { side: 0, u: 0, width: 3.6, height: 3.8 }, color, { buildingId: id, building });
  b.box(x - 2, h - .15, z, w - .2, .3, d - .2, '#6c7873'); building.body = W.solid(c, x - 2, h - .15, z, w, .3, d, { kind: 'roof', buildingId: id, building, climbable: false });
  depotFloor(W, c, x - 2, z, inside, .07, r, id);
  for (let k = 0; k < 7; k++) b.box(x - 2 - w / 2 + 1 + k * 2.3, h / 2, z + d / 2 + .05, .14, h, .12, '#6c7873');
  for (let k = 0; k < 3; k += 2) { const dx = x - 2 - 5 + k * 5; b.box(dx, 1.9, z + d / 2 + .06, 3.6, 3.8, .1, '#8f5f4e'); b.box(dx, 1.9, z + d / 2 + .1, 3.4, .1, .05, '#3f4a46'); }
  b.box(x - 2, 3.95, z + d / 2 + .08, 4.2, .3, .2, '#5f6b66'); b.box(x - 2, 2, z + d / 2 + .12, 3.8, .04, .3, '#e9c04b'); // rolled-up door and the painted threshold
  // Curved roof suggested by stepped slabs; a roof light; a ramp up the side for the brave.
  for (let k = 0; k < 5; k++) { const sh = .25; b.box(x - 2, h + sh * (k + .5), z, w - k * 1.6, sh, d, k % 2 ? '#74827e' : '#7b8a86'); }
  b.box(x - 2, h + 1.4, z, 4, .4, d - 2, '#a9c3c9');
  ramp(W, c, x + 6.4, .4, z + 6.5, x + 6.4, h + .1, z - 6.5, 1.2, .12, '#6c7873');
  b.box(x + 7.2, h / 2 + .3, z, .08, h + .4, 13.5, '#4a4f4c');
  W.solid(c, x + 7.2, h / 2 + .3, z, .08, h + .4, 13.5, { climbable: false, kind: 'rail' });
  // Loading dock with pallets and a lorry.
  for (let k = 0; k < 6; k++) { const px = x - 8 + (k % 3) * 1.5, pz = z + 10 + Math.floor(k / 3) * 1.5, ph = .4 + (k % 3) * .35; b.box(px, ph / 2, pz, 1.3, ph, 1.3, k % 2 ? '#b89a70' : '#c7a97b'); W.solid(c, px, ph / 2, pz, 1.3, ph, 1.3, { climbable: false, kind: 'pallet' }); }
  const lx = x + 4, lz = z + 10; b.box(lx, 1.5, lz, 2.4, 2.2, 6, '#e9e3d2'); b.box(lx, 1.1, lz + 3.8, 2.3, 1.7, 1.6, '#4f7f96'); b.box(lx, .4, lz + .5, 2.5, .5, 7.5, '#3f4a46');
  for (const sx of [-1, 1]) for (const sz of [-2.2, 1.5, 3.4]) b.add(GEO.cylinder, lx + sx * 1.2, .45, lz + sz, .45, .3, .45, '#2f3331', 0, 0, Math.PI / 2);
  W.solid(c, lx, 1.3, lz + .5, 2.5, 2.6, 7.5, { climbable: false, kind: 'car' });
  person(c, x - 6, z + 7.8, 0, 'worker'); person(c, lx - 2, lz + 3, Math.PI / 2, 'driver');
  c.landmarks.push({ id, kind: 'warehouse', x, z, radius: 12, name: 'the depot' });
  W.lamp(c, x + 10.5, z - 10.5);
}

// ---- railway station ------------------------------------------------------------------------

export function makeStation(W, c, x, z, r, id) {
  const b = c.batch, tx = x + 7.5; // track centre line, running along z through the lot (drawn by railTrack)
  b.box(x - 4, .02, z, 16, .1, 24, '#b3ab97'); paving(c, x - 4, z, 16, 24, .07);
  c.stations = c.stations || []; c.stations.push({ x: tx, z, platformX: x - 2.5 });
  // Platform, a metre up, with three steps at the near end and a yellow safety line.
  const pw = 14.6, pd = 20, px = x - 1.7, ph = 1;
  b.box(px, ph / 2, z, pw, ph, pd, '#c9bfa6'); W.solid(c, px, ph / 2, z, pw, ph, pd, { kind: 'floor', climbable: false });
  b.box(px + pw / 2 - .35, ph + .01, z, .5, .03, pd, '#e3c35a');
  b.box(px, ph + .005, z, pw - .2, .02, pd - .2, '#d5cbb1');
  for (let k = 0; k < 4; k++) { const sh = .25, sy = sh * (k + .5), sz = z + pd / 2 + 1.1 - k * .55; b.box(px - 3, sy, sz, 3, sh, .55, '#bdb39a'); W.solid(c, px - 3, sy, sz, 3, sh, .55, { kind: 'step', climbable: false }); }
  // Canopy on iron posts, with a valance.
  for (const zz of [-7, -2.3, 2.3, 7]) { b.cyl(px - 1, ph + 1.9, z + zz, .09, 3.8, '#4f5a56'); W.cylinderSolid(c, px - 1, ph, z + zz, .1, 3.8, { kind: 'post' }); }
  b.box(px - 1, ph + 3.85, z, 9.5, .14, 17.5, '#5c6b66'); W.solid(c, px - 1, ph + 3.85, z, 9.5, .14, 17.5, { kind: 'roof', climbable: false });
  for (const s of [-1, 1]) b.box(px - 1 + s * 4.75, ph + 3.6, z, .06, .5, 17.5, '#8f5f4e');
  b.box(px - 1, ph + 3.6, z - 8.75, 9.5, .5, .06, '#8f5f4e'); b.box(px - 1, ph + 3.6, z + 8.75, 9.5, .5, .06, '#8f5f4e');
  // Ticket kiosk, clock, name board, benches, a luggage trolley.
  const kx = px - 4.5, kz = z - 5;
  b.box(kx, ph + 1.35, kz, 3.2, 2.7, 2.6, '#8f5f4e'); W.solid(c, kx, ph + 1.35, kz, 3.2, 2.7, 2.6, { kind: 'wall', climbable: true });
  b.box(kx, ph + 2.82, kz, 3.5, .14, 2.9, '#4f5a56');
  b.box(kx + 1.62, ph + 1.5, kz, .04, 1, 1.4, '#a9c3c9'); b.box(kx + 1.66, ph + .95, kz, .1, .08, 1.5, '#e8dfc4');
  sign(W, c, kx + 1.68, ph + 2.3, kz, 1.9, .42, Math.PI / 2, '#3f4a46');
  b.cyl(px + 3.5, ph + 1.6, z + 3, .05, 3.2, '#4f5a56'); b.cyl(px + 3.5, ph + 3.3, z + 3, .42, .12, '#f3ead6', Math.PI / 2); b.cyl(px + 3.5, ph + 3.3, z + 3, .46, .1, '#3f4a46', Math.PI / 2);
  b.box(px + 3.5, ph + 3.3, z + 3.07, .04, .3, .02, '#2b2622'); b.box(px + 3.58, ph + 3.33, z + 3.07, .2, .03, .02, '#2b2622');
  W.cylinderSolid(c, px + 3.5, ph, z + 3, .06, 3.2, { kind: 'pole', walkable: false });
  sign(W, c, px + 2, ph + 2.2, z + 8.6, 4.2, .7, 0, '#3f4a46');
  for (const zz of [-1.5, 5]) W.bench(c, px - 1.8, z + zz, -Math.PI / 2, ph);
  b.box(px + 1.5, ph + .45, z - 7.5, 1.2, .08, .7, '#8f5f4e'); for (const s of [-1, 1]) b.cyl(px + 1.5 + s * .5, ph + .2, z - 7.5, .2, .1, '#2f3331', 0, Math.PI / 2);
  b.box(px + 1.5, ph + .8, z - 7.5, .5, .6, .45, '#8a6a4c'); b.box(px + 1.5, ph + 1.15, z - 7.6, .6, .1, .35, '#c9a35c');
  W.solid(c, px + 1.5, ph + .7, z - 7.5, 1.2, 1.2, .7, { kind: 'box', climbable: false });
  // People: driver leaning out of the cab, a guard with a flag, passengers waiting.
  person(c, px + 3.6, z - 4, -Math.PI / 2, 'worker', ph); person(c, px - 1.8, z - 1.5, -Math.PI / 2, 'suit', ph, 'sit');
  person(c, px + 1.5, z + 6, -Math.PI / 2, 'grandma', ph); person(c, px + .4, z + 6.9, Math.PI, 'kid', ph);
  c.landmarks.push({ id, kind: 'station', x, z, radius: 13, name: 'the station', track: tx });
  W.lamp(c, x - 10.5, z + 10.5); W.lamp(c, x - 10.5, z - 10.5);
}

// ---- allotments ------------------------------------------------------------------------------

export function makeAllotments(W, c, x, z, r, id) {
  const b = c.batch;
  b.box(x, .02, z, 24, .1, 24, '#9aa66d'); paving(c, x, z, 24, 24, .07);
  b.box(x, .075, z, 1.6, .03, 24, '#b9ad8e'); b.box(x, .075, z, 24, .03, 1.6, '#b9ad8e');
  // Raised beds in four plots, each with its own crop.
  const crops = [['#6d9a52', .18], ['#e0893c', .12], ['#7b5ea7', .14], ['#9bc46a', .22], ['#c94a3f', .1], ['#5f8a4a', .26]];
  let k = 0;
  for (const qx of [-1, 1]) for (const qz of [-1, 1]) for (let i = 0; i < 3; i++) {
    const bx = x + qx * (3 + (i - 1) * 3.2), bz = z + qz * 6.2, bw = 2.4, bd = 7;
    b.box(bx, .25, bz, bw, .4, bd, '#8a6a4c'); b.box(bx, .4, bz, bw - .3, .14, bd - .3, '#5a4634');
    W.solid(c, bx, .25, bz, bw, .46, bd, { kind: 'bed', climbable: false });
    const [col, size] = crops[k++ % crops.length];
    for (let j = 0; j < 7; j++) for (const s of [-.55, .55]) b.ball(bx + s + (r() - .5) * .2, .48 + size * .6, bz - bd / 2 + .7 + j * (bd - 1.4) / 6, size * (.8 + r() * .5), size, size * (.8 + r() * .5), col);
  }
  // Bean poles, a scarecrow, a compost heap, a water butt and a wheelbarrow.
  for (const [sx, sz] of [[-9.5, -1.6], [-9.5, 1.6], [9.5, 0]]) {
    for (let j = 0; j < 3; j++) { const a = j / 3 * TAU; b.add(GEO.cylinder, x + sx + Math.cos(a) * .35, 1.1, z + sz + Math.sin(a) * .35, .025, 2.3, .025, '#9a9078', Math.cos(a) * .3, 0, -Math.sin(a) * .3); }
    for (let j = 0; j < 5; j++) b.ball(x + sx + (r() - .5) * .5, .5 + j * .38, z + sz + (r() - .5) * .5, .32, .26, .32, j % 2 ? '#6d9a52' : '#5f8a4a');
  }
  const scx = x + 6.2, scz = z - 2.6;
  b.cyl(scx, 1.1, scz, .05, 2.2, '#8a6a4c'); b.box(scx, 1.75, scz, 1.5, .07, .07, '#8a6a4c');
  b.box(scx, 1.45, scz, .6, .8, .32, '#c9524a'); b.ball(scx, 2.05, scz, .22, .25, .22, '#d9c7a0');
  b.add(GEO.cone, scx, 2.38, scz, .34, .3, .34, '#8a6a4c'); b.cyl(scx, 2.24, scz, .4, .04, '#8a6a4c');
  for (const s of [-1, 1]) b.box(scx + s * .75, 1.75, scz, .18, .3, .18, '#e3c35a');
  W.cylinderSolid(c, scx, 0, scz, .08, 2.2, { kind: 'pole', walkable: false });
  b.ball(x - 10, .45, z + 9.5, 1.3, .55, 1.1, '#5a4634'); b.ball(x - 9.6, .7, z + 9.4, .7, .35, .6, '#6b5540');
  b.cyl(x + 10.3, .55, z + 9.8, .45, 1.1, '#3f6b57'); b.cyl(x + 10.3, 1.11, z + 9.8, .47, .04, '#2f3331');
  b.box(x + 3, .55, z + 10, .7, .4, 1.1, '#6a9ab8'); b.add(GEO.cylinder, x + 3, .3, z + 10.7, .28, .1, .28, '#2f3331', 0, 0, Math.PI / 2); for (const s of [-1, 1]) b.box(x + 3 + s * .3, .5, z + 9.1, .05, .05, .9, '#8a6a4c');
  // A greenhouse you can walk into, with a potting bench inside.
  const gx = x - 6.5, gz = z + 9, gw = 4.4, gd = 3.6, gh = 2.2, glass = '#cfe3e6';
  b.box(gx, .18, gz, gw + .3, .36, gd + .3, '#b8b6a0'); W.solid(c, gx, .18, gz, gw + .3, .36, gd + .3, { kind: 'floor', climbable: false }); paving(c, gx, gz, gw + .3, gd + .3, .36);
  b.box(gx, .1, gz + gd / 2 + .5, 1.6, .2, .8, '#b8b6a0'); W.solid(c, gx, .1, gz + gd / 2 + .5, 1.6, .2, .8, { kind: 'step', climbable: false });
  const pane = (wx, wz, ww, wd) => { b.box(wx, .36 + gh / 2, wz, ww, gh, wd, glass); W.solid(c, wx, .36 + gh / 2, wz, ww, gh, wd, { kind: 'wall', climbable: true }); };
  pane(gx, gz - gd / 2, gw, .06); pane(gx - gw / 2, gz, .06, gd); pane(gx + gw / 2, gz, .06, gd);
  pane(gx - gw / 4 - .3, gz + gd / 2, gw / 2 - .6, .06); pane(gx + gw / 4 + .3, gz + gd / 2, gw / 2 - .6, .06);
  for (const s of [-1, 1]) b.box(gx + s * (gw / 2), .36 + gh / 2, gz, .08, gh, .08, '#f3ead6');
  for (const zz of [-gd / 2, gd / 2]) for (const xx of [-gw / 2, gw / 2, -.6, .6]) b.box(gx + xx, .36 + gh / 2, gz + zz, .08, gh, .08, '#f3ead6');
  b.box(gx, .36 + gh, gz, gw + .2, .08, gd + .2, '#f3ead6');
  const rise = 1.1, slope = Math.atan2(rise, gw / 2), len = Math.hypot(rise, gw / 2);
  for (const s of [-1, 1]) b.add(GEO.box, gx + s * gw / 4, .36 + gh + rise / 2 + .04, gz, len, .06, gd + .2, glass, 0, 0, -s * slope);
  c.colliders.push({ shape: 'roof', building: { x: gx, z: gz, w: gw - 1.1, d: gd - 1.1, h: .36 + gh + .04, roofRise: rise, ridgeX: false, roofType: 0 }, kind: 'roof', climbable: false, minX: gx - gw / 2 - .1, maxX: gx + gw / 2 + .1, minY: .36 + gh, maxY: .36 + gh + rise + .1, minZ: gz - gd / 2 - .1, maxZ: gz + gd / 2 + .1 });
  b.box(gx - gw / 2 + .55, .36 + .45, gz - .4, .8, .06, gd - 1.2, '#8a6a4c'); W.solid(c, gx - gw / 2 + .55, .36 + .25, gz - .4, .8, .5, gd - 1.2, { kind: 'shelf', climbable: false });
  for (let j = 0; j < 4; j++) { const pz = gz - gd / 2 + .6 + j * .7; b.add(GEO.pot, gx - gw / 2 + .55, .36 + .58, pz, .14, .2, .14, '#b8693f'); b.ball(gx - gw / 2 + .55, .36 + .78, pz, .14, .12, .14, j % 2 ? '#6d9a52' : '#e36b8a'); }
  // Two sheds with pitched roofs; one has its door open.
  for (const [sx, sz, col] of [[8.5, -9, '#6b5540'], [-8.5, -9, '#5f6b66']]) {
    const hx = x + sx, hz = z + sz; b.box(hx, 1.1, hz, 2.6, 2.2, 2.2, col); W.solid(c, hx, 1.1, hz, 2.6, 2.2, 2.2, { kind: 'wall', climbable: true });
    for (const s of [-1, 1]) b.add(GEO.box, hx + s * .7, 2.55, hz, 1.6, .08, 2.5, '#3f4a46', 0, 0, -s * .5);
    b.box(hx, 2.2, hz, .2, .9, 2.4, '#3f4a46');
    b.box(hx, 1, hz + 1.12, .8, 1.8, .06, sx > 0 ? '#3f4a46' : '#8a6a4c');
  }
  // Hedge round the plot, with gaps for the paths.
  for (let i = -11; i <= 11; i += 1.1) { if (Math.abs(i) < 1.6) continue; for (const s of [-1, 1]) { b.ball(x + i, .45, z + s * 11.6, .7, .55, .6, '#5f8a4a'); b.ball(x + s * 11.6, .45, z + i, .6, .55, .7, '#5f8a4a'); } }
  person(c, x - 3, z - 2.6, Math.PI / 2, 'grandpa'); person(c, x + 3, z + 2.6, -Math.PI / 2, 'resident'); person(c, gx + .4, gz + gd / 2 + 1.4, Math.PI, 'grandma', 0);
  c.landmarks.push({ id, kind: 'allotments', x, z, radius: 13, name: 'the allotments' });
  W.lamp(c, x + 10.5, z + 10.5);
}

// ---- the line itself --------------------------------------------------------------------------

// Ballast, sleepers and rails for one chunk's length of track at x, plus boards where the roads
// and the footpath cross it.
export function railTrack(W, c, x, oz, rng, station = false, viaduct = false) {
  const b = c.batch, L = 72;
  if (viaduct) { b.box(x, .0, oz, 3.8, .3, L + .05, '#9a9a94'); for (let k = -35.6; k <= 35.6; k += .8) b.box(x, .18, oz + k, 2.3, .1, .28, '#6a5540'); for (const s of [-1, 1]) { b.box(x + s * .72, .28, oz, .09, .14, L + .05, '#6b6a66'); b.box(x + s * .72, .36, oz, .13, .03, L + .05, '#9a9a94'); b.box(x + s * 1.95, .5, oz, .1, .7, L + .05, '#8a8f87'); } return; }
  b.box(x, .06, oz, 3.4, .12, L + .05, '#a39c88');
  for (let k = -35.6; k <= 35.6; k += .8) b.box(x, .13, oz + k, 2.3, .1, .28, '#6a5540');
  for (const s of [-1, 1]) { b.box(x + s * .72, .23, oz, .09, .14, L + .05, '#6b6a66'); b.box(x + s * .72, .31, oz, .13, .03, L + .05, '#9a9a94'); }
  for (const zz of [oz - 32.5, oz + 32.5]) { b.box(x, .2, zz, 3.6, .12, 7.4, '#9f9680'); b.box(x, .27, zz, .9, .02, 7.4, '#b9ae96'); for (const s of [-1, 1]) b.box(x + s * 1.2, .27, zz, .6, .02, 7.4, '#b9ae96'); }
  b.box(x, .2, oz, 3.6, .12, 3.2, '#9f9680');
  // Crossing signs either side of each road.
  for (const zz of [oz - 32.5, oz + 32.5]) for (const s of [-1, 1]) { const sx = x + s * 2.6, sz = zz + s * 4.4; b.cyl(sx, 1.4, sz, .05, 2.8, '#e9e3d2'); b.box(sx, 2.5, sz, .9, .12, .08, '#c9524a', .78); b.box(sx, 2.5, sz, .9, .12, .08, '#c9524a', -.78); b.box(sx, 1.9, sz, .34, .34, .06, '#2f3331'); b.ball(sx, 1.9, sz + .04, .1, .1, .04, '#d9544f'); W.cylinderSolid(c, sx, 0, sz, .06, 2.8, { kind: 'pole', walkable: false }); }
  // Fences along the line where there is no platform, broken for the crossings.
  for (const s of [-1, 1]) for (const seg of [[-29, -4.5], [4.5, 29]]) { if (s < 0 && station) continue; const zz = (seg[0] + seg[1]) / 2 + oz, len = seg[1] - seg[0]; for (let k = seg[0]; k <= seg[1]; k += 2.4) b.box(x + s * 2.9, .55, oz + k, .08, 1.1, .08, '#8d8470'); b.box(x + s * 2.9, .95, zz, .04, .06, len, '#8d8470'); b.box(x + s * 2.9, .5, zz, .04, .06, len, '#8d8470'); W.solid(c, x + s * 2.9, .55, zz, .1, 1.1, len, { kind: 'rail', climbable: false }); }
  for (let k = 0; k < 10; k++) b.box(x + (rng() - .5) * 3, .13, oz + (rng() - .5) * 60, .3, .04, .5, '#8ea563');
}

// The lot beside the line that is not a station: a footbridge, goods sidings, or a signal box.
export function makeRailway(W, c, x, z, r, id, variant) {
  const b = c.batch, tx = x + 7.5;
  b.box(x - 4, .02, z, 16, .1, 24, '#aeb08f'); paving(c, x - 4, z, 16, 24, .07);
  if (variant === 'bridge') {
    // Lattice footbridge over the line: stairs each side, deck at 5 m, railings. The best view in the district.
    const dy = 5, deckW = 1.8;
    for (const s of [-1, 1]) {
      const sx = tx + s * 5.5;
      ramp(W, c, sx, .2, z + s * 7, sx, dy, z - s * 1.5, deckW, .14, '#5c6b66');
      for (let k = 0; k < 9; k++) { const t = (k + .5) / 9, py = .2 + (dy - .2) * t, pz = z + s * 7 - s * 8.5 * t; b.box(sx + deckW / 2 + .05, py + .5, pz, .05, 1, .05, '#4f5a56'); b.box(sx - deckW / 2 - .05, py + .5, pz, .05, 1, .05, '#4f5a56'); }
      b.add(GEO.box, sx + deckW / 2 + .05, (dy + .2) / 2 + 1, z + s * 2.75, .05, .06, 9.9, '#4f5a56', Math.atan2(s * (dy - .2), 8.5), 0, 0); b.add(GEO.box, sx - deckW / 2 - .05, (dy + .2) / 2 + 1, z + s * 2.75, .05, .06, 9.9, '#4f5a56', Math.atan2(s * (dy - .2), 8.5), 0, 0);
      for (const e of [-1, 1]) { b.box(sx + e * deckW / 2, dy / 2, z + s * 7, .2, dy, .2, '#4f5a56'); W.solid(c, sx + e * deckW / 2, dy / 2, z + s * 7, .2, dy, .2, { kind: 'post' }); b.box(sx + e * deckW / 2, dy / 2, z - s * 1.5, .2, dy, .2, '#4f5a56'); W.solid(c, sx + e * deckW / 2, dy / 2, z - s * 1.5, .2, dy, .2, { kind: 'post' }); }
    }
    b.box(tx, dy, z - 1.5, 13, .16, deckW, '#5c6b66'); W.solid(c, tx, dy, z - 1.5, 13, .16, deckW, { kind: 'deck', climbable: false });
    for (const e of [-1, 1]) { b.box(tx, dy + .55, z - 1.5 + e * (deckW / 2 + .03), 13, .06, .05, '#4f5a56'); b.box(tx, dy + 1.05, z - 1.5 + e * (deckW / 2 + .03), 13, .06, .05, '#4f5a56'); for (let k = -6; k <= 6; k += 1.5) b.box(tx + k, dy + .55, z - 1.5 + e * (deckW / 2 + .03), .05, 1.1, .05, '#4f5a56'); W.solid(c, tx, dy + .55, z - 1.5 + e * (deckW / 2 + .03), 13, 1.1, .08, { kind: 'rail', climbable: false }); }
    b.box(tx, dy + 1.45, z - 1.5, 13.2, .1, deckW + .6, '#8f5f4e'); // a roof over the deck
    c.landmarks.push({ id, kind: 'bridge', x: tx, z: z - 1.5, radius: 7, name: 'the footbridge', y: dy });
    person(c, tx - 2, z - 1.5, Math.PI / 2, 'kid', dy); person(c, tx - 2.8, z - 1.2, Math.PI / 2, 'parent', dy);
  } else if (variant === 'yard') {
    // Goods sidings: a short stub of track with two wagons, a loading crane and some drums.
    const sx = tx - 4.2; b.box(sx, .06, z + 2, 3, .12, 18, '#a39c88'); for (let k = -8.5; k <= 10.5; k += .8) b.box(sx, .13, z + k, 2.1, .1, .26, '#6a5540'); for (const s of [-1, 1]) b.box(sx + s * .72, .23, z + 2, .09, .14, 18, '#6b6a66');
    b.box(sx, .5, z - 7.4, 2.2, .8, .3, '#c9524a'); // buffer stop
    for (const [wz, color, open] of [[z - 3, '#6d7f8a', true], [z + 4.5, '#8f5f4e', false]]) {
      b.box(sx, .8, wz, 2.4, .5, 5.5, '#3f4a46'); for (const s of [-1, 1]) for (const e of [-1.9, 1.9]) b.add(GEO.cylinder, sx + s * 1.1, .5, wz + e, .48, .22, .48, '#2f3331', 0, 0, Math.PI / 2);
      if (open) { for (const s of [-1, 1]) b.box(sx + s * 1.15, 1.65, wz, .1, 1.2, 5.5, color); b.box(sx, 1.65, wz - 2.7, 2.4, 1.2, .1, color); b.box(sx, 1.65, wz + 2.7, 2.4, 1.2, .1, color); for (let k = 0; k < 5; k++) W.crate(c, sx - .6 + (k % 3) * .6, 1.4, wz - 1.6 + Math.floor(k / 3) * 1.2, .55); W.solid(c, sx, 1.05, wz, 2.4, 1.1, 5.5, { kind: 'car', climbable: true }); }
      else { b.box(sx, 2.05, wz, 2.4, 2, 5.5, color); b.add(GEO.cylinder, sx, 3.05, wz, 1.3, 5.6, .4, '#5c6b66', Math.PI / 2); W.solid(c, sx, 2.05, wz, 2.4, 2.1, 5.5, { kind: 'car', climbable: true }); W.solid(c, sx, 3.05, wz, 2.6, .8, 5.6, { kind: 'car', climbable: true }); }
    }
    const kx = x - 5, kz = z + 2; b.box(kx, 3.5, kz, .5, 7, .5, '#4f5a56'); W.solid(c, kx, 3.5, kz, .5, 7, .5, { kind: 'post' }); b.box(kx + 3, 6.8, kz, 7, .35, .4, '#4f5a56'); W.solid(c, kx + 3, 6.8, kz, 7, .35, .4, { kind: 'beam', climbable: false });
    b.beam([kx + 6, 6.6, kz], [kx + 6, 3.2, kz], .02, '#2f3331'); b.box(kx + 6, 3, kz, .4, .4, .4, '#4a4f4c'); W.crate(c, kx + 6, 2.3, kz, .9);
    for (let k = 0; k < 6; k++) b.cyl(x - 8 + (k % 3) * .9, .5, z - 6 + Math.floor(k / 3) * .9, .4, 1, k % 2 ? '#6d7f8a' : '#c9524a'); W.solid(c, x - 7.1, .5, z - 5.55, 2.7, 1, 1.8, { climbable: false, kind: 'barrels' });
    sign(W, c, x - 6, 2.4, z + 9, 3.2, .7, 0, '#3f4a46'); person(c, x - 3, z - 1, Math.PI / 2, 'worker'); person(c, kx + 6.8, kz + 1.2, Math.PI, 'foreman');
    c.landmarks.push({ id, kind: 'yard', x: x - 2, z, radius: 9, name: 'the goods yard' });
  } else {
    // Signal box on stilts with a ladder, a semaphore signal, and a water crane.
    const bx = x + 1.5, bz = z - 3, by = 3;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { b.box(bx + sx * 1.4, by / 2, bz + sz * 1.4, .22, by, .22, '#6c6459'); W.solid(c, bx + sx * 1.4, by / 2, bz + sz * 1.4, .22, by, .22, { kind: 'post' }); }
    b.box(bx, by, bz, 3.6, .2, 3.6, '#8d7f67'); W.solid(c, bx, by, bz, 3.6, .2, 3.6, { kind: 'deck', climbable: false });
    hollowBox(W, c, bx, bz, 3.6, 3.6, by + .1, by + 2.6, .16, { side: 3, u: 0, width: 1, height: 2 }, '#8f5f4e');
    b.box(bx + 1.75, by + 1.6, bz, .04, 1.2, 2.8, '#a9c3c9'); b.box(bx, by + 2.7, bz, 4.2, .14, 4.2, '#4f5a56');
    for (let k = 0; k < 4; k++) { b.box(bx - 1 + k * .5, by + .5, bz + .8, .08, .8, .08, '#c9524a', 0, 0, (k % 2 ? .4 : -.3)); } // levers
    b.box(bx - .3, by + .3, bz + .8, 2.2, .3, .3, '#4a4f4c');
    ladder(W, c, bx - 1.95, bz, .2, by + .1, -Math.PI / 2);
    person(c, bx - .6, bz - .4, 0, 'worker', by + .1);
    const px = tx - 2.6, pz = z + 6; b.cyl(px, 2.6, pz, .08, 5.2, '#e9e3d2'); W.cylinderSolid(c, px, 0, pz, .09, 5.2, { kind: 'pole', walkable: false }); b.box(px + .5, 4.8, pz, 1.2, .25, .06, '#c9524a', .3); b.box(px + .9, 4.75, pz, .3, .25, .06, '#f3ead6', .3); b.box(px + .2, 4.3, pz, .35, .35, .08, '#2f3331'); b.ball(px + .2, 4.3, pz + .05, .12, .12, .04, '#6f9a4f');
    const wx = tx - 2.6, wz = z - 8; b.cyl(wx, 1.7, wz, .22, 3.4, '#5f6b66'); b.add(GEO.cylinder, wx + .9, 3.3, wz, .16, 2, .16, '#5f6b66', 0, 0, Math.PI / 2); b.cyl(wx + 1.8, 2.7, wz, .14, 1.2, '#5f6b66'); W.cylinderSolid(c, wx, 0, wz, .24, 3.4, { kind: 'post' });
    b.box(x - 7, .6, z + 7, 2.4, 1.2, 1.6, '#8f5f4e'); b.box(x - 7, 1.3, z + 7, 2.6, .2, 1.8, '#4f5a56'); W.solid(c, x - 7, .7, z + 7, 2.6, 1.4, 1.8, { kind: 'box', climbable: true }); // lineside hut
    for (let k = 0; k < 5; k++) b.box(x - 4 + k * .9, .15, z + 9.5, .25, .3, 2.6, '#6a5540', .1 * (k % 2)); // spare sleepers
    c.landmarks.push({ id, kind: 'signalbox', x: bx, z: bz, radius: 6, name: 'the signal box', y: by + .1 });
    W.tree(c, x - 9, z - 8, r, .8);
  }
  W.lamp(c, x - 10.5, z + 10.5);
}
function hollowBox(W, c, x, z, w, d, y0, y1, t, door, wall) {
  const b = c.batch, hgt = y1 - y0, ym = (y0 + y1) / 2;
  const wallBox = (wx, wz, ww, wd, yy = ym, hh = hgt) => { b.box(wx, yy, wz, ww, hh, wd, wall); W.solid(c, wx, yy, wz, ww, hh, wd, { kind: 'wall', climbable: true }); };
  for (let side = 0; side < 4; side++) {
    const a = side * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx, faceW = side % 2 ? d : w, half = side % 2 ? w / 2 : d / 2;
    const segs = door && side === door.side ? [[-faceW / 2, door.u - door.width / 2], [door.u + door.width / 2, faceW / 2]] : [[-faceW / 2, faceW / 2]];
    for (const [u0, u1] of segs) { const um = (u0 + u1) / 2, len = u1 - u0; if (len > .02) wallBox(x + nx * (half - t / 2) + tx * um, z + nz * (half - t / 2) + tz * um, side % 2 ? t : len, side % 2 ? len : t); }
    if (door && side === door.side && y0 + door.height < y1) wallBox(x + nx * (half - t / 2) + tx * door.u, z + nz * (half - t / 2) + tz * door.u, side % 2 ? t : door.width + .1, side % 2 ? door.width + .1 : t, (y0 + door.height + y1) / 2, y1 - y0 - door.height);
  }
  return { minX: x - w / 2 + t, maxX: x + w / 2 - t, minZ: z - d / 2 + t, maxZ: z + d / 2 - t };
}

// Engine, tender and two carriages drawn into a batch at the origin (track along z, engine at
// the -z end). Used by the moving train. Returns the solids' local boxes.
export function buildTrain(b) {
  const ty = .45, bodyH = 2.4, ex = 0, ez = -6.5, boxes = [];
  const wheels = (zz, n, len) => { for (let k = 0; k < n; k++) for (const s of [-1, 1]) b.add(GEO.cylinder, ex + s * 1.15, .5, zz - len / 2 + .9 + k * ((len - 1.8) / Math.max(1, n - 1)), .5, .22, .5, '#2f3331', 0, 0, Math.PI / 2); };
  b.box(ex, ty + .35, ez, 2.6, .5, 7, '#3f4a46'); wheels(ez, 3, 7);
  b.add(GEO.cylinder, ex, ty + 1.75, ez - .6, 1.05, 4.6, 1.05, '#4f7f96', Math.PI / 2);
  b.box(ex, ty + 1.5, ez + 2.3, 2.4, 2.2, 2.2, '#4f7f96'); b.box(ex, ty + 2.72, ez + 2.3, 2.7, .18, 2.5, '#2f3331');
  for (const s of [-1, 1]) b.box(ex + s * 1.21, ty + 1.8, ez + 2.3, .04, .8, 1, '#a9c3c9');
  b.cyl(ex, ty + 3.15, ez - 2.3, .3, 1, '#2b2622'); b.cyl(ex, ty + 3.7, ez - 2.3, .42, .18, '#2b2622');
  b.cyl(ex, ty + 2.95, ez - .6, .35, .5, '#c9a35c'); b.box(ex, ty + .9, ez - 3.7, 2.4, .7, .4, '#c9524a');
  b.ball(ex, ty + 1.4, ez - 3.55, .18, .18, .1, '#f6ecc8'); // headlamp
  boxes.push({ x: ex, y: ty + 1.5, z: ez, w: 2.6, h: 3.1, d: 7 });
  // Driver: a simple figure at the cab window.
  b.box(ex + .9, ty + 1.7, ez + 2.3, .36, .5, .3, '#4f5d6b'); b.ball(ex + .9, ty + 2.1, ez + 2.3, .14, .16, .14, '#e3b98f'); b.cyl(ex + .9, ty + 2.27, ez + 2.3, .16, .08, '#2f3331');
  let cz = 3.2; const cl = 10, fy = ty + .61, wallH = 2.25, doorW = 1.3;
  for (let n = 0; n < 2; n++, cz += cl + .7) {
    const paint = n ? '#6f6252' : '#8f5f4e', trim = '#e8dfc4';
    b.box(ex, ty + .35, cz, 2.6, .5, cl, '#3f4a46'); wheels(cz, 4, cl);
    // Floor (you can walk in), end walls, side walls split round a door in the middle of each side
    // with window holes, running boards under the doors, and a roof you can still ride on.
    b.box(ex, fy - .08, cz, 2.6, .16, cl, '#4a4f4c'); b.box(ex, fy + .005, cz, 2.3, .01, cl - .3, '#a8947a');
    boxes.push({ x: ex, y: fy - .08, z: cz, w: 2.6, h: .16, d: cl, kind: 'car', climbable: false });
    for (const e of [-1, 1]) { b.box(ex, fy + wallH / 2, cz + e * (cl / 2 - .04), 2.6, wallH, .08, paint); b.box(ex, fy + 1.4, cz + e * (cl / 2 - .02), .8, .7, .12, '#a9c3c9'); boxes.push({ x: ex, y: fy + wallH / 2, z: cz + e * (cl / 2 - .04), w: 2.6, h: wallH, d: .08, kind: 'wall', climbable: false }); }
    for (const s of [-1, 1]) {
      const wx = ex + s * 1.27;
      for (const e of [-1, 1]) {
        const z0 = e < 0 ? cz - cl / 2 : cz + doorW / 2, z1 = e < 0 ? cz - doorW / 2 : cz + cl / 2, zm = (z0 + z1) / 2, len = z1 - z0;
        b.box(wx, fy + .45, zm, .08, .9, len, paint); b.box(wx, fy + 1.95, zm, .08, .6, len, paint); // panels below and above the windows
        b.box(wx + s * .02, fy + .9, zm, .06, .12, len, trim);
        const bays = 2; for (let k = 0; k <= bays; k++) b.box(wx, fy + 1.4, z0 + k * (len / bays), .08, 1.1, k === 0 || k === bays ? .3 : .2, paint); // pillars
        boxes.push({ x: wx, y: fy + wallH / 2, z: zm, w: .08, h: wallH, d: len, kind: 'wall', climbable: false });
        // Two facing benches in each bay, and somebody on most of them.
        for (let k = 0; k < bays; k++) { const bz = z0 + (k + .5) * (len / bays); for (const f of [-1, 1]) { const sz = bz + f * .78; b.box(wx - s * .5, fy + .25, sz, .7, .1, .44, '#4f7f96'); b.box(wx - s * .5, fy + .6, sz + f * .2, .7, .8, .08, '#4f7f96'); boxes.push({ x: wx - s * .5, y: fy + .25, z: sz, w: .7, h: .5, d: .46, kind: 'seat', climbable: true });
          if ((k + (f > 0 ? 1 : 0) + n + (s > 0 ? 1 : 0)) % 3 !== 0) { const px = wx - s * .5, pc = ['#c9524a', '#4f7f96', '#6f9a4f', '#d9a53a', '#8f5f4e'][(k * 2 + (f > 0 ? 1 : 0) + n) % 5]; b.box(px, fy + .55, sz, .34, .5, .3, pc); b.ball(px, fy + .98, sz, .13, .15, .13, '#e3b98f'); b.box(px, fy + .35, sz - f * .28, .32, .14, .3, '#4a4f4c'); if (k % 2) b.box(px, fy + .7, sz - f * .22, .22, .3, .04, '#f1e8d2'); } }
        }
      }
      b.box(wx, fy + wallH - .12, cz, .08, .26, doorW + .2, paint); boxes.push({ x: wx, y: fy + wallH - .12, z: cz, w: .08, h: .26, d: doorW + .2, kind: 'wall', climbable: false }); // lintel
      b.box(wx + s * .28, fy - .12, cz, .5, .06, doorW + .6, '#2b2622'); boxes.push({ x: wx + s * .28, y: fy - .12, z: cz, w: .5, h: .06, d: doorW + .6, kind: 'step', climbable: false }); // running board
    }
    b.box(ex, fy + wallH + .06, cz, 2.3, .03, cl - .4, '#f6ecc8', 0, .6); // ceiling light strip
    b.add(GEO.cylinder, ex, ty + 2.95, cz, 1.45, cl + .1, .45, '#5c6b66', Math.PI / 2);
    b.box(ex, fy + wallH + .1, cz, 2.6, .12, cl, '#5c6b66'); boxes.push({ x: ex, y: fy + wallH + .1, z: cz, w: 2.6, h: .12, d: cl, kind: 'ceiling', climbable: false });
    b.box(ex, ty + .55, cz - cl / 2 - .4, .3, .3, .8, '#2b2622');
    boxes.push({ x: ex, y: ty + 2.95, z: cz, w: 2.9, h: .9, d: cl + .1, kind: 'car', climbable: true });
  }
  b.box(ex, ty + 1.9, cz - cl / 2 - .5, 2.2, .5, .1, '#c9524a'); // tail lamp board
  return { boxes, length: cz - cl / 2 - .3 - (ez - 3.5), front: ez - 3.9, back: cz - cl / 2 - .5, chimney: { x: ex, y: ty + 3.9, z: ez - 2.3 } };
}

// ---- airport ------------------------------------------------------------------------------------

// A whole chunk: terminal you can walk through, apron with the plane and its steps, a runway
// along x, a control tower, and the usual clutter. The plane itself is a moving object made
// by plane.js; this records where it parks.
export function makeAirport(W, c, ox, oz, r, key) {
  const b = c.batch, id = `airport:${key}`;
  b.box(ox, .02, oz, 58, .1, 58, '#b1aa98'); paving(c, ox, oz, 58, 58, .07);
  // Runway with centre line, numbers and edge lights; taxiway up to the apron.
  const rz = oz + 19;
  b.box(ox, .05, rz, 58, .08, 11, '#6e6f6a'); for (let k = -26; k <= 26; k += 4) b.box(ox + k, .095, rz, 2.2, .02, .28, '#e9e3d2');
  for (const s of [-1, 1]) { for (let k = 0; k < 4; k++) b.box(ox + s * (27 - k * 1.1), .095, rz + (k % 2 ? 2.4 : -2.4), .5, .02, 3.5, '#e9e3d2'); for (let k = -27; k <= 27; k += 3) { b.ball(ox + k, .14, rz + s * 5.7, .09, .09, .09, k % 6 ? '#f1e8d2' : '#4f7f96'); } }
  b.box(ox - 2, .055, oz + 9, 7, .08, 10, '#7a7b75'); for (let k = 0; k < 5; k++) b.box(ox - 2, .1, oz + 5 + k * 2, .25, .02, 1.2, '#e9c04b');
  // Apron and the parking stand.
  const px = ox - 2, pz = oz + 1; b.box(px, .06, pz, 24, .08, 16, '#7a7b75'); for (let k = -10; k <= 10; k += 2.5) b.box(px + k, .11, pz - 7.5, 1.5, .02, .25, '#e9c04b');
  c.airports = c.airports || []; c.airports.push({ id, x: ox, z: oz, runwayZ: rz, stand: { x: px, y: 0, z: pz, heading: 0 }, door: { x: px + 4.1, z: pz + 2.3 } });
  // Airstairs to the cabin door (plane.js parks the door at px + 4.1, pz + 2.3, sill 1.6 m).
  ramp(W, c, px + 4.1, .06, pz + 7.8, px + 4.1, 1.55, pz + 2.3, 1.2, .08, '#e9e3d2');
  b.box(px + 4.1, 1.52, pz + 1.95, 1.2, .1, .9, '#e9e3d2'); W.solid(c, px + 4.1, 1.5, pz + 1.95, 1.2, .14, .9, { kind: 'deck', climbable: false });
  for (const s of [-1, 1]) { b.box(px + 4.1 + s * .62, 1.95, pz + 1.95, .05, .9, .9, '#4f5a56'); b.add(GEO.box, px + 4.1 + s * .62, 1.3, pz + 5.05, .05, .06, 5.6, '#4f5a56', -.27, 0, 0); for (let k = 0; k < 6; k++) b.box(px + 4.1 + s * .62, .55 + k * .27, pz + 7.4 - k * 1, .05, .9, .05, '#4f5a56'); }
  for (const s of [-1, 1]) b.add(GEO.cylinder, px + 4.1 + s * .78, .2, pz + 7.9, .2, .14, .2, '#2f3331', 0, 0, Math.PI / 2);
  // Ground crew clutter: luggage train, fuel bowser, cones, a marshaller with bats.
  const lx = px - 9, lz = pz + 5; b.box(lx, .5, lz, 1.1, .6, 1.6, '#d9a53a'); b.box(lx, 1, lz - .3, 1, .4, .8, '#2f3331'); for (let k = 0; k < 3; k++) { const tz = lz + 2.2 + k * 1.9; b.box(lx, .45, tz, 1.1, .1, 1.6, '#8a9893'); b.box(lx, .9, tz, 1.15, .8, 1.7, '#6d7f8a'); for (let j = 0; j < 4; j++) b.box(lx - .3 + (j % 2) * .6, .62 + Math.floor(j / 2) * .4, tz - .4 + (j % 2) * .7, .5, .35, .6, ['#c9524a', '#4f7f96', '#e9c04b', '#2f3331'][(j + k) % 4]); for (const s of [-1, 1]) b.add(GEO.cylinder, lx + s * .6, .25, tz, .22, .15, .22, '#2f3331', 0, 0, Math.PI / 2); W.solid(c, lx, .7, tz, 1.15, 1.3, 1.7, { kind: 'car', climbable: true }); }
  W.solid(c, lx, .6, lz, 1.1, 1.2, 1.6, { kind: 'car', climbable: true });
  const fx = px + 11, fz = pz + 5; b.add(GEO.cylinder, fx, 1.2, fz, 1, 4.5, 1, '#e9e3d2', Math.PI / 2); b.box(fx, .9, fz + 2.9, 1.9, 1.5, 1.4, '#c9524a'); b.box(fx, .5, fz, 2, .5, 5.6, '#3f4a46'); for (const s of [-1, 1]) for (const e of [-2, 0, 2.2]) b.add(GEO.cylinder, fx + s * 1, .45, fz + e, .45, .3, .45, '#2f3331', 0, 0, Math.PI / 2); W.solid(c, fx, 1.1, fz + .2, 2, 2.2, 6.4, { kind: 'car', climbable: true });
  for (let k = 0; k < 6; k++) b.add(GEO.cone, px - 6 + k * 2.4, .4, pz - 7, .3, .7, .3, k % 2 ? '#e9c04b' : '#2f3331');
  person(c, px + 2, pz - 5, 0, 'worker'); person(c, lx + 1.5, lz + 1, -Math.PI / 2, 'driver');
  // Windsock on a pole, a fence along the runway side, a line of landing lights.
  b.cyl(ox + 26, 3, oz + 11, .06, 6, '#e9e3d2'); W.cylinderSolid(c, ox + 26, 0, oz + 11, .07, 6, { kind: 'pole', walkable: false }); b.add(GEO.cone, ox + 27.1, 5.9, oz + 11, .3, 1.6, .3, '#f29b4b', 0, 0, -Math.PI / 2 - .25); b.add(GEO.cone, ox + 27.6, 5.75, oz + 11, .2, .8, .2, '#e9e3d2', 0, 0, -Math.PI / 2 - .25);
  for (let k = -28; k <= 28; k += 2) { b.box(ox + k, .7, oz + 12.5, .06, 1.4, .06, '#8a9893'); } b.box(ox, 1.35, oz + 12.5, 56, .05, .04, '#8a9893'); b.box(ox, .8, oz + 12.5, 56, .05, .04, '#8a9893'); W.solid(c, ox, .7, oz + 12.5, 56, 1.4, .08, { kind: 'rail', climbable: false });
  for (const gx of [ox - 6, ox + 6]) { b.box(gx, .5, oz + 12.5, 1.6, 1, .06, '#e9c04b'); }
  // Terminal: glass front, flat roof with a sign, inside a check-in desk, departures board, seats, café corner.
  const tx = ox - 4, tz = oz - 16, tw = 30, td = 12, th = 4.6, fy = .42, t = .32, wall = '#e9e3d2';
  b.box(tx, .18, tz, tw + .4, .45, td + .4, '#b8b6a0'); b.box(tx, fy - .05, tz, tw - .1, .1, td - .1, '#cfc8b4'); W.solid(c, tx, fy / 2, tz, tw, fy, td, { climbable: false, kind: 'floor' });
  const inside = hollowBox(W, c, tx, tz, tw, td, 0, th, t, { side: 0, u: -6, width: 2.6, height: 3 }, wall);
  hollowBox(W, c, tx, tz, tw, td, th, th + .3, t, null, '#5f6b66'); b.box(tx, th + .15, tz, tw, .3, td, '#5f6b66'); W.solid(c, tx, th + .15, tz, tw, .3, td, { kind: 'roof', climbable: false });
  for (let k = -12; k <= 12; k += 3) { b.box(tx + k, 2.6, tz + td / 2 + .02, 2.4, 2.4, .06, '#a9c3c9'); b.box(tx + k, 2.6, tz + td / 2 + .05, 2.5, 2.5, .03, '#5f6b66'); } // windows set into the front
  for (const s of [-1, 1]) b.box(tx - 6 + s * 1.4, 1.5, tz + td / 2, .12, 3, .12, '#5f6b66'); b.box(tx - 6, 3.08, tz + td / 2, 3, .16, .2, '#5f6b66');
  b.box(tx - 6, 3.4, tz + td / 2 + 1.6, 6, .16, 3.4, '#5f6b66'); W.solid(c, tx - 6, 3.4, tz + td / 2 + 1.6, 6, .16, 3.4, { kind: 'awning', climbable: false }); for (const s of [-1, 1]) { b.box(tx - 6 + s * 2.8, 1.7, tz + td / 2 + 3.1, .14, 3.4, .14, '#5f6b66'); W.solid(c, tx - 6 + s * 2.8, 1.7, tz + td / 2 + 3.1, .14, 3.4, .14, { kind: 'post' }); }
  sign(W, c, tx + 4, th + 1.1, tz + td / 2 + .1, 9, 1.2, 0, '#4f7f96'); b.box(tx + 4, th + 1.1, tz + td / 2 + .2, 7, .5, .02, '#f3ead6');
  // Inside.
  const dx = tx - 8, dz = tz - td / 2 + 1.6; b.box(dx, fy + .55, dz, 7, 1.1, 1, '#4f7f96'); b.box(dx, fy + 1.12, dz, 7.1, .06, 1.1, '#e3dcc6'); W.solid(c, dx, fy + .58, dz, 7.1, 1.18, 1.1, { climbable: false, kind: 'counter' });
  for (let k = 0; k < 3; k++) { b.box(dx - 2.4 + k * 2.4, fy + 1.4, dz, .5, .4, .05, '#2f3331'); b.box(dx - 2.4 + k * 2.4, fy + 1.4, dz + .03, .4, .3, .01, '#a9c3c9'); person(c, dx - 2.4 + k * 2.4, dz - .9, 0, 'suit', fy); }
  b.box(dx + 3.4, fy + .45, dz + 1.4, 1.2, .1, .8, '#8a9893'); b.box(dx + 3.4, fy + .25, dz + 1.4, 1.2, .06, .8, '#3f4a46'); // scales
  b.box(tx + 3, fy + 3.2, tz - td / 2 + t + .1, 6, 1.5, .1, '#2f3331'); for (let k = 0; k < 5; k++) { b.box(tx + 1, fy + 3.7 - k * .28, tz - td / 2 + t + .16, 1.6, .14, .02, '#e9c04b'); b.box(tx + 4, fy + 3.7 - k * .28, tz - td / 2 + t + .16, 2.4, .14, .02, k === 2 ? '#d9544f' : '#f3ead6'); } // departures board
  for (let row = 0; row < 3; row++) for (let k = 0; k < 6; k++) { const sx = tx - 1 + k * 1.1, sz = tz + 1.5 + row * 2.2; b.box(sx, fy + .42, sz, .9, .08, .6, '#5f6b66'); b.box(sx, fy + .75, sz - .25, .9, .6, .08, '#5f6b66'); if (k === 0) { b.box(sx + 2.75, fy + .2, sz, 6.5, .1, .1, '#8a9893'); for (const u of [-.4, 2.3, 5.9]) b.box(sx + u, fy + .1, sz, .08, .2, .5, '#8a9893'); } W.solid(c, tx + 1.75, fy + .3, sz, 6.6, .6, .7, { climbable: false, kind: 'seat' }); }
  person(c, tx + .1, tz + 1.6, Math.PI, 'parent', fy, 'sit'); person(c, tx + 1.2, tz + 1.6, Math.PI, 'kid', fy, 'sit'); person(c, tx + 3.4, tz + 3.8, Math.PI, 'grandma', fy, 'sit'); person(c, tx - 4, tz + 2.5, .6, 'suit', fy);
  for (let k = 0; k < 4; k++) { const bx = tx + 8 + (k % 2) * .8, bz = tz + 2 + Math.floor(k / 2) * 1.2; b.box(bx, fy + .4, bz, .5, .8, .35, ['#c9524a', '#4f7f96', '#6f6252', '#e9c04b'][k]); b.box(bx, fy + .85, bz, .2, .12, .05, '#2f3331'); } // suitcases
  const kx = tx + tw / 2 - 2.6, kz = tz + 2; b.box(kx, fy + .5, kz, 1, 1, 4, '#6d5a44'); b.box(kx, fy + 1.02, kz, 1.2, .08, 4.2, '#e3dcc6'); W.solid(c, kx, fy + .53, kz, 1.2, 1.06, 4.2, { climbable: false, kind: 'counter' }); b.box(kx, fy + 1.35, kz - 1.2, .6, .55, .7, '#8a9893'); b.cyl(kx, fy + 1.2, kz + .8, .3, .04, '#f1e8d2'); b.cyl(kx, fy + 1.3, kz + .8, .24, .14, '#e39a6e'); person(c, kx + 1.1, kz, -Math.PI / 2, 'barista', fy);
  for (let k = 0; k < 3; k++) { const tx2 = kx - 2.2, tz2 = kz - 3 + k * 2.2; b.cyl(tx2, fy + .74, tz2, .5, .06, '#e3dcc6'); b.cyl(tx2, fy + .36, tz2, .06, .72, '#4a4f4c'); W.cylinderSolid(c, tx2, fy, tz2, .5, .78, { climbable: false, kind: 'table' }); }
  for (let k = 0; k < 4; k++) { b.beam([tx - 10 + k * 7, th, tz], [tx - 10 + k * 7, fy + 3.4, tz], .015, '#4a4f4c'); b.add(GEO.cone, tx - 10 + k * 7, fy + 3.3, tz, .5, .4, .5, '#f1e8d2'); }
  b.box(tx, fy + .02, tz + .2, 12, .02, 1.6, '#4f7f96'); // a strip of carpet from the door to the desks
  const gx = tx + 9, gz = tz - td / 2 + t + .5; b.box(gx, fy + 1.1, gz, 1.6, 2.2, .3, '#8a9893'); b.box(gx, fy + 2.3, gz, 1.7, .1, .4, '#2f3331'); b.box(gx, fy + 1.1, gz + .17, 1.2, 1.8, .02, '#5f6b66'); // gate door (to the apron, closed)
  b.box(tx - 6, fy + 2.9, tz + td / 2 - t - .2, 1.8, .4, .06, '#4f7f96'); // exit sign
  c.landmarks.push({ id, kind: 'airport', x: tx, z: tz, radius: 6, name: 'the airport', inside, y: fy });
  // Control tower: a tall shaft with a cab on top you can reach by its spiral of ledges.
  const cx = ox + 22, cz = oz - 20; b.add(GEO.tapered, cx, 7, cz, 1.6, 14, 1.6, '#cfc8b4'); W.cylinderSolid(c, cx, 0, cz, 1.6, 14, { kind: 'wall', climbable: true });
  for (let k = 0; k < 12; k++) { const a = k * .9, ly = 1.3 + k * 1.05; b.box(cx + Math.cos(a) * 1.7, ly, cz + Math.sin(a) * 1.7, 1.1, .12, .5, '#8a9893', -a); W.solid(c, cx + Math.cos(a) * 1.7, ly, cz + Math.sin(a) * 1.7, .9, .12, .9, { kind: 'ledge', climbable: false }); }
  b.cyl(cx, 14.3, cz, 2.6, .5, '#5f6b66'); W.cylinderSolid(c, cx, 14.05, cz, 2.6, .5, { kind: 'deck', climbable: false }); b.cyl(cx, 15.5, cz, 2.3, 2, '#a9c3c9'); b.cyl(cx, 16.7, cz, 2.8, .3, '#5f6b66'); b.cyl(cx, 17.6, cz, .05, 1.6, '#8a9893'); b.ball(cx, 18.4, cz, .15, .15, .15, '#d9544f'); c.extras.push({ kind: 'beacon', x: cx, y: 18.4, z: cz });
  W.cylinderSolid(c, cx, 14.55, cz, 2.3, 2, { kind: 'wall', climbable: false });
  c.landmarks.push({ id: id + ':tower', kind: 'tower', x: cx, z: cz, radius: 3, name: 'the control tower', y: 14.55 });
  // Car park, hedges, a sign at the road.
  for (let k = 0; k < 4; k++) { b.box(ox + 14 + k * 3.2, .09, oz - 24, .12, .02, 5, '#e9e3d2'); }
  sign(W, c, ox - 20, 2.6, oz - 27, 5, 1, 0, '#4f7f96'); for (const s of [-1, 1]) { b.cyl(ox - 20 + s * 2.3, 1.1, oz - 27, .08, 2.2, '#4f5a56'); }
  for (let k = -24; k <= 24; k += 4) { b.ball(ox + k, .5, oz - 28.6, 1.6, .8, 1.1, '#6f8a52'); }
  W.lamp(c, ox - 26, oz - 26); W.lamp(c, ox + 26, oz - 26);
  person(c, ox - 14, oz - 24, 0, 'suit'); person(c, ox - 16, oz - 23, 2.5, 'jogger');
}

// ---- works, lobby and depot floors ------------------------------------------------------------

function worksFloor(W, c, x, z, inside, fy, r, id) {
  const b = c.batch, pick = (list) => list[Math.floor(r() * list.length)];
  // Two lathes along the north wall, a press, a bench, a sand-floor casting corner, an office box.
  for (let k = 0; k < 2; k++) {
    const lx = inside.minX + 3 + k * 4.5, lz = inside.minZ + 1.3;
    b.box(lx, fy + .5, lz, 3, 1, 1.1, '#5f6b66'); b.box(lx, fy + 1.1, lz, 3.1, .2, 1.2, '#4a4f4c'); b.add(GEO.cylinder, lx, fy + 1.45, lz, .3, 2.2, .3, '#8a9893', 0, 0, Math.PI / 2); b.box(lx - 1.2, fy + 1.5, lz, .5, .9, .9, '#4a4f4c'); b.cyl(lx + 1.3, fy + 1.45, lz + .5, .18, .1, '#c9524a', Math.PI / 2);
    W.solid(c, lx, fy + .75, lz, 3.1, 1.5, 1.2, { climbable: true, kind: 'machine' });
  }
  const px = inside.maxX - 3, pz = inside.minZ + 1.6; b.box(px, fy + .4, pz, 2, .8, 1.6, '#4a4f4c'); for (const s of [-1, 1]) b.box(px + s * .8, fy + 2.2, pz, .3, 3.6, .3, '#5f6b66'); b.box(px, fy + 3.9, pz, 2.2, .5, 1.2, '#5f6b66');
  W.solid(c, px, fy + .4, pz, 2, .8, 1.6, { climbable: true, kind: 'machine' }); c.extras.push({ kind: 'piston', x: px, y: fy + 2.3, z: pz });
  const bx = inside.minX + 2.8, bz = inside.maxZ - 1.1; b.box(bx, fy + .85, bz, 4.5, .1, .8, '#a78a62'); for (const s of [-1, 1]) for (const e of [-1, 1]) b.box(bx + s * 2, fy + .4, bz + e * .3, .1, .8, .1, '#6d5a44'); W.solid(c, bx, fy + .45, bz, 4.5, .9, .8, { climbable: true, kind: 'bench' });
  for (let k = 0; k < 5; k++) b.cyl(bx - 1.6 + k * .7, fy + 1, bz, .08, .2, pick(['#c9524a', '#8a9893', '#e9c04b'])); b.box(bx + 1.5, fy + 1.02, bz, .5, .25, .3, '#4a4f4c');
  b.box(bx, fy + 2, inside.maxZ - .1, 4.5, 1.2, .05, '#cbbfa3'); for (let k = 0; k < 8; k++) b.box(bx - 1.9 + k * .55, fy + 1.9 + (k % 3) * .2, inside.maxZ - .18, .18, .5, .08, '#4a4f4c');
  const ox = inside.maxX - 2.2, oz = inside.maxZ - 2; b.box(ox, fy + 1.4, oz, 4, 2.8, 3.6, '#cbbfa3'); b.box(ox, fy + 1.7, oz - 1.82, 3, 1.1, .05, '#a9c3c9'); b.box(ox - 2.02, fy + 1.7, oz, .05, 1.1, 2.6, '#a9c3c9'); b.box(ox, fy + 2.85, oz, 4.2, .1, 3.8, '#4a4f4c');
  W.solid(c, ox, fy + 1.4, oz, 4, 2.8, 3.6, { climbable: true, kind: 'wall', buildingId: id }); b.box(ox - 2.4, fy + 1.4, oz + 1, .06, 1, .5, '#f3ead6'); // office box with a notice
  b.box(x, fy + .02, z + 1, 6, .02, 4, '#9a9284'); for (let k = 0; k < 6; k++) b.cyl(x - 2 + (k % 3) * 2, fy + .25, z + (k < 3 ? 0 : 2), .45, .5, '#8a9893'); // casting floor with moulds
  for (let k = 0; k < 4; k++) b.cyl(inside.minX + 1 + (k % 2) * .9, fy + .5, z - 1 + Math.floor(k / 2) * .9, .4, 1, k % 2 ? '#6d7f8a' : '#c9524a'); W.solid(c, inside.minX + 1.45, fy + .5, z - .55, 1.9, 1, 1.9, { climbable: false, kind: 'barrels' });
  for (let k = 0; k < 3; k++) W.crate(c, inside.maxX - 1 - (k % 2) * .9, fy + .4 + Math.floor(k / 2) * .8, z - 2, .8);
  c.extras.push({ kind: 'rollers', x: x - 1, y: fy + .88, z: z + 3.6, count: 8, spacing: .65 }); b.box(x - 1, fy + .75, z + 3.6, 5.6, .12, 1, '#4a4f4c'); for (const s of [-2.3, 0, 2.3]) for (const e of [-1, 1]) b.box(x - 1 + s, fy + .35, z + 3.6 + e * .4, .12, .7, .12, '#4a4f4c'); W.solid(c, x - 1, fy + .75, z + 3.6, 5.6, .14, 1, { climbable: false, kind: 'belt' });
  for (let k = 0; k < 3; k++) { b.beam([x - 5 + k * 5, 6.2, z], [x - 5 + k * 5, fy + 4.2, z], .02, '#4a4f4c'); b.add(GEO.cone, x - 5 + k * 5, fy + 4.1, z, .7, .5, .7, '#5f6b66'); b.ball(x - 5 + k * 5, fy + 3.95, z, .12, .12, .12, '#f6ecc8'); }
  b.box(inside.minX + .12, fy + 1.6, z + 3, .04, .7, 2.2, '#c9524a'); b.box(inside.minX + .16, fy + 1.6, z + 3, .02, .4, 1.8, '#f3ead6'); // SAFETY FIRST, more or less
  roomPerson(c, inside.minX + 3, inside.minZ + 2.6, Math.PI, 'worker', fy); roomPerson(c, px, pz + 1.6, Math.PI, 'worker', fy); roomPerson(c, ox - 1, oz, -Math.PI / 2, 'foreman', fy, 'sit'); roomPerson(c, bx, bz - .9, 0, 'uncle', fy);
  c.landmarks.push({ id: id + ':in', kind: 'worksfloor', x, z, radius: 4, name: 'the works floor', inside, y: fy });
}

function lobbyFloor(W, c, x, z, inside, fy, r, id, frame) {
  const b = c.batch, w = inside.maxX - inside.minX, d = inside.maxZ - inside.minZ;
  const dx = x, dz = inside.minZ + 1.8; b.box(dx, fy + .55, dz, 4.2, 1.1, .9, '#5f6b66'); b.box(dx, fy + 1.12, dz, 4.3, .06, 1, '#e3dcc6'); b.box(dx, fy + .6, dz - .46, 4, .3, .02, '#c9a35c'); W.solid(c, dx, fy + .58, dz, 4.3, 1.18, 1, { climbable: false, kind: 'counter' });
  b.box(dx + 1.2, fy + 1.3, dz, .5, .35, .05, '#2f3331'); b.cyl(dx - 1.2, fy + 1.25, dz, .14, .25, '#6f9a4f'); roomPerson(c, dx, dz - 1, 0, 'suit', fy);
  for (const s of [-1, 1]) { const lx = x + s * 1.3, lz = inside.minZ + .3; b.box(lx, fy + 1.15, lz, 1.2, 2.3, .14, '#8a9893'); b.box(lx, fy + 1.15, lz + .08, .04, 2.1, .02, '#4a4f4c'); b.box(lx, fy + 2.4, lz, 1.4, .18, .22, '#4a4f4c'); } b.box(x, fy + 1.1, inside.minZ + .36, .14, .2, .04, '#e9c04b'); // lifts
  for (const s of [-1, 1]) { const sx = x + s * (w / 2 - 1.3), sz = z + 1; b.box(sx, fy + .25, sz, .9, .5, 2.6, '#4f7f96'); b.box(sx + s * .35, fy + .65, sz, .2, .4, 2.6, '#4f7f96'); W.solid(c, sx, fy + .3, sz, .9, .6, 2.6, { climbable: false, kind: 'sofa' }); b.cyl(sx - s * 1.2, fy + .36, sz, .5, .06, '#e3dcc6'); b.cyl(sx - s * 1.2, fy + .15, sz, .08, .3, '#4a4f4c'); W.cylinderSolid(c, sx - s * 1.2, fy, sz, .5, .4, { climbable: false, kind: 'table' }); }
  roomPerson(c, x - (w / 2 - 1.3), z + 1.6, Math.PI / 2, 'suit', fy, 'sit');
  b.add(GEO.pot, inside.minX + .9, fy + .35, inside.maxZ - .9, .45, .7, .45, '#5f6b66'); for (let k = 0; k < 6; k++) b.box(inside.minX + .9 + Math.cos(k * 1.1) * .2, fy + 1.3 + k * .06, inside.maxZ - .9 + Math.sin(k * 1.1) * .2, .16, .9, .05, '#5f7f4a', 0, -k * 1.1, Math.cos(k) * .5);
  b.box(inside.maxX - .2, fy + 1.6, z - 1, .05, 1.6, 1.1, '#2f3331'); for (let k = 0; k < 7; k++) b.box(inside.maxX - .24, fy + 2.25 - k * .2, z - 1, .02, .08, .8, k % 2 ? '#e9e3d2' : '#c9a35c'); // directory
  b.box(x, fy + .015, inside.minZ + d * .5, 2.6, .03, d - 1, '#8f5f4e'); b.cyl(x, fy + .02, z + .5, 1.3, .02, '#c9a35c'); // runner and a brass floor medallion
  for (let k = -1; k <= 1; k++) { b.beam([x + k * 3, fy + 3, z], [x + k * 3, fy + 2.5, z], .015, '#4a4f4c'); b.ball(x + k * 3, fy + 2.4, z, .22, .22, .22, '#f6ecc8'); }
  c.landmarks.push({ id: id + ':in', kind: 'lobby', x, z, radius: 4, name: 'the lobby', inside, y: fy });
}

function depotFloor(W, c, x, z, inside, fy, r, id) {
  const b = c.batch, pick = (list) => list[Math.floor(r() * list.length)];
  for (let row = 0; row < 3; row++) {
    const rz = inside.minZ + 2.2 + row * 3.6, len = inside.maxX - inside.minX - 5;
    for (const yy of [1.2, 2.6, 4]) b.box(x - 1.5, fy + yy, rz, len, .1, 1.2, '#d9a53a');
    for (let k = 0; k <= 4; k++) for (const e of [-1, 1]) b.box(x - 1.5 - len / 2 + k * len / 4, fy + 2.2, rz + e * .58, .1, 4.4, .1, '#4f7f96');
    for (let k = 0; k < 7; k++) for (const yy of [0, 1.2, 2.6]) if (r() > .3) W.crate(c, x - 1.5 - len / 2 + .6 + k * (len - 1.2) / 6, fy + yy + .42 + (yy ? .05 : 0), rz + (r() - .5) * .3, .7 + r() * .2);
    W.solid(c, x - 1.5, fy + 2.25, rz, len, 4.5, 1.3, { climbable: true, kind: 'shelf' });
  }
  for (let k = 0; k < 3; k++) { const px = inside.maxX - 1.2, pz = inside.minZ + 1.2 + k * 1.6, ph = .3 + (k % 2) * .4; b.box(px, fy + ph / 2, pz, 1.3, ph, 1.3, k % 2 ? '#b89a70' : '#c7a97b'); W.solid(c, px, fy + ph / 2, pz, 1.3, ph, 1.3, { climbable: false, kind: 'pallet' }); }
  const dx = inside.minX + 1.4, dz = inside.maxZ - 1.2; b.box(dx, fy + .74, dz, 1.6, .06, .8, '#a78a62'); for (const u of [-.7, .7]) for (const v of [-.3, .3]) b.box(dx + u, fy + .36, dz + v, .07, .72, .07, '#4a4f4c'); W.solid(c, dx, fy + .4, dz, 1.6, .8, .8, { climbable: false, kind: 'desk' }); b.box(dx, fy + .95, dz, .4, .3, .05, '#2f3331'); b.box(dx - .5, fy + .78, dz, .3, .04, .4, '#f3ead6');
  roomPerson(c, dx, dz - .9, Math.PI, 'worker', fy); roomPerson(c, x + 2, inside.minZ + 4, -Math.PI / 2, 'worker', fy);
  b.box(x, fy + .015, z, 2.4, .03, inside.maxZ - inside.minZ - 1, '#e9c04b'); for (let k = 0; k < 6; k++) b.box(x + (k % 2 ? 1.1 : -1.1), fy + .02, inside.minZ + 1 + k * 2, .2, .02, 1, '#2f3331'); // painted walkway
  for (let k = 0; k < 3; k++) { b.beam([x - 4 + k * 4, 5, z], [x - 4 + k * 4, fy + 4.4, z], .02, '#4a4f4c'); b.add(GEO.cone, x - 4 + k * 4, fy + 4.3, z, .7, .5, .7, '#5f6b66'); b.ball(x - 4 + k * 4, fy + 4.15, z, .12, .12, .12, '#f6ecc8'); }
  c.landmarks.push({ id: id + ':in', kind: 'depotfloor', x, z, radius: 4, name: 'inside the depot', inside, y: fy });
}
