import * as THREE from 'three';

export const CHUNK = 72;
const TAU = Math.PI * 2;
const Y = new THREE.Vector3(0, 1, 0);
const tempMatrix = new THREE.Matrix4();
const tempQuaternion = new THREE.Quaternion();
const tempPosition = new THREE.Vector3();
const tempScale = new THREE.Vector3();
const tempNormal = new THREE.Vector3();
const tempColor = new THREE.Color();

export function hashString(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export function hash(x, z, seed = 0, salt = 0) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(z | 0, 668265263) ^ seed ^ Math.imul(salt, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return (h ^ (h >>> 16)) >>> 0;
}
export function random(seed) {
  let a = seed >>> 0;
  return () => { a += 0x6D2B79F5; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const cylinderGeo = new THREE.CylinderGeometry(1, 1, 1, 10);
const taperedGeo = new THREE.CylinderGeometry(.72, 1, 1, 9);
const coneGeo = new THREE.ConeGeometry(1, 1, 8);
const sphereGeo = new THREE.IcosahedronGeometry(1, 1);
const softSphereGeo = new THREE.IcosahedronGeometry(1, 1);
const potGeo = new THREE.CylinderGeometry(1, .72, 1, 9);
const torusGeo = new THREE.TorusGeometry(1, .12, 5, 16);

class Batch {
  constructor() { this.p = []; this.n = []; this.c = []; this.i = []; this.count = 0; }
  add(geometry, x, y, z, sx, sy, sz, color, rx = 0, ry = 0, rz = 0) {
    tempPosition.set(x, y, z); tempScale.set(sx, sy, sz);
    tempQuaternion.setFromEuler(new THREE.Euler(rx, ry, rz));
    tempMatrix.compose(tempPosition, tempQuaternion, tempScale);
    tempColor.set(color);
    const pos = geometry.attributes.position, norm = geometry.attributes.normal;
    const offset = this.count;
    for (let v = 0; v < pos.count; v++) {
      tempPosition.fromBufferAttribute(pos, v).applyMatrix4(tempMatrix);
      this.p.push(tempPosition.x, tempPosition.y, tempPosition.z);
      tempNormal.set(norm.getX(v) / sx, norm.getY(v) / sy, norm.getZ(v) / sz).applyQuaternion(tempQuaternion).normalize();
      this.n.push(tempNormal.x, tempNormal.y, tempNormal.z);
      this.c.push(tempColor.r, tempColor.g, tempColor.b);
    }
    if (geometry.index) for (let j = 0; j < geometry.index.count; j++) this.i.push(geometry.index.getX(j) + offset);
    else for (let j = 0; j < pos.count; j++) this.i.push(j + offset);
    this.count += pos.count;
    return this;
  }
  box(x, y, z, w, h, d, color, ry = 0) { return this.add(boxGeo, x, y, z, w, h, d, color, 0, ry); }
  cyl(x, y, z, r, h, color, rx = 0, rz = 0) { return this.add(cylinderGeo, x, y, z, r, h, r, color, rx, 0, rz); }
  ball(x, y, z, rx, ry, rz, color, soft = false) { return this.add(soft ? softSphereGeo : sphereGeo, x, y, z, rx, ry, rz, color); }
  beam(a, b, radius, color) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b), delta = end.clone().sub(start);
    const q = new THREE.Quaternion().setFromUnitVectors(Y, delta.clone().normalize());
    const e = new THREE.Euler().setFromQuaternion(q);
    return this.add(cylinderGeo, ...start.add(end).multiplyScalar(.5).toArray(), radius, delta.length(), radius, color, e.x, e.y, e.z);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setIndex(this.i); g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}

const walls = ['#d6c4a6', '#c9b79b', '#b9c0ae', '#aeb9b2', '#d8cbb2', '#c4b49a', '#b7bfae', '#cbb9a4', '#c2c7b6', '#d2c1a4'];
const roofs = ['#8a5a44', '#96604a', '#7b5140', '#5c6b66', '#65756d', '#6f6252', '#8a6a4c', '#5a6870'];
const leaves = ['#6f8a52', '#7d965c', '#8a9f66', '#62804f', '#93a26b', '#6b8757'];
const flowers = ['#d9b76a', '#d69a86', '#e6d9b4', '#b98a9a', '#d9a85e'];
const districtFirst = ['Clover', 'Willow', 'Honey', 'Fern', 'Moss', 'Clementine', 'Juniper', 'Lavender', 'Pebble', 'Marigold', 'Chestnut', 'Meadow', 'Rosemary', 'Hazel', 'Poppy', 'Bramble'];
const districtLast = ['Quarter', 'Gardens', 'Lane', 'Hill', 'Corner', 'Heights', 'Common', 'Terrace'];
export function districtName(cx, cz, seed) { const h = hash(Math.floor(cx / 2), Math.floor(cz / 2), seed, 71); return `${districtFirst[h % districtFirst.length]} ${districtLast[(h >>> 8) % districtLast.length]}`; }

export class World {
  constructor(scene, seedText) {
    this.scene = scene; this.seedText = seedText; this.seed = hashString(seedText);
    this.chunks = new Map(); this.colliders = []; this.buildings = []; this.parks = []; this.water = [];
    this.material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .98, metalness: 0, flatShading: true });
    this.center = ''; this.radius = 2; this.pending = [];
  }

  update(position, budget = 1) {
    const cx = Math.floor((position.x + CHUNK / 2) / CHUNK), cz = Math.floor((position.z + CHUNK / 2) / CHUNK);
    const key = `${cx},${cz}`;
    if (key !== this.center) {
      this.center = key; this.pending = [];
      for (let x = cx - this.radius; x <= cx + this.radius; x++) for (let z = cz - this.radius; z <= cz + this.radius; z++) {
        if (!this.chunks.has(`${x},${z}`)) this.pending.push({ x, z, d: (x - cx) ** 2 + (z - cz) ** 2 });
      }
      this.pending.sort((a, b) => a.d - b.d);
      for (const [k, chunk] of this.chunks) if (Math.abs(chunk.cx - cx) > this.radius + 1 || Math.abs(chunk.cz - cz) > this.radius + 1) this.removeChunk(k);
      this.refreshColliders();
    }
    let made = 0;
    while (this.pending.length && made < budget) {
      const { x, z } = this.pending.shift();
      if (!this.chunks.has(`${x},${z}`)) { this.createChunk(x, z); made++; }
    }
    if (made) this.refreshColliders();
    return made;
  }

  refreshColliders() {
    this.colliders = []; this.buildings = []; this.parks = []; this.water = [];
    for (const c of this.chunks.values()) { this.colliders.push(...c.colliders); this.buildings.push(...c.buildings); this.parks.push(...c.parks); this.water.push(...c.water); }
  }

  removeChunk(key) {
    const c = this.chunks.get(key); if (!c) return;
    this.scene.remove(c.mesh); c.mesh.geometry.dispose(); this.chunks.delete(key);
  }

  dispose() { for (const key of this.chunks.keys()) this.removeChunk(key); this.material.dispose(); }

  solid(c, x, y, z, w, h, d, options = {}) {
    const s = { minX: x - w / 2, maxX: x + w / 2, minY: y - h / 2, maxY: y + h / 2, minZ: z - d / 2, maxZ: z + d / 2, climbable: true, ...options };
    c.colliders.push(s); return s;
  }

  createChunk(cx, cz) {
    const key = `${cx},${cz}`, rng = random(hash(cx, cz, this.seed));
    const c = { cx, cz, key, batch: new Batch(), colliders: [], buildings: [], parks: [], water: [], mesh: null };
    const ox = cx * CHUNK, oz = cz * CHUNK;
    const grass = ['#93a86f', '#9aae75', '#8fa46a', '#a0b27b'][hash(cx, cz, this.seed, 4) % 4];
    c.batch.box(ox, -.23, oz, CHUNK + .05, .4, CHUNK + .05, grass);
    // Neighborhood streets are continuous across chunk boundaries.
    const road = '#b9ae96', pavement = '#cfc4ab';
    for (const s of [-1, 1]) {
      c.batch.box(ox + s * 32.5, .005, oz, 7, .08, CHUNK, road);
      c.batch.box(ox, .006, oz + s * 32.5, CHUNK, .08, 7, road);
      for (const edge of [-1, 1]) {
        c.batch.box(ox + s * 32.5 + edge * 4.05, .055, oz, 1.05, .15, CHUNK - 9, pavement);
        c.batch.box(ox, .056, oz + s * 32.5 + edge * 4.05, CHUNK - 9, .15, 1.05, pavement);
      }
      c.batch.box(ox + s * 15, .015, oz, 3.3, .07, 58, '#b3a88f');
      c.batch.box(ox, .016, oz + s * 15, 58, .07, 3.3, '#b3a88f');
    }
    // A few sun-bleached cobbles, rather than a repeating road texture.
    for (let i = 0; i < 100; i++) {
      const along = rng() * 68 - 34, across = (rng() - .5) * 5.4;
      const x = i % 2 ? ox + 32.5 + across : ox + along;
      const z = i % 2 ? oz + along : oz + 32.5 + across;
      c.batch.box(x, .052, z, .45 + rng() * .6, .018, .3 + rng() * .35, rng() > .5 ? '#aaa08a' : '#c4b99f', (rng() - .5) * .2);
    }
    for (let i = 0; i < 4; i++) {
      const lx = i % 2 ? 16.5 : -16.5, lz = i < 2 ? -16.5 : 16.5;
      const x = ox + lx, z = oz + lz;
      const r = random(hash(cx * 4 + i, cz, this.seed, 901));
      const isPark = (cx === 0 && cz === 0 && i === 3) || (!(cx === 0 && cz === 0) && r() < .23);
      if (isPark) this.makePark(c, x, z, r, i);
      else this.makeBuilding(c, x, z, r, `${key}:${i}`, cx === 0 && cz === 0 ? i : -1);
    }
    // Street trees, lanterns, and small places to pause.
    for (const s of [-1, 1]) {
      this.tree(c, ox + s * 27.5, oz + 5, rng, .65);
      this.tree(c, ox - 7, oz + s * 27.5, rng, .65);
      this.lamp(c, ox + s * 28, oz - 27.5);
      if (rng() > .35) this.bench(c, ox + s * 27.7, oz + 14, s * Math.PI / 2);
    }
    if (cx === 0 && cz === 0) {
      this.makeSpawn(c, rng);
    } else if (rng() > .65) {
      this.bunting(c, ox - 12, oz, ox + 12, oz, 6.5);
    }
    const mesh = new THREE.Mesh(c.batch.geometry(), this.material);
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.name = `neighborhood-${key}`;
    c.mesh = mesh; c.batch = null; this.chunks.set(key, c); this.scene.add(mesh);
  }

  makeBuilding(c, x, z, r, id, special = -1) {
    const b = c.batch;
    let w = 12.5 + r() * 7.5, d = 12 + r() * 7.5;
    let floors = 2 + Math.floor(r() * 3), floorH = 2.65 + r() * .55;
    let h = floors * floorH + .4;
    let wall = walls[Math.floor(r() * walls.length)], roofColor = roofs[Math.floor(r() * roofs.length)];
    let roofType = Math.floor(r() * 4);
    if (special === 0) { w = 15 + r() * 3; d = 13 + r() * 3; floors = 2 + Math.floor(r() * 2); h = floors * 3 + .3; wall = ['#c9a684','#d2b795','#c4a083','#d6c1a0'][Math.floor(r()*4)]; roofColor = roofs[Math.floor(r()*3)]; roofType = 0; }
    if (special === 1) { w = 14 + r() * 4; d = 13 + r() * 3; h = 6.5 + r() * 1.5; floors = 2; wall = ['#d8cbb2','#d2c5aa','#cbcbb4','#d6c4a4'][Math.floor(r()*4)]; roofColor = roofs[3+Math.floor(r()*3)]; roofType = 2; }
    if (special === 2) { w = 14 + r() * 3; d = 14 + r() * 3; h = 9 + r() * 2; floors = 3; wall = ['#aeb9b2','#b3c0bc','#b9c0ae','#a8b7ab'][Math.floor(r()*4)]; roofColor = roofs[Math.floor(r()*roofs.length)]; roofType = 3; }
    x += (r() - .5) * 1.6; z += (r() - .5) * 1.6;
    const ridgeX = r() > .5;
    const roofRise = roofType === 0 ? 2.4 + r() * 2 : roofType === 1 ? 2.5 + r() * 1.7 : 0;
    const building = { id, x, z, w, d, h, roofType, roofRise, ridgeX, wall, roofColor, cx: c.cx, cz: c.cz, kind: 'roof' };
    c.buildings.push(building);
    const body = this.solid(c, x, h / 2, z, w, h, d, { buildingId: id, building });
    building.body = body;
    b.box(x, .18, z, w + .35, .45, d + .35, '#b8b6a0');
    b.box(x, h / 2, z, w, h, d, wall);
    b.box(x, h - .12, z, w + .38, .25, d + .38, '#e8dfc4');
    const trim = '#ede5cd', glass = '#647e78', shutter = roofColor;
    // Lightly articulated plaster, corner stones, and floor courses.
    for (let f = 1; f < floors; f++) {
      if (r() > .3) b.box(x, f * floorH + .25, z, w + .1, .11, d + .1, '#d7d2b7');
    }
    if (r() > .35) for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (let yy = .7; yy < h - .5; yy += .85) {
      b.box(x + sx * (w / 2 - .06), yy, z + sz * (d / 2 - .06), .56, .37, .56, '#ded6bc');
    }
    const doorSide = special >= 0 ? (special === 2 ? 1 : 0) : Math.floor(r() * 4);
    const doorU = (r() - .5) * w * .28;
    for (let side = 0; side < 4; side++) {
      const angle = side * Math.PI / 2, nx = Math.sin(angle), nz = Math.cos(angle), tx = nz, tz = -nx;
      const faceW = side % 2 ? d : w, halfD = side % 2 ? w / 2 : d / 2;
      const cols = Math.max(2, Math.floor(faceW / 3.5));
      for (let f = 0; f < floors; f++) for (let col = 0; col < cols; col++) {
        const u = (col - (cols - 1) / 2) * (faceW / (cols + .45));
        if (side === doorSide && f === 0 && Math.abs(u - doorU) < 2) continue;
        if (r() < .07) continue;
        const wx = x + nx * (halfD + .055) + tx * u, wz = z + nz * (halfD + .055) + tz * u;
        const wy = f * floorH + 1.65, ww = 1.12 + r() * .32, wh = 1.5 + r() * .24;
        const lit = r() > .82;
        b.box(wx, wy, wz, ww + .24, wh + .23, .16, trim, angle);
        b.box(wx + nx * .10, wy, wz + nz * .10, ww, wh, .06, lit ? '#dfcf97' : glass, angle);
        b.box(wx + nx * .15, wy, wz + nz * .15, .065, wh, .06, trim, angle);
        b.box(wx + nx * .15, wy + .05, wz + nz * .15, ww, .065, .06, trim, angle);
        b.box(wx + nx * .13, wy - wh / 2 - .1, wz + nz * .13, ww + .42, .16, .37, '#ded5bb', angle);
        if (r() > .38) for (const sign of [-1, 1]) {
          b.box(wx + tx * sign * (ww / 2 + .3), wy, wz + tz * sign * (ww / 2 + .3), .39, wh + .1, .12, shutter, angle);
          for (let sl = 0; sl < 4; sl++) b.box(wx + tx * sign * (ww / 2 + .3) + nx * .075, wy - .5 + sl * .32, wz + tz * sign * (ww / 2 + .3) + nz * .075, .32, .045, .045, '#a5ad91', angle);
        }
        if (r() > .76) {
          b.box(wx + nx * .28, wy - wh / 2 - .13, wz + nz * .28, ww + .15, .27, .47, '#a78060', angle);
          for (let fl = 0; fl < 4; fl++) {
            const ff = (fl - 1.5) * .29;
            b.ball(wx + tx * ff + nx * .3, wy - wh / 2 + .1, wz + tz * ff + nz * .3, .22, .2, .22, leaves[fl % leaves.length]);
            b.ball(wx + tx * ff + nx * .3, wy - wh / 2 + .25, wz + tz * ff + nz * .3, .105, .1, .105, flowers[Math.floor(r() * flowers.length)]);
          }
        }
      }
    }
    // Every house has an inviting doorway, sometimes a striped canopy.
    {
      const a = doorSide * Math.PI / 2, nx = Math.sin(a), nz = Math.cos(a), tx = nz, tz = -nx;
      const half = doorSide % 2 ? w / 2 : d / 2;
      const dx = x + nx * (half + .1) + tx * doorU, dz = z + nz * (half + .1) + tz * doorU;
      b.box(dx, 1.25, dz, 1.75, 2.5, .2, trim, a);
      b.box(dx + nx * .12, 1.2, dz + nz * .12, 1.4, 2.35, .08, '#5d796a', a);
      b.box(dx + nx * .18, 1.65, dz + nz * .18, .95, .85, .04, '#9aaf98', a);
      b.ball(dx + nx * .23 + tx * .43, 1.05, dz + nz * .23 + tz * .43, .065, .065, .065, '#d5b773');
      b.box(dx + nx * .45, .14, dz + nz * .45, 2.15, .25, .95, '#cdc7ae', a);
      this.solid(c, dx + nx * .35, .12, dz + nz * .35, doorSide % 2 ? .8 : 2.1, .24, doorSide % 2 ? 2.1 : .8, { climbable: false });
      if (r() > .4) {
        const stripe = roofs[Math.floor(r() * roofs.length)];
        for (let s = 0; s < 8; s++) {
          const u = (s - 3.5) * .38;
          b.add(boxGeo, dx + tx * u + nx * .65, 2.85, dz + tz * u + nz * .65, .38, .1, 1.65, s % 2 ? '#eee4c8' : stripe, .17, a);
          b.box(dx + tx * u + nx * 1.43, 2.62, dz + tz * u + nz * 1.43, .38, .28, .1, s % 2 ? '#eee4c8' : stripe, a);
        }
      }
      this.pot(c, dx + tx * 1.45 + nx * .5, dz + tz * 1.45 + nz * .5, r, .7);
    }
    // Balconies are actual jumpable platforms, not painted-on details.
    if (r() > .38 || special === 0) {
      const side = doorSide, a = side * Math.PI / 2, nx = Math.sin(a), nz = Math.cos(a), tx = nz, tz = -nx;
      const half = side % 2 ? w / 2 : d / 2, by = floorH + .38, u = 1.8;
      const bx = x + nx * (half + .6) + tx * u, bz = z + nz * (half + .6) + tz * u;
      const bw = side % 2 ? 1.5 : 3.7, bd = side % 2 ? 3.7 : 1.5;
      b.box(bx, by, bz, bw, .23, bd, '#c6bea1');
      this.solid(c, bx, by, bz, bw, .23, bd, { climbable: false });
      for (const end of [-1, 1]) {
        b.box(bx + nx * .68 + tx * end * 1.65, by + .55, bz + nz * .68 + tz * end * 1.65, side % 2 ? .08 : 3.5, .08, side % 2 ? 3.5 : .08, '#667b68');
        for (let j = 0; j < 7; j++) {
          const v = (j - 3) * .52;
          b.box(bx + nx * .68 + tx * v, by + .3, bz + nz * .68 + tz * v, .055, .55, .055, '#667b68');
        }
      }
      this.pot(c, bx + tx * 1.2, bz + tz * 1.2, r, .5, by + .13);
    }
    if (roofType === 0) this.gable(c, building, roofRise, roofColor, ridgeX);
    else if (roofType === 1) this.hip(c, building, roofRise, roofColor);
    else if (roofType === 2) this.flatRoof(c, building, r);
    else this.steppedRoof(c, building, r);
    // A chimney, climbing ivy, and a stack of crates make each facade distinct.
    if (roofType < 2 && r() > .2) {
      const chx = x + (r() - .5) * w * .55, chz = z + (r() - .5) * d * .55;
      const chy = this.roofHeight(building, chx, chz);
      b.box(chx, chy + .8, chz, 1.05, 1.9, 1.05, '#c4aa8b');
      b.box(chx, chy + 1.8, chz, 1.3, .22, 1.3, '#ded0b1');
      b.box(chx, chy + 1.93, chz, .7, .04, .7, '#6d7060');
      for (let yy = .3; yy < 1.7; yy += .38) b.box(chx, chy + yy, chz + .532, 1.05, .035, .015, '#b3977a');
    }
    if (r() > .43) {
      const side = Math.floor(r() * 4), a = side * Math.PI / 2, nx = Math.sin(a), nz = Math.cos(a);
      const half = side % 2 ? w / 2 : d / 2, u = (r() - .5) * 5;
      const ix = x + nx * (half + .14) + nz * u, iz = z + nz * (half + .14) - nx * u;
      for (let j = 0; j < h * 3; j++) {
        const yy = .3 + j * .32, spread = Math.sin(j * 1.8) * .42;
        b.ball(ix + nz * spread, yy, iz - nx * spread, .3 + r() * .24, .28, .3 + r() * .24, leaves[j % leaves.length]);
      }
    }
    const crateX = x - w / 2 - .8, crateZ = z + d * .22;
    if (r() > .3) {
      this.crate(c, crateX, .43, crateZ, .86);
      if (r() > .5) this.crate(c, crateX, 1.23, crateZ, .76);
      this.crate(c, crateX - .05, .36, crateZ + 1, .72);
    }
    this.pot(c, x + w / 2 + .7, z + d / 2 - 1, r, .85);
    // Narrow garden strips soften the edges of the plaster.
    for (let j = 0; j < 6; j++) {
      const fx = x - w / 2 + 1 + j * (w - 2) / 5;
      if (Math.abs(fx - (x + doorU)) < 1.5 && doorSide === 0) continue;
      b.ball(fx, .28, z + d / 2 + 1.1, .55, .38, .5, leaves[Math.floor(r() * leaves.length)]);
      if (r() > .4) b.ball(fx, .61, z + d / 2 + 1.1, .14, .13, .14, flowers[Math.floor(r() * flowers.length)]);
    }
  }

  roofHeight(b, x, z) {
    if (x < b.x - b.w / 2 - .45 || x > b.x + b.w / 2 + .45 || z < b.z - b.d / 2 - .45 || z > b.z + b.d / 2 + .45) return -Infinity;
    if (b.roofType === 0) {
      const u = b.ridgeX ? z - b.z : x - b.x, half = (b.ridgeX ? b.d : b.w) / 2 + .45;
      return b.h + b.roofRise * Math.max(0, 1 - Math.abs(u) / half);
    }
    if (b.roofType === 1) {
      const u = 1 - Math.abs(x - b.x) / (b.w / 2 + .45), v = 1 - Math.abs(z - b.z) / (b.d / 2 + .45);
      return b.h + b.roofRise * Math.min(1, Math.max(0, Math.min(u, v) / .42));
    }
    return b.h;
  }

  gable(c, b, rise, color, ridgeX) {
    const w = b.w / 2 + .55, d = b.d / 2 + .55;
    let verts = [[-w,0,-d],[w,0,-d],[w,0,d],[-w,0,d],[0,rise,-d],[0,rise,d]];
    if (ridgeX) verts = verts.map(([x,y,z]) => [z,y,x]);
    const tris = [[0,3,5],[0,5,4],[4,5,2],[4,2,1]];
    const p = [];
    for (const tri of tris) for (const i of tri) p.push(...verts[i]);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(p,3)); geo.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(p.length),3)); geo.computeVertexNormals();
    // Double-sided vertex-colored roof surfaces.
    const back = geo.clone(); const ix = back.index; const arr = back.attributes.position.array;
    for (let i = 0; i < arr.length; i += 9) { for (let k = 0; k < 3; k++) { const t = arr[i+k]; arr[i+k] = arr[i+6+k]; arr[i+6+k] = t; } }
    back.computeVertexNormals();
    c.batch.add(geo,b.x,b.h,b.z,1,1,1,color); c.batch.add(back,b.x,b.h,b.z,1,1,1,color);
    geo.dispose(); back.dispose();
    const endColor = b.wall;
    for (const sign of [-1,1]) {
      const ep = ridgeX ? [sign*w,0,-d, sign*w,0,d, sign*w,rise,0] : [-w,0,sign*d,w,0,sign*d,0,rise,sign*d];
      const eg = new THREE.BufferGeometry(); eg.setAttribute('position',new THREE.Float32BufferAttribute(ep,3)); eg.setAttribute('normal',new THREE.Float32BufferAttribute(new Float32Array(9),3)); eg.computeVertexNormals();
      c.batch.add(eg,b.x,b.h-.02,b.z,1,1,1,endColor);
      const rev = eg.clone(); const ar = rev.attributes.position.array; for(let i=0;i<3;i++){const t=ar[i];ar[i]=ar[6+i];ar[6+i]=t;} rev.computeVertexNormals();
      c.batch.add(rev,b.x,b.h-.02,b.z,1,1,1,endColor); eg.dispose(); rev.dispose();
    }
    const slope = Math.atan2(rise, ridgeX ? d : w), length = Math.hypot(rise, ridgeX ? d : w);
    const tileColor = new THREE.Color(color).multiplyScalar(1.075);
    const count = Math.floor((ridgeX ? w : d) * 2 / 1.05);
    for (let j = 0; j <= count; j++) {
      const u = (j / count * 2 - 1) * (ridgeX ? w : d);
      for (const sign of [-1,1]) {
        if (ridgeX) c.batch.add(boxGeo,b.x+u,b.h+rise/2+.045,b.z+sign*d/2,.045,.045,length,tileColor,sign*slope,0,0);
        else c.batch.add(boxGeo,b.x+sign*w/2,b.h+rise/2+.045,b.z+u,length,.045,.045,tileColor,0,0,-sign*slope);
      }
    }
    if (ridgeX) c.batch.cyl(b.x,b.h+rise+.04,b.z,.13,b.w+1.25,color,0,Math.PI/2);
    else c.batch.cyl(b.x,b.h+rise+.04,b.z,.13,b.d+1.25,color,Math.PI/2);
  }

  hip(c, b, rise, color) {
    const w = b.w/2+.55,d = b.d/2+.55, tw = w*.16,td=d*.16;
    const v = [[-w,0,-d],[w,0,-d],[w,0,d],[-w,0,d],[-tw,rise,-td],[tw,rise,-td],[tw,rise,td],[-tw,rise,td]];
    const faces = [[0,4,5],[0,5,1],[1,5,6],[1,6,2],[2,6,7],[2,7,3],[3,7,4],[3,4,0],[4,7,6],[4,6,5]];
    const p=[]; for(const f of faces) for(const i of f)p.push(...v[i]);
    const g = new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(new Float32Array(p.length),3));g.computeVertexNormals();
    c.batch.add(g,b.x,b.h,b.z,1,1,1,color);
    const rev=g.clone();const a=rev.attributes.position.array;for(let i=0;i<a.length;i+=9)for(let k=0;k<3;k++){const t=a[i+k];a[i+k]=a[i+6+k];a[i+6+k]=t;}rev.computeVertexNormals();c.batch.add(rev,b.x,b.h,b.z,1,1,1,color);g.dispose();rev.dispose();
    for(const sx of [-1,1])for(const sz of [-1,1])c.batch.beam([b.x+sx*w,b.h,b.z+sz*d],[b.x+sx*tw,b.h+rise+.03,b.z+sz*td],.095,'#a89779');
  }

  flatRoof(c,b,r) {
    const {x,z,w,d,h}=b, color='#d9d3b8';
    c.batch.box(x,h+.04,z,w-.3,.1,d-.3,'#b9bca3');
    for(const s of [-1,1]) {
      c.batch.box(x+s*(w/2-.12),h+.32,z,.26,.6,d,color);
      c.batch.box(x,h+.32,z+s*(d/2-.12),w,.6,.26,color);
      this.solid(c,x+s*(w/2-.12),h+.3,z,.26,.6,d,{climbable:false});
      this.solid(c,x,h+.3,z+s*(d/2-.12),w,.6,.26,{climbable:false});
    }
    if(r()>.35){
      const px=x-w*.22,pz=z-d*.2, pw=4.5,pd=3.6;
      for(const sx of [-1,1])for(const sz of [-1,1]){c.batch.box(px+sx*pw/2,h+1.35,pz+sz*pd/2,.16,2.7,.16,'#a39370');}
      for(let j=0;j<7;j++)c.batch.box(px-pw/2+j*pw/6,h+2.75,pz,.14,.18,pd+.5,'#b4a17b');
      this.bench(c,px,pz,0,h);
      this.pot(c,px+pw/2+.6,pz+pd/2,r,.8,h);
    }
    // Water butts, herb planters, and a little laundry on the warmer roofs.
    const tx=x+w*.28,tz=z-d*.26;
    c.batch.add(taperedGeo,tx,h+.75,tz,.75,1.5,.75,'#8a9c8b');
    c.batch.add(torusGeo,tx,h+1.3,tz,.73,.73,.73,'#6d8273',Math.PI/2);
    this.solid(c,tx,h+.75,tz,1.4,1.5,1.4,{climbable:false});
    for(let j=0;j<3;j++)this.pot(c,x-w*.3+j*1.4,z+d*.31,r,.6,h);
    if(r()>.45){
      const lz=z+d*.16;
      c.batch.beam([x-3,h+1.8,lz],[x+3,h+1.8,lz],.025,'#9b9479');
      for(const s of [-1,1])c.batch.box(x+s*3,h+.9,lz,.07,1.8,.07,'#a29475');
      for(let j=0;j<4;j++)c.batch.box(x-2+j*1.25,h+1.28,lz,.85,1.02,.035,['#e9dfc3','#b7c7bc','#d5af94','#e4d6ad'][j],.06);
    }
  }

  steppedRoof(c,b,r) {
    const w=b.w*.64,d=b.d*.65,h=2.8+r()*1.5,x=b.x-b.w*.12,z=b.z-b.d*.1;
    c.batch.box(x,b.h+h/2,z,w,h,d,b.wall);
    this.solid(c,x,b.h+h/2,z,w,h,d,{buildingId:b.id,building:b});
    c.batch.box(x,b.h+h,z,w+.35,.25,d+.35,'#e4dac0');
    c.batch.box(x,b.h+h+.15,z,w-.3,.12,d-.3,'#aeb69b');
    for(const s of [-1,1]){
      c.batch.box(x+s*w/2,b.h+1.5,z,.12,1.5,1.5,'#ece2c7');
      c.batch.box(x+s*(w/2+.08),b.h+1.5,z,.05,1.25,1.25,'#71897d');
    }
    for(let j=0;j<3;j++)this.pot(c,b.x+b.w*.32,b.z-d/2+j*1.7,r,.7,b.h);
    b.upper = {x,z,w,d,h:b.h+h};
  }

  crate(c,x,y,z,size){
    this.solid(c,x,y,z,size,size,size,{climbable:false});
    c.batch.box(x,y,z,size,size,size,'#b99b70');
    for(const s of [-1,1]){
      c.batch.box(x+s*size*.42,y,z+size*.51,size*.1,size,.055,'#d0b18a');
      c.batch.box(x,y+s*size*.42,z+size*.51,size,size*.1,.055,'#d0b18a');
      c.batch.box(x+size*.51,y,z+s*size*.42,.055,size,size*.1,'#d0b18a');
    }
    c.batch.add(boxGeo,x,y,z+size*.53,size*.1,size*1.1,.055,'#c9aa80',0,0,-.75);
  }

  pot(c,x,z,r,scale=1,y=0){
    c.batch.add(potGeo,x,y+.35*scale,z,.46*scale,.7*scale,.46*scale,'#ba8b68');
    c.batch.add(cylinderGeo,x,y+.69*scale,z,.48*scale,.11*scale,.48*scale,'#caa17d');
    c.batch.ball(x,y+1.02*scale,z,.55*scale,.55*scale,.55*scale,leaves[Math.floor(r()*leaves.length)]);
    if(r()>.5)c.batch.ball(x+.15*scale,y+1.4*scale,z,.16*scale,.13*scale,.16*scale,flowers[Math.floor(r()*flowers.length)]);
  }

  tree(c,x,z,r,scale=1,y=0){
    const h=(3.4+r()*2)*scale, color=leaves[Math.floor(r()*leaves.length)];
    c.batch.add(taperedGeo,x,y+h*.43,z,.27*scale,h*.86,.27*scale,'#9b8965');
    if(r()>.82){
      for(let j=0;j<3;j++)c.batch.add(coneGeo,x,y+h*.6+j*h*.23,z,(1.5-j*.28)*scale,h*.65,(1.5-j*.28)*scale,color);
    }else{
      c.batch.beam([x,y+h*.5,z],[x+.8*scale,y+h*.88,z+.3*scale],.13*scale,'#9b8965');
      c.batch.ball(x,y+h,z,2.15*scale,2.1*scale,1.95*scale,color,true);
      c.batch.ball(x-1.15*scale,y+h*.83,z+.3*scale,1.45*scale,1.55*scale,1.5*scale,color);
      c.batch.ball(x+.95*scale,y+h*1.07,z-.45*scale,1.45*scale,1.6*scale,1.45*scale,leaves[(leaves.indexOf(color)+1)%leaves.length]);
    }
    if(y===0)this.solid(c,x,h*.4,z,.5*scale,h*.8,.5*scale,{climbable:false});
  }

  bench(c,x,z,angle=0,y=0){
    const b=c.batch,co=Math.cos(angle),si=Math.sin(angle);
    const at=(u,v)=>[x+u*co+v*si,z-u*si+v*co];
    for(let j=0;j<4;j++){const p=at(0,(j-1.5)*.18);b.box(p[0],y+.67,p[1],2.6,.12,.15,'#b49b73',angle);}
    for(const s of [-1,1]){
      const p=at(s*1.02,0);b.box(p[0],y+.34,p[1],.13,.65,.65,'#73816a',angle);
      b.box(p[0],y+.95,p[1]+.3,.12,1.1,.12,'#73816a',angle);
    }
    for(let j=0;j<3;j++){const p=at(0,.32);b.box(p[0],y+.9+j*.19,p[1],2.6,.13,.1,'#b49b73',angle);}
    this.solid(c,x,y+.64,z,Math.abs(co)*2.6+Math.abs(si)*.75,.18,Math.abs(si)*2.6+Math.abs(co)*.75,{climbable:false});
  }

  lamp(c,x,z){
    c.batch.add(taperedGeo,x,1.7,z,.11,3.4,.11,'#667b63');
    c.batch.cyl(x,.15,z,.25,.3,'#78866b');
    c.batch.box(x,3.5,z,.46,.65,.46,'#eee0ae');
    c.batch.add(coneGeo,x,3.94,z,.43,.36,.43,'#657b62');
    for(const sx of [-1,1])for(const sz of [-1,1])c.batch.box(x+sx*.23,3.5,z+sz*.23,.045,.7,.045,'#667b63');
  }

  bunting(c,x1,z1,x2,z2,y){
    for(const [x,z] of [[x1,z1],[x2,z2]]){c.batch.add(taperedGeo,x,y/2,z,.09,y,.09,'#a09270');c.batch.ball(x,y+.08,z,.13,.13,.13,'#b4a37d');}
    let prev=[x1,y,z1];
    for(let j=1;j<=14;j++){
      const t=j/14,x=x1+(x2-x1)*t,z=z1+(z2-z1)*t,yy=y-Math.sin(t*Math.PI)*1.2;
      c.batch.beam(prev,[x,yy,z],.024,'#a39778');prev=[x,yy,z];
      if(j%2===0){
        const p=[x,yy-.04,z,x+.52,yy-.08,z,x+.22,yy-.75,z];
        for(const reverse of [false,true]){
          const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(reverse?[...p.slice(6,9),...p.slice(3,6),...p.slice(0,3)]:p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(new Float32Array(9),3));g.computeVertexNormals();
          c.batch.add(g,0,0,0,1,1,1,['#c88f6e','#e1c780','#91a991','#c5b2a0'][j/2%4]);g.dispose();
        }
      }
    }
  }

  makePark(c,x,z,r,index){
    const b=c.batch, id=`park:${c.key}:${index}`;
    c.parks.push({id,x,z,r:10,cx:c.cx,cz:c.cz});
    b.box(x,.025,z,24,.1,24,'#8fa66b');
    b.box(x,.085,z,3.2,.08,25,'#c2b79d');
    b.box(x,.086,z,25,.08,3.2,'#c2b79d');
    const px=x+4.5,pz=z-4.3,pr=3.4+r()*1.2;
    b.cyl(px,.09,pz,pr,.14,'#8ebbb0');
    b.cyl(px,.105,pz,pr-.25,.04,'#a1c9ba');
    c.water.push({x:px,z:pz,r:pr});
    for(let j=0;j<18;j++){
      const a=j/18*TAU,xx=px+Math.cos(a)*(pr+.13),zz=pz+Math.sin(a)*(pr+.13);
      b.ball(xx,.21,zz,.52,.28,.45,j%3?'#c5c6a8':'#d7d3b6');
      this.solid(c,xx,.2,zz,.7,.4,.65,{climbable:false});
    }
    for(let j=0;j<5;j++){
      const a=r()*TAU,rr=r()*pr*.75,xx=px+Math.cos(a)*rr,zz=pz+Math.sin(a)*rr;
      b.cyl(xx,.14,zz,.35,.025,'#82a67c');
      if(j%2===0)b.ball(xx,.24,zz,.12,.12,.12,'#e5c4b0');
    }
    // A small arched footbridge over the pond.
    for(let j=0;j<11;j++){
      const t=j/10,zz=pz-pr+.3+t*(pr*2-.6),yy=.22+Math.sin(t*Math.PI)*.42;
      b.box(px,yy,zz,1.6,.15,.58,'#c3ac83');
      this.solid(c,px,yy,zz,1.6,.15,.58,{climbable:false});
    }
    for(const s of [-1,1])for(let j=0;j<4;j++){
      const t=j/3,zz=pz-pr+.4+t*(pr*2-.8),yy=.55+Math.sin(t*Math.PI)*.42;
      b.box(px+s*.8,yy,zz,.08,.75,.08,'#a79570');
    }
    this.tree(c,x-6,z-6,r,1.35);
    this.tree(c,x+7,z+7,r,1.1);
    this.tree(c,x-7,z+6,r,.9);
    this.bench(c,x-4.5,z+2.2,Math.PI/2);
    this.bench(c,x+3,z+7,0);
    this.lamp(c,x-2.3,z+8.5);
    for(let j=0;j<26;j++){
      const fx=x-9+r()*5,fz=z-1+r()*10;
      b.ball(fx,.2,fz,.18,.23,.18,'#86a269');
      b.ball(fx,.42,fz,.14,.12,.14,flowers[Math.floor(r()*flowers.length)]);
    }
    for(let j=0;j<6;j++){
      b.box(x-10+j*1.6,.5,z+11,1.35,.85,.75,'#8fa873');
      this.solid(c,x-10+j*1.6,.43,z+11,1.35,.86,.75,{climbable:false});
    }
  }

  makeSpawn(c,r){
    const b=c.batch;
    b.cyl(0,.045,3,6.5,.1,'#c2b79d');
    b.cyl(0,.105,3,5.8,.025,'#cfc4aa');
    for(let j=0;j<22;j++){
      const a=j/22*TAU;
      b.box(Math.cos(a)*6.1,.13,3+Math.sin(a)*6.1,.65,.035,.38,'#cbc8aa',-a);
    }
    // A tiny dry fountain leaves the center of the square open for paws.
    const fx=-3.8,fz=4.5;
    b.cyl(fx,.25,fz,1.35,.45,'#c4c5a8');
    b.cyl(fx,.49,fz,1.15,.08,'#a8bca6');
    b.add(taperedGeo,fx,.95,fz,.25,1.1,.25,'#c9c9ad');
    b.cyl(fx,1.48,fz,.7,.2,'#d7d3b6');
    b.ball(fx,1.67,fz,.18,.2,.18,'#c1c5a5');
    this.solid(c,fx,.4,fz,2.4,.8,2.4,{climbable:false});
    this.bench(c,3.8,6.5,-.4);
    this.pot(c,4.5,1,r,1);
    this.tree(c,-7.5,-4.5,r,.9);
    this.bunting(c,-12,-6,12,-6,6.2);
    for(let j=0;j<8;j++){
      const a=r()*TAU,rr=7+r()*2;
      b.ball(Math.cos(a)*rr,.16,3+Math.sin(a)*rr,.2,.18,.2,'#91ab70');
      b.ball(Math.cos(a)*rr,.34,3+Math.sin(a)*rr,.12,.12,.12,flowers[j%flowers.length]);
    }
  }

  supportHeight(x,z,referenceY,includeRoofs=true){
    let height=0;
    for(const s of this.colliders){
      if(x<s.minX-.12||x>s.maxX+.12||z<s.minZ-.12||z>s.maxZ+.12)continue;
      if(s.maxY<=referenceY+.55&&s.maxY>height)height=s.maxY;
    }
    if(includeRoofs)for(const b of this.buildings){
      const h=this.roofHeight(b,x,z);
      if(h<=referenceY+.65&&h>height)height=h;
      if(b.upper){const u=b.upper;if(Math.abs(x-u.x)<u.w/2&&Math.abs(z-u.z)<u.d/2&&u.h<=referenceY+.55&&u.h>height)height=u.h;}
    }
    return height;
  }

  nearbyWall(position, maxDistance=.95){
    let best=null,bestD=maxDistance;
    for(const s of this.colliders){
      if(!s.climbable||s.maxY<=position.y+.02||s.minY>position.y+1.1)continue;
      const qx=Math.max(s.minX,Math.min(s.maxX,position.x)),qz=Math.max(s.minZ,Math.min(s.maxZ,position.z));
      let dx=position.x-qx,dz=position.z-qz,dist=Math.hypot(dx,dz);
      if(dist<.001){
        const faces=[{d:position.x-s.minX,nx:-1,nz:0},{d:s.maxX-position.x,nx:1,nz:0},{d:position.z-s.minZ,nx:0,nz:-1},{d:s.maxZ-position.z,nx:0,nz:1}];
        faces.sort((a,b)=>a.d-b.d);dx=faces[0].nx;dz=faces[0].nz;dist=0;
      }else{dx/=dist;dz/=dist;}
      if(dist<bestD){bestD=dist;best={solid:s,nx:dx,nz:dz,distance:dist,qx,qz};}
    }
    return best;
  }

  inWater(x,z){return this.water.find(w=>(x-w.x)**2+(z-w.z)**2<w.r*w.r);}
}
