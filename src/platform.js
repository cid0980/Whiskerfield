// Fullscreen, orientation, and install detection, with every browser limitation handled softly.
const INSTALL_KEY = 'whiskerfield.installed.v1';
export const calls = [];
const note = (name, result) => { calls.push({ name, result, at: Date.now() }); if (calls.length > 40) calls.shift(); };

export const coarse = matchMedia('(pointer:coarse)').matches;
export const isIOS = /iP(hone|ad|od)/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
export const isSafari = /Safari/.test(navigator.userAgent) && !/Chrom|Edg|OPR|Firefox/.test(navigator.userAgent);

export function launchedStandalone() {
  return matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches || matchMedia('(display-mode: window-controls-overlay)').matches || navigator.standalone === true || new URLSearchParams(location.search).get('launch') === 'app';
}
export function rememberInstalled() { try { localStorage.setItem(INSTALL_KEY, String(Date.now())); } catch {} }
export function forgetInstalled() { try { localStorage.removeItem(INSTALL_KEY); } catch {} }
export function wasInstalled() { try { return !!localStorage.getItem(INSTALL_KEY); } catch { return false; } }

// Layered detection: standalone launch, a remembered install, and the related-apps API.
export async function detectInstalled() {
  if (launchedStandalone()) { rememberInstalled(); return true; }
  if (wasInstalled()) return true;
  if (navigator.getInstalledRelatedApps) {
    try { const apps = await navigator.getInstalledRelatedApps(); if (apps.some(a => a.platform === 'webapp')) { rememberInstalled(); return true; } } catch {}
  }
  return false;
}

export function isFullscreen() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
export function fullscreenSupported() { const el = document.documentElement; return !!(el.requestFullscreen || el.webkitRequestFullscreen) && !isIOS; }

export async function enterFullscreen(element = document.documentElement) {
  if (isFullscreen()) return true;
  try {
    if (element.requestFullscreen) await element.requestFullscreen({ navigationUI: 'hide' });
    else if (element.webkitRequestFullscreen) await element.webkitRequestFullscreen();
    else { note('fullscreen', 'unsupported'); return false; }
    note('fullscreen', 'ok'); return true;
  } catch (err) { note('fullscreen', err?.name || 'error'); return false; }
}
export async function exitFullscreen() {
  try { if (document.exitFullscreen && document.fullscreenElement) await document.exitFullscreen(); else if (document.webkitExitFullscreen && document.webkitFullscreenElement) await document.webkitExitFullscreen(); } catch {}
  unlockOrientation();
}
// Orientation locking only works for installed or fullscreen pages on mobile; failures are expected on desktop.
export async function lockLandscape() {
  try {
    if (!screen.orientation?.lock) { note('orientation', 'unsupported'); return false; }
    await screen.orientation.lock('landscape'); note('orientation', 'ok'); return true;
  } catch (err) { note('orientation', err?.name || 'error'); return false; }
}
export function unlockOrientation() { try { screen.orientation?.unlock?.(); } catch {} }

export function isPortrait() { return innerHeight > innerWidth; }
export function phoneLike() { return coarse && Math.min(screen.width, screen.height) < 820; }

// The one-tap "Play" path: fullscreen first (needs the user gesture), then the orientation lock.
export async function goImmersive() {
  if (!coarse) return { fullscreen: false, landscape: false };
  const fullscreen = await enterFullscreen();
  const landscape = await lockLandscape();
  return { fullscreen, landscape };
}

// Screen Wake Lock: keep the phone awake while playing. Silent no-op where unsupported.
let wakeLock = null, wantWake = false;
export async function keepAwake(on) {
  wantWake = on;
  if (!on) { try { await wakeLock?.release(); } catch {} wakeLock = null; return; }
  if (wakeLock || document.hidden || !navigator.wakeLock?.request) return;
  const call = { name: 'wakelock', ok: false }; calls.push(call);
  try {
    wakeLock = await navigator.wakeLock.request('screen'); call.ok = true;
    wakeLock.addEventListener('release', () => { wakeLock = null; });
  } catch { wakeLock = null; }
}
document.addEventListener('visibilitychange', () => { if (!document.hidden && wantWake) keepAwake(true); });
