// Interiors. `hollow` turns a block into four walls with a doorway and a floor; the kits below put
// furniture into a room given its bounds. Furniture is batched geometry like everything else, so
// the auto-collider pass makes most of it solid; explicit solids are only added where the shape
// matters (table tops to sit on, beds to climb, counters that must not be walked through).
import { GEO } from './world.js';

const TAU = Math.PI * 2;
const pick = (r, list) => list[Math.floor(r() * list.length)];
const WOOD = ['#8d7f67', '#6d5a44', '#a78a62', '#8f5f4e'], CLOTH = ['#8ea48c', '#c88f6e', '#b48c9c', '#4f7f96', '#c9524a', '#d9a53a'], BOOKS = ['#d9544f', '#4f7f96', '#6f9a4f', '#e9c04b', '#c7b2d9', '#3f4a46'];
export const FLOORS = ['#b89a70', '#a7805b', '#cfc8b4', '#9c8a6e', '#c4b08a'];

export function person(c, x, z, heading, role, y = 0, pose = 'stand') { c.jobs.push({ x, z, y, heading, role, pose }); }

// Walls of thickness t around (x,z) size w×d, from y0 to y1, with a doorway on `side`
// (0 = +z, 1 = +x, 2 = -z, 3 = -x) centred at offset u along that face.
export function hollow(W, c, x, z, w, d, y0, y1, t, door, wall, tag, opening = null) {
  const hgt = y1 - y0, ym = (y0 + y1) / 2, b = c.batch;
  const wallBox = (wx, wz, ww, wd, yy = ym, hh = hgt) => { b.box(wx, yy, wz, ww, hh, wd, wall); W.solid(c, wx, yy, wz, ww, hh, wd, { kind: 'wall', climbable: true, ...tag }); };
  for (let side = 0; side < 4; side++) {
    const a = side * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx;
    const faceW = side % 2 ? d : w, half = side % 2 ? w / 2 : d / 2;
    const segs = [];
    if (door && side === door.side) {
      segs.push([-faceW / 2, door.u - door.width / 2], [door.u + door.width / 2, faceW / 2]);
    } else segs.push([-faceW / 2, faceW / 2]);
    if (opening && side === opening.side) { // a second gap, e.g. a wide works door
      const out = []; for (const [u0, u1] of segs) { if (opening.u - opening.width / 2 > u0 && opening.u + opening.width / 2 < u1) out.push([u0, opening.u - opening.width / 2], [opening.u + opening.width / 2, u1]); else out.push([u0, u1]); } segs.length = 0; segs.push(...out);
    }
    for (const [u0, u1] of segs) {
      const um = (u0 + u1) / 2, len = u1 - u0; if (len <= .02) continue;
      wallBox(x + nx * (half - t / 2) + tx * um, z + nz * (half - t / 2) + tz * um, side % 2 ? t : len, side % 2 ? len : t);
    }
    for (const gap of [door, opening]) if (gap && side === gap.side && y0 + gap.height < y1) {
      wallBox(x + nx * (half - t / 2) + tx * gap.u, z + nz * (half - t / 2) + tz * gap.u, side % 2 ? t : gap.width + .1, side % 2 ? gap.width + .1 : t, (y0 + gap.height + y1) / 2, y1 - y0 - gap.height);
    }
  }
  return { minX: x - w / 2 + t, maxX: x + w / 2 - t, minZ: z - d / 2 + t, maxZ: z + d / 2 - t };
}

// Door jambs, header, an open door leaf swung inward, and a mat.
export function doorway(W, c, x, z, side, u, width, height, trim, leaf) {
  const b = c.batch, a = side * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx;
  const dx = x + tx * u, dz = z + tz * u;
  for (const s of [-1, 1]) b.box(dx + tx * s * (width / 2 + .07), height / 2, dz + tz * s * (width / 2 + .07), side % 2 ? .22 : .14, height, side % 2 ? .14 : .22, trim);
  b.box(dx, height + .07, dz, side % 2 ? .22 : width + .3, .14, side % 2 ? width + .3 : .22, trim);
  // Leaf standing open against the inside wall.
  b.box(dx - nx * (width / 2 + .3) + tx * (width / 2 - .02), height / 2 - .05, dz - nz * (width / 2 + .3) + tz * (width / 2 - .02), side % 2 ? width - .1 : .06, height - .1, side % 2 ? .06 : width - .1, leaf);
  b.box(dx - nx * .5, .45, dz - nz * .5, side % 2 ? .6 : 1.1, .03, side % 2 ? 1.1 : .6, '#8f5f4e');
}

