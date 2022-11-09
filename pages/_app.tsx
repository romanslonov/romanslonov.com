import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import tw from 'twin.macro'
import { Navigation } from '../components/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main css={tw`max-w-3xl mx-auto space-y-8 p-4`}>
        <Navigation />
       <Component {...pageProps} />
    </main>
  )
}
