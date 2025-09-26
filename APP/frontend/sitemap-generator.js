/*
  Simple sitemap generator without extra deps.
  - Parses roles slugs and industryVideos (industry + title) from src/data/mock.js
  - Emits public/sitemap.xml listing static and dynamic routes
*/
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://workzap.co';

const rootDir = __dirname;
const publicDir = path.join(rootDir, 'public');
const mockPath = path.join(rootDir, 'src', 'data', 'mock.js');

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch (_) { return ''; }
}

function extractArrayBlock(source, key) {
  const idx = source.indexOf(`${key}:`);
  if (idx === -1) return '';
  const startBracket = source.indexOf('[', idx);
  if (startBracket === -1) return '';
  let depth = 0;
  for (let i = startBracket; i < source.length; i++) {
    const ch = source[i];
    if (ch === '[') depth++;
    if (ch === ']') depth--;
    if (depth === 0) {
      return source.slice(startBracket, i + 1);
    }
  }
  return '';
}

function slugifyTitle(title) {
  return String(title).toLowerCase().trim().replace(/\s+/g, '-');
}

function enc(seg) {
  return encodeURIComponent(String(seg));
}

function buildRoutes() {
  const routes = new Set([
    '/',
    '/pricing',
    '/eor',
    '/careers',
    '/industry-solutions',
    '/privacy',
    '/terms'
  ]);

  const source = readFileSafe(mockPath);
  if (!source) return Array.from(routes);

  // Roles dynamic routes: /roles/:slug
  const rolesBlock = extractArrayBlock(source, 'roles');
  if (rolesBlock) {
    const slugRegex = /slug:\s*"([^"]+)"/g;
    let m;
    while ((m = slugRegex.exec(rolesBlock)) !== null) {
      const slug = m[1];
      routes.add(`/roles/${slug}`);
    }
  }

  // Case study routes from industryVideos: /industry-solutions/:industry/:slug(title)
  const videosBlock = extractArrayBlock(source, 'industryVideos');
  if (videosBlock) {
    const pairRegex = /industry:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"/g;
    let m;
    while ((m = pairRegex.exec(videosBlock)) !== null) {
      const industryRaw = m[1];
      const title = m[2];
      const slug = slugifyTitle(title);
      // Skip problematic slugs that contain '/' since the app route won't match extra segments
      if (slug.includes('/')) continue;
      routes.add(`/industry-solutions/${enc(industryRaw)}/${enc(slug)}`);
    }
  }

  return Array.from(routes).sort();
}

function generateXml(urls) {
  const lastmod = new Date().toISOString().split('T')[0];
  const body = urls.map(u => `  <url>\n    <loc>${BASE_URL}${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${u === '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
         `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
         `${body}\n` +
         `</urlset>\n`;
}

function main() {
  const urls = buildRoutes();
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const xml = generateXml(urls);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`Sitemap generated with ${urls.length} routes at /public/sitemap.xml`);
}

main();
