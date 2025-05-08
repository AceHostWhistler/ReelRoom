import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Diagnostics() {
  const router = useRouter();
  const [allRoutes, setAllRoutes] = useState<string[]>([]);
  const [info, setInfo] = useState({
    url: '',
    host: '',
    pathname: '',
    baseUrl: '',
    userAgent: '',
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    // Collect information about the current environment
    if (typeof window !== 'undefined') {
      setInfo({
        url: window.location.href,
        host: window.location.host,
        pathname: window.location.pathname,
        baseUrl: window.location.origin,
        userAgent: window.navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  const testPages = [
    { name: 'Home', path: '/' },
    { name: 'Cotswolds Estate', path: '/luxury-retreat' },
    { name: 'Cotswolds Blog', path: '/cotswolds-blog' },
    { name: 'Test Route', path: '/test-route' },
    { name: 'Cotswolds Entry', path: '/cotswolds-entry' },
    { name: 'Cotswolds Estate (Alternate)', path: '/cotswolds-estate' },
  ];

  return (
    <div style={{
      fontFamily: 'monospace',
      fontSize: '14px',
      lineHeight: 1.5,
      backgroundColor: '#f8f8f8',
      padding: '20px',
      margin: 0,
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Next.js Diagnostics Page</h1>
      
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        marginBottom: '20px',
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '15px' }}>Environment Information</h2>
        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
          {JSON.stringify(info, null, 2)}
        </pre>
      </div>

      <div style={{
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        marginBottom: '20px',
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '15px' }}>Test Links</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {testPages.map((page, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{page.name}:</span>
              <Link href={page.path} style={{
                padding: '5px 10px',
                backgroundColor: '#e0f2f1',
                color: '#00695c',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}>
                Normal Link
              </Link>
              <a href={page.path} target="_blank" rel="noopener noreferrer" style={{
                padding: '5px 10px',
                backgroundColor: '#f1f8e9',
                color: '#33691e',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}>
                Direct Link (new tab)
              </a>
              <a href={`${page.path}?nocache=${Date.now()}`} style={{
                padding: '5px 10px',
                backgroundColor: '#fff3e0',
                color: '#e65100',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}>
                No-cache Link
              </a>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '15px' }}>Manual Navigation</h2>
        <div style={{ marginBottom: '15px' }}>
          <p>Click the button below to navigate programmatically:</p>
          <button 
            onClick={() => router.push('/luxury-retreat')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2c5e1a',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Navigate to Cotswolds Estate
          </button>
        </div>

        <div>
          <p>Or use this manual redirect button:</p>
          <button 
            onClick={() => {
              window.location.href = '/luxury-retreat';
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4a148c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Redirect to Cotswolds Estate
          </button>
        </div>
      </div>
    </div>
  );
} 