import Navbar from '@/components/Home/Navbar';
import './globals.css';
import Providers from '@/components/Providers';

export const viewport = {
  themeColor: '#0f172a',
};

export const metadata = {
  title: 'InspireEdge AI - Smart eCommerce Growth & Cart Recovery',
  description:
    'Boost your eCommerce revenue with InspireEdge AI. Recover abandoned carts, optimize product performance, and automate growth using intelligent AI tools for Shopify, WooCommerce, Magento, and more.',
  keywords: [
    'eCommerce AI tools',
    'abandoned cart recovery',
    'Shopify cart abandonment',
    'WooCommerce recovery',
    'AI for online stores',
    'smart eCommerce automation',
    'predictive analytics',
    'cart abandonment emails',
    'conversion optimization',
    'retargeting automation',
    'AI growth tools',
    'product performance insights',
    'revenue optimization',
    'online store AI',
    'eCommerce retention tools',
  ],
  metadataBase: new URL('https://inspireedge.ai'),
  alternates: {
    canonical: 'https://inspireedge.ai',
  },
  openGraph: {
    title: 'InspireEdge AI - Smart eCommerce Growth',
    description:
      'Turn abandoned carts into revenue with InspireEdge AI. Smart automation for Shopify, WooCommerce, Magento, and custom platforms.',
    url: 'https://inspireedge.ai',
    siteName: 'InspireEdge AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://inspireedge.ai/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-driven cart recovery for eCommerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InspireEdge AI - AI Tools for eCommerce Growth',
    description:
      'Recover lost revenue from abandoned carts with InspireEdge AI for Shopify, WooCommerce, and more.',
    images: ['https://inspireedge.ai/images/twitter-image.jpg'],
    creator: '@inspireedge',
    site: '@inspireedge',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
    },
  },
  manifest: '/site.webmanifest',
  category: 'ecommerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
