// Small joys: shinies to find on rooftops and ledges, things to knock over, and hats to wear.
// Everything here is cosmetic to the world but important to the cat.
import * as THREE from 'three';
import { GEO, hash, random, CHUNK } from './world.js';
import { CAT } from './physics.js';

const TAU = Math.PI * 2;
const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: .55, flatShading: true, ...extra });

// ---- Shinies -------------------------------------------------------------------------------
export const SHINY_KINDS = [
  { kind: 'cap', name: 'a bottle cap', line: 'A bottle cap. Still shiny.', color: '#d9b24a', geo: GEO.cylinder, scale: [.11, .035, .11] },
  { kind: 'coin', name: 'an old coin', line: 'An old coin, worn smooth.', color: '#e6c766', geo: GEO.cylinder, scale: [.09, .02, .09] },
  { kind: 'marble', name: 'a lost marble', line: 'A marble. Somebody will miss this.', color: '#7ec8e3', geo: GEO.sphere, scale: [.09, .09, .09] },
  { kind: 'key', name: 'a brass key', line: 'A little brass key. To what?', color: '#c9a35c', geo: GEO.box, scale: [.05, .03, .22] },
  { kind: 'button', name: 'a pearl button', line: 'A pearl button from a good coat.', color: '#f1ead8', geo: GEO.cylinder, scale: [.08, .025, .08] },
  { kind: 'ring', name: 'a silver ring', line: 'A silver ring. Finders keepers.', color: '#dfe3e6', geo: GEO.torus, scale: [.08, .08, .08] },
  { kind: 'wrapper', name: 'a foil wrapper', line: 'A foil wrapper, folded into a star.', color: '#e07a7a', geo: GEO.box, scale: [.16, .01, .12] },
  { kind: 'bell', name: 'a tiny bell', line: 'A tiny bell. It still rings.', color: '#d8b35a', geo: GEO.cone, scale: [.09, .11, .09] },
];
const shinyMaterials = new Map();
const SHINY_SCALE = 1.8;
let glowMaterial = null;
const shinyMaterial = k => { if (!shinyMaterials.has(k.kind)) shinyMaterials.set(k.kind, std(k.color, { metalness: .35, roughness: .3, emissive: k.color, emissiveIntensity: .45 })); return shinyMaterials.get(k.kind); };

// ---- Knock-overs ---------------------------------------------------------------------------
const PROP_KINDS = {
  cone: { r: .2, h: .55, sound: 'plastic', build: g => { g.add(part(GEO.cone, '#e5742f', 0, .28, 0, .2, .55, .2)); g.add(part(GEO.box, '#e5742f', 0, .02, 0, .42, .04, .42)); g.add(part(GEO.cylinder, '#f3eee0', 0, .3, 0, .14, .07, .14)); } },
  bin: { r: .26, h: .72, sound: 'metal', build: g => { g.add(part(GEO.cylinder, '#8d9693', 0, .36, 0, .26, .72, .26)); g.add(part(GEO.cylinder, '#6f7976', 0, .74, 0, .28, .05, .28)); g.add(part(GEO.box, '#6f7976', 0, .8, 0, .1, .08, .22)); } },
  bucket: { r: .19, h: .32, sound: 'metal', build: g => { g.add(part(GEO.tapered, '#6a9ab8', 0, .16, 0, .22, .32, .22)); g.add(part(GEO.torus, '#5a6b74', 0, .32, 0, .2, .2, .2, Math.PI / 2)); } },
  bottle: { r: .06, h: .34, sound: 'glass', build: g => { g.add(part(GEO.cylinder, '#5c8a5a', 0, .13, 0, .06, .26, .06)); g.add(part(GEO.cylinder, '#5c8a5a', 0, .3, 0, .025, .1, .025)); g.add(part(GEO.cylinder, '#d9b24a', 0, .35, 0, .03, .02, .03)); } },
  can: { r: .05, h: .13, sound: 'metal', build: g => { g.add(part(GEO.cylinder, '#c94a3f', 0, .065, 0, .05, .13, .05)); g.add(part(GEO.cylinder, '#d8d8d2', 0, .13, 0, .045, .01, .045)); } },
  pot: { r: .18, h: .36, sound: 'clay', build: g => { g.add(part(GEO.pot, '#b8693f', 0, .14, 0, .19, .28, .19)); g.add(part(GEO.cylinder, '#4b3a2c', 0, .27, 0, .15, .04, .15)); g.add(part(GEO.sphere, '#6d9a52', 0, .38, 0, .17, .14, .17)); g.add(part(GEO.sphere, '#e36b8a', .07, .46, .03, .05, .05, .05)); g.add(part(GEO.sphere, '#f4d35e', -.06, .45, -.04, .045, .045, .045)); } },
  crate: { r: .26, h: .34, sound: 'wood', build: g => { g.add(part(GEO.box, '#c7a97b', 0, .17, 0, .5, .34, .42)); g.add(part(GEO.box, '#a98a5e', 0, .17, .215, .5, .05, .02)); g.add(part(GEO.box, '#a98a5e', 0, .17, -.215, .5, .05, .02)); } },
  jug: { r: .09, h: .3, sound: 'glass', build: g => { g.add(part(GEO.tapered, '#e8e2d2', 0, .15, 0, .1, .3, .1)); g.add(part(GEO.torus, '#e8e2d2', .1, .17, 0, .06, .06, .06, 0, Math.PI / 2)); } },
};
const propMaterials = new Map();
const propMaterial = color => { if (!propMaterials.has(color)) propMaterials.set(color, std(color, { roughness: .8 })); return propMaterials.get(color); };
function part(geo, color, x, y, z, sx, sy, sz, rx = 0, rz = 0) {
  const m = new THREE.Mesh(geo, propMaterial(color)); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.rotation.set(rx, 0, rz); m.castShadow = true; return m;
}
const HECKLES = ['Hey!', 'Oi — cat!', 'Honestly…', 'Careful, puss.', 'Was that you?', 'Cats.', 'Not again.', 'Well, that’s that.'];

