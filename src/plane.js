// The aeroplane and the flight. A plane waits on the stand at every airport with its steps down.
// Walk up into the cabin and you will be asked where you want to go; say yes and the rest is a
// short film: taxi, take-off, cloud, a different country under the wheels, steps down again.
// Also: the airliners that cross the sky high up, and a couple of hot-air balloons.
import * as THREE from 'three';
import { Batch, GEO, CHUNK, isAirportChunk, COUNTRIES } from './world.js';

const TAU = Math.PI * 2;
const lerp = (a, b, t) => a + (b - a) * t, smooth = t => t * t * (3 - 2 * t), clamp01 = t => Math.max(0, Math.min(1, t));

// Fuselage axis along +x (nose at +x), door on the +z side forward of the wing.
export const PLANE = Object.freeze({ cy: 2.4, floor: 1.6, len: 16, halfW: 1.5, doorX: 4.1, doorW: 1.2, sill: 1.6, seat: { x: 2.1, z: -1.05 } });

function buildPlane(b, livery) {
  const { cy, floor, len, halfW } = PLANE, white = '#f3f1ea', stripe = livery, dark = '#2f3331', glass = '#3f4a46';
  const wallH = 2.1, wallY = floor - .1 + wallH / 2;
  // Belly and crown as half-tubes, flat floor, two side walls (right one split round the door).
  b.add(GEO.cylinder, 0, cy - .55, 0, 1.45, len, 1.05, white, 0, 0, Math.PI / 2); b.add(GEO.cylinder, 0, cy - .85, 0, 1.46, len, .8, stripe, 0, 0, Math.PI / 2);
  b.add(GEO.cylinder, 0, cy + 1.05, 0, halfW + .02, len, .95, white, 0, 0, Math.PI / 2);
  b.box(0, floor - .08, 0, len, .16, halfW * 2 - .1, '#6d7f8a'); b.box(0, floor + .005, 0, len - 1, .01, .7, '#4f7f96'); // floor and aisle carpet
  // Side walls are built round real window holes (a panel below, a panel above, pillars between)
  // so that from a seat you see the ground, the clouds and the next country go by.
  const dL = PLANE.doorX - PLANE.doorW / 2, dR = PLANE.doorX + PLANE.doorW / 2, winY0 = floor + .58, winY1 = floor + 1.26, winW = .82;
  const windows = []; for (let k = 0; k < 8; k++) windows.push(-len / 2 + 1.8 + k * 1.5);
  const frame = (wx, wz, w, y0, y1) => { const t = .07, ym = (y0 + y1) / 2; b.box(wx - w / 2 - t / 2, ym, wz, t, y1 - y0 + 2 * t, .16, '#d9d6cc'); b.box(wx + w / 2 + t / 2, ym, wz, t, y1 - y0 + 2 * t, .16, '#d9d6cc'); b.box(wx, y0 - t / 2, wz, w, t, .16, '#d9d6cc'); b.box(wx, y1 + t / 2, wz, w, t, .16, '#d9d6cc'); };
  for (const s of [-1, 1]) {
    const wz = s * (halfW - .06), segs = s > 0 ? [[-len / 2, dL], [dR, len / 2]] : [[-len / 2, len / 2]];
    for (const [x0, x1] of segs) {
      const xm = (x0 + x1) / 2, L = x1 - x0;
      b.box(xm, (floor - .1 + winY0) / 2, wz, L, winY0 - (floor - .1), .12, white); b.box(xm, (winY1 + floor - .1 + wallH) / 2, wz, L, floor - .1 + wallH - winY1, .12, white);
      const cuts = windows.filter(wx => wx - winW / 2 > x0 + .05 && wx + winW / 2 < x1 - .05); let px = x0;
      for (const wx of cuts) { const a = wx - winW / 2; b.box((px + a) / 2, (winY0 + winY1) / 2, wz, a - px, winY1 - winY0, .12, white); frame(wx, wz, winW, winY0, winY1); px = wx + winW / 2; }
      b.box((px + x1) / 2, (winY0 + winY1) / 2, wz, x1 - px, winY1 - winY0, .12, white);
    }
  }
  b.box(PLANE.doorX, floor + 1.9 + (wallH - 2) / 2, halfW - .06, PLANE.doorW + .1, wallH - 2 + .2, .12, white); // lintel

  b.box(0, floor + 2 + .05, 0, len - .6, .1, halfW * 2 - .3, '#e9e9e4'); // ceiling
  // Nose with the cockpit glazing, tail cone, fin, stabilisers.
  b.add(GEO.cone, len / 2 + 1.6, cy + .1, 0, 1.55, 3.4, 1.5, white, 0, 0, -Math.PI / 2); b.box(len / 2 + .5, cy + .95, 0, 1.1, .45, 2.2, glass, 0, 0, -.35); b.box(len / 2 - .2, cy + 1.25, 0, 1.6, .35, 2.3, glass);
  b.add(GEO.cone, -len / 2 - 2.6, cy + .5, 0, 1.3, 5.4, 1.4, white, 0, 0, Math.PI / 2 + .12);
  b.add(GEO.tapered, -len / 2 - 1.9, cy + 3, 0, 2.2, 4.4, .14, stripe, 0, 0, .5); b.ball(-len / 2 - 2.6, cy + 3.4, .1, .4, .4, .06, '#f3f1ea'); b.ball(-len / 2 - 2.6, cy + 3.4, -.1, .4, .4, .06, '#f3f1ea');
  for (const s of [-1, 1]) b.add(GEO.box, -len / 2 - 2.2, cy + .9, s * 2.4, 2.4, .16, 3.6, white, 0, s * .5, 0);
  // Wings, engines, gear.
  for (const s of [-1, 1]) { b.add(GEO.box, -.6 - 1.5, cy - .35, s * 5.5, 3.6, .22, 9.5, white, 0, s * -.42, 0); b.add(GEO.box, -1.9, cy - .3, s * 1.8, 4.6, .3, 3, white); b.add(GEO.cylinder, .6, cy - 1.1, s * 4.4, .75, 2.6, .75, '#8a9893', 0, 0, Math.PI / 2); b.add(GEO.cylinder, 1.9, cy - 1.1, s * 4.4, .6, .1, .6, dark, 0, 0, Math.PI / 2); b.box(.2, cy - .65, s * 4.4, 1.6, .5, .3, white); b.ball(-6.5, cy - .3, s * 10.2, .18, .06, .4, s > 0 ? '#6f9a4f' : '#d9544f'); }
  const gear = [[len / 2 - 1.5, 0], [-1.5, -1.8], [-1.5, 1.8]];
  for (const [gx, gz] of gear) { b.box(gx, (floor - .5) / 2 + .3, gz, .16, floor - .9, .16, '#8a9893'); b.add(GEO.cylinder, gx, .45, gz, .45, .35, .45, dark, 0, 0, Math.PI / 2); b.add(GEO.cylinder, gx, .45, gz, .2, .37, .2, '#cfc8b4', 0, 0, Math.PI / 2); }
  // Cabin: rows of seats either side of the aisle, a galley at the back, cockpit door at the front.
  const seatSolids = [];
  for (let row = 0; row < 7; row++) { const sx = len / 2 - 3.2 - row * 1.35; for (const s of [-1, 1]) for (const k of [.55, 1.05]) { if (row === 2 && s < 0 && k === .55) continue; /* the seat beside the cat's is left out, so you can see it */ const sz = s * k; b.box(sx, floor + .25, sz, .5, .12, .46, '#4f7f96'); b.box(sx - .25, floor + .55, sz, .1, .72, .46, '#4f7f96'); b.box(sx - .27, floor + .92, sz, .06, .16, .3, '#f3f1ea'); b.box(sx, floor + .1, sz, .4, .2, .36, '#2f3331'); } seatSolids.push(row === 2 ? { x: sx, y: floor + .17, z: -1.05, w: .5, h: .32, d: .5 } : { x: sx, y: floor + .17, z: -.8, w: .5, h: .32, d: 1.1 }, { x: sx, y: floor + .17, z: .8, w: .5, h: .32, d: 1.1 }); }
  // Passengers: most seats taken, the cat's window seat (row 2, left) kept free.
  const coats = ['#c9524a', '#4f7f96', '#6f9a4f', '#d9a53a', '#8f5f4e', '#6d5d8a'];
  let pi = 0; for (let row = 0; row < 7; row++) { const sx = len / 2 - 3.2 - row * 1.35; for (const s of [-1, 1]) for (const k of [.55, 1.05]) { const sz = s * k; pi++; if (s < 0 && row >= 1 && row <= 3) continue; if (pi % 3 === 0) continue; // the rows round the cat's window seat stay clear so the view does
    const c = coats[pi % coats.length]; b.box(sx + .05, floor + .62, sz, .34, .55, .3, c); b.ball(sx + .05, floor + 1.06, sz, .13, .15, .13, pi % 2 ? '#e3b98f' : '#8d5a3a'); b.box(sx + .3, floor + .38, sz, .36, .12, .28, '#4a4f4c'); if (pi % 4 === 1) b.box(sx + .3, floor + .72, sz, .04, .24, .18, '#f1e8d2'); if (pi % 5 === 2) b.cyl(sx + .05, floor + 1.2, sz, .15, .06, '#2f3331'); } }
  b.box(len / 2 - 1.3, floor + 1, 0, .1, 2, 2.6, '#e9e9e4'); b.box(len / 2 - 1.26, floor + 1.1, .5, .02, 1.2, .5, '#d9d6cc'); b.ball(len / 2 - 1.22, floor + 1, .35, .03, .03, .03, '#c9a35c');
  b.box(-len / 2 + 1.2, floor + .5, -.9, 1.6, 1, 1.1, '#8a9893'); b.box(-len / 2 + 1.2, floor + 1.02, -.9, 1.7, .06, 1.2, '#e3dcc6'); for (let k = 0; k < 3; k++) b.cyl(-len / 2 + .7 + k * .45, floor + 1.1, -.9, .07, .14, ['#c9524a', '#f1e8d2', '#4f7f96'][k]);
  b.box(-len / 2 + 1.2, floor + 1, 1, .1, 2, 1, '#e9e9e4'); b.box(-len / 2 + 1.16, floor + 1.3, 1, .02, .3, .3, '#6f9a4f'); // the small room
  b.box(0, floor + 1.95, 0, len - 2, .04, .8, '#f6ecc8'); // strip light
  b.box(len / 2 - 2.2, floor + 1.7, 0, .04, .25, .9, '#d9544f'); // the sign that says to sit down
  const solids = [
    { x: 0, y: floor - .08, z: 0, w: len, h: .16, d: halfW * 2, kind: 'floor', climbable: false },
    { x: 0, y: wallY, z: -halfW + .06, w: len, h: wallH, d: .14, kind: 'wall', climbable: false },
    { x: (-len / 2 + dL) / 2, y: wallY, z: halfW - .06, w: dL + len / 2, h: wallH, d: .14, kind: 'wall', climbable: false },
    { x: (dR + len / 2) / 2, y: wallY, z: halfW - .06, w: len / 2 - dR, h: wallH, d: .14, kind: 'wall', climbable: false },
    { x: PLANE.doorX, y: floor + 1.9 + (wallH - 1.9) / 2 + .1, z: halfW - .06, w: PLANE.doorW + .1, h: wallH - 1.9, d: .14, kind: 'wall', climbable: false },
    { x: 0, y: floor + 2.1, z: 0, w: len, h: .2, d: halfW * 2, kind: 'ceiling', climbable: false, walkable: false },
    { x: len / 2 - 1.3, y: floor + 1, z: 0, w: .12, h: 2, d: 2.6, kind: 'wall', climbable: false },
    { x: -len / 2 + .25, y: floor + 1, z: 0, w: .12, h: 2, d: 2.8, kind: 'wall', climbable: false },
    { x: -len / 2 + 1.2, y: floor + .5, z: -.9, w: 1.7, h: 1.08, d: 1.2, kind: 'counter', climbable: false },
    { x: -len / 2 + 1.2, y: floor + 1, z: 1, w: .12, h: 2, d: 1, kind: 'wall', climbable: false },
    { x: -2.1, y: cy - .35, z: 6.25, w: 4.6, h: .3, d: 9.5, kind: 'wing', climbable: false }, { x: -2.1, y: cy - .35, z: -6.25, w: 4.6, h: .3, d: 9.5, kind: 'wing', climbable: false }, // wings, reachable from the top of the steps
    ...seatSolids.map(s => ({ ...s, kind: 'seat', climbable: false }))
  ];
  return solids;
}

