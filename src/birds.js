// Little garden birds: budgie-bright, perched on lamps, benches, sills, and branches.
// They flutter away when the cat comes close and settle somewhere new a moment later.
import * as THREE from 'three';

const COLOURS = [
  { body: '#f2d84a', head: '#f7e27a', wing: '#d8bb2e' }, // sunny yellow
  { body: '#7fb6e6', head: '#e8eef2', wing: '#4f86bd' }, // sky blue with a pale face
  { body: '#8fc46a', head: '#e6e07a', wing: '#5f9548' }, // green and gold
  { body: '#e9e4dc', head: '#f4f1ea', wing: '#aeb3b8' }, // white and grey
  { body: '#9ac3dc', head: '#f0f3f5', wing: '#6d94b4' }, // powder blue
];
const PERCH_KINDS = new Set(['lamp', 'post', 'chimney', 'pergola', 'sill', 'tree', 'pole', 'awning', 'bench', 'fountain', 'box']);
const materialCache = new Map();
const mat = hex => { if (!materialCache.has(hex)) materialCache.set(hex, new THREE.MeshLambertMaterial({ color: hex })); return materialCache.get(hex); };
const bodyGeo = new THREE.SphereGeometry(1, 10, 8);
const wingGeo = new THREE.BoxGeometry(1, .08, .6);
const beakGeo = new THREE.ConeGeometry(.5, 1, 6);
const tailGeo = new THREE.BoxGeometry(.035, .02, .16);

class Bird {
  constructor(birds, colour) {
    this.birds = birds; this.group = new THREE.Group(); this.wingFlap = 0; this.phase = Math.random() * 9;
    const body = new THREE.Mesh(bodyGeo, mat(colour.body)); body.scale.set(.11, .1, .15); body.position.y = .1; this.group.add(body);
    const head = new THREE.Mesh(bodyGeo, mat(colour.head)); head.scale.set(.08, .08, .08); head.position.set(0, .19, .11); this.group.add(head);
    const beak = new THREE.Mesh(beakGeo, mat('#e5a24a')); beak.scale.set(.04, .05, .04); beak.rotation.x = Math.PI / 2; beak.position.set(0, .185, .2); this.group.add(beak);
    const tail = new THREE.Mesh(tailGeo, mat(colour.wing)); tail.position.set(0, .1, -.19); tail.rotation.x = -.3; this.group.add(tail);
    this.wings = [-1, 1].map(s => { const w = new THREE.Mesh(wingGeo, mat(colour.wing)); w.scale.set(.18, 1, .2); w.position.set(s * .09, .13, 0); w.geometry = wingGeo; w.userData.side = s; this.group.add(w); return w; });
    for (const s of [-1, 1]) { const eye = new THREE.Mesh(bodyGeo, mat('#2a2a2a')); eye.scale.setScalar(.014); eye.position.set(s * .05, .21, .16); this.group.add(eye); }
    this.state = 'perch'; this.perch = null; this.from = new THREE.Vector3(); this.to = new THREE.Vector3(); this.t = 0; this.flight = 1; this.hopTimer = 2 + Math.random() * 4; this.heading = Math.random() * Math.PI * 2; this.cooldown = 0;
  }
  settle(perch) {
    this.perch = perch; this.state = 'perch'; this.group.position.set(perch.x, perch.y, perch.z); this.heading = perch.heading ?? Math.random() * Math.PI * 2; this.group.rotation.set(0, this.heading, 0); this.hopTimer = 3 + Math.random() * 6; this.wingFlap = 0;
  }
  flyTo(perch, startle) {
    this.from.copy(this.group.position); this.to.set(perch.x, perch.y, perch.z); this.perch = perch; this.state = 'fly'; this.t = 0;
    const dist = this.from.distanceTo(this.to); this.flight = Math.max(.9, dist / (startle ? 7 : 5)); this.arc = 1.2 + Math.min(3, dist * .12) + (startle ? .8 : 0);
    this.heading = Math.atan2(this.to.x - this.from.x, this.to.z - this.from.z); this.cooldown = startle ? 2 : 0;
  }
  update(dt, cat, catSpeed, time) {
    const birds = this.birds, pos = this.group.position;
    this.cooldown = Math.max(0, this.cooldown - dt);
    const dx = cat.x - pos.x, dz = cat.z - pos.z, dy = cat.y - pos.y, near = Math.hypot(dx, dz);
    if (this.state === 'perch') {
      // Bob, look about, and the odd little hop along the perch.
      const bob = Math.sin(time * 5 + this.phase) * .004 + (Math.sin(time * 1.3 + this.phase) > .95 ? .01 : 0);
      this.group.position.y = this.perch.y + bob;
      this.group.rotation.y = this.heading + Math.sin(time * .7 + this.phase) * .35;
      this.hopTimer -= dt;
      const scared = near < (catSpeed > 8 ? 5.5 : 2.6) && Math.abs(dy) < 3.2;
      if (scared || this.hopTimer <= 0) {
        const next = birds.findPerch(cat, scared ? 10 : 4, 40, this.perch);
        if (next) { this.flyTo(next, scared); if (scared) birds.onStartle?.(this); }
        else this.hopTimer = 2;
      }
      for (const w of this.wings) w.rotation.z = w.userData.side * .12;
    } else {
      this.t = Math.min(1, this.t + dt / this.flight);
      const k = this.t, e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      pos.lerpVectors(this.from, this.to, e); pos.y += Math.sin(k * Math.PI) * this.arc;
      const dirY = Math.cos(k * Math.PI) * this.arc * Math.PI / Math.max(1, this.from.distanceTo(this.to));
      this.group.rotation.set(-Math.atan(dirY) * .5, this.heading, Math.sin(time * 3 + this.phase) * .12);
      this.wingFlap += dt * 26;
      const flap = Math.sin(this.wingFlap) * .9;
      for (const w of this.wings) w.rotation.z = w.userData.side * (flap + .2);
      if (this.t >= 1) this.settle(this.perch);
    }
  }
}

