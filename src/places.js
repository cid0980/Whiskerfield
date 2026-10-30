import * as THREE from 'three';
import { GEO } from './world.js';

// Landmark lots. Each function fills one 24 x 24 m lot centred on (x, z) in chunk `c`.
// They draw with c.batch (merged static geometry), register colliders through the World helpers,
// and leave behind jobs (standing NPCs), extras (animated meshes), grounds (walkable paving
// heights) and landmarks (places the cat can discover).

const TAU = Math.PI * 2;
const Z = new THREE.Vector3(0, 0, 1);
const pick = (r, list) => list[Math.floor(r() * list.length)];

// ---- shared bits -----------------------------------------------------------------------------

// A walkable slope: short segments so the cat climbs it as a run of shallow steps.
export function ramp(W, c, x1, y1, z1, x2, y2, z2, width, thick, color) {
  const a = new THREE.Vector3(x1, y1, z1), b = new THREE.Vector3(x2, y2, z2), delta = b.clone().sub(a), len = delta.length();
  const n = Math.max(2, Math.ceil(len / .42)), q = new THREE.Quaternion().setFromUnitVectors(Z, delta.clone().normalize()), e = new THREE.Euler().setFromQuaternion(q);
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
  b.box(fx, h / 2, fz, w, h, d, brick);
  const body = W.solid(c, fx, h / 2, fz, w, h, d, { kind: 'wall', buildingId: id });
  const building = { id, x: fx, z: fz, w, d, h, roofType: 2, roofRise: 0, wall: brick, roofColor: '#7b8a86', cx: c.cx, cz: c.cz, kind: 'roof', body };
  c.buildings.push(building);
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
  b.box(fx - w / 2 - .05, 2.1, fz + 1, .1, 4.2, 4, '#5f6b66'); b.box(fx - w / 2 - .1, 2.1, fz + 1, .05, 3.8, .12, '#3f4a46');
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
  b.box(x, h / 2 + .3, z, w, h, d, glass);
  const body = W.solid(c, x, h / 2 + .15, z, w, h + .3, d, { kind: 'wall', buildingId: id });
  const building = { id, x, z, w, d, h: h + .3, roofType: 2, roofRise: 0, wall: glass, roofColor: '#9aa49c', cx: c.cx, cz: c.cz, kind: 'roof', body };
  c.buildings.push(building);
  // Ledges every floor and vertical fins: a facade made for climbing.
  for (let f = 1; f <= floors; f++) { const y = .3 + f * fh; b.box(x, y, z, w + .5, .16, d + .5, frame); }
  const fins = Math.floor(w / 1.6);
  for (let k = 0; k <= fins; k++) { const u = -w / 2 + k * (w / fins); b.box(x + u, h / 2 + .3, z + d / 2 + .12, .14, h, .24, frame); b.box(x + u, h / 2 + .3, z - d / 2 - .12, .14, h, .24, frame); }
  const finsD = Math.floor(d / 1.6);
  for (let k = 0; k <= finsD; k++) { const u = -d / 2 + k * (d / finsD); b.box(x + w / 2 + .12, h / 2 + .3, z + u, .24, h, .14, frame); b.box(x - w / 2 - .12, h / 2 + .3, z + u, .24, h, .14, frame); }
  // Lobby: recessed glass doors and a canopy you can jump onto from a planter.
  b.box(x, 1.7, z + d / 2 + .3, 4.6, 3.1, .3, '#2f3a3a'); b.box(x, 3.6, z + d / 2 + 1.4, 6.5, .22, 2.8, frame);
  W.solid(c, x, 3.6, z + d / 2 + 1.4, 6.5, .22, 2.8, { climbable: false, kind: 'awning' });
  W.pot(c, x + 4.4, z + d / 2 + 2.6, r, 1.2); W.pot(c, x - 4.4, z + d / 2 + 2.6, r, 1.2);
  W.bench(c, x + 7, z + d / 2 + 3, 0); W.bench(c, x - 7, z + d / 2 + 3, 0);
  // Roof: parapet, plant room, antenna mast, helipad.
  const top = h + .3;
  for (const s of [-1, 1]) { b.box(x + s * (w / 2 - .15), top + .4, z, .3, .8, d, frame); b.box(x, top + .4, z + s * (d / 2 - .15), w, .8, .3, frame); W.solid(c, x + s * (w / 2 - .15), top + .4, z, .3, .8, d, { climbable: false }); W.solid(c, x, top + .4, z + s * (d / 2 - .15), w, .8, .3, { climbable: false }); }
  b.box(x - w * .22, top + 1.2, z - d * .2, 4, 2.4, 3.2, '#a9a79a'); W.solid(c, x - w * .22, top + 1.2, z - d * .2, 4, 2.4, 3.2, { buildingId: id, building, kind: 'wall' });
  b.cyl(x + w * .25, top + .5, z + d * .25, 2.4, .12, '#8c8a7e'); b.box(x + w * .25, top + .57, z + d * .25, .5, .02, 1.6, '#e9e3d2'); b.box(x + w * .25, top + .57, z + d * .25, 1.6, .02, .4, '#e9e3d2');
  b.add(GEO.tapered, x + w * .3, top + 4.5, z - d * .3, .12, 9, .12, '#8c8a7e'); W.cylinderSolid(c, x + w * .3, top, z - d * .3, .13, 9, { climbable: true, kind: 'mast' }); b.ball(x + w * .3, top + 9.1, z - d * .3, .18, .18, .18, '#d9544f');
  c.extras.push({ kind: 'beacon', x: x + w * .3, y: top + 9.1, z: z - d * .3 });
  // Window-cleaning cradle part way up: a mid-air resting platform.
  const cy = .3 + Math.floor(floors * .55) * fh - .9; b.box(x + 2, cy, z + d / 2 + .7, 3, .15, 1, '#5f6b66'); W.solid(c, x + 2, cy, z + d / 2 + .7, 3, .15, 1, { climbable: false, kind: 'cradle' });
  for (const s of [-1, 1]) { b.box(x + 2 + s * 1.4, (cy + top) / 2, z + d / 2 + .7, .04, top - cy, .04, '#3f4a46'); b.box(x + 2 + s * 1.4, cy + .4, z + d / 2 + .7, .06, .8, 1, '#5f6b66'); }
  c.landmarks.push({ id, kind: 'tower', x, z, radius: 9, name: 'the tower top', y: top });
  person(c, x + 1.5, z + d / 2 + 2.2, Math.PI, 'suit'); person(c, x - 2, z + d / 2 + 4, r() * TAU, 'suit');
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
  b.box(x - 2, h / 2, z, w, h, d, color);
  const body = W.solid(c, x - 2, h / 2, z, w, h, d, { kind: 'wall', buildingId: id });
  const building = { id, x: x - 2, z, w, d, h, roofType: 2, roofRise: 0, wall: color, roofColor: '#7b8a86', cx: c.cx, cz: c.cz, kind: 'roof', body };
  c.buildings.push(building);
  for (let k = 0; k < 7; k++) b.box(x - 2 - w / 2 + 1 + k * 2.3, h / 2, z + d / 2 + .05, .14, h, .12, '#6c7873');
  for (let k = 0; k < 3; k++) { const dx = x - 2 - 5 + k * 5; b.box(dx, 1.9, z + d / 2 + .06, 3.6, 3.8, .1, k === 1 ? '#5f6b66' : '#8f5f4e'); b.box(dx, 1.9, z + d / 2 + .1, 3.4, .1, .05, '#3f4a46'); }
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