// Point on the inner face of wall `side`, offset u along it.
const wallPoint = (room, side, u, inset = 0) => { const cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ, a = side * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), half = side % 2 ? w / 2 : d / 2; return [cx + nx * (half - inset) + nz * u, cz + nz * (half - inset) - nx * u]; };
const lampHang = (b, x, y0, y1, z, shade) => { b.beam([x, y0, z], [x, y1, z], .015, '#4a4f4c'); b.add(GEO.cone, x, y1 - .12, z, .34, .28, .34, shade); b.ball(x, y1 - .2, z, .07, .07, .07, '#f6ecc8'); };
const picture = (b, x, y, z, side, w, h, frame, paint) => { const a = side * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)); b.box(x - nx * .04, y, z - nz * .04, side % 2 ? .06 : w, h, side % 2 ? w : .06, frame); b.box(x - nx * .08, y, z - nz * .08, side % 2 ? .02 : w - .12, h - .12, side % 2 ? w - .12 : .02, paint); };
const rug = (b, x, y, z, w, d, color) => { b.box(x, y + .012, z, w, .024, d, color); b.box(x, y + .018, z, w - .3, .015, d - .3, '#f1e8d2'); };
const chair = (W, c, x, y, z, a, color) => { const b = c.batch; b.box(x, y + .45, z, .42, .05, .42, color, a); b.box(x - Math.sin(a) * .19, y + .72, z - Math.cos(a) * .19, .42, .55, .05, color, a); for (const u of [-.16, .16]) for (const v of [-.16, .16]) b.box(x + u * Math.cos(a) + v * Math.sin(a), y + .22, z - u * Math.sin(a) + v * Math.cos(a), .04, .44, .04, color); W.solid(c, x, y + .25, z, .44, .5, .44, { climbable: false, kind: 'chair' }); };
const table = (W, c, x, y, z, w, d, top, legs) => { const b = c.batch; b.box(x, y + .74, z, w, .06, d, top); for (const u of [-1, 1]) for (const v of [-1, 1]) b.box(x + u * (w / 2 - .1), y + .36, z + v * (d / 2 - .1), .07, .72, .07, legs); W.solid(c, x, y + .39, z, w, .78, d, { climbable: false, kind: 'table' }); };
const shelfUnit = (W, c, x, y, z, side, len, h, wood, r) => { // flat against a wall on `side`, books in rows
  const b = c.batch, a = side * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx;
  const sx = x - nx * .2, sz = z - nz * .2;
  b.box(sx, y + h / 2, sz, side % 2 ? .38 : len, h, side % 2 ? len : .38, wood);
  const rows = Math.floor(h / .45);
  for (let k = 0; k < rows; k++) { const sy = y + .28 + k * .45; for (let j = 0; j < len / .26 - 1; j++) { const u = -len / 2 + .2 + j * .26; if (r() < .12) continue; b.box(sx - nx * .02 + tx * u, sy, sz - nz * .02 + tz * u, side % 2 ? .3 : .2, .34 + r() * .06, side % 2 ? .2 : .3, pick(r, BOOKS)); } }
  W.solid(c, sx, y + h / 2, sz, side % 2 ? .4 : len, h, side % 2 ? len : .4, { climbable: true, kind: 'shelf' });
};
const bed = (W, c, x, y, z, a, w, len, quilt, wood) => { // a = heading of the pillow end
  const b = c.batch, co = Math.cos(a), si = Math.sin(a);
  b.box(x, y + .25, z, w, .36, len, wood, a); b.box(x, y + .5, z, w - .1, .2, len - .1, '#f3ead6', a);
  b.box(x - si * .2, y + .6, z - co * .2, w - .12, .14, len - .9, quilt, a); b.box(x + si * (len / 2 - .4), y + .66, z + co * (len / 2 - .4), w * .4, .14, .45, '#fbf6e8', a); if (w > 1.4) b.box(x + si * (len / 2 - .4), y + .66, z + co * (len / 2 - .4), .5, .14, .45, '#fbf6e8', a);
  W.solid(c, x, y + .33, z, Math.abs(co) > .5 ? w : len, .66, Math.abs(co) > .5 ? len : w, { climbable: true, kind: 'bed' });
};
const plant = (b, x, y, z, s = 1) => { b.add(GEO.pot, x, y + .22 * s, z, .3 * s, .44 * s, .3 * s, '#b07a60'); for (let k = 0; k < 5; k++) { const a = k * 1.3; b.box(x + Math.cos(a) * .12 * s, y + .62 * s + k * .05, z + Math.sin(a) * .12 * s, .12 * s, .5 * s, .04 * s, '#5f7f4a', 0, -a, Math.cos(a) * .5); } };

