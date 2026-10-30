import * as THREE from 'three';
import { CHUNK, NAV, Batch, random, hashString } from './world.js';

// Neighbours stroll the pavement network with no fixed loops: every junction is a fresh
// random choice, and every one of them has a soft spot for a passing cat.
const GREETINGS = [
  'Oh! Hello there, sweetheart.', 'Well, aren’t you a handsome one.', 'Pspsps… come here, little one.',
  'Who’s a good kitty? You are.', 'Look at those whiskers!', 'Hello, little neighbour.',
  'You look like you own this street.', 'Aw. Soft as a cloud.', 'Off on an adventure, are we?',
  'Good afternoon, your majesty.', 'Hi, puss. Lovely day for a wander.', 'Such a sweet face.',
  'There’s my favourite cat.', 'Careful on those rooftops, you.', 'Hello, fluff. Chin scratches?'
];
const CHAT = [
  'Lovely afternoon, isn’t it?', 'The bakery had cinnamon buns today.', 'Did you see that cat on the roof?',
  'I should water the balcony plants.', 'Not a cloud in the sky.', 'Have you tried the new tea shop?',
  'The bus was late again. Of course.', 'My tomatoes are finally coming in.', 'Mrs. Finch says hello.',
  'We should sit by the pond later.', 'Someone left bunting up from the fete.', 'I could nap in this sun.'
];
const IDLE = ['Hm, where did I put my keys?', 'What a pretty door.', 'Oh, that’s a nice bench.', 'I’ll just rest a moment.'];
const SKIN = ['#e9c4a6', '#d9a98a', '#c48b67', '#8d5a3b', '#f0d2b8', '#a46f4d', '#6b4529'];
const SHIRT = ['#c9d8c6', '#d9b8a8', '#a7b7c7', '#e6d6b0', '#b48c9c', '#8ea48c', '#d3c7e0', '#c3b59b', '#9fb8b4', '#e2c3a0'];
const TROUSERS = ['#5c6670', '#7b6f5f', '#4f5a52', '#8a8072', '#44505a', '#6f6a80', '#9b9179'];
const HAIR = ['#2e2420', '#5a3e2c', '#8a6a46', '#c7a16b', '#d9d2c4', '#3b3b40', '#b4553a'];
const OFFSETS = NAV.offsets;

const nearlyPath = v => Math.abs(((v % CHUNK) + CHUNK) % CHUNK) < .01;
function nextOffset(u, dir) {
  const base = Math.floor(u / CHUNK) * CHUNK, local = u - base;
  if (dir > 0) { for (const o of OFFSETS) if (o > local + .01) return base + o; return base + CHUNK + OFFSETS[0]; }
  for (let i = OFFSETS.length - 1; i >= 0; i--) if (OFFSETS[i] < local - .01) return base + OFFSETS[i];
  return base - CHUNK + OFFSETS[OFFSETS.length - 1];
}
// Footpaths stop at the pavement; only pavements cross the road at junctions.
function allowed(lineCoord, u1, u2) {
  if (!nearlyPath(lineCoord)) return true;
  const a = Math.min(u1, u2), b = Math.max(u1, u2), la = ((a % CHUNK) + CHUNK) % CHUNK;
  return !(Math.abs(la - NAV.pavement[0]) < .01 && Math.abs(b - a - (NAV.pavement[1] - NAV.pavement[0])) < .01);
}
function snapNode(x, z) {
  const snap = v => { const base = Math.floor(v / CHUNK) * CHUNK, local = v - base; let best = OFFSETS[0], d = Infinity; for (const o of [...OFFSETS, CHUNK]) if (Math.abs(o - local) < d) { d = Math.abs(o - local); best = o; } return base + best; };
  return { x: snap(x), z: snap(z) };
}

