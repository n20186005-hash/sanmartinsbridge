import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const staticRoot = process.argv[2] === '--static' ? process.argv[3] : undefined;
const origin = staticRoot ? 'http://static-qa.local' : (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
async function load(url) {
  if (!staticRoot) return fetch(url);
  const path = decodeURI(new URL(url).pathname);
  const filename = path.endsWith('.xml') || path.endsWith('.txt') ? path : `${path.replace(/\/$/, '')}/index.html`;
  try { const body = await readFile(join(staticRoot, filename), 'utf8'); return {status: 200, text: async () => body}; }
  catch { return {status: 404, text: async () => ''}; }
}
const production = 'https://www.sanmartinsbridge.com';
const locales = ['es', 'en', 'fr', 'zh-Hant'];
const slugs = ['', 'san-juan-de-los-reyes', 'santa-maria-la-blanca'];
const pathFor = (locale, slug) => `${locale === 'es' ? '' : `/${locale}`}${slug ? `/${slug}` : ''}` || '/';
const errors = [];
const result = [];
const links = new Set();
const assert = (ok, message) => { if (!ok) errors.push(message); };
const clean = value => value.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
for (const locale of locales) {
  for (const slug of slugs) {
    const path = pathFor(locale, slug);
    const response = await load(`${origin}${path}`);
    const html = await response.text();
    assert(response.status === 200, `${path}: status ${response.status}`);
    assert(html.includes(`<html lang="${locale}"`), `${path}: html lang`);
    const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m => clean(m[1]));
    assert(h1.length === 1 && h1[0].length > 0, `${path}: exactly one nonempty H1`);
    const headings = [...html.matchAll(/<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map(m => ({ level: Number(m[1]), text: clean(m[2]) }));
    const h2 = headings.filter(h => h.level === 2).map(h => h.text);
    const about = h2.findIndex(h => /^(Acerca|Sobre|À propos|關於|About)/i.test(h));
    assert(about >= 0, `${path}: About H2`);
    assert(about >= 0 && /Información básica|Basic information|Informations pratiques|基本資[訊料]/i.test(h2[about + 1] || ''), `${path}: Basic H2 immediately follows About H2`);
    assert(h2.length >= 9, `${path}: complete attraction sections (${h2.length} H2)`);
    assert(headings.some(h => h.level === 3 && /Consejos|Visit tips|Conseils|遊覽建議|參觀建議/i.test(h.text)), `${path}: explicit visit tips H3`);
    assert(headings.some(h => h.level === 3 && /Caracter|Caract|Highlights|Features|Points forts|特色/i.test(h.text)), `${path}: explicit highlights H3`);
    assert(h2.some(h => /Mapa de la ruta|Mapa del recorrido|Route map|Carte du parcours|路線地圖/i.test(h)), `${path}: route map H2`);
    assert(headings.every(h => h.text), `${path}: no empty headings`);
    assert(!/4\.7\/5|12,781|12\.781|★★★★★|Abierto las 24|Open 24 hours|Ouvert 24|24小時開放|全天候開放|24\/7|Aparcamiento gratuito|Free parking|Parking gratuit/i.test(clean(html)), `${path}: unsupported legacy claim`);
    const canonical = html.match(/<link\b(?=[^>]*rel="canonical")(?=[^>]*href="([^"]+)")[^>]*>/)?.[1];
    assert(canonical === `${production}${path === '/' ? '' : path}` || canonical === `${production}${path}`, `${path}: canonical (${canonical})`);
    const alternates = [...html.matchAll(/<link\b(?=[^>]*rel="alternate")(?=[^>]*hrefLang="([^"]+)")(?=[^>]*href="([^"]+)")[^>]*>/gi)].map(m => [m[1], m[2]]);
    assert(alternates.length >= 4, `${path}: language alternates`);
    for (const target of locales) {
      const expected = `${production}${pathFor(target, slug)}`.replace(/\/$/, '');
      assert(alternates.some(([lang, href]) => (lang === target || lang.startsWith(`${target}-`)) && href.replace(/\/$/, '') === expected), `${path}: alternate ${target}`);
    }
    const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => {
      try { const data = JSON.parse(m[1]); return Array.isArray(data) ? data : [data]; }
      catch { errors.push(`${path}: malformed JSON-LD`); return []; }
    });
    assert(schemas.some(s => [s['@type']].flat().includes('TouristAttraction')), `${path}: attraction Schema`);
    assert(schemas.some(s => s['@type'] === 'BreadcrumbList'), `${path}: breadcrumb Schema`);
    assert(!schemas.some(s => s.aggregateRating || s.review), `${path}: no unsupported review Schema`);
    if (slug) assert(!/independent third.party|guía de información turística independiente|第三方旅遊資訊|guide touristique indépendant/i.test(clean(html)), `${path}: no repeated homepage disclaimer`);
    assert(/2026/.test(clean(html)), `${path}: visible source check date`);
    for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = m[1].replace(/&amp;/g, '&');
      if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/_next/')) links.add(href.split('#')[0] || path);
    }
    result.push({ path, status: response.status, h1: h1[0], h2 });
  }
}
const original = JSON.parse(await readFile('docs/row17-checkpoint/original-assets.json', 'utf8'));
for (const asset of original) {
  try { assert(createHash('sha256').update(await readFile(asset.path)).digest('hex') === asset.sha256, `${asset.path}: original bytes changed`); }
  catch { errors.push(`${asset.path}: original file missing`); }
}
for (const path of ['/como-llegar-puente-san-martin','/historia-puente-san-martin','/que-ver-en-toledo','/que-ver-en-toledo-en-un-dia','/en/things-to-do-in-toledo','/en/toledo-one-day-itinerary']) links.add(path);
for (const locale of locales) for (const legal of ['privacy-policy','terms-of-service','cookie-settings']) links.add(pathFor(locale, legal));
for (const path of links) {
  const response = await load(`${origin}${path}`);
  assert(response.status === 200, `internal route ${path}: ${response.status}`);
}
const sitemapResponse = await load(`${origin}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
assert(sitemapResponse.status === 200, 'sitemap status');
for (const locale of locales) for (const slug of slugs) assert(sitemap.includes(`${production}${pathFor(locale,slug)}`.replace(/\/$/, '')), `sitemap: ${pathFor(locale,slug)}`);
console.log(JSON.stringify({ origin, mode: staticRoot ? 'generated HTML static QA' : 'HTTP routes', checkedPages: result, checkedInternalRoutes: links.size, preservedOriginalAssets: original.length, errors }, null, 2));
if (errors.length) process.exitCode = 1;
