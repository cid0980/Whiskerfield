# Whiskerfield — handoff for the next session

This file is for whoever (human or AI agent) continues the project. It says what the project is, how it is
built and tested, how to push, what is known to work, what is known to be broken, and the pitfalls that
cost the previous sessions time. **Read it fully before changing code.** Keep it up to date: when you fix
something listed here, remove it; when you learn a pitfall, add it.

Repository: https://github.com/cid0980/Whiskerfield (branch `main`, deploys to GitHub Pages automatically:
https://cid0980.github.io/Whiskerfield/). Current version **1.7.2** — `npx playwright test`: **18/18 green**
(11.3 min on this 2-CPU sandbox). Next: pair B (items 4 and 5 below), then 1.8.0 when the list is done.

---

## 1. Standing instructions from the owner

- **Push to GitHub often** — after every working change, not at the end. The owner has lost two sessions
  mid-work. Use `scripts/push.sh "message"` (see §3). Never leave the working tree dirty for long.
- **Ship fixes in pairs/small batches**, each pushed, each noted in `README.md` → *Changelog* and in the
  version number (`package.json`). The settings menu shows the version from the build.
- **Keep `README.md` updated** in the same style (feature list + changelog entry per version).
- **Plan before coding.** The owner explicitly asked: take time to think, don't hard-code quick hacks.
- Delete stray screenshots / scratch files before committing (`/home/user/screenshots/*.png`,
  `scripts/*.tmp.mjs` are git-ignored but clean them anyway).
- Plane travel must be *experienced* (seat, passengers, window view, landing) — never an instant swap.
- Boat control: point the stick toward open water → boat goes that way and keeps going until interrupted.
- Balloons: boardable from a landing field, drift with wind in a random direction.

## 2. What the project is

A Three.js (r170) browser game / PWA: you are a cat exploring an endless procedurally generated town
(72 m chunks from a seed). No frameworks, one esbuild bundle. Everything is low-poly geometry built in
code and merged per chunk (`Batch` in `src/world.js`). Physics is a custom AABB/cylinder/roof solver
(`src/physics.js`). Playwright tests drive the game through a `window.__whiskerfield` test API.

### Source map (`src/`)

| file | what |
| --- | --- |
| `main.js` (~850 lines) | boot, HUD, settings, save/load, camera, main loop, flight hooks, test API (`window.__whiskerfield`, only with `?test=1`) |
| `world.js` | `World` (chunk streaming, themes, lots, buildings, parks, roads, trees, lamps), `Batch` geometry builder, `COUNTRIES`, `CHUNK=72`, rail/airport/coast helpers, `inWater` |
| `places.js` | district builders: market, works, towers (multi-floor, lifts, stairs), playground, station, allotments, railway track/yard, airport, `buildTrain` |
| `rooms.js` | house interiors: `hollow`, `doorway`, `furnishHouse`, furniture kits, `PLACE_NAMES` |
| `shore.js` | lake (`makeLake`), seafront (`makeCoast`), open sea (`makeSea`), balloon field (`makeBalloonField`) |
| `physics.js` | `Physics` (query/support/resolve/ceiling), `stepPlayer` (cat movement, climbing, mantling) |
| `cat.js` | cat mesh + animation (gaits, sit, climb poses); `cat.root` is positioned from `player.pos` each frame |
| `npc.js` | `People`, `Person` (townsfolk wander a pavement grid, workers at jobs, greetings, sitting) |
| `train.js` | the steam train on the nearest rail column; dynamic solids carry the cat |
| `plane.js` | `PLANE` consts, `buildPlane`, `Plane` (door, seat), `Planes`, `Flight` (phased scripted flight + cameras + clouds), `Sky` (distant liners/balloons) |
| `vehicles.js` | `Vehicles`: hot-air balloons and boats (dynamic solids, carry logic, steering) |
| `lifts.js` | tower lifts (dynamic solids) |
| `daynight.js` | `DayCycle`: sky dome shader, sun/moon/stars, looks table, lamp point lights, HUD clock label |
| `fun.js` | shinies (collectables), knock-overs, wardrobe unlocks |
| `ducks.js`, `birds.js`, `audio.js`, `platform.js` | small systems |

