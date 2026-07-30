import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TestRoute() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <h1>Test Page is Working!</h1>
      <p>If you can see this, custom routes are working.</p>
      <p>
        <Link href="/" style={{ color: 'green', fontWeight: 'bold' }}>
          Go to Cotswolds Estate
        </Link>
      </p>
    </div>
  );
} 