// ---- Hats ---------------------------------------------------------------------------------
// Each hat is built from primitives and sits on the cat's head group. `need` is the number of
// shinies you must have found; nothing is spent.
export const HATS = [
  { id: 'none', name: 'No hat', need: 0, blurb: 'Fur, as nature intended.' },
  { id: 'leaf', name: 'Leaf', need: 1, blurb: 'A big leaf. It counts.', build: g => { const l = part(GEO.sphere, '#7aa04f', 0, .02, .02, .3, .03, .24); l.rotation.z = .25; g.add(l); g.add(part(GEO.cylinder, '#5e7a3a', .1, .03, -.2, .012, .18, .012, 1.3)); } },
  { id: 'party', name: 'Party cone', need: 4, blurb: 'Somebody is having a birthday.', build: g => { g.add(part(GEO.cone, '#f08cae', 0, .19, 0, .14, .4, .14)); g.add(part(GEO.cone, '#fff4e6', 0, .3, 0, .075, .18, .075)); g.add(part(GEO.sphere, '#f4d35e', 0, .4, 0, .045, .045, .045)); } },
  { id: 'beret', name: 'Beret', need: 8, blurb: 'Très chat.', build: g => { const b = part(GEO.sphere, '#b8433e', .03, .03, 0, .28, .09, .26); g.add(b); g.add(part(GEO.cylinder, '#8d2e2a', .04, .12, 0, .015, .05, .015)); } },
  { id: 'bucket', name: 'Bucket hat', need: 12, blurb: 'Keeps the sun off the ears, mostly.', build: g => { g.add(part(GEO.tapered, '#e3c56a', 0, .1, 0, .3, .2, .3)); g.add(part(GEO.cylinder, '#e3c56a', 0, .0, 0, .36, .03, .36)); } },
  { id: 'straw', name: 'Straw hat', need: 16, blurb: 'For gardens and long afternoons.', build: g => { g.add(part(GEO.cylinder, '#e9d79a', 0, .09, 0, .24, .18, .24)); g.add(part(GEO.cylinder, '#e9d79a', 0, .0, 0, .44, .025, .44)); g.add(part(GEO.cylinder, '#5f7a9a', 0, .05, 0, .25, .04, .25)); } },
  { id: 'chef', name: 'Chef’s hat', need: 22, blurb: 'The kitchen is yours now.', build: g => { g.add(part(GEO.cylinder, '#f7f3ea', 0, .12, 0, .22, .24, .22)); g.add(part(GEO.sphere, '#f7f3ea', 0, .3, 0, .27, .17, .27)); } },
  { id: 'flowers', name: 'Flower crown', need: 28, blurb: 'Made by a kind child at the market.', build: g => { g.add(part(GEO.torus, '#6a8f4a', 0, .03, 0, .26, .26, .26, Math.PI / 2)); for (let i = 0; i < 7; i++) { const a = i / 7 * TAU; g.add(part(GEO.sphere, ['#f08cae', '#fff4e6', '#f4d35e'][i % 3], Math.cos(a) * .26, .07, Math.sin(a) * .26, .075, .065, .075)); } } },
  { id: 'tophat', name: 'Top hat', need: 36, blurb: 'Distinguished. Slightly too big.', build: g => { g.add(part(GEO.cylinder, '#2c2a2e', 0, .2, 0, .22, .4, .22)); g.add(part(GEO.cylinder, '#2c2a2e', 0, .0, 0, .36, .03, .36)); g.add(part(GEO.cylinder, '#b8433e', 0, .06, 0, .23, .06, .23)); } },
  { id: 'crown', name: 'Crown', need: 50, blurb: 'Ruler of every rooftop.', build: g => { g.add(part(GEO.cylinder, '#e0b64a', 0, .08, 0, .24, .16, .24)); for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; g.add(part(GEO.cone, '#e0b64a', Math.cos(a) * .2, .2, Math.sin(a) * .2, .06, .14, .06)); g.add(part(GEO.sphere, ['#c94a3f', '#5f7a9a', '#6d9a52'][i % 3], Math.cos(a) * .22, .1, Math.sin(a) * .22, .03, .03, .03)); } } },
];
export function buildHat(id) { return buildItem('hat', id); }

