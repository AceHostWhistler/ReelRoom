/** Single source of truth — synced with Airbnb listing 1414129878809697902 */
export const AIRBNB_LINK =
  'https://www.airbnb.ca/rooms/1414129878809697902?unique_share_id=8b7f4d29-4ff8-40b6-a9a8-b839ce2f8975';

export const PHOTO_BASE = '/photos/listings/Cotswolds Luxury Retreat';

export const PROPERTY = {
  name: 'Cotswolds Luxury Retreat',
  /** Exact title from the Airbnb listing */
  airbnbTitle: 'Luxury Retreat Near Soho Farmhouse | Pool & Tennis',
  location: 'Sandford Saint Martin',
  region: 'Oxfordshire',
  country: 'United Kingdom',
  rating: 4.94,
  bedrooms: 8,
  beds: 8,
  bathrooms: 5,
  maxGuests: 15,
  mainHouseBedrooms: 6,
  annexBedrooms: 2,
  acres: 2,
  sohoFarmhouseDrive: '4 minutes by car',
  sohoFarmhouseWalk: '30-minute walk via a private trail',
  siteUrl: 'https://www.cotswoldsvacation.com',
  priceRange: '£1,200–£3,100 per night',
  minStay: '2–3 night minimum',
  tagline:
    'Luxury retreat near Soho Farmhouse with outdoor spa, heated pool, hot tub, A/C, tennis court & annex — sleeps 15.',
  metaDescription:
    'Luxury Retreat Near Soho Farmhouse | Pool & Tennis. 8-bedroom estate in Sandford Saint Martin with outdoor spa, heated pool, hot tub, sauna, cold plunge, private tennis court & cozy annex. Sleeps 15.',
  /** Browser tab title — primary keywords first, under ~60 characters */
  pageTitle: 'Luxury Cotswolds Rental Near Soho Farmhouse | Pool & Tennis',
  /** One sentence under the H1 — location + property type for SEO and guests */
  heroIntro:
    'Private 8-bedroom luxury vacation rental in Sandford Saint Martin, Oxfordshire — 4 minutes from Soho Farmhouse. Sleeps up to 15.',
  heroSubtitle:
    'Outdoor spa, heated pool & hot tub · A/C · Private tennis court · Cozy annex — 8 bedrooms, 8 beds, 5 baths, sleeps 15',
  aboutHeading: 'Luxury Cotswolds Estate Near Soho Farmhouse',
  /** Opening description — matches Airbnb listing copy */
  airbnbIntro:
    'Escape to a stunning estate near Soho Farmhouse, offering a luxurious retreat with an outdoor spa & heated pool/hot tub, A/C, private tennis court, and cozy annex for additional sleeping. This beautiful house is spread across several acres, features 8 bedrooms, a gourmet kitchen, multiple living areas, and 5 bathrooms. Enjoy the hot tub, infrared sauna, cold plunge, pool, & outdoor fire pit.',
  airbnbIntroClosing:
    'Perfect for families or groups seeking a peaceful Cotswolds getaway in a prestigious, rural setting.',
  guestAccess:
    'No noise or use of spa or tennis court after 10 pm, or before 8 am. For elderly guests, our annex home is step free, located right next to the main home and tennis court, and has 2 full bedrooms and 1 bathroom with a shower — a great option for those looking for step-free access.',
  otherNotes:
    'Perfect getaway for a family or group of 6 to 12 people total, with the option to sleep up to 15 guests.',
  petPolicy: 'We welcome a maximum of 2 dogs for a small fee. Please declare in the guest count on Airbnb.',
  quietHours:
    'No noise or use of spa or tennis court after 10 pm, or before 8 am.',
} as const;

export const MAIN_HOUSE_BEDROOMS = [
  { name: 'Bedroom 1', type: 'Emperor King', features: 'Ensuite bathroom with spa amenities, luxurious linens', note: 'Main House — Master Suite', image: `${PHOTO_BASE}/224A5405.jpg` },
  { name: 'Bedroom 2', type: 'Super King', features: 'Ensuite bathroom, premium bedding', note: 'Main House', image: `${PHOTO_BASE}/224A5410.jpg` },
  { name: 'Bedroom 3', type: 'Super King', features: 'Shared bathroom access, countryside views', note: 'Main House', image: `${PHOTO_BASE}/224A5417.jpg` },
  { name: 'Bedroom 4', type: 'Double', features: 'Shared bathroom access, cozy retreat', note: 'Main House', image: `${PHOTO_BASE}/224A5423.jpg` },
  { name: 'Bedroom 5', type: 'California King', features: 'Shared bathroom access, charming space', note: 'Main House', image: `${PHOTO_BASE}/224A8416.jpg` },
  { name: 'Bedroom 6', type: 'Queen', features: 'Main-floor access with one step, shared bathroom nearby', note: 'Main House — main floor', image: `${PHOTO_BASE}/224A8456.jpg` },
] as const;

export const ANNEX_BEDROOMS = [
  { name: 'Bedroom 7', type: 'Super King', features: 'Private bathroom access, secluded annex retreat', note: 'Annex House — step-free access', image: `${PHOTO_BASE}/224A8480.jpg` },
  { name: 'Bedroom 8', type: 'Single', features: 'Shared bathroom in annex, comfortable single bed', note: 'Annex House — step-free access', image: `${PHOTO_BASE}/224A8473.jpg` },
] as const;

export const HOUSE_RULES = [
  'Spa and tennis court: 8am–10pm only (no noise before 8am or after 10pm)',
  'BBQ available April 1 – October 30',
  'Up to 2 dogs welcome (small fee — declare in guest count on Airbnb)',
  'Annex offers step-free access for elderly guests or minimal stairs',
] as const;
