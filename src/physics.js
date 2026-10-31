import * as THREE from 'three';

// All distances are metres. The cat is ~0.5 m tall; adults are 1.62–1.86 m.
export const CAT = Object.freeze({ scale: .34, radius: .16, height: .49, step: .25, gravity: 22, jump: 7.7, sprintJump: 8.25, climb: 6.8, climbHeight: .6 });
const clamp = THREE.MathUtils.clamp;
const EPS = 1e-5;
export const angleDelta = (a, b) => Math.atan2(Math.sin(b - a), Math.cos(b - a));
export const dampAngle = (a, b, rate, dt) => a + angleDelta(a, b) * (1 - Math.exp(-rate * dt));

export function surfaceHeight(s, x, z) {
  if (s.shape === 'cylinder') return Math.hypot(x - s.x, z - s.z) <= s.r ? s.maxY : -Infinity;
  if (s.shape === 'ellipsoid') {
    const q = ((x - s.x) / s.rx) ** 2 + ((z - s.z) / s.rz) ** 2;
    // A generous, stable perch on the upper crown, matching the low-poly leaves.
    return q <= .88 ? s.y + s.ry * Math.sqrt(1 - q) : -Infinity;
  }
  if (s.shape === 'roof') {
    const b = s.building;
    const hw = b.w / 2 + .55, hd = b.d / 2 + .55;
    if (Math.abs(x - b.x) > hw || Math.abs(z - b.z) > hd) return -Infinity;
    if (b.roofType === 0) {
      const u = b.ridgeX ? z - b.z : x - b.x, half = b.ridgeX ? hd : hw;
      return b.h + b.roofRise * Math.max(0, 1 - Math.abs(u) / half);
    }
    if (b.roofType === 1) {
      const u = 1 - Math.abs(x - b.x) / hw, v = 1 - Math.abs(z - b.z) / hd;
      return b.h + b.roofRise * Math.min(1, Math.max(0, Math.min(u, v) / .84));
    }
    return b.h;
  }
  return x >= s.minX && x <= s.maxX && z >= s.minZ && z <= s.maxZ ? s.maxY : -Infinity;
}

// ---- swept-sphere helpers, used by the camera -------------------------------------------------
// Each returns the fraction [0, 1] along the segment at which a sphere of `radius` centred on the
// moving point first touches the solid, or Infinity when the way is clear.
function sweepBox(o, d, s, radius) {
  let tmin = 0, tmax = 1;
  for (const [os, ds, lo, hi] of [[o.x, d.x, s.minX - radius, s.maxX + radius], [o.y, d.y, s.minY - radius, s.maxY + radius], [o.z, d.z, s.minZ - radius, s.maxZ + radius]]) {
    if (Math.abs(ds) < 1e-9) { if (os < lo || os > hi) return Infinity; continue; }
    let a = (lo - os) / ds, b = (hi - os) / ds; if (a > b) { const t = a; a = b; b = t; }
    if (a > tmin) tmin = a; if (b < tmax) tmax = b;
    if (tmin > tmax) return Infinity;
  }
  return tmin;
}
// A vertical cylinder: a circle swept in the ground plane, clipped to its height band.
function sweepCylinder(o, d, s, radius) {
  let t0 = 0, t1 = 1;
  const r = s.r + radius, ox = o.x - s.x, oz = o.z - s.z;
  const a = d.x * d.x + d.z * d.z, b = 2 * (ox * d.x + oz * d.z), c = ox * ox + oz * oz - r * r;
  if (a < 1e-9) { if (c > 0) return Infinity; }
  else {
    const disc = b * b - 4 * a * c; if (disc < 0) return Infinity;
    const sq = Math.sqrt(disc);
    t0 = Math.max(0, (-b - sq) / (2 * a)); t1 = Math.min(1, (-b + sq) / (2 * a));
    if (t0 > t1) return Infinity;
  }
  const lo = s.minY - radius, hi = s.maxY + radius;
  let y0 = 0, y1 = 1;
  if (Math.abs(d.y) < 1e-9) { if (o.y < lo || o.y > hi) return Infinity; }
  else {
    let a2 = (lo - o.y) / d.y, b2 = (hi - o.y) / d.y; if (a2 > b2) { const t = a2; a2 = b2; b2 = t; }
    y0 = Math.max(0, a2); y1 = Math.min(1, b2);
    if (y0 > y1) return Infinity;
  }
  return Math.max(t0, y0);
}
function sweepEllipsoid(o, d, s, radius) {
  const rx = s.rx + radius, ry = s.ry + radius, rz = s.rz + radius;
  const ox = (o.x - s.x) / rx, oy = (o.y - s.y) / ry, oz = (o.z - s.z) / rz;
  const vx = d.x / rx, vy = d.y / ry, vz = d.z / rz;
  const c = ox * ox + oy * oy + oz * oz - 1; if (c <= 0) return 0;
  const a = vx * vx + vy * vy + vz * vz; if (a < 1e-12) return Infinity;
  const b = 2 * (ox * vx + oy * vy + oz * vz), disc = b * b - 4 * a * c; if (disc < 0) return Infinity;
  const t = (-b - Math.sqrt(disc)) / (2 * a);
  return t >= 0 && t <= 1 ? t : Infinity;
}
// Pitched roofs are height fields, not boxes: sample along the line and stop where the line dips
// under the tiles (plus the sphere's own radius).
function sweepRoof(o, d, s, radius, steps = 10) {
  for (let i = 1; i <= steps; i++) {
    const t = i / steps, h = surfaceHeight(s, o.x + d.x * t, o.z + d.z * t);
    if (Number.isFinite(h) && o.y + d.y * t < h + radius) return (i - 1) / steps;
  }
  return Infinity;
}

