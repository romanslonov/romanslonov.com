import 'prism-themes/themes/prism-dracula.css';
import '../styles/tailwind.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import tw, { GlobalStyles } from 'twin.macro';

import { Navigation } from '../components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DX2039QKDD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DX2039QKDD');
        `}
      </Script>
      <div css={tw`min-h-screen flex flex-col`}>
        <GlobalStyles />
        <main css={tw`flex-1 w-full max-w-3xl mx-auto space-y-8 p-4`}>
          <Navigation />
          <Component {...pageProps} />
        </main>
        <footer css={tw`py-8`}>
          <p css={tw`text-center text-gray-500 dark:text-gray-400`}>
            Made with Next.js, Twin.micro and Tailwindcss.
          </p>
        </footer>
      </div>
    </>
  );
}
