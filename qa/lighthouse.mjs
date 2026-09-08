/**
 * Lighthouse over a representative set of built pages, mobile and desktop.
 *   node qa/lighthouse.mjs                # default set
 *   node qa/lighthouse.mjs / /contact/    # given paths
 *   BASE_URL=https://example.com node qa/lighthouse.mjs   # a deployed site instead of dist/
 * Uses Playwright's Chromium. JSON reports land in qa/lighthouse/. Prints scores and lab CWV.
 */
import { spawn, execFileSync } from 'node:child_process';
import { mkdir, readFile, readdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';

const PORT = 4321;
const BASE = process.env.BASE_URL ?? `http://localhost:${PORT}`;
const OUT = 'qa/lighthouse';
const args = process.argv.slice(2).filter((a) => a.startsWith('/'));
const paths = args.length ? args : ['/', '/seawall-construction/', '/service-area/osage-beach/', '/projects/', '/contact/'];

const pwRoot = join(homedir(), 'Library/Caches/ms-playwright');
const chromiumDir = (await readdir(pwRoot)).filter((d) => /^chromium-\d+$/.test(d)).sort().at(-1);
const chrome = join(pwRoot, chromiumDir, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing');
const slug = (p) => (p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '--'));

let server;
if (!process.env.BASE_URL) {
  server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'ignore' });
  for (let i = 0; i < 80; i++) {
    try { if ((await fetch(`${BASE}/`)).ok) break; } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
}
try {
  await mkdir(OUT, { recursive: true });
  const rows = [];
  for (const p of paths) {
    for (const form of ['mobile', 'desktop']) {
      const file = `${OUT}/${slug(p)}-${form}.json`;
      const lhArgs = [
        '-y', 'lighthouse@13.4.1', `${BASE}${p}`,
        '--output=json', `--output-path=${file}`, '--quiet',
        '--chrome-flags=--headless=new --no-sandbox',
        '--only-categories=performance,accessibility,best-practices,seo',
      ];
      if (form === 'desktop') lhArgs.push('--preset=desktop');
      execFileSync('npx', lhArgs, { stdio: 'ignore', env: { ...process.env, CHROME_PATH: chrome } });
      const r = JSON.parse(await readFile(file, 'utf8'));
      const c = r.categories;
      const a = r.audits;
      rows.push({
        page: p, form,
        perf: Math.round(c.performance.score * 100),
        a11y: Math.round(c.accessibility.score * 100),
        bp: Math.round(c['best-practices'].score * 100),
        seo: Math.round(c.seo.score * 100),
        lcp: a['largest-contentful-paint'].displayValue,
        cls: a['cumulative-layout-shift'].displayValue,
        tbt: a['total-blocking-time'].displayValue,
        fcp: a['first-contentful-paint'].displayValue,
      });
      console.log(`${p} [${form}]  perf ${rows.at(-1).perf}  a11y ${rows.at(-1).a11y}  bp ${rows.at(-1).bp}  seo ${rows.at(-1).seo}  LCP ${rows.at(-1).lcp}  CLS ${rows.at(-1).cls}  TBT ${rows.at(-1).tbt}`);
    }
  }
  console.table(rows);
} finally {
  server?.kill();
}
