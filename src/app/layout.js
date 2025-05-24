import './globals.css';

export const metadata = {
  title: 'InspireEdge AI - Recover More. Grow Smarter.',
  description:
    'Turn abandoned carts into new income streams with AI-powered recovery, predictive analytics, and ethical precision.',
  openGraph: {
    title: 'InspireEdge AI',
    description:
      'Turn abandoned carts into new income streams with AI-powered recovery.',
    url: 'https://inspireedge.ai',
    siteName: 'InspireEdge AI',
    images: [
      {
        url: 'https://inspireedge.ai/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InspireEdge AI Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InspireEdge AI',
    description:
      'Turn abandoned carts into new income streams with AI-powered recovery.',
    images: ['https://inspireedge.ai/images/twitter-image.jpg'],
  },
  metadataBase: new URL('https://inspireedge.ai'),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
