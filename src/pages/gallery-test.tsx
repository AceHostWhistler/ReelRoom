import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { OptimizedGallery } from '../components/OptimizedGallery';

// Photos for gallery - same as luxury-retreat.tsx
const photos = [
  '/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143734_0662_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5435.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143633_0658_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5463.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5472.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5478.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5492.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5502.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5506.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5528.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5532.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5535.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5450.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5441.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5437.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5433.jpg',
  // Just including the first 20 photos to focus on optimizing these
];

export default function GalleryTest() {
  // Using state to handle the origin URL to avoid client/server mismatch
  const [origin, setOrigin] = useState('');

  // Set the origin once component mounts on the client
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Optimized Gallery Test</title>
        <meta name="description" content="Testing improved image loading for large photos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Only add preconnect if we have an origin (client-side) */}
        {origin && (
          <>
            <link rel="preconnect" href={origin} />
            <link rel="dns-prefetch" href={origin} />
          </>
        )}
      </Head>

      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Optimized Gallery Test</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This page demonstrates an optimized gallery component that loads large images more efficiently,
            with better error handling and prioritizing the first 20 photos.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gallery</h2>
          <OptimizedGallery 
            photos={photos}
            propertyName="Cotswolds Estate"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Improvements</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Reduced image quality for faster loading (75% quality for first 20 photos)</li>
            <li>Added proper loading indicators and error states</li>
            <li>Implemented image dimension optimization (smaller images for thumbnails)</li>
            <li>Added retry mechanisms for failed image loads</li>
            <li>Prioritized loading of first 20 images</li>
            <li>Implemented progressive enhancement with blur placeholders</li>
          </ul>
        </div>
      </main>
    </div>
  );
} 