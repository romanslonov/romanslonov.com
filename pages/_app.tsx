import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import tw, { GlobalStyles } from 'twin.macro'
import { Navigation } from '../components/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main css={tw`max-w-3xl mx-auto space-y-8 p-4`}>
        <Navigation />
        <Component {...pageProps} />
      </main>
      <footer css={tw`py-8`}>
        <p css={tw`text-center text-gray-500`}>Made with Next.js, Mdxjs, Twin.micro and Tailwindcss.</p>
      </footer>
    </>
  )
}
