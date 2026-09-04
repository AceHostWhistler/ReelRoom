import React from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';
import { AirbnbButton } from '../../components/AirbnbButton';
import { BlogSeoHead } from '../../components/BlogSeoHead';
import { getBlogSeo } from '../../config/blogSeo';
import { PROPERTY } from '../../config/property';

const seo = getBlogSeo('dog-friendly-cotswolds-holiday');

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
    backgroundImage: "url('/photos/listings/Cotswolds Luxury Retreat/224A5345.jpg')",
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

export default function DogFriendlyCotswoldsBlog() {
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
            Leaving the dog behind is not a holiday — it is guilt with better scenery. The good news: the Cotswolds
            might be the most dog-friendly region in England, and our <strong>luxury estate near Soho Farmhouse</strong>{' '}
            in {PROPERTY.location} welcomes up to <strong>two dogs</strong> (small fee — just declare them in your
            guest count on Airbnb).
          </p>

          <p style={styles.paragraph}>
            Two acres of private grounds. Footpaths from the door. A hose for the inevitable post-walk situation.
            Your dog will have a better holiday than you. Possibly a better social life too.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260720185020_0008_D.jpg"
            alt="Cotswolds estate grounds perfect for dog walks"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Why the Cotswolds and dogs are a perfect match</h2>

          <p style={styles.paragraph}>
            Rolling fields, public footpaths, village greens, and pubs that greet dogs like honoured guests.
            Oxfordshire and north Gloucestershire have some of the best walking country in the UK — and unlike
            coastal trips in August, you are not fighting every other spaniel on a single beach path.
          </p>

          <div style={styles.calloutBox}>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>House rule reminder:</strong> Spa and tennis court hours are 8am–10pm (neighbours sleep too).
              Dogs + hot tub = hard no. Dogs + morning walk through the fields = absolutely yes.
            </p>
          </div>

          <h2 style={styles.heading}>Walks from the estate (ranked by tail wag intensity)</h2>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}>
              <strong>🥇 The private trail toward Soho Farmhouse</strong>
            </p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Roughly thirty minutes each way through open countryside. Flat enough for older dogs, interesting
              enough that yours will pretend they discovered it personally.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}>
              <strong>🥈 Estate grounds loop</strong>
            </p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Before breakfast, after lunch, or that fourth walk of the day because someone has energy. Bocce,
              horseshoes, fire pit — plenty to sniff around while humans pretend to relax.
            </p>
          </div>

          <div style={styles.tipCard}>
            <p style={{ ...styles.paragraph, marginBottom: '8px' }}>
              <strong>🥉 Blenheim Palace parkland</strong>
            </p>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              Short drive, big open spaces. Check current dog policies before you go — worth it for a proper
              "dog running joyfully in slow motion" photo.
            </p>
          </div>

          <h2 style={styles.heading}>Dog-friendly pubs worth the muddy boots</h2>

          <p style={styles.paragraph}>
            The Cotswolds pub tradition leans welcoming. Many country pubs near {PROPERTY.location} have gardens
            or bar areas where well-behaved dogs are part of the furniture. Call ahead on busy Sundays — and
            always bring a towel. Trust us on the towel.
          </p>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>The Falkland Arms, Great Tew — classic village pub vibes</li>
            <li style={{ marginBottom: '10px' }}>The Killingworth Castle — good food, cosy corners</li>
            <li style={{ marginBottom: '10px' }}>Local farm shops with outdoor seating — coffee for you, sausage for them (ask first)</li>
          </ul>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5463.jpg"
            alt="Countryside near dog-friendly Cotswolds luxury rental"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Staying at the estate with dogs</h2>

          <p style={styles.paragraph}>
            Our <strong>dog-friendly Cotswolds rental</strong> sleeps {PROPERTY.maxGuests} across the main house
            and step-free annex — handy if grandparents want ground-floor access while the dogs claim the sofa
            upstairs. Practical tips from past guests:
          </p>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>Bring familiar beds and bowls — new house, same smells home</li>
            <li style={{ marginBottom: '10px' }}>Pack tick treatment in spring and summer</li>
            <li style={{ marginBottom: '10px' }}>Use the boot room / downstairs space for wet-dog protocol</li>
            <li style={{ marginBottom: '10px' }}>EV charger on site if you are doing the electric dog-wagon thing</li>
          </ul>

          <p style={styles.paragraph}>
            {PROPERTY.petPolicy} The estate is not fenced like a kennel — keep dogs supervised near the pond
            and driveways, as you would at any countryside property.
          </p>

          <h2 style={styles.heading}>When to visit with dogs</h2>

          <p style={styles.paragraph}>
            <strong>Spring &amp; autumn</strong> — ideal walking weather, fewer midges, gorgeous light.
            <strong> Summer</strong> — early walks, pool time for humans, shade in the afternoon.
            <strong> Winter</strong> — roaring fires, empty footpaths, maximum pub cosiness. Dogs do not care
            about season. They care about walks. Always walks.
          </p>

          <div className="text-center my-8">
            <AirbnbButton variant="lg">Book on Airbnb</AirbnbButton>
          </div>

          <p style={styles.paragraph}>
            A Cotswolds break with dogs should feel effortless — long walks, warm house, cold drink, repeat.
            Book the estate, pack the leads, and let Oxfordshire do the rest.
          </p>
        </article>

        <Link href="/cotswolds-blog" style={styles.backToBlogs}>← Back to Blogs</Link>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Cotswolds Estate</h3>
            <p style={styles.footerText}>Dog-friendly luxury rental near Soho Farmhouse — up to 2 dogs welcome.</p>
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
