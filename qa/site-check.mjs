/**
 * Structural checks over the built site: one H1, title and description lengths, canonical,
 * noindex on staging, JSON-LD parses and carries the NAP correctly, internal links resolve.
 * Exit 2 on any failure. Run after `npm run build`.
 */
import { existsSync } from 'node:fs';
import { pages, attr } from './lib.mjs';

const PHONE_E164 = '+15735693690';
const NAME = 'Shewmaker Brothers Masonry';
let failures = 0;
const fail = (page, msg) => { failures += 1; console.log(`${page}  ${msg}`); };

const list = await pages();
const built = new Set(list.map((p) => p.path));

for (const page of list) {
  const { path, html } = page;
  const h1s = html.match(/<h1[\s>]/gi) ?? [];
  if (h1s.length !== 1) fail(path, `expected 1 <h1>, found ${h1s.length}`);
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ?? '';
  if (!title) fail(path, 'missing <title>');
  if (title.length > 90) fail(path, `title is ${title.length} chars: ${title}`);
  const metas = [...html.matchAll(/<meta[^>]+>/gi)].map((m) => m[0]);
  const desc = metas.map((t) => (/name="description"/i.test(t) ? attr(t, 'content') : undefined)).find(Boolean) ?? '';
  if (desc.length < 50 || desc.length > 160) fail(path, `description is ${desc.length} chars`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (!canonical) fail(path, 'missing canonical');
  else if (path !== '/404/' && !canonical.endsWith(path)) fail(path, `canonical ${canonical} does not end with ${path}`);
  if (!metas.some((t) => /name="robots"/i.test(t) && /noindex/i.test(t))) fail(path, 'staging page is not noindex');

  // JSON-LD
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  if (blocks.length !== 1) fail(path, `expected 1 JSON-LD block, found ${blocks.length}`);
  for (const raw of blocks) {
    let data;
    try { data = JSON.parse(raw); } catch (e) { fail(path, `JSON-LD does not parse: ${e.message}`); continue; }
    const graph = data['@graph'];
    if (!Array.isArray(graph)) { fail(path, 'JSON-LD has no @graph'); continue; }
    const types = graph.map((n) => n['@type']);
    const biz = graph.find((n) => n['@type'] === 'HomeAndConstructionBusiness');
    if (!biz) fail(path, 'no HomeAndConstructionBusiness node');
    else {
      if (biz.name !== NAME) fail(path, `business name is "${biz.name}"`);
      if (biz.telephone !== PHONE_E164) fail(path, `business telephone is "${biz.telephone}"`);
      if (biz.address?.streetAddress) fail(path, 'schema carries a street address');
      if (biz.openingHours || biz.openingHoursSpecification) fail(path, 'schema carries opening hours (unconfirmed)');
      if (biz.priceRange) fail(path, 'schema carries a price range');
    }
    if (!types.includes('WebSite')) fail(path, 'no WebSite node');
    const bc = graph.find((n) => n['@type'] === 'BreadcrumbList');
    if (bc) bc.itemListElement.forEach((it, i) => { if (it.position !== i + 1 || !/^https?:\/\//.test(it.item)) fail(path, `breadcrumb ${i + 1} malformed`); });
    const faq = graph.find((n) => n['@type'] === 'FAQPage');
    if (faq) faq.mainEntity.forEach((q) => { if (!q.name || !q.acceptedAnswer?.text) fail(path, 'FAQ question without answer'); });
    const svc = graph.find((n) => n['@type'] === 'Service');
    if (svc && svc.provider?.['@id'] !== biz?.['@id']) fail(path, 'Service provider does not reference the business');
    if (JSON.stringify(graph).includes('undefined')) fail(path, 'JSON-LD contains "undefined"');
  }

  // internal links
  for (const a of html.matchAll(/<a\s[^>]*href="([^"]+)"/gi)) {
    const href = a[1];
    if (!href.startsWith('/')) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (clean.endsWith('/')) {
      if (!built.has(clean)) fail(path, `link to unbuilt page ${href}`);
    } else if (!existsSync(`dist${clean}`)) fail(path, `link to missing file ${href}`);
    if (href.includes('#')) {
      const id = href.split('#')[1];
      const target = list.find((p) => p.path === (clean || path));
      if (target && !new RegExp(`\\sid="${id}"`).test(target.html)) fail(path, `anchor #${id} not found on ${clean || path}`);
    }
  }
  if (/href="undefined"|src="undefined"/.test(html)) fail(path, 'undefined href/src');
}
console.log(`\n${list.length} pages checked, ${failures} failure(s).`);
process.exit(failures ? 2 : 0);
