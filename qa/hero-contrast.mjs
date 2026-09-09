/**
 * Measure real contrast over the hero: sample the rendered pixels behind each line of hero text
 * and check the text colour against the worst (lightest) background it sits on.
 *   node qa/hero-contrast.mjs [path...]
 */
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';
import sharp from 'sharp';

const paths = process.argv.slice(2).length ? process.argv.slice(2) : ['/'];
const lin = (c) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; };
const L = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const ratio = (a, b) => { const [x, y] = [L(a), L(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
for (let i = 0; i < 80; i++) { try { if ((await fetch('http://localhost:4321/')).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
let bad = 0;
try {
  const browser = await chromium.launch();
  const VW = Number(process.env.VW ?? 1440), VH = Number(process.env.VH ?? 900);
  const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, isMobile: VW < 700, hasTouch: VW < 700 });
  const page = await ctx.newPage();
  for (const path of paths) {
    await page.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-visible')));
    await page.waitForTimeout(1200);
    // hide the text, photograph what is behind it, then compare
    const targets = await page.evaluate(() => {
      const out = [];
      for (const sel of ['.hero__title', '.hero__lead', '.hero .eyebrow']) {
        const el = document.querySelector(sel);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        out.push({ sel, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), color: getComputedStyle(el).color, min: sel === '.hero__title' ? 3 : 4.5 });
      }
      return out;
    });
    // Hide only the text, never its container: the container's ::before carries the shade that
    // makes the text readable, and hiding it would measure a background that never ships.
    await page.evaluate(() => {
      document.querySelectorAll('.hero__inner').forEach((el) => {
        for (const child of Array.from(el.children)) child.style.visibility = 'hidden';
      });
    });
    await page.waitForTimeout(200);
    const shot = await page.screenshot({ clip: { x: 0, y: 0, width: VW, height: VH } });
    await page.evaluate(() => {
      document.querySelectorAll('.hero__inner').forEach((el) => {
        for (const child of Array.from(el.children)) child.style.visibility = '';
      });
    });
    for (const t of targets) {
      if (t.y < 0 || t.y + t.h > 900 || t.w < 4) continue;
      const raw = await sharp(shot).extract({ left: Math.max(0, t.x), top: Math.max(0, t.y), width: Math.min(t.w, VW - t.x), height: Math.min(t.h, VH - t.y) }).raw().toBuffer({ resolveWithObject: true });
      let worst = 99, lightest = null;
      const { data, info } = raw;
      for (let i = 0; i < data.length; i += info.channels * 7) {
        const px = [data[i], data[i + 1], data[i + 2]];
        const m = t.color.match(/\d+/g).slice(0, 3).map(Number);
        const r = ratio(m, px);
        if (r < worst) { worst = r; lightest = px; }
      }
      const ok = worst >= t.min;
      // Below 700px the hero deliberately carries nothing over the footage (Tom's instruction,
      // docs/placeholders.md section G), so legibility comes from a dark contour on the glyphs,
      // which this background sampling cannot see. Report the number, do not fail the run.
      const unshaded = VW < 700;
      if (!ok && !unshaded) bad++;
      const tag = ok ? 'ok  ' : unshaded ? 'note' : 'FAIL';
      const why = ok || !unshaded ? '' : '  <- bare footage by decision; text contour carries it';
      console.log(`${tag} ${path} ${t.sel.padEnd(14)} worst ${worst.toFixed(2)}:1 (need ${t.min})  behind rgb(${lightest})${why}`);
    }
  }
  await browser.close();
} finally { server.kill(); }
process.exit(bad ? 2 : 0);