export class PhysicsWorld {
  constructor(world) { this.world = world; this.stamp = 0; this.seen = new WeakMap(); this.dynamic = []; }
  query(x, z, radius = 1) {
    const index = this.world.spatial;
    const result = [], stamp = ++this.stamp;
    for (const s of this.dynamic) if (Math.abs(s.x - x) < radius + s.r && Math.abs(s.z - z) < radius + s.r) result.push(s);
    if (!index) { result.push(...this.world.colliders); return result; }
    for (let ix = Math.floor((x - radius) / 8); ix <= Math.floor((x + radius) / 8); ix++)
      for (let iz = Math.floor((z - radius) / 8); iz <= Math.floor((z + radius) / 8); iz++) {
        const cell = index.get(ix + ',' + iz); if (!cell) continue;
        for (const s of cell) if (this.seen.get(s) !== stamp) { this.seen.set(s, stamp); result.push(s); }
      }
    return result;
  }
  // Highest walkable surface at (x, z) below `limit`; used when settling after a mantle.
  highest(x, z, limit) {
    let y = Math.min(limit, this.world.groundHeight(x, z));
    for (const s of this.query(x, z, .2)) {
      if (s.walkable === false) continue;
      const h = surfaceHeight(s, x, z);
      if (Number.isFinite(h) && h <= limit && h > y) y = h;
    }
    return y;
  }
  // Sweep a sphere of `radius` from `from` to `to` and report where it first touches something:
  // { t, solid }, with t = 1 when the line is clear. `filter(solid)` skips solids the caller does
  // not care about (foliage, people, low scenery). This is what keeps the camera out of walls,
  // ceilings, carriages and cabins — one cast against every shape, not a special case per room.
  segmentHit(from, to, radius = 0, filter = null) {
    const dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
    const length = Math.hypot(dx, dy, dz);
    if (length < 1e-6) return { t: 1, solid: null };
    let best = 1, solid = null;
    for (const s of this.query((from.x + to.x) / 2, (from.z + to.z) / 2, length / 2 + radius + .5)) {
      if (filter && !filter(s)) continue;
      const t = s.shape === 'cylinder' ? sweepCylinder(from, { x: dx, y: dy, z: dz }, s, radius)
        : s.shape === 'ellipsoid' ? sweepEllipsoid(from, { x: dx, y: dy, z: dz }, s, radius)
          : s.shape === 'roof' ? sweepRoof(from, { x: dx, y: dy, z: dz }, s, radius)
            : sweepBox(from, { x: dx, y: dy, z: dz }, s, radius);
      if (t < best) { best = t; solid = s; if (best <= 0) break; }
    }
    return { t: best, solid };
  }
  // Distance from the given feet height to the nearest solid overhead. The camera reads this to
  // know it is indoors (a low number means a room, a carriage or a cabin, not the open sky).
  headroomAbove(x, z, feetY, radius = .3) {
    let best = Infinity;
    for (const s of this.query(x, z, radius)) {
      if (s.sensor || s.shape === 'roof' || s.shape === 'ellipsoid') continue;
      const gap = s.minY - feetY;
      if (gap <= .45 || gap >= best) continue;
      // Only something the size of a room counts as a ceiling: a table top or an awning above the
      // cat is furniture, not a roof, and must not put the camera into "indoors" mode.
      const wide = s.shape === 'cylinder' ? s.r >= 1.2 : s.maxX - s.minX >= 2.4 && s.maxZ - s.minZ >= 2.4;
      if (!wide) continue;
      // ...and it has to be overhead, not merely in a neighbouring building.
      const over = s.shape === 'cylinder' ? Math.hypot(x - s.x, z - s.z) <= s.r + radius
        : x >= s.minX - radius && x <= s.maxX + radius && z >= s.minZ - radius && z <= s.maxZ + radius;
      if (over) best = gap;
    }
    return best;
  }
  support(x, z, reference, includeRoofs = true) {
    const g = this.world.groundHeight(x, z);
    let best = { y: g <= reference + EPS ? g : 0, solid: null };
    for (const s of this.query(x, z, .2)) {
      if (s.walkable === false || (!includeRoofs && s.shape === 'roof')) continue;
      const y = surfaceHeight(s, x, z);
      if (Number.isFinite(y) && y <= reference + EPS && y > best.y) best = { y, solid: s };
    }
    return best;
  }
  // Circle versus the horizontal cross-section of each solid. Iterating resolves
  // corners without the old axis-by-axis "sticky wall" behaviour.
  resolve(position, radius, height, ignore = null) {
    let contacts = 0;
    for (let pass = 0; pass < 4; pass++) {
      let moved = false;
      for (const s of this.query(position.x, position.z, radius + .1)) {
        if (s === ignore || s.sensor || s.shape === 'roof') continue;
        if (ignore && s.tree && ignore.tree && s.tree === ignore.tree) continue;
        if (position.y + height <= s.minY + .025 || position.y >= s.maxY - .035) continue;
        let dx, dz, distance, targetRadius;
        if (s.shape === 'cylinder' || s.shape === 'ellipsoid') {
          let rx = s.r, rz = s.r;
          if (s.shape === 'ellipsoid') {
            const t = clamp((position.y + height * .45 - s.y) / s.ry, -.98, .98);
            const k = Math.sqrt(1 - t * t); rx = s.rx * k; rz = s.rz * k;
            // The crown is a landing surface, not an invisible wall while perched.
            const top = surfaceHeight(s, position.x, position.z);
            if (Number.isFinite(top) && position.y >= top - .09) continue;
          }
          dx = position.x - s.x; dz = position.z - s.z;
          const normalized = Math.hypot(dx / rx, dz / rz);
          if (normalized >= 1 + radius / Math.min(rx, rz)) continue;
          distance = Math.hypot(dx, dz);
          if (distance < EPS) { dx = 1; dz = 0; distance = 1; }
          targetRadius = Math.min(rx, rz) + radius;
          if (distance >= targetRadius) continue;
        } else {
          const qx = clamp(position.x, s.minX, s.maxX), qz = clamp(position.z, s.minZ, s.maxZ);
          dx = position.x - qx; dz = position.z - qz; distance = Math.hypot(dx, dz);
          if (distance >= radius) continue;
          if (distance < EPS) {
            const faces = [
              { d: position.x - s.minX, x: -1, z: 0 }, { d: s.maxX - position.x, x: 1, z: 0 },
              { d: position.z - s.minZ, x: 0, z: -1 }, { d: s.maxZ - position.z, x: 0, z: 1 }
            ].sort((a, b) => a.d - b.d);
            dx = faces[0].x; dz = faces[0].z; distance = 0; targetRadius = radius + faces[0].d;
          } else targetRadius = radius;
        }
        const push = Math.min(targetRadius - distance + .001, .2);
        position.x += dx / (distance || 1) * push; position.z += dz / (distance || 1) * push;
        contacts++; moved = true;
      }
      if (!moved) break;
    }
    return contacts;
  }
  ceiling(oldFeet, nextFeet, x, z, height, radius) {
    let y = nextFeet;
    for (const s of this.query(x, z, radius)) {
      if (s.shape === 'roof' || s.shape === 'ellipsoid' || s.sensor) continue;
      const h = surfaceHeight(s, x, z);
      if (!Number.isFinite(h) || s.minY <= oldFeet + height - .025) continue;
      if (oldFeet + height <= s.minY + .02 && nextFeet + height >= s.minY) y = Math.min(y, s.minY - height - .01);
    }
    return y;
  }
  // Is there room for a standing cat at (x, z) with its feet at y? Used before a mantle, so a
  // cat climbing an inside wall cannot pop through a ceiling onto the roof.
  headroom(x, z, y, ignore = null) {
    for (const s of this.query(x, z, CAT.radius + .05)) {
      if (s === ignore || s.sensor || s.shape === 'roof' || s.shape === 'ellipsoid') continue;
      if (s.minY >= y + CAT.height - .02 || s.maxY <= y + .06) continue;
      if (s.shape === 'cylinder') { if (Math.hypot(x - s.x, z - s.z) < s.r + CAT.radius * .5) return false; continue; }
      if (x > s.minX - CAT.radius * .5 && x < s.maxX + CAT.radius * .5 && z > s.minZ - CAT.radius * .5 && z < s.maxZ + CAT.radius * .5) return false;
    }
    return true;
  }
  // The nearest thing worth climbing: a cat scrambles up walls, trunks and chimneys, but it steps
  // over kerbs, benches and flower pots, and it does not shin up every crate-sized lamp base it
  // brushes past. Anything shorter than a cat (0.6 m) is scenery, not a wall.
  nearbyWall(position, maxDistance = .52, heading = null, standingOn = null, minRise = CAT.step + .05) {
    let best = null, score = Infinity;
    for (const s of this.query(position.x, position.z, maxDistance + .4)) {
      if (s === standingOn || !s.climbable || s.maxY <= position.y + .015 || s.minY > position.y + CAT.height) continue;
      // Anything the cat can simply step onto is not a climb (but a climb already under way is
      // finished even when only the last paw's height of wall is left).
      if (s.maxY - position.y < minRise) continue;
      // Auto-colliders are every decorative primitive in the town. Only the substantial ones count
      // as walls: a knee-high planter or a sliver of roof trim is scenery, not something to shin up.
      if (s.auto && (s.maxY - s.minY < CAT.climbHeight || Math.min(s.maxX - s.minX, s.maxZ - s.minZ) < .12)) continue;
      let nx, nz, qx, qz, distance;
      if (s.shape === 'cylinder' || s.shape === 'ellipsoid') {
        nx = position.x - s.x; nz = position.z - s.z; distance = Math.hypot(nx, nz) || 1; nx /= distance; nz /= distance;
        let r = s.r;
        if (s.shape === 'ellipsoid') { const t = clamp((position.y - s.y) / s.ry, -.95, .95); r = Math.min(s.rx, s.rz) * Math.sqrt(1 - t * t); }
        qx = s.x + nx * r; qz = s.z + nz * r; distance = Math.max(0, Math.hypot(position.x - s.x, position.z - s.z) - r);
      } else {
        qx = clamp(position.x, s.minX, s.maxX); qz = clamp(position.z, s.minZ, s.maxZ);
        nx = position.x - qx; nz = position.z - qz; distance = Math.hypot(nx, nz);
        if (distance < EPS) {
          const faces = [{ d: position.x - s.minX, x: -1, z: 0 }, { d: s.maxX - position.x, x: 1, z: 0 }, { d: position.z - s.minZ, x: 0, z: -1 }, { d: s.maxZ - position.z, x: 0, z: 1 }].sort((a, b) => a.d - b.d);
          nx = faces[0].x; nz = faces[0].z; distance = 0;
        } else { nx /= distance; nz /= distance; }
      }
      if (distance > maxDistance) continue;
      const facing = heading == null ? 0 : Math.max(0, -(nx * Math.sin(heading) + nz * Math.cos(heading)));
      const value = distance - facing * .12 - (s.kind === 'tree' ? .04 : 0);
      if (value < score) { score = value; best = { solid: s, nx, nz, qx, qz, distance }; }
    }
    return best;
  }
}

