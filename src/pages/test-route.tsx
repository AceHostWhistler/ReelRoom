import React from 'react';

export default function TestRoute() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Test Page is Working!</h1>
      <p>If you can see this, custom routes are working.</p>
      <p>
        <a href="/luxury-retreat" style={{ color: 'green', fontWeight: 'bold' }}>
          Go to Cotswolds Estate
        </a>
      </p>
    </div>
  );
} 