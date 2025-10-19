import './globals.css';
import GoogleAnalytics from '@/app/google-analytics';
import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { Navigation } from '@/app/navigation';
import { baseUrl } from './sitemap';
import Script from 'next/script';

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

export default function Layout({ children }: PropsWithChildren) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="en" className="scroll-smooth">
      {gaTrackingId ? <GoogleAnalytics gaTrackingId={gaTrackingId} /> : null}
      <Script
        strategy="afterInteractive"
        src="https://cdn.seline.com/seline.js"
        data-token="c488e1ef3c14571"
      />
      <body className="flex min-h-screen flex-col overflow-x-hidden animate-blurred-fade-in">
        {/* max-w-3xl */}
        <div className="flex-1 w-full p-4 mx-auto space-y-12">
          <Navigation />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
