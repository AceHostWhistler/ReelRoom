/**
 * Permanent redirects for legacy vacation-rental routes that belong on
 * other domains. Keeps this site focused on Cotswolds content only.
 */
const VACATION_RENTALS_SITE = 'https://www.acehost.ca';
const LODGE_HOTEL_SITE = 'https://acecascade.ca';

const cascadeListingSlugs = [
  'mountain-view---top-floor',
  'mountain-view-rooms',
  'forest-view-cascade-room',
];

/** @type {import('next/dist/lib/load-custom-routes').Redirect[]} */
const legacyRedirects = [
  {
    source: '/properties',
    destination: `${VACATION_RENTALS_SITE}/properties`,
    permanent: true,
  },
  {
    source: '/properties/:path*',
    destination: `${VACATION_RENTALS_SITE}/properties/:path*`,
    permanent: true,
  },
  {
    source: '/list-property',
    destination: `${VACATION_RENTALS_SITE}/list-property`,
    permanent: true,
  },
  {
    source: '/list-with-us',
    destination: `${VACATION_RENTALS_SITE}/list-property`,
    permanent: true,
  },
  {
    source: '/concierge-service',
    destination: `${VACATION_RENTALS_SITE}/concierge-service`,
    permanent: true,
  },
  {
    source: '/our-story',
    destination: `${VACATION_RENTALS_SITE}/our-story`,
    permanent: true,
  },
  {
    source: '/faq',
    destination: `${VACATION_RENTALS_SITE}/faq`,
    permanent: true,
  },
  {
    source: '/blogs',
    destination: `${LODGE_HOTEL_SITE}/blogs`,
    permanent: true,
  },
  {
    source: '/blog-articles/:path*',
    destination: `${LODGE_HOTEL_SITE}/blog-articles/:path*`,
    permanent: true,
  },
  {
    source: '/listings',
    destination: `${LODGE_HOTEL_SITE}/listings`,
    permanent: true,
  },
  {
    source: '/post/:path*',
    destination: `${VACATION_RENTALS_SITE}/post/:path*`,
    permanent: true,
  },
  {
    source: '/contact',
    destination: '/',
    permanent: true,
  },
  {
    source: '/it',
    destination: '/',
    permanent: true,
  },
  {
    source: '/it/:path*',
    destination: '/:path*',
    permanent: true,
  },
  {
    source: '/fr',
    destination: '/',
    permanent: true,
  },
  {
    source: '/fr/:path*',
    destination: '/:path*',
    permanent: true,
  },
  {
    source: '/luxury-retreat',
    destination: '/',
    permanent: true,
  },
];

const cascadeListingRedirects = cascadeListingSlugs.map((slug) => ({
  source: `/listings/${slug}`,
  destination: `${LODGE_HOTEL_SITE}/listings/${slug}`,
  permanent: true,
}));

const vacationListingRedirect = {
  source: '/listings/:slug',
  destination: `${VACATION_RENTALS_SITE}/listings/:slug`,
  permanent: true,
};

module.exports = [
  ...legacyRedirects,
  ...cascadeListingRedirects,
  vacationListingRedirect,
];
