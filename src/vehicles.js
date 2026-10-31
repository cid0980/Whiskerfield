// Things that carry the cat without rails: hot-air balloons and boats.
//
// A balloon waits on its field, tethered. Climb into the basket and stay a moment and it casts off,
// rises, and drifts wherever the wind is going until it comes down on whatever is underneath. Climb
// out and it finds its own way home.
//
// A boat waits at a jetty. Aboard, pushing toward open water points the boat that way and it keeps
// going — until you point it somewhere else, the bow meets the shore, or you step off. Pushing
// toward land while moored simply walks the cat ashore.
import * as THREE from 'three';
import { Batch, GEO } from './world.js';

const TAU = Math.PI * 2;
const BALLOON = { boardDelay: 2.2, climb: 1.7, sink: 1.4, wind: 3.2, high: [30, 44], drift: [45, 72], dwell: 6 };
const BOAT = { speed: 3.6, accel: 1.4, brake: 3, turn: 1.3, bow: 2.1 };

export class Vehicles {
  constructor(scene, world, physics) { this.scene = scene; this.world = world; this.physics = physics; this.list = new Map(); this.onEvent = null; this.time = 0; }
  sync() {
    const seen = new Set();
    for (const c of this.world.chunks.values()) for (const spec of c.vehicles || []) { seen.add(spec.id); if (!this.list.has(spec.id)) this.list.set(spec.id, spec.kind === 'balloon' ? this.buildBalloon(spec) : this.buildBoat(spec)); }
    // A vehicle away from home (flying, or moored somewhere else) stays until it is back.
    for (const [id, v] of this.list) if (!seen.has(id) && v.home) { this.remove(v); this.list.delete(id); }
  }
  solid(v, lx, ly, lz, w, h, d, kind, climbable) {
    const s = { shape: 'box', kind, vehicle: v, climbable, x: 0, z: 0, r: Math.max(w, d) / 2 + .2, local: { x: lx, y: ly, z: lz, w, h, d }, minX: 0, maxX: 0, minY: 0, maxY: 0, minZ: 0, maxZ: 0 };
    if (v.kind === 'balloon') s.balloon = v; else s.boat = v;
    return s;
  }
  // ---- balloons -------------------------------------------------------------------------------
  buildBalloon(spec) {
    const b = new Batch(), colors = [['#d9544f', '#f1e8d2'], ['#4f7f96', '#e9c04b'], ['#6f9a4f', '#f1e8d2'], ['#f08a3c', '#4f7f96']][Math.abs(Math.round(spec.x / 7 + spec.z / 11)) % 4];
    // Basket: floor, four wicker walls, a padded rim.
    b.box(0, .42, 0, 1.5, .16, 1.5, '#8c6f55'); b.box(0, .5, 0, 1.3, .02, 1.3, '#b08a62');
    for (const [wx, wz, ww, wd] of [[.7, 0, .1, 1.5], [-.7, 0, .1, 1.5], [0, .7, 1.5, .1], [0, -.7, 1.5, .1]]) { b.box(wx, .78, wz, ww, .56, wd, '#a07a52'); b.box(wx, 1.07, wz, ww + .06, .06, wd + .06, '#6b4f36'); }
    for (const [wx, wz] of [[.72, .72], [-.72, .72], [.72, -.72], [-.72, -.72]]) b.box(wx, .78, wz, .1, .6, .1, '#6b4f36');
    // Burner and frame, ropes to the envelope.
    b.box(0, 1.9, 0, .5, .12, .5, '#5f6b66'); b.cyl(0, 2.05, 0, .14, .2, '#8a8f87'); b.ball(0, 2.3, 0, .16, .25, .16, '#f0a63c');
    for (const [wx, wz] of [[.72, .72], [-.72, .72], [.72, -.72], [-.72, -.72]]) b.beam([wx, 1.1, wz], [wx * 1.6, 3.4, wz * 1.6], .025, '#6b4f36');
    for (const [wx, wz] of [[1.15, 1.15], [-1.15, 1.15], [1.15, -1.15], [-1.15, -1.15]]) b.beam([wx, 3.4, wz], [wx * .55, 4.4, wz * .55], .02, '#6b4f36');
    // Envelope: a broad soft sphere in gores, a smaller crown, the throat.
    const ey = 7.3, ry = 3.8, rx = 3.3;
    b.add(GEO.softSphere, 0, ey, 0, rx, ry, rx, colors[0]);
    for (let i = 0; i < 4; i++) { const a = i / 4 * TAU + Math.PI / 4; b.add(GEO.softSphere, Math.cos(a) * .12, ey, Math.sin(a) * .12, rx * .99, ry * .99, rx * .99, colors[1]); }
    b.add(GEO.softSphere, 0, ey, 0, rx * 1.005, ry * .62, rx * 1.005, colors[0]);
    b.add(GEO.tapered, 0, ey - ry * .85, 0, 1.6, 1.6, 1.6, colors[1], Math.PI);
    b.ball(0, ey + ry * .98, 0, .5, .14, .5, '#2f3331');
    const mesh = new THREE.Mesh(b.geometry(), this.world.material); mesh.castShadow = true; mesh.receiveShadow = true; mesh.name = 'balloon';
    const group = new THREE.Group(); group.add(mesh); group.position.set(spec.x, 0, spec.z); this.scene.add(group);
    // The tether: a line from the basket to the anchor, shown while moored.
    const tether = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, 1, 5), new THREE.MeshLambertMaterial({ color: '#6b4f36' })); this.scene.add(tether);
    const v = { kind: 'balloon', spec, group, tether, x: spec.x, y: 0, z: spec.z, state: 'moored', timer: 0, aboard: 0, home: true, wind: 0, high: 36, until: 0, sway: Math.random() * TAU, dx: 0, dy: 0, dz: 0, landedAt: 0 };
    v.solids = [this.solid(v, 0, .42, 0, 1.5, .16, 1.5, 'balloon', false), this.solid(v, .7, .78, 0, .1, .62, 1.5, 'basketwall', true), this.solid(v, -.7, .78, 0, .1, .62, 1.5, 'basketwall', true), this.solid(v, 0, .78, .7, 1.5, .62, .1, 'basketwall', true), this.solid(v, 0, .78, -.7, 1.5, .62, .1, 'basketwall', true)];
    this.physics.dynamic.push(...v.solids); this.place(v);
    return v;
  }
  // ---- boats ----------------------------------------------------------------------------------
  buildBoat(spec) {
    const b = new Batch(), hull = ['#4f7f96', '#c9524a', '#6f9a4f', '#e9c04b'][Math.abs(Math.round(spec.x / 5 + spec.z / 3)) % 4];
    // Bow toward -z. Hull, bow wedge, gunwales, deck, a thwart, an outboard, a lamp on a short mast.
    b.box(0, .12, .3, 1.5, .44, 2.6, hull); b.add(GEO.tapered, 0, .12, -1.55, 1.5, .44, 1.0, hull, Math.PI / 2, 0, 0);
    b.box(0, .32, .3, 1.2, .03, 2.5, '#c7a97b'); b.add(GEO.tapered, 0, .32, -1.5, 1.2, .03, .9, '#c7a97b', Math.PI / 2, 0, 0);
    for (const s of [-1, 1]) b.box(s * .72, .38, .3, .08, .1, 2.6, '#f1e8d2');
    b.box(0, .38, 1.55, 1.5, .1, .1, '#f1e8d2');
    b.box(0, .5, .4, 1.3, .08, .34, '#a98a63'); b.box(0, .5, -.5, 1.1, .08, .3, '#a98a63');
    b.box(0, .55, 1.7, .32, .5, .26, '#2f3331'); b.cyl(0, .25, 1.78, .05, .6, '#8a8f87'); b.box(0, .85, 1.72, .36, .14, .3, '#c9524a');
    b.cyl(0, 1.1, -.9, .03, 1.5, '#7a6346'); b.box(0, 1.9, -.9, .18, .18, .18, '#eee0ae', 0, 1); b.box(0, 1.55, -.83, .02, .3, .4, '#f1e8d2');
    const mesh = new THREE.Mesh(b.geometry(), this.world.material); mesh.castShadow = true; mesh.receiveShadow = true; mesh.name = 'boat';
    const group = new THREE.Group(); group.add(mesh); this.scene.add(group);
    // Foam at the stern while under way.
    const wake = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.4), new THREE.MeshBasicMaterial({ color: '#f3f1ea', transparent: true, opacity: 0, depthWrite: false })); wake.rotation.x = -Math.PI / 2; wake.position.set(0, .02, 2.6); group.add(wake);
    const v = { kind: 'boat', spec, group, wake, x: spec.x, z: spec.z, y: 0, heading: spec.heading, target: spec.heading, speed: 0, throttle: 0, home: true, sway: Math.random() * TAU, dx: 0, dz: 0, dy: 0, steered: false };
    // The deck is a run of squares along the keel, so a turned boat still has a deck roughly its own shape.
    v.solids = [-1.2, -.6, 0, .6, 1.2].map(lz => this.solid(v, 0, .12, lz, 1.5, .42, 1.5, 'boat', true));
    this.physics.dynamic.push(...v.solids); this.place(v);
    return v;
  }
  place(v) {
    if (v.kind === 'balloon') {
      v.group.position.set(v.x, v.y, v.z);
      for (const s of v.solids) { const l = s.local; s.x = v.x + l.x; s.z = v.z + l.z; s.minX = s.x - l.w / 2; s.maxX = s.x + l.w / 2; s.minZ = s.z - l.d / 2; s.maxZ = s.z + l.d / 2; s.minY = v.y + l.y - l.h / 2; s.maxY = v.y + l.y + l.h / 2; }
      const t = v.tether; if (v.state === 'moored') { const ax = v.spec.x + 2.4, az = v.spec.z - 2.4, a = new THREE.Vector3(ax, .3, az), bb = new THREE.Vector3(v.x + .7, v.y + .8, v.z - .7); t.visible = true; t.position.copy(a).add(bb).multiplyScalar(.5); t.scale.set(1, a.distanceTo(bb), 1); t.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), bb.clone().sub(a).normalize()); } else t.visible = false;
    } else {
      v.group.position.set(v.x, v.y, v.z); v.group.rotation.y = v.heading;
      const si = Math.sin(v.heading), co = Math.cos(v.heading);
      for (const s of v.solids) { const l = s.local; s.x = v.x + l.z * si; s.z = v.z + l.z * co; s.minX = s.x - l.w / 2; s.maxX = s.x + l.w / 2; s.minZ = s.z - l.d / 2; s.maxZ = s.z + l.d / 2; s.minY = l.y - l.h / 2 - .1; s.maxY = l.y + l.h / 2; }
    }
  }
  remove(v) { this.scene.remove(v.group); if (v.tether) this.scene.remove(v.tether); const d = this.physics.dynamic; for (const s of v.solids) { const i = d.indexOf(s); if (i >= 0) d.splice(i, 1); } }
  dispose() { for (const v of this.list.values()) this.remove(v); this.list.clear(); }

  // Called with the stick before the cat moves: a cat on a boat pushing toward open water steers
  // the boat instead of walking. Returns true when the input was taken by the boat.
  control(support, ix, iz, yaw) {
    const v = support?.vehicle; if (!v || v.kind !== 'boat') return false;
    const amount = Math.hypot(ix, iz); if (amount < .3) return false;
    const co = Math.cos(yaw), si = Math.sin(yaw), dx = (ix * co + iz * si) / amount, dz = (-ix * si + iz * co) / amount;
    const ax = v.x + dx * (BOAT.bow + 1.2), az = v.z + dz * (BOAT.bow + 1.2);
    if (!this.world.inWater(ax, az) || this.physics.support(ax, az, .9).solid) return false; // land or a pier that way: walk
    v.target = Math.atan2(-dx, -dz); v.throttle = 1; v.home = false;
    if (!v.steered) { v.steered = true; this.onEvent?.('boat-go', v); }
    return true;
  }
  // Moves everything, carrying the cat when it stands on one of them.
  update(dt, cat, support) {
    this.time += dt; const out = { dx: 0, dy: 0, dz: 0, vehicle: null };
    for (const v of this.list.values()) {
      const aboard = support?.vehicle === v;
      if (v.kind === 'balloon') this.flyBalloon(v, dt, cat, aboard); else this.sailBoat(v, dt, cat, aboard);
      if (aboard) { out.dx += v.dx; out.dy += v.dy; out.dz += v.dz; out.vehicle = v; }
    }
    return out;
  }
  flyBalloon(v, dt, cat, aboard) {
    const ox = v.x, oy = v.y, oz = v.z, far = Math.hypot(cat.x - v.x, cat.z - v.z);
    v.aboard = aboard ? v.aboard + dt : 0;
    if (v.state === 'moored' || v.state === 'landed') {
      v.timer += dt;
      if (aboard && v.aboard > BALLOON.boardDelay && v.timer > BALLOON.dwell) {
        v.state = 'rising'; v.home = false; v.high = BALLOON.high[0] + Math.random() * (BALLOON.high[1] - BALLOON.high[0]); v.wind = Math.random() * TAU; v.until = BALLOON.drift[0] + Math.random() * (BALLOON.drift[1] - BALLOON.drift[0]); v.timer = 0;
        this.onEvent?.('balloon-up', v);
      } else if (v.state === 'landed' && !aboard && (far > 60 || v.timer > 120)) { // goes home for the next passenger
        v.x = v.spec.x; v.z = v.spec.z; v.y = 0; v.state = 'moored'; v.home = true; v.timer = 0;
      }
    } else if (v.state === 'rising') {
      v.y += BALLOON.climb * dt * Math.min(1, .3 + v.timer * .4); v.timer += dt;
      if (v.y >= v.high) { v.state = 'drifting'; v.timer = 0; this.onEvent?.('balloon-drift', v); }
      v.x += Math.cos(v.wind) * BALLOON.wind * .3 * dt; v.z += Math.sin(v.wind) * BALLOON.wind * .3 * dt;
    } else if (v.state === 'drifting') {
      v.timer += dt; const w = v.wind + Math.sin(this.time * .17 + v.sway) * .35;
      v.x += Math.cos(w) * BALLOON.wind * dt; v.z += Math.sin(w) * BALLOON.wind * dt; v.y += Math.sin(this.time * .5 + v.sway) * .25 * dt;
      if (v.timer > v.until || !aboard) { v.state = 'descending'; v.timer = 0; this.onEvent?.('balloon-down', v); }
    } else if (v.state === 'descending') {
      v.timer += dt; v.x += Math.cos(v.wind) * BALLOON.wind * .5 * dt; v.z += Math.sin(v.wind) * BALLOON.wind * .5 * dt;
      const ground = this.physics.support(v.x, v.z, v.y + .3), water = this.world.inWater(v.x, v.z), gy = Math.max(ground.y, water ? .02 : 0);
      const dy = Math.min(BALLOON.sink * dt, Math.max(0, v.y - gy));
      v.y -= dy;
      if (v.y - gy < .01) { v.y = gy; v.state = 'landed'; v.timer = 0; this.onEvent?.('balloon-landed', v); }
    }
    v.dx = v.x - ox; v.dy = v.y - oy; v.dz = v.z - oz;
    // A little lift and sway in the air, a nod on the ground, for the eye only.
    this.place(v); const air = v.state === 'rising' || v.state === 'drifting' || v.state === 'descending';
    v.group.rotation.set(air ? Math.sin(this.time * .8 + v.sway) * .025 : 0, 0, air ? Math.cos(this.time * .65 + v.sway) * .025 : 0);
    v.group.position.y += air ? Math.sin(this.time * 1.1 + v.sway) * .08 : Math.sin(this.time * .9 + v.sway) * .03;
  }
  sailBoat(v, dt, cat, aboard) {
    const ox = v.x, oz = v.z, oh = v.heading, far = Math.hypot(cat.x - v.x, cat.z - v.z);
    if (!aboard) v.throttle = 0;
    // Heading eases round to where the stick pointed; speed follows the throttle.
    let d = v.target - v.heading; d = ((d + Math.PI) % TAU + TAU) % TAU - Math.PI;
    const turn = Math.sign(d) * Math.min(Math.abs(d), BOAT.turn * dt * (v.speed > .2 ? 1 : .5)); v.heading += turn;
    const want = v.throttle * BOAT.speed; v.speed = want > v.speed ? Math.min(want, v.speed + BOAT.accel * dt) : Math.max(want, v.speed - BOAT.brake * dt);
    if (v.speed > .01) {
      const fx = -Math.sin(v.heading), fz = -Math.cos(v.heading), nx = v.x + fx * v.speed * dt, nz = v.z + fz * v.speed * dt;
      const bx = nx + fx * BOAT.bow, bz = nz + fz * BOAT.bow;
      if (!this.world.inWater(bx, bz) || this.physics.support(bx, bz, .9).solid) { v.speed = 0; v.throttle = 0; if (aboard) this.onEvent?.('boat-shore', v); }
      else { v.x = nx; v.z = nz; }
    }
    if (!aboard && !v.home && far > 160) { v.x = v.spec.x; v.z = v.spec.z; v.heading = v.target = v.spec.heading; v.speed = 0; v.home = true; v.steered = false; }
    // Carry the cat round with the hull: its offset from the keel turns with the heading.
    if (aboard) { const rx = cat.x - ox, rz = cat.z - oz, dh = v.heading - oh, co = Math.cos(dh), si = Math.sin(dh); const tx = rx * co + rz * si, tz = -rx * si + rz * co; v.dx = v.x - ox + (tx - rx); v.dz = v.z - oz + (tz - rz); } else { v.dx = v.dz = 0; }
    v.dy = 0; this.place(v);
    v.group.position.y = Math.sin(this.time * 1.4 + v.sway) * .025; v.group.rotation.x = Math.sin(this.time * 1.1 + v.sway) * .02 - v.speed * .02; v.group.rotation.z = Math.sin(this.time * 1.7 + v.sway) * .025 + turn * 8;
    v.wake.material.opacity = Math.min(.5, v.speed * .18);
  }
}
