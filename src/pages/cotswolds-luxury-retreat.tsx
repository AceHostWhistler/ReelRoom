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

export default function CotswoldsLuxuryRetreat() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
        
        {/* Additional viewport settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

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
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              style={{ display: 'none' }} // Hidden by default, shown with media query
            >
              ☰
            </button>
          </nav>
          
          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}>
              <div 
                className={styles.mobileMenu}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the menu
              >
                <div className={styles.mobileMenuHeader}>
                  <h3>Navigation</h3>
                  <button onClick={closeMobileMenu}>×</button>
                </div>
                <ul className={styles.mobileMenuItems}>
                  <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                  <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                  <li><a href="#estate" onClick={closeMobileMenu}>The Estate</a></li>
                  <li><a href="#explore" onClick={closeMobileMenu}>Explore</a></li>
                  <li><a href="#amenities" onClick={closeMobileMenu}>Amenities</a></li>
                  <li>
                    <a 
                      href={AIRBNB_LINK} 
                      className={styles.bookNowMobile} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                    >
                      Book Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
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
                          margin: '0 auto' // Center the image
                        }}
                        className={styles.galleryImage} // Add a class for additional styling if needed
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