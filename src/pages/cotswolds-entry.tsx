import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CotswoldsEntry() {
  const router = useRouter();

  useEffect(() => {
    // Programmatically navigate to the luxury-retreat page
    router.push('/luxury-retreat');
  }, [router]);

  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>Redirecting to Cotswolds Estate...</h1>
      <p>If you are not automatically redirected, please click the link below:</p>
      <p>
        <Link 
          href="/luxury-retreat" 
          style={{ 
            color: '#2c5e1a', 
            fontWeight: 'bold',
            padding: '10px 20px',
            backgroundColor: '#f5f5f7',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px'
          }}
        >
          Go to Cotswolds Estate
        </Link>
      </p>
    </div>
  );
} 