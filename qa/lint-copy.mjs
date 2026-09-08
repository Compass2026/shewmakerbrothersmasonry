/**
 * Copy-rule lint over the built site (PRODUCT.md "Copy rules" and "Terminology").
 * Exit 2 on any violation. Run after `npm run build`.
 */
import { pages, visibleText, attr } from './lib.mjs';

const ALLOWED_PHONE = '573-569-3690';
const rules = [
  ['pricing', /\$\s?\d|\$/],
  ['pricing words', /\b(affordable|starting at|cheap(er|est)?|budget(s|ing)?|free)\b/i],
  ['quote/consultation', /\b(quote[sd]?|consultation[s]?)\b/i],
  ['unverified claims', /\b(licens\w*|insur\w*|bonded|certif\w*|warrant\w*|guarantee[sd]?|award(s|ed)?)\b/i],
  ['years in business', /\b(since (19|20)\d\d|\d+\+? ?years|decades|dozens|hundreds|countless)\b/i],
  ['social proof', /\b(testimonial[s]?|review[s]?|5-star|five-star)\b/i],
  ['banned phrases', /\b(LOTO|our team|second to none|attention to detail|passionate|strive[sd]?|pride ourselves|quality craftsmanship|one-stop|state of the art)\b/],
  ['short name', /(?<!Brothers )Shewmaker Masonry/],
  ['terminology', /\b(rocks?|decorative rock|concrete wall|barrier[s]?|repair the mortar)\b/i],
  ['faith language', /\b(John 3:16|God|blessed|pray\w*)\b/],
  ['em dash', /—/],
  ['street address', /\b\d{2,5} [A-Z][a-z]+ (Road|Rd|Street|St|Drive|Dr|Lane|Ln|Highway|Hwy|Ave|Avenue)\b/],
];

let violations = 0;
const list = await pages();
for (const page of list) {
  const text = visibleText(page.html);
  const title = attr(page.html.match(/<title[^>]*>[^<]*<\/title>/i)?.[0] ?? '', 'x') ?? '';
  const metaDesc = [...page.html.matchAll(/<meta[^>]+>/gi)].map((m) => m[0]).find((t) => /name="description"/i.test(t));
  const desc = metaDesc ? attr(metaDesc, 'content') ?? '' : '';
  const titleText = (page.html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ?? '');
  const haystacks = [
    ['text', text],
    ['title', titleText],
    ['description', desc],
  ];
  // phone numbers other than the published one
  for (const [where, hay] of haystacks) {
    for (const m of hay.matchAll(/\b\d{3}[-. ]\d{3}[-. ]\d{4}\b/g)) {
      if (m[0].replace(/[. ]/g, '-') !== ALLOWED_PHONE) {
        violations += 1;
        console.log(`${page.path}  [${where}] unpublished phone number: ${m[0]}`);
      }
    }
    for (const [name, re] of rules) {
      const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
      for (const m of hay.matchAll(g)) {
        violations += 1;
        const i = Math.max(0, m.index - 50);
        console.log(`${page.path}  [${where}] ${name}: "${m[0]}"  …${hay.slice(i, m.index + m[0].length + 50).trim()}…`);
      }
    }
  }
  // alt text is checked more loosely: only the hard claims, not terminology
  for (const img of page.html.matchAll(/<img[^>]+>/gi)) {
    const alt = attr(img[0], 'alt');
    if (alt === undefined) { violations += 1; console.log(`${page.path}  [img] missing alt attribute: ${img[0].slice(0, 80)}`); }
  }
}
console.log(`\n${list.length} pages scanned, ${violations} violation(s).`);
process.exit(violations ? 2 : 0);
