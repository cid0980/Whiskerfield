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
  Two rules, both in `physics.js::stepPlayer`. (1) From dry land the water's edge is a wall — the cat is
  pushed back to the rim. (2) A cat that is *in* the water (a jump, a step off a boat) **swims**: it floats
  at the waterline (`y ≈ .02`, `p.swimming`, `p.grounded` stays true but `support` null), moves at .62× and
  the step-up logic then lifts it onto the bank, because floating puts the shore inside `CAT.step`. Never
  leave a swimmer standing on the lake bed: the shore is higher than a step from there, so it can never
  get out. After 20 s of no input in the water the cat drifts toward the nearest bank by itself (`swimTime`).
  `p.swimming` is passed to `cat.update` (`swimBlend`: paddling legs, head up, body low).

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

**Empty as of 1.8.0.** All ten items below are done; the list stays here as the record of what was
fixed and why. New reports from the owner go at the top of this section.

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
   Follow-up in **1.7.3**: "indoors" is any ceiling over the cat up to 6 m (`CAM.ceiling`), pitched roofs
   count as a ceiling when there is nothing else (`headroomAbove(..., true)`), the eye is clamped under the
   ceiling at both the cat and its own end of the shot, and the outdoor "see over the roof" lift is capped
   at 2.4 m. Before that, the café/grocer/living-room (3.55 m ceilings) put the camera outside the building.
3. **[DONE in 1.7.2, pair A]** Cat jitter. `nearbyWall` ignores solids the cat can step onto, ignores
   auto-colliders under 0.6 m tall or paper-thin, and `perchAbove()` refuses a low wall with nowhere to
   stand on top (tall walls defer to the mantle, as before). `resolve()` caps each push at 0.2 m and does
   4 passes. Measured with `scripts/jitter-probe.mjs` (square lane: 1 direction flip and 3.1 rad of
   wobble → 0; east pavement: 2 scrambles/42 airborne steps → 1 car bonnet/12).
4. **[DONE in 1.7.5, pair B]** Train walking. There were two faults. The station platform ended at
   `x+5.6` while the carriage's running board began at 5.7 and sat 6 cm *below* the floor, so a cat not
   exactly at a door stepped into a 0.6 m gap beside a 1 m platform and fell to the track. Fixes: platform
   edge at `x+6.1` (meets the running board), running board widened to .9 m with its top flush with the
   carriage floor, doors 1.8 m (boarding now works within ±.9 m of the door centre), floor solid 2.8 m,
   benches pushed back (`wx - s*.62`, .62 wide) leaving a 1 m aisle. Verified: walking in at the door from
   the platform lands on `car`/`seat` and the aisle runs the length of a carriage.
5. **[DONE in 1.7.5, pair B]** Lake: "I walk in water". The cat now *swims* — `afloat` in `stepPlayer`
   (in water, `y<.34`, no solid footing within .08) → floated to the waterline, .62× speed, `grounded` kept
   true so the step logic lifts it onto the bank, `swimTime` drift-to-shore after 20 s, and a `swimBlend`
   paddle in `cat.js`. Test: dropped into the lake it floats at `y .05` and paddles out to dry land in ~6 s.
6. **[DONE in 1.7.6, pair C]** Furniture in doorways. `hollow()` now reports `door` + `at`, and
   `furnishKit()` (rooms.js) furnishes a room through `apronShim()`: a shim over the batch *and* the
   world's solid helpers that drops anything landing in a door apron (`doorAprons`) or the partition gap
   from both the mesh and the collider list, so no kit had to be touched. `furnishHouse` also slides the
   partition clear of the front door (`doorAxis` — mind the tangent sign, it flips with the side), and
   `doorway()`'s leaf lies flat against the wall instead of standing in the opening. `building.door` is
   recorded for every house, shop, wing and interior, so tests can walk every door in town.
7. **[DONE in 1.7.6, pair C]** Tower stairs. `places.js::stairs()` builds flat treads (rise < .21 m, about
   fifteen per 3.1 m floor) as upright boxes with their own `kind:'step'` solids; the tilted stringer is
   gone, and the stair well in the slab above reaches back 3.1 m so a climbing cat's head is under the
   opening. **Pitfall:** `ramp()` draws tilted slabs and adds *no* solid — the auto-collider pass then
   gives each one a bounding-box collider, so a "ramp" is really a jagged invisible stair, and a tilted
   stringer becomes one huge invisible wall across the flight (the cat scrambles up it to 2.5 m and
   falls). Never build a walkable slope out of tilted boxes; use upright treads.