// Where a cat that has climbed `wall` ends up standing: on top, a paw's width back from the edge,
// or centred on a thin perch (a lamp post, a pot, a tree crown) rather than hopped over it.
function landingSpot(pos, wall, s, physics) {
  const d = Math.hypot(pos.x - s.x, pos.z - s.z) || 1;
  const nx = s.shape === 'box' ? wall.nx : (pos.x - s.x) / d;
  const nz = s.shape === 'box' ? wall.nz : (pos.z - s.z) / d;
  const narrow = s.shape !== 'box' && Math.min(s.rx ?? s.r, s.rz ?? s.r) < .6;
  const x = narrow ? s.x : pos.x - nx * (CAT.radius + .24), z = narrow ? s.z : pos.z - nz * (CAT.radius + .24);
  return { x, z, nx, nz, narrow, y: Math.max(physics.highest(x, z, s.maxY + 1.6), s.minY) + .025 };
}

// Is there somewhere to stand above this low wall? Checked before a climb starts, so the cat does
// not shin up a knee-high lip that ends under a table and drop off it again. Real walls (anything
// much taller than the cat) are taken at face value — the mantle at the top decides, as it always
// has, and a wall built in storeys still climbs all the way up.
function perchAbove(p, wall, physics) {
  const s = wall.solid;
  if (s.maxY - p.pos.y > 1.4) return true;
  const spot = landingSpot(p.pos, wall, s, physics);
  if (physics.headroom(spot.x, spot.z, spot.y, s)) return true;
  // Perhaps it is just the bottom of something taller: then the climb carries on upwards.
  for (const o of physics.query(spot.x, spot.z, .3)) {
    if (o === s || !o.climbable || o.shape === 'roof' || o.shape === 'ellipsoid') continue;
    if (o.minY <= s.maxY + .35 && o.maxY > s.maxY + .5) return true;
  }
  return false;
}

