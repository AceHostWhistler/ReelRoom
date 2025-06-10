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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090500_0519_D.jpg')",
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
  timelineContainer: {
    position: 'relative' as 'relative',
    margin: '50px 0',
    padding: '0 20px',
  },
  timelineLine: {
    position: 'absolute' as 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '4px',
    backgroundColor: colors.lightGreen,
    transform: 'translateX(-50%)',
  },
  timelineItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '30px',
    position: 'relative' as 'relative',
    margin: '10px 0',
    width: '50%',
  },
  timelineItemRight: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    paddingRight: 0,
    paddingLeft: '30px',
    left: '50%',
  },
  timelineContent: {
    backgroundColor: colors.white,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    maxWidth: '90%',
  },
  timelineDot: {
    position: 'absolute' as 'absolute',
    top: '15px',
    right: '-13px',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundColor: colors.darkGreen,
    border: `4px solid ${colors.white}`,
    zIndex: 1,
  },
  timelineDotRight: {
    right: 'auto',
    left: '-13px',
  },
  timelineDate: {
    color: colors.darkGreen,
    fontWeight: 600,
    marginBottom: '8px',
    fontSize: '1.2em',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    margin: '40px 0',
  },
  featureCard: {
    backgroundColor: colors.white,
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  featureImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover' as const,
  },
  featureContent: {
    padding: '20px',
  },
  featureTitle: {
    fontSize: '1.3em',
    color: colors.darkGreen,
    marginBottom: '10px',
    fontWeight: 600,
  },
};