// ---- The rest of the wardrobe -------------------------------------------------------------
// Five slots that can all be worn at once. `need` is a shiny count; `kind` means "you must have
// found at least one of that shiny" (a bell for the bell collar, a coin for the monocle).
const glassMat = () => new THREE.MeshStandardMaterial({ color: '#9fd3e6', roughness: .15, metalness: .1, transparent: true, opacity: .45 });
const stripBox = (g, color, x, y, z, sx, sy, sz, rx = 0, rz = 0, ry = 0) => { const m = part(GEO.box, color, x, y, z, sx, sy, sz, rx, rz); m.rotation.y = ry; g.add(m); return m; };
export const WARDROBE = {
  hat: HATS,
  neck: [
    { id: 'none', name: 'Bare neck', need: 0, blurb: 'Nothing at all.' },
    { id: 'collar', name: 'Green collar', need: 0, blurb: 'The one you came with. The bell still rings.', build: g => { const c = part(GEO.torus, '#5d7463', 0, 0, 0, .26, .26, .26); c.rotation.x = Math.PI / 2 + .2; g.add(c); g.add(part(GEO.sphere, '#c9a35c', 0, -.16, .22, .055, .065, .055)); } },
    { id: 'bandana', name: 'Red bandana', need: 2, blurb: 'Tied at the back, like a proper rascal.', build: g => { const c = part(GEO.torus, '#c9524a', 0, 0, 0, .25, .25, .25); c.rotation.x = Math.PI / 2 + .2; g.add(c); const t = part(GEO.cone, '#c9524a', 0, -.2, .24, .22, .34, .06); t.rotation.x = Math.PI + .5; g.add(t); } },
    { id: 'bowtie', name: 'Bow tie', need: 6, blurb: 'For dinners, weddings and bins.', build: g => { const c = part(GEO.torus, '#2c2a2e', 0, 0, 0, .25, .25, .25); c.rotation.x = Math.PI / 2 + .2; g.add(c); for (const s of [-1, 1]) g.add(part(GEO.cone, '#7f5aa6', s * .13, -.1, .3, .09, .22, .05, 0, s * Math.PI / 2)); g.add(part(GEO.sphere, '#7f5aa6', 0, -.1, .3, .045, .045, .045)); } },
    { id: 'bell', name: 'Big brass bell', need: 0, kind: 'bell', blurb: 'You found the bell; now everyone can hear you coming.', build: g => { const c = part(GEO.torus, '#8d3b2f', 0, 0, 0, .26, .26, .26); c.rotation.x = Math.PI / 2 + .2; g.add(c); g.add(part(GEO.sphere, '#d8b35a', 0, -.19, .24, .1, .11, .1)); g.add(part(GEO.box, '#2c2a2e', 0, -.19, .33, .09, .02, .02)); } },
    { id: 'scarf', name: 'Striped scarf', need: 10, blurb: 'Knitted by somebody who loves you.', build: g => { const c = part(GEO.torus, '#e07a7a', 0, 0, 0, .27, .27, .27); c.scale.setScalar(.27); c.rotation.x = Math.PI / 2 + .2; g.add(c); for (let i = 0; i < 4; i++) g.add(part(GEO.box, i % 2 ? '#f1ead8' : '#e07a7a', -.18, -.12 - i * .1, .15, .12, .1, .05)); g.add(part(GEO.box, '#e07a7a', -.18, -.56, .15, .14, .06, .06)); } },
    { id: 'key', name: 'Key on a string', need: 0, kind: 'key', blurb: 'A little brass key on a loop of string. To what?', build: g => { const c = part(GEO.torus, '#8d8470', 0, 0, 0, .25, .25, .25); c.scale.setScalar(.25); c.rotation.x = Math.PI / 2 + .2; g.add(c); g.add(part(GEO.box, '#c9a35c', 0, -.3, .2, .04, .2, .03)); g.add(part(GEO.torus, '#c9a35c', 0, -.18, .2, .05, .05, .05)); g.add(part(GEO.box, '#c9a35c', .04, -.37, .2, .05, .03, .03)); } },
    { id: 'pendant', name: 'Silver pendant', need: 0, kind: 'ring', blurb: 'The silver ring, threaded on a chain.', build: g => { const c = part(GEO.torus, '#dfe3e6', 0, 0, 0, .25, .25, .25); c.scale.setScalar(.25); c.rotation.x = Math.PI / 2 + .2; g.add(c); const r = part(GEO.torus, '#dfe3e6', 0, -.26, .22, .07, .07, .07); g.add(r); } },
    { id: 'lei', name: 'Flower lei', need: 20, blurb: 'From a warm place. Smells of summer.', build: g => { for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; g.add(part(GEO.sphere, ['#f08cae', '#f4d35e', '#fff4e6', '#e07a7a'][i % 4], Math.sin(a) * .3, -.1 + Math.cos(a) * .08 - .08, .1 + Math.cos(a) * .3, .06, .05, .06)); } } },
    { id: 'ruff', name: 'Lace ruff', need: 32, blurb: 'Elizabethan. Takes up a lot of room.', build: g => { for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; const m = part(GEO.cylinder, '#f7f3ea', Math.sin(a) * .36, -.02, .12 + Math.cos(a) * .36, .09, .04, .09); m.rotation.x = .2; g.add(m); } } },
  ],
  eyes: [
    { id: 'none', name: 'Just eyes', need: 0, blurb: 'Green, and very good in the dark.' },
    { id: 'glasses', name: 'Round glasses', need: 3, blurb: 'For reading the small print on tins.', build: g => { for (const s of [-1, 1]) { g.add(part(GEO.torus, '#b8864a', s * .15, 0, 0, .085, .085, .085)); const l = new THREE.Mesh(GEO.cylinder, glassMat()); l.position.set(s * .15, 0, 0); l.scale.set(.08, .01, .08); l.rotation.x = Math.PI / 2; g.add(l); } g.add(part(GEO.box, '#b8864a', 0, 0, 0, .13, .012, .012)); for (const s of [-1, 1]) g.add(part(GEO.box, '#b8864a', s * .25, .02, -.14, .012, .012, .3)); } },
    { id: 'sunglasses', name: 'Sunglasses', need: 9, blurb: 'Too cool to chase string. Will still chase string.', build: g => { for (const s of [-1, 1]) g.add(part(GEO.box, '#2c2a2e', s * .15, 0, 0, .17, .11, .03)); g.add(part(GEO.box, '#2c2a2e', 0, .02, 0, .12, .02, .02)); for (const s of [-1, 1]) g.add(part(GEO.box, '#2c2a2e', s * .25, .02, -.14, .015, .015, .3)); } },
    { id: 'monocle', name: 'Monocle', need: 0, kind: 'coin', blurb: 'An old coin, polished thin. I say.', build: g => { g.add(part(GEO.torus, '#e6c766', .15, 0, 0, .085, .085, .085)); const l = new THREE.Mesh(GEO.cylinder, glassMat()); l.position.set(.15, 0, 0); l.scale.set(.08, .01, .08); l.rotation.x = Math.PI / 2; g.add(l); g.add(part(GEO.box, '#e6c766', .26, -.15, -.02, .01, .3, .01, 0, .35)); } },
    { id: 'eyepatch', name: 'Eyepatch', need: 14, blurb: 'Arr. Lost the eye to a seagull. (Not really.)', build: g => { g.add(part(GEO.sphere, '#2c2a2e', .15, 0, 0, .09, .08, .03)); const b = part(GEO.torus, '#2c2a2e', 0, .07, -.1, .3, .3, .3); b.scale.setScalar(.3); b.rotation.x = Math.PI / 2 - .3; g.add(b); } },
    { id: 'mask', name: 'Hero mask', need: 24, blurb: 'Nobody knows it is you. Everybody knows it is you.', build: g => { g.add(part(GEO.box, '#3f4a9a', 0, .01, -.02, .5, .13, .05)); for (const s of [-1, 1]) g.add(part(GEO.sphere, '#7fa05a', s * .15, .01, .02, .055, .05, .02)); for (const s of [-1, 1]) g.add(part(GEO.cone, '#3f4a9a', s * .3, .07, -.03, .05, .12, .04, 0, -s * .5)); } },
    { id: 'goggles', name: 'Flying goggles', need: 30, blurb: 'For the plane, the train, or a brisk day.', build: g => { for (const s of [-1, 1]) { g.add(part(GEO.cylinder, '#8a6a4c', s * .15, 0, 0, .1, .06, .1, Math.PI / 2)); const l = new THREE.Mesh(GEO.cylinder, glassMat()); l.position.set(s * .15, 0, .03); l.scale.set(.085, .01, .085); l.rotation.x = Math.PI / 2; g.add(l); } const b = part(GEO.torus, '#8a6a4c', 0, .05, -.1, .3, .3, .3); b.scale.setScalar(.3); b.rotation.x = Math.PI / 2 - .25; g.add(b); } },
  ],
  back: [
    { id: 'none', name: 'Nothing', need: 0, blurb: 'Just fur.' },
    { id: 'cape', name: 'Red cape', need: 5, blurb: 'It flaps. That is the whole point.', build: g => { const m = part(GEO.box, '#c9524a', 0, -.3, -.25, .48, .62, .03, .35); g.add(m); g.add(part(GEO.torus, '#e0b64a', 0, .02, .02, .22, .22, .22, Math.PI / 2 + .2)); g.userData.flap = m; } },
    { id: 'backpack', name: 'Tiny backpack', need: 11, blurb: 'Holds one biscuit and a leaf.', build: g => { g.add(part(GEO.box, '#5f7a9a', 0, -.05, -.08, .34, .32, .22)); g.add(part(GEO.box, '#4a6180', 0, .06, -.08, .34, .12, .24)); g.add(part(GEO.box, '#e0b64a', 0, -.08, .05, .08, .06, .04)); for (const s of [-1, 1]) g.add(part(GEO.box, '#4a6180', s * .12, -.08, .1, .04, .3, .04)); } },
    { id: 'wings', name: 'Butterfly wings', need: 18, blurb: 'Not for flying. For being looked at.', build: g => { for (const s of [-1, 1]) { const w1 = part(GEO.sphere, '#f08cae', s * .28, .12, -.1, .26, .2, .02); const w2 = part(GEO.sphere, '#f4d35e', s * .22, -.14, -.1, .18, .14, .02); g.add(w1, w2); g.add(part(GEO.sphere, '#fff4e6', s * .3, .14, -.08, .08, .06, .02)); } g.add(part(GEO.box, '#2c2a2e', 0, 0, -.1, .04, .4, .04)); } },
    { id: 'shell', name: 'Borrowed shell', need: 26, blurb: 'The tortoise said it was fine.', build: g => { g.add(part(GEO.sphere, '#7a6a3c', 0, -.02, -.1, .42, .3, .5)); for (let i = 0; i < 5; i++) { const a = i / 5 * TAU; g.add(part(GEO.sphere, '#9a8a50', Math.cos(a) * .22, .12, -.1 + Math.sin(a) * .28, .1, .06, .1)); } g.add(part(GEO.sphere, '#9a8a50', 0, .25, -.1, .13, .05, .15)); } },
    { id: 'jetpack', name: 'Jetpack', need: 40, blurb: 'Decorative. Probably decorative.', build: g => { for (const s of [-1, 1]) { g.add(part(GEO.cylinder, '#9aa49c', s * .13, -.08, -.14, .1, .4, .1)); g.add(part(GEO.cone, '#c9524a', s * .13, .16, -.14, .1, .12, .1)); g.add(part(GEO.cone, '#e9c04b', s * .13, -.32, -.14, .07, .12, .07, Math.PI)); } g.add(part(GEO.box, '#5c6b66', 0, 0, -.06, .3, .3, .08)); } },
  ],
  tail: [
    { id: 'none', name: 'Plain tail', need: 0, blurb: 'Expressive enough on its own.' },
    { id: 'bow', name: 'Ribbon bow', need: 2, blurb: 'Tied on by the baker’s daughter.', build: g => { for (const s of [-1, 1]) g.add(part(GEO.cone, '#f08cae', s * .11, .12, 0, .09, .2, .04, 0, s * Math.PI / 2)); g.add(part(GEO.sphere, '#f08cae', 0, .12, 0, .05, .05, .05)); } },
    { id: 'tailring', name: 'Tail ring', need: 0, kind: 'ring', blurb: 'The silver ring fits the tail better than a paw.', build: g => { g.add(part(GEO.torus, '#dfe3e6', 0, .1, 0, .09, .09, .09, Math.PI / 2)); } },
    { id: 'pompom', name: 'Pompom', need: 15, blurb: 'Fluffy. Draws attention from the kittens.', build: g => { g.add(part(GEO.sphere, '#fff4e6', 0, .22, 0, .14, .14, .14)); } },
    { id: 'bells', name: 'Tail bells', need: 0, kind: 'bell', blurb: 'Three tiny bells. No more sneaking.', build: g => { for (let i = 0; i < 3; i++) g.add(part(GEO.sphere, '#d8b35a', Math.sin(i * 2.1) * .08, .06 + i * .07, Math.cos(i * 2.1) * .08, .045, .05, .045)); } },
    { id: 'lantern', name: 'Tail lantern', need: 33, blurb: 'A paper lantern that glows at the tip. Festival-ready.', build: g => { const m = part(GEO.sphere, '#f4a259', 0, .24, 0, .11, .13, .11); m.material = new THREE.MeshStandardMaterial({ color: '#f4a259', emissive: '#f4a259', emissiveIntensity: .8, roughness: .6 }); g.add(m); g.add(part(GEO.cylinder, '#2c2a2e', 0, .39, 0, .03, .03, .03)); g.add(part(GEO.cylinder, '#2c2a2e', 0, .1, 0, .03, .03, .03)); } },
  ],
};
export const SLOTS = Object.keys(WARDROBE);
export const SLOT_NAMES = { hat: 'Hats', neck: 'Collars', eyes: 'Eyes', back: 'Backs', tail: 'Tails' };
export const DEFAULT_OUTFIT = Object.freeze({ hat: 'none', neck: 'collar', eyes: 'none', back: 'none', tail: 'none' });
export function findItem(slot, id) { return WARDROBE[slot]?.find(h => h.id === id) || null; }
export function buildItem(slot, id) {
  const item = findItem(slot, id); if (!item?.build) return null;
  const g = new THREE.Group(); item.build(g); g.traverse(o => { if (o.isMesh) o.castShadow = true; }); return g;
}
// Why an item is still locked, or null when it can be worn.
export function lockReason(item, found, counts) {
  if (item.kind && !(counts?.[item.kind] > 0)) return { kind: item.kind, name: SHINY_KINDS.find(k => k.kind === item.kind)?.name || item.kind };
  if (found < item.need) return { need: item.need - found };
  return null;
}

