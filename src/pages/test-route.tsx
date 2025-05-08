import React from 'react';
import Link from 'next/link';

export default function TestRoute() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Test Page is Working!</h1>
      <p>If you can see this, custom routes are working.</p>
      <p>
        <Link href="/luxury-retreat" style={{ color: 'green', fontWeight: 'bold' }}>
          Go to Cotswolds Estate
        </Link>
      </p>
    </div>
  );
} 