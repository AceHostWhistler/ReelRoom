import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '../../components/MobileMenu';

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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/224A5313.jpg')",
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
  seasonCard: {
    backgroundColor: colors.white,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    marginBottom: '30px',
  },
  seasonHeader: {
    padding: '20px',
    backgroundColor: colors.darkGreen,
    color: colors.white,
  },
  seasonContent: {
    padding: '25px',
  },
};

export default function SeasonalActivitiesBlog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Seasonal Activities in the Cotswolds | Luxury Retreat</title>
        <meta name="description" content="Discover the best seasonal activities in the Cotswolds, from spring blooms and summer festivals to autumn colors and winter charm near our luxury accommodation." />
        <meta name="keywords" content="seasonal activities Cotswolds, Cotswolds luxury stays, estates near Soho Farm House, luxury villas Cotswolds, Cotswolds things to do" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="preconnect" href="https://cotswoldsvacation.com" />
        <link rel="dns-prefetch" href="https://cotswoldsvacation.com" />
      </Head>

      <header style={{
        ...styles.header,
        zIndex: 99999 // Extremely high z-index for the header, but less than mobile menu
      }}>
        <MobileMenu activePage="blog" />
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Seasonal Activities in the Cotswolds</h1>
          <p style={styles.heroSubtitle}>
            Experience the magic of the Cotswolds throughout the year from our luxury estate
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <Link href="/cotswolds-blog" style={styles.backToBlogs}>
          ← Back to Blogs
        </Link>
        
        <article style={styles.blogContent}>
          <div style={styles.metaInfo}>
            <span>June 15, 2025</span>
            <span>5 min read</span>
          </div>
          
          <p style={styles.paragraph}>
            The Cotswolds is a destination that transforms with each passing season, offering visitors a different but equally enchanting 
            experience throughout the year. When staying at our <strong>luxury Cotswolds estate near Soho Farm House</strong>, you'll have 
            the perfect base to explore these seasonal delights, returning each evening to comfort and luxury regardless of the weather outside.
          </p>

          <p style={styles.paragraph}>
            In this guide, we'll walk you through the highlights of each season in the Cotswolds, helping you plan the perfect stay 
            whatever time of year you choose to visit our <strong>luxury villa in the Cotswolds</strong>.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602091050_0536_D.jpg"
            alt="Aerial view of Cotswolds countryside"
            style={styles.blogImage}
          />

          <div style={styles.seasonCard}>
            <div style={styles.seasonHeader}>
              <h2 style={{margin: 0, fontSize: '1.8em'}}>Spring in the Cotswolds (March - May)</h2>
            </div>
            <div style={styles.seasonContent}>
              <p style={styles.paragraph}>
                Spring transforms the Cotswolds into a canvas of vibrant colors and new life. It's the perfect time to explore 
                the countryside as temperatures begin to rise, and the landscape awakens from its winter slumber.
              </p>
              
              <h3 style={{fontSize: '1.4em', color: colors.darkGreen, marginBottom: '15px'}}>Highlights:</h3>
              
              <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Blossoming Gardens</strong> – Visit Hidcote Manor Garden or Kiftsgate Court Gardens when they burst into bloom
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Lambing Season</strong> – Many local farms welcome visitors during this special time
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Cheltenham Festival</strong> – Experience world-class horse racing in March
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Bluebell Woods</strong> – Walk through magical carpets of bluebells in Foxholes Nature Reserve
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Easter Celebrations</strong> – Participate in egg hunts at historic properties like Sudeley Castle
                </li>
              </ul>
              
              <p style={styles.paragraph}>
                Spring is perfect for exploring the many walking trails near our <strong>luxury farmhouse in the Cotswolds</strong>. 
                The moderate temperatures and longer days make outdoor activities particularly enjoyable, while the crowds that 
                characterize summer are still months away.
              </p>
              
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg"
                alt="Spring flowers in the Cotswolds"
                style={styles.blogImage}
              />
            </div>
          </div>

          <div style={styles.seasonCard}>
            <div style={{...styles.seasonHeader, backgroundColor: colors.lightGreen}}>
              <h2 style={{margin: 0, fontSize: '1.8em'}}>Summer in the Cotswolds (June - August)</h2>
            </div>
            <div style={styles.seasonContent}>
              <p style={styles.paragraph}>
                Summer brings long, warm days perfect for exploring the charming villages and rolling countryside. 
                The region comes alive with festivals, outdoor dining, and activities that showcase the best of 
                English summer traditions.
              </p>
              
              <h3 style={{fontSize: '1.4em', color: colors.darkGreen, marginBottom: '15px'}}>Highlights:</h3>
              
              <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Village Fêtes</strong> – Experience quintessential English summer events with games, food, and community spirit
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Outdoor Swimming</strong> – Cool off at the Cotswold Water Park with its many lakes and water activities
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Lavender Fields</strong> – Visit Cotswold Lavender Farm in full bloom (usually July)
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Outdoor Theatre</strong> – Enjoy Shakespeare performances in historic settings
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Cotswold Show</strong> – Attend this major rural event showcasing country pursuits
                </li>
              </ul>
              
              <p style={styles.paragraph}>
                Our <strong>luxury Cotswolds estate</strong> is particularly delightful in summer. The private tennis court gets plenty of use, 
                and outdoor dining on the terrace becomes a daily pleasure. The cold plunge pool offers welcome relief on particularly hot days, 
                and the extensive grounds provide plenty of space for outdoor games and relaxation.
              </p>
              
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg"
                alt="Summer at the Cotswolds Estate"
                style={styles.blogImage}
              />
            </div>
          </div>

          <div style={styles.seasonCard}>
            <div style={{...styles.seasonHeader, backgroundColor: '#b35900'}}>
              <h2 style={{margin: 0, fontSize: '1.8em'}}>Autumn in the Cotswolds (September - November)</h2>
            </div>
            <div style={styles.seasonContent}>
              <p style={styles.paragraph}>
                Many consider autumn the most spectacular season in the Cotswolds. The honey-colored stone villages are complemented 
                perfectly by the russet and gold tones of autumn foliage, creating picture-perfect scenes at every turn.
              </p>
              
              <h3 style={{fontSize: '1.4em', color: colors.darkGreen, marginBottom: '15px'}}>Highlights:</h3>
              
              <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Autumn Colors</strong> – Spectacular woodland walks in Westonbirt Arboretum or Batsford Arboretum
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Harvest Festivals</strong> – Join traditional celebrations in local villages
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Food Festivals</strong> – Sample local produce at events like the Stroud Farmers' Market
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Cotswold Foraging</strong> – Learn to identify and gather wild mushrooms, berries, and nuts
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Cozy Pub Experiences</strong> – Enjoy hearty local food and real ales by open fires
                </li>
              </ul>
              
              <p style={styles.paragraph}>
                Autumn at our <strong>Cotswolds estate near Soho Farm House</strong> is particularly magical. The cozy living rooms with their 
                comfortable furnishings provide the perfect setting for relaxing after a day of exploration. The Devol designer kitchen comes 
                into its own as guests prepare hearty meals with local seasonal produce, perhaps gathered during a day of foraging.
              </p>
              
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg"
                alt="Autumn colors in Cotswolds living room"
                style={styles.blogImage}
              />
            </div>
          </div>

          <div style={styles.seasonCard}>
            <div style={{...styles.seasonHeader, backgroundColor: '#4d4d4d'}}>
              <h2 style={{margin: 0, fontSize: '1.8em'}}>Winter in the Cotswolds (December - February)</h2>
            </div>
            <div style={styles.seasonContent}>
              <p style={styles.paragraph}>
                Winter brings a magical quality to the Cotswolds, when honey-stone villages might be dusted with snow, 
                and cozy pubs welcome visitors with crackling fires and warm hospitality. It's a time of peaceful beauty 
                and festive cheer.
              </p>
              
              <h3 style={{fontSize: '1.4em', color: colors.darkGreen, marginBottom: '15px'}}>Highlights:</h3>
              
              <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Christmas Markets</strong> – Bath, Cheltenham, and local villages host festive markets
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Winter Walks</strong> – Crisp countryside strolls followed by warming pub lunches
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Festive Light Trails</strong> – Magical illuminated garden experiences at Sudeley Castle or Westonbirt
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Historic Houses Decorated</strong> – Visit stately homes adorned for Christmas celebrations
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listItemDot}></span>
                  <strong>Wassailing</strong> – Experience traditional apple orchard ceremonies in January
                </li>
              </ul>
              
              <p style={styles.paragraph}>
                Winter is perhaps when our <strong>luxury villa in the Cotswolds</strong> truly shines as a destination. The wellness facilities 
                become particularly appreciated – the infrared sauna and hot tub offering warmth and relaxation after winter adventures. 
                The property's spacious living areas provide plenty of room for indoor entertainment, while the well-equipped kitchen 
                is perfect for preparing festive feasts or warming winter meals.
              </p>
              
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg"
                alt="Cozy interior perfect for winter evenings"
                style={styles.blogImage}
              />
            </div>
          </div>

          <h2 style={styles.heading}>Year-Round Activities Near Our Estate</h2>

          <p style={styles.paragraph}>
            While certain activities shine in particular seasons, there are many experiences that can be enjoyed year-round when 
            staying at our <strong>luxury Cotswolds stay</strong>:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Village Exploration</strong> – The charm of Cotswold stone villages like Broadway, Stow-on-the-Wold, and Bourton-on-the-Water never fades
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Fine Dining</strong> – The region boasts excellent restaurants, from traditional pubs to Michelin-starred establishments
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Shopping</strong> – Discover artisan crafts, antiques, and local products in market towns throughout the year
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Historical Sites</strong> – Explore Roman villas, ancient churches, and stately homes whatever the weather
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Soho Farm House</strong> – Members and their guests can enjoy the facilities of this exclusive retreat in any season
            </li>
          </ul>

          <div style={styles.calloutBox}>
            <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px'}}>Estate Activities for All Seasons</h3>
            <p style={{marginBottom: '15px'}}>
              Our <strong>luxury farmhouse in the Cotswolds</strong> is designed to provide enjoyment regardless of season or weather:
            </p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Spring/Summer</strong> – Tennis court, outdoor dining, cold plunge pool, garden games
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Autumn/Winter</strong> – Cozy living rooms, infrared sauna, hot tub, well-equipped kitchen for comfort food
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                <strong>Year-round</strong> – Eight luxurious bedrooms, multiple entertainment spaces, offices for remote work if needed
              </li>
            </ul>
          </div>

          <h2 style={styles.heading}>Planning Your Seasonal Visit</h2>

          <p style={styles.paragraph}>
            When planning your stay at our <strong>Cotswolds estate near Soho Farm House</strong>, consider these practical tips:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Book well in advance</strong> for summer stays and festive periods, which are particularly popular
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Consider shoulder seasons</strong> (May, June, September) for good weather with fewer crowds
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Pack layers</strong> as Cotswold weather can be changeable in any season
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Check local event calendars</strong> to coincide your stay with festivals or special events
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Ask us for seasonal recommendations</strong> – we're happy to suggest activities specific to your visit dates
            </li>
          </ul>

          <p style={styles.paragraph}>
            One of the joys of our <strong>luxury Cotswolds property</strong> is that it offers a wonderful experience whatever 
            the season. The changing landscape provides a different backdrop throughout the year, but the comfort, luxury, 
            and warm welcome of our estate remains constant.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602091050_0536_D.jpg"
            alt="Relaxing at the Cotswolds Estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Ready to Experience the Cotswolds in Every Season?</h2>

          <p style={styles.paragraph}>
            Many of our guests return to experience our <strong>luxury villa in the Cotswolds</strong> during different seasons, 
            discovering the unique charms each time of year brings. Whether you're planning a summer family gathering, an autumn 
            weekend of relaxation, a festive winter celebration, or a spring refresh, our estate offers the perfect setting.
          </p>

          <p style={styles.paragraph}>
            With eight bedrooms accommodating up to 16 guests, comprehensive amenities for all weather conditions, and a prime 
            location for exploring the Cotswolds' seasonal highlights, our property is the ideal year-round destination.
          </p>

          <a href={AIRBNB_LINK} style={styles.bookButton} target="_blank" rel="noopener noreferrer">
            Book Your Seasonal Cotswolds Experience
          </a>

          <p style={styles.paragraph}>
            We look forward to welcoming you to our <strong>Cotswolds estate</strong> and helping you discover the seasonal magic of this 
            beautiful region. Whether bathed in spring sunshine, summer warmth, autumn gold, or winter frost, the Cotswolds 
            always offers a warm welcome and unforgettable experiences.
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