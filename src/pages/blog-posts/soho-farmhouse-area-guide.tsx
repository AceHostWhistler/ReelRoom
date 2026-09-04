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

          <p style={styles.paragraph}>
            This guide is for anyone who loves the <em>idea</em> of the Soho Farmhouse area — the lanes, the food,
            the pace of life — but wants a private base with room for family or friends. Think of it as the
            countryside experience, with your own pool timetable.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/DJI_20260722213403_0216_D.jpg"
            alt="Aerial view of Cotswolds estate near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Why this corner of the Cotswolds hits different</h2>

          <p style={styles.paragraph}>
            Sandford Saint Martin and the surrounding villages sit in that sweet spot: close enough to London for a
            weekend escape (roughly ninety minutes by car via the M40), far enough that phone signal becomes optional.
            Honey-coloured stone, proper pubs, footpaths that actually go somewhere — it is the Cotswolds at its most
            photogenic without the coach-tour crush you find in Bibury on a sunny August afternoon.
          </p>

          <p style={styles.paragraph}>
            Oxfordshire&apos;s north Cotswolds fringe feels quieter than the classic Gloucestershire honey-pot villages,
            but that is precisely the appeal. You are near enough to Daylesford, Blenheim and Kingham for day trips,
            yet your evenings can be entirely private: fire pit, hot tub, tennis under the trees. The estate sits on
            several acres — space to spread out without bumping into strangers by the pool.
          </p>

          <div style={styles.calloutBox}>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>
              <strong>Pro tip:</strong> Book a mid-week stay if you can. You&apos;ll have the lanes, the pool and the
              tennis court almost to yourself — and the light at golden hour is absurdly good for photos. Shoulder
              seasons (April–May, September–October) offer the best balance of weather and crowd-free villages.
            </p>
          </div>

          <h2 style={styles.heading}>Getting here: London, Oxford and beyond</h2>

          <p style={styles.paragraph}>
            <strong>By car:</strong> The M40 makes {PROPERTY.location} straightforward from London, Birmingham and
            the Home Counties. Sat-nav to the estate; parking for up to six cars on site — useful when a group arrives
            in separate vehicles. An EV charger is available if you are doing the electric countryside thing properly.
          </p>

          <p style={styles.paragraph}>
            <strong>By train:</strong> Kingham and Charlbury stations are both within roughly twenty to thirty minutes
            by taxi. London Paddington to Kingham takes about an hour and a half — genuinely viable for a Friday
            evening arrival if someone in the group prefers not to drive after work.
          </p>

          <p style={styles.paragraph}>
            <strong>From Oxford:</strong> Under forty minutes by car. Combine a university city morning with a pool
            afternoon — the sort of itinerary that makes non-Cotswolds friends jealous on Instagram.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg"
            alt="Cotswolds stone estate exterior near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Daytime: walks, villages and very good excuses to stop for coffee</h2>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>The private trail walk to Soho Farmhouse</strong> — thirty minutes through fields and hedgerows.
              Perfect pre-lunch appetite builder. Even if you are not heading to the club itself, the walk is one of
              the best introductions to Oxfordshire countryside from the estate door.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Great Tew</strong> — often cited as one of England&apos;s prettiest villages. Honey stone, thatched
              cottages, and a pub (The Falkland Arms) that feels unchanged in the best possible way. Fifteen minutes by car.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Kingham</strong> — home to The Wild Rabbit and the train station. Village wandering, excellent
              food, and that polished-but-not-precious Cotswolds atmosphere.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Deddington &amp; surrounding villages</strong> — market-town charm, independent shops, and
              architecture that makes you Google &quot;could we move here?&quot;
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Daylesford Organic</strong> — twenty minutes by car. Treat it as a pilgrimage for cheese,
              flowers and dangerously good pastries. The farm shop alone justifies the trip; the café is a bonus.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Blenheim Palace</strong> — under forty minutes. Palatial grounds, history, and excellent
              &quot;we&apos;re definitely coming back&quot; energy. Allow a full morning or afternoon.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Chipping Norton</strong> — a proper small town with antiques, independents and a less twee
              feel than some smaller villages. Good for rainy-day browsing.
            </li>
          </ul>

          <h2 style={styles.heading}>Evenings: pub culture without the Uber bill from London</h2>

          <p style={styles.paragraph}>
            The Cotswolds pub scene near Soho Farmhouse is quietly elite. Think roaring fires, local ales, and menus
            that have clearly met a chef who cares. The Wild Rabbit in Kingham needs little introduction — book well ahead
            for weekend tables. The Killingworth Castle near Woodstock does excellent gastropub food in a cosy setting.
            The Falkland Arms in Great Tew is the village pub of dreams: low beams, good beer, dogs welcome.
          </p>

          <p style={styles.paragraph}>
            If you would rather stay in, the estate&apos;s Devol kitchen with AGA is genuinely equipped for a proper
            group dinner — or lean on local delivery and save the cooking for breakfast. Either way, you are not paying
            London prices for the privilege of eating somewhere beautiful.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A5417.jpg"
            alt="Devol kitchen and dining at luxury Cotswolds rental near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>What to do when you are not exploring</h2>

          <p style={styles.paragraph}>
            Not every hour needs an itinerary. That is the point of a private estate. The heated pool works year-round.
            The tennis court does not require a booking slot. The outdoor spa — hot tub, infrared sauna, cold plunge —
            runs on your schedule (within the 8am–10pm quiet hours that keep the neighbours happy). Bocce, horseshoes,
            fire pit evenings: the sort of holiday activities that do not appear on TripAdvisor lists but dominate
            group WhatsApp chats for weeks afterwards.
          </p>

          <p style={styles.paragraph}>
            Families often split the day: adults on the trail or at Daylesford while teenagers hold court at the pool.
            Couples with another couple have been known to treat the house as a absurdly spacious four-person retreat
            and refuse to leave the hot tub. All valid.
          </p>

          <h2 style={styles.heading}>Why stay on an estate instead?</h2>

          <p style={styles.paragraph}>
            Here is the honest pitch: membership clubs are brilliant if you are in every weekend. For a family reunion,
            a milestone birthday, or a &quot;we all need to get out of London&quot; weekend, a private{' '}
            <strong>8-bedroom Cotswolds rental</strong> often makes more sense. You get:
          </p>

          <ul style={{ ...styles.paragraph, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>Heated pool, hot tub, sauna and cold plunge — on your schedule</li>
            <li style={{ marginBottom: '10px' }}>Private tennis court (no booking slot required)</li>
            <li style={{ marginBottom: '10px' }}>Room for up to {PROPERTY.maxGuests} guests across main house and annex</li>
            <li style={{ marginBottom: '10px' }}>Devol kitchen with AGA — for the group chef or the group Deliveroo recovery</li>
            <li style={{ marginBottom: '10px' }}>Two dogs welcome (small fee — declare on Airbnb)</li>
            <li style={{ marginBottom: '10px' }}>Step-free annex for elderly guests or anyone who prefers ground-floor access</li>
            <li style={{ marginBottom: '10px' }}>Two living rooms — so early risers and late sleepers coexist peacefully</li>
          </ul>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/Cotswolds cover pool 1.jpeg"
            alt="Heated outdoor pool at Cotswolds luxury rental near Soho Farmhouse"
            style={styles.blogImage}
          />

          <h2 style={styles.heading}>Who this stay suits best</h2>

          <p style={styles.paragraph}>
            <strong>Multi-generational families</strong> — bedrooms for everyone, annex for grandparents, pool for
            the children who never get tired (they do; the pool wins anyway).{' '}
            <strong>Friend groups</strong> — tennis tournaments with questionable rules, hot tub diplomacy, enough
            beds that nobody sleeps on a sofa.{' '}
            <strong>Remote workers</strong> — two office spaces if someone needs to sneak in a Monday morning call
            before the second swim of the day.{' '}
            <strong>Soho-adjacent travellers</strong> — visiting members, or simply enjoying the same landscape
            without the same constraints.
          </p>

          <h2 style={styles.heading}>Planning your stay</h2>

          <p style={styles.paragraph}>
            Rates from {PROPERTY.priceRange} with a {PROPERTY.minStay}. Peak weekends book early — especially around
            bank holidays and school breaks. If you are comparing a Soho Farmhouse visit with friends against one
            big house for the whole group, run the numbers. Spoiler: the estate often wins, and everyone gets a bed.
          </p>

          <p style={styles.paragraph}>
            Read our guides on{' '}
            <Link href="/blog-posts/london-to-cotswolds-weekend" style={{ color: colors.darkGreen }}>
              weekend trips from London
            </Link>
            ,{' '}
            <Link href="/blog-posts/dog-friendly-cotswolds-holiday" style={{ color: colors.darkGreen }}>
              dog-friendly breaks
            </Link>{' '}
            and{' '}
            <Link href="/blog-posts/dining-experiences" style={{ color: colors.darkGreen }}>
              local dining
            </Link>{' '}
            for more detail on building your itinerary.
          </p>

          <img
            src="/photos/listings/Cotswolds Luxury Retreat/224A8507.jpg"
            alt="Outdoor living and tennis at Cotswolds estate near Soho Farmhouse Oxfordshire"
            style={styles.blogImage}
          />

          <div className="text-center my-8">
            <AirbnbButton variant="lg">Book on Airbnb</AirbnbButton>
          </div>

          <p style={styles.paragraph}>
            Whether you are Soho-curious or Soho-adjacent, the north Cotswolds reward slow travel. Check in, pour
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