export class Birds {
  constructor(scene, world, count = 12) {
    this.scene = scene; this.world = world; this.count = count; this.list = []; this.time = 0; this.spawnTimer = 0; this.onStartle = null; this.startles = 0;
    this.group = new THREE.Group(); scene.add(this.group);
  }
  // Top surfaces of nearby scenery make good perches: lamp tops, bench backs, sills, branches, chimneys.
  perchesNear(x, z, radius) {
    const out = [];
    for (const s of this.world.colliders) {
      if (!PERCH_KINDS.has(s.kind) || s.sensor) continue;
      const cx = (s.minX + s.maxX) / 2, cz = (s.minZ + s.maxZ) / 2;
      if (Math.abs(cx - x) > radius || Math.abs(cz - z) > radius) continue;
      if (s.shape === 'ellipsoid') { // a branch near the edge of the crown
        const a = Math.random() * Math.PI * 2, rr = s.rx * .72;
        out.push({ x: s.x + Math.cos(a) * rr, y: s.y + Math.sqrt(Math.max(0, 1 - .72 * .72)) * s.ry * .6, z: s.z + Math.sin(a) * rr, heading: a + Math.PI / 2, solid: s });
      } else if (s.shape === 'cylinder') out.push({ x: s.x, y: s.maxY, z: s.z, solid: s });
      else {
        const alongX = (s.maxX - s.minX) >= (s.maxZ - s.minZ), t = .15 + Math.random() * .7;
        out.push({ x: alongX ? s.minX + (s.maxX - s.minX) * t : cx, y: s.maxY, z: alongX ? cz : s.minZ + (s.maxZ - s.minZ) * t, heading: alongX ? Math.PI / 2 : 0, solid: s });
      }
    }
    return out;
  }
  findPerch(cat, minD, maxD, avoid = null) {
    const options = this.perchesNear(cat.x, cat.z, maxD).filter(p => {
      const d = Math.hypot(p.x - cat.x, p.z - cat.z);
      if (d < minD || d > maxD || p.solid === avoid?.solid) return false;
      return !this.list.some(b => b.perch && b.perch.solid === p.solid && Math.hypot(b.perch.x - p.x, b.perch.z - p.z) < .35);
    });
    if (!options.length) return null;
    // Mostly low perches, where the cat can actually see (and be seen by) them.
    const low = options.filter(p => p.y < 3.4);
    const pool = low.length && Math.random() < .75 ? low : options;
    return pool[Math.floor(Math.random() * pool.length)];
  }
  spawnAll(center) {
    for (let i = 0; i < this.count; i++) {
      const bird = new Bird(this, COLOURS[i % COLOURS.length]);
      const perch = this.findPerch(center, 6, 45) || { x: center.x + 8, y: .9, z: center.z + 6, solid: null };
      bird.settle(perch); this.group.add(bird.group); this.list.push(bird);
    }
  }
  update(dt, cat, catSpeed) {
    this.time += dt; this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 1;
      for (const b of this.list) {
        if (Math.hypot(b.group.position.x - cat.x, b.group.position.z - cat.z) > 75) { const p = this.findPerch(cat, 18, 50); if (p) b.settle(p); }
      }
    }
    for (const b of this.list) b.update(dt, cat, catSpeed, this.time);
  }
  dispose() { for (const b of this.list) this.group.remove(b.group); this.list = []; }
}
