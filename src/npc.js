import * as THREE from 'three';
import { CHUNK, NAV, Batch, random, hashString } from './world.js';

// Townsfolk. Wanderers stroll the pavement network with no fixed loops (every junction is a fresh
// choice); working folk stay at their stall, counter, bench or table. Everyone has a face, a
// haircut, clothes that say what they do, and a soft spot for a passing cat.

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
const ROLE_LINES = {
  kid: { greet: ['KITTY!!', 'Mum, look, a cat!', 'Can I keep it? Please?', 'Here kitty kitty kitty!'], idle: ['Race you to the swings!', 'I’m the king of the castle!', 'Wheee!'] },
  grandma: { greet: ['Oh, hello, my darling.', 'Come here, pet. I’ve a bit of ham.', 'You remind me of my old Tibbles.', 'Mind the road, sweetheart.'], idle: ['My knees know rain is coming.', 'Where did I leave my glasses…', 'Lovely to get some air.'] },
  grandpa: { greet: ['Well now. Hello, old chap.', 'Scratch behind the ears? Like so.', 'Finest cat on the street, you are.', 'Hmph. Cats. Go on then.'], idle: ['In my day this was all fields.', 'Nice bit of sun.', 'Bus is late. As usual.'] },
  uncle: { greet: ['Ey up, kitty!', 'Hello, you little rascal.', 'Big cat energy, that one.', 'Who’s this, then?'], idle: ['I could murder a pie.', 'Beautiful day for it.', 'Right, where was I.'] },
  vendor: { greet: ['Oh, hello, puss. No fish here, sorry!', 'Shoo— oh, you’re lovely, actually.', 'Mind the apples, little one.', 'A customer! Of sorts.'], idle: ['Fresh today! Lovely and fresh!', 'Two for one, last of the day!', 'Get your lovely bread here!', 'Best in town, honest.'] },
  barista: { greet: ['Oat milk for the cat? Coming up.', 'Hello, regular. Usual spot?', 'Careful, the machine’s hot.', 'You’re allowed in. Just this once.'], idle: ['Flat white for Priya!', 'One more and then I’ll close.', 'That grinder needs a service.'] },
  grocer: { greet: ['No, those tins aren’t for you.', 'Hello, trouble.', 'Have a sniff, but don’t knock it over.', 'Aw. Alright, you can stay.'], idle: ['Three for two on the beans.', 'Must restock aisle one.', 'Nice and quiet today.'] },
  worker: { greet: ['Oi oi! Hello, kitty.', 'Hard hat area, mate.', 'Site cat! We’ve got a site cat!', 'Mind your paws round here.'], idle: ['Tea break in five.', 'Pass us that spanner.', 'Nearly done with this lot.'] },
  foreman: { greet: ['Health and safety… allows cats.', 'Hello, inspector.', 'Right, who let the cat in?'], idle: ['Where’s that delivery?', 'Clipboard says we’re behind.', 'Come on, lads.'] },
  suit: { greet: ['Oh— hello. I’m late, but hello.', 'You’d do better in this meeting than me.', 'Hi, puss. Quick scratch, then I must dash.'], idle: ['Running late, running late.', 'Call me back about the thing.', 'Fifteenth floor. Ugh.'] },
  shopper: { greet: ['Hello, gorgeous.', 'Careful, there’s eggs in here.', 'Oh, what a love.'], idle: ['Did I get milk? I got milk.', 'Those flowers are lovely.', 'I’ll just look at the bread.'] },
  customer: { greet: ['Hello! Come and sit with me.', 'Oh, a café cat. Perfect.', 'You can have the crumbs.'], idle: ['This is a very good bun.', 'One more coffee won’t hurt.'] },
  resident: { greet: ['How did you get in here?!', 'Oh. Hello. Make yourself at home, I suppose.', 'Don’t scratch the sofa.'], idle: ['I should hoover.', 'Where’s the remote?', 'Tea. Tea would be good.'] },
  parent: { greet: ['Gently, gently — look, a cat.', 'Hello, puss. Don’t mind the kids.'], idle: ['Five more minutes, then home.', 'Not so high, love!'] },
  driver: { greet: ['Alright, kitty.', 'Don’t get under the wheels now.'], idle: ['Two more drops and I’m done.', 'Traffic was murder.'] },
  jogger: { greet: ['Hey! Quick— hi— bye!', 'Can’t stop! Lovely cat!'], idle: ['Pace, pace, pace.'] }
};
const SKIN = ['#f1d4bd', '#e9c4a6', '#d9a98a', '#c48b67', '#a46f4d', '#8d5a3b', '#6b4529', '#f6dfcc'];
const SHIRT = ['#c9d8c6', '#d9b8a8', '#a7b7c7', '#e6d6b0', '#b48c9c', '#8ea48c', '#d3c7e0', '#c3b59b', '#9fb8b4', '#e2c3a0', '#d9544f', '#4f7f96', '#e9c04b', '#f3ead6', '#6f9a4f'];
const TROUSERS = ['#5c6670', '#7b6f5f', '#4f5a52', '#8a8072', '#44505a', '#6f6a80', '#9b9179', '#3b4f6b', '#8f5f4e'];
const HAIR = ['#2e2420', '#5a3e2c', '#8a6a46', '#c7a16b', '#3b3b40', '#b4553a', '#1d1a1a', '#e0c08a'];
const GREY = ['#d9d2c4', '#c4c0b8', '#eae6dc', '#a9a49b'];
const OFFSETS = NAV.offsets;
const box = new THREE.BoxGeometry(1, 1, 1), ball = new THREE.SphereGeometry(1, 10, 8), skirtGeo = new THREE.CylinderGeometry(.72, 1, 1, 10), capGeo = new THREE.SphereGeometry(1, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), brim = new THREE.CylinderGeometry(1, 1, 1, 12), cone = new THREE.ConeGeometry(1, 1, 8);

