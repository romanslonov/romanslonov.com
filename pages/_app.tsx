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
      <div css={tw`flex flex-col min-h-screen`}>
        <GlobalStyles />
        <div css={tw`flex-1 w-full max-w-3xl p-4 mx-auto space-y-12`}>
          <Navigation />
          <Component {...pageProps} />
        </div>
        <footer css={tw`py-8`}>
          <p css={tw`text-center text-gray-500 dark:text-gray-400`}>
            Built with{' '}
            <a
              css={tw`hover:text-green-500`}
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </a>
            ,{' '}
            <a
              css={tw`hover:text-green-500`}
              href="https://github.com/ben-rogerson/twin.macro"
              target="_blank"
              rel="noreferrer"
            >
              Twin.micro
            </a>
            ,{' '}
            <a
              css={tw`hover:text-green-500`}
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind
            </a>{' '}
            and{' '}
            <a
              css={tw`hover:text-green-500`}
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
