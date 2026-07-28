import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/content';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    'An award-worthy interactive automotive workshop experience. Precision diagnostics, performance upgrades and expert care inside a cinematic digital showroom.',
  metadataBase: new URL('https://apex-performance.local'),
  openGraph: {
    title: `${site.fullName}`,
    description: 'Precision diagnostics, performance upgrades and expert automotive care.',
    images: ['/poster.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#050608',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
