import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { allArticles, Article } from '../../utils/blogArticles';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set appropriate headers
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // 24 hour cache

  // Get current date in ISO format
  const today = new Date().toISOString().split('T')[0];
  const dateTimeFormat = `${today}T00:00:00+00:00`;
  
  // Start building the sitemap XML with proper schemas
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.cotswoldsvacation.com/</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/blogs</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/properties</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/cotswolds-luxury-retreat</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/luxury-retreat</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/contact</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/list-property</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/list-with-us</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/terms</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.cotswoldsvacation.com/privacy</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;

  // Add blog articles
  allArticles.forEach((article: Article) => {
    // Extract the slug from the link
    const slug = article.link.split('/').pop();
    
    sitemap += `
  <url>
    <loc>https://www.cotswoldsvacation.com/post/${slug}</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add property listings
  // Read the listings directory to get all property files
  const listingsDir = path.join(process.cwd(), 'src', 'pages', 'listings');
  
  try {
    const listings = fs.readdirSync(listingsDir)
      .filter(file => !file.startsWith('.') && file !== '[slug].tsx') // Skip hidden files and dynamic route file
      .filter(file => fs.statSync(path.join(listingsDir, file)).isDirectory());
    
    listings.forEach(listing => {
      sitemap += `
  <url>
    <loc>https://www.cotswoldsvacation.com/listings/${listing}</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  } catch (error) {
    console.error('Error reading listings directory:', error);
  }

  // Add blog posts
  const blogPostsDir = path.join(process.cwd(), 'src', 'pages', 'blog-posts');
  
  try {
    const blogPosts = fs.readdirSync(blogPostsDir)
      .filter(file => file.endsWith('.tsx') && !file.startsWith('_')) // Skip special files
      .map(file => file.replace('.tsx', ''));
    
    blogPosts.forEach(post => {
      sitemap += `
  <url>
    <loc>https://www.cotswoldsvacation.com/blog-posts/${post}</loc>
    <lastmod>${dateTimeFormat}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
  }

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
} 