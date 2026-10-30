import * as THREE from 'three';

const damp = THREE.MathUtils.damp;
const clamp = THREE.MathUtils.clamp;

function furTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 2600; i++) {
    const a = Math.random() * .09;
    ctx.fillStyle = `rgba(70,45,25,${a})`;
    ctx.fillRect(Math.random() * 128, Math.random() * 128, 1 + Math.random() * 2, 1);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(2, 2);
  return tex;
}

export class Cat {
  constructor(scene, size = 1) {
    this.size = size;
    this.root = new THREE.Group(); this.root.scale.setScalar(size);
    this.model = new THREE.Group();
    this.root.add(this.model); scene.add(this.root);
    this.materials = {};
    const furMap = furTexture();
    const mat = (name, color, roughness = .95, map = null) => this.materials[name] = new THREE.MeshStandardMaterial({ color, roughness, map });
    mat('fur', '#c8874a', .96, furMap);
    mat('light', '#e9dcc4', .97, furMap);
    mat('stripe', '#8f5c32', .97);
    mat('ear', '#c9967e'); mat('eye', '#7fa05a', .55); mat('pupil', '#20281f', .4);
    mat('shine', '#fff9e8', .3); mat('nose', '#b97a6b', .7); mat('collar', '#5d7463', .8); mat('bell', '#c9a35c', .45);
    const sphere = new THREE.SphereGeometry(1, 18, 14);
    const mesh = (parent, material, x, y, z, sx, sy, sz) => {
      const m = new THREE.Mesh(sphere, this.materials[material]);
      m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; m.receiveShadow = true;
      parent.add(m); return m;
    };

    this.spine = new THREE.Group(); this.model.add(this.spine);
    this.body = mesh(this.spine, 'fur', 0, .68, -.08, .34, .34, .62);
    this.chest = mesh(this.spine, 'fur', 0, .72, .3, .31, .33, .34);
    mesh(this.spine, 'light', 0, .6, .38, .24, .24, .2);
    this.hind = mesh(this.spine, 'fur', 0, .68, -.42, .32, .32, .32);

    this.head = new THREE.Group(); this.head.position.set(0, 1.02, .56); this.spine.add(this.head);
    mesh(this.head, 'fur', 0, 0, 0, .33, .3, .29);
    mesh(this.head, 'light', 0, -.11, .22, .22, .14, .12);
    mesh(this.head, 'light', -.095, -.1, .27, .11, .085, .08);
    mesh(this.head, 'light', .095, -.1, .27, .11, .085, .08);
    this.eyes = []; this.pupils = [];
    for (const s of [-1, 1]) {
      const eye = mesh(this.head, 'eye', s * .15, .035, .255, .055, .06, .03);
      const pupil = mesh(eye, 'pupil', 0, 0, .7, .45, .72, .3);
      mesh(eye, 'shine', -.25, .3, .85, .18, .18, .18);
      this.eyes.push(eye); this.pupils.push(pupil);
      const ear = new THREE.Group(); ear.position.set(s * .22, .22, -.02); ear.rotation.z = -s * .22; this.head.add(ear);
      const eg = new THREE.ConeGeometry(.15, .34, 4); eg.rotateY(Math.PI / 4);
      const e = new THREE.Mesh(eg, this.materials.fur); e.position.y = .1; e.scale.z = .6; e.castShadow = true; ear.add(e);
      const inner = new THREE.Mesh(new THREE.ConeGeometry(.09, .22, 4), this.materials.ear);
      inner.rotation.y = Math.PI / 4; inner.position.set(0, .1, .055); inner.scale.z = .25; ear.add(inner);
      if (s === 1) this.twitchEar = ear; else this.otherEar = ear;
    }
    this.hatMount = new THREE.Group(); this.hatMount.position.set(0, .24, -.03); this.hatMount.rotation.x = -.12; this.head.add(this.hatMount); this.hatId = 'none';
    mesh(this.head, 'nose', 0, -.075, .345, .05, .035, .03);
    const mouth = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -.1, .34), new THREE.Vector3(0, -.14, .33),
      new THREE.Vector3(-.05, -.155, .32), new THREE.Vector3(0, -.14, .33), new THREE.Vector3(.05, -.155, .32)
    ]);
    this.head.add(new THREE.Line(mouth, new THREE.LineBasicMaterial({ color: '#7d6a55' })));
    const whiskerPoints = [];
    for (const s of [-1, 1]) for (let j = 0; j < 3; j++) {
      whiskerPoints.push(new THREE.Vector3(s * .14, -.1 + j * .025, .31), new THREE.Vector3(s * .46, -.14 + j * .06, .28 + (j - 1) * .03));
    }
    this.head.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(whiskerPoints), new THREE.LineBasicMaterial({ color: '#e8dcc4', transparent: true, opacity: .7 })));
    for (const x of [-.095, 0, .095]) {
      const stripe = mesh(this.head, 'stripe', x, .215, .13, .028, .024, .1); stripe.rotation.x = .45;
    }
    for (const z of [-.42, -.16, .1]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-.28, .82, z), new THREE.Vector3(-.15, .98, z), new THREE.Vector3(0, 1.02, z),
        new THREE.Vector3(.15, .98, z), new THREE.Vector3(.28, .82, z)
      ]);
      const stripe = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, .024, 6, false), this.materials.stripe);
      stripe.castShadow = true; this.spine.add(stripe);
    }

    this.legs = [];
    const legDefs = [
      { x: -.22, z: .34, front: true, phase: 0 },
      { x: .22, z: .34, front: true, phase: Math.PI },
      { x: -.22, z: -.42, front: false, phase: Math.PI },
      { x: .22, z: -.42, front: false, phase: 0 },
    ];
    for (const def of legDefs) {
      const hip = new THREE.Group(); hip.position.set(def.x, .55, def.z); this.spine.add(hip);
      mesh(hip, 'fur', 0, -.13, 0, .095, .18, .1);
      if (!def.front) mesh(hip, 'fur', 0, -.04, -.02, .14, .18, .15);
      const knee = new THREE.Group(); knee.position.y = -.27; hip.add(knee);
      mesh(knee, 'fur', 0, -.12, 0, .075, .15, .08);
      const paw = mesh(knee, 'light', 0, -.26, .03, .1, .075, .13);
      this.legs.push({ hip, knee, paw, ...def });
    }

    this.tail = new THREE.Group(); this.tail.position.set(0, .78, -.66); this.spine.add(this.tail);
    this.tailSegments = [];
    let parent = this.tail;
    for (let i = 0; i < 6; i++) {
      const seg = new THREE.Group(); seg.position.set(0, i === 0 ? 0 : .16, i === 0 ? 0 : -.035); parent.add(seg);
      const r = .075 - i * .007;
      mesh(seg, i === 5 ? 'light' : 'fur', 0, .08, -.015, r, .1, r);
      this.tailSegments.push(seg); parent = seg;
    }
    // Wardrobe mounts: everything the cat can wear hangs off one of these.
    const mount = (parent, x, y, z, rx = 0) => { const m = new THREE.Group(); m.position.set(x, y, z); m.rotation.x = rx; parent.add(m); return m; };
    this.mounts = { hat: this.hatMount, neck: mount(this.spine, 0, .88, .44, -.1), eyes: mount(this.head, 0, .03, .27), back: mount(this.spine, 0, 1.0, -.12, .1), tail: mount(this.tailSegments[4], 0, .1, -.02) };
    this.outfit = { hat: 'none', neck: 'none', eyes: 'none', back: 'none', tail: 'none' };

    this.phase = 0; this.restBlend = 0; this.climbBlend = 0; this.blinkTime = 3;
    this.squash = 0; this.tailSway = 0; this.headLook = 0;
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 2.1), new THREE.MeshBasicMaterial({ map: this.shadowTexture(), transparent: true, opacity: .22, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2; scene.add(this.shadow);
  }
  shadowTexture() {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31);
    g.addColorStop(0, 'rgba(35,45,30,.65)'); g.addColorStop(.4, 'rgba(35,45,30,.3)'); g.addColorStop(1, 'rgba(35,45,30,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(canvas);
  }
  setHat(id, group) { this.setItem('hat', id, group); }
  setItem(slot, id, group) {
    const m = this.mounts[slot]; if (!m) return;
    while (m.children.length) m.remove(m.children[0]);
    if (group) m.add(group); this.outfit[slot] = group ? id : 'none'; if (slot === 'hat') this.hatId = this.outfit.hat;
  }

  update(dt, time, state, groundY, reducedMotion = false) {
    const { speed = 0, grounded = true, climbing = false, resting = false, vy = 0, turnRate = 0, accel = 0, landImpact = 0, runBlend = 0 } = state;
    dt = Math.min(dt, .05);
    const moving = speed > .15 && !resting;
    // ---- gaits: a four-beat walk, a diagonal trot, a bounding gallop; blended by speed.
    const wWalk = clamp(1 - (speed - 3) / 1.5, 0, 1), wGallop = clamp((speed - 8.5) / 2.5, 0, 1), wTrot = 1 - wWalk - wGallop;
    const strideLen = .55 + wTrot * .25 + wGallop * .75;
    this.phase += dt * (moving && grounded ? Math.max(1.6, speed / strideLen) * .9 : climbing ? 7 : 1.2);
    this.restBlend = damp(this.restBlend, resting ? 1 : 0, 4.5, dt);
    this.climbBlend = damp(this.climbBlend, climbing ? 1 : 0, 10, dt);
    this.squash = damp(this.squash, landImpact, 9, dt);
    this.airBlend = damp(this.airBlend ?? 0, !grounded && !climbing ? 1 : 0, 12, dt);
    const stride = clamp(speed / 4, 0, 1);
    // ---- idle life: after a while the cat sits, grooms, stretches, looks about.
    const still = grounded && !moving && !climbing && !resting;
    this.idle = still ? (this.idle ?? 0) + dt : 0;
    if (!still) { this.act = null; this.nextAct = 2.5 + Math.random() * 3; }
    else if (!reducedMotion) {
      if (this.act && (this.act.t += dt) > this.act.dur) { this.act = null; this.nextAct = this.idle + 3 + Math.random() * 5; }
      if (!this.act && this.idle > (this.nextAct ?? 3)) {
        const pick = this.idle < 6 ? ['look', 'stretch', 'shake'] : ['groom', 'look', 'groom', 'yawn', 'look'];
        const name = pick[Math.floor(Math.random() * pick.length)];
        this.act = { name, t: 0, dur: name === 'groom' ? 3.2 : name === 'stretch' ? 2.2 : name === 'yawn' ? 1.6 : 1.4, side: Math.random() > .5 ? 1 : -1 };
      }
    }
    const act = this.act, actK = act ? Math.sin(Math.PI * clamp(act.t / act.dur, 0, 1)) : 0; // rises and falls over the action
    const sitTarget = still && this.idle > 5.5 && !(act?.name === 'stretch') ? 1 : 0;
    this.sitBlend = damp(this.sitBlend ?? 0, sitTarget, sitTarget ? 2.2 : 9, dt);
    this.stretchBlend = damp(this.stretchBlend ?? 0, act?.name === 'stretch' ? actK : 0, 8, dt);
    this.groomBlend = damp(this.groomBlend ?? 0, act?.name === 'groom' ? Math.min(1, actK * 1.6) : 0, 6, dt);
    const sit = this.sitBlend * (1 - this.restBlend), st = this.stretchBlend, gr = this.groomBlend;
    // ---- whole-body motion
    const gallopBob = Math.sin(this.phase) * .07, trotBob = Math.abs(Math.sin(this.phase * 2)) * .035, walkBob = Math.abs(Math.sin(this.phase * 2)) * .018;
    const bob = moving && grounded ? (walkBob * wWalk + trotBob * wTrot + gallopBob * wGallop) * stride : Math.sin(time * 1.8) * .008;
    const lean = clamp(-turnRate * .045, -.32, .32) * stride;
    const pitch = clamp(-accel * .012, -.16, .16) + (grounded ? 0 : clamp(-vy * .025, -.28, .22));
    const breathe = still ? Math.sin(time * 2.1) * .012 : 0;
    this.model.rotation.x = -this.climbBlend * 1.12 + pitch * (1 - this.climbBlend) - sit * .48 + st * .36;
    this.model.rotation.z = lean * (1 - this.restBlend) + (moving && grounded ? Math.sin(this.phase) * .018 * stride : 0);
    this.model.position.y = bob - this.restBlend * .4 - this.squash * .09 - sit * .14 + st * .02 - this.airBlend * .02;
    this.model.position.z = -this.climbBlend * .1 + sit * .1;
    // Gallop: the spine flexes and extends; in the air it stretches out.
    const flex = Math.sin(this.phase + .4) * .14 * wGallop * stride * (grounded ? 1 : 0);
    this.spine.rotation.x = Math.sin(this.phase * 2) * .02 * stride * (1 - wGallop) + flex + this.restBlend * .08;
    this.spine.scale.y = 1 - this.squash * .12 + this.restBlend * .02 + breathe;
    this.spine.scale.x = 1 + this.squash * .08 + breathe * .6;
    this.spine.scale.z = 1 + this.airBlend * clamp(Math.abs(vy) * .012, 0, .09) + Math.abs(flex) * .4;
    this.body.scale.z = .62 + Math.sin(this.phase * 2) * .015 * stride;
    this.chest.position.y = .72 + Math.sin(this.phase * 2 + .6) * .012 * stride + sit * .06;
    this.hind.position.y = .68 + Math.sin(this.phase * 2 + Math.PI) * .014 * stride - sit * .1;
    // ---- legs
    const turning = still && Math.abs(turnRate) > 1.5; // shuffling round on the spot
    for (const leg of this.legs) {
      const i = this.legs.indexOf(leg);
      // Phase offsets per gait: walk LH, LF, RH, RF; trot diagonal pairs; gallop hind pair then front pair.
      const walkOff = [Math.PI / 2, Math.PI * 1.5, 0, Math.PI][i], trotOff = leg.phase, gallopOff = (leg.front ? Math.PI : 0) + (leg.x > 0 ? .45 : 0);
      let hipRot = 0, kneeRot = 0;
      if (moving && grounded) {
        const g = (off, hipAmp, kneeAmp, w) => { if (w <= 0) return; const ph = this.phase + off, swing = Math.max(0, Math.sin(ph)); hipRot += -Math.cos(ph) * hipAmp * w; kneeRot += swing * kneeAmp * w; };
        g(walkOff, .34, .5, wWalk); g(trotOff, .46 + .1 * runBlend, .62, wTrot); g(gallopOff, leg.front ? .95 : .8, leg.front ? 1.0 : .7, wGallop);
        hipRot *= stride; kneeRot *= stride;
      } else if (turning) {
        const ph = time * 9 + leg.phase; hipRot = Math.sin(ph) * .18; kneeRot = Math.max(0, Math.cos(ph)) * .35;
      }
      if (climbing) {
        const cph = this.phase + leg.phase;
        hipRot = -.85 + Math.sin(cph) * .55; kneeRot = .7 + Math.max(0, Math.cos(cph)) * .6;
      } else if (!grounded) {
        // Reaching forward on the way up, tucking for the landing on the way down.
        const up = clamp(vy * .08, -1, 1);
        hipRot = leg.front ? -.6 - up * .35 : .5 - up * .25; kneeRot = leg.front ? .55 - up * .3 : .35 + up * .25;
      }
      hipRot *= 1 - this.restBlend; kneeRot *= 1 - this.restBlend;
      // Sitting: hind legs folded, front legs straight and a little forward. Stretching: front legs out flat, hind legs tall.
      const sitHip = leg.front ? .5 : -1.25, sitKnee = leg.front ? -.05 : 2.3;
      const stHip = leg.front ? -1.25 : -.1, stKnee = leg.front ? .1 : 0;
      const restHip = leg.front ? -1.42 : -1.1, restKnee = leg.front ? .08 : 2.35;
      let targetHip = hipRot * (1 - sit - st) + sitHip * sit + stHip * st + restHip * this.restBlend;
      let targetKnee = kneeRot * (1 - sit - st) + sitKnee * sit + stKnee * st + restKnee * this.restBlend;
      // Grooming: one front paw comes up to the face.
      if (gr > 0 && leg.front && leg.x * (act?.side ?? 1) > 0) { targetHip += -1.5 * gr + Math.sin(time * 9) * .15 * gr; targetKnee += 1.6 * gr; }
      leg.hip.rotation.x = damp(leg.hip.rotation.x, targetHip, 16, dt);
      leg.knee.rotation.x = damp(leg.knee.rotation.x, targetKnee, 16, dt);
      leg.hip.rotation.z = (leg.x > 0 ? 1 : -1) * (this.restBlend * (leg.front ? .1 : .42) + sit * (leg.front ? .08 : .3));
      leg.paw.rotation.x = -leg.knee.rotation.x * .45 + st * (leg.front ? .9 : 0);
    }
    // ---- head: looks where it is going, glances about when idle, grooms a flank, yawns.
    this.head.position.y = 1.02 - this.restBlend * .2 - bob * .55 + sit * .12 - st * .08;
    this.head.position.z = .56 + this.restBlend * .04 - sit * .02 + st * .06;
    const yawn = act?.name === 'yawn' ? actK : 0, shake = act?.name === 'shake' ? Math.sin(act.t * 28) * actK * .3 : 0;
    const glance = act?.name === 'look' ? act.side * actK * .8 : 0;
    const lookTarget = still && !reducedMotion ? Math.sin(time * .5) * .12 + glance : -lean * .5 - clamp(turnRate * .05, -.35, .35) * stride;
    this.headLook = damp(this.headLook, lookTarget + (gr ? (act?.side ?? 1) * 1.1 : 0), gr ? 5 : 3, dt);
    this.head.rotation.y = this.headLook + shake;
    this.head.rotation.x = this.restBlend * .22 + (climbing ? -.25 : 0) - pitch * .55 + Math.sin(this.phase * 2) * .012 * stride + sit * .42 - st * .3 + gr * (.55 + Math.sin(time * 9) * .12) - yawn * .35 + this.airBlend * clamp(-vy * .02, -.25, .2);
    this.head.rotation.z = (still ? Math.sin(time * .8) * .02 : -lean * .25) + gr * (act?.side ?? 1) * .25;
    // ---- tail: carried high at a walk, streaming at a gallop, flicking when annoyed (turning), curled when sitting.
    this.tailSway = damp(this.tailSway, moving ? Math.sin(this.phase * (wGallop > .5 ? 1 : .7)) * .22 : Math.sin(time * 1.6) * .16, 4, dt);
    const flick = still && Math.sin(time * .9) > .93 ? Math.sin(time * 14) * .35 : 0;
    for (let i = 0; i < this.tailSegments.length; i++) {
      const seg = this.tailSegments[i], lag = i * .45;
      seg.rotation.z = Math.sin(time * (resting ? 1.1 : 2.2) - lag) * (resting ? .08 : .12) + this.tailSway * (i / 6) + flick * (i / 6) + sit * (i === 0 ? .9 : .25);
      seg.rotation.x = (i === 0 ? .35 : .12) + Math.sin(time * 1.3 - lag) * .05 + this.restBlend * (i === 0 ? -1.45 : -.06) + (climbing ? .18 : 0) + lean * .08 * i
        + wGallop * stride * (i === 0 ? -.9 : -.08) + this.airBlend * (i === 0 ? -.6 : .02) - sit * (i === 0 ? 1.2 : -.02) + st * (i === 0 ? .4 : .05);
      seg.rotation.y = this.restBlend * (i === 0 ? .3 : .45) + sit * (i === 0 ? .4 : .3);
    }
    const cape = this.mounts.back.children[0]?.userData.flap;
    if (cape) cape.rotation.x = .35 + Math.min(.9, speed * .09) + Math.sin(this.phase * 2) * .06 * stride + (grounded ? 0 : .3);
    // ---- ears, eyes
    const twitch = !moving && Math.sin(time * .7) > .985 ? Math.sin(time * 25) * .12 : 0;
    const perk = this.airBlend * .1 + (act?.name === 'look' ? actK * .12 : 0), flat = yawn * .5 + gr * .25;
    this.twitchEar.rotation.z = -.22 + twitch - lean * .15 - perk + flat;
    this.otherEar.rotation.z = .22 - twitch * .6 - lean * .15 + perk - flat;
    this.twitchEar.rotation.x = this.otherEar.rotation.x = flat * .8 - perk * .3;
    this.blinkTime -= dt;
    if (this.blinkTime < -.13) this.blinkTime = 3 + Math.random() * 4;
    const blink = this.blinkTime < 0 || resting || yawn > .5 ? .1 : 1 - gr * .6;
    for (const eye of this.eyes) eye.scale.y = .06 * blink;
    for (const pupil of this.pupils) pupil.scale.y = .72 * blink;

    this.shadow.position.set(this.root.position.x, groundY + .02, this.root.position.z);
    const shadowScale = this.size * (1 + Math.min(3, Math.max(0, this.root.position.y - groundY)) * .35);
    this.shadow.scale.set(shadowScale, shadowScale, 1);
    this.shadow.material.opacity = .3 / (1 + Math.max(0, this.root.position.y - groundY) * .8);
  }
}
