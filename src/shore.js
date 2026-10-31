// Water. A lake fills a whole block now and then, with a jetty and a pair of rowing boats; and
// to the north the town simply stops at a promenade, a beach and a harbour wall, beyond which
// there is nothing but sea. Balloon fields are here too: a mown circle where a balloon waits.
import { CHUNK, GEO } from './world.js';

const TAU = Math.PI * 2;
export const WATER = '#7fb3ad', SEA = '#6fa3a6', SAND = '#dccba0', SHALLOWS = '#8fc0b8';

function reeds(W, c, x, z, r, n) {
  const b = c.batch;
  for (let i = 0; i < n; i++) { const a = r() * TAU, d = .3 + r() * .8, h = .5 + r() * .5; b.box(x + Math.cos(a) * d, h / 2, z + Math.sin(a) * d, .06, h, .06, i % 3 ? '#8aa05f' : '#6c7f45'); if (i % 2) b.ball(x + Math.cos(a) * d, h + .05, z + Math.sin(a) * d, .05, .14, .05, '#6b4f36'); }
}
function jetty(W, c, x0, z, x1, y) {
  // Planked, on posts, from the shore (x0) out over the water (x1).
  const b = c.batch, L = Math.abs(x1 - x0), xm = (x0 + x1) / 2, dir = Math.sign(x1 - x0);
  b.box(xm, y - .03, z, L, .06, 1.8, '#a98a63');
  for (let k = 0; k < L / .5; k++) b.box(x0 + dir * (k + .5) * .5, y + .005, z, .42, .02, 1.8, k % 2 ? '#b89a70' : '#ad8f67');
  W.solid(c, xm, y - .1, z, L, .2, 1.8, { climbable: true, kind: 'jetty' });
  for (let k = 0; k <= L / 2.4; k++) for (const s of [-1, 1]) { const px = x0 + dir * k * 2.4; b.cyl(px, y / 2 - .05, z + s * .82, .09, y + .3, '#7a6346'); }
  for (const s of [-1, 1]) b.cyl(x1 - dir * .3, y + .32, z + s * .82, .08, .64, '#7a6346');
}
function boatSpec(c, id, x, z, heading) { c.vehicles = c.vehicles || []; c.vehicles.push({ id, kind: 'boat', x, z, heading }); }

// A whole block of water with a path round it, a jetty, boats, ducks and reeds.
export function makeLake(W, c, ox, oz, rng, key) {
  const b = c.batch, R = 24;
  b.box(ox, .02, oz, 58, .1, 58, '#c7b893'); // the shore path, a sandy ring the water sits in
  b.cyl(ox, .01, oz, R + 1.2, .1, SHALLOWS); b.cyl(ox, .03, oz, R, .1, WATER);
  c.water.push({ x: ox, z: oz, r: R });
  for (let i = 0; i < 28; i++) { const a = i / 28 * TAU; reeds(W, c, ox + Math.cos(a) * (R + 1.5), oz + Math.sin(a) * (R + 1.5), rng, 4); }
  for (let i = 0; i < 10; i++) { const a = rng() * TAU, d = R * (.25 + rng() * .65); b.cyl(ox + Math.cos(a) * d, .085, oz + Math.sin(a) * d, .35 + rng() * .2, .025, '#82a67c'); }
  for (let i = 0; i < 8; i++) { const a = i / 8 * TAU + .3; W.tree(c, ox + Math.cos(a) * 28.2, oz + Math.sin(a) * 28.2, rng, .9); }
  for (let i = 0; i < 4; i++) { const a = i / 4 * TAU + .7; W.bench(c, ox + Math.cos(a) * 26.6, oz + Math.sin(a) * 26.6, -a - Math.PI / 2); }
  // The jetty runs out from the west shore; the boats wait either side of its end.
  jetty(W, c, ox - 28.5, oz, ox - 16, .45);
  boatSpec(c, `${key}:boat0`, ox - 18.4, oz - 1.72, Math.PI / 2); boatSpec(c, `${key}:boat1`, ox - 18.4, oz + 1.72, Math.PI / 2);
  b.box(ox - 29.4, 1.1, oz - 1.6, .08, 2.2, .08, '#7a6346'); b.box(ox - 29.4, 1.95, oz - 1.05, .06, .5, 1.1, '#f1e8d2'); b.box(ox - 29.4, 1.95, oz - 1.05, .07, .14, 1.1, '#4f7f96');
  c.landmarks.push({ id: `lake:${key}`, kind: 'lake', x: ox, z: oz, radius: 30, name: 'the lake' });
  for (let i = 0; i < 3; i++) { const a = rng() * TAU, d = R * (.3 + rng() * .5); W.lamp(c, ox + Math.cos(a) * 27.4, oz + Math.sin(a) * 27.4); }
}