export class Plane {
  constructor(scene, world, physics, airport) {
    this.scene = scene; this.world = world; this.physics = physics; this.airport = airport;
    const batch = new Batch(); this.local = buildPlane(batch, ['#4f7f96', '#c9524a', '#6f9a4f', '#d9a53a'][Math.abs(Math.round(airport.x / CHUNK + airport.z / CHUNK)) % 4]);
    this.mesh = new THREE.Mesh(batch.geometry(), world.material); this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.group = new THREE.Group(); this.group.add(this.mesh); scene.add(this.group);
    // The door swings on a hinge at its forward edge; open while parked, shut in the air.
    const db = new Batch(); db.box(.55, 0, 0, 1.1, 1.85, .06, '#f3f1ea'); db.box(.55, .15, -.03, .45, .36, .02, '#3f4a46'); db.box(.2, -.1, .04, .1, .04, .08, '#8a9893');
    this.door = new THREE.Mesh(db.geometry(), world.material); this.door.castShadow = true; this.door.position.set(PLANE.doorX + PLANE.doorW / 2, PLANE.floor + .95, PLANE.halfW + .02); this.door.rotation.y = -Math.PI / 2 + .3; this.group.add(this.door); this.doorOpen = 1;
    this.solids = this.local.map(l => ({ shape: 'box', local: l, kind: l.kind, climbable: !!l.climbable, walkable: l.walkable, plane: this, x: 0, z: 0, r: Math.max(l.w, l.d) / 2 + .2, minX: 0, maxX: 0, minY: l.y - l.h / 2, maxY: l.y + l.h / 2, minZ: 0, maxZ: 0 }));
    for (const s of this.solids) physics.dynamic.push(s);
    this.park(); this.flying = false;
  }
  park() { const st = this.airport.stand; this.group.position.set(st.x, 0, st.z); this.group.rotation.set(0, 0, 0); this.pitch = 0; this.heading = 0; this.updateSolids(true); this.setDoor(1); }
  setDoor(open) { this.doorOpen = open; this.door.rotation.y = -(Math.PI / 2 - .3) * open; }
  // World position of the cat's seat and of a cabin-local point.
  seatWorld(out = new THREE.Vector3()) { this.group.updateMatrixWorld(true); return this.group.localToWorld(out.set(PLANE.seat.x, PLANE.floor + .33, PLANE.seat.z)); }
  toWorld(x, y, z, out = new THREE.Vector3()) { this.group.updateMatrixWorld(true); return this.group.localToWorld(out.set(x, y, z)); }
  updateSolids(active) { const px = this.group.position.x, pz = this.group.position.z; for (const s of this.solids) { const l = s.local; if (!active) { s.minX = s.maxX = 1e9; continue; } s.x = px + l.x; s.z = pz + l.z; s.minX = s.x - l.w / 2; s.maxX = s.x + l.w / 2; s.minZ = s.z - l.d / 2; s.maxZ = s.z + l.d / 2; } }
  catInside(p) { const px = this.group.position.x, pz = this.group.position.z; return !this.flying && Math.abs(p.x - px) < PLANE.len / 2 - 1.4 && Math.abs(p.z - pz) < PLANE.halfW - .1 && p.y > PLANE.floor - .3 && p.y < PLANE.floor + 1.6; }
  dispose() { this.scene.remove(this.group); const d = this.physics.dynamic; for (const s of this.solids) { const i = d.indexOf(s); if (i >= 0) d.splice(i, 1); } }
}