Other: `index.html` (all DOM/modals), `styles.css`, `scripts/build.mjs` (esbuild + icons + `sw.js` +
`version.json`), `server.mjs` (static server, port 3000), `tests/game.spec.mjs` (16 tests),
`playwright.config.mjs`.

## 3. Build, run, test, push

```bash
cd /home/user/whiskerfield
npm install                      # node_modules vanish between sandbox sessions
npx playwright install chromium  # likewise
npm run build                    # -> assets/game.js, sw.js, version.json (ALWAYS build before commit: Pages serves the built bundle)
npm start                        # http://localhost:3000 (bind 0.0.0.0 already)
npx playwright test -g "part of a test title"   # single test; full suite ≈ 9 min, run it in the background
scripts/push.sh "message"        # git add -A, commit, push to origin main
```

`scripts/push.sh` reads the GitHub token from `.git/push-token` (not tracked). If that file is missing,
recreate it with the owner's PAT: `printf '%s' '<PAT>' > .git/push-token`. Git identity is set inside the
script (`Whiskerfield <whiskerfield@users.noreply.github.com>`). If pushing says "repository not found",
re-add the origin: `git remote set-url origin https://github.com/cid0980/Whiskerfield.git`.

Verify a deploy: poll `https://api.github.com/repos/cid0980/Whiskerfield/actions/runs?per_page=1` until the
run for your `head_sha` (not the previous one — it can take ~30 s to appear) is `completed/success`, then
`curl -sL "https://cid0980.github.io/Whiskerfield/version.json?v=$RANDOM"` should show the new version
(the CDN can lag up to 10 min, `cache-control: max-age=600`).

Release checklist per batch: fix → `npm run build` → targeted tests → README changelog + feature text →
bump `package.json` version → delete scratch files → `scripts/push.sh "vX.Y.Z: …"` → verify Pages.

## 4. Test API cheatsheet (`?test=1&seed=moss-424`)

`const g = window.__whiskerfield;` after `g.getState().ready` and clicking `#start-button` (or `g.start()`).

- `g.step(1/60)` advances simulation deterministically (physics, people, train, lifts, vehicles, flight seat
  follow). It does **not** run `world.update` streaming each step (the real loop does), does not move the
  camera, and does not call `checkDiscoveries` (`g.discover()`).
- `g.teleport(x,y,z)` then ~20–40 steps to settle. Teleporting inside a solid pushes the cat out sideways.
- `g.hold = {x,y,jump,sprint,climb,camera}`: stick input. `g.setCamera(yaw)`; with yaw `h`, `hold.y=-1`
  walks toward `(-sin h, -cos h)`. `g.hold.camera={pos:[..],at:[..]}` (arrays) pins the camera; `null` releases.
- `g.player` (pos Vector3, heading, support, grounded, climbing), `g.world`, `g.physics`, `g.cat`,
  `g.camera`, `g.renderer`, `g.day` (`.hour`, `.mode='pin'`, `.update(dt,camera,pos,lamps)`),
  `g.train`, `g.planes`, `g.flight`, `g.vehicles.list` (Map by id), `g.lifts.cars`, `g.people.list`,
  `g.board('sunmarch')` starts a flight, `g.travel(id)`, `g.wear`, `g.outfit`, `g.adapt(ms)`, `g.getQuality()`.
- Camera: `g.setCamera(yaw, pitch, distance)`, then **`g.settle(120)`** — it runs `updateCamera(1/60)`
  120 times, so camera tests do not wait for software-WebGL frames (which can be 1 s each). `g.cameraInfo()`
  returns `{ indoors, blocked, inside, distance, lookUp }`: `blocked` is the fraction of the line of sight
  the camera can clear (1 = the cat is in view), `inside` names any solid the eye is buried in (should be
  null), `lookUp` is the view pitch in radians. `g.getState()` also reports `indoors`, `cameraPitch`, `cameraYaw`.
