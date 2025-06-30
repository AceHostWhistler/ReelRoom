import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Sitemap = () => {
  return (
    <>
      <Head>
        <title>Sitemap - Cotswolds Vacation</title>
        <meta name="description" content="Site map for Cotswolds Vacation website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Homepage</Link></li>
            <li><Link href="/luxury-retreat" className="text-blue-600 hover:underline">Luxury Retreat</Link></li>
            <li><Link href="/cotswolds-luxury-retreat" className="text-blue-600 hover:underline">Cotswolds Luxury Retreat</Link></li>
            <li><Link href="/listings" className="text-blue-600 hover:underline">Listings</Link></li>
            <li><Link href="/properties" className="text-blue-600 hover:underline">Properties</Link></li>
            <li><Link href="/blogs" className="text-blue-600 hover:underline">Blogs</Link></li>
            <li><Link href="/list-with-us" className="text-blue-600 hover:underline">List With Us</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><Link href="/blog-posts/activities-places-visit" className="text-blue-600 hover:underline">Activities & Places to Visit</Link></li>
            <li><Link href="/blog-posts/cotswolds-architecture" className="text-blue-600 hover:underline">Cotswolds Architecture</Link></li>
            <li><Link href="/blog-posts/dining-experiences" className="text-blue-600 hover:underline">Dining Experiences</Link></li>
            <li><Link href="/blog-posts/family-gathering" className="text-blue-600 hover:underline">Family Gathering</Link></li>
            <li><Link href="/blog-posts/perfect-estate-families" className="text-blue-600 hover:underline">Perfect Estate for Families</Link></li>
            <li><Link href="/blog-posts/seasonal-activities" className="text-blue-600 hover:underline">Seasonal Activities</Link></li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Property Listings</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><Link href="/listings/forest-view-cascade-room" className="text-blue-600 hover:underline">Forest View Cascade Room</Link></li>
            <li><Link href="/listings/mountain-view-rooms" className="text-blue-600 hover:underline">Mountain View Rooms</Link></li>
            <li><Link href="/listings/mountain-view---top-floor" className="text-blue-600 hover:underline">Mountain View - Top Floor</Link></li>
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