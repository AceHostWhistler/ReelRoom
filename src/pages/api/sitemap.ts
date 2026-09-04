import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

/** Indexable Cotswolds Vacation routes only — no legacy third-party paths. */
const INDEXABLE_ROUTES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/cotswolds-luxury-retreat', priority: '0.9', changefreq: 'weekly' },
  { path: '/cotswolds-blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog-posts/celebration-weekend-cotswolds', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/cotswolds-wellness-retreat', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/soho-farmhouse-area-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/dog-friendly-cotswolds-holiday', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/london-to-cotswolds-weekend', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/activities-places-visit', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/cotswolds-architecture', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/dining-experiences', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/family-gathering', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/perfect-estate-families', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-posts/seasonal-activities', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { path: '/terms', priority: '0.5', changefreq: 'monthly' },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');

    const today = new Date().toISOString().split('T')[0];
    const dateTimeFormat = `${today}T00:00:00+00:00`;

    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://www.cotswoldsvacation.com'
        : `http://${req.headers.host || 'localhost:3000'}`;

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">`;

    INDEXABLE_ROUTES.forEach(({ path, priority, changefreq }) => {
      const loc = path === '/' ? baseUrl : `${baseUrl}${path}`;
      sitemap += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;

      if (path === '/') {
        sitemap += `
    <image:image>
      <image:loc>${baseUrl}/photos/listings/Cotswolds%20Luxury%20Retreat/224A8292.jpg</image:loc>
      <image:title>Cotswolds Luxury Retreat - Main View</image:title>
    </image:image>`;
      }

      sitemap += `
  </url>`;
    });

    sitemap += `
</urlset>`;

    try {
      fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
    } catch (error) {
      console.error('Error writing sitemap file:', error);
    }

    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
}