// ---- kits -------------------------------------------------------------------------------------
// Each kit gets the room rectangle (inner wall faces), the floor height, rng, and which side the
// doorway is on (so the big pieces stay out of the way).
export const KITS = {
  living(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const cloth = pick(r, CLOTH), wood = pick(r, WOOD);
    rug(b, cx, fy, cz, Math.min(w - 2.5, 4.2), Math.min(d - 2.5, 3), pick(r, ['#b48c9c', '#c9524a', '#4f7f96', '#d9a53a']));
    // Sofa against the back wall (opposite the door), coffee table, armchair at an angle, TV facing.
    const back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx;
    const half = back % 2 ? w / 2 : d / 2, sx = cx + nx * (half - .7), sz = cz + nz * (half - .7);
    b.box(sx, fy + .3, sz, back % 2 ? .95 : 2.5, .6, back % 2 ? 2.5 : .95, cloth); b.box(sx + nx * .33, fy + .75, sz + nz * .33, back % 2 ? .28 : 2.5, .5, back % 2 ? 2.5 : .28, cloth);
    for (const s of [-1, 1]) b.box(sx + tx * s * 1.15, fy + .5, sz + tz * s * 1.15, back % 2 ? .95 : .2, .4, back % 2 ? .2 : .95, cloth);
    for (const s of [-.6, .6]) b.box(sx - nx * .1 + tx * s, fy + .7, sz - nz * .1 + tz * s, .5, .22, .32, pick(r, CLOTH), a + .3 * s);
    W.solid(c, sx, fy + .35, sz, back % 2 ? 1 : 2.5, .7, back % 2 ? 2.5 : 1, { climbable: false, kind: 'sofa' });
    b.box(sx - nx * 1.6, fy + .22, sz - nz * 1.6, 1.1, .44, .6, wood, a); b.box(sx - nx * 1.6, fy + .46, sz - nz * 1.6, 1, .04, .5, '#e3dcc6', a); b.cyl(sx - nx * 1.6 + tx * .2, fy + .54, sz - nz * 1.6 + tz * .2, .1, .1, '#f1e8d2');
    W.solid(c, sx - nx * 1.6, fy + .24, sz - nz * 1.6, back % 2 ? .6 : 1.1, .48, back % 2 ? 1.1 : .6, { climbable: false, kind: 'table' });
    const ax = sx - nx * 1.2 + tx * 2.1, az = sz - nz * 1.2 + tz * 2.1; b.box(ax, fy + .3, az, .9, .6, .9, pick(r, CLOTH), a - .6); b.box(ax - Math.sin(a - .6) * .35, fy + .75, az - Math.cos(a - .6) * .35, .9, .5, .2, pick(r, CLOTH), a - .6); W.solid(c, ax, fy + .35, az, .95, .7, .95, { climbable: false, kind: 'chair' });
    const vx = cx - nx * (half - .5), vz = cz - nz * (half - .5); b.box(vx, fy + .25, vz, back % 2 ? .45 : 1.6, .5, back % 2 ? 1.6 : .45, wood); b.box(vx, fy + 1.05, vz, back % 2 ? .06 : 1.5, .9, back % 2 ? 1.5 : .06, '#2f3331'); b.box(vx + nx * .035, fy + 1.05, vz + nz * .035, back % 2 ? .01 : 1.3, .7, back % 2 ? 1.3 : .01, '#a9c3c9');
    W.solid(c, vx, fy + .25, vz, back % 2 ? .45 : 1.6, .5, back % 2 ? 1.6 : .45, { climbable: false, kind: 'cabinet' });
    { const [qx, qz] = wallPoint(room, (back + 1) % 4, -(((back + 1) % 2 ? d : w) / 2) + 1.4); shelfUnit(W, c, qx, fy, qz, (back + 1) % 4, 2, 1.9, wood, r); }
    picture(b, sx + tx * 2.4 + nx * .7, fy + 1.6, sz + tz * 2.4 + nz * .7, back, .8, .6, wood, pick(r, ['#8ebbb0', '#d9a53a', '#b48c9c']));
    plant(b, room.minX + .5, fy, room.minZ + .5, 1.1);
    lampHang(b, cx, fy + 2.25, fy + 1.95, cz, pick(r, ['#e9c04b', '#f1e8d2', '#c9524a']));
    if (r() > .5) { // upright piano: the surprise in a third of the living rooms
      const px = cx + tx * (((back % 2 ? d : w) / 2) - .85), pz = cz + tz * (((back % 2 ? d : w) / 2) - .85), pa = (back + 1) % 4 * Math.PI / 2;
      b.box(px, fy + .65, pz, 1.5, 1.3, .6, '#2b2622', pa); b.box(px - Math.sin(pa) * .32, fy + .78, pz - Math.cos(pa) * .32, 1.3, .06, .3, '#f3ead6', pa); for (let k = 0; k < 9; k++) b.box(px - Math.sin(pa) * .4 + Math.cos(pa) * (-.6 + k * .15), fy + .82, pz - Math.cos(pa) * .4 - Math.sin(pa) * (-.6 + k * .15), .06, .03, .2, '#2b2622', pa);
      b.box(px - Math.sin(pa) * .9, fy + .5, pz - Math.cos(pa) * .9, .9, .08, .35, '#2b2622', pa); for (const s of [-.35, .35]) b.box(px - Math.sin(pa) * .9 + Math.cos(pa) * s, fy + .23, pz - Math.cos(pa) * .9 - Math.sin(pa) * s, .06, .46, .3, '#2b2622', pa);
      W.solid(c, px, fy + .65, pz, Math.abs(Math.cos(pa)) > .5 ? 1.5 : .6, 1.3, Math.abs(Math.cos(pa)) > .5 ? .6 : 1.5, { climbable: true, kind: 'piano' });
      person(c, px - Math.sin(pa) * 1.1, pz - Math.cos(pa) * 1.1, pa + Math.PI, pick(r, ['resident', 'grandma', 'kid']), fy, 'sit');
    } else person(c, ax - Math.sin(a - .6) * .1, az - Math.cos(a - .6) * .1, a - .6 + Math.PI, pick(r, ['resident', 'grandpa', 'parent']), fy, 'sit');
  },
  kitchen(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const unit = pick(r, ['#cbbfa3', '#8ea48c', '#e9e3d2', '#4f7f96']), top = pick(r, ['#5f6b66', '#e3dcc6', '#8d7f67']);
    const back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx;
    const half = back % 2 ? w / 2 : d / 2, len = Math.min((back % 2 ? d : w) - 1.2, 6), kx = cx + nx * (half - .35), kz = cz + nz * (half - .35);
    b.box(kx, fy + .45, kz, back % 2 ? .66 : len, .9, back % 2 ? len : .66, unit); b.box(kx, fy + .93, kz, back % 2 ? .72 : len + .05, .06, back % 2 ? len + .05 : .72, top);
    W.solid(c, kx, fy + .48, kz, back % 2 ? .72 : len, .98, back % 2 ? len : .72, { climbable: true, kind: 'counter' });
    b.box(kx, fy + 1.95, kz + nz * .15, back % 2 ? .4 : len - .6, .7, back % 2 ? len - .6 : .4, unit); // wall cupboards
    b.box(kx + tx * .9, fy + .95, kz + tz * .9, back % 2 ? .5 : .7, .06, back % 2 ? .7 : .5, '#a9c3c9'); b.cyl(kx + tx * .9 - nx * .1, fy + 1.1, kz + tz * .9 - nz * .1, .025, .3, '#8a9893'); // sink + tap
    b.box(kx - tx * 1.1, fy + .97, kz - tz * 1.1, .7, .04, .55, '#2f3331', a); for (let k = 0; k < 4; k++) b.cyl(kx - tx * 1.1 + (k % 2 ? .18 : -.18) * (back % 2 ? 0 : 1) + (back % 2 ? (k % 2 ? .18 : -.18) : 0), fy + 1, kz - tz * 1.1 + (k < 2 ? .14 : -.14), .1, .02, '#4a4f4c'); // hob
    b.cyl(kx - tx * 1.1 + tx * .2, fy + 1.12, kz - tz * 1.1 + tz * .2, .17, .22, '#8a9893'); b.cyl(kx - tx * 1.1 + tx * .2, fy + 1.25, kz - tz * 1.1 + tz * .2, .05, .3, '#2f3331'); // pan
    const fx = kx + tx * (len / 2 + .55), fz = kz + tz * (len / 2 + .55); b.box(fx, fy + .9, fz, .8, 1.8, .75, '#e9e3d2'); b.box(fx - nx * .39, fy + 1.1, fz - nz * .39, back % 2 ? .02 : .04, .5, back % 2 ? .04 : .02, '#8a9893'); W.solid(c, fx, fy + .9, fz, .8, 1.8, .75, { climbable: true, kind: 'fridge' });
    b.ball(kx + tx * .1, fy + 1.02, kz + tz * .1, .22, .06, .22, '#a78a62'); for (let k = 0; k < 5; k++) b.ball(kx + tx * .1 + Math.cos(k * 1.3) * .1, fy + 1.1, kz + tz * .1 + Math.sin(k * 1.3) * .1, .07, .07, .07, k % 2 ? '#d9544f' : '#6f9a4f');
    for (let k = 0; k < 3; k++) b.cyl(kx + tx * (-2 + k * .25), fy + 1.5, kz + tz * (-2 + k * .25), .06, .04, '#4a4f4c'), b.cyl(kx + tx * (-2 + k * .25), fy + 1.32, kz + tz * (-2 + k * .25), .14, .32, pick(r, ['#8a9893', '#c9524a', '#e3dcc6'])); // jars
    table(W, c, cx - nx * .8, fy, cz - nz * .8, back % 2 ? 1 : 1.7, back % 2 ? 1.7 : 1, '#e3dcc6', pick(r, WOOD));
    for (const s of [-1, 1]) chair(W, c, cx - nx * .8 + nx * s * (back % 2 ? .85 : .75), fy, cz - nz * .8 + nz * s * (back % 2 ? .75 : .85), a + (s > 0 ? Math.PI : 0), pick(r, WOOD));
    b.cyl(cx - nx * .8, fy + .8, cz - nz * .8, .12, .06, '#f1e8d2'); b.box(cx - nx * .8 + .3, fy + .8, cz - nz * .8, .14, .05, .2, '#c9524a');
    lampHang(b, cx - nx * .8, fy + 2.25, fy + 1.75, cz - nz * .8, '#f1e8d2');
    picture(b, kx - tx * 2.4 + nx * .3, fy + 1.55, kz - tz * 2.4 + nz * .3, back, .5, .5, '#2f3331', '#d9a53a');
    person(c, kx - nx * .9 - tx * 1.1, kz - nz * .9 - tz * 1.1, a, pick(r, ['resident', 'grandma', 'parent']), fy);
    if (r() > .5) person(c, cx - nx * .8 + nx * (back % 2 ? .85 : .75), cz - nz * .8 + nz * (back % 2 ? .75 : .85), a + Math.PI, 'kid', fy, 'sit');
  },
  bedroom(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const quilt = pick(r, CLOTH), wood = pick(r, WOOD);
    const back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx, half = back % 2 ? w / 2 : d / 2;
    const bx = cx + nx * (half - 1.15), bz = cz + nz * (half - 1.15), wide = r() > .4;
    bed(W, c, bx, fy, bz, a, wide ? 1.7 : 1.1, 2.2, quilt, wood);
    for (const s of [-1, 1]) { const tx2 = bx + tx * s * (wide ? 1.2 : .9), tz2 = bz + tz * s * (wide ? 1.2 : .9); b.box(tx2 + nx * .7, fy + .28, tz2 + nz * .7, .5, .56, .5, wood); if (s > 0) { b.cyl(tx2 + nx * .7, fy + .7, tz2 + nz * .7, .05, .3, '#4a4f4c'); b.add(GEO.cone, tx2 + nx * .7, fy + .92, tz2 + nz * .7, .2, .2, .2, '#e9c04b'); } else b.box(tx2 + nx * .7, fy + .6, tz2 + nz * .7, .25, .08, .2, pick(r, BOOKS)); }
    const wx = cx - nx * (half - .4) + tx * 1.5, wz = cz - nz * (half - .4) + tz * 1.5; b.box(wx, fy + 1, wz, back % 2 ? .7 : 1.3, 2, back % 2 ? 1.3 : .7, wood); b.box(wx - nx * .36, fy + 1, wz - nz * .36, back % 2 ? .02 : .05, 1.3, back % 2 ? .05 : .02, '#e3dcc6'); W.solid(c, wx, fy + 1, wz, back % 2 ? .7 : 1.3, 2, back % 2 ? 1.3 : .7, { climbable: true, kind: 'wardrobe' });
    rug(b, bx - nx * 1.8, fy, bz - nz * 1.8, 1.6, 1.1, '#c7b2d9');
    const chx = cx - nx * (half - .5) - tx * 1.6, chz = cz - nz * (half - .5) - tz * 1.6; b.box(chx, fy + .4, chz, back % 2 ? .5 : 1.1, .8, back % 2 ? 1.1 : .5, wood); b.box(chx, fy + 1.3, chz, back % 2 ? .04 : .6, .9, back % 2 ? .6 : .04, '#a9c3c9'); for (const yy of [.25, .55]) b.box(chx - nx * .26, fy + yy, chz - nz * .26, back % 2 ? .02 : .3, .04, back % 2 ? .3 : .02, '#d9a53a');
    W.solid(c, chx, fy + .4, chz, back % 2 ? .5 : 1.1, .8, back % 2 ? 1.1 : .5, { climbable: true, kind: 'chest' });
    picture(b, bx + nx * 1.1, fy + 1.7, bz + nz * 1.1, back, .9, .55, wood, pick(r, ['#8ebbb0', '#b48c9c', '#6f9a4f']));
    lampHang(b, cx, fy + 2.25, fy + 1.85, cz, '#f1e8d2');
    if (r() > .5) { b.box(bx - tx * .3, fy + .78, bz - tz * .3, .4, .14, .3, '#d9a53a', a); } // a folded jumper on the bed
    const sleepy = r() > .6; if (sleepy) person(c, bx, bz, a + Math.PI, 'grandpa', fy + .6, 'sit'); else person(c, chx - nx * .9, chz - nz * .9, a, pick(r, ['resident', 'kid']), fy);
  },
  study(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const wood = pick(r, WOOD), back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx, half = back % 2 ? w / 2 : d / 2;
    const dx = cx + nx * (half - .8), dz = cz + nz * (half - .8);
    b.box(dx, fy + .74, dz, back % 2 ? .8 : 1.8, .06, back % 2 ? 1.8 : .8, wood); for (const s of [-1, 1]) b.box(dx + tx * s * .8, fy + .36, dz + tz * s * .8, back % 2 ? .7 : .12, .72, back % 2 ? .12 : .7, wood);
    W.solid(c, dx, fy + .39, dz, back % 2 ? .8 : 1.8, .78, back % 2 ? 1.8 : .8, { climbable: true, kind: 'desk' });
    b.cyl(dx + tx * .6, fy + .8, dz + tz * .6, .05, .1, '#4a4f4c'); b.beam([dx + tx * .6, fy + .82, dz + tz * .6], [dx + tx * .45, fy + 1.15, dz + tz * .45], .015, '#4a4f4c'); b.add(GEO.cone, dx + tx * .4, fy + 1.12, dz + tz * .4, .14, .16, .14, '#6f9a4f');
    b.box(dx - tx * .2, fy + .79, dz - tz * .2, .35, .04, .25, '#f3ead6', a); b.box(dx - tx * .6, fy + .83, dz - tz * .6, .22, .12, .28, pick(r, BOOKS), a); b.cyl(dx - tx * .35 + nx * .25, fy + .83, dz - tz * .35 + nz * .25, .05, .12, '#4f7f96');
    chair(W, c, dx - nx * .8, fy, dz - nz * .8, a + Math.PI, wood);
    { const [qx, qz] = wallPoint(room, (back + 1) % 4, 0); shelfUnit(W, c, qx, fy, qz, (back + 1) % 4, Math.min(((back + 1) % 2 ? d : w) - 1, 4), 2.1, wood, r); }
    { const [qx, qz] = wallPoint(room, (back + 3) % 4, 0); shelfUnit(W, c, qx, fy, qz, (back + 3) % 4, Math.min(((back + 3) % 2 ? d : w) - 1, 3), 1.4, wood, r); }
    const gx = dx + tx * 1.9, gz = dz + tz * 1.9; b.cyl(gx, fy + .35, gz, .22, .7, wood); b.ball(gx, fy + 1.05, gz, .3, .3, .3, '#4f7f96'); b.ball(gx + .1, fy + 1.12, gz - .08, .14, .12, .12, '#6f9a4f'); b.ball(gx - .12, fy + .95, gz + .1, .1, .12, .1, '#6f9a4f'); // globe
    const ax = cx - nx * (half - 1) - tx * 1.4, az = cz - nz * (half - 1) - tz * 1.4; b.box(ax, fy + .3, az, .9, .6, .9, pick(r, CLOTH), a); b.box(ax - nx * .35, fy + .75, az - nz * .35, back % 2 ? .2 : .9, .5, back % 2 ? .9 : .2, pick(r, CLOTH)); W.solid(c, ax, fy + .35, az, .95, .7, .95, { climbable: false, kind: 'chair' });
    rug(b, cx, fy, cz, 2.4, 1.8, '#8f5f4e');
    for (let k = 0; k < 3; k++) b.box(ax + tx * .9, fy + .1 + k * .2, az + tz * .9, .4, .2, .3, pick(r, BOOKS), k * .3); // a stack on the floor
    lampHang(b, cx, fy + 2.25, fy + 1.85, cz, '#6f9a4f');
    person(c, dx - nx * .75, dz - nz * .75, a, pick(r, ['suit', 'resident', 'grandpa']), fy, 'sit');
  },
  workshop(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx, half = back % 2 ? w / 2 : d / 2;
    const len = Math.min((back % 2 ? d : w) - 1.5, 4.5), bx = cx + nx * (half - .45), bz = cz + nz * (half - .45);
    b.box(bx, fy + .85, bz, back % 2 ? .8 : len, .1, back % 2 ? len : .8, '#a78a62'); for (const s of [-1, 1]) for (const e of [-1, 1]) b.box(bx + tx * s * (len / 2 - .2) + nx * e * .3, fy + .4, bz + tz * s * (len / 2 - .2) + nz * e * .3, .1, .8, .1, '#6d5a44');
    W.solid(c, bx, fy + .45, bz, back % 2 ? .8 : len, .9, back % 2 ? len : .8, { climbable: true, kind: 'bench' });
    b.box(bx + tx * (len / 2 - .5), fy + 1.05, bz + tz * (len / 2 - .5), .3, .3, .25, '#4a4f4c', a); b.cyl(bx + tx * (len / 2 - .5) - nx * .25, fy + 1.05, bz + tz * (len / 2 - .5) - nz * .25, .04, .3, '#8a9893', Math.PI / 2 * (back % 2 ? 0 : 1), Math.PI / 2 * (back % 2 ? 1 : 0)); // vice
    for (let k = 0; k < 4; k++) b.cyl(bx - tx * (len / 2 - .4 - k * .3), fy + 1, bz - tz * (len / 2 - .4 - k * .3), .08, .2, pick(r, ['#c9524a', '#8a9893', '#e9c04b'])); // tins
    b.box(bx + nx * .38, fy + 1.9, bz + nz * .38, back % 2 ? .05 : len, 1.1, back % 2 ? len : .05, '#cbbfa3'); // pegboard
    for (let k = 0; k < 8; k++) { const u = -len / 2 + .4 + k * (len - .8) / 7; b.box(bx + nx * .33 + tx * u, fy + 1.7 + (k % 3) * .22, bz + nz * .33 + tz * u, back % 2 ? .05 : .06, .5, back % 2 ? .06 : .05, '#8d7f67'); b.box(bx + nx * .33 + tx * u, fy + 1.98 + (k % 3) * .22, bz + nz * .33 + tz * u, back % 2 ? .05 : .22, .1, back % 2 ? .22 : .05, '#4a4f4c'); }
    // Bicycle on a stand: two wheels, a frame, saddle and bars.
    const kx = cx - nx * (half - 1.2) + tx * 1.2, kz = cz - nz * (half - 1.2) + tz * 1.2, ka = a + Math.PI / 2;
    for (const s of [-.55, .55]) b.add(GEO.torus, kx + Math.cos(ka) * s, fy + .36, kz - Math.sin(ka) * s, .34, .34, .34, '#2f3331', 0, ka + Math.PI / 2);
    b.beam([kx + Math.cos(ka) * .55, fy + .36, kz - Math.sin(ka) * .55], [kx + Math.cos(ka) * .1, fy + .85, kz - Math.sin(ka) * .1], .025, '#c9524a'); b.beam([kx - Math.cos(ka) * .55, fy + .36, kz + Math.sin(ka) * .55], [kx - Math.cos(ka) * .15, fy + .8, kz + Math.sin(ka) * .15], .025, '#c9524a');
    b.beam([kx + Math.cos(ka) * .1, fy + .85, kz - Math.sin(ka) * .1], [kx - Math.cos(ka) * .15, fy + .8, kz + Math.sin(ka) * .15], .025, '#c9524a'); b.box(kx - Math.cos(ka) * .15, fy + .86, kz + Math.sin(ka) * .15, .25, .06, .12, '#2b2622', ka); b.box(kx + Math.cos(ka) * .1, fy + .95, kz - Math.sin(ka) * .1, .06, .04, .45, '#8a9893', ka);
    W.solid(c, kx, fy + .4, kz, Math.abs(Math.cos(ka)) > .5 ? 1.5 : .4, .8, Math.abs(Math.cos(ka)) > .5 ? .4 : 1.5, { climbable: false, kind: 'bike' });
    for (let k = 0; k < 3; k++) W.crate(c, room.minX + .55 + (k % 2) * .05, fy + .4 + Math.floor(k / 2) * .8, room.maxZ - .55 - (k % 2) * .9, .8);
    const sx = cx - nx * (half - .4) - tx * 1.8, sz = cz - nz * (half - .4) - tz * 1.8; b.box(sx, fy + .9, sz, back % 2 ? .4 : 1.6, 1.8, back % 2 ? 1.6 : .4, '#8a9893'); for (let k = 0; k < 4; k++) for (let j = 0; j < 3; j++) b.box(sx - nx * .05 + tx * (-.5 + j * .5), fy + .3 + k * .42, sz - nz * .05 + tz * (-.5 + j * .5), .3, .26, .3, pick(r, ['#c7a97b', '#d9a53a', '#8f5f4e', '#4f7f96'])); W.solid(c, sx, fy + .9, sz, back % 2 ? .45 : 1.6, 1.8, back % 2 ? 1.6 : .45, { climbable: true, kind: 'shelf' });
    b.box(cx, fy + .02, cz, 2.2, .02, 1.6, '#a39c88'); b.cyl(cx + .5, fy + .05, cz + .3, .2, .03, '#6a6f6c'); // oil stain on a mat
    lampHang(b, bx - nx * .4, fy + 2.25, fy + 1.9, bz - nz * .4, '#8a9893');
    person(c, bx - nx * .75, bz - nz * .75, a, pick(r, ['worker', 'uncle', 'grandpa']), fy);
  },
  bakery(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx, half = back % 2 ? w / 2 : d / 2;
    const len = Math.min((back % 2 ? d : w) - 1.5, 5), kx = cx + nx * (half - 2.2), kz = cz + nz * (half - 2.2);
    b.box(kx, fy + .5, kz, back % 2 ? 1 : len, 1, back % 2 ? len : 1, '#6d5a44'); b.box(kx, fy + 1.02, kz, back % 2 ? 1.2 : len + .1, .08, back % 2 ? len + .1 : 1.2, '#e3dcc6'); W.solid(c, kx, fy + .53, kz, back % 2 ? 1.2 : len, 1.06, back % 2 ? len : 1.2, { climbable: false, kind: 'counter' });
    b.box(kx - nx * .55, fy + 1.3, kz - nz * .55, back % 2 ? .03 : len - .4, .5, back % 2 ? len - .4 : .03, '#a9c3c9'); // glass front
    for (let k = 0; k < 7; k++) { const u = -len / 2 + .5 + k * (len - 1) / 6; const wx = kx + tx * u, wz = kz + tz * u; b.box(wx, fy + 1.1, wz, .36, .1, .5, '#c7a97b', a); for (let j = 0; j < 3; j++) b.ball(wx + nx * (j - 1) * .13, fy + 1.19, wz + nz * (j - 1) * .13, .09, .07, .13, k % 3 ? '#d9a53a' : '#b07a60'); }
    const ox = cx + nx * (half - .6), oz = cz + nz * (half - .6); b.box(ox, fy + 1.1, oz, back % 2 ? 1.1 : 3, 2.2, back % 2 ? 3 : 1.1, '#9a6b55'); b.box(ox - nx * .56, fy + .9, oz - nz * .56, back % 2 ? .02 : 1.2, .8, back % 2 ? 1.2 : .02, '#2f3331'); b.box(ox - nx * .57, fy + .9, oz - nz * .57, back % 2 ? .01 : .9, .5, back % 2 ? .9 : .01, '#e2733f'); W.solid(c, ox, fy + 1.1, oz, back % 2 ? 1.1 : 3, 2.2, back % 2 ? 3 : 1.1, { climbable: true, kind: 'oven' });
    for (let k = 0; k < 3; k++) { const sx = room.minX + .6 + (k % 2) * .5, sz = room.minZ + .7 + Math.floor(k / 2) * .6; b.ball(sx, fy + .3, sz, .3, .32, .3, '#e9e3d2'); b.ball(sx, fy + .62, sz, .14, .1, .14, '#cbbfa3'); } // flour sacks
    b.box(cx - nx * (half - .3) + tx * 1.5, fy + 1.4, cz - nz * (half - .3) + tz * 1.5, back % 2 ? .35 : 2.2, .06, back % 2 ? 2.2 : .35, '#8d7f67'); for (let k = 0; k < 6; k++) b.ball(cx - nx * (half - .3) + tx * (.6 + k * .36), fy + 1.52, cz - nz * (half - .3) + tz * (.6 + k * .36), .12, .1, .22, '#c08a52'); // loaf shelf
    table(W, c, cx - nx * 1.2 - tx * 1.6, fy, cz - nz * 1.2 - tz * 1.6, .9, .9, '#e3dcc6', '#4a4f4c'); chair(W, c, cx - nx * 1.2 - tx * 2.4, fy, cz - nz * 1.2 - tz * 2.4, a + Math.PI / 2, '#8f5f4e');
    b.cyl(cx - nx * 1.2 - tx * 1.6, fy + .82, cz - nz * 1.2 - tz * 1.6, .18, .05, '#f1e8d2'); b.ball(cx - nx * 1.2 - tx * 1.6, fy + .9, cz - nz * 1.2 - tz * 1.6, .1, .08, .14, '#b07a60');
    lampHang(b, kx - nx * 1.2, fy + 2.25, fy + 1.95, kz - nz * 1.2, '#e9c04b');
    person(c, kx + nx * .9, kz + nz * .9, a + Math.PI, 'vendor', fy); person(c, kx - nx * 1.3 + tx * .6, kz - nz * 1.3 + tz * .6, a, pick(r, ['customer', 'grandma', 'kid']), fy);
  },
  nursery(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx, half = back % 2 ? w / 2 : d / 2;
    const bx = cx + nx * (half - 1.1) + tx * 1.2, bz = cz + nz * (half - 1.1) + tz * 1.2;
    bed(W, c, bx, fy, bz, a, 1, 2, pick(r, ['#4f7f96', '#c9524a']), '#e9e3d2');
    b.box(bx, fy + 1.45, bz, Math.abs(Math.cos(a)) > .5 ? 1 : 2, .14, Math.abs(Math.cos(a)) > .5 ? 2 : 1, '#e9e3d2'); b.box(bx, fy + 1.62, bz, Math.abs(Math.cos(a)) > .5 ? .9 : 1.9, .2, Math.abs(Math.cos(a)) > .5 ? 1.9 : .9, pick(r, ['#6f9a4f', '#d9a53a']));
    for (const u of [-1, 1]) for (const v of [-1, 1]) b.box(bx + (Math.abs(Math.cos(a)) > .5 ? u * .45 : u * .95), fy + .95, bz + (Math.abs(Math.cos(a)) > .5 ? v * .95 : v * .45), .06, 1.1, .06, '#e9e3d2'); // bunk
    W.solid(c, bx, fy + 1.5, bz, Math.abs(Math.cos(a)) > .5 ? 1 : 2, .3, Math.abs(Math.cos(a)) > .5 ? 2 : 1, { climbable: true, kind: 'bed' });
    ladderBox(b, bx - tx * .55, fy, bz - tz * .55, a);
    rug(b, cx - nx * .5, fy, cz - nz * .5, 2, 2, '#e9c04b');
    for (let k = 0; k < 9; k++) { const ang = k * 2.1, rr = .3 + (k % 3) * .3; b.box(cx - nx * .5 + Math.cos(ang) * rr, fy + .11 + (k % 2) * .22, cz - nz * .5 + Math.sin(ang) * rr, .22, .22, .22, pick(r, ['#c9524a', '#4f7f96', '#e9c04b', '#6f9a4f']), ang); } // blocks
    table(W, c, cx - nx * (half - 1), fy - .25, cz - nz * (half - 1), 1.2, .7, '#f3ead6', '#c9524a'); for (const s of [-.4, .4]) chair(W, c, cx - nx * (half - 1) + tx * s, fy - .15, cz - nz * (half - 1) - nx * .6 + tz * s, a, '#4f7f96');
    for (let k = 0; k < 4; k++) picture(b, cx - nx * (half - .02) + tx * (-.9 + k * .6), fy + 1.5 + (k % 2) * .25, cz - nz * (half - .02) + tz * (-.9 + k * .6), (back + 2) % 4, .4, .35, '#f3ead6', pick(r, ['#e9c04b', '#8ebbb0', '#d9544f', '#c7b2d9']));
    const hx = cx + nx * (half - .7) - tx * 1.6, hz = cz + nz * (half - .7) - tz * 1.6; // rocking horse
    b.box(hx, fy + .55, hz, .7, .3, .25, '#d9a53a', a + Math.PI / 2); b.box(hx + tx * .4, fy + .75, hz + tz * .4, .25, .3, .2, '#d9a53a', a + Math.PI / 2); for (const s of [-.25, .25]) b.box(hx + tx * s, fy + .25, hz + tz * s, .06, .5, .35, '#8f5f4e', a + Math.PI / 2); b.add(GEO.cylinder, hx, fy + .05, hz, .4, .5, .4, '#8f5f4e', 0, a + Math.PI / 2, Math.PI / 2);
    W.solid(c, hx, fy + .4, hz, .8, .8, .8, { climbable: false, kind: 'toy' });
    lampHang(b, cx, fy + 2.25, fy + 1.9, cz, '#c9524a');
    person(c, cx - nx * .5 + tx * .9, cz - nz * .5 + tz * .9, a + Math.PI, 'kid', fy); if (r() > .5) person(c, cx - nx * (half - 1.3), cz - nz * (half - 1.3), a, 'parent', fy);
  },
  atelier(W, c, room, fy, r, doorSide) {
    const b = c.batch, cx = (room.minX + room.maxX) / 2, cz = (room.minZ + room.maxZ) / 2, w = room.maxX - room.minX, d = room.maxZ - room.minZ;
    const back = (doorSide + 2) % 4, a = back * Math.PI / 2, nx = Math.round(Math.sin(a)), nz = Math.round(Math.cos(a)), tx = nz, tz = -nx, half = back % 2 ? w / 2 : d / 2;
    const ex = cx + nx * (half - 1.6), ez = cz + nz * (half - 1.6);
    for (const s of [-.35, .35]) b.box(ex + tx * s + nx * .15, fy + .9, ez + tz * s + nz * .15, .05, 1.8, .05, '#a78a62', 0, 0, 0); b.box(ex - nx * .25, fy + .8, ez - nz * .25, .05, 1.6, .05, '#a78a62', nx * .3, 0, nz * .3);
    b.box(ex, fy + 1.15, ez, back % 2 ? .05 : 1, .8, back % 2 ? 1 : .05, '#f6f1e4'); b.box(ex - nx * .03, fy + 1.15, ez - nz * .03, back % 2 ? .01 : .7, .5, back % 2 ? .7 : .01, pick(r, ['#8ebbb0', '#d9a53a', '#b48c9c']));
    b.ball(ex - nx * .04, fy + 1.1, ez - nz * .04, .18, .22, .18, '#e9c04b'); // a sun, or a cat, on the canvas
    W.solid(c, ex, fy + .9, ez, back % 2 ? .6 : 1, 1.8, back % 2 ? 1 : .6, { climbable: false, kind: 'easel' });
    b.cyl(ex - nx * 1.1, fy + .25, ez - nz * 1.1, .2, .5, '#8d7f67'); b.cyl(ex - nx * 1.1, fy + .52, ez - nz * 1.1, .24, .04, '#8d7f67'); W.cylinderSolid(c, ex - nx * 1.1, fy, ez - nz * 1.1, .24, .55, { climbable: false, kind: 'stool' });
    const px = ex + tx * .9, pz = ez + tz * .9; b.box(px, fy + .35, pz, .5, .7, .5, '#a78a62'); for (let k = 0; k < 6; k++) b.cyl(px + Math.cos(k * 1.05) * .15, fy + .78, pz + Math.sin(k * 1.05) * .15, .05, .12, pick(r, BOOKS)); b.box(px, fy + .73, pz, .5, .04, .5, '#f3ead6'); // paints
    for (let k = 0; k < 4; k++) { const u = -1.5 + k; b.box(cx - nx * (half - .18) + tx * u, fy + .55, cz - nz * (half - .18) + tz * u, back % 2 ? .05 : .8, 1.1, back % 2 ? .8 : .05, '#f6f1e4', nx * .12 * (k % 2 ? 1 : -1)); b.box(cx - nx * (half - .22) + tx * u, fy + .55, cz - nz * (half - .22) + tz * u, back % 2 ? .01 : .6, .8, back % 2 ? .6 : .01, pick(r, ['#d9544f', '#6f9a4f', '#4f7f96', '#e9c04b', '#8ebbb0'])); } // canvases leaning on the wall
    for (let k = 0; k < 3; k++) { const [qx, qz] = wallPoint(room, (back + 1) % 4, (k - 1) * 1.1); picture(b, qx, fy + 1.6, qz, (back + 1) % 4, .6, .5, '#2f3331', pick(r, ['#8ebbb0', '#d9a53a', '#b48c9c'])); }
    b.box(cx, fy + .02, cz, 3, .02, 2.4, '#e3dcc6'); for (let k = 0; k < 7; k++) b.cyl(cx + (r() - .5) * 2.6, fy + .035, cz + (r() - .5) * 2, .1 + r() * .1, .01, pick(r, BOOKS)); // paint-spattered dust sheet
    table(W, c, cx - nx * .2 - tx * 1.8, fy, cz - nz * .2 - tz * 1.8, 1.4, .8, '#a78a62', '#4a4f4c'); b.cyl(cx - nx * .2 - tx * 1.8, fy + .85, cz - nz * .2 - tz * 1.8, .12, .16, '#8a9893'); for (let k = 0; k < 5; k++) b.box(cx - nx * .2 - tx * 1.8, fy + 1.05 + k * .02, cz - nz * .2 - tz * 1.8, .02, .3, .02, pick(r, BOOKS), 0, k, .3); // brushes in a jar
    plant(b, room.maxX - .5, fy, room.maxZ - .5, 1.3);
    lampHang(b, ex - nx * .6, fy + 2.25, fy + 1.9, ez - nz * .6, '#f1e8d2');
    person(c, ex - nx * 1.1, ez - nz * 1.1, a, pick(r, ['resident', 'grandma', 'suit']), fy, 'sit');
  }
};
function ladderBox(b, x, y, z, a) { for (const s of [-.2, .2]) b.box(x + Math.cos(a) * s, y + .75, z - Math.sin(a) * s, .05, 1.5, .05, '#e9e3d2'); for (let k = 0; k < 5; k++) b.box(x, y + .2 + k * .3, z, .45, .04, .04, '#e9e3d2', a); }

