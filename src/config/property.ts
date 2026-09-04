/** Single source of truth — synced with Airbnb listing 1414129878809697902 */
export const AIRBNB_LINK =
  'https://www.airbnb.ca/rooms/1414129878809697902?unique_share_id=8b7f4d29-4ff8-40b6-a9a8-b839ce2f8975';

export const PROPERTY = {
  name: 'Cotswolds Luxury Retreat',
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
  tagline:
    '8-bedroom stone estate with heated pool, tennis court, spa & annex — minutes from Soho Farmhouse.',
  metaDescription:
    'Luxury 8-bedroom Cotswolds estate near Soho Farmhouse in Sandford Saint Martin. Heated pool, tennis court, hot tub, sauna, cold plunge & annex. Sleeps 15.',
  heroSubtitle:
    'Heated pool, private tennis court & outdoor spa — 8 bedrooms, 5 bathrooms, sleeps 15. Four minutes from Soho Farmhouse.',
} as const;

export const MAIN_HOUSE_BEDROOMS = [
  { name: 'Bedroom 1', type: 'Emperor King', features: 'Ensuite bathroom with spa amenities, luxurious linens', note: 'Main House — Master Suite' },
  { name: 'Bedroom 2', type: 'Super King', features: 'Ensuite bathroom, premium bedding', note: 'Main House' },
  { name: 'Bedroom 3', type: 'Super King', features: 'Shared bathroom access, countryside views', note: 'Main House' },
  { name: 'Bedroom 4', type: 'Double', features: 'Shared bathroom access, cozy retreat', note: 'Main House' },
  { name: 'Bedroom 5', type: 'California King', features: 'Shared bathroom access, charming space', note: 'Main House' },
  { name: 'Bedroom 6', type: 'Queen', features: 'Main-floor access with one step, shared bathroom nearby', note: 'Main House — main floor' },
] as const;

export const ANNEX_BEDROOMS = [
  { name: 'Bedroom 7', type: 'Super King', features: 'Private bathroom access, secluded annex retreat', note: 'Annex House — step-free access' },
  { name: 'Bedroom 8', type: 'Single', features: 'Shared bathroom in annex, comfortable single bed', note: 'Annex House — step-free access' },
] as const;
