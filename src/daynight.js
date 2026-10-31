// Time of day. A full day lasts DAY_SECONDS of real time; the clock is saved with the journey so a
// walk that ends at dusk starts again at dusk. Everything that depends on the hour is interpolated
// between a handful of looks: night, dawn, sunrise, day, sunset, dusk.
import * as THREE from 'three';
import { NIGHT } from './world.js';

export const DAY_SECONDS = 15 * 60;
const col = h => new THREE.Color(h);
// hour -> look. `sun` colour/intensity drive the directional light, `hemi` the sky/ground fill.
const LOOKS = [
  { h: 0, zenith: col('#0f1526'), horizon: col('#1d2740'), sun: col('#a9bdee'), sunI: .55, hemiSky: col('#3d4b74'), hemiGround: col('#22282f'), hemiI: .95, exposure: .96, night: 1, stars: 1 },
  { h: 4.6, zenith: col('#121a30'), horizon: col('#2a3150'), sun: col('#a9bdee'), sunI: .55, hemiSky: col('#3d4b74'), hemiGround: col('#22282f'), hemiI: .95, exposure: .96, night: 1, stars: .9 },
  { h: 5.7, zenith: col('#4a5a8a'), horizon: col('#e39a73'), sun: col('#ffb27a'), sunI: 1.1, hemiSky: col('#bcaab0'), hemiGround: col('#625f55'), hemiI: 1.0, exposure: .98, night: .45, stars: .2 },
  { h: 7, zenith: col('#9fc2d8'), horizon: col('#f3d2a6'), sun: col('#ffd4a0'), sunI: 1.7, hemiSky: col('#e2dfcf'), hemiGround: col('#7e8a68'), hemiI: 1.15, exposure: 1.02, night: .08, stars: 0 },
  { h: 10, zenith: null, horizon: null, sun: col('#ffe6c0'), sunI: 2.2, hemiSky: col('#dfe6d8'), hemiGround: col('#7e8a68'), hemiI: 1.35, exposure: 1.05, night: 0, stars: 0 },
  { h: 16, zenith: null, horizon: null, sun: col('#ffe2b4'), sunI: 2.1, hemiSky: col('#dfe6d8'), hemiGround: col('#7e8a68'), hemiI: 1.3, exposure: 1.05, night: 0, stars: 0 },
  { h: 17.8, zenith: col('#8aa3c4'), horizon: col('#f6b36c'), sun: col('#ffab62'), sunI: 1.7, hemiSky: col('#ecc9a4'), hemiGround: col('#73705e'), hemiI: 1.15, exposure: 1.04, night: .1, stars: 0 },
  { h: 18.9, zenith: col('#49507c'), horizon: col('#e9865e'), sun: col('#ff8a52'), sunI: 1.1, hemiSky: col('#9b8da4'), hemiGround: col('#55524e'), hemiI: 1.0, exposure: 1.0, night: .45, stars: .15 },
  { h: 20, zenith: col('#1c2340'), horizon: col('#4a3f62'), sun: col('#b89bd0'), sunI: .6, hemiSky: col('#4a4c70'), hemiGround: col('#2a2c34'), hemiI: .85, exposure: .94, night: .9, stars: .7 },
  { h: 21.5, zenith: col('#0f1526'), horizon: col('#1d2740'), sun: col('#a9bdee'), sunI: .55, hemiSky: col('#3d4b74'), hemiGround: col('#22282f'), hemiI: .95, exposure: .96, night: 1, stars: 1 },
  { h: 24, zenith: col('#0f1526'), horizon: col('#1d2740'), sun: col('#a9bdee'), sunI: .55, hemiSky: col('#3d4b74'), hemiGround: col('#22282f'), hemiI: .95, exposure: .96, night: 1, stars: 1 },
];
const lerpC = (a, b, t, out) => out.copy(a).lerp(b, t);