// Keeps a plane on every loaded airport's stand.
export class Planes {
  constructor(scene, world, physics) { this.scene = scene; this.world = world; this.physics = physics; this.list = new Map(); }
  sync() {
    const seen = new Set();
    for (const a of this.world.airports) { seen.add(a.id); if (!this.list.has(a.id)) this.list.set(a.id, new Plane(this.scene, this.world, this.physics, a)); }
    for (const [id, p] of this.list) if (!seen.has(id)) { p.dispose(); this.list.delete(id); }
  }
  at(p) { for (const plane of this.list.values()) if (plane.catInside(p)) return plane; return null; }
  dispose() { for (const p of this.list.values()) p.dispose(); this.list.clear(); }
}

// The flight itself: a timed sequence that moves the plane, tells the camera where to be, and
// asks main.js to swap the world at the moment the cloud is thickest.
export class Flight {
  constructor(scene = null) {
    this.scene = scene; this.active = false; this.phase = null; this.t = 0; this.plane = null; this.to = null; this.onTravel = null; this.onArrive = null; this.onFade = null; this.onPhase = null;
    this.cam = { pos: new THREE.Vector3(), at: new THREE.Vector3() }; this.fade = 0; this.airport = null; this.anchor = new THREE.Vector3(); this.seat = new THREE.Vector3(); this.total = 0;
    if (scene) this.attach(scene);
  }
  // A field of clouds the plane cruises through: flattened spheres kept round the plane.
  attach(scene) {
    this.scene = scene;
    {
      this.clouds = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshLambertMaterial({ color: '#f7f6f1', transparent: true, opacity: .92 }), 90);
      this.clouds.frustumCulled = false; this.clouds.visible = false; scene.add(this.clouds); this.cloudSeeds = [];
      for (let i = 0; i < 90; i++) this.cloudSeeds.push({ ax: Math.random() * 520, z: (Math.random() - .5) * 2, y: Math.random(), sx: 6 + Math.random() * 14, sy: 1.6 + Math.random() * 2.2 });
    }
  }
  begin(plane, to) {
    this.active = true; this.plane = plane; this.to = to; this.airport = plane.airport; this.phase = 'board'; this.t = 0; this.total = 0; plane.flying = true; plane.updateSolids(false);
    this.camPos = null; this.anchor.set(plane.airport.stand.x, 0, plane.airport.stand.z); this.swapped = false; this.landed = false; this.lastPhase = null;
  }
  skip() { if (!this.active) return; if (!this.swapped) { this.phase = 'cruise'; this.t = 9.9; } else { this.phase = 'rollout'; this.t = 3.9; } }
  // Camera helpers: cabin-local points follow the plane; world points stay put.
  local(px, py, pz, ax, ay, az) { const p = this.plane; return [p.toWorld(px, py, pz).toArray(), p.toWorld(ax, ay, az).toArray(), true]; }
  update(dt) {
    if (!this.active) return;
    this.t += dt; this.total += dt; const a = this.airport, st = a.stand, rz = a.runwayZ, p = this.plane, g = p.group, S = PLANE.seat, F = PLANE.floor;
    const pose = (x, y, z, heading = 0, pitch = 0, roll = 0) => { g.position.set(x, y, z); g.rotation.set(0, heading, 0); g.rotateZ(pitch); g.rotateX(roll); g.updateMatrixWorld(true); };
    const windowCam = () => this.local(S.x - .3, F + 1.22, S.z + 1.1, S.x + .8, F + .45, S.z - 1.4);  // over the cat's shoulder, out of the window ahead of it
    const aisleCam = () => this.local(S.x - 3.6, F + 1.45, .1, S.x + 2.5, F + .9, -.3);                // down the aisle towards the cockpit
    const seatCam = () => this.local(S.x + 1.25, F + 1.15, S.z + 1.05, S.x - .35, F + .5, S.z - .25);   // looking back at the cat in its seat
    let cams = null, cut = false, pitchAnim = 0;
    if (this.phase === 'board') { // doors shut, the cat settles
      pose(st.x, 0, st.z); p.setDoor(1 - smooth(clamp01(this.t / 2))); cams = seatCam();
      if (this.t > 3) { this.phase = 'taxi'; this.t = 0; }
    } else if (this.phase === 'taxi') { // quadratic curve from the stand to the runway threshold
      const k = smooth(clamp01(this.t / 7)), x0 = st.x, z0 = st.z, x1 = a.x - 26, z1 = rz, cx = x0 - 8, cz = (z0 + z1) / 2;
      const x = lerp(lerp(x0, cx, k), lerp(cx, x1, k), k), z = lerp(lerp(z0, cz, k), lerp(cz, z1, k), k);
      const dx = 2 * (1 - k) * (cx - x0) + 2 * k * (x1 - cx), dz = 2 * (1 - k) * (cz - z0) + 2 * k * (z1 - cz);
      const heading = k < .01 ? 0 : -Math.atan2(dz, dx); pose(x, 0, z, heading);
      cams = this.t < 3.5 ? windowCam() : [[a.x - 14, 4, rz + 14], [x, 2, z]]; cut = this.t > 3.5 && this.t < 3.6;
      if (this.t > 7.2) { this.phase = 'roll'; this.t = 0; }
    } else if (this.phase === 'roll') { // down the runway, nose lifting at the end
      const k = clamp01(this.t / 5), x = a.x - 26 + 56 * k * k, pitch = k > .8 ? (k - .8) / .2 * .22 : 0; pose(x, pitch * 1.6, rz, 0, pitch);
      cams = windowCam();
      if (this.t > 5) { this.phase = 'climb'; this.t = 0; this.climbX = x; }
    } else if (this.phase === 'climb') { // up and away: first from the window, then a chase shot
      const k = clamp01(this.t / 9), x = this.climbX + 36 * this.t + 2 * this.t * this.t, y = .35 + 110 * k * k, pitch = .22 + .08 * k, roll = k > .55 ? Math.sin((k - .55) / .45 * Math.PI) * .18 : 0; pose(x, y, rz, 0, pitch, roll);
      cams = this.t < 4 ? windowCam() : [[x - 22 + k * 8, y - 2 + k * 8, rz + 10 - k * 4], [x + 4, y + 1, rz]]; cut = this.t > 4 && this.t < 4.1;
      if (this.t > 9) { this.phase = 'cruise'; this.t = 0; this.cruiseX = x; this.cruiseY = y; }
    } else if (this.phase === 'cruise') { // 22 s above the clouds; the country changes inside one of them
      const x = this.cruiseX + 44 * this.t, y = this.cruiseY + Math.min(20, this.t * 2) + Math.sin(this.t * .7) * .6; pose(x, y, rz, 0, .03, Math.sin(this.t * .45) * .03);
      const seg = this.t < 6 ? 0 : this.t < 11 ? 1 : this.t < 16 ? 2 : 3;
      cams = seg === 0 ? windowCam() : seg === 1 ? [[x - 14, y + 2, rz + 26], [x + 6, y, rz]] : seg === 2 ? aisleCam() : windowCam();
      cut = [6, 11, 16].some(b => this.t > b && this.t < b + .1);
      // Into a cloud at 10 s: white out, swap the world, white in. Positions are relative to the new airport afterwards.
      if (this.t > 9.2 && this.t < 11.2) this.fade = this.t < 10 ? clamp01((this.t - 9.2) / .8) : 1 - clamp01((this.t - 10.4) / .8); else this.fade = 0;
      this.onFade?.(this.fade);
      if (this.t > 10 && !this.swapped) { this.swapped = true; const dest = this.onTravel?.(this.to); this.airport = dest; this.cruiseX = dest.x - 118 - 44 * 22; this.cruiseY = 40; this.anchor.set(dest.stand.x, 0, dest.stand.z); return; }
      if (this.t > 22) { this.phase = 'descend'; this.t = 0; }
    } else if (this.phase === 'descend') { // 9 s from 110 m out and 60 m up to the threshold, watched from the window then from the ground
      const k = clamp01(this.t / 9), x = a.x - 118 + 94 * k, y = 60 * (1 - k) * (1 - k) + .35, pitch = -.12 + .16 * k; pose(x, y, rz, 0, pitch);
      cams = this.t < 5 ? windowCam() : [[x - 16 + k * 4, y + 3 - k * 1.5, rz + 11], [x + 3, y, rz]]; cut = this.t > 5 && this.t < 5.1;
      if (this.t > 9) { this.phase = 'rollout'; this.t = 0; }
    } else if (this.phase === 'rollout') { // slowing to a stop at the far end
      const k = clamp01(this.t / 4), x = a.x - 24 + 46 * (1 - (1 - k) * (1 - k)); pose(x, 0, rz, 0, 0);
      cams = [[a.x + 4, 2.4, rz + 16], [x, 2, rz]];
      if (this.t > 4) { this.phase = 'taxiIn'; this.t = 0; this.rollX = x; }
    } else if (this.phase === 'taxiIn') { // back along the same curve to the stand
      const k = 1 - smooth(clamp01(this.t / 7)), x0 = st.x, z0 = st.z, x1 = this.rollX, z1 = rz, cx = x0 - 8, cz = (z0 + z1) / 2;
      const x = lerp(lerp(x0, cx, k), lerp(cx, x1, k), k), z = lerp(lerp(z0, cz, k), lerp(cz, z1, k), k);
      const dx = 2 * (1 - k) * (cx - x0) + 2 * k * (x1 - cx), dz = 2 * (1 - k) * (cz - z0) + 2 * k * (z1 - cz);
      const heading = k < .01 ? 0 : -Math.atan2(dz, dx) + Math.PI; pose(x, 0, z, heading);
      cams = this.t < 3.5 ? windowCam() : [[st.x + 10, 3.5, st.z + 14], [x, 1.8, z]]; cut = this.t > 3.5 && this.t < 3.6;
      if (this.t > 7.2) { this.phase = 'stand'; this.t = 0; p.park(); p.setDoor(0); }
    } else if (this.phase === 'stand') { // steps up to the door, the door opens, and the cat is free to go
      p.setDoor(smooth(clamp01((this.t - .6) / 1.6))); cams = seatCam();
      if (this.t > 1.2 && !this.landed) { this.landed = true; this.onArrive?.(this.airport); }
      if (this.t > 2.6) { this.finish(); return; }
    }
    if (this.phase !== this.lastPhase) { this.onPhase?.(this.phase, this.lastPhase); this.lastPhase = this.phase; }
    p.seatWorld(this.seat);
    if (cams) { const [cp, ca, rigid] = cams; if (!this.camPos || cut || rigid) { this.cam.pos.set(...cp); this.cam.at.set(...ca); this.camPos = true; } else { this.cam.pos.lerp(new THREE.Vector3(...cp), 1 - Math.exp(-dt * 6)); this.cam.at.lerp(new THREE.Vector3(...ca), 1 - Math.exp(-dt * 8)); } }
    this.updateClouds();
  }
  updateClouds() {
    if (!this.clouds) return; const g = this.plane.group, high = g.position.y > 30 && (this.phase === 'cruise' || this.phase === 'climb' || this.phase === 'descend');
    this.clouds.visible = high; if (!high) return;
    const m = new THREE.Matrix4(), base = Math.min(g.position.y - 18, 95);
    for (let i = 0; i < this.cloudSeeds.length; i++) {
      const c = this.cloudSeeds[i], span = 520, x0 = g.position.x - 120, x = x0 + (((c.ax - x0) % span) + span) % span, z = g.position.z + c.z * 200, y = base - c.y * 22 - 6; // clouds stay put; the plane flies past them
      m.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion(), new THREE.Vector3(c.sx, c.sy, c.sx * .8)); this.clouds.setMatrixAt(i, m);
    }
    this.clouds.instanceMatrix.needsUpdate = true;
  }
  finish() { this.active = false; this.phase = null; this.plane.flying = false; this.plane.updateSolids(true); this.fade = 0; this.onFade?.(0); this.swapped = false; this.landed = false; if (this.clouds) this.clouds.visible = false; this.plane = null; this.onPhase?.('done', this.lastPhase); }
}