export default function CotswoldsArchitectureBlog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>A History of Cotswolds Architecture | Luxury Retreat</title>
        <meta name="description" content="Explore the rich history of Cotswolds architecture from medieval to modern times, including the famous honey-colored stone buildings that define this beautiful region." />
        <meta name="keywords" content="Cotswolds architecture, honey-colored stone, luxury Cotswolds stays, traditional Cotswolds buildings, Cotswolds history" />
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
          <h1 style={styles.heroTitle}>A History of Cotswolds Architecture</h1>
          <p style={styles.heroSubtitle}>
            Exploring the timeless beauty and evolution of the Cotswolds' distinctive architectural heritage
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <Link href="/cotswolds-blog" style={styles.backToBlogs}>
          ← Back to Blogs
        </Link>
        
        <article style={styles.blogContent}>
          <div style={styles.metaInfo}>
            <span>May 25, 2025</span>
            <span>6 min read</span>
          </div>
          
          <p style={styles.paragraph}>
            The Cotswolds is renowned worldwide for its distinctive architectural style, characterized by the famous honey-colored 
            limestone buildings that seem to glow in the sunlight. When staying at our <strong>luxury Cotswolds estate near Soho Farm House</strong>, 
            you'll be surrounded by centuries of architectural history that tells the story of this remarkable region.
          </p>

          <p style={styles.paragraph}>
            In this guide, we'll explore how Cotswolds architecture has evolved over the centuries, from medieval wool churches to 
            contemporary luxury properties like our own <strong>Cotswolds villa</strong>. Understanding this rich heritage adds another 
            dimension to your stay in this Area of Outstanding Natural Beauty.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20250602090653_0526_D.jpg"
            alt="Aerial view of Cotswolds architecture"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>The Foundation: Cotswold Stone</h2>
          
          <p style={styles.paragraph}>
            At the heart of Cotswolds architecture is the region's distinctive building material: Cotswold stone. This limestone was 
            formed during the Jurassic period (approximately 200-145 million years ago) when the area was beneath a warm, shallow sea. 
            The stone contains tiny fossilized sea creatures that give it a unique texture and appearance.
          </p>

          <p style={styles.paragraph}>
            Cotswold stone is characterized by its warm, honey-colored hue, which varies slightly throughout the region:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Northern Cotswolds</strong> – Honey-gold tones predominate
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Central and Eastern Cotswolds</strong> – Lighter cream and golden hues
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Southern Cotswolds</strong> – Deeper amber and bronze shades
            </li>
          </ul>

          <p style={styles.paragraph}>
            This locally quarried limestone has been the primary building material in the region for over 800 years, creating the 
            distinctive visual unity that makes Cotswolds architecture so immediately recognizable.
          </p>

          <div style={styles.timelineContainer}>
            <div style={styles.timelineLine}></div>
            
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Medieval Period (12th-15th Century)</div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  The medieval wool trade brought immense prosperity to the Cotswolds, resulting in the construction of magnificent "wool churches" 
                  with soaring towers. Wealthy wool merchants built grand manor houses, while workers lived in simple stone cottages with steep roofs 
                  typically made of stone tiles or thatch.
                </p>
              </div>
            </div>
            
            <div style={{...styles.timelineItem, ...styles.timelineItemRight}}>
              <div style={{...styles.timelineDot, ...styles.timelineDotRight}}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Tudor and Elizabethan (16th Century)</div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Tudor influence brought more elaborate decoration, including ornate stone mullioned windows and decorative gables. 
                  Buildings became more symmetrical, with a growing emphasis on comfort for the wealthy. Many fine examples of 
                  Tudor manor houses remain throughout the Cotswolds today.
                </p>
              </div>
            </div>
            
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Stuart and Georgian (17th-18th Century)</div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  As classical influences spread through England, the Cotswolds saw an influx of elegant Georgian architecture 
                  with strict symmetry, sash windows, and refined proportions. Many market towns were transformed with fashionable 
                  townhouses and civic buildings featuring classical elements like columns and pediments.
                </p>
              </div>
            </div>
            
            <div style={{...styles.timelineItem, ...styles.timelineItemRight}}>
              <div style={{...styles.timelineDot, ...styles.timelineDotRight}}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Victorian Era (19th Century)</div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  The Victorian period saw a revival of interest in vernacular styles, with architects drawing inspiration from 
                  medieval Cotswold buildings. Gothic Revival churches and schools were built, while railway stations and industrial 
                  buildings introduced new forms while still using traditional stone.
                </p>
              </div>
            </div>
            
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Arts and Crafts Movement (Late 19th-Early 20th Century)</div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  This influential movement found a spiritual home in the Cotswolds. Architects like Ernest Gimson and the Barnsley 
                  brothers settled in the area, creating buildings that celebrated traditional craftsmanship while incorporating modern 
                  comforts. The movement's emphasis on honest materials and local building traditions revitalized appreciation for 
                  Cotswolds vernacular architecture.
                </p>
              </div>
            </div>
            
            <div style={{...styles.timelineItem, ...styles.timelineItemRight}}>
              <div style={{...styles.timelineDot, ...styles.timelineDotRight}}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Contemporary Era (Late 20th Century-Present)</div>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Modern Cotswolds architecture often blends traditional forms and materials with contemporary design elements. 
                  Strict conservation guidelines preserve the area's character while allowing for sympathetic innovations. 
                  Luxury properties like our <strong>Cotswolds estate</strong> harmonize traditional stone exteriors with modern interior 
                  comfort and design.
                </p>
              </div>
            </div>
          </div>

          <h2 style={styles.heading}>Key Features of Traditional Cotswold Architecture</h2>

          <p style={styles.paragraph}>
            Despite variations across time periods, several features remain consistent throughout traditional Cotswolds buildings:
          </p>

          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5450.jpg"
                alt="Steep Roof Example"
                style={styles.featureImage}
              />
              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>Steep Roofs</h3>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Traditionally covered with locally quarried limestone tiles, these steep roofs (often pitched at 45-55 degrees) 
                  were designed to shed rain and snow quickly. The weight of the stone required substantial timber support structures.
                </p>
              </div>
            </div>

            <div style={styles.featureCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5461.jpg"
                alt="Mullioned Windows"
                style={styles.featureImage}
              />
              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>Mullioned Windows</h3>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Stone-framed windows divided by vertical stone bars (mullions) are a distinctive feature. Earlier examples were small 
                  due to the high cost of glass, while later windows became larger as glass became more affordable.
                </p>
              </div>
            </div>

            <div style={styles.featureCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5372.jpg"
                alt="Gabled Dormers"
                style={styles.featureImage}
              />
              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>Gabled Dormers</h3>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Dormer windows set into the roof allowed light into upper floors and attic spaces. These were often topped with miniature 
                  gables that echo the main roof design, adding architectural interest to the roofline.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5428.jpg"
                alt="Entry Porch"
                style={styles.featureImage}
              />
              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>Porches and Entry Features</h3>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Many Cotswold buildings feature distinctive entry porches, sometimes with elaborate carving or decorative stonework. 
                  In grander houses, these might include classical columns or pediments, while simpler cottages have more rustic stone 
                  hoods over doorways.
                </p>
              </div>
            </div>

            <div style={styles.featureCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5314.jpg"
                alt="Stone Walls"
                style={styles.featureImage}
              />
              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>Coursed Rubble Walls</h3>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Many buildings were constructed of roughly shaped stones laid in uneven courses (horizontal layers). This method, known 
                  as coursed rubble, creates the distinctive textured appearance of many Cotswold buildings, with smaller stones filling 
                  gaps between larger pieces.
                </p>
              </div>
            </div>

            <div style={styles.featureCard}>
              <img
                src="/photos/listings/Cotswolds Luxury Retreat/224A5410.jpg"
                alt="Interior Features"
                style={styles.featureImage}
              />
              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>Interior Features</h3>
                <p style={{...styles.paragraph, marginBottom: 0}}>
                  Traditional interiors featured exposed stone walls, timber beams, and large fireplaces. Flagstone floors were common on 
                  ground levels, with wooden floors above. Modern renovations often preserve these features while adding contemporary comforts.
                </p>
              </div>
            </div>
          </div>

          <h2 style={styles.heading}>Notable Architectural Sites Near Our Estate</h2>

          <p style={styles.paragraph}>
            While staying at our <strong>luxury farmhouse in the Cotswolds</strong>, you'll be ideally positioned to explore some of the 
            region's most remarkable architectural treasures:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>St. Mary's Church, Chipping Norton</strong> – An impressive example of a "wool church" with a magnificent 
              15th-century tower and beautiful Gothic architecture
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Chastleton House</strong> – A perfectly preserved Jacobean country house that has remained largely unchanged 
              for 400 years, offering a fascinating glimpse into early 17th-century domestic architecture
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Broadway</strong> – A village showcasing the evolution of Cotswold architecture, with buildings spanning from 
              the medieval period to the Arts and Crafts movement
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Snowshill Manor</strong> – A traditional Cotswold manor house with Arts and Crafts gardens, demonstrating the 
              beauty of vernacular architecture
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Daylesford Organic Farm</strong> – A contemporary example of how traditional Cotswold architectural forms 
              have been adapted for modern commercial and agricultural use
            </li>
          </ul>

          <div style={styles.calloutBox}>
            <h3 style={{fontSize: '1.3em', color: colors.darkGreen, marginBottom: '15px'}}>Experience Cotswolds Architecture at Our Estate</h3>
            <p style={{...styles.paragraph, marginBottom: '15px'}}>
              Our <strong>luxury Cotswolds stay</strong> itself offers a wonderful opportunity to experience the evolution of local architecture. 
              The property features:
            </p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Traditional Cotswold stone exterior that harmonizes with the surrounding landscape
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Historic structural elements preserved and showcased alongside contemporary design
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Modern renovations that respect traditional forms while providing luxury amenities
              </li>
              <li style={styles.listItem}>
                <span style={styles.listItemDot}></span>
                Large windows that frame views of the landscape while drawing inspiration from traditional mullioned designs
              </li>
            </ul>
          </div>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5313.jpg"
            alt="Cotswolds Estate exterior"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>The Living Tradition: Cotswolds Architecture Today</h2>

          <p style={styles.paragraph}>
            Cotswolds architecture continues to evolve while maintaining its distinctive character. Modern architects working in the 
            region must navigate the balance between preservation and innovation:
          </p>

          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px 0'}}>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Conservation Areas</strong> – Most Cotswold villages and towns are designated conservation areas with strict 
              guidelines for new construction and renovation
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Sustainable Adaptation</strong> – Historic buildings are being thoughtfully adapted with eco-friendly technologies 
              like ground-source heat pumps and improved insulation
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Contemporary Interpretations</strong> – Some new buildings reinterpret traditional forms with modern materials 
              and design elements while respecting the overall character of the area
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemDot}></span>
              <strong>Luxury Market</strong> – Properties like our <strong>Cotswolds estate near Soho Farm House</strong> represent 
              the high-end evolution of local architecture, where historic charm meets contemporary luxury
            </li>
          </ul>

          <p style={styles.paragraph}>
            What makes Cotswolds architecture truly special is its sense of continuity. Despite spanning over eight centuries, the 
            buildings throughout the region share a visual harmony thanks to consistent materials and respect for traditional forms. 
            This creates the distinctive sense of place that makes the Cotswolds so beloved by visitors from around the world.
          </p>

          <h2 style={styles.heading}>Experience Architectural History in Comfort</h2>

          <p style={styles.paragraph}>
            Staying at our <strong>luxury villa in the Cotswolds</strong> offers you the perfect opportunity to immerse yourself in 
            the region's architectural heritage while enjoying all modern comforts. From our property, you can easily explore the 
            surrounding villages and their architectural treasures, returning each evening to a home that itself represents the 
            thoughtful evolution of Cotswolds building traditions.
          </p>

          <p style={styles.paragraph}>
            Whether you're an architecture enthusiast or simply appreciate beautiful surroundings, the Cotswolds offers an unparalleled 
            opportunity to experience how buildings can harmonize with landscape and history while meeting contemporary needs. Our 
            <strong>Cotswolds estate</strong> is proud to be part of this living architectural tradition.
          </p>

          <a href={AIRBNB_LINK} style={styles.bookButton} target="_blank" rel="noopener noreferrer">
            Book Your Architectural Journey in the Cotswolds
          </a>

          <p style={styles.paragraph}>
            We look forward to welcoming you to our property and helping you discover the architectural wonders of this remarkable region.
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