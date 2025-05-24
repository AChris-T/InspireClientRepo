'use client';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SEO({ title, description, image, type = 'website' }) {
  const pathname = usePathname();
  const baseUrl = 'https://inspireedge.ai';
  const [canonicalUrl, setCanonicalUrl] = useState(baseUrl);

  useEffect(() => {
    if (pathname) {
      setCanonicalUrl(`${baseUrl}${pathname}`);
    }
  }, [pathname]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InspireEdge AI',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description:
      'AI-powered recovery solutions for abandoned carts and smart business growth',
    sameAs: [
      'https://linkedin.com/company/inspireedge',
      'https://twitter.com/inspireedge',
    ],
  };

  return (
    <Head>
      <title>{title || 'InspireEdge AI - Recover More. Grow Smarter.'}</title>
      <meta
        name="description"
        content={
          description ||
          'Turn abandoned carts into new income streams with AI-powered recovery, predictive analytics, and ethical precision.'
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={image || `${baseUrl}/images/og-image.jpg`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image || `${baseUrl}/images/twitter-image.jpg`}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
