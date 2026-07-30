import Head from 'next/head';
import Link from 'next/link';
import MobileMenu from '../components/MobileMenu';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Cotswolds Vacation</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <header style={{ padding: '20px 0', borderBottom: '1px solid #e0e0e0' }}>
        <MobileMenu activePage="home" />
      </header>
      <main
        style={{
          maxWidth: '640px',
          margin: '80px auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '16px', color: '#2c5e1a' }}>
          Page not found
        </h1>
        <p style={{ color: '#333', marginBottom: '24px', lineHeight: 1.6 }}>
          The page you requested does not exist or has moved.
        </p>
        <Link
          href="/"
          style={{
            color: '#2c5e1a',
            fontWeight: 600,
            textDecoration: 'underline',
          }}
        >
          Return to Cotswolds Luxury Retreat
        </Link>
      </main>
    </>
  );
}
