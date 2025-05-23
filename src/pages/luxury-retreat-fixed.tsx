import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FallbackGallery } from '../components/FallbackGallery';
import MobileMenu from '../components/MobileMenu';

const AIRBNB_LINK = "https://www.airbnb.ca/rooms/1414129878809697902?check_in=2025-08-20&check_out=2025-08-24&guests=10&adults=10&s=67&unique_share_id=3bb66e80-1ca0-4eb8-9866-40b102c76e50";

// Color scheme
const colors = {
  darkGreen: '#2c5e1a', // Primary brand color
  lightGreen: '#5a9c48', // Secondary brand color
  black: '#000000',
  white: '#ffffff',
  offWhite: '#f5f5f7',
  lightGray: '#e0e0e0',
  darkGray: '#333333',
};

// Include all photos from the gallery directory
const photos = [
  '/photos/listings/Cotswolds Luxury Retreat/012A0872.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/012A0876.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/012A0878.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/012A0881.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5277.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5279.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5289.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5290.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5292.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5297.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5302.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5305.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5313.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5314.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5317.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5324.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5331.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5336.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5339.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5345.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5351.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5352.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5359.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5361.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5362.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5372.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5398.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5399.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5405.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5410.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5413.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5417.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5423.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5430.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5433.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5435.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5437.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5441.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5450.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5463.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5468.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5470.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5472.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5478.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5492.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5502.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5506.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5518.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5528.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5532.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5535.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior08-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior09-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior10-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior18-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior21-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143514_0652_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143633_0658_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143723_0661_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143734_0662_D.jpg',
];

// Fallback photos (in case the first approach doesn't work)
const fallbackPhotos = [
  // Different format for the paths of the problematic photos
  './photos/listings/Cotswolds Luxury Retreat/224A5508.jpg',
  './photos/listings/Cotswolds Luxury Retreat/224A5516.jpg',
  './photos/listings/Cotswolds Luxury Retreat/DJI_20250502143734_0662_D.jpg',
  './photos/listings/Cotswolds Luxury Retreat/224A5307.jpg',
  './photos/listings/Cotswolds Luxury Retreat/224A5435.jpg',
  './photos/listings/Cotswolds Luxury Retreat/DJI_20250502143633_0658_D.jpg',
  './photos/listings/Cotswolds Luxury Retreat/224A5368.jpg',
];

// Define TypeScript-compatible styles
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
    flexDirection: 'row' as 'row',
    flexWrap: 'nowrap' as 'nowrap',
    '@media (max-width: 768px)': {
      width: '95%',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flexShrink: 0,
    },
  },
  mobileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  mobileLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '50px',
    width: 'auto',
    marginRight: '15px',
    '@media (max-width: 768px)': {
      height: '40px',
    },
  },
  logoText: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: colors.darkGreen,
    marginLeft: '10px',
    '@media (max-width: 768px)': {
      fontSize: '1.3em',
      marginLeft: '5px',
    },
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  hamburgerButton: {
    background: 'none',
    border: 'none',
    color: colors.darkGreen,
    fontSize: '1.8rem',
    cursor: 'pointer',
    display: 'none',
    padding: '5px',
    zIndex: 100,
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  mobileMenu: {
    position: 'fixed' as 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '80%',
    maxWidth: '300px',
    backgroundColor: colors.white,
    boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
    zIndex: 2000,
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    overflowY: 'auto' as 'auto',
    padding: '20px 0',
    display: 'block', // Always keep in DOM
  },
  mobileMenuOpen: {
    transform: 'translateX(0)',
  },
  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px 15px 20px',
    borderBottom: `1px solid ${colors.lightGray}`,
    marginBottom: '15px',
  },
  mobileMenuCloseButton: {
    background: 'none',
    border: 'none',
    color: colors.darkGreen,
    fontSize: '1.8rem',
    cursor: 'pointer',
  },
  navItem: {
    marginLeft: '25px',
  },
  mobileNavItem: {
    padding: '12px 20px',
    borderBottom: `1px solid ${colors.lightGray}`,
  },
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1999,
    display: 'none',
  },
  overlayVisible: {
    display: 'block',
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
    padding: '100px 20px',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' as 'relative',
  },
  heroOverlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)', // Darker overlay for better text contrast
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    position: 'relative' as 'relative',
    zIndex: 2,
    maxWidth: '1000px',
  },
  heroTitle: {
    fontSize: '3.8em',
    color: colors.white,
    fontWeight: 700,
    marginBottom: '0.3em',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.6em',
    color: colors.white,
    marginBottom: '1.5em',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
  },
  videoPlaceholder: {
    width: '100%',
    maxWidth: '900px',
    height: '500px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',
    border: `1px solid ${colors.lightGray}`,
    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(5px)',
  },
  placeholderText: {
    color: colors.white,
    fontSize: '1.2em',
  },
  bookNowHero: {
    backgroundColor: colors.black,
    color: colors.white,
    padding: '18px 36px',
    borderRadius: '8px',
    fontSize: '1.2em',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    display: 'inline-block',
    marginTop: '30px',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  section: {
    padding: '80px 0',
    backgroundColor: colors.white,
  },
  altSection: {
    padding: '80px 0',
    backgroundColor: colors.offWhite,
  },
  sectionContainer: {
    width: '85%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '0.8em',
    color: colors.darkGreen,
    fontWeight: 600,
    textAlign: 'center' as const,
  },
  paragraph: {
    fontSize: '1.1em',
    marginBottom: '1em',
    lineHeight: 1.8,
  },
  subheading: {
    fontSize: '1.8em',
    marginTop: '1.5em',
    marginBottom: '0.8em',
    color: colors.darkGray,
    fontWeight: 500,
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
  imageWrapper: {
    position: 'relative' as 'relative',
    width: '100%',
    height: '100%',
  },
  mobileNavButton: {
    display: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5em',
    color: colors.darkGreen,
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  mobileNavList: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      position: 'absolute',
      top: '70px',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      flexDirection: 'column',
      padding: '10px 0',
      boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
    },
  },
};