export function createPlayer(saved) {
  return {
    pos: new THREE.Vector3(saved?.x ?? 1.1, saved?.y ?? 0, saved?.z ?? 7.1),
    vx: 0, vz: 0, vy: 0, heading: saved?.heading ?? .55, speed: 0,
    grounded: true, coyote: .14, jumpBuffer: 0, jumpCut: false, climbCooldown: 0,
    climbing: null, mantling: 0, landImpact: 0, turnRate: 0, accel: 0, runBlend: 0,
    moveAmount: 0, airTime: 0, support: null, distance: 0
  };
}

export function stepPlayer(p, input, physics, dt, events = {}) {
  p.climbCooldown = Math.max(0, p.climbCooldown - dt);
  p.jumpBuffer = Math.max(0, p.jumpBuffer - dt);
  p.mantling = Math.max(0, p.mantling - dt);
  p.landImpact *= Math.exp(-9 * dt);
  let ix = input.x, iz = input.y;
  // A fresh mantle gets a beat to settle before the stick is read again, so the cat does not run straight off a chimney.
  if (p.mantling > 0) ix = iz = 0;
  const magnitude = Math.hypot(ix, iz), amount = Math.min(1, magnitude);
  if (magnitude > 1e-4) { ix /= magnitude; iz /= magnitude; } else ix = iz = 0;
  p.moveAmount = amount;
  const wall = physics.nearbyWall(p.pos, .5, p.heading, p.grounded ? p.support : null, p.climbing ? 0 : CAT.step + .05);
  // No climbing out of a lift car: the walls of the shaft are not for cats.
  const wantsClimb = !(p.support?.lift) && (input.climb || (input.autoClimb && amount > .3 && !p.grounded && p.airTime > .09 && p.vy < 3.2));
  if (wantsClimb && wall && p.climbCooldown === 0 && !input.resting) {
    const s = wall.solid;
    // Before a paw leaves the ground: is there anywhere to stand at the top? A wall that leads
    // under a floor, or a lid of scenery with no room above it, is not a climb — it is a bump.
    if (!p.climbing && !perchAbove(p, wall, physics)) { p.climbCooldown = .25; return { wall: null, climbed: false }; }
    p.climbing = wall; p.grounded = false; p.vy = 0; p.vx = p.vz = 0; p.speed = CAT.climb;
    p.heading = dampAngle(p.heading, Math.atan2(-wall.nx, -wall.nz), 20, dt);
    const climbTo = physics.ceiling(p.pos.y, p.pos.y + CAT.climb * dt, p.pos.x, p.pos.z, CAT.height, CAT.radius);
    if (climbTo < p.pos.y + CAT.climb * dt - 1e-6) {
      // Head against a ceiling (a floor above, a bridge deck): hang for a beat, then drop.
      p.pos.y = Math.max(p.pos.y, climbTo); p.climbing = null; p.climbCooldown = .6; p.vy = -.5; p.speed = 0;
      return { wall, climbed: false };
    }
    p.pos.y += CAT.climb * dt;
    if (s.shape === 'ellipsoid' || s.tree) {
      // Follow the bark, then the outside of the crown instead of clipping through it.
      const crown = s.shape === 'ellipsoid' ? s : s.tree?.canopies?.find(c => p.pos.y > c.y - c.ry * .8);
      if (crown) {
        const t = clamp((p.pos.y - crown.y) / crown.ry, -.96, .98);
        const r = Math.min(crown.rx, crown.rz) * Math.sqrt(1 - t * t) + CAT.radius + .035;
        const d = Math.hypot(p.pos.x - crown.x, p.pos.z - crown.z) || 1;
        const nx = (p.pos.x - crown.x) / d, nz = (p.pos.z - crown.z) / d;
        p.pos.x = crown.x + nx * r; p.pos.z = crown.z + nz * r;
        p.heading = Math.atan2(-nx, -nz);
      } else if (s.shape !== 'ellipsoid') {
        p.pos.x += (wall.qx + wall.nx * (CAT.radius + .025) - p.pos.x) * (1 - Math.exp(-24 * dt));
        p.pos.z += (wall.qz + wall.nz * (CAT.radius + .025) - p.pos.z) * (1 - Math.exp(-24 * dt));
      }
    } else {
      p.pos.x += (wall.qx + wall.nx * (CAT.radius + .025) - p.pos.x) * (1 - Math.exp(-24 * dt));
      p.pos.z += (wall.qz + wall.nz * (CAT.radius + .025) - p.pos.z) * (1 - Math.exp(-24 * dt));
    }
    if (p.pos.y >= s.maxY - .035) {
      const spot = landingSpot(p.pos, wall, s, physics);
      if (!physics.headroom(spot.x, spot.z, spot.y, s)) {
        // Nothing to stand on up there (an inside wall under a floor): let go.
        p.climbing = null; p.climbCooldown = .6; p.vy = -.5; p.speed = 0; p.pos.y = s.maxY - .05;
        return { wall, climbed: false };
      }
      p.pos.x = spot.x; p.pos.z = spot.z; p.pos.y = spot.y;
      p.vy = spot.narrow ? .6 : 1.2; p.vx = spot.narrow ? 0 : -spot.nx * 1.1; p.vz = spot.narrow ? 0 : -spot.nz * 1.1;
      p.climbing = null; p.climbCooldown = .38; p.mantling = .3; p.jumpBuffer = 0;
      events.mantle?.(s);
    }
    return { wall, climbed: true };
  }
  if (p.climbing && !wantsClimb) { p.vy = .4; p.climbCooldown = .18; }
  p.climbing = null;
  const sprint = !!input.sprint;
  p.runBlend += ((sprint && amount > .05 ? 1 : 0) - p.runBlend) * (1 - Math.exp(-9 * dt));
  // Small stick movements are useful, not a slow-motion penalty.
  const analog = amount > .02 ? .32 + .68 * Math.pow(amount, .8) : 0;
  let speed = (input.baseSpeed + (input.sprintSpeed - input.baseSpeed) * p.runBlend) * analog;
  if (input.resting) speed = 0;
  if (physics.world.inWater(p.pos.x, p.pos.z) && p.pos.y < .2) speed *= .7;
  const co = Math.cos(input.yaw), si = Math.sin(input.yaw);
  const tx = (ix * co + iz * si) * speed, tz = (-ix * si + iz * co) * speed;
  const oldSpeed = Math.hypot(p.vx, p.vz);
  const response = p.grounded ? (amount > .02 ? 24 : 30) : 10;
  const blend = 1 - Math.exp(-response * dt);
  p.vx += (tx - p.vx) * blend; p.vz += (tz - p.vz) * blend;
  p.accel = clamp((Math.hypot(p.vx, p.vz) - oldSpeed) / dt, -40, 40);
  p.coyote = p.grounded ? .14 : Math.max(0, p.coyote - dt);
  if (input.jump) { p.jumpBuffer = .18; input.jump = false; }
  if (p.jumpBuffer > 0 && p.coyote > 0 && !input.resting) {
    p.vy = sprint ? CAT.sprintJump : CAT.jump; p.grounded = false; p.coyote = 0; p.jumpBuffer = 0; p.jumpCut = false;
    events.jump?.();
  }
  if (!input.jumpHeld && p.vy > 4 && !p.jumpCut) { p.vy *= .86; p.jumpCut = true; }
  const old = p.pos.clone();
  const travel = Math.hypot(p.vx, p.vz) * dt;
  const substeps = Math.max(1, Math.ceil(travel / (CAT.radius * .7)));
  for (let i = 0; i < substeps; i++) {
    const nx = p.pos.x + p.vx * dt / substeps, nz = p.pos.z + p.vz * dt / substeps;
    let stepY = p.pos.y;
    if (p.grounded) {
      // Look at the leading edge of the body too, so a low step is climbed before the body bumps it.
      const len = Math.hypot(p.vx, p.vz) || 1, ox = p.vx / len * CAT.radius, oz = p.vz / len * CAT.radius;
      const a1 = physics.support(nx, nz, old.y + CAT.step), a2 = physics.support(nx + ox, nz + oz, old.y + CAT.step);
      const ahead = a2.y > a1.y && a2.y <= old.y + CAT.step ? a2 : a1;
      if (ahead.y > p.pos.y && ahead.y <= old.y + CAT.step) stepY = ahead.y;
    }
    p.pos.set(nx, stepY, nz);
    let contacts = physics.resolve(p.pos, CAT.radius, CAT.height);
    // Cats do not walk into ponds: the water's edge acts like a wall from the outside.
    // (A cat that lands in the water after a jump can still wade back out.)
    if (p.grounded && p.pos.y < .2 && !physics.world.inWater(old.x, old.z)) {
      const w = physics.world.inWater(p.pos.x, p.pos.z);
      if (w) {
        const dx = p.pos.x - w.x, dz = p.pos.z - w.z, d = Math.hypot(dx, dz) || 1e-6, rr = w.r + CAT.radius * .5;
        p.pos.x = w.x + dx / d * rr; p.pos.z = w.z + dz / d * rr;
        const into = p.vx * (dx / d) + p.vz * (dz / d); if (into < 0) { p.vx -= into * dx / d; p.vz -= into * dz / d; }
        contacts = (contacts || 0) + 1;
      }
    }
    if (contacts) {
      // Remove only the velocity going into the surface; sliding stays fluid.
      const dx = p.pos.x - nx, dz = p.pos.z - nz, len = Math.hypot(dx, dz);
      if (len > EPS) { const nxn = dx / len, nzn = dz / len, into = p.vx * nxn + p.vz * nzn; if (into < 0) { p.vx -= into * nxn; p.vz -= into * nzn; } }
    }
  }
  const beforeY = p.pos.y;
  p.vy = Math.max(-28, p.vy - CAT.gravity * dt);
  let nextY = beforeY + p.vy * dt;
  if (p.vy > 0) {
    const capped = physics.ceiling(beforeY, nextY, p.pos.x, p.pos.z, CAT.height, CAT.radius);
    if (capped < nextY) { nextY = capped; p.vy = 0; }
  }
  const wasGrounded = p.grounded; p.grounded = false;
  let ground = physics.support(p.pos.x, p.pos.z, beforeY + (wasGrounded ? CAT.step : .025));
  if (wasGrounded && Math.hypot(p.vx, p.vz) > .3) {
    // Paws reach a little ahead of the body's centre: a stair tread or ledge under the front paws still counts.
    const len = Math.hypot(p.vx, p.vz) || 1, lead = physics.support(p.pos.x + p.vx / len * CAT.radius, p.pos.z + p.vz / len * CAT.radius, beforeY + .01);
    if (lead.y > ground.y && lead.y <= beforeY + .01) ground = lead;
  }
  const stepDown = wasGrounded && p.vy <= 0 && p.vy > -1.2 && ground.y < beforeY && beforeY - ground.y <= CAT.step * .8;
  if ((p.vy <= 0 && nextY <= ground.y + .002 && beforeY >= ground.y - (wasGrounded ? CAT.step : .04)) || stepDown) {
    if (ground.solid?.bouncy && p.vy < -2.5) {
      // Trampolines: the harder the landing, the higher the bounce (holding jump adds a little more).
      p.pos.y = ground.y + .01; p.vy = Math.min(ground.solid.bouncy, Math.max(7, -p.vy * .92 + (input.jumpHeld ? 1.5 : 0))); p.grounded = false; p.support = null; p.airTime = 0; p.jumpCut = true;
      events.bounce?.(ground.solid); p.speed = Math.hypot(p.vx, p.vz); return { wall, climbed: false };
    }
    p.pos.y = ground.y; p.vy = 0; p.grounded = true; p.support = ground.solid; p.jumpCut = false; p.airTime = 0;
    if (!wasGrounded) { p.landImpact = clamp(Math.abs(ground.y - nextY) * 2 + .25, .2, 1); events.land?.(ground.solid); }
  } else { p.pos.y = nextY; p.support = null; p.airTime += dt; }
  // A cat never ends up inside a pitched roof: mantling onto the eave of a gable or hip roof puts the
  // body just under the slope, so lift it onto the tiles.
  for (const s of physics.query(p.pos.x, p.pos.z, .2)) {
    if (s.shape !== 'roof') continue;
    const h = surfaceHeight(s, p.pos.x, p.pos.z);
    if (Number.isFinite(h) && p.pos.y < h - .005 && p.pos.y > s.minY - .4) { p.pos.y = h; if (p.vy < 0) p.vy = 0; p.grounded = true; p.support = s; p.airTime = 0; }
  }
  p.speed = Math.hypot(p.vx, p.vz); p.distance += p.speed * dt;
  if (p.speed > .12) {
    const target = Math.atan2(p.vx, p.vz), delta = angleDelta(p.heading, target);
    p.heading = dampAngle(p.heading, target, 19, dt);
    p.turnRate += (clamp(delta * 12, -7, 7) - p.turnRate) * (1 - Math.exp(-12 * dt));
  } else p.turnRate *= Math.exp(-12 * dt);
  if (!Number.isFinite(p.pos.x + p.pos.y + p.pos.z) || p.pos.y < -8) { p.pos.set(1.1, 1, 7.1); p.vx = p.vz = p.vy = 0; }
  return { wall, climbed: false };
}