const nearlyPath = v => Math.abs(((v % CHUNK) + CHUNK) % CHUNK) < .01;
function nextOffset(u, dir) {
  const base = Math.floor(u / CHUNK) * CHUNK, local = u - base;
  if (dir > 0) { for (const o of OFFSETS) if (o > local + .01) return base + o; return base + CHUNK + OFFSETS[0]; }
  for (let i = OFFSETS.length - 1; i >= 0; i--) if (OFFSETS[i] < local - .01) return base + OFFSETS[i];
  return base - CHUNK + OFFSETS[OFFSETS.length - 1];
}
function allowed(lineCoord, u1, u2) {
  if (!nearlyPath(lineCoord)) return true;
  const a = Math.min(u1, u2), b = Math.max(u1, u2), la = ((a % CHUNK) + CHUNK) % CHUNK;
  return !(Math.abs(la - NAV.pavement[0]) < .01 && Math.abs(b - a - (NAV.pavement[1] - NAV.pavement[0])) < .01);
}
function snapNode(x, z) {
  const snap = v => { const base = Math.floor(v / CHUNK) * CHUNK, local = v - base; let best = OFFSETS[0], d = Infinity; for (const o of [...OFFSETS, CHUNK]) if (Math.abs(o - local) < d) { d = Math.abs(o - local); best = o; } return base + best; };
  return { x: snap(x), z: snap(z) };
}
const pick = (r, list) => list[Math.floor(r() * list.length)];

// ---- looks ------------------------------------------------------------------------------------

