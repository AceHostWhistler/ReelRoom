/** Single source of truth — synced with Airbnb listing 1414129878809697902 */
export const AIRBNB_LINK =
  'https://www.airbnb.ca/rooms/1414129878809697902?unique_share_id=8b7f4d29-4ff8-40b6-a9a8-b839ce2f8975';

export const PHOTO_BASE = '/photos/listings/Cotswolds Luxury Retreat';

export const PROPERTY = {
  name: 'Cotswolds Luxury Retreat',
  airbnbTitle: 'Luxury Cotswolds Estate Near Soho Farmhouse | Pool, Tennis & Spa',
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
    '8-bedroom stone estate with heated pool, tennis court, spa & annex — minutes from Soho Farmhouse.',
  metaDescription:
    'Luxury 8-bedroom Cotswolds estate near Soho Farmhouse in Sandford Saint Martin. Heated pool, tennis court, hot tub, sauna, cold plunge & annex. Sleeps 15. From £1,200/night.',
  heroSubtitle:
    'Pool, Tennis & Spa — 8 bedrooms, 5 bathrooms, sleeps 15. Four minutes from Soho Farmhouse.',
  petPolicy: 'Up to 2 dogs welcome (small fee — declare in guest count on Airbnb).',
  quietHours: 'Please keep spa and tennis court use between 8am and 10pm out of respect for neighbours.',
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
  'Spa and tennis court: 8am–10pm only',
  'BBQ available April 1 – October 30',
  'Up to 2 dogs welcome (fee applies — book via Airbnb)',
  'Annex offers step-free access for elderly guests or minimal stairs',
] as const;
