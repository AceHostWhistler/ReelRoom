import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Seasonal Activities in the Cotswolds',
    excerpt: 'Discover the best seasonal activities to enjoy in the beautiful Cotswolds countryside throughout the year.',
    image: '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143633_0658_D.jpg',
    date: 'June 15, 2025',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Cotswolds Local Dining Experiences Near Soho Farm House',
    excerpt: 'Explore our handpicked selection of the finest restaurants, pubs, and cafés within a short drive from the estate.',
    image: '/photos/listings/Cotswolds Luxury Retreat/224A5433.jpg',
    date: 'June 10, 2025',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'A History of Cotswolds Architecture',
    excerpt: 'Learn about the distinctive architectural features that make Cotswolds properties some of the most charming in England.',
    image: '/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg',
    date: 'June 5, 2025',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Activities and places to visit in the Cotswolds',
    excerpt: 'Make the most of your stay by exploring these stunning attractions and engaging activities throughout the Cotswolds region.',
    image: '/photos/listings/Cotswolds Luxury Retreat/224A5478.jpg',
    date: 'May 28, 2025',
    readTime: '3 min read',
  },
  {
    id: 5,
    title: 'The perfect Cotswolds Estate for large families',
    excerpt: 'Discover why our spacious estate offers the ideal setting for large family gatherings with amenities for all generations.',
    image: '/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg',
    date: 'May 20, 2025',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Planning the Perfect Family Gathering in a large luxury Cotswolds Property',
    excerpt: 'Tips and ideas for hosting an unforgettable family reunion or celebration at our Cotswolds Estate.',
    image: '/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg',
    date: 'May 15, 2025',
    readTime: '4 min read',
  },
];

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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143723_0661_D.jpg')",
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
  const AIRBNB_LINK = "https://www.airbnb.ca/rooms/1414129878809697902?check_in=2025-08-20&check_out=2025-08-24&guests=10&adults=10&s=67&unique_share_id=3bb66e80-1ca0-4eb8-9866-40b102c76e50";
  
  return (
    <div style={styles.container}>
      <Head>
        <title>Blog | Cotswolds Estate</title>
        <meta name="description" content="Explore our collection of articles about the Cotswolds area, local attractions, and tips for making the most of your luxury retreat stay." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="preconnect" href="https://cotswoldsvacation.com" />
        <link rel="dns-prefetch" href="https://cotswoldsvacation.com" />
      </Head>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logoContainer}>
            <Link href="/" passHref>
              <div style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }}>
                <img 
                  src="/photos/642ca4501534ebc86d037617_AceHost-Whistler-Logo.png" 
                  alt="Cotswolds Estate Logo" 
                  width={120} 
                  height={40} 
                  style={{ height: 'auto', width: '120px' }}
                />
                <span style={styles.logoText}>Cotswolds Estate</span>
              </div>
            </Link>
          </div>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link href="/#home" style={styles.navLink}>Home</Link></li>
            <li style={styles.navItem}><Link href="/#about" style={styles.navLink}>About</Link></li>
            <li style={styles.navItem}><Link href="/#gallery" style={styles.navLink}>Gallery</Link></li>
            <li style={styles.navItem}><Link href="/#amenities" style={styles.navLink}>Amenities</Link></li>
            <li style={styles.navItem}><Link href="/#bedrooms" style={styles.navLink}>Bedrooms</Link></li>
            <li style={styles.navItem}>
              <Link href="/cotswolds-blog" style={{ ...styles.navLink, ...styles.activeNavLink }}>
                Blog
              </Link>
            </li>
            <li style={styles.navItem}>
              <a href={AIRBNB_LINK} style={styles.bookNowNav} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </li>
          </ul>
        </nav>
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
              <Link href={post.id === 5 ? "/blog-posts/perfect-estate-families" : post.id === 6 ? "/blog-posts/family-gathering" : "#"} passHref>
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