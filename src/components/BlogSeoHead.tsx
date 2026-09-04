import Head from 'next/head';
import { PROPERTY } from '../config/property';
import { BlogSeoEntry } from '../config/blogSeo';

type BlogSeoHeadProps = {
  seo: BlogSeoEntry;
};

export function BlogSeoHead({ seo }: BlogSeoHeadProps) {
  const canonical = `${PROPERTY.siteUrl}/blog-posts/${seo.slug}`;
  const ogImage = `${PROPERTY.siteUrl}${encodeURI(seo.ogImage)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: seo.h1,
    description: seo.description,
    image: ogImage,
    datePublished: seo.published,
    author: {
      '@type': 'Organization',
      name: 'Cotswolds Vacation',
      url: PROPERTY.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cotswolds Vacation',
      url: PROPERTY.siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.h1} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Cotswolds Vacation" />
      <meta property="og:locale" content="en_GB" />
      <meta property="article:published_time" content={seo.published} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.h1} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="preconnect" href={PROPERTY.siteUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