- Seed `moss-424` facts: square at (0,0); gable house `0,0:0` at (−16.43, −16.46); lake block at chunk
  (−1,1) → water centre (−72,72) r 24, jetty along z=72 from x −100.5 to −88, boats `-1,1:boat0/1` at
  (−90.4, 70.28/73.72); balloon field lot `0,-1:3` at (16.5, −55.5) (basket at centre, steps on +x side);
  seafront chunks `cz=-3` (promenade z≈−224, beach to −242, pier x=0 from −225 to −266, lighthouse at
  z −264.2, boats `0,-3:boat0/1` at (−3, −245.6) and (3, −252)); airport chunk (2,0): plane stand
  (142, 1), cabin door x≈146, seat world ≈ (144.1, 1.93, −0.05); first rail column x=63, station z=−16.5.
- Playwright scripts must live in `scripts/` and run with cwd = repo root; `scripts/*.tmp.mjs` is ignored.
  Screenshots to `/home/user/screenshots/` (delete afterwards). Headless WebGL is slow (~0.5 s per game
  second with rendering); prefer `g.step` loops inside one `page.evaluate`.

## 5. Architecture facts you must know before touching things

**Physics / colliders**
- Static solids come from explicit `W.solid()/cylinderSolid()/ellipsoidSolid()` plus **auto-colliders**:
  `world.autoColliders()` turns every primitive in a chunk batch into a solid unless it is thin (<.05 in two
  dims), low (`maxY<.25`) or a rod. Rotated boxes become the AABB of their full extent. Any decorative box
  ≥ .05 in two dims becomes a wall — this is the cause of many "cat bumps into invisible things" reports.
- Dynamic solids (`physics.dynamic`) need `x,z,r` for the broadphase and `minX..maxZ, minY, maxY`; they are
  AABBs only (no rotation) — boats use a row of squares along the keel to approximate a turned hull.
- Step height .25, cat radius ≈.2, height .49. `resolve()` pushes the cat out of any containing box.
  Walking into a climbable wall for .32 s auto-starts a scramble (`wallPush`), which is why the cat
  "jumps about" near decorative shapes; `support.kind` strings drive special cases (`roof`, `lift`, `car`,
  `boat`, `balloon`, `seat`…).
- `physics.support(x,z,ref)` = highest walkable surface ≤ ref; `physics.ceiling()` ignores roofs/ellipsoids.
- Water: `world.inWater(x,z)` → circle `{x,z,r}`; the sea is one huge circle (`SHORE_Z=-242`, `SEA_R=1e4`).
  The cat is blocked at a water edge only when approaching from land and `pos.y<.2`; a cat that lands in
  water wades slowly. Nothing stops a cat *teleported* or *jumping* into water.

**World / chunks**
- `World.theme(cx,cz)` → `sea | coast | rail-coast | square | airport | lake | lanes | market | works |
  towers | play | allot` (+ `rail-` prefix on `cx%6==1`). `lotKind()` maps theme → four lots at
  (±16.5, ±16.5) from the chunk centre. Forced: lake at (−1,1), balloon field at `0,-1` lot 3.
- Rail columns `cx%6==1` at `x=cx*72-9`; stations on even `cz` (land only); airports `cx%6==2 && cz%6==0 &&
  cz>COAST_CZ(-3)`. Sea chunks `cz<-3` are water + rail viaduct only.
- Chunk objects carry `colliders, buildings, parks, water, landmarks, lifts, vehicles, lamps, jobs`.
  `world.landmarks` etc. only include **loaded** chunks.
- Buildings: `makeBuilding` → `rooms.js` hollow interiors (`hollow`, `doorway`), `roofType 0 = gable`,
  L-wings, towers from `places.js` (`makeTower`: floors every ~3 m, scissor stairs at the back wall, lift).

