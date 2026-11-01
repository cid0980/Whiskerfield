// The train. One runs on the railway line nearest the cat: it calls at every station on the
// line, waits, whistles, and goes on north. Its carriages are solid and carry whatever stands
// on them, so a cat on the roof goes wherever the train goes.
import * as THREE from 'three';
import { Batch, CHUNK, COAST_CZ, isRailColumn, railX, railAt, railHeading, isStationChunk } from './world.js';
import { buildTrain } from './places.js';

const MAX_SPEED = 11, ACCEL = 1.6, BRAKE = 2.2, DWELL = 9;
const mod = (a, n) => ((a % n) + n) % n;
// The locomotive and the two carriages, where each sits along the consist (the numbers buildTrain
// uses), and where one vehicle ends and the next begins. Each is placed on the line separately, so
// the train bends through a curve instead of the carriages cutting the corner.
const VEHICLE_ORIGINS = [-6.5, 3.2, 13.9], VEHICLE_CUTS = [-1e4, .5, 9, 1e4];

// Split the train's one geometry into one geometry per vehicle, each centred on its own vehicle, so
// they can be positioned and turned independently.
function splitVehicles(geo, material) {
  const pos = geo.attributes.position.array, nrm = geo.attributes.normal.array, col = geo.attributes.color.array, glw = geo.attributes.glow.array;
  const idx = geo.index.array, out = VEHICLE_ORIGINS.map(() => ({ p: [], n: [], c: [], g: [], i: [], count: 0 }));
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t], b = idx[t + 1], c = idx[t + 2];
    const zc = (pos[a * 3 + 2] + pos[b * 3 + 2] + pos[c * 3 + 2]) / 3;
    let k = 0; while (k < out.length - 1 && zc >= VEHICLE_CUTS[k + 1]) k++;
    const o = out[k], z0 = VEHICLE_ORIGINS[k];
    for (const v of [a, b, c]) {
      o.p.push(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2] - z0);
      o.n.push(nrm[v * 3], nrm[v * 3 + 1], nrm[v * 3 + 2]);
      o.c.push(col[v * 3], col[v * 3 + 1], col[v * 3 + 2]);
      o.g.push(glw[v]);
      o.i.push(o.count++);
    }
  }
  geo.dispose();
  return out.map((o, k) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(o.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(o.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(o.c, 3));
    g.setAttribute('glow', new THREE.Float32BufferAttribute(o.g, 1));
    g.setIndex(o.i); g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, material); mesh.name = ['train-loco', 'train-car1', 'train-car2'][k];
    return { mesh, z0: VEHICLE_ORIGINS[k] };
  });
}