export class Fun {
  constructor(scene, world, physics, { collected = [], knocks = 0, prefix = '' } = {}) {
    this.scene = scene; this.world = world; this.physics = physics; this.prefix = prefix;
    this.collected = new Set(collected); this.knocks = knocks; this.tracked = new Map();
    this.onShiny = null; this.onKnock = null; this.time = 0; this.nearest = Infinity;
  }
  get found() { return this.collected.size; }

  // Give every newly loaded chunk its shinies and knock-overs; forget chunks that unloaded.
  sync() {
    for (const [key, c] of this.world.chunks) if (!this.tracked.has(key)) this.dress(c);
    for (const [key, t] of this.tracked) if (!this.world.chunks.has(key)) { this.scene.remove(t.group); this.tracked.delete(key); }
  }
  dress(c) {
    const rng = random(hash(c.cx, c.cz, this.world.seed, 1313)), ox = c.cx * CHUNK, oz = c.cz * CHUNK;
    const group = new THREE.Group(); group.name = `fun-${c.key}`; this.scene.add(group);
    const t = { group, shinies: [], props: [] }; this.tracked.set(c.key, t);
    const top = (x, z, ref = 80) => this.physics.support(x, z, ref);
    // Shiny spots: rooftops, tower tops, playground platforms, garden corners, and one on the pavement.
    const spots = [];
    const roofs = c.buildings.filter(b => b.kind !== 'floor').sort(() => rng() - .5).slice(0, 3);
    for (const b of roofs) spots.push([b.x + (rng() - .5) * b.w * .5, b.z + (rng() - .5) * b.d * .5, 'roof']);
    for (const l of c.landmarks) {
      if (l.kind === 'tower') spots.push([l.x + (rng() - .5) * 3, l.z + (rng() - .5) * 3, 'tower']);
      else if (l.kind === 'playground') spots.push([l.x + (rng() - .5) * 8, l.z + (rng() - .5) * 8, 'play']);
      else if (l.kind === 'market' || l.kind === 'works') spots.push([l.x + (rng() - .5) * 10, l.z + (rng() - .5) * 10, 'ground']);
      else if (l.kind === 'station') spots.push([l.x + 7.5, l.z + 3.2 + (rng() - .5) * 8, 'roof']);
      else if (l.kind === 'allotments') spots.push([l.x - 6.5 + (rng() - .5) * 2, l.z + 9, 'roof']);
    }
    for (const p of c.parks) { const a = rng() * TAU; spots.push([p.x + Math.cos(a) * 7, p.z + Math.sin(a) * 7, 'ground']); }
    spots.push([ox + (rng() > .5 ? 28.45 : -28.45), oz + (rng() - .5) * 40, 'ground']);
    spots.forEach(([x, z, where], i) => {
      const s = top(x, z); if (!s || s.y > 60 || (where === 'ground' && s.y > 1.2)) return;
      const id = `${this.prefix}${c.key}:s${i}`; if (this.collected.has(id)) return;
      const kind = SHINY_KINDS[hash(c.cx * 8 + i, c.cz, this.world.seed, 1717) % SHINY_KINDS.length];
      const mesh = new THREE.Mesh(kind.geo, shinyMaterial(kind)); mesh.scale.set(...kind.scale.map(v => v * SHINY_SCALE)); mesh.castShadow = true;
      if (kind.kind === 'ring') mesh.rotation.x = Math.PI / 2;
      const y = s.y + .22; mesh.position.set(x, y, z); group.add(mesh);
      glowMaterial ||= new THREE.MeshBasicMaterial({ color: '#fff1b8', transparent: true, opacity: .2, depthWrite: false });
      const glow = new THREE.Mesh(GEO.softSphere, glowMaterial); glow.scale.setScalar(.18); glow.position.set(x, y, z); group.add(glow);
      t.shinies.push({ id, kind, mesh, glow, x, y, z, phase: rng() * TAU });
    });
    // Knock-overs along the pavements and footpaths, never on top of something else.
    const n = 6 + Math.floor(rng() * 4), kinds = Object.keys(PROP_KINDS);
    for (let i = 0; i < n; i++) {
      const side = rng() > .5 ? 1 : -1, along = (rng() - .5) * 52;
      const [x, z] = rng() > .5 ? [ox + side * (28.45 + (rng() - .5) * .8), oz + along] : [ox + along, oz + side * (28.45 + (rng() - .5) * .8)];
      if (Math.abs(Math.abs(x - ox) - 27) < 1.6 && Math.abs(z - oz - 14) < 1.8) continue; // benches
      if (Math.abs(Math.abs(x - ox) - 27.2) < 1 && Math.abs(z - oz + 27.2) < 1) continue; // lamps
      const s = top(x, z, 3); if (!s || s.y > .3) continue;
      const kindName = kinds[Math.floor(rng() * kinds.length)], kind = PROP_KINDS[kindName];
      const g = new THREE.Group(); kind.build(g); g.position.set(x, s.y, z); g.rotation.y = rng() * TAU; group.add(g);
      t.props.push({ kind: kindName, def: kind, g, x, y: s.y, z, vx: 0, vy: 0, vz: 0, state: 'up', ang: 0, spin: 0, axis: new THREE.Vector3(1, 0, 0), yaw: g.rotation.y, rest: 0 });
    }
  }

