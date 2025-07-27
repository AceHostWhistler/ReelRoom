import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set correct content type
  res.setHeader('Content-Type', 'text/plain');
  
  // Define the base URL
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://www.cotswoldsvacation.com' 
    : `http://${req.headers.host || 'localhost:3000'}`;

  // Generate robots.txt content
  const robotsTxt = `# Allow all web crawlers
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /*.json$

# Specify sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Allow web crawlers to access images
User-agent: Googlebot-Image
Allow: /photos/

# Allow Google AdsBot
User-agent: AdsBot-Google
Allow: /
`;

  // Return the robots.txt content
  res.status(200).send(robotsTxt);
} 