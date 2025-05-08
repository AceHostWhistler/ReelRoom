import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/cotswolds-retreat.module.css'; // We'll create this file next

// Note: Next.js Image component optimizes images automatically
// Define image paths for easy management
const imagePaths = {
  hero: '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143723_0661_D.jpg',
  gallery: [
    '/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg',
    '/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg',
    '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143734_0662_D.jpg',
  ],
  explore: {
    livingAreas: '/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg',
    bedrooms: '/photos/listings/Cotswolds Luxury Retreat/224A5435.jpg',
    outdoorSpaces: '/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143633_0658_D.jpg',
    diningKitchen: '/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg',
  }
};

// Airbnb link
const AIRBNB_LINK = "https://www.airbnb.ca/rooms/1414129878809697902?check_in=2025-08-20&check_out=2025-08-24&guests=10&adults=10&s=67&unique_share_id=3bb66e80-1ca0-4eb8-9866-40b102c76e50";

export default function CotswoldsLuxuryRetreat() {
  // Add any custom JavaScript from our original script.js
  useEffect(() => {
    console.log("Cotswolds Luxury Retreat page loaded.");
    
    // You can add any other client-side code here that was in the original script.js
  }, []);

  return (
    <>
      <Head>
        <title>Cotswolds Luxury Retreat</title>
        <meta name="description" content="An oasis of tranquility in the Cotswolds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <a href="#">Cotswolds Luxury Retreat</a>
            </div>
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
                        style={{ objectFit: 'cover' }}
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