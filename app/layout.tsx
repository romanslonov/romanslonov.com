import '@/styles/globals.css';
import GoogleAnalytics from '@/app/google-analytics';
import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { Navigation } from '@/app/navigation';

export const metadata: Metadata = {
  title: 'Roman Slonov',
  description: 'Frontend UI/UX Designer at ServerHub',
  authors: { name: 'Roman Slonov', url: 'https://romanslonov.com' },
  themeColor: { color: '#000', media: '(prefers-color-scheme: dark)' },
  robots: 'index, follow',
};

export default function Layout({ children, ...props }: PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <GoogleAnalytics gaTrackingId={'G-DX2039QKDD'} />
      ) : null}
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <div className="flex-1 w-full max-w-3xl p-4 mx-auto space-y-12">
          <Navigation />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
