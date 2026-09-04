import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '../components/MobileMenu';
import { getBlogIndexPosts } from '../config/blogSeo';
import { PROPERTY, AIRBNB_LINK } from '../config/property';

const blogPosts = getBlogIndexPosts();

// Color scheme to match luxury-retreat-fixed.tsx
const colors = {
  darkGreen: '#2c5e1a',
  lightGreen: '#5a9c48',
  black: '#000000',
  white: '#ffffff',
  offWhite: '#f5f5f7',
  lightGray: '#e0e0e0',
  darkGray: '#333333',
};

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: colors.offWhite,
    color: colors.darkGray,
    lineHeight: 1.6,
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${colors.lightGray}`,
    padding: '15px 0',
    position: 'sticky' as 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: colors.darkGreen,
    marginLeft: '10px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: '25px',
  },
  navLink: {
    fontSize: '1em',
    color: colors.darkGray,
    fontWeight: 500,
    textDecoration: 'none',
  },
  bookNowNav: {
    backgroundColor: colors.black,
    color: colors.white,
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  hero: {
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/224A8292.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: colors.white,
    textAlign: 'center' as const,
    padding: '80px 20px',
    position: 'relative' as 'relative',
  },
  heroOverlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroContent: {
    position: 'relative' as 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3em',
    color: colors.white,
    fontWeight: 700,
    marginBottom: '0.3em',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.3em',
    color: colors.white,
    marginBottom: '1.5em',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  main: {
    maxWidth: '1200px',
    margin: '60px auto',
    padding: '0 20px',
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '40px',
  },
  blogCard: {
    backgroundColor: colors.white,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  blogImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover' as const,
  },
  blogContent: {
    padding: '25px',
  },
  blogMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    color: colors.darkGray,
    fontSize: '0.9em',
    marginBottom: '15px',
  },
  blogTitle: {
    fontSize: '1.5em',
    fontWeight: 600,
    marginBottom: '10px',
    color: colors.black,
  },
  blogExcerpt: {
    fontSize: '1em',
    lineHeight: 1.6,
    color: '#555',
  },
  readMore: {
    display: 'inline-block',
    marginTop: '15px',
    color: colors.darkGreen,
    fontWeight: 500,
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: colors.darkGreen,
    color: colors.white,
    padding: '60px 20px',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
  },
  footerColumn: {
    flex: '1 1 300px',
    margin: '20px',
  },
  footerHeading: {
    fontSize: '1.4em',
    marginBottom: '20px',
    fontWeight: 600,
  },
  footerText: {
    marginBottom: '15px',
    fontSize: '1em',
  },
  copyright: {
    marginTop: '40px',
    fontSize: '0.9em',
    textAlign: 'center' as const,
    width: '100%',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.2)',
  },
  activeNavLink: {
    color: colors.darkGreen,
    fontWeight: 'bold',
  },
};

export default function CotswoldsBlog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Cotswolds Travel Blog | Luxury Estate Near Soho Farmhouse</title>
        <meta
          name="description"
          content="Guides to the Cotswolds — Soho Farmhouse area, dog-friendly holidays, London weekend trips, dining, seasonal activities and family stays at our luxury Oxfordshire estate."
        />
        <meta
          name="keywords"
          content="Cotswolds blog, Soho Farmhouse area guide, luxury Cotswolds rental, things to do Cotswolds, Oxfordshire travel tips"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${PROPERTY.siteUrl}/cotswolds-blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cotswolds Travel Blog | Luxury Estate Near Soho Farmhouse" />
        <meta
          property="og:description"
          content="Guides to the Cotswolds — walks, dining, seasonal activities and luxury stays near Soho Farmhouse."
        />
        <meta property="og:url" content={`${PROPERTY.siteUrl}/cotswolds-blog`} />
        <meta property="og:site_name" content="Cotswolds Vacation" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cotswolds Travel Blog" />
        <meta
          name="twitter:description"
          content="Guides to the Cotswolds — walks, dining, seasonal activities and luxury stays near Soho Farmhouse."
        />
      </Head>

      <header style={{
        ...styles.header,
        zIndex: 99999 // Extremely high z-index for the header, but less than mobile menu
      }}>
        <MobileMenu activePage="blog" />
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Cotswolds Estate Blog</h1>
          <p style={styles.heroSubtitle}>
            Discover local attractions, insider tips, and everything you need to know about the beautiful Cotswolds and our luxury estate
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <div style={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} style={styles.blogCard}>
              <Link href={`/blog-posts/${post.slug}`} passHref>
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={styles.blogImage}
                    />
                  </div>
                  <div style={styles.blogContent}>
                    <div style={styles.blogMeta}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 style={styles.blogTitle}>{post.title}</h2>
                    <p style={styles.blogExcerpt}>{post.excerpt}</p>
                    <div style={styles.readMore}>Read More →</div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Cotswolds Estate</h3>
            <p style={styles.footerText}>An exclusive luxury property nestled in the beautiful Cotswolds countryside, offering unforgettable stays in a stunning setting.</p>
          </div>
          
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Contact</h3>
            <p style={styles.footerText}>For inquiries and special requests, please contact us via Airbnb.</p>
          </div>
          
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Book Your Stay</h3>
            <p style={styles.footerText}>
              <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>
                Reserve through Airbnb
              </a>
            </p>
          </div>
          
          <p style={styles.copyright}>&copy; 2025 Cotswolds Estate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
} 