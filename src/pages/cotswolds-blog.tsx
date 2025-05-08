import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Color scheme (same as luxury-retreat page)
const colors = {
  darkGreen: '#2c5e1a',
  lightGreen: '#5a9c48',
  black: '#000000',
  white: '#ffffff',
  offWhite: '#f5f5f7',
  lightGray: '#e0e0e0',
  darkGray: '#333333',
};

const headerStyles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: colors.offWhite,
    color: colors.darkGray,
    minHeight: '100vh',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${colors.lightGray}`,
    padding: '15px 0',
    position: 'sticky' as 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '50px',
    width: 'auto',
    marginRight: '15px',
  },
  logoText: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: colors.darkGreen,
    marginLeft: '10px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: '25px',
  },
  navLink: {
    fontSize: '1em',
    color: colors.darkGray,
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  blogHeader: {
    backgroundColor: colors.darkGreen,
    padding: '60px 20px',
    color: colors.white,
    textAlign: 'center' as const,
  },
  blogTitle: {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
  },
  blogSubtitle: {
    fontSize: '1.2em',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.5,
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
    gap: '30px',
  },
  featuredPost: {
    gridColumn: '1 / -1',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    backgroundColor: colors.white,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    marginBottom: '40px',
  },
  featuredImageContainer: {
    position: 'relative' as const,
    height: '400px',
  },
  featuredContent: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
  },
  featuredLabel: {
    color: colors.darkGreen,
    fontWeight: 'bold',
    fontSize: '0.9em',
    marginBottom: '15px',
  },
  featuredTitle: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.black,
  },
  featuredExcerpt: {
    fontSize: '1.1em',
    lineHeight: 1.6,
    color: colors.darkGray,
    marginBottom: '20px',
  },
  blogPostCard: {
    backgroundColor: colors.white,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  imageContainer: {
    position: 'relative' as const,
    height: '200px',
  },
  postContent: {
    padding: '20px',
  },
  postCategory: {
    color: colors.darkGreen,
    fontSize: '0.85em',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  postTitle: {
    fontSize: '1.4em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: colors.black,
  },
  postExcerpt: {
    fontSize: '1em',
    lineHeight: 1.5,
    color: colors.darkGray,
    marginBottom: '15px',
  },
  postFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `1px solid ${colors.lightGray}`,
    paddingTop: '15px',
    marginTop: '15px',
  },
  postDate: {
    fontSize: '0.85em',
    color: colors.darkGray,
  },
  readMore: {
    color: colors.darkGreen,
    fontWeight: 'bold',
    fontSize: '0.9em',
    textDecoration: 'none',
  },
  newsletterSection: {
    backgroundColor: colors.offWhite,
    padding: '40px',
    borderRadius: '12px',
    marginTop: '60px',
    textAlign: 'center' as const,
  },
  newsletterTitle: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.black,
  },
  newsletterText: {
    fontSize: '1.1em',
    maxWidth: '600px',
    margin: '0 auto 25px',
    color: colors.darkGray,
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  footer: {
    backgroundColor: colors.darkGreen,
    color: colors.white,
    padding: '60px 20px',
    textAlign: 'center' as const,
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerText: {
    fontSize: '0.9em',
    marginTop: '20px',
  },
};

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Experience the Charm of the Cotswolds: Your Ultimate Guide",
    excerpt: "Discover the timeless beauty and enchanting villages of the Cotswolds region. From stone cottages with thatched roofs to rolling hills, this guide highlights the must-visit spots and hidden gems.",
    image: "/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143723_0661_D.jpg",
    category: "TRAVEL GUIDE",
    readTime: "15 min read",
    date: "July 15, 2024",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Interior Design Tips Inspired by the Cotswolds",
    excerpt: "Learn how to bring the elegant countryside aesthetic of the Cotswolds into your own home with these design tips and styling ideas.",
    image: "/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg",
    category: "INTERIOR DESIGN",
    readTime: "12 min read",
    date: "July 10, 2024"
  },
  {
    id: 3,
    title: "Seasonal Delights: Experiencing the Cotswolds Throughout the Year",
    excerpt: "From spring blossoms to winter wonderlands, each season brings unique experiences to the Cotswolds. Plan your perfect seasonal getaway.",
    image: "/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143633_0658_D.jpg",
    category: "SEASONAL TRAVEL",
    readTime: "10 min read",
    date: "July 5, 2024"
  },
  {
    id: 4,
    title: "Culinary Journeys: The Best Local Food Experiences in the Cotswolds",
    excerpt: "Explore the rich culinary heritage of the Cotswolds, from traditional pubs serving classic dishes to award-winning restaurants showcasing local produce.",
    image: "/photos/listings/Cotswolds Luxury Retreat/224A5478.jpg",
    category: "FOOD & DINING",
    readTime: "8 min read",
    date: "June 28, 2024"
  },
  {
    id: 5,
    title: "Walking Trails and Nature Escapes in the Cotswolds",
    excerpt: "Lace up your boots and discover the most beautiful walking paths, nature reserves, and outdoor activities in the idyllic Cotswolds countryside.",
    image: "/photos/listings/Cotswolds Luxury Retreat/8596128-exterior21-800.jpg",
    category: "OUTDOOR ACTIVITIES",
    readTime: "14 min read",
    date: "June 20, 2024"
  },
  {
    id: 6,
    title: "The History and Heritage of the Cotswolds Region",
    excerpt: "Delve into the fascinating history of the Cotswolds, from Roman settlements to medieval wool trade and the architectural wonders that remain today.",
    image: "/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg",
    category: "HISTORY & CULTURE",
    readTime: "18 min read",
    date: "June 15, 2024"
  },
  {
    id: 7,
    title: "Planning the Perfect Cotswolds Wedding at Our Luxury Retreat",
    excerpt: "Create unforgettable memories with an intimate countryside wedding at our exclusive Cotswolds Estate. Tips and inspiration for your special day.",
    image: "/photos/listings/Cotswolds Luxury Retreat/224A5468.jpg",
    category: "WEDDINGS & EVENTS",
    readTime: "11 min read",
    date: "June 8, 2024"
  }
];

export default function CotswoldsBlog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div style={headerStyles.container}>
      <Head>
        <title>Blog | Cotswolds Estate</title>
        <meta
          name="description"
          content="Explore our blog for inspiration, travel tips, and insights about the beautiful Cotswolds region and our luxury estate."
        />
      </Head>

      <header style={headerStyles.header}>
        <nav style={headerStyles.nav}>
          <div style={headerStyles.logoContainer}>
            <Link href="/luxury-retreat">
              <Image 
                src="/photos/642ca4501534ebc86d037617_AceHost-Whistler-Logo.png" 
                alt="AceHost Logo" 
                width={120} 
                height={40} 
                style={{ height: 'auto', width: '120px' }}
              />
              <span style={headerStyles.logoText}>Cotswolds Estate</span>
            </Link>
          </div>
          <ul style={headerStyles.navList}>
            <li style={headerStyles.navItem}>
              <Link href="/luxury-retreat#home" style={headerStyles.navLink}>Home</Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link href="/luxury-retreat#about" style={headerStyles.navLink}>About</Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link href="/luxury-retreat#gallery" style={headerStyles.navLink}>Gallery</Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link href="/luxury-retreat#amenities" style={headerStyles.navLink}>Amenities</Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link href="/luxury-retreat#bedrooms" style={headerStyles.navLink}>Bedrooms</Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link href="/cotswolds-blog" style={{...headerStyles.navLink, color: colors.darkGreen, fontWeight: 'bold'}}>Blog</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div style={headerStyles.blogHeader}>
        <h1 style={headerStyles.blogTitle}>The Cotswolds Estate Blog</h1>
        <p style={headerStyles.blogSubtitle}>
          Discover the beauty, culture, and experiences of the Cotswolds region through our curated collection of articles and guides
        </p>
      </div>

      <main style={headerStyles.main}>
        <div style={headerStyles.blogGrid}>
          {featuredPost && (
            <div style={headerStyles.featuredPost}>
              <div style={headerStyles.featuredImageContainer}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div style={headerStyles.featuredContent}>
                <div>
                  <p style={headerStyles.featuredLabel}>FEATURED POST | {featuredPost.readTime}</p>
                  <h2 style={headerStyles.featuredTitle}>{featuredPost.title}</h2>
                  <p style={headerStyles.featuredExcerpt}>{featuredPost.excerpt}</p>
                </div>
                <div style={headerStyles.postFooter}>
                  <span style={headerStyles.postDate}>{featuredPost.date}</span>
                  <a href="#" style={headerStyles.readMore}>Read More →</a>
                </div>
              </div>
            </div>
          )}

          {regularPosts.map((post) => (
            <div key={post.id} style={headerStyles.blogPostCard}>
              <div style={headerStyles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={headerStyles.postContent}>
                <p style={headerStyles.postCategory}>{post.category} | {post.readTime}</p>
                <h2 style={headerStyles.postTitle}>{post.title}</h2>
                <p style={headerStyles.postExcerpt}>{post.excerpt}</p>
                <div style={headerStyles.postFooter}>
                  <span style={headerStyles.postDate}>{post.date}</span>
                  <a href="#" style={headerStyles.readMore}>Read More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={headerStyles.newsletterSection}>
          <h2 style={headerStyles.newsletterTitle}>Stay Connected</h2>
          <p style={headerStyles.newsletterText}>
            Follow us on social media for the latest updates, special offers, and inspiration for your Cotswolds getaway.
          </p>
          <div style={headerStyles.socialLinks}>
            <a href="#" style={{ color: colors.darkGreen }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" style={{ color: colors.darkGreen }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" style={{ color: colors.darkGreen }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <footer style={headerStyles.footer}>
        <div style={headerStyles.footerContainer}>
          <div>
            <Link href="/luxury-retreat" style={{ ...headerStyles.logoText, color: colors.white }}>
              Cotswolds Estate by AceHost
            </Link>
          </div>
          <p style={headerStyles.footerText}>
            &copy; 2025 Cotswolds Estate by AceHost. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 