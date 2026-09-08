/** Probe a local video and capture frames, using the browser (no ffmpeg needed).
 *  node qa/video-frames.mjs <file> <out-prefix> [n]
 */
import { chromium } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
const [file, prefix, nStr] = process.argv.slice(2);
const n = Number(nStr ?? 6);
mkdirSync('qa/reference', { recursive: true });
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
await page.goto('file://' + resolve(file));
const meta = await page.evaluate(async () => {
  const v = document.querySelector('video');
  v.muted = true;
  await new Promise((r) => (v.readyState >= 1 ? r() : (v.onloadedmetadata = r)));
  return { w: v.videoWidth, h: v.videoHeight, duration: v.duration };
});
console.log(JSON.stringify(meta));
for (let i = 0; i < n; i++) {
  const t = (meta.duration * (i + 0.5)) / n;
  await page.evaluate(async (time) => { const v = document.querySelector('video'); v.currentTime = time; await new Promise((r) => (v.onseeked = r)); }, t);
  await page.waitForTimeout(150);
  await page.locator('video').screenshot({ path: `qa/reference/${prefix}-${i}.png` });
  console.log(`frame ${i} at ${t.toFixed(1)}s`);
}
await browser.close();
