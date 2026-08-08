import type { Metadata, Viewport } from 'next';
import { Inter, Sora, Fraunces } from 'next/font/google';
import './globals.css';
import { site } from '@/data/siteContent';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const serif = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  variable: '--font-serif',
  display: 'swap',
});

const title = `${site.name} — Premium Pakistani Rice, Prepared for the World`;
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  keywords: [
    'Kamran Rice Mill',
    'Pakistani rice',
    'basmati rice exporter',
    'rice supplier Pakistan',
    'premium rice',
    'rice export',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title,
    description,
    locale: 'en_US',
    images: [{ url: site.logo, width: 586, height: 426, alt: `${site.name} logo` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [site.logo],
  },
  icons: { icon: '/icon.svg' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  slogan: site.tagline,
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
  },
  areaServed: 'Worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable}`}
    >
      <body className="antialiased">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