class Person {
  constructor(people, variant) {
    this.people = people; this.variant = variant; this.H = variant.height;
    this.group = new THREE.Group(); this.body = new THREE.Group(); this.group.add(this.body);
    const legH = this.H * .47, torsoH = this.H * .31;
    this.torso = new THREE.Mesh(variant.torso, people.material); this.torso.position.y = legH; this.torso.castShadow = true; this.body.add(this.torso);
    this.legs = []; this.arms = [];
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(variant.leg, people.material); leg.position.set(s * .09, legH, 0); leg.castShadow = true; this.body.add(leg); this.legs.push(leg);
      const arm = new THREE.Mesh(variant.arm, people.material); arm.position.set(s * .22, torsoH - .03, 0); arm.rotation.z = -s * .08; this.torso.add(arm); this.arms.push(arm);
    }
    this.heart = new THREE.Sprite(people.heartMaterial.clone()); this.heart.scale.set(.26, .26, 1); this.heart.visible = false; this.group.add(this.heart);
    this.solid = { shape: 'cylinder', x: 0, z: 0, r: .3, minX: 0, maxX: 0, minZ: 0, maxZ: 0, minY: 0, maxY: this.H, climbable: false, walkable: false, person: this };
    this.reset(0, 0);
  }
  reset(x, z) {
    this.x = x; this.z = z; this.y = 0; this.heading = Math.random() * Math.PI * 2; this.bodyTilt = 0; this.reach = 0;
    this.axis = 'x'; this.dir = 1; this.state = 'walk'; this.timer = 0; this.cooldown = Math.random() * 4; this.phase = Math.random() * 7;
    this.baseSpeed = 1.05 + Math.random() * .5; this.speed = 0; this.line = ''; this.lineTimer = 0; this.heartTime = 0; this.greeted = 0;
    this.target = null; this.chooseNext(true);
  }
  chooseNext(any = false) {
    const node = snapNode(this.x, this.z);
    this.x = node.x; this.z = node.z;
    const options = [];
    for (const axis of ['x', 'z']) for (const dir of [-1, 1]) {
      const u = axis === 'x' ? node.x : node.z, line = axis === 'x' ? node.z : node.x, next = nextOffset(u, dir);
      if (!allowed(line, u, next)) continue;
      const reverse = axis === this.axis && dir === -this.dir;
      options.push({ axis, dir, next, weight: reverse ? (any ? 1 : .08) : axis === this.axis ? 1.5 : 1 });
    }
    if (!options.length) return;
    let total = options.reduce((a, o) => a + o.weight, 0), pick = Math.random() * total, chosen = options[0];
    for (const o of options) { pick -= o.weight; if (pick <= 0) { chosen = o; break; } }
    this.axis = chosen.axis; this.dir = chosen.dir;
    this.target = chosen.axis === 'x' ? { x: chosen.next, z: node.z } : { x: node.x, z: chosen.next };
    this.baseSpeed = Math.min(1.6, Math.max(.9, this.baseSpeed + (Math.random() - .5) * .25));
  }
  say(text, duration = 3.2) { this.line = text; this.lineTimer = duration; }
  update(dt, cat, catSpeed, others) {
    const people = this.people;
    this.timer = Math.max(0, this.timer - dt); this.cooldown = Math.max(0, this.cooldown - dt);
    this.lineTimer -= dt; if (this.lineTimer <= 0) this.line = '';
    const dx = cat.x - this.x, dz = cat.z - this.z, catDistance = Math.hypot(dx, dz), catLevel = Math.abs(cat.y - this.y) < 1.6;
    // A cat strolling up gets a fuss; a cat sprinting past gets a startled laugh.
    if (people.interactive && this.state !== 'greet' && this.state !== 'chat' && catDistance < 2.3 && catLevel && this.cooldown === 0) {
      this.state = 'greet'; this.timer = 3 + Math.random() * 1.8; this.speed = 0; this.greeted++;
      this.say(catSpeed > 9 ? ['Whoa! Where’s the fire, kitty?', 'Zoom zoom! Go on then.', 'Ha! Someone’s in a hurry.'][Math.floor(Math.random() * 3)] : GREETINGS[Math.floor(Math.random() * GREETINGS.length)], 3.4);
      this.heartTime = 1.6; people.greetings++; people.onGreet?.(this);
    }
    let moving = false;
    if (this.state === 'greet') {
      this.face(Math.atan2(dx, dz), dt, 6);
      if (this.timer === 0 || catDistance > 5) { this.state = 'walk'; this.cooldown = 9 + Math.random() * 14; }
    } else if (this.state === 'chat') {
      if (this.partner) this.face(Math.atan2(this.partner.x - this.x, this.partner.z - this.z), dt, 5);
      if (this.timer === 0) { this.state = 'walk'; this.cooldown = 6 + Math.random() * 10; this.partner = null; }
    } else if (this.state === 'idle') {
      if (this.timer === 0) { this.state = 'walk'; if (Math.random() < .5) this.chooseNext(); }
    } else {
      if (!this.target) this.chooseNext(true);
      // Neighbours chatting is a chance meeting, not a schedule.
      for (const o of others) {
        if (o === this || o.state !== 'walk' || o.cooldown > 0 || this.cooldown > 0) continue;
        if (Math.hypot(o.x - this.x, o.z - this.z) < 2 && Math.random() < .5) {
          const t = 3.5 + Math.random() * 3; this.state = o.state = 'chat'; this.timer = o.timer = t; this.partner = o; o.partner = this;
          this.say(CHAT[Math.floor(Math.random() * CHAT.length)], 2.6); setTimeout(() => { if (o.state === 'chat') o.say(CHAT[Math.floor(Math.random() * CHAT.length)], 2.6); }, 1800);
          this.speed = o.speed = 0; break;
        }
      }
      if (this.state === 'walk') {
        let target = this.baseSpeed;
        for (const o of others) if (o !== this && o.axis === this.axis && Math.hypot(o.x - this.x, o.z - this.z) < 1.1) { const ahead = ((o.x - this.x) * (this.axis === 'x' ? 1 : 0) + (o.z - this.z) * (this.axis === 'z' ? 1 : 0)) * this.dir; if (ahead > 0) target = Math.min(target, o.speed * .9); }
        if (catDistance < 1 && catLevel) target = Math.min(target, .35);
        this.speed += (target - this.speed) * (1 - Math.exp(-4 * dt));
        const step = this.speed * dt;
        const key = this.axis, remaining = (this.target[key] - this[key]) * this.dir;
        if (remaining <= step) {
          this[key] = this.target[key];
          if (Math.random() < .18) { this.state = 'idle'; this.timer = 1.5 + Math.random() * 3.5; this.speed = 0; if (Math.random() < .35) this.say(IDLE[Math.floor(Math.random() * IDLE.length)], 2.4); }
          else this.chooseNext();
        } else {
          this[key] += step * this.dir;
          if (Math.random() < dt * .025) { this.state = 'idle'; this.timer = 1.2 + Math.random() * 2.5; this.speed = 0; }
        }
        moving = this.speed > .05;
        if (moving) this.face(this.axis === 'x' ? Math.atan2(this.dir, 0) : Math.atan2(0, this.dir), dt, 7);
      }
    }
    // Follow kerbs and footpaths; nothing taller than a step counts as ground.
    const ground = people.physics.support(this.x, this.z, this.y + .35).y;
    this.y += (ground - this.y) * (1 - Math.exp(-14 * dt));
    this.animate(dt, moving);
    const s = this.solid; s.x = this.x; s.z = this.z; s.minX = this.x - s.r; s.maxX = this.x + s.r; s.minZ = this.z - s.r; s.maxZ = this.z + s.r; s.minY = this.y; s.maxY = this.y + this.H;
  }
  face(target, dt, rate) { this.heading += Math.atan2(Math.sin(target - this.heading), Math.cos(target - this.heading)) * (1 - Math.exp(-rate * dt)); }
  animate(dt, moving) {
    const t = this.people.time, greeting = this.state === 'greet';
    this.phase += dt * (moving ? 5.6 * this.speed / 1.2 : 0);
    const swing = moving ? Math.sin(this.phase) * .55 * Math.min(1, this.speed / .9) : 0;
    this.legs[0].rotation.x = swing; this.legs[1].rotation.x = -swing;
    this.arms[0].rotation.x = -swing * .6; this.arms[1].rotation.x = swing * .6;
    this.bodyTilt += ((greeting ? .62 : 0) - this.bodyTilt) * (1 - Math.exp(-5 * dt));
    this.reach += ((greeting ? 1 : 0) - this.reach) * (1 - Math.exp(-5 * dt));
    this.torso.rotation.x = this.bodyTilt;
    // One hand reaches down for a chin scratch; the other rests on a knee.
    this.arms[1].rotation.x += -this.reach * .55; this.arms[0].rotation.x += -this.reach * .25;
    this.legs[0].rotation.x += this.reach * .18; this.legs[1].rotation.x += -this.reach * .12;
    this.body.position.y = (moving ? Math.abs(Math.sin(this.phase)) * .03 : Math.sin(t * 1.3 + this.phase) * .006) - this.reach * .14;
    this.body.rotation.z = moving ? Math.sin(this.phase) * .03 : Math.sin(t * .9 + this.phase) * .012;
    this.group.position.set(this.x, this.y, this.z); this.group.rotation.y = this.heading;
    this.heartTime = Math.max(0, this.heartTime - dt);
    this.heart.visible = this.heartTime > 0;
    if (this.heart.visible) { const k = 1 - this.heartTime / 1.6; this.heart.position.set(Math.sin(k * 6) * .12, this.H * .6 + k * .7, .35); this.heart.material.opacity = Math.min(1, (1 - k) * 2); const sc = .22 + Math.sin(k * Math.PI) * .12; this.heart.scale.set(sc, sc, 1); }
  }
}