8. **[DONE in 1.7.7, pair D]** Planes clipping buildings. Two causes. (1) The climb was quadratic
   (`y = .35 + 110k²`), so the plane spent its first block or two skimming rooftops at ten metres;
   it is now `110 * k^1.4`, and the *two lots either end of every runway* are cleared of buildings —
   `runwayLane(cx, cz)` in world.js (one block east or west of an airport chunk) makes `lotKind()`
   park/allotments for the northern row only (`i >= 2`), the row the runway points down. **Do not**
   widen this to whole blocks or to two blocks: 1.7.7 did, and it took a block's worth of shops,
   markets and houses out of the town either side of the airport, which the town tests felt at once. (2) `lotKind` must return real lot kinds ('allotments'), not a
   theme name ('allot') — the wrong word silently falls through to a house. Test checks every frame of
   a full flight: no building within 3 m of the plane's path while airborne, plus the lane kinds.
9. **[DONE in 1.7.7, pair D]** Moving about the plane. The seat solids were one slab per *pair* of
   seats (`d: 1.1`, reaching to z ±.25) which pinched the aisle to half a metre. One collider per
   cushion now (`d: .46` at z ±.55 / ±1.05) leaves a .64 m aisle, and cushions are `climbable: true`
   so the cat can step up on a seat instead of bumping it. Measured: 11 m of cabin walked in two
   seconds. **Pitfall:** when editing those one-line loops, keep the closing braces — a missing `}`
   shifts every const out of scope and the whole page dies with "sz is not defined".
10. **[DONE in 1.7.8, pair E]** People. (1) Floating when seated: the pose dropped the body by a
    constant (`legH*.52 - .44`), which on a .45 m café chair left the hips a third of a metre above the
    seat. `update()` now measures the seat under them (`physics.support(x, z, y+.95)`, cached as
    `seatAbove`) and `animate()` lowers the hips to it: measured gap 0.00–0.02 m on every sitter.
    (2) A seated person now turns to watch the cat (slowly, 1.2–1.6 rad/s) instead of being locked to
    their job heading, and the greet radius is 1.9 m. (3) Skirts were knee length on a box body, so
    sitting put the thighs *inside* the cloth; the skirt is mid-thigh now. Everyone's parts are derived
    from one `height` and one `build`, so a kid's smaller frame keeps smaller clothes.

## 8. Pitfalls / gotchas (learned the hard way)

- **Where the rails are is one function: `railOffset(z)` / `railAt(x, z)` in `world.js`.** It is a
  pure function of z, zero at every station (`STATION_Z0 = -16.5`, `STATION_GAP = 144`, i.e.
  `cz * 72 - 16.5` for even cz) and swinging `RAIL_SWING` (9 m) either side in between, cubed so the
  platform ends stay straight. The track generator, the station, the footbridges/signal boxes and the
  train all read it, so they cannot disagree — if you add anything that has to sit on the line, use
  `railAt`, never `railX` alone. The sleepers and rails are laid as 1.2 m segments turned to
  `railHeading(z)`; a long box drawn along z would cut every bend.
- **The train is three vehicles, and its solids are turned boxes.** `splitVehicles` cuts the batched
  geometry at z boundaries and re-centres each vehicle on its own origin, so each mesh can be placed
  at `railAt(baseX, z + origin)` and turned to `railHeading`. Its colliders are axis-aligned, so each
  one gets the enclosing box of the turned footprint. `train.update()` returns `{ dz, dx }` now — a
  rider has to be moved by both, or a bend sweeps them off the train.
- **The sea is bounded by a reef at `SEA_FAR_Z` (`SHORE_Z - 120`), and two things stop a swimmer: the
  rocks, and a clamp in `stepPlayer` that is the backstop when the reef chunk is not loaded.** Keep
  both. The clamp is what makes the boundary true — a test that swims north with `world.radius = 1`
  (as `enter()` sets it) sees no reef at all and is stopped by the clamp alone, so if a test needs to
  look at the reef it must raise `g.world.radius = 2` and reset `g.world.center = ''` first. Anything
  the game depends on at a distance greater than the streaming radius has this problem.