export class Train {
  constructor(scene, world, physics) {
    this.scene = scene; this.world = world; this.physics = physics;
    const batch = new Batch(); this.spec = buildTrain(batch);
    this.group = new THREE.Group(); scene.add(this.group);
    this.vehicles = splitVehicles(batch.geometry(), world.material);
    for (const v of this.vehicles) { v.mesh.castShadow = true; v.mesh.receiveShadow = true; this.group.add(v.mesh); }
    this.solids = this.spec.boxes.map(b => ({ shape: 'box', kind: b.kind || 'car', train: true, climbable: b.climbable ?? true, x: 0, z: 0, r: Math.max(b.w, b.d) / 2 + .2, local: b, minX: 0, maxX: 0, minY: b.y - b.h / 2, maxY: b.y + b.h / 2, minZ: 0, maxZ: 0 }));
    for (const s of this.solids) physics.dynamic.push(s);
    this.puffs = []; const puffMat = new THREE.MeshLambertMaterial({ color: '#f1efe8', transparent: true, opacity: .55 }), puffGeo = new THREE.SphereGeometry(1, 7, 6);
    for (let i = 0; i < 14; i++) { const m = new THREE.Mesh(puffGeo, puffMat.clone()); m.visible = false; scene.add(m); this.puffs.push({ mesh: m, t: 2 }); }
    this.puffTimer = 0; this.onWhistle = null; this.onChuff = null; this.chuffTimer = 0;
    this.column = null; this.baseX = 0; this.lastX = 0; this.x = 0; this.z = 0; this.speed = 0; this.state = 'stop'; this.timer = 3; this.next = null; this.lastDelta = 0; this.visible = false;
  }
  // Station platform centres along a line: every even chunk, lot 0 (z = cz*72 - 16.5).
  stationsNear(z) { const out = []; const cz0 = Math.round(z / CHUNK); for (let cz = cz0 - 6; cz <= cz0 + 6; cz++) if (mod(cz, 2) === 0 && cz > COAST_CZ) out.push(cz * CHUNK - 16.5); if (!out.length) out.push((COAST_CZ + 1) * CHUNK - 16.5); return out; } // no stations out at sea: the first one ashore
  nearestColumn(x) { const cx = Math.round(x / CHUNK); let best = null; for (let k = cx - 6; k <= cx + 6; k++) if (isRailColumn(k) && (best === null || Math.abs(railX(k) - x) < Math.abs(railX(best) - x))) best = k; return best; }
  place(column, z) {
    this.column = column; this.baseX = railX(column); this.x = railAt(this.baseX, z); this.lastX = this.x;
    const stations = this.stationsNear(z); this.z = stations.reduce((a, b) => Math.abs(b - z) < Math.abs(a - z) ? b : a);
    this.state = 'stop'; this.timer = 2 + Math.random() * DWELL; this.speed = 0; this.next = null;
  }
  update(dt, cat, aboard) {
    const column = this.nearestColumn(cat.x);
    if (column === null) { this.visible = false; this.group.visible = false; this.lastDelta = 0; this.updateSolids(); return { dz: 0, dx: 0 }; }
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
    const wasX = this.x;
    this.x = railAt(this.baseX, this.z);
    // Each vehicle on its own bit of the line, turned to face along it.
    for (const v of this.vehicles) {
      const vz = this.z + v.z0, vx = railAt(this.baseX, vz);
      v.mesh.position.set(vx - this.x, 0, vz - this.z);
      v.mesh.rotation.y = railHeading(vz);
    }
    this.group.position.set(this.x, 0, this.z);
    this.updateSolids();
    this.smoke(dt);
    this.lastX = this.x;
    // A cat riding the train goes round the bend with it: the lateral shift is part of the ride.
    return { dz: this.lastDelta, dx: this.x - wasX };
  }
  updateSolids() {
    // A carriage on a bend is not axis-aligned, so each solid gets the box that contains it: the
    // footprint is turned to the line's heading and its extents are taken as the enclosing box.
    for (const s of this.solids) {
      const b = s.local;
      let k = 0; while (k < this.vehicles.length - 1 && b.z >= VEHICLE_CUTS[k + 1]) k++;
      const z0 = this.vehicles[k].z0, vz = this.z + b.z, vx = railAt(this.baseX, vz), h = railHeading(vz);
      const ch = Math.cos(h), sh = Math.sin(h), lz = b.z - z0;
      const cx = vx + b.x * ch + lz * sh, cz = vz - b.x * sh + lz * ch;
      const aw = (b.w * Math.abs(ch) + b.d * Math.abs(sh)) / 2 + .02, ad = (b.w * Math.abs(sh) + b.d * Math.abs(ch)) / 2 + .02;
      s.x = cx; s.z = cz; s.minX = cx - aw; s.maxX = cx + aw; s.minZ = cz - ad; s.maxZ = cz + ad;
      if (!this.visible) { s.minX = s.maxX = 1e9; }
    }
  }
  smoke(dt) {
    const c = this.spec.chimney, rate = this.state === 'run' ? .12 : .6;
    this.puffTimer -= dt;
    if (this.puffTimer <= 0 && this.visible) { this.puffTimer = rate; const p = this.puffs.find(q => q.t >= 2); if (p) { p.t = 0; const cz = this.z + c.z; p.mesh.position.set(railAt(this.baseX, cz) + c.x, c.y, cz); p.mesh.visible = true; p.vx = (Math.random() - .5) * .4; p.vz = -this.speed * .35 - .3; } }
    for (const p of this.puffs) { if (p.t >= 2) continue; p.t += dt; const m = p.mesh; m.position.x += p.vx * dt; m.position.y += (1.6 - p.t * .3) * dt; m.position.z += p.vz * dt; const s = .25 + p.t * .55; m.scale.setScalar(s); m.material.opacity = .5 * (1 - p.t / 2); if (p.t >= 2) m.visible = false; }
  }
  dispose() { this.scene.remove(this.group); for (const p of this.puffs) this.scene.remove(p.mesh); const d = this.physics.dynamic; for (const s of this.solids) { const i = d.indexOf(s); if (i >= 0) d.splice(i, 1); } }
}
