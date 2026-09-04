/** SEO metadata for Cotswolds Vacation blog posts */
export type BlogSeoEntry = {
  slug: string;
  /** Page <title> — keep under ~60 characters where possible */
  title: string;
  /** Must match on-page H1 (primary keyword) */
  h1: string;
  description: string;
  keywords: string;
  heroSubtitle: string;
  ogImage: string;
  published: string;
  publishedDisplay: string;
  readTime: string;
};

const PHOTO = '/photos/listings/Cotswolds Luxury Retreat';

export const BLOG_SEO: Record<string, BlogSeoEntry> = {
  'soho-farmhouse-area-guide': {
    slug: 'soho-farmhouse-area-guide',
    title: 'Things to Do Near Soho Farmhouse (No Membership) | Cotswolds Guide',
    h1: 'Things to Do Near Soho Farmhouse Without a Membership',
    description:
      'Enjoy the Soho Farmhouse area without a membership — walks, villages, pubs and a private 8-bedroom Cotswolds estate with pool, tennis court and spa in Sandford Saint Martin, Oxfordshire.',
    keywords:
      'Soho Farmhouse Cotswolds, things to do near Soho Farmhouse, Sandford Saint Martin, luxury Cotswolds rental, Oxfordshire countryside, Cotswolds without membership',
    heroSubtitle: 'Walks, villages, pubs — and your own pool, tennis court & hot tub',
    ogImage: `${PHOTO}/DJI_20260722215623_0226_D.jpg`,
    published: '2026-09-04',
    publishedDisplay: 'September 4, 2026',
    readTime: '6 min read',
  },
  'dog-friendly-cotswolds-holiday': {
    slug: 'dog-friendly-cotswolds-holiday',
    title: 'Dog-Friendly Cotswolds Holiday Guide | Pet-Friendly Luxury Rental',
    description:
      'Plan a dog-friendly Cotswolds break near Soho Farmhouse — best walks, pub gardens and an 8-bedroom luxury estate in Oxfordshire that welcomes up to 2 dogs.',
    keywords:
      'dog friendly Cotswolds, pet friendly luxury rental Cotswolds, Cotswolds holiday with dogs, Soho Farmhouse area walks, Oxfordshire dog friendly stays',
    h1: 'Dog-Friendly Cotswolds Holiday Guide',
    heroSubtitle: 'Walks, pub gardens and a luxury estate that welcomes your dogs',
    ogImage: `${PHOTO}/224A5345.jpg`,
    published: '2026-09-02',
    publishedDisplay: 'September 2, 2026',
    readTime: '5 min read',
  },
  'london-to-cotswolds-weekend': {
    slug: 'london-to-cotswolds-weekend',
    title: 'London to Cotswolds Weekend: 48-Hour Luxury Escape Guide',
    description:
      'Leave London Friday, swim in a heated pool by Saturday. A 48-hour luxury Cotswolds weekend itinerary from an 8-bedroom estate near Soho Farmhouse — pool, tennis & spa.',
    keywords:
      'Cotswolds weekend from London, luxury Cotswolds rental, short break Oxfordshire, Soho Farmhouse area, heated pool Cotswolds, M40 Cotswolds trip',
    h1: 'London to the Cotswolds: A 48-Hour Luxury Weekend',
    heroSubtitle: 'Leave the city Friday — pool, tennis & spa by Saturday',
    ogImage: `${PHOTO}/224A8292.jpg`,
    published: '2026-08-28',
    publishedDisplay: 'August 28, 2026',
    readTime: '6 min read',
  },
  'seasonal-activities': {
    slug: 'seasonal-activities',
    title: 'Seasonal Activities in the Cotswolds | Year-Round Travel Guide',
    description:
      'Spring wildflowers to winter fireside evenings — the best seasonal activities in the Cotswolds near Soho Farmhouse, from a luxury 8-bedroom estate in Sandford Saint Martin.',
    keywords:
      'seasonal activities Cotswolds, Cotswolds in spring summer autumn winter, things to do Cotswolds, luxury stay near Soho Farmhouse, Oxfordshire holidays',
    h1: 'Seasonal Activities in the Cotswolds',
    heroSubtitle: 'What to do in the Cotswolds every season — from our luxury estate',
    ogImage: `${PHOTO}/DJI_20260722213403_0216_D.jpg`,
    published: '2025-06-15',
    publishedDisplay: 'June 15, 2025',
    readTime: '5 min read',
  },
  'dining-experiences': {
    slug: 'dining-experiences',
    title: 'Best Restaurants Near Soho Farmhouse & the Cotswolds | Dining Guide',
    description:
      'Michelin-starred restaurants, gastropubs and farm shops near Soho Farmhouse — where to eat in the Cotswolds when staying at our luxury estate in Sandford Saint Martin.',
    keywords:
      'restaurants near Soho Farmhouse, Cotswolds fine dining, Cotswolds gastropubs, Wild Rabbit Kingham, Daylesford Organic, luxury Cotswolds dining',
    h1: 'Best Restaurants & Dining Near Soho Farmhouse',
    heroSubtitle: 'Fine dining, gastropubs and farm shops within easy reach of the estate',
    ogImage: `${PHOTO}/224A5417.jpg`,
    published: '2025-06-10',
    publishedDisplay: 'June 10, 2025',
    readTime: '4 min read',
  },
  'cotswolds-architecture': {
    slug: 'cotswolds-architecture',
    title: 'Cotswolds Architecture Guide: Honey-Stone History & Design',
    description:
      'Explore Cotswolds architecture — honey-coloured limestone, medieval wool churches, manor houses and the design details that define England\'s most beautiful villages.',
    keywords:
      'Cotswolds architecture, honey stone Cotswolds, Cotswold stone buildings, Cotswolds history, traditional English country houses, Oxfordshire villages',
    h1: 'Cotswolds Architecture: Honey-Stone History & Design',
    heroSubtitle: 'How wool, limestone and centuries of craft shaped the Cotswolds',
    ogImage: `${PHOTO}/DJI_20260720185020_0008_D.jpg`,
    published: '2025-06-05',
    publishedDisplay: 'June 5, 2025',
    readTime: '6 min read',
  },
  'activities-places-visit': {
    slug: 'activities-places-visit',
    title: 'Things to Do in the Cotswolds: Attractions & Day Trips Guide',
    description:
      'Blenheim Palace, Bibury, Bourton-on-the-Water, Daylesford and more — the best Cotswolds attractions and day trips from our luxury estate near Soho Farmhouse.',
    keywords:
      'things to do Cotswolds, Cotswolds attractions, Blenheim Palace day trip, Cotswolds villages to visit, activities near Soho Farmhouse, Oxfordshire day trips',
    h1: 'Things to Do in the Cotswolds: Attractions & Day Trips',
    heroSubtitle: 'Villages, palaces, markets and countryside — all within easy reach',
    ogImage: `${PHOTO}/224A5345.jpg`,
    published: '2025-05-28',
    publishedDisplay: 'May 28, 2025',
    readTime: '5 min read',
  },
  'perfect-estate-families': {
    slug: 'perfect-estate-families',
    title: 'Best Cotswolds Estate for Large Families | Sleeps 15 Guide',
    description:
      'Why our 8-bedroom Cotswolds estate is ideal for large family holidays — heated pool, tennis court, annex, step-free access and room for 15 guests near Soho Farmhouse.',
    keywords:
      'large family holiday Cotswolds, 8 bedroom Cotswolds rental, sleeps 15 Cotswolds, luxury estate families, Soho Farmhouse rental, multi-generational holiday UK',
    h1: 'Best Cotswolds Estate for Large Families',
    heroSubtitle: '8 bedrooms, heated pool, tennis & annex — room for the whole family',
    ogImage: `${PHOTO}/DJI_20260722215623_0226_D.jpg`,
    published: '2025-05-20',
    publishedDisplay: 'May 20, 2025',
    readTime: '5 min read',
  },
  'family-gathering': {
    slug: 'family-gathering',
    title: 'How to Plan a Cotswolds Family Reunion | Luxury Estate Guide',
    description:
      'Plan an unforgettable family reunion in the Cotswolds — bedrooms, meals, activities and logistics for groups of 6–15 at a private luxury estate near Soho Farmhouse.',
    keywords:
      'Cotswolds family reunion, family gathering luxury rental, large group holiday Cotswolds, estate near Soho Farmhouse, multi-gen family holiday Oxfordshire',
    h1: 'How to Plan a Cotswolds Family Reunion',
    heroSubtitle: 'Bedrooms, meals, activities & logistics for groups up to 15',
    ogImage: `${PHOTO}/DJI_20260722212904_0203_D.jpg`,
    published: '2025-05-15',
    publishedDisplay: 'May 15, 2025',
    readTime: '4 min read',
  },
};

export function getBlogSeo(slug: string): BlogSeoEntry {
  const entry = BLOG_SEO[slug];
  if (!entry) throw new Error(`Missing blog SEO config for slug: ${slug}`);
  return entry;
}

/** Display order on /cotswolds-blog (newest first) */
export const BLOG_INDEX_ORDER = [
  'soho-farmhouse-area-guide',
  'dog-friendly-cotswolds-holiday',
  'london-to-cotswolds-weekend',
  'seasonal-activities',
  'dining-experiences',
  'cotswolds-architecture',
  'activities-places-visit',
  'perfect-estate-families',
  'family-gathering',
] as const;

export function getBlogIndexPosts() {
  return BLOG_INDEX_ORDER.map((slug, index) => {
    const seo = getBlogSeo(slug);
    return {
      id: index + 1,
      title: seo.h1,
      excerpt: seo.heroSubtitle,
      image: seo.ogImage,
      date: seo.publishedDisplay,
      readTime: seo.readTime,
      slug: seo.slug,
    };
  });
}