- **A person placed at a coordinate can be inside a solid, and then nobody ever sees them.** The works
  foreman sat at `ox - 1, oz`, which is the inside of the office box — one solid block with a `wall`
  collider — so he was invisible for the whole life of the build. When placing a person (or a seat),
  check the spot against the solids already placed there; the quick probe is to iterate
  `g.people.list`, query `g.physics.query(q.x, q.z, .1)` and look for a non-seat box that contains
  them. Note the trap: people only exist near the player *and* only once the interior has been built,
  so teleporting to a far landmark and reading `g.people.list` shows nobody — approach it in real
  steps, or probe the coordinates you know the room occupies.
- **`g.step()` moves the physics and the town; it does not move the camera.** The eye only moves in
  `updateCamera`, which runs from the render loop (or from `g.settle(n)`). A soak that calls `g.step()`
  in a loop and samples `g.cameraInfo()` is reading a camera frozen where it was last left — this
  reported "the eye is inside a wall for six seconds" at every house, which was nothing of the sort.
  Check anything about the view with `g.step(1/60); g.settle(1);` per frame.
- **The camera's own easing can put the eye inside geometry even when both ends are clear.** The
  sidestep offset is eased (`aimDy/aimDp`), and the distance came from the *chosen* direction, so the
  direction halfway through the ease was never cast. `updateCamera` now also casts along the direction
  it is actually looking from (`aimDist`, which the desired distance gives way to), and a final
  `eyeInSolid` pass pulls the drawn eye back towards the cat until it is out of anything solid — the
  ground-lift and the ceiling clamp can otherwise lift the eye into a flowerpot or a stall beam.
  `cameraInfo().inside` skips thin cylinders, exactly as `cameraOccluder` does, or every lamp post in
  the town counts as a wall.
- **The cat's gait has to be derived from the ground speed.** `Cat.update` used a fixed cadence
  (`speed / strideLen * .9`), which at 7 m/s asked for 1.1 gait cycles a second while the legs were
  swinging 2 m/s worth of ground — the paws skated. It is now `cadence = speed / strideLen` cycles a
  second, capped at 9, with `strideLen` ≈ the distance the feet actually travel in one cycle
  (walk .40 m, trot .57, gallop .67), and the leg swing amplitudes are set big enough to cover it.
  The speeds had to come down with it: `BASE_SPEED` 7 → 5, `SPRINT_SPEED` 12.5 → 8. If you raise them
  again, raise the swing amplitudes or the cap and watch the feet.
- **The camera eases, the input must not.** `cameraYaw` is damped toward `cameraYawTarget`, so steering
  the cat by the eased yaw means a flick of the mouse sends it the *old* way for a fifth of a second.
  `simulate()` and `vehicles.control()` use `cameraYawTarget`.
- **A boat must not roll by the heading error.** `rotation.z = ... + turn * 8` looked like a bank but
  it flips sign the instant the error crosses zero — the whole boat (and the cat on it) shook while
  steering. Bank from the *angular velocity*, damped (`v.bank`), and keep the deck solids
  rotation-invariant: a deck made of axis-aligned boxes swings out from under a turning cat, so the
  deck is now a run of cylinder platforms down the keel (`deckSolid`).
- **The cat's rest pose is a sphinx.** The old pose folded the legs up under a body dropped .4, which
  only worked with the old stub legs; with real legs the knees went through the floor. The body settles
  .42 and the legs lie out flat (front hip −1.5, hind +1.5), which puts every paw on the ground.
  Measure it: `cat.legs[i].paw.getWorldPosition()` minus `player.pos.y` must be ≈ 0.
- **`python str.replace` in a patch script: always `assert old in text` first.** A whole-block rewrite
  of the cat constructor silently reverted the `mounts` line that a later patch was meant to change, and
  the collar stayed a hoop around the chest through three rebuilds. (Second time this has bitten.)

- Climbing ends where the *head* meets something: an eave overhanging the wall by 10 cm used to stop a
  climb a paw's width short of the top, so a single-storey roof was unreachable. That branch now looks
  for a thin lid within reach with headroom above it and hooks over it, and the top-of-wall branch hands
  the climb on to any higher climbable solid on the same face (`nearbyWall(p.pos, .55, heading, s, .08)`).
