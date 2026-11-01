import * as THREE from 'three';
import { taperTube, mergeGeos, ellipsoid, capsule, cone, sphereGeo, tabbyTexture } from './fur.js';

const damp = THREE.MathUtils.damp;
const clamp = THREE.MathUtils.clamp;

// The cat, out of a curved spine, capsules and a painted tabby coat.
//
// Proportions are in model units (the whole thing is scaled by CAT.scale = .34): the back is at
// ~.74, which is a .25 m shoulder height, the body runs from the nose at z .85 to the tail base at
// z -.58 (a .49 m cat), and the legs put the paws exactly on y = 0.
export class Cat {
  constructor(scene, size = 1) {
    this.size = size;
    this.root = new THREE.Group(); this.root.scale.setScalar(size);
    this.model = new THREE.Group();
    this.root.add(this.model); scene.add(this.root);
    this.materials = {};
    const coat = tabbyTexture();
    const mat = (name, color, roughness = .95, map = null) => this.materials[name] = new THREE.MeshStandardMaterial({ color, roughness, map });
    mat('fur', '#ffffff', .96, coat);   // the coat carries its own colour
    mat('face', '#c8874a', .95);   // plain ginger for head, legs and paws
    mat('light', '#e9d4b4', .97);
    mat('stripe', '#9c6533', .95);
    mat('ear', '#d79a86', .95);
    mat('eye', '#8fa955', .5); mat('pupil', '#1d241b', .35);
    mat('shine', '#fffdf2', .25); mat('nose', '#bd7c6c', .65);

    const add = (parent, geo, material, shadow = true) => { const m = new THREE.Mesh(geo, this.materials[material]); m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m; };
    const at = (geo, x, y, z, rx = 0, ry = 0, rz = 0) => { geo.rotateX(rx); geo.rotateY(ry); geo.rotateZ(rz); geo.translate(x, y, z); return geo; };

    // ---- spine ---------------------------------------------------------------------------------
    this.spine = new THREE.Group(); this.model.add(this.spine);
    // One body: a taper along a curved spine with a rump, a tuck at the waist and a deep chest, so
    // the silhouette is a cat's and not a set of balls pushed together.
    const spineCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, .72, -.46), new THREE.Vector3(0, .74, -.36), new THREE.Vector3(0, .75, -.24),
      new THREE.Vector3(0, .73, -.06), new THREE.Vector3(0, .71, .10), new THREE.Vector3(0, .73, .22),
      new THREE.Vector3(0, .76, .32), new THREE.Vector3(0, .78, .38), new THREE.Vector3(0, .80, .42),
    ]);
    const radii = [.135, .215, .245, .228, .212, .232, .238, .205, .17];
    const radiusAt = t => {
      const u = clamp(t, 0, 1) * (radii.length - 1), i = Math.min(radii.length - 2, Math.floor(u)), f = u - i;
      return radii[i] + (radii[i + 1] - radii[i]) * (f * f * (3 - 2 * f));
    };
    const bodyGeo = taperTube(spineCurve, radiusAt, { segs: 34, radial: 16 });
    bodyGeo.scale(.85, 1, 1);                      // a cat is taller than it is wide
    this.body = add(this.spine, bodyGeo, 'fur');
    // Shoulders and haunches: driven by the gait, but tucked inside the body's own silhouette.
    this.chest = new THREE.Group(); this.chest.position.set(0, .73, .30); this.spine.add(this.chest);
    this.hind = new THREE.Group(); this.hind.position.set(0, .72, -.38); this.spine.add(this.hind);
    // Neck: a short taper up from the shoulders to the head, so the head sits on something.
    const neckCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, .79, .40), new THREE.Vector3(0, .88, .47), new THREE.Vector3(0, .97, .52), new THREE.Vector3(0, 1.04, .55),
    ]);
    add(this.spine, taperTube(neckCurve, tt => .17 - tt * .03, { segs: 10, radial: 14 }), 'face');

    // ---- head ----------------------------------------------------------------------------------
    this.head = new THREE.Group(); this.head.position.set(0, 1.12, .58); this.head.scale.setScalar(.95); this.spine.add(this.head);
    const face = [];
    face.push(at(ellipsoid(.205, .19, .215), 0, .005, -.03));          // skull
    face.push(at(ellipsoid(.212, .152, .19), 0, -.05, -.05));          // cheeks and ruff
    face.push(at(ellipsoid(.145, .095, .125), 0, -.10, .06));          // jaw
    for (const s of [-1, 1]) face.push(at(ellipsoid(.052, .034, .045), s * .088, .065, .128)); // brows over the eyes
    add(this.head, mergeGeos(face), 'face');
    const pale = [];
    pale.push(at(ellipsoid(.082, .06, .075), 0, -.056, .142));        // muzzle
    pale.push(at(ellipsoid(.058, .038, .052), 0, -.098, .118));        // chin
    add(this.head, mergeGeos(pale), 'light');
    add(this.head, at(ellipsoid(.03, .023, .02, 10, 8), 0, -.028, .196), 'nose', false);

    // Eyes: set into the skull, almond-shaped, with a slit pupil and a lidded brow.
    this.eyes = []; this.pupils = [];
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(sphereGeo(), this.materials.eye);
      eye.scale.set(.048, .058, .04); eye.position.set(s * .088, .005, .132); eye.rotation.set(-.1, s * .28, 0);
      this.head.add(eye);
      const pupil = new THREE.Mesh(sphereGeo(), this.materials.pupil);
      pupil.scale.set(.22, .62, .26); pupil.position.z = .74; eye.add(pupil);
      const shine = new THREE.Mesh(sphereGeo(), this.materials.shine);
      shine.scale.set(.11, .13, .11); shine.position.set(s * -.32, .4, .84); eye.add(shine);
      this.eyes.push(eye); this.pupils.push(pupil);
    }
    // Ears: five-sided cones, tipped out a little, with a paler inner ear.
    for (const s of [-1, 1]) {
      const ear = new THREE.Group(); ear.position.set(s * .105, .142, -.055); ear.rotation.set(-.06, 0, -s * .18); this.head.add(ear);
      add(ear, at(cone(.072, .165, 5), 0, 0, 0), 'face');
      add(ear, at(cone(.042, .10, 4), 0, .012, .028), 'ear');
      if (s === 1) this.twitchEar = ear; else this.otherEar = ear;
    }
    this.hatMount = new THREE.Group(); this.hatMount.position.set(0, .16, -.035); this.hatMount.rotation.x = -.1; this.head.add(this.hatMount); this.hatId = 'none';
    // Tabby "M" on the forehead, and the face furniture.
    const brow = [];
    for (const x of [-.05, 0, .05]) brow.push(at(ellipsoid(.017, .014, .05), x, .152, .045, .5, 0, x * 1.6));
    add(this.head, mergeGeos(brow), 'stripe', false);
    const mouth = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -.048, .202), new THREE.Vector3(0, -.075, .194),
      new THREE.Vector3(-.032, -.086, .184), new THREE.Vector3(0, -.075, .194), new THREE.Vector3(.032, -.086, .184),
    ]);
    this.head.add(new THREE.Line(mouth, new THREE.LineBasicMaterial({ color: '#7d6a55' })));
    const whiskers = [];
    for (const s of [-1, 1]) for (let j = 0; j < 3; j++) {
      whiskers.push(new THREE.Vector3(s * .06, -.05 + j * .015, .175), new THREE.Vector3(s * .24, -.065 + j * .032, .16 + (j - 1) * .016));
    }
    this.head.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(whiskers), new THREE.LineBasicMaterial({ color: '#efe5cf', transparent: true, opacity: .65 })));

    // ---- legs ----------------------------------------------------------------------------------
    // Hip at .55, knee .26 below it, paw on the ground. Slim upper legs, thinner lower ones.
    this.legs = [];
    const legDefs = [
      { x: -.15, z: .26, front: true, phase: Math.PI * 1.5 },
      { x: .15, z: .26, front: true, phase: Math.PI },
      { x: -.155, z: -.30, front: false, phase: Math.PI },
      { x: .155, z: -.30, front: false, phase: 0 },
    ];
    for (const def of legDefs) {
      const hip = new THREE.Group(); hip.position.set(def.x, .55, def.z); this.spine.add(hip);
      const upR = def.front ? .062 : .075, lowR = def.front ? .04 : .046;
      const limb = (y0, y1, r0, r1, segs = 5) => taperTube(new THREE.CatmullRomCurve3([new THREE.Vector3(0, y0, 0), new THREE.Vector3(0, (y0 + y1) / 2, 0), new THREE.Vector3(0, y1, 0)]),
        v => r0 + (r1 - r0) * v, { segs, radial: 10 });
      add(hip, limb(.02, -.28, upR * 1.15, upR * .72), 'face');
      if (!def.front) { const thigh = new THREE.Mesh(ellipsoid(upR * 1.05, .125, upR * 1.2, 12, 9), this.materials.face); thigh.position.set(0, -.09, -.01); thigh.rotation.x = .16; hip.add(thigh); }
      const knee = new THREE.Group(); knee.position.y = -.26; hip.add(knee);
      add(knee, limb(.02, -.23, lowR * 1.1, lowR * .85), 'face');
      const paw = new THREE.Mesh(ellipsoid(.058, .042, .082, 10, 8), this.materials.face);
      paw.position.set(0, -.245, .026); knee.add(paw);
      this.legs.push({ hip, knee, paw, ...def });
    }

    // ---- tail ----------------------------------------------------------------------------------
    this.tail = new THREE.Group(); this.tail.position.set(0, .74, -.45); this.spine.add(this.tail);
    this.tailSegments = [];
    let parent = this.tail;
    for (let i = 0; i < 6; i++) {
      const seg = new THREE.Group(); seg.position.set(0, i === 0 ? 0 : .115, 0); parent.add(seg);
      const r0 = .066 - i * .0072, r1 = .066 - (i + 1) * .0072;
      add(seg, taperTube(new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, .06, 0), new THREE.Vector3(0, .118, 0)]),
        v => r0 + (r1 - r0) * v, { segs: 6, radial: 10 }), i === 5 ? 'light' : 'face');
      this.tailSegments.push(seg); parent = seg;
    }
    // Wardrobe mounts: everything the cat can wear hangs off one of these.
    const mount = (parent, x, y, z, rx = 0) => { const m = new THREE.Group(); m.position.set(x, y, z); m.rotation.x = rx; parent.add(m); return m; };
    // Collars, scarves and ruffs were cut for a thicker neck than this cat has, so the neck mount is
    // scaled down to sit on it rather than hoop round the chest.
    const neckMount = mount(this.spine, 0, .90, .47, -.22); neckMount.scale.setScalar(.52);
    this.mounts = { hat: this.hatMount, neck: neckMount, eyes: mount(this.head, 0, .01, .185), back: mount(this.spine, 0, 1.0, -.10, .1), tail: mount(this.tailSegments[4], 0, .1, 0) };
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
    const { speed = 0, grounded = true, climbing = false, resting = false, vy = 0, turnRate = 0, accel = 0, landImpact = 0, runBlend = 0, swimming = false } = state;
    dt = Math.min(dt, .05);
    const moving = speed > .15 && !resting;
    // ---- gaits: a four-beat walk, a diagonal trot, a bounding gallop; blended by speed.
    const wWalk = clamp(1 - (speed - 2.2) / 1.6, 0, 1), wGallop = clamp((speed - 4.6) / 2, 0, 1), wTrot = 1 - wWalk - wGallop;
    // How far the body travels in one whole gait cycle (both pairs). The cadence is then *derived*
    // from the ground speed, so the paws plant where they land instead of skating.
    const strideLen = .40 + wTrot * .17 + wGallop * .27;
    const cadence = moving && grounded ? clamp(speed / strideLen, 0, 9) : 0;
    this.phase += dt * (cadence > 0 ? cadence * Math.PI * 2 : climbing ? 7 : 1.2);
    this.restBlend = damp(this.restBlend, resting ? 1 : 0, 4.5, dt);
    this.climbBlend = damp(this.climbBlend, climbing ? 1 : 0, 10, dt);
    this.squash = damp(this.squash, landImpact, 9, dt);
    this.airBlend = damp(this.airBlend ?? 0, !grounded && !climbing ? 1 : 0, 12, dt);
    // Swimming: a low, level body with the paws paddling a fast circle, head up out of the water.
    this.swimBlend = damp(this.swimBlend ?? 0, swimming ? 1 : 0, 6, dt);
    const stride = clamp(speed / 3.2, 0, 1);
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
    this.model.rotation.x = -this.climbBlend * 1.12 + pitch * (1 - this.climbBlend) - sit * .48 + st * .36 - this.swimBlend * .06;
    this.model.rotation.z = lean * (1 - this.restBlend) + (moving && grounded ? Math.sin(this.phase) * .018 * stride : 0);
    this.model.position.y = bob - this.restBlend * .42 // restDrop: hips end .09 above the ground - this.squash * .09 - sit * .14 + st * .02 - this.airBlend * .02 - this.swimBlend * .1 + this.swimBlend * Math.sin(time * 3.1) * .012;
    this.model.position.z = -this.climbBlend * .1 + sit * .1;
    // Gallop: the spine flexes and extends; in the air it stretches out.
    const flex = Math.sin(this.phase + .4) * .14 * wGallop * stride * (grounded ? 1 : 0);
    this.spine.rotation.x = Math.sin(this.phase * 2) * .02 * stride * (1 - wGallop) + flex + this.restBlend * .08;
    this.spine.scale.y = 1 - this.squash * .12 + this.restBlend * .02 + breathe;
    this.spine.scale.x = 1 + this.squash * .08 + breathe * .6;
    this.spine.scale.z = 1 + this.airBlend * clamp(Math.abs(vy) * .012, 0, .09) + Math.abs(flex) * .4;
    this.body.scale.z = 1 + Math.sin(this.phase * 2) * .022 * stride;
    this.chest.position.y = .73 + Math.sin(this.phase * 2 + .6) * .014 * stride + sit * .06;
    this.hind.position.y = .72 + Math.sin(this.phase * 2 + Math.PI) * .016 * stride - sit * .1;
    // ---- legs
    const turning = still && Math.abs(turnRate) > 1.5; // shuffling round on the spot
    for (const leg of this.legs) {
      const i = this.legs.indexOf(leg);
      // Phase offsets per gait: walk LH, LF, RH, RF; trot diagonal pairs; gallop hind pair then front pair.
      const walkOff = [Math.PI / 2, Math.PI * 1.5, 0, Math.PI][i], trotOff = leg.phase, gallopOff = (leg.front ? Math.PI : 0) + (leg.x > 0 ? .45 : 0);
      let hipRot = 0, kneeRot = 0;
      if (moving && grounded) {
        // Big swings: a cat's legs cover most of its stride, and the knee folds on the way through.
        const g = (off, hipAmp, kneeAmp, w) => { if (w <= 0) return; const ph = this.phase + off, swing = Math.max(0, Math.sin(ph)); hipRot += -Math.cos(ph) * hipAmp * w; kneeRot += swing * kneeAmp * w; };
        g(walkOff, .62, .7, wWalk); g(trotOff, .85 + .1 * runBlend, .95, wTrot); g(gallopOff, leg.front ? 1.2 : 1.05, leg.front ? 1.3 : 1.0, wGallop);
        hipRot *= stride; kneeRot *= stride;
      } else if (turning) {
        const ph = time * 9 + leg.phase; hipRot = Math.sin(ph) * .18; kneeRot = Math.max(0, Math.cos(ph)) * .35;
      }
      if (this.swimBlend > .02) {
        // Paddling: each paw circles forward and back under the chest, faster than a walk.
        const sph = time * 11 + leg.phase * 1.3;
        hipRot = (-.25 + Math.sin(sph) * .62) * this.swimBlend; kneeRot = (.45 + Math.max(0, Math.cos(sph)) * .5) * this.swimBlend;
      } else if (climbing) {
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
      // Lying down: the body settles .46 lower, so the hips are .09 off the ground and each leg has to
      // fold up almost double to keep the paws on it (see the comment on restDrop).
      // Lying down is a sphinx: the body settles onto the floor and the legs lie out flat, front pair
      // forward and hind pair back. A folded-up spider pose looked wrong however it was tuned.
      const restHip = leg.front ? -1.5 : 1.5, restKnee = leg.front ? .12 : .1;
      let targetHip = hipRot * (1 - sit - st) + sitHip * sit + stHip * st + restHip * this.restBlend;
      let targetKnee = kneeRot * (1 - sit - st) + sitKnee * sit + stKnee * st + restKnee * this.restBlend;
      // Grooming: one front paw comes up to the face.
      if (gr > 0 && leg.front && leg.x * (act?.side ?? 1) > 0) { targetHip += -1.5 * gr + Math.sin(time * 9) * .15 * gr; targetKnee += 1.6 * gr; }
      leg.hip.rotation.x = damp(leg.hip.rotation.x, targetHip, 16, dt);
      leg.knee.rotation.x = damp(leg.knee.rotation.x, targetKnee, 16, dt);
      // Lying down, the hind legs fold out to the sides and the front pair stretch out in front.
      leg.hip.rotation.z = (leg.x > 0 ? 1 : -1) * (this.restBlend * (leg.front ? .14 : .34) + sit * (leg.front ? .08 : .3));
      leg.paw.rotation.x = -leg.knee.rotation.x * .45 + st * (leg.front ? .9 : 0);
    }
    // ---- head: looks where it is going, glances about when idle, grooms a flank, yawns.
    this.head.position.y = 1.12 - this.restBlend * .2 - bob * .55 + sit * .12 - st * .08;
    this.head.position.z = .58 + this.restBlend * .04 - sit * .02 + st * .06;
    const yawn = act?.name === 'yawn' ? actK : 0, shake = act?.name === 'shake' ? Math.sin(act.t * 28) * actK * .3 : 0;
    const glance = act?.name === 'look' ? act.side * actK * .8 : 0;
    const lookTarget = still && !reducedMotion ? Math.sin(time * .5) * .12 + glance : -lean * .5 - clamp(turnRate * .05, -.35, .35) * stride;
    this.headLook = damp(this.headLook, lookTarget + (gr ? (act?.side ?? 1) * 1.1 : 0), gr ? 5 : 3, dt);
    this.head.rotation.y = this.headLook + shake;
    this.head.rotation.x = this.restBlend * .22 + (climbing ? -.25 : 0) - pitch * .55 - this.swimBlend * .22 + Math.sin(this.phase * 2) * .012 * stride + sit * .42 - st * .3 + gr * (.55 + Math.sin(time * 9) * .12) - yawn * .35 + this.airBlend * clamp(-vy * .02, -.25, .2);
    this.head.rotation.z = (still ? Math.sin(time * .8) * .02 : -lean * .25) + gr * (act?.side ?? 1) * .25;
    // ---- tail: carried up and curled at a walk, streaming at a gallop, flicking when annoyed (turning), wrapped when sitting.
    this.tailSway = damp(this.tailSway, moving ? Math.sin(this.phase * (wGallop > .5 ? 1 : .7)) * .22 : Math.sin(time * 1.6) * .16, 4, dt);
    const flick = still && Math.sin(time * .9) > .93 ? Math.sin(time * 14) * .35 : 0;
    for (let i = 0; i < this.tailSegments.length; i++) {
      const seg = this.tailSegments[i], lag = i * .45;
      seg.rotation.z = Math.sin(time * (resting ? 1.1 : 2.2) - lag) * (resting ? .08 : .12) + this.tailSway * (i / 6) + flick * (i / 6) + sit * (i === 0 ? .9 : .25);
      seg.rotation.x = (i === 0 ? -.62 : .17) + Math.sin(time * 1.3 - lag) * .05 + this.restBlend * (i === 0 ? -1.13 : -.2) // lying down, the tail lies out along the floor + (climbing ? .18 : 0) + lean * .08 * i
        + wGallop * stride * (i === 0 ? -.55 : -.05) + this.airBlend * (i === 0 ? -.5 : .02) - sit * (i === 0 ? 1.2 : -.02) + st * (i === 0 ? .4 : .05);
      seg.rotation.y = this.restBlend * (i === 0 ? .3 : .45) + sit * (i === 0 ? .4 : .3);
    }
    const cape = this.mounts.back.children[0]?.userData.flap;
    if (cape) cape.rotation.x = .35 + Math.min(.9, speed * .09) + Math.sin(this.phase * 2) * .06 * stride + (grounded ? 0 : .3);
    // ---- ears, eyes
    const twitch = !moving && Math.sin(time * .7) > .985 ? Math.sin(time * 25) * .12 : 0;
    const perk = this.airBlend * .1 + (act?.name === 'look' ? actK * .12 : 0), flat = yawn * .5 + gr * .25;
    this.twitchEar.rotation.z = -.3 + twitch - lean * .15 - perk + flat;
    this.otherEar.rotation.z = .3 - twitch * .6 - lean * .15 + perk - flat;
    this.twitchEar.rotation.x = this.otherEar.rotation.x = -.12 + flat * .8 - perk * .3;
    this.blinkTime -= dt;
    if (this.blinkTime < -.13) this.blinkTime = 3 + Math.random() * 4;
    const blink = this.blinkTime < 0 || resting || yawn > .5 ? .1 : 1 - gr * .6;
    for (const eye of this.eyes) eye.scale.y = .07 * blink;
    for (const pupil of this.pupils) pupil.scale.y = .74 * blink;

    this.shadow.position.set(this.root.position.x, groundY + .02, this.root.position.z);
    const shadowScale = this.size * (1 + Math.min(3, Math.max(0, this.root.position.y - groundY)) * .35);
    this.shadow.scale.set(shadowScale, shadowScale, 1);
    this.shadow.material.opacity = .3 / (1 + Math.max(0, this.root.position.y - groundY) * .8);
  }
}