**Camera (`main.js`, `updateCamera` ~line 540)**
- Third person orbit: `cameraYaw/Pitch/Distance` with targets, pitch clamp −.62..1.4, collision pushes the
  camera in toward the cat when a solid is between (`shape==='roof'` treated specially). Interiors: a
  ceiling check lowers the camera. Flight overrides with `flight.cam`. Known bad (see §7).

**Day/night** — `DayCycle.update()` every frame from the main loop; `NIGHT` uniform drives window glow.

**Flight (`plane.js` → `Flight`)** — phases `board(3s) → taxi(7.2) → roll(5) → climb(9) → cruise(22; world
swap at t=10 under a white fade) → descend(9) → rollout(4) → taxiIn(7.2) → stand(2.6)`. Each phase sets a
camera via `local()` (plane-local, rigid) or exterior arrays (lerped). `main.js` copies `flight.seat` into
`player.pos` every frame while `flight.active`; `world.update` uses `flight.anchor` during flight.
`flight.onTravel` swaps the world and re-points `flight.plane` at the new airport's plane.

**Vehicles (`vehicles.js`)** — `Vehicles.sync()` builds from chunk specs; `control(support,ix,iz,yaw)` is
called inside `simulate()` *before* the cat moves and returns true when a boat took the input;
`update()` moves everything and returns `{dx,dy,dz,vehicle}` which `carry()` applies to the cat.

## 6. What is known to work (verified by tests/screenshots, v1.7.1)

Day cycle; enterable train carriages; the full in-cabin flight with landing; lake/jetty/boats steering and
shore stop; seafront/pier/lighthouse/sea; balloon ride end-to-end; wardrobe; towers with lifts; PWA
offline; settings version label + "Check for updates" (SW `update()` + `version.json`, `SKIP_WAITING`);
the camera indoors (house, carriage, cabin, tower lift) with the cat always in view; looking up at the sky;
riding the train/balloon without the view lagging; walking past scenery without scrambling on it.

## 7. OPEN BUGS — the owner's list (do these, in this order, in pushed pairs)

Plan each one (read the relevant code first, reproduce with a `scripts/*.tmp.mjs` Playwright script and
a screenshot grid), fix, test, push. Suggested pairing in brackets.

1. **[DONE in 1.7.1]** Check-for-updates button + version in settings.
2. **[DONE in 1.7.2, pair A]** Camera. `updateCamera` in `main.js` is one orbit rig now: a swept
   sphere (`physics.segmentHit`, boxes/cylinders/ellipsoids/roofs-as-slopes) pulls the eye in until
   nothing is between it and the cat, `physics.headroomAbove` (room-sized solids only) switches on
   "indoors", which shortens the lens to suit the ceiling, dips the eye under it, and searches nearby
   yaw/pitch for the direction with most room when the cat is cornered. Pitch runs to −1.32, and a
   ground-lifted eye carries the look-at point up with it. Moving supports (`vehicle/train/lift/plane`)
   are followed by the frame's whole delta before smoothing. One `orbit()`/`sensitivity()` path serves
   drag, pinch, wheel and gamepad. Verified by the new camera test and `scripts/camera-shots.mjs` before/after grids.
3. **[DONE in 1.7.2, pair A]** Cat jitter. `nearbyWall` ignores solids the cat can step onto, ignores
   auto-colliders under 0.6 m tall or paper-thin, and `perchAbove()` refuses a low wall with nowhere to
   stand on top (tall walls defer to the mantle, as before). `resolve()` caps each push at 0.2 m and does
   4 passes. Measured with `scripts/jitter-probe.mjs` (square lane: 1 direction flip and 3.1 rad of
   wobble → 0; east pavement: 2 scrambles/42 airborne steps → 1 car bonnet/12).
4. **Train walking is hard. [pair B]** Interior is 2.6 m wide with benches as solids; doors 1.3 m; the
   cat slides off the running board; boarding needs you to be exactly at a door. Plan: widen floor solid,
   make benches `walkable` tops, add a low lip at doors, make the platform-to-car gap zero, and make the
   carriage floor carry the cat (already does) with camera interior mode.
