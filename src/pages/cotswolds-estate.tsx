// This is a direct copy of the luxury-retreat.tsx page with a different route
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function CotswoldsEstate() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f5f5f7',
      color: '#333333',
      lineHeight: 1.6,
    }}>
      <Head>
        <title>Cotswolds Estate Test Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ padding: '50px' }}>
        <h1 style={{ 
          fontSize: '2.5em', 
          color: '#2c5e1a', 
          textAlign: 'center' 
        }}>
          Cotswolds Estate Test Page
        </h1>
        
        <p style={{ 
          fontSize: '1.2em', 
          textAlign: 'center', 
          margin: '20px 0 40px' 
        }}>
          This is a test page to verify routing is working correctly
        </p>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <p>
            If you can see this page, it means the routing system is working properly. 
            The issue might be related to browser caching of the luxury-retreat page.
          </p>
          
          <p>
            Try visiting the original Cotswolds Estate page:
          </p>
          
          <Link href="/luxury-retreat" style={{
            color: 'white',
            backgroundColor: '#2c5e1a',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Go to Cotswolds Estate
          </Link>
          
          <p style={{ marginTop: '20px' }}>
            Or try the blog page:
          </p>
          
          <Link href="/cotswolds-blog" style={{
            color: 'white',
            backgroundColor: '#2c5e1a',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Go to Cotswolds Blog
          </Link>
        </div>
      </main>
    </div>
  );
} 