// Decide who somebody is from their role: age, build, clothes, hair and the things they carry.
function describe(role, r) {
  const base = role.split(':')[0];
  const femme = r() < .5;
  const d = { role: base, femme, height: 1.62 + r() * .24, build: 1, headScale: 1, skin: pick(r, SKIN), shirt: pick(r, SHIRT), trousers: pick(r, TROUSERS), hair: pick(r, HAIR), hairStyle: femme ? pick(r, ['bob', 'long', 'bun', 'ponytail', 'short']) : pick(r, ['short', 'short', 'crop', 'quiff']), hat: null, skirt: femme && r() < .45, facial: null, glasses: r() < .18, carry: null, apron: null, vest: false, tie: false, stick: false, hunch: 0, speed: 1 };
  if (base === 'kid') { d.height = .98 + r() * .22; d.headScale = 1.45; d.build = .8; d.shirt = pick(r, ['#d9544f', '#e9c04b', '#4f7f96', '#6f9a4f', '#e39a6e', '#c7b2d9']); d.trousers = pick(r, ['#3b4f6b', '#4f7f96', '#8f5f4e']); d.hairStyle = femme ? pick(r, ['pigtails', 'bob', 'ponytail']) : pick(r, ['short', 'crop']); d.hat = r() < .3 ? 'cap' : null; d.glasses = r() < .08; d.skirt = femme && r() < .4; d.speed = 1.5; }
  if (base === 'grandma') { d.femme = true; d.height = 1.5 + r() * .1; d.build = 1.1; d.hair = pick(r, GREY); d.hairStyle = pick(r, ['bun', 'bob', 'short']); d.skirt = true; d.shirt = pick(r, ['#b48c9c', '#c7b2d9', '#8ea48c', '#d3c7e0']); d.glasses = r() < .6; d.stick = r() < .6; d.hunch = .18; d.speed = .6; d.hat = r() < .3 ? 'sunhat' : null; }
  if (base === 'grandpa') { d.femme = false; d.height = 1.6 + r() * .1; d.build = 1.05; d.hair = pick(r, GREY); d.hairStyle = pick(r, ['bald', 'crop', 'short']); d.facial = pick(r, ['beard', 'moustache', 'beard']); d.glasses = r() < .5; d.stick = r() < .6; d.hunch = .14; d.speed = .65; d.hat = r() < .6 ? 'flatcap' : null; d.shirt = pick(r, ['#c3b59b', '#9fb8b4', '#8ea48c', '#e6d6b0']); d.tie = r() < .3; }
  if (base === 'uncle') { d.femme = false; d.height = 1.7 + r() * .15; d.build = 1.3; d.facial = r() < .7 ? 'moustache' : null; d.hat = pick(r, ['flatcap', null, 'sunhat']); d.hairStyle = pick(r, ['bald', 'short', 'crop']); d.shirt = pick(r, ['#e6d6b0', '#a7b7c7', '#d9b8a8', '#f3ead6']); d.speed = .85; }
  if (base === 'worker' || base === 'foreman') { d.vest = true; d.hat = 'hardhat'; d.shirt = pick(r, ['#4f5a52', '#5c6670', '#8f5f4e']); d.trousers = pick(r, ['#5c6670', '#8a8072', '#3b4f6b']); d.carry = base === 'foreman' ? 'clipboard' : r() < .5 ? 'tool' : null; d.skirt = false; d.build = 1.1; }
  if (base === 'vendor') { d.apron = pick(r, ['#f3ead6', '#4f7f96', '#6f9a4f', '#c9524a']); d.hat = r() < .5 ? 'cap' : null; d.skirt = false; }
  if (base === 'barista') { d.apron = '#3f4a46'; d.hairStyle = femme ? 'bun' : 'quiff'; d.shirt = '#f3ead6'; d.skirt = false; }
  if (base === 'grocer') { d.apron = '#6f9a4f'; d.shirt = '#f3ead6'; d.skirt = false; d.build = 1.1; }
  if (base === 'suit') { d.shirt = pick(r, ['#2f3a3a', '#44505a', '#3b3b40', '#5f6b66']); d.trousers = d.shirt; d.tie = !femme; d.carry = 'briefcase'; d.skirt = femme; d.speed = 1.2; }
  if (base === 'shopper') { d.carry = 'bag'; }
  if (base === 'parent') { d.carry = r() < .5 ? 'bag' : null; }
  if (base === 'driver') { d.hat = 'cap'; d.shirt = '#4f7f96'; d.skirt = false; d.build = 1.15; }
  if (base === 'jogger') { d.shirt = pick(r, ['#d9544f', '#e9c04b', '#4f7f96']); d.trousers = '#2f3331'; d.hairStyle = femme ? 'ponytail' : 'crop'; d.skirt = false; d.speed = 2.2; d.hat = r() < .4 ? 'cap' : null; }
  if (base === 'resident' || base === 'customer') { d.carry = null; }
  return d;
}