5. **Lake: "I walk in water". [pair B]** The water-edge wall only applies from land and at `y<.2`; jumping
   or stepping off the jetty/boat puts the cat *in* the lake, where it wades forever. Plan: when in water
   and not on a solid, swim: buoyancy to `y≈.0`, slow move, auto-climb out onto any surface ≤ .5 m above,
   and gently push toward the nearest shore after 20 s; also a swim pose in `cat.js`.
6. **Furniture in doorways / furniture looks bad. [pair C]** `furnishHouse` places kits by room rectangle
   without excluding the doorway or window strips. Plan: compute a "no-go" strip in front of every doorway
   (and the path between the two rooms) and reject placements intersecting it; keep ≥ .9 m clear path
   from door to each room; improve kit visuals (legs, backs, cushions, lamps, rugs) — look at
   `rooms.js` kits and the works floor; compare screenshots before/after.
7. **Tower stairs look bad and are hard to walk. [pair C]** `makeTower` scissor stairs are ramps of thin
   slabs; the cat catches on edges. Plan: real steps (≤ .25 rise, ≥ .3 tread) with solid stringers and
   handrails, a landing every half flight, and a slightly wider shaft; verify with the lift test recipe
   (`g.teleport(spec.x,.6,spec.z+2.2); g.setCamera(0); g.hold.y=-1`).
8. **Planes clip buildings on take-off/landing. [pair D]** The runway is only one chunk; the climb path
   starts at `len/2` and the descent from 60 m passes over the neighbouring blocks. Plan: keep airport
   chunks' neighbours along the runway axis low (force `lanes`/`park` themes with no towers for
   `cx±1`), start the climb later with a steeper initial pitch, and make the glide slope end exactly at
   the runway threshold (check `Flight.update` `climb`/`descend` numbers against building heights ≤ 12 m).
9. **Hard to move inside the plane. [pair D]** Seats are 1.1 m squares across the whole row; aisle .7 m;
   seat solids overlap the aisle. Plan: shrink seat solids to the cushion footprint, make cushions
   walkable (kind `seat`), leave the aisle clear, and put the camera in interior mode in the cabin.
10. **People: bodies/clothes don't fit, floating when seated, interactions broken. [pair E]**
    `npc.js` builds a person from boxes; shirt/trousers scale with `build`/`height` but the head/limbs don't
    follow, and the sitting pose offsets `y` by a constant instead of the bench top. Plan: derive all
    parts from one `height` scale; for sitting, use `physics.support()` at the bench and set hip height to
    the bench top; make `greet` trigger when the cat is within 1.8 m and visible, with the person turning
    to face it; re-check the "neighbours wander freely" test.
11. **[DONE in 1.7.2]** Balloon/boat ride view "stuck, lagging, fixed": fixed with item 2 (the ride is
    followed rigidly). Re-verify from the balloon/boat scenes in `scripts/cam.tmp.mjs` if the carry code
    changes.

When all of the above are done, bump to 1.8.0 with a changelog entry summarising "camera, movement and
interiors overhaul".

## 8. Pitfalls / gotchas (learned the hard way)

- GitHub Pages is built by CI (`.github/workflows/deploy.yml` runs `npm run build` and copies an **explicit
  file list** into `_site`). Adding a new top-level file? Add it to the `cp` line there too, or it 404s on
  the live site. Because CI rebuilds, the live `assets/game.js` md5 differs from your local one by the
  build timestamp — compare `version.json` or the SW cache name instead. Still build locally before
  committing so tests and the committed bundle match. Every build changes `sw.js` cache id and
  `version.json`, so every push is an "update" for installed players.
- `index.html` boots `assets/game.js`; the SW precaches it; `version.json` and `sw.js` bypass the cache.
- Python patch scripts: always `assert anchor in text` before replacing; a `//` comment in a one-liner
  swallows the rest of the line (use `/* */`).
- `people.dispose()` resets `physics.dynamic=[]` — only safe during world swap. All dynamic solids must be
  re-added after a swap (planes.sync, lifts.sync, vehicles.sync are called).