  update(dt, player, people) {
    this.time += dt; const t = this.time, px = player.pos.x, pz = player.pos.z, py = player.pos.y;
    this.nearest = Infinity;
    const ccx = Math.floor((px + CHUNK / 2) / CHUNK), ccz = Math.floor((pz + CHUNK / 2) / CHUNK);
    for (const [, tr] of this.tracked) {
      if (!tr.shinies.length && !tr.props.length) continue;
      const c = this.world.chunks.get(tr.group.name.slice(4)); if (!c || Math.abs(c.cx - ccx) > 1 || Math.abs(c.cz - ccz) > 1) continue;
      for (let i = tr.shinies.length - 1; i >= 0; i--) {
        const s = tr.shinies[i], m = s.mesh;
        m.rotation.y = t * 2.2 + s.phase; m.position.y = s.y + Math.sin(t * 2.6 + s.phase) * .035;
        const k = (1 + Math.max(0, Math.sin(t * 3.1 + s.phase * 2)) ** 8 * .35) * SHINY_SCALE; m.scale.set(s.kind.scale[0] * k, s.kind.scale[1] * k, s.kind.scale[2] * k);
        s.glow.position.y = m.position.y; s.glow.scale.setScalar(.17 + Math.sin(t * 4 + s.phase) * .035);
        const dx = s.x - px, dz = s.z - pz, dy = s.y - (py + .3), d = Math.hypot(dx, dz);
        if (d < this.nearest && Math.abs(dy) < 3) this.nearest = d;
        if (d < CAT.radius + .36 && Math.abs(dy) < .8) {
          tr.shinies.splice(i, 1); tr.group.remove(m); tr.group.remove(s.glow); this.collected.add(s.id); this.onShiny?.(s);
        }
      }
      for (const p of tr.props) this.stepProp(p, dt, player, people);
    }
  }