// The northern edge of town: promenade, beach, harbour wall with a lighthouse, boats at the quay.
export function makeCoast(W, c, ox, oz, rng, key, shoreZ) {
  const b = c.batch, promZ = oz - 8, beach0 = promZ - 1.2;
  // The sea itself reaches up to the shoreline; a strip of shallows, then sand up to the promenade.
  b.box(ox, -.3, (shoreZ + oz - 36) / 2, CHUNK + .05, .4, (shoreZ - (oz - 36)), SEA);
  b.box(ox, -.28, shoreZ + 1.1, CHUNK + .05, .4, 2.2, SHALLOWS);
  b.box(ox, -.2, (shoreZ + beach0) / 2, CHUNK + .05, .4, beach0 - shoreZ, SAND);
  for (let i = 0; i < 24; i++) b.box(ox + (rng() - .5) * 70, .012, shoreZ + .4 + rng() * 1.2, 1.5 + rng() * 2.5, .02, .18, '#f3f1ea'); // foam
  // Promenade: a paved walk and a low wall with steps down to the sand.
  b.box(ox, .1, promZ + 2.2, CHUNK + .05, .2, 4.4, '#cfc4ab');
  for (let k = -3; k <= 3; k++) { if (k === 0) continue; const wx = ox + k * 10.5; b.box(wx, .45, promZ - .1, 8.6, .5, .5, '#c9bfa8'); W.solid(c, wx, .45, promZ - .1, 8.6, .5, .5, { climbable: true, kind: 'wall' }); }
  for (let i = 0; i < 3; i++) { const y = .2 - i * .065, z = promZ - .5 - i * .4; b.box(ox, y, z, 4, .13, .4, '#cfc4ab'); W.solid(c, ox, y, z, 4, .13, .4, { climbable: false }); }
  for (let k = -3; k <= 3; k += 2) { W.bench(c, ox + k * 8 + 2, promZ + 3.1, Math.PI); W.lamp(c, ox + k * 8 - 2, promZ + 3.6); }
  for (let i = 0; i < 5; i++) { const px = ox + (rng() - .5) * 60, pz = promZ - 4 - rng() * 8; b.cyl(px, 1.1, pz, .05, 2.2, '#e9e3d2'); b.cyl(px, 2.25, pz, 1.1, .05, i % 2 ? '#c9524a' : '#4f7f96'); b.cyl(px, 2.1, pz, 1.15, .22, i % 2 ? '#f1e8d2' : '#e9c04b'); if (i % 2) b.box(px + .9, .18, pz + .6, 1.4, .1, .6, '#d9544f'); } // parasols and a towel or two
  for (let i = 0; i < 12; i++) { const px = ox + (rng() - .5) * 66, pz = shoreZ + 2 + rng() * 10; b.ball(px, .05, pz, .22 + rng() * .2, .09, .18 + rng() * .15, '#c9c0a8'); }
  // The harbour wall: a stone pier straight out into the sea, with a lighthouse at the end.
  const pierZ0 = beach0, pierZ1 = shoreZ - 24, pm = (pierZ0 + pierZ1) / 2, pl = pierZ0 - pierZ1;
  b.box(ox, .12, pm, 4.4, .74, pl, '#a8a596'); b.box(ox, .5, pm, 4, .02, pl, '#bdb9a9');
  W.solid(c, ox, .12, pm, 4.4, .74, pl, { climbable: true, kind: 'pier' });
  for (let k = 0; k < pl / 3; k++) for (const s of [-1, 1]) b.cyl(ox + s * 1.95, .62, pierZ0 - 1.5 - k * 3, .1, .36, '#2f3331'); // bollards
  b.cyl(ox, 3.2, pierZ1 + 1.8, 1.25, 5.6, '#f3f1ea'); b.cyl(ox, 2.3, pierZ1 + 1.8, 1.27, 1.1, '#c9524a'); b.cyl(ox, 4.3, pierZ1 + 1.8, 1.27, 1.1, '#c9524a');
  b.cyl(ox, 6.35, pierZ1 + 1.8, 1.05, .7, '#3f4a46'); b.ball(ox, 6.35, pierZ1 + 1.8, .55, .4, .55, '#ffe9a6'); b.cyl(ox, 6.95, pierZ1 + 1.8, 1.25, .25, '#2f3331'); b.ball(ox, 7.25, pierZ1 + 1.8, .22, .3, .22, '#c9524a');
  W.cylinderSolid(c, ox, 3.2, pierZ1 + 1.8, 1.25, 6.4, { climbable: false, kind: 'lighthouse' });
  c.lamps.push({ x: ox, y: 6.4, z: pierZ1 + 1.8 });
  boatSpec(c, `${key}:boat0`, ox - 3.0, shoreZ - 3.6, Math.PI); boatSpec(c, `${key}:boat1`, ox + 3.0, shoreZ - 10, Math.PI);
  // A buoy or two, and the sign that names the place.
  for (const [bx, bz] of [[ox - 22, shoreZ - 14], [ox + 26, shoreZ - 9]]) { b.ball(bx, -.02, bz, .5, .4, .5, '#d9544f'); b.cyl(bx, .55, bz, .05, .8, '#2f3331'); b.ball(bx, 1, bz, .12, .12, .12, '#e9c04b'); }
  c.landmarks.push({ id: `coast:${key}`, kind: 'coast', x: ox, z: promZ, radius: 16, name: 'the seafront' });
}

