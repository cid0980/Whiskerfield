// Lifts. Each tower has one in its back corner: a glass car that waits at a floor, and when the
// cat steps on it, takes it up (or down) to the next floor, pauses, and carries on while the cat
// stays aboard. A cat waiting on another floor calls it. The car is a moving solid, like the train.
import * as THREE from 'three';
import { Batch, GEO } from './world.js';

const SPEED = 2.6, BOARD_DELAY = 1.1, DWELL = 2.6;

export class Lifts {
  constructor(scene, world, physics) { this.scene = scene; this.world = world; this.physics = physics; this.cars = new Map(); this.onChime = null; this.onHum = null; }
  sync() {
    const seen = new Set();
    for (const c of this.world.chunks.values()) for (const spec of c.lifts || []) { seen.add(spec.id); if (!this.cars.has(spec.id)) this.cars.set(spec.id, this.build(spec)); }
    for (const [id, car] of this.cars) if (!seen.has(id)) { this.remove(car); this.cars.delete(id); }
  }
  build(spec) {
    const b = new Batch(), w = spec.w, d = spec.d;
    b.box(0, .08, 0, w, .16, d, '#5f6b66'); b.box(0, .17, 0, w - .3, .02, d - .3, '#c9a35c');
    for (const [wx, wz, ww, wd] of [[w / 2 - .03, 0, .06, d], [-w / 2 + .03, 0, .06, d], [0, -d / 2 + .03, w, .06]]) b.box(wx, .16 + .6, wz, ww, 1.2, wd, '#9fd3e6');
    for (const [wx, wz] of [[w / 2 - .06, -d / 2 + .06], [-w / 2 + .06, -d / 2 + .06], [w / 2 - .06, d / 2 - .06], [-w / 2 + .06, d / 2 - .06]]) b.box(wx, .16 + .7, wz, .1, 1.4, .1, '#4a4f4c');
    b.box(0, 1.5, -d / 2 + .1, .3, .12, .08, '#e9e3d2'); b.ball(0, 1.5, -d / 2 + .05, .03, .03, .03, '#e9c04b');
    b.box(0, 1.62, 0, w, .06, d, '#5f6b66'); b.box(0, 1.6, 0, .6, .02, .6, '#f6ecc8');
    const mesh = new THREE.Mesh(b.geometry(), this.world.material); mesh.castShadow = true; mesh.receiveShadow = true; mesh.name = 'lift';
    const group = new THREE.Group(); group.add(mesh); group.position.set(spec.x, spec.levels[0], spec.z); this.scene.add(group);
    const solid = (lx, lz, lw, lh, ld, kind) => ({ shape: 'box', kind, lift: null, climbable: false, x: spec.x + lx, z: spec.z + lz, r: Math.max(lw, ld) / 2 + .2, local: { x: lx, z: lz, w: lw, h: lh, d: ld }, minX: spec.x + lx - lw / 2, maxX: spec.x + lx + lw / 2, minZ: spec.z + lz - ld / 2, maxZ: spec.z + lz + ld / 2, minY: 0, maxY: 0 });
    const car = { spec, group, y: spec.levels[0], level: 0, dir: 1, state: 'wait', timer: 0, call: 0, dy: 0, floor: solid(0, 0, w, .16, d, 'lift'), walls: [solid(w / 2 - .03, 0, .06, 1.36, d, 'liftwall'), solid(-w / 2 + .03, 0, .06, 1.36, d, 'liftwall'), solid(0, -d / 2 + .03, w, 1.36, .06, 'liftwall'), solid(0, 0, w, .06, d, 'liftroof')] };
    car.floor.lift = car; for (const s of car.walls) s.lift = car;
    this.physics.dynamic.push(car.floor, ...car.walls); this.place(car);
    return car;
  }
  place(car) {
    car.group.position.y = car.y;
    const set = (s, y0, y1) => { s.minY = y0; s.maxY = y1; };
    set(car.floor, car.y - .02, car.y + .16); set(car.walls[0], car.y + .16, car.y + 1.52); set(car.walls[1], car.y + .16, car.y + 1.52); set(car.walls[2], car.y + .16, car.y + 1.52); set(car.walls[3], car.y + 1.59, car.y + 1.65);
  }
  remove(car) { this.scene.remove(car.group); const d = this.physics.dynamic; for (const s of [car.floor, ...car.walls]) { const i = d.indexOf(s); if (i >= 0) d.splice(i, 1); } }
  // Returns how far the car under the cat moved this frame (0 when the cat is not on a lift).
  update(dt, cat, support) {
    let ride = 0;
    for (const car of this.cars.values()) {
      const { spec } = car, before = car.y, aboard = support?.lift === car && support.kind === 'lift';
      const near = Math.abs(cat.x - spec.x) < 5 && Math.abs(cat.z - spec.z) < 5;
      if (car.state === 'wait') {
        car.timer += dt; car.aboard = aboard ? (car.aboard || 0) + dt : 0;
        if (aboard) {
          if (car.aboard > BOARD_DELAY && car.timer > DWELL) {
            if (car.level >= spec.levels.length - 1) car.dir = -1; else if (car.level <= 0) car.dir = 1;
            car.target = car.level + car.dir; car.state = 'move'; car.timer = 0; this.onHum?.(Math.hypot(cat.x - spec.x, cat.z - spec.z));
          }
        } else {
          // Called from another floor: come to the level nearest the cat.
          const want = spec.levels.reduce((best, y, i) => Math.abs(y - cat.y) < Math.abs(spec.levels[best] - cat.y) ? i : best, 0);
          if (near && want !== car.level && Math.abs(spec.levels[want] - cat.y) < 1.2) { car.call += dt; if (car.call > 1.4) { car.target = want; car.dir = want > car.level ? 1 : -1; car.state = 'move'; car.timer = 0; car.call = 0; this.onHum?.(Math.hypot(cat.x - spec.x, cat.z - spec.z)); } } else car.call = 0;
        }
      } else {
        const ty = spec.levels[car.target], step = SPEED * dt * Math.min(1, .25 + Math.min(Math.abs(ty - car.y), Math.abs(car.y - spec.levels[car.level])) / 1.2 + .15);
        if (Math.abs(ty - car.y) <= step) { car.y = ty; car.level = car.target; car.state = 'wait'; car.timer = 0; car.aboard = 0; this.onChime?.(Math.hypot(cat.x - spec.x, cat.z - spec.z)); }
        else car.y += Math.sign(ty - car.y) * step;
      }
      car.dy = car.y - before; this.place(car);
      if (aboard) ride = car.dy;
    }
    return ride;
  }
  dispose() { for (const car of this.cars.values()) this.remove(car); this.cars.clear(); }
}
