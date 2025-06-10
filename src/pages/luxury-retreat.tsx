import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CotswoldsGallery } from '../components/CotswoldsGallery';

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

// Photos for gallery - now including all photos
const photos = [
  '/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090720_0527_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5435.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090532_0522_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5463.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5472.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5478.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5492.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5502.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5506.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5528.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5532.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5535.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5450.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5441.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5437.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5433.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5430.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5423.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5417.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5413.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5410.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5405.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5399.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5398.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5372.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior21-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior18-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior10-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior09-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/8596128-exterior08-800.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/DJI_20250602091050_0536_D.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5362.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5361.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5359.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5352.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5351.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5345.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5339.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5336.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5331.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5324.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5317.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5314.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5313.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5305.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5302.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5297.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5292.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5290.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5289.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5279.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/224A5277.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/012A0881.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/012A0878.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/012A0876.jpg',
  '/photos/listings/Cotswolds Luxury Retreat/012A0872.jpg',
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
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '50px',
    width: 'auto',
    marginRight: '15px',
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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg')",
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
  subheading: {
    fontSize: '1.8em',
    marginTop: '1.5em',
    marginBottom: '0.8em',
    color: colors.darkGray,
    fontWeight: 500,
  },
  paragraph: {
    fontSize: '1.1em',
    marginBottom: '1em',
    lineHeight: 1.8,
  },
  galleryContainer: {
    marginTop: '40px',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  galleryItem: {
    position: 'relative' as const,
    height: '250px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  amenitiesContainer: {
    marginTop: '30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  },
  amenityCard: {
    backgroundColor: colors.white,
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    border: `1px solid ${colors.lightGray}`,
  },
  amenityTitle: {
    fontSize: '1.3em',
    color: colors.darkGreen,
    marginBottom: '15px',
    fontWeight: 600,
  },
  amenitiesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  amenityItem: {
    fontSize: '1.05em',
    marginBottom: '12px',
    paddingLeft: '25px',
    position: 'relative' as 'relative',
  },
  checkmark: {
    position: 'absolute' as 'absolute',
    left: 0,
    top: '4px',
    color: colors.darkGreen,
    fontWeight: 'bold',
  },
  bedroomSection: {
    padding: '80px 0',
    backgroundColor: colors.white,
  },
  bedroomsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '40px',
  },
  houseCard: {
    backgroundColor: colors.white,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: `1px solid ${colors.lightGray}`,
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  houseHeader: {
    backgroundColor: colors.darkGreen,
    color: colors.white,
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${colors.lightGreen}`,
  },
  houseTitle: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    margin: 0,
  },
  houseSize: {
    fontSize: '1.1em',
    opacity: 0.9,
  },
  houseContent: {
    padding: '30px',
  },
  bedroomsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '15px',
    marginTop: '25px',
    marginBottom: '30px',
  },
  bedroomCard: {
    backgroundColor: colors.offWhite,
    padding: '16px 12px',
    borderRadius: '10px',
    textAlign: 'center' as const,
    boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
    border: `1px solid ${colors.lightGray}`,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'default',
  },
  bedroomType: {
    fontWeight: '600',
    fontSize: '1.05em',
    marginBottom: '8px',
    color: colors.darkGreen,
  },
  bedroomDetail: {
    fontSize: '0.9em',
    color: colors.darkGray,
    fontStyle: 'italic',
  },
  houseDetailsList: {
    padding: '0 0 0 20px',
    marginTop: '15px',
  },
  houseDetailItem: {
    marginBottom: '10px',
    lineHeight: 1.5,
  },
  wellness: {
    backgroundColor: colors.white,
    padding: '25px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: `1px solid ${colors.lightGray}`,
  },
  wellnessHeader: {
    backgroundColor: colors.darkGreen,
    color: colors.white,
    padding: '20px 30px',
    borderRadius: '10px 10px 0 0',
    marginBottom: '20px',
    marginLeft: '-25px',
    marginRight: '-25px',
    marginTop: '-25px',
  },
  wellnessTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: 0,
  },
  wellnessFeatures: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '15px',
    marginTop: '15px',
  },
  wellnessFeature: {
    backgroundColor: colors.white,
    padding: '12px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    color: colors.darkGreen,
    boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
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
  }
};

export default function LuxuryRetreat() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Cotswolds Estate | AceHost</title>
        <meta name="description" content="An exclusive luxury estate nestled in the heart of the Cotswolds. Experience tranquility and elegance in a stunning countryside setting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logoContainer}>
            <Image 
              src="/photos/642ca4501534ebc86d037617_AceHost-Whistler-Logo.png" 
              alt="AceHost Logo" 
              width={120} 
              height={40} 
              style={{ height: 'auto', width: '120px' }}
            />
            <span style={styles.logoText}>Cotswolds Estate</span>
          </div>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
            <li style={styles.navItem}><a href="#gallery" style={styles.navLink}>Gallery</a></li>
            <li style={styles.navItem}><a href="#amenities" style={styles.navLink}>Amenities</a></li>
            <li style={styles.navItem}><a href="#bedrooms" style={styles.navLink}>Bedrooms</a></li>
            <li style={styles.navItem}><Link href="/cotswolds-blog" style={styles.navLink}>Blog</Link></li>
            <li style={styles.navItem}>
              <a href={AIRBNB_LINK} style={styles.bookNowNav} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Cotswolds Estate</h1>
            <p style={styles.heroSubtitle}>An Exclusive Haven of Tranquility in the English Countryside</p>
            <div style={styles.videoPlaceholder}>
              <p style={styles.placeholderText}>Your amazing video will be here soon!</p>
            </div>
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
            <CotswoldsGallery 
              photos={photos}
              propertyName="Cotswolds Estate"
            />
          </div>
        </section>

        <section id="amenities" style={styles.section}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.heading}>Amenities & Features</h2>
            
            <div style={styles.amenitiesContainer}>
              <div style={styles.amenityCard}>
                <h3 style={styles.amenityTitle}>Interior</h3>
                <ul style={styles.amenitiesList}>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Devol designer kitchen with iconic AGA oven
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Spacious living and dining areas
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Luxury linens and towels
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    En-suite bathrooms with premium fixtures
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Two dedicated office spaces
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Brand-new washer/dryer
                  </li>
                </ul>
              </div>

              <div style={styles.amenityCard}>
                <h3 style={styles.amenityTitle}>Outdoor</h3>
                <ul style={styles.amenitiesList}>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Private tennis court with new surface
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Outdoor seating and dining areas
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Charming private pond
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Bocce ball and horseshoes
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Outdoor firepit
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Ample private parking
                  </li>
                </ul>
              </div>

              <div style={styles.amenityCard}>
                <h3 style={styles.amenityTitle}>Wellness</h3>
                <ul style={styles.amenitiesList}>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Infrared sauna
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Private hot tub
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Refreshing cold plunge pool
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    High-speed internet throughout
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Welcome package upon arrival
                  </li>
                  <li style={styles.amenityItem}>
                    <span style={styles.checkmark}>✓</span> 
                    Concierge services available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="bedrooms" style={styles.bedroomSection}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.heading}>Our Accommodation</h2>
            
            <div style={styles.bedroomsContainer}>
              {/* Main House */}
              <div style={styles.houseCard}>
                <div style={styles.houseHeader}>
                  <h3 style={styles.houseTitle}>Main House</h3>
                  <span style={styles.houseSize}>6 Bedrooms (280m²)</span>
                </div>
                <div style={styles.houseContent}>
                  <p style={styles.paragraph}>
                    The heart of the estate features six thoughtfully designed bedrooms and four elegant bathrooms, perfect for families, groups, or special gatherings.
                  </p>
                  
                  <h4 style={styles.subheading}>Bedroom Configurations</h4>
                  <div style={styles.bedroomsGrid}>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>Emperor King</div>
                      <div style={styles.bedroomDetail}>Spacious luxury</div>
                    </div>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>Super King</div>
                      <div style={styles.bedroomDetail}>Premium comfort</div>
                    </div>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>Super King</div>
                      <div style={styles.bedroomDetail}>Elegant design</div>
                    </div>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>King</div>
                      <div style={styles.bedroomDetail}>Cozy retreat</div>
                    </div>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>Double</div>
                      <div style={styles.bedroomDetail}>Charming space</div>
                    </div>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>Single</div>
                      <div style={styles.bedroomDetail}>Perfect for one</div>
                    </div>
                  </div>
                  
                  <h4 style={styles.subheading}>House Features</h4>
                  <ul style={styles.houseDetailsList}>
                    <li style={styles.houseDetailItem}>Two bedrooms with spa-like ensuite bathrooms</li>
                    <li style={styles.houseDetailItem}>Large shared bathroom with separate tub and walk-in shower</li>
                    <li style={styles.houseDetailItem}>Charming powder room on the main floor</li>
                    <li style={styles.houseDetailItem}>Two cozy living rooms ideal for lounging or movie nights</li>
                    <li style={styles.houseDetailItem}>Two dedicated office spaces for remote work</li>
                    <li style={styles.houseDetailItem}>Gorgeous Devol designer kitchen with iconic AGA oven</li>
                    <li style={styles.houseDetailItem}>Two fridges and brand-new washer/dryer</li>
                  </ul>
                </div>
              </div>
              
              {/* Annex House */}
              <div style={styles.houseCard}>
                <div style={styles.houseHeader}>
                  <h3 style={styles.houseTitle}>Annex House</h3>
                  <span style={styles.houseSize}>2 Bedrooms (40m²)</span>
                </div>
                <div style={styles.houseContent}>
                  <p style={styles.paragraph}>
                    Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own.
                  </p>
                  
                  <h4 style={styles.subheading}>Bedroom Configurations</h4>
                  <div style={styles.bedroomsGrid}>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>King</div>
                      <div style={styles.bedroomDetail}>Private retreat</div>
                    </div>
                    <div style={styles.bedroomCard}>
                      <div style={styles.bedroomType}>Flexible</div>
                      <div style={styles.bedroomDetail}>Two singles or king</div>
                    </div>
                  </div>
                  
                  <h4 style={styles.subheading}>House Features</h4>
                  <ul style={styles.houseDetailsList}>
                    <li style={styles.houseDetailItem}>One full bathroom</li>
                    <li style={styles.houseDetailItem}>Compact kitchenette—perfect for early risers or night owls</li>
                    <li style={styles.houseDetailItem}>Private space separate from the main house</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Wellness & Outdoor - now in a matching card style */}
            <div style={{...styles.wellness, marginTop: '40px'}}>
              <div style={styles.wellnessHeader}>
                <h3 style={styles.wellnessTitle}>Wellness & Outdoor Living</h3>
              </div>
              <p style={styles.paragraph}>
                The grounds are where the magic truly unfolds. Indulge in your own private outdoor spa and enjoy the beautiful surroundings.
              </p>
              
              <div style={styles.wellnessFeatures}>
                <div style={styles.wellnessFeature}>Infrared Sauna</div>
                <div style={styles.wellnessFeature}>Hot Tub</div>
                <div style={styles.wellnessFeature}>Cold Plunge Pool</div>
                <div style={styles.wellnessFeature}>Private Pond</div>
                <div style={styles.wellnessFeature}>Bocce Ball</div>
                <div style={styles.wellnessFeature}>Horseshoes</div>
                <div style={styles.wellnessFeature}>Outdoor Firepit</div>
                <div style={styles.wellnessFeature}>Tennis Court</div>
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
            <p style={styles.footerText}>
              Looking to list and market your home with us? Visit <a href="https://acehost.ca" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>acehost.ca</a> for more details on our competitive rates and unique marketing approach for your luxury Airbnb Vacation Home in the Cotswolds or the UK.
            </p>
          </div>
          
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Book Your Stay</h3>
            <p style={styles.footerText}>
              <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>
                Reserve through Airbnb
              </a>
            </p>
          </div>
          
          <p style={styles.copyright}>&copy; 2025 Cotswolds Estate by AceHost. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
} 