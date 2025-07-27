import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { allArticles, Article } from '../../utils/blogArticles';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Set appropriate headers
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // 24 hour cache

    // Get current date in ISO format
    const today = new Date().toISOString().split('T')[0];
    const dateTimeFormat = `${today}T00:00:00+00:00`;
    
    // Base URL (handle both production and development)
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://www.cotswoldsvacation.com'
      : `http://${req.headers.host || 'localhost:3000'}`;
    
    // Start building the sitemap XML with proper schemas
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/photos/listings/Cotswolds%20Luxury%20Retreat/DJI_20250602090653_0526_D.jpg</image:loc>
      <image:title>Cotswolds Luxury Retreat - Main View</image:title>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/cotswolds-luxury-retreat</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/photos/listings/Cotswolds%20Luxury%20Retreat/DJI_20250602090653_0526_D.jpg</image:loc>
      <image:title>Cotswolds Luxury Retreat Property</image:title>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/photos/listings/Cotswolds%20Luxury%20Retreat/224A5508.jpg</image:loc>
      <image:title>Cotswolds Luxury Retreat Interior</image:title>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/luxury-retreat</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/photos/listings/Cotswolds%20Luxury%20Retreat/DJI_20250602090653_0526_D.jpg</image:loc>
      <image:title>Luxury Cotswolds Property</image:title>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/cotswolds-blog</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

    // Add blog post pages
    const blogPostsDir = path.join(process.cwd(), 'src', 'pages', 'blog-posts');
    
    try {
      const blogPosts = fs.readdirSync(blogPostsDir)
        .filter(file => file.endsWith('.tsx') && !file.startsWith('_')) // Skip special files
        .map(file => file.replace('.tsx', ''));
      
      blogPosts.forEach(post => {
        // Transform slug for display - replace hyphens with spaces and capitalize first letter of each word
        const title = post.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
        sitemap += `
  <url>
    <loc>${baseUrl}/blog-posts/${post}</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/photos/listings/Cotswolds%20Luxury%20Retreat/224A5307.jpg</image:loc>
      <image:title>Cotswolds Blog: ${title}</image:title>
    </image:image>
  </url>`;
      });
    } catch (error) {
      console.error('Error reading blog posts directory:', error);
    }

    // Add legal pages
    [
      { path: 'terms', title: 'Terms and Conditions', priority: '0.5' },
      { path: 'privacy', title: 'Privacy Policy', priority: '0.5' }
    ].forEach(page => {
      sitemap += `
  <url>
    <loc>${baseUrl}/${page.path}</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Close the sitemap XML
    sitemap += `
</urlset>`;

    // Write the sitemap to the public directory
    try {
      fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
    } catch (error) {
      console.error('Error writing sitemap file:', error);
    }

    // Return the sitemap
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
} 