export class DayCycle {
  constructor(scene, renderer, sun, hemi) {
    this.scene = scene; this.renderer = renderer; this.sun = sun; this.hemi = hemi;
    this.hour = 9.2; this.mode = 'cycle'; this.daySky = col('#c9d4c8'); this.dayHorizon = col('#d8dfd0');
    this.look = { zenith: col('#c9d4c8'), horizon: col('#d8dfd0'), sun: col('#ffe6c0'), sunI: 2.2, hemiSky: col('#dfe6d8'), hemiGround: col('#7e8a68'), hemiI: 1.35, exposure: 1.05, night: 0, stars: 0 };
    // Sky dome: a gradient between horizon and zenith with a warm patch round the sun.
    this.uniforms = { zenith: { value: this.look.zenith }, horizon: { value: this.look.horizon }, sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunColor: { value: col('#ffd9a0') }, glow: { value: 0 } };
    const mat = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: this.uniforms,
      vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w * .99999; }',
      fragmentShader: 'uniform vec3 zenith, horizon, sunDir, sunColor; uniform float glow; varying vec3 vDir; void main(){ float up = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(horizon, zenith, pow(up, .55)); float s = max(dot(normalize(vDir), sunDir), 0.0); c += sunColor * glow * (pow(s, 24.0) * .9 + pow(s, 4.0) * .22) * (1.0 - up * .6); c = mix(horizon, c, smoothstep(-.12, .02, vDir.y)); gl_FragColor = vec4(c, 1.0); }' });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(320, 24, 12), mat); this.dome.frustumCulled = false; this.dome.renderOrder = -10; scene.add(this.dome);
    // Stars, a moon and a sun disc.
    const n = 420, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, e = Math.asin(Math.random() * .94 + .06), r = 300; pos[i * 3] = Math.cos(a) * Math.cos(e) * r; pos[i * 3 + 1] = Math.sin(e) * r; pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r; }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#ffffff', size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false })); this.stars.frustumCulled = false; this.stars.renderOrder = -9; scene.add(this.stars);
    this.moon = new THREE.Mesh(new THREE.SphereGeometry(7, 12, 10), new THREE.MeshBasicMaterial({ color: '#f1efe0', fog: false })); this.moon.renderOrder = -8; scene.add(this.moon);
    this.sunDisc = new THREE.Mesh(new THREE.SphereGeometry(9, 12, 10), new THREE.MeshBasicMaterial({ color: '#fff1cf', fog: false, transparent: true, opacity: .95 })); this.sunDisc.renderOrder = -8; scene.add(this.sunDisc);
    // Street lamps: the three nearest get a real light after dark.
    this.lights = []; for (let i = 0; i < 3; i++) { const l = new THREE.PointLight('#ffd9a0', 0, 15, 1.6); scene.add(l); this.lights.push(l); }
    this.sunDir = new THREE.Vector3(0, 1, 0);
  }
  setDaySky(skyHex) { this.daySky.set(skyHex); this.dayHorizon.copy(this.daySky).lerp(col('#fff4dc'), .35); }
  // Settings: 'cycle' runs the clock; the others pin it.
  setMode(mode) { this.mode = mode; if (mode === 'day') this.hour = 11; else if (mode === 'sunset') this.hour = 18.2; else if (mode === 'night') this.hour = 22.5; }
  label() { const h = Math.floor(this.hour), m = Math.floor((this.hour - h) * 60); return `${h}:${m < 10 ? '0' : ''}${m}`; }
  period() { const h = this.hour; return h < 5.3 ? 'night' : h < 7.5 ? 'dawn' : h < 12 ? 'morning' : h < 17.3 ? 'afternoon' : h < 19.6 ? 'sunset' : h < 21 ? 'dusk' : 'night'; }
  update(dt, camera, cat, lamps) {
    if (this.mode === 'cycle') this.hour = (this.hour + dt * 24 / DAY_SECONDS) % 24;
    const h = this.hour; let i = 0; while (i < LOOKS.length - 2 && LOOKS[i + 1].h <= h) i++;
    const a = LOOKS[i], b = LOOKS[i + 1], t = Math.min(1, Math.max(0, (h - a.h) / (b.h - a.h))), k = t * t * (3 - 2 * t), L = this.look;
    lerpC(a.zenith || this.daySky, b.zenith || this.daySky, k, L.zenith); lerpC(a.horizon || this.dayHorizon, b.horizon || this.dayHorizon, k, L.horizon);
    lerpC(a.sun, b.sun, k, L.sun); lerpC(a.hemiSky, b.hemiSky, k, L.hemiSky); lerpC(a.hemiGround, b.hemiGround, k, L.hemiGround);
    L.sunI = a.sunI + (b.sunI - a.sunI) * k; L.hemiI = a.hemiI + (b.hemiI - a.hemiI) * k; L.exposure = a.exposure + (b.exposure - a.exposure) * k; L.night = a.night + (b.night - a.night) * k; L.stars = a.stars + (b.stars - a.stars) * k;
    // Sun path: rises in the east (+x), sets in the west; the moon takes over at night.
    const dayT = (h - 6) / 12, el = Math.sin(dayT * Math.PI) * 1.15, az = -Math.PI / 2 + dayT * Math.PI, up = el > .02;
    const dir = up ? new THREE.Vector3(Math.cos(az) * Math.cos(el), Math.sin(el), Math.sin(az) * Math.cos(el) * .6 + .35)
      : new THREE.Vector3(Math.cos(az + Math.PI) * .7, Math.max(.35, -el * .8 + .3), .55);
    dir.normalize(); this.sunDir.copy(dir);
    this.sun.color.copy(L.sun); this.sun.intensity = L.sunI; this.sun.position.set(cat.x + dir.x * 70, dir.y * 70, cat.z + dir.z * 70); this.sun.target.position.set(cat.x, 0, cat.z);
    this.hemi.color.copy(L.hemiSky); this.hemi.groundColor.copy(L.hemiGround); this.hemi.intensity = L.hemiI;
    this.renderer.toneMappingExposure = L.exposure;
    this.scene.fog.color.copy(L.horizon); if (this.scene.background) this.scene.background = null;
    this.uniforms.glow.value = up ? 1 - Math.min(1, el / .5) * .55 : 0; this.uniforms.sunDir.value.copy(dir); this.uniforms.sunColor.value.copy(L.sun);
    this.dome.position.copy(camera.position); this.stars.position.copy(camera.position); this.stars.material.opacity = L.stars * .9;
    this.sunDisc.visible = up; this.sunDisc.position.copy(camera.position).addScaledVector(dir, 290); this.sunDisc.material.color.copy(L.sun).lerp(col('#ffffff'), .5);
    const moonEl = Math.sin((dayT + 1) * Math.PI) * 1.0; this.moon.visible = moonEl > 0; this.moon.position.copy(camera.position).add(new THREE.Vector3(Math.cos(az + Math.PI) * Math.cos(moonEl) * 290, Math.sin(moonEl) * 290, .5 * 290 * Math.cos(moonEl))); this.moon.material.color.setRGB(.95 - L.night * .05, .94, .88).lerp(L.horizon, 1 - Math.min(1, L.night + .35));
    NIGHT.value = L.night;
    // Lamp lights near the cat.
    if (lamps && L.night > .02) {
      const near = lamps.map(l => ({ l, d: (l.x - cat.x) ** 2 + (l.z - cat.z) ** 2 })).sort((p, q) => p.d - q.d).slice(0, this.lights.length);
      this.lights.forEach((light, i) => { const n = near[i]; if (!n) { light.intensity = 0; return; } light.position.set(n.l.x, n.l.y - .3, n.l.z); light.intensity = 26 * L.night; });
    } else for (const light of this.lights) light.intensity = 0;
  }
  dispose() { this.scene.remove(this.dome, this.stars, this.moon, this.sunDisc, ...this.lights); }
}
