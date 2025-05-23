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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/224A5348.jpg')",
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
  activityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    margin: '30px 0',
  },
  activityCard: {
    backgroundColor: colors.white,
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  activityImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover' as const,
  },
  activityContent: {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  activityTitle: {
    fontSize: '1.3em',
    color: colors.darkGreen,
    marginBottom: '10px',
    fontWeight: 600,
  },
  activityDistance: {
    fontSize: '0.9em',
    color: '#666',
    marginBottom: '10px',
  },
  activityDescription: {
    flex: 1,
    marginBottom: '15px',
  },
  tabContainer: {
    marginBottom: '40px',
  },
  tabButtons: {
    display: 'flex',
    borderBottom: `1px solid ${colors.lightGray}`,
    marginBottom: '25px',
    overflowX: 'auto' as const,
  },
  tabButton: {
    padding: '12px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '3px solid transparent',
    fontSize: '1.1em',
    fontWeight: 500,
    color: colors.darkGray,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap' as const,
  },
  activeTabButton: {
    color: colors.darkGreen,
    borderBottomColor: colors.darkGreen,
  },
  tabContent: {
    display: 'none',
  },
  activeTabContent: {
    display: 'block',
  },
};

export default function ActivitiesPlacesVisitBlog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Activities and Places to Visit in the Cotswolds | Luxury Retreat</title>
        <meta name="description" content="Discover the best activities and places to visit in the Cotswolds, from historic villages to outdoor adventures, all easily accessible from our luxury estate." />
        <meta name="keywords" content="Cotswolds activities, places to visit Cotswolds, Cotswolds luxury stays, things to do near Soho Farm House, Cotswolds attractions" />
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
          <h1 style={styles.heroTitle}>Activities and Places to Visit in the Cotswolds</h1>
          <p style={styles.heroSubtitle}>
            Your guide to the most captivating experiences and destinations in this beautiful region
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <Link href="/cotswolds-blog" style={styles.backToBlogs}>
          ← Back to Blogs
        </Link>
        
        <article style={styles.blogContent}>
          <div style={styles.metaInfo}>
            <span>May 18, 2025</span>
            <span>7 min read</span>
          </div>
          
          <p style={styles.paragraph}>
            The Cotswolds offers an abundance of activities and places to visit that showcase the region's natural beauty, 
            rich history, and vibrant culture. When staying at our <strong>luxury Cotswolds estate near Soho Farm House</strong>, 
            you'll have easy access to countless attractions and experiences, from charming villages to outdoor adventures.
          </p>

          <p style={styles.paragraph}>
            In this guide, we've curated the best activities and places to visit within easy reach of our 
            <strong>luxury villa in the Cotswolds</strong>, ensuring you can make the most of your stay in this 
            magnificent Area of Outstanding Natural Beauty.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143454_0650_D.jpg"
            alt="Aerial view of the Cotswolds"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Quintessential Cotswolds Villages</h2>
          
          <p style={styles.paragraph}>
            The Cotswolds is famous for its picture-perfect villages with honey-colored stone cottages, charming shops, and quaint 
            tearooms. These are some of the most delightful villages to explore during your stay:
          </p>

          <div style={styles.activityGrid}>
            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5372.jpg"
                alt="Broadway Village"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Broadway</h3>
                <p style={styles.activityDistance}>20 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  Often called the "Jewel of the Cotswolds," Broadway features a wide main street lined with horse chestnut trees 
                  and elegant limestone buildings. Don't miss Broadway Tower, a folly offering spectacular views across multiple counties.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg"
                alt="Bourton-on-the-Water"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Bourton-on-the-Water</h3>
                <p style={styles.activityDistance}>25 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  Known as the "Venice of the Cotswolds" for its series of elegant low bridges spanning the River Windrush. 
                  Perfect for a leisurely stroll followed by lunch at a riverside café.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5428.jpg"
                alt="Stow-on-the-Wold"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Stow-on-the-Wold</h3>
                <p style={styles.activityDistance}>15 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  A market town with a large historic market square surrounded by galleries, antique shops, and traditional pubs. 
                  The north door of St. Edward's Church, framed by ancient yew trees, is said to have inspired Tolkien's Doors of Durin.
                </p>
              </div>
            </div>
          </div>

          <p style={styles.paragraph}>
            These villages offer the perfect opportunity to experience authentic Cotswolds charm, with each having its own unique 
            character and attractions. From our <strong>luxury Cotswolds stay</strong>, you can easily visit several in a single day.
          </p>

          <h2 style={styles.heading}>Historical Sites and Cultural Attractions</h2>

          <p style={styles.paragraph}>
            Beyond its picturesque villages, the Cotswolds is home to many significant historical and cultural attractions that offer 
            fascinating insights into the region's heritage:
          </p>

          <div style={styles.activityGrid}>
            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5348.jpg"
                alt="Blenheim Palace"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Blenheim Palace</h3>
                <p style={styles.activityDistance}>30 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  A UNESCO World Heritage Site and the birthplace of Sir Winston Churchill. This magnificent baroque palace is set in 
                  over 2,000 acres of landscaped parkland designed by Capability Brown. Tour the opulent State Rooms and explore the 
                  formal gardens.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg"
                alt="Sudeley Castle"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Sudeley Castle</h3>
                <p style={styles.activityDistance}>25 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  With royal connections spanning a thousand years, Sudeley Castle is steeped in history. The castle is surrounded by 
                  ten award-winning gardens and is the final resting place of Katherine Parr, the last of Henry VIII's six wives.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5466.jpg"
                alt="Cotswold Motoring Museum"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Cotswold Motoring Museum</h3>
                <p style={styles.activityDistance}>25 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  Located in Bourton-on-the-Water, this charming museum houses a collection of vintage cars, motorcycles, and automobilia. 
                  It's also home to the children's TV character Brum, making it a hit with younger visitors.
                </p>
              </div>
            </div>
          </div>

          <h2 style={styles.heading}>Outdoor Activities and Natural Beauty</h2>

          <p style={styles.paragraph}>
            The Cotswolds' rolling hills, ancient woodlands, and meandering rivers provide the perfect backdrop for outdoor enthusiasts. 
            Here are some of the best ways to enjoy the region's natural beauty:
          </p>

          <div style={styles.activityGrid}>
            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143514_0652_D.jpg"
                alt="Cotswold Way"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Hiking the Cotswold Way</h3>
                <p style={styles.activityDistance}>Multiple access points near our estate</p>
                <p style={styles.activityDescription}>
                  This 102-mile national trail runs along the Cotswold escarpment, offering spectacular views across the Severn Vale. 
                  You don't need to tackle the entire route – there are many circular walks that incorporate sections of the path, suitable 
                  for all abilities.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5314.jpg"
                alt="Cycling Routes"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Cycling Through the Countryside</h3>
                <p style={styles.activityDistance}>Routes start from our estate</p>
                <p style={styles.activityDescription}>
                  The quiet country lanes and gentle hills make the Cotswolds perfect for cycling. We can recommend routes suitable for your 
                  group's abilities, from leisurely rides between villages to more challenging tours. Bicycle rentals can be arranged.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5423.jpg"
                alt="Westonbirt Arboretum"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Westonbirt Arboretum</h3>
                <p style={styles.activityDistance}>35 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  Home to 2,500 different species of trees from all over the world, Westonbirt is particularly spectacular in autumn when 
                  the maples turn fiery red and gold. The arboretum offers beautiful walking trails, including a treetop walkway.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.calloutBox}>
            <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px'}}>Estate Activities</h3>
            <p style={{...styles.paragraph, marginBottom: '15px'}}>
              Our <strong>luxury farmhouse in the Cotswolds</strong> offers plenty of on-site activities for days when you prefer to stay closer to home:
            </p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Tennis court with high-quality playing surface and equipment provided
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Extensive grounds perfect for morning yoga, outdoor games, or peaceful reading
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Wellness facilities including infrared sauna and hot tub for post-adventure relaxation
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Cold plunge pool for the brave – a refreshing experience with health benefits
              </li>
            </ul>
          </div>

          <h2 style={styles.heading}>Family-Friendly Attractions</h2>

          <p style={styles.paragraph}>
            The Cotswolds offers numerous attractions that appeal to visitors of all ages, making it an excellent destination for 
            family gatherings at our <strong>Cotswolds estate near Soho Farm House</strong>:
          </p>

          <div style={styles.activityGrid}>
            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5433.jpg"
                alt="Cotswold Wildlife Park"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Cotswold Wildlife Park</h3>
                <p style={styles.activityDistance}>40 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  Set in 160 acres of parkland around a Gothic manor house, this wildlife park is home to over 260 different animal species. 
                  Highlights include the giraffe walkway, rhino viewing platform, and Madagascar exhibit.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5492.jpg"
                alt="Adam Henson's Cotswold Farm Park"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Adam Henson's Cotswold Farm Park</h3>
                <p style={styles.activityDistance}>20 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  A wonderful day out for families, offering close encounters with farm animals, many of which are rare breeds. Children can 
                  bottle-feed lambs in season, and there are adventure playgrounds, tractor rides, and seasonal activities.
                </p>
              </div>
            </div>

            <div style={styles.activityCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5290.jpg"
                alt="Cotswold Water Park"
                style={styles.activityImage}
              />
              <div style={styles.activityContent}>
                <h3 style={styles.activityTitle}>Cotswold Water Park</h3>
                <p style={styles.activityDistance}>45 min drive from our estate</p>
                <p style={styles.activityDescription}>
                  Not a theme park but a vast area comprising over 150 lakes created by gravel extraction. The Water Park offers numerous 
                  water-based activities including swimming, sailing, kayaking, paddleboarding, and windsurfing, plus cycling, walking trails, 
                  and bird watching.
                </p>
              </div>
            </div>
          </div>

          <h2 style={styles.heading}>Local Food and Shopping Experiences</h2>

          <p style={styles.paragraph}>
            The Cotswolds is a food lover's paradise, with exceptional local produce, farmers' markets, and unique shopping experiences:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Daylesford Organic Farm Shop</strong> (15 min drive) – This award-winning farm shop sells organic produce, artisanal 
              cheeses, freshly baked bread, and prepared foods. The on-site café is perfect for breakfast or lunch.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Burford Garden Company</strong> (30 min drive) – Much more than a garden center, this is a lifestyle emporium 
              featuring plants, furniture, clothing, gifts, and a wonderful café.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Stow-on-the-Wold Farmers' Market</strong> (15 min drive) – Held on the second Thursday of each month, this market 
              brings together local producers offering everything from vegetables to artisanal spirits.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Chipping Campden High Street</strong> (25 min drive) – One of the most elegant high streets in the Cotswolds, with 
              independent shops, galleries, and craft workshops housed in historic buildings.
            </li>
          </ul>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5372.jpg"
            alt="Cotswolds shopping experience"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Special Interest Activities</h2>

          <p style={styles.paragraph}>
            Whatever your interests, the Cotswolds offers specialized activities to enhance your stay at our 
            <strong>luxury villa in the Cotswolds</strong>:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>For Art Lovers</strong> – Visit Compton Verney Art Gallery, The Wilson in Cheltenham, or explore the numerous 
              small galleries in towns like Broadway and Stow-on-the-Wold.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>For History Buffs</strong> – Beyond the major historical attractions, discover Roman remains at Chedworth Roman Villa, 
              Neolithic long barrows like Belas Knap, or the medieval tithe barn at Stanway.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>For Garden Enthusiasts</strong> – Visit Hidcote Manor Garden, Kiftsgate Court Gardens, or Sezincote House with its 
              Indian-inspired architecture and landscape.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>For Foodies</strong> – Take a cooking class at Daylesford, join a brewery tour at Hook Norton Brewery, or book a 
              tasting at Cotswolds Distillery.
            </li>
          </ul>

          <h2 style={styles.heading}>Soho Farm House and Surrounding Area</h2>

          <p style={styles.paragraph}>
            Our <strong>Cotswolds estate near Soho Farm House</strong> is perfectly positioned to enjoy this exclusive members' club if you 
            or someone in your group has membership:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Soho Farm House</strong> (10 min drive) – Members and their guests can enjoy the restaurant, spa, cinema, indoor and 
              outdoor pools, tennis courts, and various activities like horse riding.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Great Tew</strong> – The charming village near Soho Farm House features the excellent Falkland Arms pub with its 
              flagstone floors, low beams, and traditional atmosphere.
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Chipping Norton</strong> – The nearest market town offers practical amenities like supermarkets as well as independent 
              shops, cafés, and the wonderful Theatre Chipping Norton.
            </li>
          </ul>

          <h2 style={styles.heading}>Planning Your Activities</h2>

          <p style={styles.paragraph}>
            To make the most of the many activities and places to visit near our <strong>luxury Cotswolds property</strong>, we recommend:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Balance your itinerary</strong> – Mix more active days with relaxed ones enjoying the estate
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Check opening times</strong> – Many attractions have seasonal hours or require advance booking
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Consider the weather</strong> – Have indoor options ready for rainy days
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Ask for our recommendations</strong> – We're happy to suggest activities based on your group's interests and the time of year
            </li>
          </ul>

          <p style={styles.paragraph}>
            With its diverse range of activities and attractions, the Cotswolds offers something for everyone. Our 
            <strong>luxury Cotswolds stay</strong> provides the perfect base from which to explore this magical region, with the 
            comfort and amenities you need to relax and recharge after each day's adventures.
          </p>

          <a href={AIRBNB_LINK} style={styles.bookButton} target="_blank" rel="noopener noreferrer">
            Book Your Cotswolds Adventure
          </a>

          <p style={styles.paragraph}>
            We look forward to welcoming you to our <strong>Cotswolds estate</strong> and helping you create unforgettable memories in 
            this beautiful part of England.
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