- The aeroplane's shell is built from `GEO.halfTube` (see `world.js`): two half-tubes opening towards the
  cabin, so the fuselage's own skin is never drawn inside it. If you swap them back to `GEO.cylinder`, any
  camera off the aisle centre sees the livery tube straight across the cabin. The `rz` sign picks the half:
  `+Math.PI/2` keeps the top, `-Math.PI/2` the bottom.
- `physics.headroomAbove` only counts *room-sized* solids as ceilings (≥2.4 m in both directions): otherwise
  a table top over the cat's head would put the camera into interior mode on the street.
- `nearbyWall` now ignores anything the cat can step onto and auto-colliders under 0.6 m — if a new place
  needs a small climbable prop, give it an explicit solid with `climbable: true`.
- Camera probe scenes must close modals (`#flight-modal [data-close]`) and use `g.settle()`; a screenshot
  with a modal open shows the backdrop, not the camera.
- Plane window "glass" boxes are opaque — window holes are real openings; frames are four thin strips.
- Interior cameras during flight must be rigid (no lerp) or they lag behind a climbing plane.
- `cat.update()` sets poses; `cat.root.rotation.y = player.heading` is set in `main.js`; during flight the
  root quaternion is taken from the plane.
- `g.world.radius=1; g.world.center=''` in tests loads fewer chunks; `world.landmarks` only has loaded ones.
- Holding a direction after a climb makes the cat scramble up the next wall; release input in tests.
- `toBeVisible` fails on `#touch-controls` in desktop tests; click hidden settings buttons via `evaluate`.
- `hash(cx,cz,seed,salt)` is used for all deterministic choices; changing a salt changes every town.
- Chunk order in `world.buildings` depends on load order; tests that "find the first building" can change
  behaviour when lot kinds change — prefer explicit ids.
- The train's `stationsNear()` must return at least one station (the first ashore) or `place()` throws.
- NPC `chooseNext()` must always set `this.target` (idle if no options) or `update()` throws.
- Node sandbox: `/home/user/screenshots` and `scripts/*.tmp.mjs` are scratch — delete before pushing.
- `ponds, fountains, birds…` is mildly flaky: it asserts that most birds perch below 3.4 m, and the perches
  are chosen on real frames before the deterministic part starts. Re-run it before believing a failure —
  the same is true of anything that depends on where people and birds happen to be standing.

## 9. Scratch scripts worth recreating

Two probes are checked in (they drive the `?test=1` API, so `npm start` first):

- `node scripts/camera-shots.mjs after [scene]` — puts the cat in every room and ride (`house`, `train`,
  `plane`, `tower`, `sky`, `balloon`, `planeout`, `street`), settles the camera with `g.settle()`, prints
  distance / whether the eye is buried / whether the cat is visible, and writes
  `/home/user/screenshots/<tag>-<scene>.png`. Compose a grid with Pillow and look at it.
- `node scripts/jitter-probe.mjs 3000 after` — walks six lanes (pavements, square, market, park) and counts
  auto-scrambles, direction flips, airborne steps and how far the cat got. Give it another port to compare
  against an older build: `git worktree add /tmp/before HEAD`, `npm run build` there (symlink `node_modules`),
  `PORT=3100 node server.mjs`, then probe 3100 too.

Also worth knowing: the sandbox has 2 CPUs, so run **one** browser at a time. Two Playwright runs (or a probe
plus the suite) starve each other and every test starts timing out or returning junk — that is not a bug in
the game.

`scripts/shot.tmp.mjs`-style: launch chromium 900×560, `goto('http://localhost:3000/?test=1&seed=moss-424')`,
wait ready, click `#start-button`, wait welcome opacity 0, then `page.evaluate` with `g.step` loops, then
`page.screenshot`. Compose grids with Pillow (`python3 -c "from PIL import Image ..."`) and inspect them —
screenshots catch what tests do not (camera, furniture, people poses).
