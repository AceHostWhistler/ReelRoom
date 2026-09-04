const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.cotswoldsvacation.com';
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

/** Explicit allowlist — do not auto-discover pages (avoids indexing dev/legacy routes). */
const INDEXABLE_ROUTES = [
  { path: '/', priority: 1.0 },
  { path: '/cotswolds-luxury-retreat', priority: 0.9 },
  { path: '/cotswolds-blog', priority: 0.8 },
  { path: '/blog-posts/soho-farmhouse-area-guide', priority: 0.7 },
  { path: '/blog-posts/dog-friendly-cotswolds-holiday', priority: 0.7 },
  { path: '/blog-posts/london-to-cotswolds-weekend', priority: 0.7 },
  { path: '/blog-posts/activities-places-visit', priority: 0.7 },
  { path: '/blog-posts/cotswolds-architecture', priority: 0.7 },
  { path: '/blog-posts/dining-experiences', priority: 0.7 },
  { path: '/blog-posts/family-gathering', priority: 0.7 },
  { path: '/blog-posts/perfect-estate-families', priority: 0.7 },
  { path: '/blog-posts/seasonal-activities', priority: 0.7 },
  { path: '/privacy', priority: 0.5 },
  { path: '/terms', priority: 0.5 },
];

const currentDate = new Date().toISOString().split('T')[0];

function generateUrlEntry(routePath, priority) {
  const url = routePath === '/' ? SITE_URL : `${SITE_URL}${routePath}`;
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${INDEXABLE_ROUTES.map(({ path, priority }) => generateUrlEntry(path, priority)).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap generated at ${OUTPUT_PATH}`);
}

generateSitemap();
