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

const AIRBNB_LINK = "https://www.airbnb.ca/rooms/1414129878809697902?check_in=2025-08-20&check_out=2025-08-24&guests=10&adults=10&s=67&unique_share_id=3bb66e80-1ca0-4eb8-9866-40b102c76e50";

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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/224A5314.jpg')",
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
    maxWidth: '900px',
    margin: '60px auto',
    padding: '0 20px',
  },
  blogContent: {
    backgroundColor: colors.white,
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  blogImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '30px',
    marginTop: '30px',
  },
  heading: {
    fontSize: '2em',
    color: colors.darkGreen,
    marginBottom: '0.8em',
    marginTop: '1.5em',
  },
  paragraph: {
    fontSize: '1.1em',
    marginBottom: '1.2em',
    lineHeight: 1.8,
  },
  metaInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    color: colors.darkGray,
    fontSize: '0.9em',
    marginBottom: '30px',
    borderBottom: `1px solid ${colors.lightGray}`,
    paddingBottom: '20px',
  },
  bookButton: {
    display: 'inline-block',
    backgroundColor: colors.darkGreen,
    color: colors.white,
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '1.1em',
    fontWeight: 600,
    textDecoration: 'none',
    textAlign: 'center' as const,
    marginTop: '20px',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
  },
  calloutBox: {
    backgroundColor: colors.offWhite,
    padding: '25px',
    borderRadius: '8px',
    borderLeft: `4px solid ${colors.darkGreen}`,
    marginBottom: '30px',
    marginTop: '30px',
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
  backToBlogs: {
    display: 'inline-block',
    color: colors.darkGreen,
    marginTop: '30px',
    marginBottom: '20px',
    fontWeight: 500,
    textDecoration: 'none',
  },
  listItem: {
    fontSize: '1.1em',
    marginBottom: '10px',
    paddingLeft: '25px',
    position: 'relative' as 'relative',
  },
  listItemDot: {
    position: 'absolute' as 'absolute',
    left: '0',
    top: '9px',
    width: '8px',
    height: '8px',
    backgroundColor: colors.darkGreen,
    borderRadius: '50%',
  },
  restaurantCard: {
    backgroundColor: colors.white,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  restaurantImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover' as const,
  },
  restaurantContent: {
    padding: '25px',
    flex: 1,
  },
  restaurantTitle: {
    fontSize: '1.6em',
    color: colors.darkGreen,
    marginBottom: '10px',
    fontWeight: 600,
  },
  restaurantMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    fontSize: '0.95em',
    color: '#666',
  },
  restaurantTags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
    marginBottom: '15px',
  },
  tag: {
    backgroundColor: colors.offWhite,
    color: colors.darkGreen,
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.85em',
    fontWeight: 500,
  },
  restaurantGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '30px',
    marginBottom: '50px',
  },
};

