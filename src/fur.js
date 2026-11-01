// Geometry and paint for the cat: a tapered body along a curved spine, limbs made of capsules,
// and a tabby coat painted into a texture (bands across the back, a pale belly), so the stripes are
// fur rather than tubes glued on.
import * as THREE from 'three';

const TAU = Math.PI * 2;

// A tube along a curve whose radius changes as it goes: rings of vertices, smooth normals, and
// u = round the body, v = along it. The seam sits on the back (u = 0), the belly at u = .75.
export function taperTube(curve, radiusAt, { segs = 26, radial = 14, from = 0, to = 1 } = {}) {
  const pos = [], nor = [], uv = [], index = [];
  const P = new THREE.Vector3(), T = new THREE.Vector3(), N = new THREE.Vector3(), B = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i <= segs; i++) {
    const t = from + (to - from) * (i / segs);
    curve.getPointAt(t, P); curve.getTangentAt(t, T).normalize();
    // Frame: the tube's own "up" is world up projected off the tangent (a spine barely twists).
    N.copy(up).addScaledVector(T, -up.dot(T));
    if (N.lengthSq() < 1e-4) N.set(1, 0, 0).addScaledVector(T, -T.x);
    N.normalize(); B.crossVectors(T, N).normalize();
    const r = radiusAt(t);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * TAU, s = Math.sin(a), c = Math.cos(a);
      // a = 0 at the back (+N is up in the ring), so the belly is at three quarters round.
      const px = P.x + (B.x * s + N.x * c) * r, py = P.y + (B.y * s + N.y * c) * r, pz = P.z + (B.z * s + N.z * c) * r;
      pos.push(px, py, pz);
      nor.push(B.x * s + N.x * c, B.y * s + N.y * c, B.z * s + N.z * c);
      uv.push(j / radial, 1 - t);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = i * (radial + 1) + j, b = a + radial + 1;
    index.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(index);
  return g;
}

// Join geometries that share a material into one, so a limb is a single draw call.
export function mergeGeos(list) {
  const pos = [], nor = [], uv = [], index = [];
  let base = 0;
  for (const src of list) {
    const g = src.index ? src : src.clone().toNonIndexed();
    const p = g.attributes.position.array, n = g.attributes.normal.array, u = g.attributes.uv?.array;
    for (let i = 0; i < p.length; i++) pos.push(p[i]);
    for (let i = 0; i < n.length; i++) nor.push(n[i]);
    if (u) for (let i = 0; i < u.length; i++) uv.push(u[i]);
    else for (let i = 0; i < p.length / 3 * 2; i++) uv.push(0);
    if (g.index) { const a = g.index.array; for (let i = 0; i < a.length; i++) index.push(a[i] + base); }
    else for (let i = 0; i < p.length / 3; i++) index.push(i + base);
    base += p.length / 3;
    if (g !== src) g.dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  out.setIndex(index);
  return out;
}

const cone4 = new THREE.ConeGeometry(1, 1, 5);

// An ellipsoid, so a cheek or a paw is a squashed ball rather than a ball. Small parts get a coarse
// sphere: the cat is a few dozen meshes and it all has to survive a shadow pass.
export function ellipsoid(rx, ry, rz, w = 14, h = 10) { const g = new THREE.SphereGeometry(1, w, h); g.scale(rx, ry, rz); return g; }
export function capsule(r, len, radial = 8, cap = 3) { return new THREE.CapsuleGeometry(r, len, cap, radial); }
export function cone(r, h, sides = 5) { const g = cone4.clone(); g.scale(r, h, r); g.translate(0, h / 2, 0); return g; }
export const sphereGeo = (w = 12, h = 8) => new THREE.SphereGeometry(1, w, h);

// The tabby coat. u runs round the body (belly at .75, spine at 0/1), v runs nose-to-tail.
export function tabbyTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#c8874a'; ctx.fillRect(0, 0, 256, 256);
  // Pale belly: a soft vertical band centred at u = .75 (x = 192) plus a paler chest at the front.
  // The belly sits at u = .75, i.e. x = 192: pale under the chin, cream along the belly, and it must
  // not wrap round onto the back (u = 0 / 1 is the spine).
  const belly = ctx.createLinearGradient(168, 0, 256, 0);
  belly.addColorStop(0, 'rgba(236,222,197,0)'); belly.addColorStop(.45, 'rgba(236,222,197,.8)');
  belly.addColorStop(.75, 'rgba(236,222,197,.9)'); belly.addColorStop(1, 'rgba(236,222,197,.85)');
  ctx.fillStyle = belly; ctx.fillRect(168, 0, 88, 256);
  const chest = ctx.createLinearGradient(0, 200, 0, 256);
  chest.addColorStop(0, 'rgba(240,232,214,0)'); chest.addColorStop(1, 'rgba(240,232,214,.75)');
  ctx.fillStyle = chest; ctx.fillRect(100, 196, 156, 60);
  // Tabby bands: mackerel streaks across the back, uneven, and fading out before the belly.
  for (let i = 0; i < 11; i++) {
    const y = 6 + i * 22 + Math.random() * 6, h = 5 + Math.random() * 7;
    const g = ctx.createLinearGradient(0, 0, 256, 0);
    g.addColorStop(0, 'rgba(146,92,44,.5)'); g.addColorStop(.35, 'rgba(146,92,44,.42)');
    g.addColorStop(.6, 'rgba(146,92,44,0)'); g.addColorStop(.86, 'rgba(146,92,44,0)');
    g.addColorStop(.98, 'rgba(146,92,44,.45)'); g.addColorStop(1, 'rgba(146,92,44,.5)');
    ctx.fillStyle = g; ctx.fillRect(0, y, 256, h);
    // a broken streak or two, so it never reads as a painted ring
    if (i % 3 === 1) { ctx.fillStyle = 'rgba(146,92,44,.35)'; ctx.fillRect(20 + Math.random() * 40, y + h + 3, 40 + Math.random() * 50, 3); }
  }
  // A darker line down the spine, and a little fur noise over the lot.
  ctx.fillStyle = 'rgba(122,74,34,.35)'; ctx.fillRect(0, 0, 10, 256); ctx.fillRect(246, 0, 10, 256);
  for (let i = 0; i < 4200; i++) {
    ctx.fillStyle = `rgba(90,58,28,${Math.random() * .07})`;
    ctx.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 2, 1);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