- Tests that grab "the first building within 80 m" depend on chunk streaming order: the same seed picked
  a 9.3 m house on 1.7.4 and a 3.85 m annexe on 1.7.8. Assert the behaviour (a roof is reached), not the
  building. And a screenshot at the end of a long deterministic climb needs a longer test timeout (240 s)
  rather than a faster climb — under software WebGL a frame can take seconds.

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
  a table top over the cat's head would put the camera into interior mode on the street. Pass
  `roofs = true` when you want pitched roofs counted too (an annexe or shopfront ceiling).
- **"Indoors" is *is there a ceiling over the cat*, not *is the ceiling low*.** 1.7.2 tested
  `headroom < 3.05`; the café, the grocer and somebody's living room are 3.55 m to the tiles (3.19 m of
  headroom), so all three were treated as open air, the camera drifted out through the shopfront to 8.16 m
  and you looked down at the roof from outside. The limit is `CAM.ceiling = 6` now and the lens is still
  trimmed to the headroom there actually is. `scripts/indoor-probe.mjs` lists every interior with its
  headroom, whether it is detected as indoors, and how far the eye ends up — run it after touching the rig.
- A `shape: 'roof'` solid means "everything below the tiles is solid", so a swept sphere inside the building
  starts already buried in it (`sweepRoof` returns 0 for a ray under the surface). Never make roofs block
  the camera *cast*: they limit the eye's height instead (`headroomAbove(..., true)` plus the ceiling
  clamp). Doing the obvious thing — roof over the cat ⇒ occluder — jammed the eye 0.88 m from the cat in
  every room.
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
- **Heading convention:** `player.heading` faces `(sin h, cos h)` in world `(x, z)` — *not* `(-sin, -cos)`.
  Both maps draw the arrow with `ctx.rotate(-player.heading)` and a triangle pointing **down** (+y), which
  is right; an up-pointing triangle (or a `+π/2` arc on the camera cone) points the wrong way. `getState()`
  has `heading` and `drawMinimap()` is in the test API, so check the arrow rather than guessing.
- The minimap (`#minimap`, drawn by `drawMinimap`) redraws at 12 Hz from the same world data as the big
  map; `MAP_ICON` is shared by both. Its decorations are sized in backing pixels divided by `k = w / 116`,
  so they stay the same size on a retina screen. `canvas.dataset.heading` / `.yaw` record what the arrow
  actually points at.
- **Chunk building is sliced.** `world.createChunkSteps(cx,cz)` is a *generator* that yields between the
  ground, each of the four lots, the street furniture, `autoColliderSteps` (every 1200 pieces) and the
  final mesh; `world.update(pos, 1)` spends at most `world.sliceMs` (7) per frame and finishes a chunk over
  several frames. `update(pos, budget > 1)` builds synchronously — `g.teleport()` relies on that, so keep
  the two paths when you touch it. Measured on this 2-CPU sandbox: a chunk used to cost 90–450 ms in one
  frame, now 22–57 ms.
- `Batch` writes into typed arrays by index (`reserve()` doubles them), caches `Color.set` parsing in
  `colourCache`, and has a fast path for `rx = rz = 0` (a turn about Y only). `batch.items` is a **flat**
  array of numbers, stride 10 (`ITEM_STRIDE`) — `autoColliders` walks it by index, so do not push objects.
- The camera's roomier-angle search keeps its choice in `camAlt` while it still has room and eases the offset
  (`aimDy`/`aimDp`, damped at 8/s); re-deciding every frame shook the view in tight rooms (measured: 0.38 rad
  of view swing per frame at a wall, now 0.07). The eye pulls in at 26/s but relaxes out at 6–9/s.
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
- `node scripts/shake.tmp.mjs` style probes are the way to look for camera jitter: run one simulate frame +
  one `updateCamera` frame (`g.step(1/60)` then `g.settle(1)`), record `camera.position` and the view
  direction from `camera.matrixWorld.elements` (`-e[8], -e[9], -e[10]`), and count frames where the view
  swings more than 0.12 rad twice in a row.
- `node scripts/indoor-probe.mjs 3000` — every interior in the seed: headroom, whether the rig calls it
  indoors, and how far the eye ends up.
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
