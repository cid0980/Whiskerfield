import * as THREE from 'three';

// All distances are metres. The cat is ~0.5 m tall; adults are 1.62–1.86 m.
export const CAT = Object.freeze({ scale: .34, radius: .16, height: .49, step: .25, gravity: 22, jump: 7.7, sprintJump: 8.25, climb: 6.8 });
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
    for (let pass = 0; pass < 3; pass++) {
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
        const push = targetRadius - distance + .001;
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
  nearbyWall(position, maxDistance = .52, heading = null, standingOn = null) {
    let best = null, score = Infinity;
    for (const s of this.query(position.x, position.z, maxDistance + .4)) {
      if (s === standingOn || !s.climbable || s.maxY <= position.y + .015 || s.minY > position.y + CAT.height) continue;
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
  const wall = physics.nearbyWall(p.pos, .5, p.heading, p.grounded ? p.support : null);
  const wantsClimb = input.climb || (input.autoClimb && amount > .3 && !p.grounded && p.airTime > .09 && p.vy < 3.2);
  if (wantsClimb && wall && p.climbCooldown === 0 && !input.resting) {
    const s = wall.solid;
    p.climbing = wall; p.grounded = false; p.vy = 0; p.vx = p.vz = 0; p.speed = CAT.climb;
    p.heading = dampAngle(p.heading, Math.atan2(-wall.nx, -wall.nz), 20, dt);
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
      const nx = s.shape === 'box' ? wall.nx : (p.pos.x - s.x) / (Math.hypot(p.pos.x - s.x, p.pos.z - s.z) || 1);
      const nz = s.shape === 'box' ? wall.nz : (p.pos.z - s.z) / (Math.hypot(p.pos.x - s.x, p.pos.z - s.z) || 1);
      // Thin perches (lamp posts, pots, tree crowns) get the cat centred on top instead of hopped over.
      const narrow = s.shape !== 'box' && Math.min(s.rx ?? s.r, s.rz ?? s.r) < .6;
      if (narrow) { p.pos.x = s.x; p.pos.z = s.z; } else { p.pos.x -= nx * (CAT.radius + .24); p.pos.z -= nz * (CAT.radius + .24); }
      p.pos.y = Math.max(physics.highest(p.pos.x, p.pos.z, s.maxY + 1.6), s.minY) + .025;
      p.vy = narrow ? .6 : 1.2; p.vx = narrow ? 0 : -nx * 1.1; p.vz = narrow ? 0 : -nz * 1.1;
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
  p.speed = Math.hypot(p.vx, p.vz); p.distance += p.speed * dt;
  if (p.speed > .12) {
    const target = Math.atan2(p.vx, p.vz), delta = angleDelta(p.heading, target);
    p.heading = dampAngle(p.heading, target, 19, dt);
    p.turnRate += (clamp(delta * 12, -7, 7) - p.turnRate) * (1 - Math.exp(-12 * dt));
  } else p.turnRate *= Math.exp(-12 * dt);
  if (!Number.isFinite(p.pos.x + p.pos.y + p.pos.z) || p.pos.y < -8) { p.pos.set(1.1, 1, 7.1); p.vx = p.vz = p.vy = 0; }
  return { wall, climbed: false };
}
