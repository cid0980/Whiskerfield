// The train. One runs on the railway line nearest the cat: it calls at every station on the
// line, waits, whistles, and goes on north. Its carriages are solid and carry whatever stands
// on them, so a cat on the roof goes wherever the train goes.
import * as THREE from 'three';
import { Batch, CHUNK, isRailColumn, railX, isStationChunk } from './world.js';
import { buildTrain } from './places.js';

const MAX_SPEED = 11, ACCEL = 1.6, BRAKE = 2.2, DWELL = 9;
const mod = (a, n) => ((a % n) + n) % n;

export class Train {
  constructor(scene, world, physics) {
    this.scene = scene; this.world = world; this.physics = physics;
    const batch = new Batch(); this.spec = buildTrain(batch);
    this.mesh = new THREE.Mesh(batch.geometry(), world.material); this.mesh.castShadow = true; this.mesh.receiveShadow = true; this.mesh.name = 'train';
    this.group = new THREE.Group(); this.group.add(this.mesh); scene.add(this.group);
    this.solids = this.spec.boxes.map(b => ({ shape: 'box', kind: b.kind || 'car', train: true, climbable: b.climbable ?? true, x: 0, z: 0, r: Math.max(b.w, b.d) / 2 + .2, local: b, minX: 0, maxX: 0, minY: b.y - b.h / 2, maxY: b.y + b.h / 2, minZ: 0, maxZ: 0 }));
    for (const s of this.solids) physics.dynamic.push(s);
    this.puffs = []; const puffMat = new THREE.MeshLambertMaterial({ color: '#f1efe8', transparent: true, opacity: .55 }), puffGeo = new THREE.SphereGeometry(1, 7, 6);
    for (let i = 0; i < 14; i++) { const m = new THREE.Mesh(puffGeo, puffMat.clone()); m.visible = false; scene.add(m); this.puffs.push({ mesh: m, t: 2 }); }
    this.puffTimer = 0; this.onWhistle = null; this.onChuff = null; this.chuffTimer = 0;
    this.column = null; this.x = 0; this.z = 0; this.speed = 0; this.state = 'stop'; this.timer = 3; this.next = null; this.lastDelta = 0; this.visible = false;
  }
  // Station platform centres along a line: every even chunk, lot 0 (z = cz*72 - 16.5).
  stationsNear(z) { const out = []; const cz0 = Math.round(z / CHUNK); for (let cz = cz0 - 6; cz <= cz0 + 6; cz++) if (mod(cz, 2) === 0) out.push(cz * CHUNK - 16.5); return out; }
  nearestColumn(x) { const cx = Math.round(x / CHUNK); let best = null; for (let k = cx - 6; k <= cx + 6; k++) if (isRailColumn(k) && (best === null || Math.abs(railX(k) - x) < Math.abs(railX(best) - x))) best = k; return best; }
  place(column, z) {
    this.column = column; this.x = railX(column);
    const stations = this.stationsNear(z); this.z = stations.reduce((a, b) => Math.abs(b - z) < Math.abs(a - z) ? b : a);
    this.state = 'stop'; this.timer = 2 + Math.random() * DWELL; this.speed = 0; this.next = null;
  }
  update(dt, cat, aboard) {
    const column = this.nearestColumn(cat.x);
    if (column === null) { this.visible = false; this.group.visible = false; this.lastDelta = 0; this.updateSolids(); return 0; }
    const far = Math.abs(cat.z - this.z) > 230 || Math.abs(cat.x - this.x) > 230;
    if (this.column !== column || (far && !aboard)) this.place(column, cat.z - 150 - Math.random() * 60);
    this.group.visible = true; this.visible = true;
    const before = this.z;
    if (this.state === 'stop') {
      this.timer -= dt;
      if (this.timer <= 0) { this.state = 'run'; this.next = this.stationsNear(this.z).find(s => s > this.z + 1) ?? this.z + CHUNK * 2; this.onWhistle?.(Math.hypot(cat.x - this.x, cat.z - this.z)); }
    } else {
      const remaining = this.next - this.z, stopIn = this.speed * this.speed / (2 * BRAKE);
      if (remaining <= stopIn + .05) this.speed = Math.max(0, this.speed - BRAKE * dt); else this.speed = Math.min(MAX_SPEED, this.speed + ACCEL * dt);
      this.z += this.speed * dt;
      if (remaining < .12 || (this.speed < .05 && remaining < .6)) { this.z = this.next; this.speed = 0; this.state = 'stop'; this.timer = DWELL; }
      this.chuffTimer -= dt * (0.6 + this.speed / 4);
      if (this.chuffTimer <= 0 && this.speed > .5) { this.chuffTimer = .9; this.onChuff?.(Math.hypot(cat.x - this.x, cat.z - this.z), this.speed / MAX_SPEED); }
    }
    this.lastDelta = this.z - before;
    this.group.position.set(this.x, 0, this.z);
    this.updateSolids();
    this.smoke(dt);
    return this.lastDelta;
  }
  updateSolids() {
    for (const s of this.solids) { const b = s.local; s.x = this.x + b.x; s.z = this.z + b.z; s.minX = s.x - b.w / 2; s.maxX = s.x + b.w / 2; s.minZ = s.z - b.d / 2; s.maxZ = s.z + b.d / 2; if (!this.visible) { s.minX = s.maxX = 1e9; } }
  }
  smoke(dt) {
    const c = this.spec.chimney, rate = this.state === 'run' ? .12 : .6;
    this.puffTimer -= dt;
    if (this.puffTimer <= 0 && this.visible) { this.puffTimer = rate; const p = this.puffs.find(q => q.t >= 2); if (p) { p.t = 0; p.mesh.position.set(this.x + c.x, c.y, this.z + c.z); p.mesh.visible = true; p.vx = (Math.random() - .5) * .4; p.vz = -this.speed * .35 - .3; } }
    for (const p of this.puffs) { if (p.t >= 2) continue; p.t += dt; const m = p.mesh; m.position.x += p.vx * dt; m.position.y += (1.6 - p.t * .3) * dt; m.position.z += p.vz * dt; const s = .25 + p.t * .55; m.scale.setScalar(s); m.material.opacity = .5 * (1 - p.t / 2); if (p.t >= 2) m.visible = false; }
  }
  dispose() { this.scene.remove(this.group); for (const p of this.puffs) this.scene.remove(p.mesh); const d = this.physics.dynamic; for (const s of this.solids) { const i = d.indexOf(s); if (i >= 0) d.splice(i, 1); } }
}