export default function LuxuryRetreatFixed() {
  const [imagesReady, setImagesReady] = useState(false);
  
  useEffect(() => {
    // Preconnect to external domains for faster loading
    const links = [
      { rel: 'preconnect', href: 'https://www.airbnb.ca' },
      { rel: 'dns-prefetch', href: 'https://www.airbnb.ca' }
    ];
    
    links.forEach(link => {
      const linkElem = document.createElement('link');
      linkElem.rel = link.rel;
      linkElem.href = link.href;
      document.head.appendChild(linkElem);
    });

    // Preload critical images
    const heroImgElement = document.createElement('img');
    heroImgElement.src = '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143723_0661_D.jpg';
    heroImgElement.onload = () => setImagesReady(true);
    
    // Preload logo
    const logoImgElement = document.createElement('img');
    logoImgElement.src = '/photos/642ca4501534ebc86d037617_AceHost-Whistler-Logo.png';
  }, []);
  
  return (
    <div style={styles.container}>
      <Head>
        <title>Cotswolds Luxury Retreat | Tennis & Wellness</title>
        <meta name="description" content="An exclusive luxury estate nestled in the heart of the Cotswolds. Experience tranquility and elegance in a stunning countryside setting just minutes from Soho Farm House." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Preconnect to improve loading performance */}
        <link rel="preconnect" href="https://cotswoldsvacation.com" />
        <link rel="dns-prefetch" href="https://cotswoldsvacation.com" />
        <link rel="preconnect" href="https://www.airbnb.ca" />
        <link rel="dns-prefetch" href="https://www.airbnb.ca" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143723_0661_D.jpg" as="image" />
        <link rel="preload" href="/photos/642ca4501534ebc86d037617_AceHost-Whistler-Logo.png" as="image" />
      </Head>

      <header style={{
        ...styles.header,
        zIndex: 9000 // Extremely high z-index for the header
      }}>
        <MobileMenu activePage="home" />
      </header>

      <main>
        <section id="home" style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Cotswolds Luxury Retreat | Tennis & Wellness</h1>
            <p style={styles.heroSubtitle}>Premium Cotswolds Estate with Private Tennis Court & Wellness Facilities, Just 3 Minutes from Soho Farm House</p>
            <a 
              href={AIRBNB_LINK} 
              style={styles.bookNowHero} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Your Stay
            </a>
          </div>
        </section>

        <section id="about" style={styles.section}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.heading}>About Our Luxury Estate</h2>
            <p style={styles.paragraph}>
              Welcome to our exclusive Cotswolds Estate, a stunning haven nestled in the heart of the English countryside. Our meticulously designed property offers a perfect blend of traditional Cotswold charm and contemporary luxury, creating an unforgettable escape from the everyday.
            </p>
            <p style={styles.paragraph}>
              Set amidst rolling hills and picturesque landscapes, this exceptional property provides the ultimate setting for family gatherings, romantic getaways, or special celebrations. With spacious living areas, luxurious bedrooms, and breathtaking outdoor spaces, every aspect of your stay has been thoughtfully curated to ensure absolute comfort and relaxation.
            </p>
            <p style={styles.paragraph}>
              The estate features elegant interiors with high-end furnishings, a state-of-the-art kitchen, and expansive windows that flood the space with natural light while framing the spectacular countryside views. Outside, you'll find beautifully landscaped gardens, perfect for morning coffees or evening cocktails under the stars.
            </p>
          </div>
        </section>

        <section id="gallery" style={styles.altSection}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.heading}>Gallery</h2>
            
            {/* Main gallery component with fixed handling of first 7 photos */}
            <div className="relative w-full">
              <FallbackGallery 
                photos={photos}
                propertyName="Cotswolds Estate"
              />
            </div>
          </div>
        </section>

        <section id="amenities" style={styles.section}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.heading}>Amenities & Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
              <div style={{ backgroundColor: colors.white, borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <h3 style={{ fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px', fontWeight: 600 }}>Interior</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Devol designer kitchen with iconic AGA oven
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Spacious living and dining areas
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Luxury linens and towels
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    En-suite bathrooms with premium fixtures
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Two dedicated office spaces
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: colors.white, borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <h3 style={{ fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px', fontWeight: 600 }}>Outdoor</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Private tennis court with new surface
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Outdoor seating and dining areas
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Charming private pond
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Bocce ball and horseshoes
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Outdoor firepit
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: colors.white, borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <h3 style={{ fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px', fontWeight: 600 }}>Wellness</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Infrared sauna
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Private hot tub
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Refreshing cold plunge pool
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Welcome package upon arrival
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Concierge services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="bedrooms" style={styles.altSection}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.heading}>Our Bedrooms</h2>
            
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.8em', color: colors.darkGreen, marginBottom: '15px' }}>Main House (280m²)</h3>
              <p style={styles.paragraph}>
                The heart of the estate features six thoughtfully designed bedrooms and four elegant bathrooms, 
                perfect for families, groups, or special gatherings. Two of the bedrooms have spa-like ensuite bathrooms, 
                while the other bedrooms share a large bathroom with a separate tub and walk-in shower. 
                There's also a charming powder room on the main floor.
              </p>
              <p style={styles.paragraph}>
                Enjoy two cozy living rooms (ideal for lounging or movie nights), two dedicated office spaces for remote work, 
                and a gorgeous Devol designer kitchen complete with an iconic AGA oven, two fridges, and a brand-new washer/dryer.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '50px' }}>
              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5405.jpg" 
                    alt="Bedroom 1" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 1</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> Emperor King</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Ensuite bathroom with spa amenities, luxurious linens</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Main House - Master Suite</p>
                </div>
              </div>

              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5410.jpg" 
                    alt="Bedroom 2" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 2</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> Super King</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Ensuite bathroom, premium bedding</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Main House</p>
                </div>
              </div>

              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5417.jpg" 
                    alt="Bedroom 3" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 3</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> Super King</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Shared bathroom access, countryside views</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Main House</p>
                </div>
              </div>
              
              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5423.jpg" 
                    alt="Bedroom 4" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 4</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> King</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Shared bathroom access, cozy retreat</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Main House</p>
                </div>
              </div>
              
              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5430.jpg" 
                    alt="Bedroom 5" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 5</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> Double</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Shared bathroom access, charming space</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Main House</p>
                </div>
              </div>
              
              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5359.jpg" 
                    alt="Bedroom 6" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 6</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> Single</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Shared bathroom access, perfect for one person</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Main House (main floor no stairs)</p>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '40px', marginTop: '40px' }}>
              <h3 style={{ fontSize: '1.8em', color: colors.darkGreen, marginBottom: '15px' }}>Annex House (40m²)</h3>
              <p style={styles.paragraph}>
                Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own.
                It features a full bathroom and a compact kitchenette—perfect for early risers or night owls who want their own space.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5472.jpg" 
                    alt="Bedroom 7" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 7</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> King</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Private bathroom access, secluded retreat</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Annex House</p>
                </div>
              </div>
              
              <div style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src="/photos/listings/Cotswolds Luxury Retreat/224A5478.jpg" 
                    alt="Bedroom 8" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>Bedroom 8</h3>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> Flexible (Two Singles or King)</p>
                  <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> Shared bathroom in annex, adaptable configuration</p>
                  <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>Annex House</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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