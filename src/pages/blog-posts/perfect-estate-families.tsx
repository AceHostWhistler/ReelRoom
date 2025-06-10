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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/DJI_20250602091050_0536_D.jpg')",
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
  feature: {
    display: 'flex',
    marginBottom: '30px',
    backgroundColor: colors.white,
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  featureImage: {
    width: '40%',
    objectFit: 'cover' as const,
  },
  featureContent: {
    padding: '25px',
    width: '60%',
  },
  featureTitle: {
    fontSize: '1.4em',
    color: colors.darkGreen,
    marginBottom: '10px',
  },
  testimonial: {
    fontStyle: 'italic',
    borderLeft: `3px solid ${colors.lightGreen}`,
    paddingLeft: '20px',
    margin: '30px 0',
  },
};

export default function PerfectEstateFamiliesBlog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>The Perfect Cotswolds Estate for Large Families | Luxury Retreat</title>
        <meta name="description" content="Discover why our spacious Cotswolds estate is ideal for large family holidays. Eight luxury bedrooms, private amenities, and perfect location near Soho Farm House." />
        <meta name="keywords" content="luxury villas Cotswolds, estates near Soho Farm House, luxury Cotswolds stays, luxury farmhouse Cotswolds, large family accommodation Cotswolds" />
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
          <h1 style={styles.heroTitle}>The Perfect Cotswolds Estate for Large Families</h1>
          <p style={styles.heroSubtitle}>
            Experience luxury, space, and comfort in our eight-bedroom retreat near Soho Farm House
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <Link href="/cotswolds-blog" style={styles.backToBlogs}>
          ← Back to Blogs
        </Link>
        
        <article style={styles.blogContent}>
          <div style={styles.metaInfo}>
            <span>May 20, 2025</span>
            <span>5 min read</span>
          </div>
          
          <p style={styles.paragraph}>
            Finding the perfect accommodation for a large family holiday can be challenging. You need enough space for everyone, 
            plenty of entertainment options, and the right atmosphere to create precious memories. Our <strong>luxury Cotswolds estate</strong> 
            has been thoughtfully designed to cater specifically to large families, offering the ideal blend of togetherness and privacy 
            in one of England's most beautiful regions.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602091213_0541_D.jpg"
            alt="Aerial view of Cotswolds Estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Space for Everyone to Relax and Connect</h2>
          
          <p style={styles.paragraph}>
            With eight beautifully appointed bedrooms across the main house and annex, our <strong>luxury villa in the Cotswolds</strong> 
            comfortably accommodates up to 16 guests. The main house features six bedrooms ranging from an emperor king master suite 
            to a cozy single, while the annex offers two additional bedrooms with flexible configurations. This variety makes our 
            estate perfect for multi-generational family holidays, where grandparents, parents, and children of all ages can find 
            their own comfortable space.
          </p>

          <div style={styles.calloutBox}>
            <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px'}}>Bedroom Configuration</h3>
            <p style={{marginBottom: '15px'}}>Main House (6 bedrooms, 280m²):</p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Master Bedroom: Emperor King with ensuite spa bathroom
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Bedroom 2: Super King with ensuite bathroom
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Bedroom 3: Super King with shared bathroom access
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Bedroom 4: King with shared bathroom access
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Bedroom 5: Double with shared bathroom access
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Bedroom 6: Single with shared bathroom access (main floor, no stairs)
              </li>
            </ul>
            <p style={{marginTop: '15px', marginBottom: '15px'}}>Annex House (2 bedrooms, 40m²):</p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Bedroom 7: King with shared bathroom access
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Bedroom 8: Flexible (two singles or king) with shared bathroom access
              </li>
            </ul>
          </div>

          <p style={styles.paragraph}>
            Beyond the bedrooms, our <strong>luxury farmhouse in the Cotswolds</strong> offers multiple living areas where families 
            can gather or split off into smaller groups. The two cozy living rooms provide perfect spaces for different activities – 
            perhaps the adults enjoying conversation in one while the children watch a movie in the other. 
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5410.jpg"
            alt="Spacious bedroom perfect for families"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Family-Friendly Amenities for All Ages</h2>

          <p style={styles.paragraph}>
            What truly sets our property apart from other <strong>luxury homes near Soho Farm House</strong> is our comprehensive 
            range of amenities designed with families in mind. No matter what age groups are in your party, there's something for everyone:
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '30px', marginBottom: '30px'}}>
            <div style={{backgroundColor: colors.white, borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
              <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px', fontWeight: 600}}>For Active Family Members</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Private tennis court with new surface
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Extensive grounds for outdoor games
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Bocce ball and horseshoes equipment
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Nearby walking and cycling trails
                </li>
              </ul>
            </div>

            <div style={{backgroundColor: colors.white, borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
              <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px', fontWeight: 600}}>For Relaxation Seekers</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Infrared sauna for wellness benefits
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Private hot tub overlooking countryside
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Refreshing cold plunge pool
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Peaceful garden seating areas
                </li>
              </ul>
            </div>

            <div style={{backgroundColor: colors.white, borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
              <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px', fontWeight: 600}}>For Culinary Enthusiasts</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Designer kitchen with iconic AGA oven
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Two fridges for ample food storage
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Outdoor dining areas with countryside views
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  Annex kitchenette for early risers
                </li>
              </ul>
            </div>
          </div>

          <p style={styles.paragraph}>
            The annex provides an additional layer of flexibility that families particularly appreciate. With its own kitchenette 
            and bathroom, it's perfect for grandparents who might appreciate some quiet time, teenagers seeking independence, 
            or parents with young children who have different sleep schedules from the rest of the group.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5417.jpg"
            alt="Another bedroom in the estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Family-Friendly Location in the Cotswolds</h2>

          <p style={styles.paragraph}>
            Our <strong>estate near Soho Farm House</strong> is ideally situated to explore everything the Cotswolds has to offer. 
            The region is perfect for family holidays, with its combination of natural beauty, charming villages, and family-friendly attractions.
          </p>

          <p style={styles.paragraph}>
            Within easy driving distance, families can enjoy:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Cotswold Wildlife Park</strong> – a fantastic day out with animals from around the world
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Cotswold Water Park</strong> – offering water sports and activities for all ages
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Blenheim Palace</strong> – historic house with extensive grounds and adventure playground
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Soho Farm House</strong> – for members and their guests to enjoy dining and spa facilities
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Picturesque villages</strong> – including Stow-on-the-Wold, Bourton-on-the-Water, and Broadway
            </li>
          </ul>

          <p style={styles.paragraph}>
            For families who love outdoor activities, the Cotswolds offers endless opportunities for walking, cycling, 
            horse riding, and fishing – all within easy reach of our <strong>luxury Cotswolds stay</strong>.
          </p>

          <div style={styles.testimonial}>
            <p>"We've stayed in many luxury properties across the UK, but this Cotswolds estate truly stands out for family gatherings. 
            The space and layout are perfect for our extended family of 14, from grandparents to toddlers. The combination of communal 
            areas and private spaces means everyone can enjoy their holiday their way. We've already booked our third stay!"</p>
            <p style={{marginBottom: 0, fontStyle: 'normal', fontWeight: 500}}>— The Thompson Family, London</p>
          </div>

          <h2 style={styles.heading}>Practical Features for Family Stays</h2>

          <p style={styles.paragraph}>
            Beyond the luxury amenities, our <strong>Cotswolds farmhouse</strong> includes practical features that make family 
            stays more comfortable and convenient:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Brand-new washer/dryer</strong> – essential for family holidays, especially with children
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>High-speed internet throughout</strong> – keeping teenagers happy and allowing remote work if needed
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Ample parking</strong> – accommodating multiple vehicles for large family gatherings
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Ground floor bedroom</strong> – accessible option without stairs for those with mobility considerations
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Two office spaces</strong> – for those who need to balance work with family time
            </li>
          </ul>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5359.jpg"
            alt="Main floor bedroom - no stairs"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>The Value of Shared Family Experiences</h2>

          <p style={styles.paragraph}>
            In today's fast-paced world, the opportunity for extended families to spend quality time together becomes 
            increasingly precious. Our <strong>luxury villa in the Cotswolds</strong> provides the perfect setting for creating 
            those meaningful connections across generations.
          </p>

          <p style={styles.paragraph}>
            The spacious layout allows for the perfect balance between togetherness and personal space. Family members can 
            come together for meals in the dining area, game tournaments on the tennis court, or evenings around the firepit, 
            then retreat to their own comfortable spaces when desired.
          </p>

          <p style={styles.paragraph}>
            Many of our guests tell us that their stay at our <strong>Cotswolds estate</strong> has become an annual tradition – 
            a dedicated time for the whole family to reconnect away from the distractions of everyday life. We take pride in 
            providing the backdrop for these precious family memories.
          </p>

          <h2 style={styles.heading}>Book Your Family Stay</h2>

          <p style={styles.paragraph}>
            Our <strong>luxury Cotswolds property</strong> is available for bookings throughout the year, with many families 
            choosing to visit during school holidays, summer months, or for special celebration weekends. Due to high demand, 
            especially for summer and holiday periods, we recommend booking well in advance to secure your preferred dates.
          </p>

          <p style={styles.paragraph}>
            For large family groups, we offer a comprehensive welcome package and can arrange additional services such as:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Private chef experiences for special celebration meals
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Additional housekeeping during your stay
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Grocery delivery before your arrival
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Local activity and restaurant recommendations tailored to your family's interests
            </li>
          </ul>

          <a href={AIRBNB_LINK} style={styles.bookButton} target="_blank" rel="noopener noreferrer">
            Book Your Family Stay Today
          </a>

          <p style={styles.paragraph}>
            Experience the perfect blend of luxury, comfort, and practicality in our <strong>Cotswolds estate near Soho Farm House</strong>. 
            With space for up to 16 guests, comprehensive amenities for all ages, and a prime location in one of England's most 
            beautiful regions, it's the ideal setting for your next family gathering. We look forward to welcoming your family to 
            our special corner of the Cotswolds.
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