export class People {
  constructor(scene, physics, count = 12, seedText = 'whiskerfield') {
    this.scene = scene; this.physics = physics; this.count = count; this.time = 0; this.greetings = 0; this.onGreet = null; this.interactive = false;
    this.material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .9, flatShading: true });
    this.heartMaterial = new THREE.SpriteMaterial({ map: heartTexture(), transparent: true, depthWrite: false });
    const r = random(hashString(seedText + 'people'));
    this.variants = []; for (let i = 0; i < 10; i++) this.variants.push(makeVariant(r));
    this.list = []; this.spawnTimer = 0;
  }
  spawnAll(center) {
    for (let i = 0; i < this.count; i++) {
      const person = new Person(this, this.variants[i % this.variants.length]);
      this.place(person, center, 10, 55, null);
      this.scene.add(person.group); this.list.push(person); this.physics.dynamic.push(person.solid);
    }
  }
  place(person, center, minD, maxD, camera) {
    for (let attempt = 0; attempt < 24; attempt++) {
      const a = Math.random() * Math.PI * 2, d = minD + Math.random() * (maxD - minD);
      const node = snapNode(center.x + Math.sin(a) * d, center.z + Math.cos(a) * d);
      const dist = Math.hypot(node.x - center.x, node.z - center.z);
      if (dist < minD || dist > maxD + 12) continue;
      if (camera && dist < 40) {
        const v = new THREE.Vector3(node.x, 1, node.z).project(camera);
        if (Math.abs(v.x) < 1.15 && Math.abs(v.y) < 1.15 && v.z < 1) continue;
      }
      if (this.list.some(o => o !== person && Math.hypot(o.x - node.x, o.z - node.z) < 4)) continue;
      person.reset(node.x, node.z); return;
    }
    person.reset(center.x + 30, center.z + 28.45);
  }
  update(dt, cat, catSpeed, camera) {
    this.time += dt; this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = .6;
      for (const p of this.list) if (Math.hypot(p.x - cat.x, p.z - cat.z) > 90) this.place(p, cat, 32, 62, camera);
    }
    for (const p of this.list) p.update(dt, cat, catSpeed, this.list);
  }
  // The person whose words deserve the one speech bubble on screen.
  speaker(cat) {
    let best = null, bestD = 18;
    for (const p of this.list) if (p.line) { const d = Math.hypot(p.x - cat.x, p.z - cat.z); if (d < bestD) { bestD = d; best = p; } }
    return best;
  }
  dispose() { for (const p of this.list) this.scene.remove(p.group); this.list = []; this.physics.dynamic = []; }
}

