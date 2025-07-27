import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/cotswolds-retreat.module.css'; // We'll create this file next

// Note: Next.js Image component optimizes images automatically
// Define image paths for easy management
const imagePaths = {
  hero: '/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg',
  gallery: [
    '/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg',
    '/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg',
    '/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090720_0527_D.jpg',
  ],
  explore: {
    livingAreas: '/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg',
    bedrooms: '/photos/listings/Cotswolds Luxury Retreat/224A5435.jpg',
    outdoorSpaces: '/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090532_0522_D.jpg',
    diningKitchen: '/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg',
  }
};

// Airbnb link
const AIRBNB_LINK = "https://www.airbnb.ca/rooms/1414129878809697902?check_in=2025-08-20&check_out=2025-08-24&guests=10&adults=10&s=67&unique_share_id=3bb66e80-1ca0-4eb8-9866-40b102c76e50";

// Mobile Menu Component - Separated for better isolation
const MobileMenuOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      id="mobileMenuContainer"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99999999,
        display: 'flex',
        justifyContent: 'flex-end',
        WebkitOverflowScrolling: 'touch', // For iOS momentum scrolling
        WebkitTransform: 'translate3d(0,0,0)', // Force hardware acceleration on iOS
        transform: 'translate3d(0,0,0)',
        WebkitBackfaceVisibility: 'hidden', // Prevent iOS rendering issues
        backfaceVisibility: 'hidden',
        willChange: 'transform', // Hint to browser for optimization
        isolation: 'isolate', // Create a new stacking context
      }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '80%',
          maxWidth: '300px',
          backgroundColor: '#fff',
          boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.2)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          WebkitBackfaceVisibility: 'hidden', // Prevent rendering issues on iOS
          WebkitTransform: 'translateZ(0)', // Force GPU acceleration
          transform: 'translateZ(0)',
          isolation: 'isolate',
          willChange: 'transform',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking menu
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          borderBottom: '1px solid #e0e0e0',
        }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Navigation</h3>
          <button 
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px 8px',
            }}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          <li style={{ borderBottom: '1px solid #e0e0e0' }}>
            <a 
              href="#home" 
              style={{ padding: '16px', display: 'block', textDecoration: 'none', color: '#333' }}
              onClick={onClose}
            >
              Home
            </a>
          </li>
          <li style={{ borderBottom: '1px solid #e0e0e0' }}>
            <a 
              href="#about" 
              style={{ padding: '16px', display: 'block', textDecoration: 'none', color: '#333' }}
              onClick={onClose}
            >
              About
            </a>
          </li>
          <li style={{ borderBottom: '1px solid #e0e0e0' }}>
            <a 
              href="#estate" 
              style={{ padding: '16px', display: 'block', textDecoration: 'none', color: '#333' }}
              onClick={onClose}
            >
              The Estate
            </a>
          </li>
          <li style={{ borderBottom: '1px solid #e0e0e0' }}>
            <a 
              href="#explore" 
              style={{ padding: '16px', display: 'block', textDecoration: 'none', color: '#333' }}
              onClick={onClose}
            >
              Explore
            </a>
          </li>
          <li style={{ borderBottom: '1px solid #e0e0e0' }}>
            <a 
              href="#amenities" 
              style={{ padding: '16px', display: 'block', textDecoration: 'none', color: '#333' }}
              onClick={onClose}
            >
              Amenities
            </a>
          </li>
          <li style={{ padding: '16px' }}>
            <a 
              href={AIRBNB_LINK}
              style={{ 
                display: 'block',
                background: '#007aff',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: '6px',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function CotswoldsLuxuryRetreat() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Toggle mobile menu
  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(prev => !prev);
    
    // Prevent body scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };
  
  // Add any custom JavaScript from our original script.js
  useEffect(() => {
    console.log("Cotswolds Luxury Retreat page loaded.");
    
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle iOS-specific positioning issues
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (mobileMenuOpen) {
        // Force iOS Safari to respect the z-index
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        // Restore scroll position
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
      }
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <Head>
        <title>Cotswolds Luxury Retreat | Premium Estate with Tennis Court & Wellness Facilities</title>
        <meta name="description" content="Experience the ultimate luxury retreat in the heart of the Cotswolds. Our exclusive estate features elegant interiors, private tennis court, wellness facilities, and is just minutes from Soho Farmhouse." />
        <meta name="keywords" content="Cotswolds luxury retreat, Cotswolds estate rental, luxury Cotswolds vacation, Cotswolds holiday home, Soho Farmhouse, tennis court, wellness retreat" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.cotswoldsvacation.com/cotswolds-luxury-retreat" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Cotswolds Luxury Retreat | Premium Estate with Tennis Court & Wellness Facilities" />
        <meta property="og:description" content="Experience the ultimate luxury retreat in the heart of the Cotswolds. Our exclusive estate features elegant interiors, private tennis court, wellness facilities, and is just minutes from Soho Farmhouse." />
        <meta property="og:image" content="https://www.cotswoldsvacation.com/photos/listings/Cotswolds%20Luxury%20Retreat/DJI_20250602090653_0526_D.jpg" />
        <meta property="og:url" content="https://www.cotswoldsvacation.com/cotswolds-luxury-retreat" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Cotswolds Luxury Retreat | Premium Estate with Tennis Court & Wellness" />
        <meta name="twitter:description" content="Experience the ultimate luxury retreat in the heart of the Cotswolds, just minutes from Soho Farmhouse." />
        <meta name="twitter:image" content="https://www.cotswoldsvacation.com/photos/listings/Cotswolds%20Luxury%20Retreat/DJI_20250602090653_0526_D.jpg" />
        
        {/* Structured Data (JSON-LD) for LodgingBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Cotswolds Luxury Retreat",
              "image": "https://www.cotswoldsvacation.com/photos/listings/Cotswolds%20Luxury%20Retreat/DJI_20250602090653_0526_D.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Cotswolds",
                "addressCountry": "United Kingdom"
              },
              "description": "An exclusive luxury estate in the heart of the Cotswolds with private tennis court and wellness facilities.",
              "amenityFeature": [
                {"@type": "LocationFeatureSpecification", "name": "Tennis Court"},
                {"@type": "LocationFeatureSpecification", "name": "Wellness Facilities"},
                {"@type": "LocationFeatureSpecification", "name": "High-speed Internet"},
                {"@type": "LocationFeatureSpecification", "name": "Luxury Bedrooms"}
              ],
              "url": "https://www.cotswoldsvacation.com/cotswolds-luxury-retreat",
              "priceRange": "$$$$"
            })
          }}
        />
        
        {/* iOS specific viewport settings to fix rendering issues */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover, user-scalable=yes, shrink-to-fit=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      {/* Mobile Menu - completely isolated from main page flow */}
      <MobileMenuOverlay isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <a href="#">Cotswolds Luxury Retreat</a>
            </div>
            
            {/* Desktop navigation */}
            <ul className={styles.navList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#estate">The Estate</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li>
                <a href={AIRBNB_LINK} className={styles.bookNowNav} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </li>
            </ul>
            
            {/* Mobile menu button */}
            <button 
              style={{
                display: 'none', // Hidden by default, shown with media query
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '8px',
                color: '#000',
                position: 'absolute',
                right: '15px',
                top: '15px',
                zIndex: 9999
              }}
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              className={styles.mobileMenuButton}
            >
              ☰
            </button>
          </nav>
        </header>

        <main>
          <section id="home" className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Cotswolds Luxury Retreat</h1>
              <p>An Oasis of Tranquility</p>
              {/* Video placeholder */}
              <div className={styles.videoPlaceholder}>
                <p>Your amazing video will be here soon!</p>
              </div>
              <a 
                href={AIRBNB_LINK} 
                className={styles.bookNowHero} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Your Stay
              </a>
            </div>
          </section>

          <section id="about" className={styles.section}>
            <div className={styles.sectionContainer}>
              <h2>About Cotswolds Luxury Retreat</h2>
              <p>Discover the ultimate luxury experience nestled in the heart of the Cotswolds. Our estate offers a serene and lavish escape from the everyday, combining sophisticated design with the timeless beauty of the English countryside.</p>
              <p>Perfect for discerning guests seeking privacy, comfort, and unparalleled service. Whether you're planning a family vacation, a romantic getaway, or a corporate retreat, Cotswolds Luxury Retreat provides an unforgettable backdrop.</p>
            </div>
          </section>

          <section id="estate" className={styles.section}>
            <div className={styles.sectionContainer}>
              <h2>The Estate</h2>
              <p>Immerse yourself in the elegance and charm of our meticulously designed property. Explore sprawling gardens, luxurious interiors, and breathtaking views.</p>
              <div className={styles.gallery}>
                {imagePaths.gallery.map((path, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={path} 
                        alt={`Estate Image ${index + 1}`} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ 
                          objectFit: 'cover',
                          margin: '0 auto', // Center the image
                          width: '100%', // Ensure full width
                          height: '100%', // Ensure full height
                          position: 'absolute',
                          top: 0,
                          left: 0
                        }}
                        className={styles.galleryImage}
                        priority={index < 2} // Prioritize loading the first two images
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="explore" className={styles.section}>
            <div className={styles.sectionContainer}>
              <h2>Explore</h2>
              <p>Click on the images to discover more about what Cotswolds Luxury Retreat has to offer.</p>
              <div className={styles.exploreGrid}>
                <div className={styles.exploreItem}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={imagePaths.explore.livingAreas} 
                      alt="Explore Living Area" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.exploreCaption}>Living Areas</div>
                </div>
                <div className={styles.exploreItem}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={imagePaths.explore.bedrooms} 
                      alt="Explore Bedrooms" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.exploreCaption}>Bedrooms</div>
                </div>
                <div className={styles.exploreItem}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={imagePaths.explore.outdoorSpaces} 
                      alt="Explore Outdoors" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.exploreCaption}>Outdoor Spaces</div>
                </div>
                <div className={styles.exploreItem}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={imagePaths.explore.diningKitchen} 
                      alt="Explore Dining" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.exploreCaption}>Dining & Kitchen</div>
                </div>
              </div>
            </div>
          </section>

          <section id="amenities" className={styles.section}>
            <div className={styles.sectionContainer}>
              <h2>Amenities</h2>
              <ul className={styles.amenitiesList}>
                <li>State-of-the-art Kitchen</li>
                <li>High-speed 1GB Internet</li>
                <li>Luxury Linens and Towels</li>
                <li>Private Gardens</li>
                <li>Outdoor Seating & BBQ Area</li>
                <li>Smart Home Features</li>
                <li>Spacious Living and Dining Areas</li>
                <li>En-suite Bathrooms</li>
                <li>Ample Parking</li>
              </ul>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <p>&copy; 2025 Cotswolds Luxury Retreat. All Rights Reserved.</p>
            <div className={styles.socialLinks}>
              {/* Social media links can be added here */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 