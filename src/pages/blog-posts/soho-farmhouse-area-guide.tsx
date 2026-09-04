import React from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';
import { AirbnbButton } from '../../components/AirbnbButton';
import { BlogSeoHead } from '../../components/BlogSeoHead';
import { getBlogSeo } from '../../config/blogSeo';
import { PROPERTY } from '../../config/property';

const seo = getBlogSeo('soho-farmhouse-area-guide');

const colors = {
  darkGreen: '#2c5e1a',
  offWhite: '#f5f5f7',
  lightGray: '#e0e0e0',
  darkGray: '#333333',
  white: '#ffffff',
};

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
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    width: '100%',
  },
  hero: {
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/DJI_20260722215623_0226_D.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: colors.white,
    textAlign: 'center' as const,
    padding: '80px 20px',
    position: 'relative' as const,
  },
  heroOverlay: {
    position: 'absolute' as const,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroContent: { position: 'relative' as const, zIndex: 2, maxWidth: '800px', margin: '0 auto' },
  heroTitle: {
    fontSize: '2.8em',
    fontWeight: 700,
    marginBottom: '0.3em',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.25em',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  main: { maxWidth: '900px', margin: '60px auto', padding: '0 20px' },
  blogContent: {
    backgroundColor: colors.white,
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  blogImage: { width: '100%', height: 'auto', borderRadius: '8px', margin: '30px 0' },
  heading: { fontSize: '1.9em', color: colors.darkGreen, marginBottom: '0.8em', marginTop: '1.5em' },
  paragraph: { fontSize: '1.1em', marginBottom: '1.2em', lineHeight: 1.8 },
  metaInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9em',
    marginBottom: '30px',
    borderBottom: `1px solid ${colors.lightGray}`,
    paddingBottom: '20px',
  },
  calloutBox: {
    backgroundColor: colors.offWhite,
    padding: '25px',
    borderRadius: '8px',
    borderLeft: `4px solid ${colors.darkGreen}`,
    margin: '30px 0',
  },
  backToBlogs: {
    display: 'inline-block',
    color: colors.darkGreen,
    marginTop: '30px',
    marginBottom: '20px',
    fontWeight: 500,
    textDecoration: 'none',
  },
  footer: { backgroundColor: colors.darkGreen, color: colors.white, padding: '60px 20px' },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',
  },
  footerColumn: { flex: '1 1 300px', margin: '20px' },
  footerHeading: { fontSize: '1.4em', marginBottom: '20px', fontWeight: 600 },
  footerText: { marginBottom: '15px', fontSize: '1em' },
  copyright: {
    marginTop: '40px',
    fontSize: '0.9em',
    textAlign: 'center' as const,
    width: '100%',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.2)',
  },
};

