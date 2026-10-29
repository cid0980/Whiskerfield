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
    const collar = new THREE.Mesh(new THREE.TorusGeometry(.26, .03, 8, 24), this.materials.collar);
    collar.position.set(0, .88, .44); collar.rotation.x = .2; this.spine.add(collar);
    mesh(this.spine, 'bell', 0, .72, .66, .055, .065, .055);

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
  update(dt, time, state, groundY, reducedMotion = false) {
    const { speed = 0, grounded = true, climbing = false, resting = false, vy = 0, turnRate = 0, accel = 0, landImpact = 0, runBlend = 0 } = state;
    const moving = speed > .15 && !resting;
    const gait = speed > 6.2 ? 1 : 0;
    this.phase += dt * (2.4 + Math.min(speed, 13) * 1.45);
    this.restBlend = damp(this.restBlend, resting ? 1 : 0, 4.5, dt);
    this.climbBlend = damp(this.climbBlend, climbing ? 1 : 0, 10, dt);
    this.squash = damp(this.squash, landImpact, 9, dt);
    const stride = clamp(speed / 5, 0, 1);
    const bob = moving && grounded ? Math.abs(Math.sin(this.phase * (gait ? 1 : 2))) * .035 * stride : Math.sin(time * 1.8) * .008;
    const lean = clamp(-turnRate * .045, -.32, .32) * stride;
    const pitch = clamp(-accel * .012, -.16, .16) + (grounded ? 0 : clamp(-vy * .025, -.28, .22));

    this.model.rotation.x = -this.climbBlend * 1.12 + pitch * (1 - this.climbBlend);
    this.model.rotation.z = lean * (1 - this.restBlend) + (moving && grounded ? Math.sin(this.phase) * .018 * stride : 0);
    this.model.position.y = bob - this.restBlend * .2 - this.squash * .09;
    this.model.position.z = -this.climbBlend * .1;
    this.spine.rotation.x = Math.sin(this.phase * 2) * .025 * stride + this.restBlend * .08;
    this.spine.scale.y = 1 - this.squash * .12 + this.restBlend * .02;
    this.spine.scale.x = 1 + this.squash * .08;
    this.body.scale.z = .62 + Math.sin(this.phase * 2) * .015 * stride;
    this.chest.position.y = .72 + Math.sin(this.phase * 2 + .6) * .012 * stride;
    this.hind.position.y = .68 + Math.sin(this.phase * 2 + Math.PI) * .014 * stride;

    for (const leg of this.legs) {
      const ph = this.phase + leg.phase + (gait ? (leg.front ? 0 : .55) : 0);
      const swing = Math.max(0, Math.sin(ph));
      let hipRot = moving && grounded ? -Math.cos(ph) * (.42 + .3 * runBlend) * stride : 0;
      let kneeRot = moving && grounded ? swing * (.55 + .35 * runBlend) * stride : 0;
      if (climbing) {
        const cph = this.phase * 1.25 + leg.phase;
        hipRot = -.85 + Math.sin(cph) * .55;
        kneeRot = .7 + Math.max(0, Math.cos(cph)) * .6;
      } else if (!grounded) {
        hipRot = leg.front ? -.7 + clamp(vy * .03, -.2, .25) : .55 - clamp(vy * .025, -.2, .25);
        kneeRot = leg.front ? .8 : .45;
      }
      hipRot *= 1 - this.restBlend;
      kneeRot *= 1 - this.restBlend;
      leg.hip.rotation.x = damp(leg.hip.rotation.x, hipRot + this.restBlend * (leg.front ? -.9 : .9), 18, dt);
      leg.knee.rotation.x = damp(leg.knee.rotation.x, kneeRot + this.restBlend * 1.5, 18, dt);
      leg.hip.rotation.z = (leg.x > 0 ? 1 : -1) * this.restBlend * .28;
      leg.paw.rotation.x = -leg.knee.rotation.x * .45;
    }

    this.head.position.y = 1.02 - this.restBlend * .25 - bob * .55;
    this.head.position.z = .56 + this.restBlend * .04;
    this.head.rotation.x = this.restBlend * .22 + (climbing ? -.25 : 0) - pitch * .55 + Math.sin(this.phase * 2) * .012 * stride;
    this.headLook = damp(this.headLook, !moving && !resting && !reducedMotion ? Math.sin(time * .5) * .18 : -lean * .5, 3, dt);
    this.head.rotation.y = this.headLook;
    this.head.rotation.z = !moving && !resting ? Math.sin(time * .8) * .02 : -lean * .25;

    this.tailSway = damp(this.tailSway, moving ? Math.sin(this.phase * .7) * .22 : Math.sin(time * 1.6) * .16, 4, dt);
    for (let i = 0; i < this.tailSegments.length; i++) {
      const seg = this.tailSegments[i], lag = i * .45;
      seg.rotation.z = Math.sin(time * (resting ? 1.1 : 2.2) - lag) * (resting ? .08 : .12) + this.tailSway * (i / 6);
      seg.rotation.x = (i === 0 ? .35 : .12) + Math.sin(time * 1.3 - lag) * .05 - this.restBlend * .32 + (climbing ? .18 : 0) + lean * .08 * i;
      seg.rotation.y = this.restBlend * .22 * i;
    }
    const twitch = !moving && Math.sin(time * .7) > .985 ? Math.sin(time * 25) * .12 : 0;
    this.twitchEar.rotation.z = -.22 + twitch - lean * .15;
    this.otherEar.rotation.z = .22 - twitch * .6 - lean * .15;
    this.blinkTime -= dt;
    if (this.blinkTime < -.13) this.blinkTime = 3 + Math.random() * 4;
    const blink = this.blinkTime < 0 || resting ? .1 : 1;
    for (const eye of this.eyes) eye.scale.y = .06 * blink;
    for (const pupil of this.pupils) pupil.scale.y = .72 * blink;

    this.shadow.position.set(this.root.position.x, groundY + .02, this.root.position.z);
    const shadowScale = this.size * (1 + Math.min(3, Math.max(0, this.root.position.y - groundY)) * .35);
    this.shadow.scale.set(shadowScale, shadowScale, 1);
    this.shadow.material.opacity = .3 / (1 + Math.max(0, this.root.position.y - groundY) * .8);
  }
}