function buildLook(d) {
  const H = d.height, legH = H * .47, torsoH = H * .31, neck = H * .025, headR = H * .07 * d.headScale, shoulder = .36 * d.build, depth = .2 * d.build;
  const torso = new Batch();
  // Body: shoulders, chest, a skirt or hips.
  torso.add(box, 0, torsoH / 2, 0, shoulder, torsoH, depth, d.shirt);
  torso.add(ball, 0, torsoH * .97, 0, shoulder * .55, torsoH * .12, depth * .6, d.shirt);
  if (d.skirt) torso.add(skirtGeo, 0, -legH * .25, 0, shoulder * .62, legH * .55, depth * 1.3, d.trousers);
  else torso.add(box, 0, -.02, 0, shoulder * .96, .08, depth, d.trousers);
  if (d.apron) { torso.add(box, 0, torsoH * .42, depth / 2 + .01, shoulder * .78, torsoH * .95, .02, d.apron); torso.add(box, 0, -legH * .2, depth / 2 + .01, shoulder * .82, legH * .45, .02, d.apron); torso.add(box, 0, torsoH * .95, 0, .03, torsoH * .15, depth + .04, d.apron); }
  if (d.vest) { torso.add(box, 0, torsoH * .5, 0, shoulder + .04, torsoH * .8, depth + .04, '#f2c21b'); torso.add(box, 0, torsoH * .5, 0, shoulder + .05, .06, depth + .05, '#cfd3d2'); torso.add(box, 0, torsoH * .28, 0, shoulder + .05, .06, depth + .05, '#cfd3d2'); }
  if (d.tie) { torso.add(box, 0, torsoH * .62, depth / 2 + .005, .05, torsoH * .55, .01, d.femme ? '#b48c9c' : '#8f5f4e'); torso.add(box, 0, torsoH * .78, depth / 2 + .005, shoulder * .3, torsoH * .3, .008, '#f3ead6'); }
  // Neck and head.
  torso.add(box, 0, torsoH + neck / 2, 0, headR * .7, neck + .02, headR * .7, d.skin);
  const hy = torsoH + neck + headR * .95;
  torso.add(ball, 0, hy, 0, headR, headR * 1.08, headR * .95, d.skin);
  // Face: eyes with whites, brows, a nose, a mouth, cheeks for kids and grandmas.
  const eyeY = hy + headR * .08, eyeZ = headR * .82;
  for (const s of [-1, 1]) {
    torso.add(ball, s * headR * .36, eyeY, eyeZ, headR * .14, headR * .12, headR * .06, '#f8f6f0');
    torso.add(ball, s * headR * .36, eyeY, eyeZ + headR * .05, headR * .075, headR * .085, headR * .04, '#2a211d');
    torso.add(box, s * headR * .36, eyeY + headR * .24, eyeZ - headR * .02, headR * .3, headR * .05, headR * .05, d.hair === '#e0c08a' ? '#b08a56' : d.hair);
    if (d.glasses) { torso.add(box, s * headR * .36, eyeY, eyeZ + headR * .1, headR * .34, headR * .3, .006, '#4a4f4c'); torso.add(box, s * headR * .36, eyeY, eyeZ + headR * .1, headR * .26, headR * .22, .008, '#dfeae8'); }
  }
  if (d.glasses) torso.add(box, 0, eyeY, eyeZ + headR * .1, headR * .2, .006, .006, '#4a4f4c');
  torso.add(ball, 0, hy - headR * .12, headR * .93, headR * .11, headR * .14, headR * .12, d.skin);
  if (d.facial === 'moustache') torso.add(box, 0, hy - headR * .3, headR * .9, headR * .5, headR * .1, headR * .08, d.hair);
  else torso.add(box, 0, hy - headR * .38, headR * .9, headR * .26, headR * .04, .006, '#9a5f55');
  if (d.facial === 'beard') torso.add(ball, 0, hy - headR * .55, headR * .55, headR * .62, headR * .5, headR * .55, d.hair);
  if (d.role === 'kid' || d.role === 'grandma') for (const s of [-1, 1]) torso.add(ball, s * headR * .62, hy - headR * .18, headR * .62, headR * .16, headR * .1, headR * .08, '#e8a39a');
  // Hair.
  const h = d.hair;
  if (d.hairStyle !== 'bald') torso.add(ball, 0, hy + headR * .22, -headR * .05, headR * 1.03, headR * .9, headR * 1.0, h);
  if (d.hairStyle === 'bald') { torso.add(box, 0, hy - headR * .05, -headR * .5, headR * 1.9, headR * .6, headR * .9, h); torso.add(box, 0, hy - headR * .05, -headR * .5, headR * 1.9, headR * .6, headR * .9, h); }
  if (d.hairStyle === 'bob' || d.hairStyle === 'long') { for (const s of [-1, 1]) torso.add(box, s * headR * .95, hy - headR * .25, -headR * .1, headR * .3, headR * 1.3, headR * 1.3, h); torso.add(box, 0, hy - headR * .2, -headR * .85, headR * 1.9, headR * 1.4, headR * .5, h); }
  if (d.hairStyle === 'long') torso.add(box, 0, hy - headR * 1.4, -headR * .8, headR * 1.6, headR * 1.6, headR * .45, h);
  if (d.hairStyle === 'bun') torso.add(ball, 0, hy + headR * .7, -headR * .7, headR * .45, headR * .4, headR * .45, h);
  if (d.hairStyle === 'ponytail') { torso.add(ball, 0, hy + headR * .3, -headR * .9, headR * .3, headR * .3, headR * .3, h); torso.add(box, 0, hy - headR * .3, -headR * 1.05, headR * .3, headR * 1.4, headR * .3, h); }
  if (d.hairStyle === 'pigtails') for (const s of [-1, 1]) { torso.add(ball, s * headR * 1.05, hy + headR * .2, -headR * .2, headR * .28, headR * .28, headR * .28, h); torso.add(box, s * headR * 1.1, hy - headR * .4, -headR * .2, headR * .25, headR * 1, headR * .25, h); }
  if (d.hairStyle === 'quiff') torso.add(ball, 0, hy + headR * .95, headR * .35, headR * .55, headR * .35, headR * .5, h);
  if (d.hairStyle === 'crop') torso.add(ball, 0, hy + headR * .25, -headR * .05, headR * 1.0, headR * .8, headR * .98, h);
  torso.add(box, 0, hy + headR * .62, headR * .55, headR * 1.4, headR * .4, headR * .5, d.hairStyle === 'bald' ? d.skin : h);
  // Hats.
  if (d.hat === 'cap') { torso.add(capGeo, 0, hy + headR * .45, 0, headR * 1.1, headR * .75, headR * 1.1, d.shirt === '#d9544f' ? '#3b4f6b' : '#d9544f'); torso.add(box, 0, hy + headR * .5, headR * 1.1, headR * 1.2, .02, headR * .9, d.shirt === '#d9544f' ? '#3b4f6b' : '#d9544f'); }
  if (d.hat === 'flatcap') { torso.add(capGeo, 0, hy + headR * .5, -headR * .1, headR * 1.12, headR * .6, headR * 1.15, '#8a8072'); torso.add(box, 0, hy + headR * .55, headR * .95, headR * 1.1, .02, headR * .7, '#8a8072'); }
  if (d.hat === 'sunhat') { torso.add(capGeo, 0, hy + headR * .5, 0, headR * 1.1, headR * .75, headR * 1.1, '#e6d6b0'); torso.add(brim, 0, hy + headR * .5, 0, headR * 1.9, .02, headR * 1.9, '#e6d6b0'); torso.add(brim, 0, hy + headR * .7, 0, headR * 1.12, headR * .12, headR * 1.12, '#c9524a'); }
  if (d.hat === 'hardhat') { torso.add(capGeo, 0, hy + headR * .4, 0, headR * 1.15, headR * .9, headR * 1.15, '#f2c21b'); torso.add(brim, 0, hy + headR * .42, 0, headR * 1.4, .03, headR * 1.4, '#f2c21b'); }
  // Limbs are separate so they can swing, sit and reach.
  const legW = .15 * d.build;
  const thigh = new Batch(); thigh.add(box, 0, -legH * .26, 0, legW, legH * .52, legW * 1.1, d.skirt ? d.skin : d.trousers);
  const shin = new Batch(); shin.add(box, 0, -legH * .24, 0, legW * .92, legH * .5, legW, d.skirt ? d.skin : d.trousers); shin.add(box, 0, -legH * .48 + .04, .035, legW, .08, legW * 1.7, d.role === 'kid' ? '#f3ead6' : d.role === 'worker' || d.role === 'foreman' ? '#5a4634' : '#3b3732');
  const arm = new Batch(); arm.add(box, 0, -torsoH * .3, 0, .09 * d.build, torsoH * .6, .09 * d.build, d.role === 'jogger' || d.role === 'kid' ? d.skin : d.shirt); arm.add(ball, 0, -torsoH * .66, 0, .05, .07, .05, d.skin);
  if (d.carry === 'bag') { arm.add(box, 0, -torsoH * .95, .02, .22, .28, .12, '#c9b48a'); arm.add(box, 0, -torsoH * .78, .02, .14, .14, .02, '#8d7f67'); }
  if (d.carry === 'briefcase') arm.add(box, 0, -torsoH * .98, .02, .12, .3, .4, '#5a4634');
  if (d.carry === 'clipboard') arm.add(box, 0, -torsoH * .7, .14, .22, .3, .02, '#f3ead6');
  if (d.carry === 'tool') arm.add(box, 0, -torsoH * .72, .2, .04, .04, .4, '#4a4f4c');
  if (d.stick) { arm.add(box, 0, -torsoH * .72, .02, .035, torsoH * .6 + legH * .95, .035, '#8d7f67'); arm.add(box, 0, -torsoH * .66, .02, .12, .04, .04, '#5a4634'); }
  return { H, legH, torsoH, torso: torso.geometry(), thigh: thigh.geometry(), shin: shin.geometry(), arm: arm.geometry() };
}

