import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { EditorialGallery } from '../components/EditorialGallery';
import { AirbnbButton } from '../components/AirbnbButton';
import MobileMenu from '../components/MobileMenu';
import { AIRBNB_LINK, PROPERTY, MAIN_HOUSE_BEDROOMS, ANNEX_BEDROOMS, HOUSE_RULES } from '../config/property';
import { AIRBNB_RED_HEX } from '../lib/airbnbButtonStyles';
import { GALLERY_PHOTOS, HERO_PHOTO } from '../config/cotswoldsPhotos';

const photos = GALLERY_PHOTOS;

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

const ogImageUrl = `https://www.cotswoldsvacation.com${encodeURI(HERO_PHOTO)}`;

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
    heroImgElement.src = HERO_PHOTO;
    heroImgElement.onload = () => setImagesReady(true);
    
    // Preload logo
    const logoImgElement = document.createElement('img');
    logoImgElement.src = '/logo.svg';
  }, []);
  
  return (
    <div style={styles.container}>
      <Head>
        <title>{PROPERTY.airbnbTitle} | Cotswolds Vacation Rental</title>
        <meta name="description" content={PROPERTY.metaDescription} />
        <meta name="keywords" content="luxury Cotswolds estate, Soho Farmhouse rental, heated pool, tennis court, Sandford Saint Martin, 8 bedroom Cotswolds, wellness retreat, UK holiday home" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="google-site-verification" content="UmTMmjHtW3Q_-Uzi8WXxrPgE2YBsv0GXgq0RXCQuB_Y" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.cotswoldsvacation.com" />
        
        {/* Robots directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={`${PROPERTY.airbnbTitle} | Cotswolds Vacation Rental`} />
        <meta property="og:description" content={PROPERTY.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cotswoldsvacation.com" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content="Cotswolds Luxury Retreat" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PROPERTY.airbnbTitle} | Cotswolds Vacation Rental`} />
        <meta name="twitter:description" content={PROPERTY.tagline} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        {/* Structured Data for LodgingBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": PROPERTY.airbnbTitle,
              "image": ogImageUrl,
              "url": PROPERTY.siteUrl,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": PROPERTY.location,
                "addressRegion": PROPERTY.region,
                "addressCountry": PROPERTY.country
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.9210",
                "longitude": "-1.7090"
              },
              "description": PROPERTY.metaDescription,
              "numberOfRooms": PROPERTY.bedrooms,
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": PROPERTY.maxGuests
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": PROPERTY.rating,
                "bestRating": 5
              },
              "priceRange": "££££",
              "amenityFeature": [
                {"@type": "LocationFeatureSpecification", "name": "Heated Outdoor Pool"},
                {"@type": "LocationFeatureSpecification", "name": "Tennis Court"},
                {"@type": "LocationFeatureSpecification", "name": "Hot Tub"},
                {"@type": "LocationFeatureSpecification", "name": "Sauna"},
                {"@type": "LocationFeatureSpecification", "name": "Cold Plunge Pool"},
                {"@type": "LocationFeatureSpecification", "name": "High-speed WiFi"},
                {"@type": "LocationFeatureSpecification", "name": "Electric Vehicle Charger"}
              ]
            })
          }}
        />
        
        {/* Preconnect to improve loading performance */}
        <link rel="preconnect" href="https://cotswoldsvacation.com" />
        <link rel="dns-prefetch" href="https://cotswoldsvacation.com" />
        <link rel="preconnect" href="https://www.airbnb.ca" />
        <link rel="dns-prefetch" href="https://www.airbnb.ca" />
        
        {/* Preload critical assets */}
        <link rel="preload" href={HERO_PHOTO} as="image" />
        <link rel="preload" href="/logo.svg" as="image" />
      </Head>

      <header style={{
        ...styles.header,
        zIndex: 99999 // Extremely high z-index for the header, but less than mobile menu
      }}>
        <MobileMenu activePage="home" />
      </header>

      <main>
        <section id="home" style={{ ...styles.hero, backgroundImage: `url('${HERO_PHOTO}')` }}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>{PROPERTY.airbnbTitle}</h1>
            <p style={styles.heroSubtitle}>{PROPERTY.heroSubtitle}</p>
            <p style={{ fontSize: '1.1em', color: colors.white, marginBottom: '0.5em', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              {PROPERTY.bedrooms} bedrooms · {PROPERTY.bathrooms} bathrooms · Sleeps {PROPERTY.maxGuests} · {PROPERTY.location}, {PROPERTY.region}
            </p>
            <p style={{ fontSize: '1em', color: colors.white, marginBottom: '1em', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              {PROPERTY.priceRange} · {PROPERTY.minStay}
            </p>
            <AirbnbButton variant="lg" className="mt-8 shadow-md">
              Book on Airbnb
            </AirbnbButton>
          </div>
        </section>

        <section id="gallery" style={{ ...styles.section, paddingTop: '40px', paddingBottom: '20px' }}>
          <EditorialGallery photos={photos} propertyName="Cotswolds Estate" />
        </section>

        <section id="about" style={styles.section}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.heading}>About Our Luxury Estate</h2>
            <p style={styles.paragraph}>
              Welcome to our exclusive Cotswolds estate in {PROPERTY.location}, a stunning stone retreat set on {PROPERTY.acres} acres of peaceful Oxfordshire countryside. Beautifully renovated with over 320m² of living space across the main house and annex, this is a rare blend of rustic Cotswold charm and modern luxury.
            </p>
            <p style={styles.paragraph}>
              Perfect for families and groups of 6–{PROPERTY.maxGuests}, the estate combines elegant interiors, a Devol designer kitchen with AGA oven, multiple living areas, and exceptional outdoor amenities — including a year-round heated pool, private tennis court, hot tub, sauna, and cold plunge.
            </p>
            <p style={styles.paragraph}>
              Soho Farmhouse is just {PROPERTY.sohoFarmhouseDrive} by car, or a scenic {PROPERTY.sohoFarmhouseWalk}. Whether you are planning a family gathering, celebratory weekend, or corporate retreat, every detail has been curated for comfort, privacy, and unforgettable countryside living.
            </p>
            
            {/* New drone photos */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
              gap: '20px', 
              marginTop: '30px' 
            }}>
              <div style={{ 
                borderRadius: '10px', 
                overflow: 'hidden', 
                height: '350px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260722213403_0216_D.jpg" 
                  alt="Aerial view of Cotswolds Estate" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <div style={{ 
                borderRadius: '10px', 
                overflow: 'hidden', 
                height: '350px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260722215623_0226_D.jpg" 
                  alt="Panoramic drone view of the property" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
            </div>

            <div className="text-center mt-10">
              <AirbnbButton variant="md">Check Availability on Airbnb</AirbnbButton>
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
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Outdoor BBQ (April–October)
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Parking for up to 6 vehicles & EV charger
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Extendable dining table (seats 14–16)
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Two fireplaces (gas & wood-burning)
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: colors.white, borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                <h3 style={{ fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px', fontWeight: 600 }}>Wellness & Pool</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Year-round heated outdoor pool (heating included)
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Private hot tub & cold plunge pool
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Infrared sauna
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Aesop toiletries in every bedroom
                  </li>
                  <li style={{ fontSize: '1.05em', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '4px', color: colors.darkGreen, fontWeight: 'bold' }}>✓</span> 
                    Split A/C in living room, master suite & annex
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <AirbnbButton variant="md">Book on Airbnb</AirbnbButton>
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
              {MAIN_HOUSE_BEDROOMS.map((bedroom) => (
                <div key={bedroom.name} style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                  <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={bedroom.image} 
                      alt={bedroom.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>{bedroom.name}</h3>
                    <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> {bedroom.type}</p>
                    <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> {bedroom.features}</p>
                    <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>{bedroom.note}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginBottom: '40px', marginTop: '40px' }}>
              <h3 style={{ fontSize: '1.8em', color: colors.darkGreen, marginBottom: '15px' }}>Annex House (40m²)</h3>
              <p style={styles.paragraph}>
                Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own — with step-free access to two bedrooms and a full bathroom, ideal for elderly guests or anyone who prefer minimal stairs. It features a compact kitchenette for light meals and snacks.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {ANNEX_BEDROOMS.map((bedroom) => (
                <div key={bedroom.name} style={{ backgroundColor: colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${colors.lightGray}` }}>
                  <div style={{ height: '200px', backgroundColor: colors.lightGreen, position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={bedroom.image} 
                      alt={bedroom.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.4em', color: colors.darkGreen, marginBottom: '10px' }}>{bedroom.name}</h3>
                    <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Type:</strong> {bedroom.type}</p>
                    <p style={{ fontSize: '1.1em', marginBottom: '5px' }}><strong>Features:</strong> {bedroom.features}</p>
                    <p style={{ fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>{bedroom.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '50px' }}>
              <h3 style={{ fontSize: '1.8em', color: colors.darkGreen, marginBottom: '15px' }}>House Rules & Notes</h3>
              <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
                {HOUSE_RULES.map((rule) => (
                  <li key={rule} style={{ marginBottom: '8px' }}>{rule}</li>
                ))}
              </ul>
              <p style={styles.paragraph}>{PROPERTY.petPolicy}</p>
              <p style={styles.paragraph}>{PROPERTY.quietHours}</p>
            </div>

            <div className="text-center mt-14 py-10 px-6 rounded-xl" style={{ backgroundColor: colors.white, border: `1px solid ${colors.lightGray}` }}>
              <h3 style={{ fontSize: '1.8em', color: colors.darkGreen, marginBottom: '12px', fontWeight: 600 }}>
                Experience countryside luxury at its finest
              </h3>
              <p style={{ ...styles.paragraph, maxWidth: '640px', margin: '0 auto 24px' }}>
                Perfect for family gatherings, celebratory weekends, or corporate retreats — book your dates on Airbnb.
              </p>
              <AirbnbButton variant="lg">Book on Airbnb</AirbnbButton>
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
              <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" style={{ color: AIRBNB_RED_HEX, textDecoration: 'none', fontWeight: 600 }}>
                Reserve on Airbnb →
              </a>
            </p>
          </div>
          
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Cotswolds Estate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
} 