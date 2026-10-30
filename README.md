# Whiskerfield

▶ **Play now:** https://cid0980.github.io/Whiskerfield/

Installable PWA — open the link once, tap **Install game**, then play offline.

**Small paws. Endless possibilities.**

A peaceful, installable, offline-first 3D cat adventure with fluid quadruped movement, a naturalistic town palette, and a mobile-friendly controller. Wander a procedurally generated town, climb almost any wall, hop across rooftops, find quiet gardens, and take a catnap whenever you like. No timers, combat, accounts, or network calls during play.

## Play

The game is a static web app. From this folder:

```bash
npm install
npm run build
npm start
```

Open `http://localhost:3000`.

For a deployed copy, serve the built static files over **HTTPS**. A service worker needs HTTPS (or `localhost`) to cache the game for offline play.

## Install once, play offline

1. Open the game in Chrome, Edge, Safari, or another modern browser.
2. Wait for the header to say **Offline ready**.
3. Choose **Install game**, or use the browser’s install / Add to Home Screen option.
4. Launch it from your home screen or app list. After the first complete load, the whole game works without internet.

Your world seed, cat position, discoveries, and settings are saved locally on the device. Clearing site data removes that save. The installed app requests persistent storage where the browser supports it.

## Controls

| Action | Desktop | Touch |
| --- | --- | --- |
| Move | WASD or arrow keys | Paw joystick |
| Run | Hold Shift | Toggle run button |
| Jump | Space | Jump button |
| Climb | Hold E near a wall, tree, lamp post, or car — or just keep walking into it and the cat scrambles up | Hold climb button (or walk into it) |
| Look around | Drag the world | Drag the world |
| Zoom | Scroll | Pinch |
| Map | M or map button | Map button |
| Catnap | N or “Stay a while” | Moon button |
| Gamepad | Left stick move, right stick look, A jump, B/RB climb, triggers run | Same mapping for Bluetooth controllers |
| Pause / settings | Escape or settings button | Settings button |

Climbing has no stamina meter. Release the climb control to let go; at the top the cat mantles onto the roof, branch, or bonnet. Falls are harmless.

On phones the game asks for fullscreen landscape when you start; a portrait layout is still available via “Continue in portrait”. Add `?seed=your-words` to the URL to visit a specific town.

## What is generated

- Endless chunk-streamed neighborhoods from a deterministic world seed.
- Buildings with varied footprints, heights, plaster colors, roof shapes, windows, shutters, balconies, awnings, ivy, chimneys, crates, and rooftop details.
- Gabled, hipped, flat, and stepped roofs; rooftop pergolas, planters, laundry, and water butts.
- Parks with ponds, footbridges, benches, trees, flowers, and street lanterns.
- Rooftop and garden discoveries, a live neighborhood map, drifting leaves, butterflies, and synthesized ambient sound.
- Landmark lots, one per district: a covered market with stallholders and a bandstand, a sawtooth-roofed works with a turning flywheel and a smoking chimney, tall towers with outside stairs, a climbing playground with a trampoline, a warehouse yard, and a café, a corner shop and a house you can actually walk into (tables, counters, shelves, beds, pendant lamps).
- Townsfolk with faces, hair, glasses, beards, hats and work clothes: children, grandparents, a baker, a mechanic, a vendor, a waiter, an office worker, a builder — each tied to a place and a job, not just wandering.

The starting square is composed for a gentle first view, but its houses are still seed-varied. Beyond it, the town continues as you walk.

## Project layout

```text
index.html              App shell and accessible UI
styles.css              Responsive HUD, menus, and touch controls
src/main.js             Game loop, camera, input, HUD, saves, PWA setup
src/physics.js          Cat movement, collisions, climbing, perching, mantling
src/npc.js              Roaming neighbours who stop to fuss the cat
src/birds.js            Perching garden birds that scatter when the cat approaches
src/platform.js         Fullscreen, orientation lock, and install helpers
src/world.js            Seeded procedural town, batching, colliders, map data
src/cat.js              Animated low-poly cat
src/audio.js            Web Audio ambience and feedback
assets/game.js          Built local bundle (no CDN)
assets/fonts/           Local fonts and licenses
icons/                  SVG and PNG app icons
manifest.webmanifest    Install metadata
sw.js                   Generated precache service worker
scripts/build.mjs       Bundle, icons, and offline cache manifest
server.mjs              Tiny static server for local hosting
tests/game.spec.mjs     Playwright gameplay, mobile, and offline tests
```

## Development

```bash
npm run build   # rebuild bundle, icons, and service worker
npm start       # serve on 0.0.0.0:3000
npm test        # Playwright tests (requires Chromium: npx playwright install chromium)
```

The build writes a content-hashed service worker cache. All runtime assets are local and precached: HTML, CSS, JS, fonts, icons, and manifest. There are no analytics, ads, remote textures, or external audio files.

## Notes

- WebGL is required. On older devices, turn off **Soft shadows** in settings.
- **Gentler motion** reduces camera drift and ambient particles.
- The game is designed to be calm: discoveries are optional, and there is no fail state.
- Fonts: DM Sans and Fraunces (SIL Open Font License). Renderer: three.js (MIT). See `assets/fonts/` and `assets/Three-LICENSE.txt`.

