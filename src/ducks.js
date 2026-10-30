// Ducks on the ponds: a mother and a string of ducklings that paddle about, keep away from the
// cat, and climb out onto the grass when it gets too close. Herd them if you like; they will
// not thank you.
import * as THREE from 'three';

const TAU = Math.PI * 2;
const cache = new Map();
const mat = hex => { if (!cache.has(hex)) cache.set(hex, new THREE.MeshLambertMaterial({ color: hex })); return cache.get(hex); };
const ball = new THREE.SphereGeometry(1, 10, 8), cone = new THREE.ConeGeometry(.5, 1, 6);
const WATER_Y = .06;

function buildDuck(kind) {
  const g = new THREE.Group(), s = kind === 'mother' ? 1 : .5;
  const body = kind === 'mother' ? '#b48a5a' : '#f1d35a', head = kind === 'mother' ? '#3f7a4a' : '#f1d35a', beak = kind === 'mother' ? '#e3c35a' : '#e0893c';
  const add = (geo, color, x, y, z, sx, sy, sz, rx = 0) => { const m = new THREE.Mesh(geo, mat(color)); m.position.set(x * s, y * s, z * s); m.scale.set(sx * s, sy * s, sz * s); m.rotation.x = rx; m.castShadow = true; g.add(m); return m; };
  add(ball, body, 0, .16, 0, .19, .14, .26);
  if (kind === 'mother') add(ball, '#e8dfc4', 0, .2, -.02, .16, .1, .18);
  add(ball, body, 0, .2, -.26, .07, .05, .1);
  const neck = add(ball, head, 0, .32, .18, .08, .11, .08);
  const hd = add(ball, head, 0, .42, .22, .1, .09, .1);
  add(cone, beak, 0, .41, .34, .08, .14, .06, Math.PI / 2);
  for (const side of [-1, 1]) add(ball, '#2a2a2a', side * .055, .44, .27, .015, .015, .015);
  return { group: g, head: hd, neck };
}

class Duck {
  constructor(kind, pond, x, z) { const d = buildDuck(kind); this.group = d.group; this.kind = kind; this.pond = pond; this.x = x; this.z = z; this.heading = Math.random() * TAU; this.speed = 0; this.phase = Math.random() * 9; this.follow = null; this.wander = 0; this.quack = 0; this.onLand = false; }
}

export class Ducks {
  constructor(scene, world, physics) { this.scene = scene; this.world = world; this.physics = physics; this.flocks = new Map(); this.onQuack = null; this.startles = 0; }
  sync(cat) {
    const near = this.world.water.filter(p => Math.abs(p.x - cat.x) < 120 && Math.abs(p.z - cat.z) < 120);
    for (const p of near) { const key = `${p.x.toFixed(1)},${p.z.toFixed(1)}`; if (!this.flocks.has(key)) this.spawn(key, p); }
    for (const [key, f] of this.flocks) if (!near.some(p => `${p.x.toFixed(1)},${p.z.toFixed(1)}` === key)) { for (const d of f) this.scene.remove(d.group); this.flocks.delete(key); }
  }
  spawn(key, pond) {
    const a = Math.random() * TAU, flock = [], mother = new Duck('mother', pond, pond.x + Math.cos(a) * pond.r * .4, pond.z + Math.sin(a) * pond.r * .4);
    flock.push(mother); let prev = mother;
    for (let i = 0; i < 3 + Math.floor(Math.random() * 2); i++) { const d = new Duck('duckling', pond, prev.x - Math.cos(prev.heading) * .35, prev.z - Math.sin(prev.heading) * .35); d.follow = prev; flock.push(d); prev = d; }
    for (const d of flock) { d.group.position.set(d.x, WATER_Y, d.z); this.scene.add(d.group); }
    this.flocks.set(key, flock);
  }
  update(dt, cat, time) {
    for (const [, flock] of this.flocks) for (const d of flock) {
      const pond = d.pond, toCat = Math.hypot(cat.x - d.x, cat.z - d.z);
      let tx, tz, want = d.kind === 'mother' ? .55 : .7;
      if (toCat < 3.2 && Math.abs(cat.y) < 2) {
        // Away from the cat, with a bit of sideways so a line of ducklings fans out.
        const ax = d.x - cat.x, az = d.z - cat.z, l = Math.hypot(ax, az) || 1;
        tx = d.x + ax / l * 3 + az / l * .6; tz = d.z + az / l * 3 - ax / l * .6; want = 1.5;
        if (d.quack <= 0 && Math.random() < .5) { d.quack = 2 + Math.random() * 3; this.startles++; this.onQuack?.(d.kind); }
      } else if (d.follow) {
        const f = d.follow; tx = f.x - Math.sin(f.heading) * .42; tz = f.z - Math.cos(f.heading) * .42;
        if (Math.hypot(tx - d.x, tz - d.z) < .12) want = 0;
      } else {
        d.wander -= dt;
        if (d.wander <= 0 || !d.target) { d.wander = 4 + Math.random() * 6; const a = Math.random() * TAU, rr = Math.random() * (pond.r - .8); d.target = [pond.x + Math.cos(a) * rr, pond.z + Math.sin(a) * rr]; }
        [tx, tz] = d.target; if (Math.hypot(tx - d.x, tz - d.z) < .3) want = 0;
        if (d.quack <= 0 && Math.random() < dt * .04) { d.quack = 6; this.onQuack?.(d.kind, true); }
      }
      d.quack -= dt;
      // Stay near the pond: fleeing ducks may hop onto the bank but drift back when calm.
      const fromCentre = Math.hypot(tx - pond.x, tz - pond.z), limit = toCat < 3.2 ? pond.r + 2.2 : pond.r - .4;
      if (fromCentre > limit) { tx = pond.x + (tx - pond.x) / fromCentre * limit; tz = pond.z + (tz - pond.z) / fromCentre * limit; }
      const dx = tx - d.x, dz = tz - d.z, dist = Math.hypot(dx, dz);
      if (dist > .05 && want > 0) {
        const goal = Math.atan2(dx, dz); let diff = goal - d.heading; diff = Math.atan2(Math.sin(diff), Math.cos(diff)); d.heading += diff * Math.min(1, dt * 5);
      }
      d.speed += ((want > 0 && dist > .05 ? Math.min(want, dist * 2) : 0) - d.speed) * Math.min(1, dt * 4);
      d.x += Math.sin(d.heading) * d.speed * dt; d.z += Math.cos(d.heading) * d.speed * dt;
      const inWater = Math.hypot(d.x - pond.x, d.z - pond.z) < pond.r - .15;
      d.onLand = !inWater;
      const y = inWater ? WATER_Y + Math.sin(time * 2.1 + d.phase) * .012 : this.physics.support(d.x, d.z, 1).y + .02;
      d.group.position.set(d.x, y, d.z); d.group.rotation.set(inWater ? Math.sin(time * 2.6 + d.phase) * .04 : 0, d.heading, inWater ? Math.sin(time * 1.9 + d.phase) * .05 : Math.sin(time * 12) * .08 * Math.min(1, d.speed));
    }
  }
  dispose() { for (const [, f] of this.flocks) for (const d of f) this.scene.remove(d.group); this.flocks.clear(); }
  get count() { let n = 0; for (const [, f] of this.flocks) n += f.length; return n; }
}
