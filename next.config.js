/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // swcMinify is no longer needed in Next.js 15
  i18n: {
    ...i18n,
    localeDetection: false
  },
  // Configure sitemap generation
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/sitemap',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  
  // Redirect /properties to the home page to fix 404 errors from Google search results
  async redirects() {
    return [
      {
        source: '/properties',
        destination: '/',
        permanent: true, // 308 redirect - helps SEO by transferring link equity
      },
      {
        source: '/properties/:path*',
        destination: '/',
        permanent: true,
      }
    ];
  },
  
  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove the `X-Powered-By` header
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundles
  
  // Enable compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Cache and header optimizations
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          // Add Content Security Policy for improved security (important for SEO too)
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; frame-src 'self' https://www.youtube.com https://www.google.com; object-src 'none';"
          },
        ],
      },
      {
        // Cache static assets longer
        source: '/(images|photos|videos|favicons)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        // Cache fonts
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        // Cache optimized images
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
      {
        // Add proper headers for SEO files
        source: '/(sitemap.xml|robots.txt)',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
    ];
  },
  
  images: {
    // Enable image optimization for better performance
    unoptimized: false,
    // Set reasonable device sizes for responsive images
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048],
    // Set image sizes for the Image component
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configure image formats - prioritize WebP and AVIF for modern browsers
    formats: ['image/webp', 'image/avif'],
    // Decrease cache TTL for more frequent updates but with caching benefit
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    // Configure remote patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cotswoldsvacation.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cotswoldsvacation.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vumbnail.com',
        pathname: '/**',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Optimize font loading
  optimizeFonts: true,
  
  // Experimental features for better performance - using only stable options
  experimental: {
    // Improve page loading performance with stable option
    scrollRestoration: true,
  },
}

module.exports = nextConfig