// ---- a person ---------------------------------------------------------------------------------

class Person {
  constructor(people, role, job = null) {
    this.people = people; this.role = role; this.job = job;
    this.d = describe(role, people.rng); const look = this.look = buildLook(this.d);
    this.H = look.H;
    this.group = new THREE.Group(); this.body = new THREE.Group(); this.group.add(this.body);
    this.torso = new THREE.Mesh(look.torso, people.material); this.torso.position.y = look.legH; this.torso.castShadow = true; this.body.add(this.torso);
    this.legs = []; this.shins = []; this.arms = [];
    for (const s of [-1, 1]) {
      const thigh = new THREE.Mesh(look.thigh, people.material); thigh.position.set(s * .09 * this.d.build, look.legH, 0); thigh.castShadow = true; this.body.add(thigh); this.legs.push(thigh);
      const shin = new THREE.Mesh(look.shin, people.material); shin.position.y = -look.legH * .52; thigh.add(shin); this.shins.push(shin);
      const arm = new THREE.Mesh(look.arm, people.material); arm.position.set(s * (.19 * this.d.build + .03), look.torsoH - .03, 0); arm.rotation.z = -s * .08; this.torso.add(arm); this.arms.push(arm);
    }
    this.heart = new THREE.Sprite(people.heartMaterial.clone()); this.heart.scale.set(.26, .26, 1); this.heart.visible = false; this.group.add(this.heart);
    this.solid = { shape: 'cylinder', x: 0, z: 0, r: .3 * this.d.build, minX: 0, maxX: 0, minZ: 0, maxZ: 0, minY: 0, maxY: this.H, climbable: false, walkable: false, person: this };
    this.lines = ROLE_LINES[this.d.role] || null;
    this.reset(job ? job.x : 0, job ? job.z : 0);
    if (job) { this.y = job.y || 0; this.heading = job.heading; this.state = 'work'; this.sitting = job.pose === 'sit'; }
  }
  reset(x, z) {
    this.x = x; this.z = z; this.y = 0; this.heading = Math.random() * Math.PI * 2; this.bodyTilt = 0; this.reach = 0; this.sit = 0; this.sitting = false;
    this.axis = 'x'; this.dir = 1; this.state = 'walk'; this.timer = 0; this.cooldown = Math.random() * 4; this.phase = Math.random() * 7;
    this.baseSpeed = (1.05 + Math.random() * .5) * this.d.speed; this.speed = 0; this.line = ''; this.lineTimer = 0; this.heartTime = 0; this.greeted = 0; this.gesture = Math.random() * 10;
    this.target = null; if (!this.job) this.chooseNext(true);
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
    this.baseSpeed = Math.min(1.6 * this.d.speed, Math.max(.9 * this.d.speed, this.baseSpeed + (Math.random() - .5) * .25));
  }
  say(text, duration = 3.2) { this.line = text; this.lineTimer = duration; }
  greetLine(catSpeed) {
    if (catSpeed > 9 && Math.random() < .7) return ['Whoa! Where’s the fire, kitty?', 'Zoom zoom! Go on then.', 'Ha! Someone’s in a hurry.'][Math.floor(Math.random() * 3)];
    const own = this.lines?.greet; return own && Math.random() < .75 ? own[Math.floor(Math.random() * own.length)] : GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
  }
  idleLine() { const own = this.lines?.idle; return own && Math.random() < .8 ? own[Math.floor(Math.random() * own.length)] : IDLE[Math.floor(Math.random() * IDLE.length)]; }
  update(dt, cat, catSpeed, others) {
    const people = this.people;
    this.timer = Math.max(0, this.timer - dt); this.cooldown = Math.max(0, this.cooldown - dt);
    this.lineTimer -= dt; if (this.lineTimer <= 0) this.line = '';
    const dx = cat.x - this.x, dz = cat.z - this.z, catDistance = Math.hypot(dx, dz), catLevel = Math.abs(cat.y - this.y) < 1.6;
    // A cat strolling up gets a fuss; a cat sprinting past gets a startled laugh.
    if (people.interactive && this.state !== 'greet' && this.state !== 'chat' && catDistance < 2.3 && catLevel && this.cooldown === 0) {
      this.state = 'greet'; this.timer = 3 + Math.random() * 1.8; this.speed = 0; this.greeted++;
      this.say(this.greetLine(catSpeed), 3.4);
      this.heartTime = 1.6; people.greetings++; people.onGreet?.(this);
    }
    let moving = false;
    if (this.state === 'greet') {
      if (!this.sitting) this.face(Math.atan2(dx, dz), dt, 6);
      if (this.timer === 0 || catDistance > 5) { this.state = this.job ? 'work' : 'walk'; this.cooldown = 9 + Math.random() * 14; }
    } else if (this.state === 'work') {
      // Working folk stay put, glance at a nearby cat, and call their wares now and then.
      if (!this.sitting && catDistance < 6 && catLevel) this.face(Math.atan2(dx, dz), dt, 2); else if (!this.sitting) this.face(this.job.heading, dt, 2);
      if (Math.random() < dt * .05 && catDistance < 22) this.say(this.idleLine(), 2.6);
    } else if (this.state === 'chat') {
      if (this.partner) this.face(Math.atan2(this.partner.x - this.x, this.partner.z - this.z), dt, 5);
      if (this.timer === 0) { this.state = 'walk'; this.cooldown = 6 + Math.random() * 10; this.partner = null; }
    } else if (this.state === 'idle') {
      if (this.timer === 0) { this.state = 'walk'; if (Math.random() < .5) this.chooseNext(); }
    } else {
      if (!this.target) this.chooseNext(true);
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
          if (Math.random() < .18) { this.state = 'idle'; this.timer = 1.5 + Math.random() * 3.5; this.speed = 0; if (Math.random() < .35) this.say(this.idleLine(), 2.4); }
          else this.chooseNext();
        } else {
          this[key] += step * this.dir;
          if (Math.random() < dt * .025) { this.state = 'idle'; this.timer = 1.2 + Math.random() * 2.5; this.speed = 0; }
        }
        moving = this.speed > .05;
        if (moving) this.face(this.axis === 'x' ? Math.atan2(this.dir, 0) : Math.atan2(0, this.dir), dt, 7);
      }
    }
    if (!this.job) { const ground = people.physics.support(this.x, this.z, this.y + .35).y; this.y += (ground - this.y) * (1 - Math.exp(-14 * dt)); }
    this.animate(dt, moving);
    const s = this.solid; s.x = this.x; s.z = this.z; s.minX = this.x - s.r; s.maxX = this.x + s.r; s.minZ = this.z - s.r; s.maxZ = this.z + s.r; s.minY = this.y; s.maxY = this.y + this.H;
  }
  face(target, dt, rate) { this.heading += Math.atan2(Math.sin(target - this.heading), Math.cos(target - this.heading)) * (1 - Math.exp(-rate * dt)); }
  animate(dt, moving) {
    const t = this.people.time, greeting = this.state === 'greet', d = this.d, working = this.state === 'work';
    this.phase += dt * (moving ? (d.role === 'kid' ? 7.5 : 5.6) * this.speed / 1.2 : 0);
    const swing = moving ? Math.sin(this.phase) * (d.role === 'kid' ? .7 : .55) * Math.min(1, this.speed / .9) : 0;
    this.legs[0].rotation.x = swing; this.legs[1].rotation.x = -swing;
    this.shins[0].rotation.x = moving ? Math.max(0, -Math.sin(this.phase - .9)) * .7 : 0; this.shins[1].rotation.x = moving ? Math.max(0, Math.sin(this.phase - .9)) * .7 : 0;
    this.arms[0].rotation.x = -swing * .6; this.arms[1].rotation.x = swing * .6;
    if (d.stick) { this.arms[1].rotation.x = -.35 + swing * .2; }
    if (d.carry === 'bag' || d.carry === 'briefcase') this.arms[1].rotation.x *= .3;
    if (d.carry === 'clipboard') { this.arms[1].rotation.x = -1.2; this.arms[0].rotation.x = -.9 + Math.sin(t * 2.1) * .1; }
    this.bodyTilt += ((greeting ? (this.sitting ? .25 : .62) : 0) - this.bodyTilt) * (1 - Math.exp(-5 * dt));
    this.reach += ((greeting ? 1 : 0) - this.reach) * (1 - Math.exp(-5 * dt));
    this.sit += ((this.sitting ? 1 : 0) - this.sit) * (1 - Math.exp(-8 * dt));
    this.torso.rotation.x = this.bodyTilt + d.hunch;
    // Working gestures: vendors wave their wares, workers hammer, baristas and grocers busy their hands.
    if (working) {
      const r = d.role, g = t * 2 + this.gesture;
      if (r === 'vendor' || r === 'parent') { this.arms[0].rotation.x = -1.1 + Math.sin(g) * .35; this.arms[0].rotation.z = .5 + Math.sin(g * .5) * .2; }
      else if (r === 'worker') { this.arms[0].rotation.x = -1.4 + Math.max(0, Math.sin(g * 1.6)) * 1.1; this.torso.rotation.x += .25 + Math.max(0, Math.sin(g * 1.6)) * .08; }
      else if (r === 'barista' || r === 'grocer' || r === 'driver') { this.arms[0].rotation.x = -1.1 + Math.sin(g * 1.3) * .2; this.arms[1].rotation.x = -1 + Math.cos(g * 1.1) * .2; }
      else if (r === 'suit') { this.arms[0].rotation.x = -1.4; this.arms[0].rotation.z = -.9; this.torso.rotation.y = Math.sin(g * .3) * .1; }
      else if (r === 'kid') { this.body.position.y += Math.abs(Math.sin(g * 1.5)) * .08; this.arms[0].rotation.x = -2.6 + Math.sin(g * 1.5) * .3; }
    }
    // One hand reaches down for a chin scratch; the other rests on a knee.
    this.arms[1].rotation.x += -this.reach * .55; this.arms[0].rotation.x += -this.reach * .25;
    this.legs[0].rotation.x += this.reach * .18 * (1 - this.sit); this.legs[1].rotation.x += -this.reach * .12 * (1 - this.sit);
    // Sitting: thighs forward, shins down, body lowered onto the seat.
    for (const leg of this.legs) leg.rotation.x += -Math.PI / 2 * this.sit; for (const shin of this.shins) shin.rotation.x += Math.PI / 2 * this.sit;
    this.body.position.y = (moving ? Math.abs(Math.sin(this.phase)) * .03 : Math.sin(t * 1.3 + this.phase) * .006) - this.reach * .14 * (1 - this.sit) - this.sit * (this.look.legH * .52 - .44);
    if (this.sitting) { this.arms[0].rotation.x = -.9 + Math.sin(t * 1.2 + this.gesture) * .08; this.arms[1].rotation.x = -.9; }
    this.body.rotation.z = moving ? Math.sin(this.phase) * .03 : Math.sin(t * .9 + this.phase) * .012;
    this.group.position.set(this.x, this.y, this.z); this.group.rotation.y = this.heading;
    this.heartTime = Math.max(0, this.heartTime - dt);
    this.heart.visible = this.heartTime > 0;
    if (this.heart.visible) { const k = 1 - this.heartTime / 1.6; this.heart.position.set(Math.sin(k * 6) * .12, this.H * .6 + k * .7, .35); this.heart.material.opacity = Math.min(1, (1 - k) * 2); const sc = .22 + Math.sin(k * Math.PI) * .12; this.heart.scale.set(sc, sc, 1); }
  }
  dispose() { this.look.torso.dispose(); this.look.thigh.dispose(); this.look.shin.dispose(); this.look.arm.dispose(); }
}

