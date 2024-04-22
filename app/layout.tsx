import './globals.css';
import GoogleAnalytics from '@/app/google-analytics';
import UmamiAnalytics from './umami-analytics';
import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { Navigation } from '@/app/navigation';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  title: 'Roman Slonov',
  description: 'Frontend Developer & Designer',
  authors: { name: 'Roman Slonov', url: baseUrl },
  robots: 'index, follow',
  openGraph: {
    title: 'Roman Slonov',
    description: 'Frontend Developer & Designer',
    siteName: 'Roman Slonov',
    locale: 'en_US',
    type: 'website',
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Roman Slonov',
      },
    ],
  },
};

export default function Layout({ children, ...props }: PropsWithChildren) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;
  return (
    <html lang="en" className="scroll-smooth">
      {gaTrackingId ? <GoogleAnalytics gaTrackingId={gaTrackingId} /> : null}
      {umamiId ? <UmamiAnalytics umamiId={umamiId} /> : null}
      <body className="flex min-h-screen flex-col overflow-x-hidden animate-blurred-fade-in">
        <div className="flex-1 w-full max-w-3xl p-4 mx-auto space-y-12">
          <Navigation />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