export default function DiningExperiencesBlog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Cotswolds Local Dining Experiences Near Soho Farm House | Luxury Retreat</title>
        <meta name="description" content="Discover the best dining experiences near Soho Farm House in the Cotswolds, from Michelin-starred restaurants to charming country pubs near our luxury accommodation." />
        <meta name="keywords" content="dining near Soho Farm House, luxury Cotswolds restaurants, Cotswolds fine dining, luxury stays near Soho Farm House, Cotswolds gastro pubs" />
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
              <Link href="/cotswolds-blog" style={styles.navLink}>
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
          <h1 style={styles.heroTitle}>Cotswolds Local Dining Experiences Near Soho Farm House</h1>
          <p style={styles.heroSubtitle}>
            A culinary journey through the finest dining destinations within easy reach of our luxury estate
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <Link href="/cotswolds-blog" style={styles.backToBlogs}>
          ← Back to Blogs
        </Link>
        
        <article style={styles.blogContent}>
          <div style={styles.metaInfo}>
            <span>June 10, 2025</span>
            <span>4 min read</span>
          </div>
          
          <p style={styles.paragraph}>
            The Cotswolds is renowned for its picturesque landscapes, honey-colored stone villages, and increasingly, its exceptional food scene. 
            When staying at our <strong>luxury Cotswolds estate near Soho Farm House</strong>, you'll be ideally positioned to explore some of 
            the most remarkable dining experiences the region has to offer – from Michelin-starred restaurants to charming country pubs serving 
            elevated British classics.
          </p>

          <p style={styles.paragraph}>
            In this guide, we've curated our favorite dining destinations within easy reach of our <strong>luxury villa in the Cotswolds</strong>, 
            ensuring that food enthusiasts will be well catered for throughout their stay.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg"
            alt="Dining area at Cotswolds Estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Fine Dining Experiences</h2>
          
          <p style={styles.paragraph}>
            For those special occasions during your stay, the Cotswolds offers several exceptional fine dining options that rival 
            the best restaurants in London. These establishments showcase the finest local ingredients prepared with world-class technique:
          </p>

          <div style={styles.restaurantGrid}>
            <div style={styles.restaurantCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg"
                alt="The Wild Rabbit"
                style={styles.restaurantImage}
              />
              <div style={styles.restaurantContent}>
                <h3 style={styles.restaurantTitle}>The Wild Rabbit</h3>
                <div style={styles.restaurantMeta}>
                  <span>Kingham (15 min drive)</span>
                  <span>£££</span>
                </div>
                <div style={styles.restaurantTags}>
                  <span style={styles.tag}>Fine Dining</span>
                  <span style={styles.tag}>Modern British</span>
                  <span style={styles.tag}>Local Ingredients</span>
                </div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Owned by Lady Bamford of Daylesford Organic, The Wild Rabbit transforms locally sourced, often estate-grown ingredients 
                  into sophisticated dishes that celebrate the Cotswolds. The restaurant has been awarded a Michelin star for its exceptional 
                  modern British cuisine, served in a luxurious yet comfortable setting.
                </p>
              </div>
            </div>

            <div style={styles.restaurantCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5423.jpg"
                alt="Le Champignon Sauvage"
                style={styles.restaurantImage}
              />
              <div style={styles.restaurantContent}>
                <h3 style={styles.restaurantTitle}>Le Champignon Sauvage</h3>
                <div style={styles.restaurantMeta}>
                  <span>Cheltenham (30 min drive)</span>
                  <span>£££</span>
                </div>
                <div style={styles.restaurantTags}>
                  <span style={styles.tag}>Michelin-Starred</span>
                  <span style={styles.tag}>French Influence</span>
                  <span style={styles.tag}>Tasting Menu</span>
                </div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  One of the most celebrated restaurants in the region, Le Champignon Sauvage has maintained its exceptional 
                  reputation for decades. Chef David Everitt-Matthias creates French-influenced cuisine with innovative touches, 
                  earning consistent praise and Michelin recognition for his remarkable tasting menus.
                </p>
              </div>
            </div>
          </div>

          <h2 style={styles.heading}>Elevated Country Pubs</h2>

          <p style={styles.paragraph}>
            The Cotswolds is famous for its traditional pubs, many of which have been transformed into "gastro pubs" offering 
            superb food while maintaining their authentic charm and character. These establishments perfectly balance comfort 
            with culinary excellence:
          </p>

          <div style={styles.restaurantGrid}>
            <div style={styles.restaurantCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg"
                alt="The Kingham Plough"
                style={styles.restaurantImage}
              />
              <div style={styles.restaurantContent}>
                <h3 style={styles.restaurantTitle}>The Kingham Plough</h3>
                <div style={styles.restaurantMeta}>
                  <span>Kingham (15 min drive)</span>
                  <span>££</span>
                </div>
                <div style={styles.restaurantTags}>
                  <span style={styles.tag}>Gastro Pub</span>
                  <span style={styles.tag}>Seasonal Menu</span>
                  <span style={styles.tag}>Local Ales</span>
                </div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  This award-winning pub offers a warm welcome and exceptional food. With a menu that changes with the seasons, 
                  The Kingham Plough celebrates local producers while putting a refined twist on pub classics. The rustic-chic 
                  interior creates the perfect atmosphere for a relaxed yet special meal.
                </p>
              </div>
            </div>

            <div style={styles.restaurantCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5372.jpg"
                alt="The Chequers"
                style={styles.restaurantImage}
              />
              <div style={styles.restaurantContent}>
                <h3 style={styles.restaurantTitle}>The Chequers</h3>
                <div style={styles.restaurantMeta}>
                  <span>Churchill (10 min drive)</span>
                  <span>££</span>
                </div>
                <div style={styles.restaurantTags}>
                  <span style={styles.tag}>Historic Pub</span>
                  <span style={styles.tag}>Sunday Roast</span>
                  <span style={styles.tag}>Cozy Atmosphere</span>
                </div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  A quintessential Cotswolds pub with stone walls, wooden beams, and a crackling fireplace, The Chequers 
                  excels at traditional British fare with contemporary refinement. Their Sunday roasts are legendary among 
                  locals, and the welcoming atmosphere makes it a perfect place to experience authentic Cotswolds hospitality.
                </p>
              </div>
            </div>
          </div>

          <h2 style={styles.heading}>Soho Farm House Dining</h2>

          <p style={styles.paragraph}>
            For Soho House members and their guests, Soho Farm House itself offers several exceptional dining options. 
            Just a short drive from our <strong>luxury Cotswolds property</strong>, this exclusive retreat features:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>The Main Barn</strong> – Serving farm-to-table dishes in a rustic yet sophisticated setting
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>The Hay Barn</strong> – A relaxed space for all-day dining with comforting classics
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Pen Yen</strong> – Japanese grill restaurant offering an innovative menu in an intimate setting
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>The Farm Shop & Deli</strong> – Perfect for picking up local delicacies to enjoy back at our estate
            </li>
          </ul>

          <p style={styles.paragraph}>
            While staying at our <strong>luxury farmhouse in the Cotswolds</strong>, members can enjoy these exclusive dining venues 
            just minutes away – ideal for lunch during a day of activities or a special dinner without a long drive.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5433.jpg"
            alt="Kitchen at Cotswolds Estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Local Farm Shops & Markets</h2>

          <p style={styles.paragraph}>
            One of the joys of staying at our <strong>Cotswolds estate near Soho Farm House</strong> is the opportunity to explore 
            the remarkable local produce and bring it back to prepare in our beautifully equipped kitchen. Don't miss these 
            exceptional food destinations:
          </p>

          <div style={styles.calloutBox}>
            <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px'}}>Must-Visit Food Destinations</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Daylesford Organic Farm Shop</strong> – The most famous farm shop in the region, offering extraordinary 
                organic produce, artisanal cheeses, freshly baked bread, and prepared foods. The on-site café is also excellent 
                for breakfast or lunch.
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Chipping Norton Farmers' Market</strong> – Held on the third Saturday of each month, this vibrant market 
                brings together local farmers and food producers offering everything from seasonal vegetables to artisanal spirits.
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>The Cotswold Cheese Company</strong> – With locations in several Cotswold towns, this specialist shop offers 
                an impressive selection of local and international cheeses, perfect for creating a memorable cheese board.
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Cotswold Bakery</strong> – Authentic artisanal bakery producing exceptional sourdough, pastries, and traditional 
                British baked goods using heritage techniques and local ingredients.
              </li>
            </ul>
          </div>

          <h2 style={styles.heading}>Private Dining at Our Estate</h2>

          <p style={styles.paragraph}>
            Sometimes the best dining experience is one enjoyed in the comfort and privacy of your own accommodation. Our 
            <strong>luxury villa in the Cotswolds</strong> is perfectly equipped for memorable in-house dining experiences:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Chef's Kitchen</strong> – Our Devol designer kitchen with iconic AGA oven is a dream for cooking enthusiasts
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Private Chef Services</strong> – We can arrange for a talented local chef to prepare a bespoke meal in your accommodation
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Catering Options</strong> – Several excellent local caterers can deliver exceptional ready-to-serve meals
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Wine Delivery</strong> – Local wine merchants offer delivery of perfectly paired wines for your meal
            </li>
          </ul>

          <p style={styles.paragraph}>
            The elegant dining area and outdoor terrace at our estate provide beautiful settings for enjoying meals with your group, 
            whether self-catered or professionally prepared.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5492.jpg"
            alt="Elegant dining at Cotswolds Estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Seasonal Food Events</h2>

          <p style={styles.paragraph}>
            The Cotswolds celebrates its rich culinary heritage throughout the year with several food-focused events and festivals. 
            Depending on when you visit our <strong>luxury Cotswolds stay</strong>, you might be able to experience:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Cheltenham Food Festival</strong> (June) – A showcase of regional and international cuisine with demonstrations, tastings, and producer stalls
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>The Big Feastival</strong> (August) – Alex James' farm hosts this popular food and music festival featuring top chefs and family activities
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Autumn Harvest Festivals</strong> (September-October) – Various villages celebrate the harvest with special menus and events
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Christmas Markets</strong> (November-December) – Featuring seasonal specialties and local delicacies
            </li>
          </ul>

          <h2 style={styles.heading}>Planning Your Culinary Experience</h2>

          <p style={styles.paragraph}>
            To make the most of the exceptional dining options near our <strong>Cotswolds estate near Soho Farm House</strong>, 
            we recommend:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Book in advance</strong> – Especially for fine dining restaurants and popular gastro pubs, particularly on weekends
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Consider lunch</strong> – Many high-end restaurants offer excellent value lunch menus
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Ask us for recommendations</strong> – We're happy to suggest places that match your preferences
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Arrange transportation</strong> – If you plan to enjoy wine with your meal, we can arrange local taxi services
            </li>
          </ul>

          <p style={styles.paragraph}>
            Our <strong>luxury Cotswolds property</strong> is ideally positioned to serve as your base for culinary exploration 
            in this food-rich region. From collecting fresh ingredients for a home-cooked feast to experiencing the finest 
            restaurants in the area, food lovers will find endless opportunities to indulge their passion.
          </p>

          <a href={AIRBNB_LINK} style={styles.bookButton} target="_blank" rel="noopener noreferrer">
            Book Your Culinary Cotswolds Escape
          </a>

          <p style={styles.paragraph}>
            We look forward to welcoming you to our <strong>Cotswolds estate</strong> and helping you discover the exceptional 
            food and drink experiences that make this region so special. Whether you're a dedicated foodie or simply appreciate 
            good cooking, the Cotswolds offers a culinary journey to remember.
          </p>
        </article>

        <Link href="/cotswolds-blog" style={styles.backToBlogs}>
          ← Back to Blogs
        </Link>
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