export default function SohoFarmhouseAreaGuideBlog() {
  return (
    <div style={styles.container}>
      <BlogSeoHead seo={seo} />

      <header style={{ ...styles.header, zIndex: 99999 }}>
        <MobileMenu activePage="blog" />
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{seo.h1}</h1>
          <p style={styles.heroSubtitle}>{seo.heroSubtitle}</p>
        </div>
      </section>

      <main style={styles.main}>
        <Link href="/cotswolds-blog" style={styles.backToBlogs}>← Back to Blogs</Link>

        <article style={styles.blogContent}>
          <div style={styles.metaInfo}>
            <span>{seo.publishedDisplay}</span>
            <span>{seo.readTime}</span>
          </div>

          <p style={styles.paragraph}>
            Soho Farmhouse put the north Cotswolds on the map for a certain kind of traveller: beautiful countryside,
            excellent food, and that slightly smug feeling of having found somewhere special. The catch? Membership.
            Not everyone has it — and honestly, not everyone needs it.
          </p>

          <p style={styles.paragraph}>
            Our <strong>luxury Cotswolds estate in {PROPERTY.location}</strong> sits just{' '}
            <strong>{PROPERTY.sohoFarmhouseDrive}</strong> from Soho Farmhouse, with a private{' '}
            <strong>{PROPERTY.sohoFarmhouseWalk}</strong> if you fancy arriving on foot like a local legend.
            You get the same rolling Oxfordshire views, the same village pubs, the same "how is this real?" sunsets —
            plus your own heated pool, tennis court and outdoor spa. No waiting list. No dress code at breakfast.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260722213403_0216_D.jpg"
            alt="Aerial view of Cotswolds estate near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Why this corner of the Cotswolds hits different</h2>

          <p style={styles.paragraph}>
            Sandford Saint Martin and the surrounding villages sit in that sweet spot: close enough to London for a
            weekend escape, far enough that phone signal becomes optional. Honey-coloured stone, proper pubs,
            footpaths that actually go somewhere — it is the Cotswolds at its most photogenic without the coach-tour crush.
          </p>

          <div style={styles.calloutBox}>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>Pro tip:</strong> Book a mid-week stay if you can. You'll have the lanes, the pool and the
              tennis court almost to yourself — and the light at golden hour is absurdly good for photos.
            </p>
          </div>

          <h2 style={styles.heading}>Daytime: walks, villages and very good excuses to stop for coffee</h2>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>The private trail walk to Soho Farmhouse</strong> — thirty minutes through fields and hedgerows.
              Perfect pre-lunch appetite builder.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Deddington &amp; surrounding villages</strong> — market-town charm, independent shops, and
              architecture that makes you Google "could we move here?"
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Daylesford Organic</strong> — twenty minutes by car. Treat it as a pilgrimage for cheese,
              flowers and dangerously good pastries.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Blenheim Palace</strong> — under forty minutes. Palatial grounds, history, and excellent
              "we're definitely coming back" energy.
            </li>
          </ul>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg"
            alt="Cotswolds stone estate exterior near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Evenings: pub culture without the Uber bill from London</h2>

          <p style={styles.paragraph}>
            The Cotswolds pub scene near Soho Farmhouse is quietly elite. Think roaring fires, local ales, and menus
            that have clearly met a chef who cares. The Wild Rabbit in Kingham, The Killingworth Castle near Woodstock,
            and The Falkland Arms in Great Tew are all within easy reach of our estate — stagger home optional if
            you've booked the annex for the designated sensible friend.
          </p>

          <h2 style={styles.heading}>Why stay on an estate instead?</h2>

          <p style={styles.paragraph}>
            Here is the honest pitch: membership clubs are brilliant if you're in every weekend. For a family reunion,
            a milestone birthday, or a "we all need to get out of London" weekend, a private{' '}
            <strong>8-bedroom Cotswolds rental</strong> often makes more sense. You get:
          </p>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>Heated pool, hot tub, sauna and cold plunge — on your schedule</li>
            <li style={{ marginBottom: '10px' }}>Private tennis court (no booking slot required)</li>
            <li style={{ marginBottom: '10px' }}>Room for up to {PROPERTY.maxGuests} guests across main house and annex</li>
            <li style={{ marginBottom: '10px' }}>Devol kitchen with AGA — for the group chef or the group Deliveroo recovery</li>
            <li style={{ marginBottom: '10px' }}>Two dogs welcome (small fee — declare on Airbnb)</li>
          </ul>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/Cotswolds cover pool 1.jpeg"
            alt="Heated outdoor pool at Cotswolds luxury rental near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Planning your stay</h2>

          <p style={styles.paragraph}>
            Rates from {PROPERTY.priceRange} with a {PROPERTY.minStay}. Peak weekends book early — especially around
            bank holidays and school breaks. If you're comparing a Soho Farmhouse visit with friends against one
            big house for the whole group, run the numbers. Spoiler: the estate often wins, and everyone gets a bed.
          </p>

          <div className="text-center my-8">
            <AirbnbButton variant="lg">Book on Airbnb</AirbnbButton>
          </div>

          <p style={styles.paragraph}>
            Whether you're Soho-curious or Soho-adjacent, the north Cotswolds reward slow travel. Check in, pour
            something cold, and let the countryside do the rest.
          </p>
        </article>

        <Link href="/cotswolds-blog" style={styles.backToBlogs}>← Back to Blogs</Link>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Cotswolds Estate</h3>
            <p style={styles.footerText}>
              Luxury 8-bedroom estate near Soho Farmhouse in {PROPERTY.location}, {PROPERTY.region}.
            </p>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Book Your Stay</h3>
            <AirbnbButton variant="sm">Book on Airbnb</AirbnbButton>
          </div>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Cotswolds Estate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