function makeVariant(r) {
  const height = 1.62 + r() * .24, legH = height * .47, torsoH = height * .31, neck = height * .03, headR = height * .065;
  const skin = SKIN[Math.floor(r() * SKIN.length)], shirt = SHIRT[Math.floor(r() * SHIRT.length)], trousers = TROUSERS[Math.floor(r() * TROUSERS.length)], hair = HAIR[Math.floor(r() * HAIR.length)];
  const box = new THREE.BoxGeometry(1, 1, 1), ball = new THREE.SphereGeometry(1, 10, 8);
  const torso = new Batch();
  torso.add(box, 0, torsoH / 2, 0, .36, torsoH, .2, shirt);
  torso.add(box, 0, torsoH * .96, 0, .4, torsoH * .1, .22, shirt);
  torso.add(ball, 0, torsoH + neck / 2, 0, .055, neck, .055, skin);
  torso.add(ball, 0, torsoH + neck + headR, .01, headR, headR * 1.08, headR, skin);
  torso.add(ball, 0, torsoH + neck + headR * 1.25, -.015, headR * 1.05, headR * .8, headR * 1.05, hair);
  if (r() > .6) torso.add(box, 0, torsoH + neck + headR * .3, -headR * .55, headR * 1.9, headR * 1.4, headR * .7, hair);
  if (r() > .7) { torso.add(box, .25, torsoH * .45, -.02, .16, .2, .08, '#8b7355'); torso.add(box, .17, torsoH * .78, 0, .03, .34, .03, '#6d5a44'); }
  const leg = new Batch(); leg.add(box, 0, -legH * .47, 0, .15, legH * .94, .17, trousers); leg.add(box, 0, -legH + .04, .03, .15, .08, .25, '#3b3732');
  const arm = new Batch(); arm.add(box, 0, -torsoH * .3, 0, .09, torsoH * .6, .09, shirt); arm.add(ball, 0, -torsoH * .66, 0, .05, .07, .05, skin);
  return { height, torso: torso.geometry(), leg: leg.geometry(), arm: arm.geometry() };
}

function heartTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  x.fillStyle = '#e08a94'; x.beginPath(); x.moveTo(32, 56); x.bezierCurveTo(4, 36, 6, 10, 32, 20); x.bezierCurveTo(58, 10, 60, 36, 32, 56); x.fill();
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; return tex;
}
