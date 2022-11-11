import 'prism-themes/themes/prism-dracula.css'
import '../styles/tailwind.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import tw, { GlobalStyles } from 'twin.macro'
import { Navigation } from '../components/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>  
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={tw`min-h-screen flex flex-col`}>
        <GlobalStyles />
        <main css={tw`flex-1 w-full max-w-3xl mx-auto space-y-8 p-4`}>
          <Navigation />
          <Component {...pageProps} />
        </main>
        <footer css={tw`py-8`}>
          <p css={tw`text-center text-gray-500`}>Made with Next.js, Mdxjs, Twin.micro and Tailwindcss.</p>
        </footer>
      </div>
    </>
  )
}
