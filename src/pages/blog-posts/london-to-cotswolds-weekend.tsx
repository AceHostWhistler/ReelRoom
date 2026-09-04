import React from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';
import { AirbnbButton } from '../../components/AirbnbButton';
import { BlogSeoHead } from '../../components/BlogSeoHead';
import { getBlogSeo } from '../../config/blogSeo';
import { PROPERTY } from '../../config/property';

const seo = getBlogSeo('london-to-cotswolds-weekend');

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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/224A8292.jpg')",
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
  itineraryBlock: {
    borderLeft: `3px solid ${colors.darkGreen}`,
    paddingLeft: '20px',
    marginBottom: '28px',
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

export default function LondonToCotswoldsWeekendBlog() {
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
            You do not need two weeks off to reset. You need about ninety minutes on a train (or a straightforward
            drive up the M40), a house with a heated pool, and a group chat that actually commits to dates.
            Welcome to the <strong>48-hour luxury Cotswolds weekend</strong> — London stress out, countryside calm in.
          </p>

          <p style={styles.paragraph}>
            Our estate in <strong>{PROPERTY.location}</strong> is roughly <strong>1.5 hours from London</strong>,
            four minutes from Soho Farmhouse, and equipped with everything a short break should have: pool, hot tub,
            sauna, tennis, and enough bedrooms that nobody draws the short straw on the sofa bed.
          </p>

          <p style={styles.paragraph}>
            This is a realistic itinerary — not a fantasy where everyone wakes at 6am for yoga. It is designed for
            groups who want maximum relaxation per hour away from the city, with optional exploring if the mood strikes.
          </p>

          <div style={styles.calloutBox}>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>Getting there:</strong> Drive via M40 (easy boot space for prosecco). Or train to
              Kingham / Charlbury and taxi — roughly 20–30 minutes to the estate. EV? Charger on site.
              Aim to leave London by 5:30pm Friday and you will be in the hot tub by 8pm.
            </p>
          </div>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/Hot tub shot no AC cotswolds.png"
            alt="Hot tub and spa at Cotswolds luxury weekend rental"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Friday evening: escape velocity</h2>

          <p style={styles.paragraph}>
            The first evening sets the tone. Do not over-plan it — arrive, exhale, and establish that you are
            no longer in London. Nominate a playlist curator and a wine opener; the rest takes care of itself.
          </p>

          <div style={styles.itineraryBlock}>
            <p style={styles.paragraph}>
              <strong>6:00pm</strong> — Leave London. Accept that someone will forget their charger within ten minutes.
            </p>
            <p style={styles.paragraph}>
              <strong>7:30pm</strong> — Arrive at the estate. Bags upstairs, shoes off, someone opens wine while
              someone else claims the master suite (good luck — it has an Emperor bed).
            </p>
            <p style={styles.paragraph}>
              <strong>8:30pm</strong> — Dinner options: fire up the AGA and cook properly, or support a local pub
              and treat the Devol kitchen as a very beautiful backup plan.
            </p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>10:00pm</strong> — Hot tub under the stars. Quiet hours for spa/tennis apply — hot tub
              conversation does not count as noise pollution if you keep it classy.
            </p>
          </div>

          <h2 style={styles.heading}>Saturday: the main character day</h2>

          <p style={styles.paragraph}>
            Saturday is why you came. Pool, tennis, optional village expedition, long dinner. The estate is large
            enough that different energy levels coexist — marathon swimmers and hammock philosophers, united by lunch.
          </p>

          <div style={styles.itineraryBlock}>
            <p style={styles.paragraph}>
              <strong>8:30am</strong> — Slow breakfast. Two living rooms means the early risers and the sleepers
              coexist peacefully.
            </p>
            <p style={styles.paragraph}>
              <strong>10:00am</strong> — Tennis tournament (casual rules encouraged). Losers make lunch.
            </p>
            <p style={styles.paragraph}>
              <strong>12:30pm</strong> — Pool session. The heated pool works year-round — yes, even British
              "summer" that feels like autumn with better PR.
            </p>
            <p style={styles.paragraph}>
              <strong>3:00pm</strong> — Explore: Daylesford for provisions, a village wander, or the Soho Farmhouse
              trail walk if you want to stretch your legs before dinner.
            </p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>7:30pm</strong> — Long table dinner for 12–14. Extendable dining setup means nobody eats
              on a kitchen stool pretending they prefer it.
            </p>
          </div>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5413.jpg"
            alt="Devol kitchen at Cotswolds luxury weekend rental"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Saturday alternatives (if you can tear yourself away)</h2>

          <p style={styles.paragraph}>
            Not everyone wants a full pool day — shocking, but true. Swap an hour or two for:
          </p>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Daylesford run</strong> — twenty minutes by car, excellent lunch, provisions for the house
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Great Tew pub lunch</strong> — The Falkland Arms, dogs welcome, classic Cotswolds atmosphere
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Soho Farmhouse trail walk</strong> — thirty minutes from the estate door, no membership required
              for the countryside part
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Blenheim Palace</strong> — if someone in the group is a history or Downton enthusiast
            </li>
          </ul>

          <h2 style={styles.heading}>Sunday: soft landing back to reality</h2>

          <div style={styles.itineraryBlock}>
            <p style={styles.paragraph}>
              <strong>9:00am</strong> — Final swim or sauna-and-cold-plunge if you are feeling heroic.
            </p>
            <p style={styles.paragraph}>
              <strong>11:00am</strong> — Check-out prep. Strip beds if you are feeling helpful (hosts love you).
            </p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>12:00pm</strong> — Depart. Already planning the next weekend. This is normal.
            </p>
          </div>

          <p style={styles.paragraph}>
            Pro tip: book a late Sunday checkout if available on your dates — a 2pm departure with a morning swim
            feels infinitely better than a rushed 10am scramble. Check the listing for exact checkout times.
          </p>

          <h2 style={styles.heading}>Who this weekend works for</h2>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Friend groups</strong> — pool, tennis, hot tub, enough beds for {PROPERTY.maxGuests}
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Multi-gen families</strong> — annex with step-free access for grandparents
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Couples + another couple</strong> — absurd amount of house for four people (no judgement)
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Remote-work escapees</strong> — two office spaces if Monday WFH from the Cotswolds sounds tempting
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Celebration weekends</strong> — birthdays, reunions, low-key hen dos with pool instead of clubs
            </li>
          </ul>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5405.jpg"
            alt="Master suite at Cotswolds luxury weekend rental from London"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Budget reality check</h2>

          <p style={styles.paragraph}>
            Split across eight bedrooms, a <strong>luxury Cotswolds rental</strong> from {PROPERTY.priceRange} can
            compare favourably with boutique hotels — especially when you factor in pool, tennis, spa, parking for
            six cars, and not paying £18 per gin and tonic at a hotel bar. {PROPERTY.minStay} applies; book early for
            peak weekends.
          </p>

          <p style={styles.paragraph}>
            Example: eight friends splitting a weekend at {PROPERTY.priceRange} often lands at a per-person cost
            comparable to a mid-range hotel — except here you get the pool, tennis, spa, parking, and a kitchen
            that makes brunch for twelve without queueing. Run your own numbers; groups are usually pleasantly surprised.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/Cotswolds Cover Pool 2.jpeg"
            alt="Heated pool at Cotswolds estate weekend rental from London"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>What to pack for 48 hours</h2>

          <p style={styles.paragraph}>
            Swimwear (obviously), tennis shoes, one smart-casual outfit for pub or Wild Rabbit if you are feeling ambitious,
            toiletries — the house provides luxury linens and towels. Bring a Bluetooth speaker for the kitchen.
            Leave work laptop at home if at all possible (we said if at all possible).
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260722212904_0203_D.jpg"
            alt="Aerial view of Cotswolds estate for London weekend escape"
            style={styles.blogImage}
          />

          <div className="text-center my-8">
            <AirbnbButton variant="lg">Book on Airbnb</AirbnbButton>
          </div>

          <p style={styles.paragraph}>
            London will still be there on Monday. The emails will too. But for forty-eight hours you will have
            had stone walls, open sky, and a proper swim — and that is exactly the point. Read our{' '}
            <Link href="/blog-posts/cotswolds-wellness-retreat" style={{ color: colors.darkGreen }}>
              wellness retreat guide
            </Link>{' '}
            if you want to lean into the spa side of the stay.
          </p>
        </article>

        <Link href="/cotswolds-blog" style={styles.backToBlogs}>← Back to Blogs</Link>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Cotswolds Estate</h3>
            <p style={styles.footerText}>
              Your 48-hour escape from London — pool, tennis &amp; spa near Soho Farmhouse.
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