export const HOUSE_KITS = ['living', 'kitchen', 'bedroom', 'study', 'workshop', 'nursery', 'atelier'];
export const PLACE_NAMES = { living: 'a sitting room', kitchen: 'a kitchen', bedroom: 'a bedroom', study: 'a study', workshop: 'a workshop', bakery: 'the bakery', nursery: 'a nursery', atelier: 'a painter’s studio' };

// Split a house interior into two rooms with a partition and a doorway, and furnish each.
export function furnishHouse(W, c, inside, fy, ceil, r, doorSide, doorU, wallColor, id, forced = null) {
  const b = c.batch, w = inside.maxX - inside.minX, d = inside.maxZ - inside.minZ, alongX = w >= d; // partition runs along the shorter axis
  const kits = forced ? [forced, pick(r, HOUSE_KITS.filter(k => k !== forced))] : (() => { const a = pick(r, HOUSE_KITS); let k2 = pick(r, HOUSE_KITS); while (k2 === a) k2 = pick(r, HOUSE_KITS); return [a, k2]; })();
  // Partition position: keep the front door's room at least 5 m deep.
  let split;
  if (alongX) { split = inside.minX + w * (.45 + r() * .1); if (doorSide === 1) split = Math.min(split, inside.maxX - 5.5); if (doorSide === 3) split = Math.max(split, inside.minX + 5.5); }
  else { split = inside.minZ + d * (.45 + r() * .1); if (doorSide === 0) split = Math.min(split, inside.maxZ - 5.5); if (doorSide === 2) split = Math.max(split, inside.minZ + 5.5); }
  const gapAt = alongX ? inside.minZ + d * (.3 + r() * .4) : inside.minX + w * (.3 + r() * .4), t = .22, hh = ceil - fy;
  const partWall = (u0, u1, yy = fy + hh / 2, h = hh) => {
    const um = (u0 + u1) / 2, len = u1 - u0; if (len < .05) return;
    if (alongX) { b.box(split, yy, um, t, h, len, wallColor); W.solid(c, split, yy, um, t, h, len, { kind: 'wall', climbable: true, buildingId: id }); }
    else { b.box(um, yy, split, len, h, t, wallColor); W.solid(c, um, yy, split, len, h, t, { kind: 'wall', climbable: true, buildingId: id }); }
  };
  const lo = alongX ? inside.minZ : inside.minX, hi = alongX ? inside.maxZ : inside.maxX;
  partWall(lo, gapAt - .7); partWall(gapAt + .7, hi); partWall(gapAt - .75, gapAt + .75, fy + 2.1 + (hh - 2.1) / 2, hh - 2.1);
  for (const s of [-1, 1]) { if (alongX) b.box(split, fy + 1.05, gapAt + s * .74, t + .08, 2.1, .08, '#f1e8d2'); else b.box(gapAt + s * .74, fy + 1.05, split, .08, 2.1, t + .08, '#f1e8d2'); }
  const rooms = alongX ? [{ ...inside, maxX: split - t / 2 }, { ...inside, minX: split + t / 2 }] : [{ ...inside, maxZ: split - t / 2 }, { ...inside, minZ: split + t / 2 }];
  // The room the front door opens into is index 0 (kits[0]); figure out which half that is.
  const doorRoom = alongX ? (doorSide === 1 ? 1 : doorSide === 3 ? 0 : (doorU + (inside.minX + inside.maxX) / 2 > split ? 1 : 0)) : (doorSide === 0 ? 1 : doorSide === 2 ? 0 : (doorU + (inside.minZ + inside.maxZ) / 2 > split ? 1 : 0));
  const names = [];
  rooms.forEach((room, i) => {
    const kit = kits[i === doorRoom ? 0 : 1];
    // Treat the partition as "the door side" for the inner room so furniture lines the far wall.
    let side = i === doorRoom ? doorSide : (alongX ? (i === 0 ? 1 : 3) : (i === 0 ? 0 : 2));
    // Keep bulky pieces clear of the doorway itself if it faces straight in.
    KITS[kit](W, c, room, fy, r, side);
    names.push({ kit, room });
  });
  return names;
}
