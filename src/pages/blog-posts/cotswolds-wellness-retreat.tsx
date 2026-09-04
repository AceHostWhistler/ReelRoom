import React from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';
import { AirbnbButton } from '../../components/AirbnbButton';
import { BlogSeoHead } from '../../components/BlogSeoHead';
import { getBlogSeo } from '../../config/blogSeo';
import { PROPERTY } from '../../config/property';

const seo = getBlogSeo('cotswolds-wellness-retreat');

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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/Hot tub shot no AC cotswolds.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: colors.white,
    textAlign: 'center' as const,
    padding: '80px 20px',
    position: 'relative' as const,
  },
  heroOverlay: { position: 'absolute' as const, inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' },
  heroContent: { position: 'relative' as const, zIndex: 2, maxWidth: '800px', margin: '0 auto' },
  heroTitle: { fontSize: '2.8em', fontWeight: 700, marginBottom: '0.3em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' },
  heroSubtitle: { fontSize: '1.25em', textShadow: '1px 1px 3px rgba(0,0,0,0.5)', maxWidth: '700px', margin: '0 auto' },
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
  tipCard: {
    backgroundColor: colors.offWhite,
    borderRadius: '10px',
    padding: '20px 24px',
    marginBottom: '16px',
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
  footerContainer: { maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap' as const },
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

export default function CotswoldsWellnessRetreatBlog() {
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
            Wellness retreats used to mean juice cleanses and shared bathrooms. Times have changed. The best reset
            we know is a private <strong>Cotswolds estate</strong> with a heated pool, hot tub, infrared sauna and
            cold plunge — all on your schedule, no strangers in matching robes, no 6am gong.
          </p>

          <p style={styles.paragraph}>
            Our <strong>luxury wellness rental near Soho Farmhouse</strong> in {PROPERTY.location}, {PROPERTY.region},
            gives you the full spa experience spread across several acres of Oxfordshire countryside. Sleep up to{' '}
            {PROPERTY.maxGuests}, bring your closest friends or family, and design the weekend around recovery —
            or celebration, which is its own kind of wellness.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/Hot tub shot no AC cotswolds.png"
            alt="Hot tub and outdoor spa at Cotswolds wellness retreat near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Your private spa: what is included</h2>

          <p style={styles.paragraph}>
            Unlike a hotel spa with booking slots and treatment menus, the estate&apos;s outdoor wellness area is
            entirely yours for the stay. Use it how you like — within the 8am–10pm quiet hours that keep neighbours
            (and sanity) intact.
          </p>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Heated outdoor pool</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Year-round swimming. Morning laps, afternoon floats, midnight dips if you are back from the pub before
              10pm. The pool is the centrepiece of most wellness weekends — and the reason guests extend stays.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Hot tub</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              The social hub after tennis, walks or a long drive from London. Stars visible on clear nights.
              Prosecco optional but statistically likely.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Infrared sauna</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Proper heat without the stuffiness of a traditional sauna. Pair with the cold plunge for contrast therapy
              if you are feeling virtuous — or skip straight to the hot tub if you are not.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Cold plunge</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Brief, bracing, oddly addictive. The sort of thing that makes you feel you have earned breakfast.
              Not mandatory. Very Instagrammable if you are into that.
            </p>
          </div>

          <div style={styles.calloutBox}>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>Quiet hours:</strong> {PROPERTY.quietHours} Plan your evening spa session accordingly —
              the hot tub after dinner is perfect; a 2am pool party is not the vibe here.
            </p>
          </div>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/Cotswolds cover pool 1.jpeg"
            alt="Heated pool at private Cotswolds wellness retreat Oxfordshire"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Sample wellness weekend itinerary</h2>

          <p style={styles.paragraph}>
            <strong>Friday:</strong> Arrive, unpack, hot tub to decompress from the journey. Light dinner — AGA kitchen
            or local pub. Early night optional but underrated.
          </p>

          <p style={styles.paragraph}>
            <strong>Saturday morning:</strong> Walk the private trail toward Soho Farmhouse or a gentle loop of the
            estate grounds. Sauna followed by cold plunge. Pool while coffee brews.
          </p>

          <p style={styles.paragraph}>
            <strong>Saturday afternoon:</strong> Tennis if you want movement with competition. Or hammock. Or Daylesford
            for provisions and a treat-yourself lunch.
          </p>

          <p style={styles.paragraph}>
            <strong>Saturday evening:</strong> Long table dinner, fire pit if weather allows, hot tub under the stars.
            This is the night that makes the whole trip.
          </p>

          <p style={styles.paragraph}>
            <strong>Sunday:</strong> Final swim, final sauna, slow checkout. Return to reality slightly smug and
            noticeably more rested.
          </p>

          <h2 style={styles.heading}>Wellness beyond the spa</h2>

          <p style={styles.paragraph}>
            Movement matters. The estate offers tennis, bocce, horseshoes and miles of footpaths — enough variety that
            &quot;active recovery&quot; is not a euphemism for walking to the fridge. The private trail to the Soho Farmhouse
            area is thirty minutes each way through open countryside; flat, scenic, and excellent for clearing your head.
          </p>

          <p style={styles.paragraph}>
            Rest matters too. Eight bedrooms mean nobody fights over the quiet room. Two living rooms mean different
            energy levels coexist. The annex offers step-free access for guests who prefer ground-floor calm while
            the main house hosts the pool tournament.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5470.jpg"
            alt="Tennis court and outdoor amenities at Cotswolds wellness estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Who books a Cotswolds wellness retreat?</h2>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Friend groups</strong> — spa weekends without the spa price list; split the cost across {PROPERTY.bedrooms} bedrooms
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Couples with friends</strong> — double dates with a very generous amount of space
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Corporate offsites</strong> — two office spaces, pool for debriefs, kitchen for team dinners
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Post-wedding recovery</strong> — the calm after the storm, with better amenities than the honeymoon hotel
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>London burnouts</strong> — see our{' '}
              <Link href="/blog-posts/london-to-cotswolds-weekend" style={{ color: colors.darkGreen }}>
                48-hour weekend guide
              </Link>
            </li>
          </ul>

          <h2 style={styles.heading}>Wellness vs hotel spa: the honest comparison</h2>

          <p style={styles.paragraph}>
            Hotel spas charge per treatment, share facilities with strangers, and close at 9pm. Here you get the full
            stack — pool, hot tub, sauna, cold plunge, tennis — included in the stay. Split across a group, the per-person
            cost often beats a boutique hotel plus spa day pass. And you control the playlist. Always the playlist.
          </p>

          <p style={styles.paragraph}>
            Rates from {PROPERTY.priceRange}, {PROPERTY.minStay}. Book early for peak wellness season (spring and autumn
            shoulder months are particularly good — mild enough to swim, quiet enough to actually relax).
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A8456.jpg"
            alt="Peaceful bedroom at Cotswolds wellness retreat estate"
            style={styles.blogImage}
          />

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260722213403_0216_D.jpg"
            alt="Aerial view of Cotswolds wellness estate with pool and spa near Soho Farmhouse"
            style={styles.blogImage}
          />

          <div className="text-center my-8">
            <AirbnbButton variant="lg">Book on Airbnb</AirbnbButton>
          </div>

          <p style={styles.paragraph}>
            A proper wellness retreat does not require monk-like discipline — just space, water, heat, cold, and
            time. The Cotswolds provide the backdrop; the estate provides the rest. Check in, breathe out, swim.
          </p>
        </article>

        <Link href="/cotswolds-blog" style={styles.backToBlogs}>← Back to Blogs</Link>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Cotswolds Estate</h3>
            <p style={styles.footerText}>
              Private pool, hot tub, sauna &amp; cold plunge — wellness retreat near Soho Farmhouse.
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