  stepProp(p, dt, player, people) {
    const px = player.pos.x, pz = player.pos.z, py = player.pos.y, def = p.def;
    const dx = p.x - px, dz = p.z - pz, d = Math.hypot(dx, dz);
    if (d > 30) return;
    const lying = p.state === 'down' && Math.abs(p.ang) > .7, h = lying ? def.r * 2 : def.h, r = lying ? Math.max(def.r, def.h * .5) : def.r;
    if (p.state !== 'air' && d < CAT.radius + r + .03 && py < p.y + h && py + .5 > p.y && player.speed > .6) {
      // A nudge from the cat: off it goes, in the direction the cat was heading.
      const len = Math.hypot(player.vx, player.vz) || 1, nx = len > .5 ? player.vx / len : dx / (d || 1), nz = len > .5 ? player.vz / len : dz / (d || 1);
      const push = Math.min(4.5, 1.1 + player.speed * .32) * (lying ? 1.1 : 1);
      p.vx = nx * push; p.vz = nz * push; p.vy = lying ? 1.1 + player.speed * .05 : 1.9 + player.speed * .12;
      p.axis.set(nz, 0, -nx).normalize(); p.spin = 5 + player.speed * .7; p.state = 'air'; p.rest = 0;
      this.knocks++; this.onKnock?.(p, def.sound);
      const near = people?.list?.filter(o => !o.sitting && Math.hypot(o.x - p.x, o.z - p.z) < 7).sort((a, b) => Math.hypot(a.x - p.x, a.z - p.z) - Math.hypot(b.x - p.x, b.z - p.z))[0];
      if (near && Math.random() < .7) near.say(HECKLES[Math.floor(Math.random() * HECKLES.length)], 2.4);
    }
    if (p.state !== 'air') return;
    p.vy -= 22 * dt; p.vx *= 1 - dt * .3; p.vz *= 1 - dt * .3;
    const nx = p.x + p.vx * dt, nz = p.z + p.vz * dt;
    const wall = this.physics.support(nx, nz, p.y + .4);
    if (wall.y > p.y + .2) { p.vx *= -.35; p.vz *= -.35; } else { p.x = nx; p.z = nz; }
    p.y += p.vy * dt; p.ang += p.spin * dt;
    const ground = this.physics.support(p.x, p.z, p.y + .05).y;
    if (p.y <= ground) {
      p.y = ground;
      if (p.vy < -2.2) { p.vy = -p.vy * .28; p.vx *= .55; p.vz *= .55; p.spin *= .6; this.onKnock?.(p, def.sound, true); }
      else {
        // Settle: lie on a side (or, rarely, land upright).
        const quarter = Math.round(p.ang / (Math.PI / 2)) * (Math.PI / 2);
        const upright = Math.abs(((quarter % TAU) + TAU) % TAU) < .01 || Math.abs((((quarter % TAU) + TAU) % TAU) - TAU) < .01;
        p.ang = upright ? 0 : (((quarter % TAU) + TAU) % TAU) < Math.PI ? Math.PI / 2 : -Math.PI / 2;
        if (!upright) p.y = ground + def.r * .98;
        p.vx = p.vy = p.vz = 0; p.spin = 0; p.state = 'down';
      }
    }
    p.g.position.set(p.x, p.y, p.z);
    p.g.quaternion.setFromAxisAngle(p.axis, p.ang).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), p.yaw));
  }

  // How many of each kind have been found (worked out from the ids, so nothing extra is saved).
  counts() {
    const out = {}; for (const k of SHINY_KINDS) out[k.kind] = 0;
    for (const id of this.collected) {
      const m = /(-?\d+),(-?\d+):s(\d+)$/.exec(id); if (!m) continue;
      const kind = SHINY_KINDS[hash(+m[1] * 8 + +m[3], +m[2], this.world.seed, 1717) % SHINY_KINDS.length];
      out[kind.kind]++;
    }
    return out;
  }
  // Positions for the debug API and the map.
  listShinies() { const out = []; for (const [, t] of this.tracked) for (const s of t.shinies) out.push({ id: s.id, kind: s.kind.kind, x: s.x, y: s.y, z: s.z }); return out; }
  listProps() { const out = []; for (const [, t] of this.tracked) for (const p of t.props) out.push({ kind: p.kind, x: p.x, y: p.y, z: p.z, state: p.state }); return out; }
}