// Open water, as far as the chunks go. The railway, where it reaches the sea, carries on over a viaduct.
export function makeSea(W, c, ox, oz, rng, rail) {
  const b = c.batch;
  b.box(ox, -.3, oz, CHUNK + .05, .4, CHUNK + .05, SEA);
  for (let i = 0; i < 6; i++) b.box(ox + (rng() - .5) * 68, -.085, oz + (rng() - .5) * 68, 2 + rng() * 4, .02, .25, '#9cc4bf'); // the odd ripple
  if (rng() < .3) { const rx = ox + (rng() - .5) * 50, rz = oz + (rng() - .5) * 50; b.ball(rx, -.3, rz, 2.4, 1.2, 1.8, '#8a8f87'); b.ball(rx + 1.2, .1, rz + .4, 1, .7, .9, '#9fa39a'); W.ellipsoidSolid(c, rx, -.3, rz, 2.4, 1.2, 1.8, { climbable: true }); }
  if (rail) for (let k = -33; k <= 33; k += 6) { b.box(rail, -.4, oz + k, 3.2, .9, 1.2, '#8a8f87'); }
}

// A balloon field: a mown ring, a windsock, a hut, and the balloon itself on its tether.
export function makeBalloonField(W, c, x, z, r, id) {
  const b = c.batch;
  b.box(x, .025, z, 24, .1, 24, '#9db070');
  b.cyl(x, .07, z, 7.5, .03, '#b7bf85'); b.cyl(x, .09, z, 6.2, .03, '#9db070');
  for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; b.box(x + Math.cos(a) * 7.5, .12, z + Math.sin(a) * 7.5, .5, .08, .5, '#f3f1ea', -a); }
  // Windsock on the corner.
  b.cyl(x - 9.5, 2.2, z - 9.5, .06, 4.4, '#e9e3d2'); b.add(GEO.tapered, x - 8.6, 4.2, z - 9.5, .3, 1.6, .3, '#f08a3c', 0, 0, -Math.PI / 2 - .25);
  // Hut with the ticket window.
  b.box(x + 8.5, 1.1, z + 8.5, 3.4, 2.2, 3, '#c9b79b'); b.box(x + 8.5, 2.35, z + 8.5, 3.9, .3, 3.5, '#8c6f55'); b.box(x + 6.78, 1.1, z + 8.2, .06, .9, 1.2, '#3f4a46'); b.box(x + 6.74, .5, z + 8.2, .12, .1, 1.6, '#e9e3d2');
  W.solid(c, x + 8.5, 1.1, z + 8.5, 3.4, 2.2, 3, { climbable: true, kind: 'hut' });
  b.box(x + 8.5, 2.95, z + 8.5, 2.2, .7, .12, '#f1e8d2'); b.box(x + 8.5, 2.95, z + 8.5, 1.9, .14, .14, '#c9524a');
  // Fence along the street sides, a gap for the gate.
  for (const s of [-1, 1]) for (let k = -11; k <= 11; k += 1.6) { if (Math.abs(k) < 1.7 && s > 0) continue; b.box(x + k, .45, z + s * 11.6, .08, .9, .08, '#e9e3d2'); b.box(x + k, .72, z + s * 11.6, 1.6, .06, .05, '#e9e3d2'); }
  b.box(x - 11.6, .45, z, .08, .9, .08, '#e9e3d2'); b.box(x - 11.6, .72, z, .05, .06, 23.2, '#e9e3d2');
  // Two wooden steps up to the basket, and the tether anchor.
  b.box(x + 1.65, .11, z, .6, .22, 1.2, '#a98a63'); b.box(x + 1.05, .22, z, .6, .44, 1.2, '#a98a63'); W.solid(c, x + 1.65, .11, z, .6, .22, 1.2, { climbable: false, kind: 'step' }); W.solid(c, x + 1.05, .22, z, .6, .44, 1.2, { climbable: false, kind: 'step' });
  // Tether anchor.
  b.box(x + 2.4, .12, z - 2.4, .5, .24, .5, '#8a8f87'); b.add(GEO.torus, x + 2.4, .32, z - 2.4, .14, .14, .14, '#5f6b66', Math.PI / 2);
  W.bench(c, x - 6, z + 9.2, Math.PI); W.lamp(c, x + 10, z - 10);
  c.vehicles = c.vehicles || []; c.vehicles.push({ id: `${id}:balloon`, kind: 'balloon', x, z, heading: 0 });
  c.landmarks.push({ id: `balloon:${id}`, kind: 'balloons', x, z, radius: 9, name: 'the balloon field' });
}