// ---- everyone ---------------------------------------------------------------------------------

const WANDERERS = ['woman', 'man', 'woman', 'man', 'uncle', 'grandma', 'grandpa', 'kid', 'suit', 'shopper', 'jogger', 'parent'];

export class People {
  constructor(scene, physics, count = 12, seedText = 'whiskerfield') {
    this.scene = scene; this.physics = physics; this.count = count; this.time = 0; this.greetings = 0; this.onGreet = null; this.interactive = false;
    this.material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .9, flatShading: true });
    this.heartMaterial = new THREE.SpriteMaterial({ map: heartTexture(), transparent: true, depthWrite: false });
    this.rng = random(hashString(seedText + 'people'));
    this.list = []; this.workers = new Map(); this.spawnTimer = 0; this.jobTimer = 0;
  }
  get wanderers() { return this.list.filter(p => !p.job); }
  spawnAll(center) {
    for (let i = 0; i < this.count; i++) {
      const person = new Person(this, WANDERERS[i % WANDERERS.length]);
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
  // Jobs come from the world: stallholders, baristas, workers, residents. They appear with their
  // place and leave with it.
  syncJobs(cat) {
    const world = this.physics.world, keep = new Set(), range = 75;
    for (const job of world.jobs) {
      if (Math.abs(job.x - cat.x) > range || Math.abs(job.z - cat.z) > range) continue;
      keep.add(job);
      if (this.workers.has(job)) continue;
      const person = new Person(this, job.role, job);
      this.workers.set(job, person); this.scene.add(person.group); this.list.push(person); this.physics.dynamic.push(person.solid);
    }
    for (const [job, person] of this.workers) {
      if (keep.has(job)) continue;
      this.workers.delete(job); this.scene.remove(person.group); person.dispose();
      this.list.splice(this.list.indexOf(person), 1); this.physics.dynamic.splice(this.physics.dynamic.indexOf(person.solid), 1);
    }
  }
  update(dt, cat, catSpeed, camera) {
    this.time += dt; this.spawnTimer -= dt; this.jobTimer -= dt;
    if (this.jobTimer <= 0) { this.jobTimer = 1; this.syncJobs(cat); }
    if (this.spawnTimer <= 0) {
      this.spawnTimer = .6;
      for (const p of this.list) if (!p.job && Math.hypot(p.x - cat.x, p.z - cat.z) > 90) this.place(p, cat, 32, 62, camera);
    }
    for (const p of this.list) p.update(dt, cat, catSpeed, this.list);
  }
  speaker(cat, visible = null) {
    const talking = this.list.filter(p => p.line).map(p => [Math.hypot(p.x - cat.x, p.z - cat.z), p]).filter(([d]) => d < 18).sort((a, b) => a[0] - b[0]);
    for (const [, p] of talking) if (!visible || visible(p)) return p;
    return null;
  }
  dispose() { for (const p of this.list) { this.scene.remove(p.group); p.dispose(); } this.list = []; this.workers.clear(); this.physics.dynamic = []; }
}

function heartTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  x.fillStyle = '#e08a94'; x.beginPath(); x.moveTo(32, 56); x.bezierCurveTo(4, 36, 6, 10, 32, 20); x.bezierCurveTo(58, 10, 60, 36, 32, 56); x.fill();
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; return tex;
}