MIT licensed. See `LICENSE`.

## Version 1.1 improvements

- Smoother acceleration, deceleration, turning lean, coyote time, jump buffering, variable jump height, and landing squash.
- More natural cat animation: articulated legs, walk/run gait, spine motion, head stabilization, segmented tail, ear flicks, and climbing motion.
- Mobile controller: analog joystick with deadzone and shaping, larger touch buttons, drag-to-look, pinch zoom, and optional Bluetooth gamepad support.
- Naturalistic visual theme: grounded plaster/roof/foliage colors, warmer sunlight, subtle ground/fur texture, and a darker glass HUD with brass accents.

## Version 1.2 improvements

- Faster, more responsive cat: brisk walk, a proper sprint (Shift / run button / triggers), analog joystick speeds that stay useful, higher jumps, and shorter climb wind-up.
- Walk into any climbable thing and the cat scrambles up by itself; trees, lamp posts, chimneys, car bonnets, planters, and fences are climbable or perchable, and the cat lands centred on narrow tops.
- Every piece of scenery is solid: benches, fountains, pots, parked cars, kerbs, pergolas, and canopies (you can still walk under the leaves).
- Neighbours wander the pavements in their own directions, chat to each other, and crouch down to greet a visiting cat.
- Phones: fullscreen landscape on start with orientation lock where supported, a compact non-overlapping HUD, a portrait fallback, and the install button hides once the app is installed or launched from the home screen.
- Consistent scale between the cat, people, cars, and buildings; the world streams endlessly in every direction.

## Version 1.2.1 fixes

- Each town keeps its own journey: opening `?seed=` for a different town starts you fresh there (settings kept), and returning to a seed restores where you left off.
- Map drag now tracks your finger exactly; the map shows the world seed so you can bookmark a neighbourhood.
- Adaptive quality recovers after 8 s of smooth frames instead of staying degraded, and says so with a toast.
- Each neighbour has their own heart sprite (no flicker when two greet you at once).
- Saves are change-driven rather than rewritten every 5 s while idle.
- Sensitivity slider shows a live percentage; the WebGL error screen shows its cat icon; the screen stays awake while playing (Screen Wake Lock, where supported).

## Version 1.2.2 fixes

- Camera never sinks to ground level or inside scenery: a higher minimum pitch, a floor under the eye, tall things pull it closer and low things (fountain rims, pond stones) lift it so the cat stays in view.
- The fountain's colliders follow its real shape (basin rim, column, top dish) — no more hovering above it.
- Cats don't walk into ponds: the water's edge stops them; a deliberate jump in means a slow wade back out.
- Little garden birds (budgie yellow, sky blue, green, white) perch on lamps, benches, sills, branches and chimneys, and flutter off with a chirp when the cat comes close.

## Version 1.3.0 — districts and places

- New places (`src/places.js`): each 5×5-chunk district gets a few landmark lots instead of another row of houses — market, works, towers, playground, warehouse, café, shop, home. The café, the shop and the home are open: step over the doorstep and the interior is furnished and solid.
- A parkour playground: platforms, a climbing frame, a slide, balance beams and a trampoline that launches the cat (`bouncy` surfaces in the physics).
- People rewritten (`src/npc.js`): proportioned bodies, skin and hair tones, eyes, eyebrows, mouths, glasses, beards, buns and ponytails, aprons, overalls, hard hats, briefcases, prams. Workers stand at their post (behind the stall, by the counter, on the factory floor) and turn to look at the cat when it comes close; wanderers still stroll.
- Discovery of places: walking into a landmark shows a short note and counts under the flag in the HUD; the map marks every landmark with an icon and a tick once visited. Saved with the rest of the progress.
- Movement: low steps and stair treads are climbed from the leading paws, not only once the body centre is over them; thin sheets (rugs, mats, posters) no longer block; small cone finials and lamp caps are no longer solid.


- Paws on top of the paving: pavements (13 cm), park paths, footpaths, roads and the square now have real ground heights, so the cat and the neighbours no longer stand ankle-deep in the kerb. Stepping on or off a kerb is a smooth step, never a fall. The pond sits slightly below the lawn.

## Version 1.2.5 fix

- Global collision: everything that is drawn is now solid. Every primitive placed in the world (bushes, planters, window boxes, railings, balcony posts, conifers, pond stones, garden ornaments…) automatically gets a collider, so the cat can no longer walk into anything. Only things lower than a cat's step (paving, cobbles), string-thin things (bunting, chains) and roof shells (which have their own sloped colliders) are left out. Low shrubs block rather than climb; a jump still clears them.

## Version 1.2.4 fix

- A proper catnap pose: belly on the ground, front paws stretched forward, hind legs tucked beside the body, tail lying flat and curling round — instead of the splayed sprawl.

## GitHub Pages

The included workflow at `.github/workflows/deploy.yml` builds the game and deploys the static site to GitHub Pages on every push to `main`.

Expected URL after Pages is enabled:

`https://cid0980.github.io/Whiskerfield/`

All paths are relative, so the PWA manifest and service worker work under the repository subpath.
