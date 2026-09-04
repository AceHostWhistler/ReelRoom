import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Sitemap = () => {
  return (
    <>
      <Head>
        <title>Sitemap - Cotswolds Vacation</title>
        <meta name="description" content="Site map for Cotswolds Vacation website" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Homepage</Link></li>
            <li><Link href="/cotswolds-luxury-retreat" className="text-blue-600 hover:underline">Cotswolds Luxury Retreat</Link></li>
            <li><Link href="/cotswolds-blog" className="text-blue-600 hover:underline">Cotswolds Blog</Link></li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><Link href="/blog-posts/celebration-weekend-cotswolds" className="text-blue-600 hover:underline">Celebration Weekends</Link></li>
            <li><Link href="/blog-posts/cotswolds-wellness-retreat" className="text-blue-600 hover:underline">Cotswolds Wellness Retreat</Link></li>
            <li><Link href="/blog-posts/soho-farmhouse-area-guide" className="text-blue-600 hover:underline">Near Soho Farmhouse Guide</Link></li>
            <li><Link href="/blog-posts/dog-friendly-cotswolds-holiday" className="text-blue-600 hover:underline">Dog-Friendly Cotswolds Holiday</Link></li>
            <li><Link href="/blog-posts/london-to-cotswolds-weekend" className="text-blue-600 hover:underline">London to Cotswolds Weekend</Link></li>
            <li><Link href="/blog-posts/activities-places-visit" className="text-blue-600 hover:underline">Activities & Places to Visit</Link></li>
            <li><Link href="/blog-posts/cotswolds-architecture" className="text-blue-600 hover:underline">Cotswolds Architecture</Link></li>
            <li><Link href="/blog-posts/dining-experiences" className="text-blue-600 hover:underline">Dining Experiences</Link></li>
            <li><Link href="/blog-posts/family-gathering" className="text-blue-600 hover:underline">Family Gathering</Link></li>
            <li><Link href="/blog-posts/perfect-estate-families" className="text-blue-600 hover:underline">Perfect Estate for Families</Link></li>
            <li><Link href="/blog-posts/seasonal-activities" className="text-blue-600 hover:underline">Seasonal Activities</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Legal & Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