// ---- sky traffic ----------------------------------------------------------------------------------

export class Sky {
  constructor(scene) {
    this.scene = scene; this.time = 0;
    // One airliner high up, re-launched on a new line whenever it has gone.
    const b = new Batch(); buildPlane(b, '#c9524a'); this.liner = new THREE.Mesh(b.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .9, flatShading: true }));
    this.liner.scale.setScalar(1.6); scene.add(this.liner); this.linerT = 1; this.linerWait = 8;
    this.trail = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 6, 5), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: .42 }), 26); this.trail.frustumCulled = false; scene.add(this.trail);
    // Two balloons, drifting on the wind.
    this.balloons = [];
    for (let i = 0; i < 2; i++) {
      const g = new THREE.Group(), c1 = ['#c9524a', '#4f7f96'][i], c2 = ['#e9c04b', '#f3f1ea'][i];
      const env = new THREE.Mesh(new THREE.SphereGeometry(4, 12, 10), new THREE.MeshLambertMaterial({ color: c1, flatShading: true })); env.scale.y = 1.15; env.position.y = 7; g.add(env);
      for (let k = 0; k < 6; k += 2) { const panel = new THREE.Mesh(new THREE.SphereGeometry(4.03, 12, 10, k * TAU / 6, TAU / 6), new THREE.MeshLambertMaterial({ color: c2, flatShading: true })); panel.scale.y = 1.15; panel.position.y = 7; g.add(panel); }
      const skirt = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.4, 8, 1, true), new THREE.MeshLambertMaterial({ color: c1, side: THREE.DoubleSide })); skirt.rotation.x = Math.PI; skirt.position.y = 2.6; g.add(skirt);
      const basket = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.1, 1.4), new THREE.MeshLambertMaterial({ color: '#a78a62' })); g.add(basket);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const rope = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 2.6, 4), new THREE.MeshBasicMaterial({ color: '#4a4f4c' })); rope.position.set(sx * .55, 1.8, sz * .55); rope.rotation.z = -sx * .25; rope.rotation.x = sz * .25; g.add(rope); }
      const flame = new THREE.Mesh(new THREE.SphereGeometry(.3, 6, 5), new THREE.MeshBasicMaterial({ color: '#f29b4b' })); flame.position.y = 1.4; g.add(flame);
      scene.add(g); this.balloons.push({ group: g, flame, x: 0, z: 0, y: 30 + i * 9, phase: i * 2.1, wind: .35 + i * .1, dir: 1.1 + i * .8, placed: false });
    }
  }
  update(dt, cat) {
    this.time += dt;
    // Airliner.
    if (this.linerT >= 1) { this.linerWait -= dt; if (this.linerWait <= 0) { const a = Math.random() * TAU, side = Math.random() * 200 - 100; const ca = Math.cos(a), sa = Math.sin(a); this.linerFrom = new THREE.Vector3(cat.x - ca * 380 - sa * side, 95 + Math.random() * 30, cat.z - sa * 380 + ca * side); this.linerTo = new THREE.Vector3(cat.x + ca * 380 - sa * side, this.linerFrom.y + 6, cat.z + sa * 380 + ca * side); this.linerT = 0; this.liner.rotation.set(0, -Math.atan2(this.linerTo.z - this.linerFrom.z, this.linerTo.x - this.linerFrom.x), 0); this.linerWait = 25 + Math.random() * 30; } }
    else { this.linerT += dt / 26; this.liner.position.lerpVectors(this.linerFrom, this.linerTo, this.linerT); this.liner.visible = true; }
    const m = new THREE.Matrix4(), dir = this.linerTo ? this.linerTo.clone().sub(this.linerFrom).normalize() : new THREE.Vector3(1, 0, 0);
    for (let i = 0; i < 26; i++) { const back = 6 + i * 4.2, s = .6 + i * .22; if (this.linerT >= 1 || !this.linerTo) { m.makeScale(0, 0, 0); } else { const p = this.liner.position.clone().addScaledVector(dir, -back); m.compose(p, new THREE.Quaternion(), new THREE.Vector3(s, s * .7, s)); } this.trail.setMatrixAt(i, m); }
    this.trail.instanceMatrix.needsUpdate = true; if (this.linerT >= 1) this.liner.visible = false;
    // Balloons.
    for (const bl of this.balloons) {
      if (!bl.placed || Math.hypot(bl.x - cat.x, bl.z - cat.z) > 260) { bl.placed = true; const a = bl.dir + Math.PI + (Math.random() - .5); bl.x = cat.x + Math.cos(a) * 170; bl.z = cat.z + Math.sin(a) * 170; }
      bl.x += Math.cos(bl.dir) * bl.wind * dt; bl.z += Math.sin(bl.dir) * bl.wind * dt;
      bl.group.position.set(bl.x, bl.y + Math.sin(this.time * .5 + bl.phase) * 1.5, bl.z); bl.group.rotation.y = this.time * .05 + bl.phase;
      bl.flame.visible = Math.sin(this.time * 2.3 + bl.phase) > .55; bl.flame.scale.setScalar(.8 + Math.random() * .5);
    }
  }
  dispose() { this.scene.remove(this.liner); this.scene.remove(this.trail); for (const b of this.balloons) this.scene.remove(b.group); }
}
