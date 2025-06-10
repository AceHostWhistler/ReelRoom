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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090532_0522_D.jpg')",
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
};

export default function FamilyGatheringBlog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Planning the Perfect Family Gathering in a Luxury Cotswolds Property | Cotswolds Estate</title>
        <meta name="description" content="Discover how to plan an unforgettable family reunion at our luxury Cotswolds estate near Soho Farm House. Tips for organizing activities, meals, and creating lasting memories in our spacious vacation rental." />
        <meta name="keywords" content="luxury Cotswolds stays, family gathering Cotswolds, luxury homes near Soho Farm House Cotswolds, estates near Soho Farm House, luxury farmhouse Cotswolds" />
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
          <h1 style={styles.heroTitle}>Planning the Perfect Family Gathering in a Luxury Cotswolds Property</h1>
          <p style={styles.heroSubtitle}>
            Create lasting memories with your loved ones in our spacious estate near Soho Farm House
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <Link href="/cotswolds-blog" style={styles.backToBlogs}>
          ← Back to Blogs
        </Link>
        
        <article style={styles.blogContent}>
          <div style={styles.metaInfo}>
            <span>May 15, 2025</span>
            <span>4 min read</span>
          </div>
          
          <p style={styles.paragraph}>
            Family gatherings are special occasions that bring loved ones together to create lasting memories. When planning such an event, 
            choosing the right venue is crucial – and a <strong>luxury Cotswolds property</strong> provides the perfect backdrop for an unforgettable reunion. 
            With its stunning countryside views, spacious accommodations, and proximity to charming villages, our <strong>Cotswolds Estate near Soho Farm House</strong> 
            offers everything you need for the perfect family gathering.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg"
            alt="Cotswolds Estate exterior view"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Why Choose a Luxury Cotswolds Estate for Your Family Gathering?</h2>
          
          <p style={styles.paragraph}>
            When bringing multiple generations together, space and comfort are essential. Our <strong>luxury farmhouse in the Cotswolds</strong> offers 
            both in abundance. With eight beautifully appointed bedrooms spread across the main house and annex, we can comfortably accommodate 
            up to 16 guests. This means everyone from grandparents to the youngest family members can have their own space while still 
            enjoying quality time together.
          </p>

          <p style={styles.paragraph}>
            <strong>Luxury homes near Soho Farm House</strong> like ours provide the perfect balance of privacy and togetherness. 
            The multiple living areas allow different groups to engage in various activities simultaneously – whether it's the 
            adults catching up over wine in one of the cozy living rooms or teenagers enjoying a movie night in another.
          </p>

          <h2 style={styles.heading}>Planning Activities for Everyone</h2>

          <p style={styles.paragraph}>
            One of the challenges of family gatherings is finding activities that appeal to all age groups. Fortunately, 
            <strong>estates near Soho Farm House</strong> offer a wealth of options both on and off the property.
          </p>

          <div style={styles.calloutBox}>
            <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px'}}>On-Property Activities</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Tennis tournaments</strong> on our private court – create a family championship
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Wellness retreat</strong> – enjoy our sauna, hot tub, and cold plunge pool
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Outdoor games</strong> – bocce ball and horseshoes for friendly competition
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Cooking together</strong> in our designer kitchen with iconic AGA oven
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Evening gatherings</strong> around the outdoor firepit with stargazing
              </li>
            </ul>
          </div>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5472.jpg"
            alt="Luxury bedroom in Cotswolds Estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Creating a Memorable Dining Experience</h2>

          <p style={styles.paragraph}>
            Food often becomes the centerpiece of family gatherings, and our <strong>luxury villa in the Cotswolds</strong> provides 
            the perfect setting for memorable meals. The spacious designer kitchen is a chef's dream, featuring an iconic AGA oven 
            and ample counter space for multiple cooks to work simultaneously.
          </p>

          <p style={styles.paragraph}>
            Consider these dining arrangements to make mealtimes special:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Host a formal dinner in our elegant dining area for a special celebration night
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Arrange outdoor meals on the terrace with stunning countryside views (weather permitting)
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Plan a cooking competition where different family groups prepare courses
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Organize a traditional English afternoon tea with scones, clotted cream, and jam
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Book a local chef for a special meal where everyone can relax and enjoy
            </li>
          </ul>

          <p style={styles.paragraph}>
            For larger gatherings, you might consider hiring local catering services. We're happy to recommend trusted 
            providers who can create bespoke menus featuring local Cotswolds produce.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg"
            alt="Dining area in Cotswolds Estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Exploring the Cotswolds Together</h2>

          <p style={styles.paragraph}>
            While the estate offers plenty of entertainment, exploring the surrounding area adds another dimension to your family gathering. 
            Our <strong>luxury Cotswolds stay</strong> is ideally located near several charming villages and attractions:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Visit nearby Soho Farm House for a special lunch or spa day (members and guests)
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Explore picturesque villages like Stow-on-the-Wold and Bourton-on-the-Water
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Take family walks along the numerous countryside trails
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Arrange a group visit to Blenheim Palace or Sudeley Castle
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              Enjoy a guided food or brewery tour in the region
            </li>
          </ul>

          <h2 style={styles.heading}>Tips for a Smooth Family Gathering</h2>

          <p style={styles.paragraph}>
            Even with the perfect venue like our <strong>luxury Cotswolds property</strong>, organizing a multi-generational gathering 
            requires some planning. Here are our top tips:
          </p>

          <div style={styles.calloutBox}>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Plan ahead but stay flexible</strong> – create a loose schedule with plenty of free time
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Assign bedrooms in advance</strong> – our floor plan can help you decide who goes where
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Delegate responsibilities</strong> – share the planning load among family members
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Create a shared digital album</strong> – use a photo-sharing app for everyone to contribute memories
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Prepare for all weather</strong> – the Cotswolds can be unpredictable, so have indoor and outdoor options
              </li>
            </ul>
          </div>

          <p style={styles.paragraph}>
            Remember that the most memorable family gatherings balance structured activities with ample downtime for natural 
            connections to form. Our <strong>luxury home near Soho Farm House</strong> provides the perfect setting for both.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg"
            alt="Cozy living area for family gatherings"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Ready to Book Your Family Gathering?</h2>

          <p style={styles.paragraph}>
            Our <strong>Cotswolds Estate</strong> is a popular choice for family reunions and celebrations, with many groups 
            returning year after year. With eight bedrooms, multiple living spaces, and extensive grounds, it's the perfect 
            setting for groups of up to 16 people.
          </p>

          <p style={styles.paragraph}>
            We recommend booking well in advance, especially for summer dates or holiday periods. Our property manager 
            is available to discuss any special requirements you might have, from extra housekeeping services to local 
            activity recommendations.
          </p>

          <a href={AIRBNB_LINK} style={styles.bookButton} target="_blank" rel="noopener noreferrer">
            Book Your Family Gathering Now
          </a>

          <p style={styles.paragraph}>
            We hope this guide helps you plan an unforgettable family gathering in our <strong>luxury Cotswolds estate</strong>. 
            From the moment you arrive at our private driveway to the final farewell, our goal is to provide a setting where 
            precious family memories can be created and cherished for years to come.
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