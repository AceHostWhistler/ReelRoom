import React from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';
import { AirbnbButton } from '../../components/AirbnbButton';
import { BlogSeoHead } from '../../components/BlogSeoHead';
import { getBlogSeo } from '../../config/blogSeo';
import { PROPERTY } from '../../config/property';

const seo = getBlogSeo('celebration-weekend-cotswolds');

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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/224A5450.jpg')",
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

export default function CelebrationWeekendCotswoldsBlog() {
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
            Milestone birthdays. Hen weekends that prefer pools to clubs. Reunions where everyone has outgrown
            hostel dorm energy. The Cotswolds is Britain&apos;s favourite celebration backdrop — and our{' '}
            <strong>8-bedroom estate near Soho Farmhouse</strong> in {PROPERTY.location} is built for groups who
            want privacy, space and amenities that actually match the occasion.
          </p>

          <p style={styles.paragraph}>
            Sleeps up to <strong>{PROPERTY.maxGuests}</strong>. Heated pool, private tennis court, outdoor spa,
            Devol kitchen with AGA, parking for six cars, and enough bedrooms that nobody sleeps on a blow-up mattress
            in the bath. This is how celebration weekends should feel: generous, slightly ridiculous, and entirely yours.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5450.jpg"
            alt="Luxury Cotswolds estate for celebration weekends and group stays"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Why the Cotswolds for celebrations?</h2>

          <p style={styles.paragraph}>
            London venues are expensive, loud, and forgotten by Monday. A private estate gives you three days of
            memory-making — pool tournaments, long dinners, hot tub diplomacy, countryside walks for the ones who
            need fresh air — without strangers at the next table or a midnight checkout.
          </p>

          <p style={styles.paragraph}>
            The Soho Farmhouse area adds polish: excellent pubs, Daylesford twenty minutes away, villages that
            photograph beautifully for the group chat. You are close enough to civilisation for a fancy dinner out;
            private enough that the real party happens at home.
          </p>

          <div style={styles.calloutBox}>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>House rules matter for celebrations:</strong> {PROPERTY.quietHours} The pool and spa are
              for daytime and early evening energy — not 2am pool parties. Respect the neighbours and the estate
              stays bookable for your next milestone too.
            </p>
          </div>

          <h2 style={styles.heading}>Celebration types that work brilliantly here</h2>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Milestone birthdays (30th, 40th, 50th…)</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Gather the whole crew — school friends, work friends, the friends who should never meet but must.
              Long dining table, pool for the competitive ones, annex for anyone who wants a quiet escape from the chaos.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Hen weekends (the civilised kind)</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Think spa, tennis, prosecco by the pool — not strip clubs and sleep deprivation. The Cotswolds hen
              is having a moment: beautiful, relaxed, actually fun on Sunday morning. Wild Rabbit in Kingham is
              twenty minutes away if you want one big night out.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Stag weekends (similarly upgraded)</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Tennis, pool, fire pit, pub walks. The sort of stag where everyone remembers the weekend and nobody
              loses a shoe. Oxford and Blenheim are nearby for daytime activities if you want to venture out.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}><strong>Family reunions &amp; anniversaries</strong></p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Multi-generational groups love the annex for step-free access and the main house for everyone else.
              See our{' '}
              <Link href="/blog-posts/family-gathering" style={{ color: colors.darkGreen }}>
                family reunion guide
              </Link>{' '}
              for detailed planning tips.
            </p>
          </div>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5413.jpg"
            alt="Devol kitchen and dining for celebration dinners at Cotswolds estate"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Planning the perfect celebration weekend</h2>

          <p style={styles.paragraph}>
            <strong>12 weeks out:</strong> Lock dates and collect deposits. Celebration weekends book fast —
            especially bank holidays and summer. Our {PROPERTY.minStay} applies; plan accordingly.
          </p>

          <p style={styles.paragraph}>
            <strong>8 weeks out:</strong> Assign bedrooms (Emperor master suite goes to birthday royalty or bride —
            negotiate early). Plan one big dinner: caterer, chef, or heroic friend who actually enjoys cooking for twelve.
          </p>

          <p style={styles.paragraph}>
            <strong>4 weeks out:</strong> Build a loose itinerary — one structured activity (tennis round-robin,
            village walk, Daylesford lunch), plenty of unscheduled pool time. Order decorations, balloons, cake —
            the AGA kitchen handles the rest.
          </p>

          <p style={styles.paragraph}>
            <strong>Week of:</strong> Share the address, parking info (six cars on site), and quiet hours reminder
            in the group chat. Nominate a &quot;house captain&quot; for checkout day — strip beds, dishwasher, bins.
            Future-you will thank present-you.
          </p>

          <h2 style={styles.heading}>Food &amp; drink: keep it simple or go grand</h2>

          <p style={styles.paragraph}>
            The Devol kitchen with AGA is genuinely equipped for a celebration feast — we have hosted everything from
            DIY pizza nights to fully catered multi-course dinners. Daylesford and local farm shops make provisioning
            easy; several guests hire private chefs for Saturday night and self-cater the rest.
          </p>

          <p style={styles.paragraph}>
            For dining out, The Wild Rabbit (Kingham), The Killingworth Castle, and The Falkland Arms (Great Tew)
            are all within easy reach. Book ahead for groups — country pubs appreciate the heads-up.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/Cotswolds Cover Pool 2.jpeg"
            alt="Heated pool for hen parties and celebration weekends in the Cotswolds"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Activities that make the weekend</h2>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>Pool party — obviously; heated year-round</li>
            <li style={{ marginBottom: '10px' }}>Tennis tournament with questionable scoring rules</li>
            <li style={{ marginBottom: '10px' }}>Hot tub &amp; sauna sessions — the recovery between activities</li>
            <li style={{ marginBottom: '10px' }}>Bocce and horseshoes on the lawn — surprisingly competitive</li>
            <li style={{ marginBottom: '10px' }}>Fire pit evening — marshmallows, stories, no phone signal required</li>
            <li style={{ marginBottom: '10px' }}>Private trail walk — thirty minutes to the Soho Farmhouse area</li>
            <li style={{ marginBottom: '10px' }}>Day trip to Blenheim, Bibury or Bourton-on-the-Water for the photographers</li>
          </ul>

          <h2 style={styles.heading}>Sleeping arrangements for groups</h2>

          <p style={styles.paragraph}>
            Eight bedrooms across main house and annex: Emperor master suite, super kings, doubles, and a single in
            the annex. Most celebration groups of 10–14 fit comfortably with everyone in a proper bed. Maximum{' '}
            {PROPERTY.maxGuests} — beyond that, quality beats quantity.
          </p>

          <p style={styles.paragraph}>
            Split costs across the group and the per-person rate from {PROPERTY.priceRange} often beats booking
            multiple hotel rooms — especially when you factor in the pool, tennis, spa, and kitchen. Run the numbers
            early; it makes collecting deposits easier.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5405.jpg"
            alt="Master bedroom at Cotswolds celebration weekend rental"
            style={styles.blogImage}
          />

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260722215623_0226_D.jpg"
            alt="Aerial view of Cotswolds estate for large group celebrations near Soho Farmhouse"
            style={styles.blogImage}
          />

          <div className="text-center my-8">
            <AirbnbButton variant="lg">Book on Airbnb</AirbnbButton>
          </div>

          <p style={styles.paragraph}>
            The best celebrations leave everyone asking when you are doing it again. Book the estate, send the
            group chat, and let the Cotswolds provide the scenery — you bring the people worth celebrating.
          </p>
        </article>

        <Link href="/cotswolds-blog" style={styles.backToBlogs}>← Back to Blogs</Link>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Cotswolds Estate</h3>
            <p style={styles.footerText}>
              Celebration weekends near Soho Farmhouse — pool, tennis &amp; room for {PROPERTY.maxGuests}.
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
