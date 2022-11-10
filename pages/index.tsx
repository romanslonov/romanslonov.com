import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import ArrowRightLongIcon from '../components/Icons/ArrowRightLong'
import DribbbleIcon from '../components/Icons/Dribbble'
import GithubIcon from '../components/Icons/Github'
import TwitterIcon from '../components/Icons/Twitter'
import Spotify from '../components/Spotify/Spotify'

export default function Home() {
  return (
    <>
      <Head>
        <title>Roman Slonov</title>
        <meta name="description" content="Frontend UI/UX Designer at ServerHub" />
        <meta property="og:title" content="Roman Slonov" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Frontend UI/UX Designer at ServerHub" />
        <meta property="twitter:title" content="Roman Slonov" />
        <meta property="twitter:description" content="Frontend UI/UX Designer at ServerHub" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='group' css={tw`py-16`}>
        <div css={tw`flex flex-col items-center md:items-start md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8`}>
          <div css={tw`order-2 md:order-1`}>
            <h1 css={tw`text-center md:text-left text-4xl font-bold mb-8`}>Frontend &amp; <br/> UI/UX Designer</h1>
            <p css={tw`text-center md:text-left text-xl leading-8 text-gray-500 mb-8`}>Hey there 👋, I am Roman Slonov. Last 6+ years I develop fast and convenient User Interfaces that people enjoy. Design system enthusiast.</p>
            <div css={tw`flex justify-between`}>
              <ul css={tw`flex items-center space-x-4`}>
                <li>
                  <a title='Github' css={tw`hover:text-[#1d9bf0]`} href='https://github.com/romanslonov' target='_blank' rel="noreferrer">
                    <span css={tw`sr-only`}>Github</span>
                    <GithubIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a title='Dribbble' css={tw`transition-colors duration-300 hover:text-[#ea4c89]`} href='https://dribbble.com/romanslonov' target='_blank' rel="noreferrer">
                    <span css={tw`sr-only`}>Dribbble</span>
                    <DribbbleIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a title='Twitter' css={tw`transition-colors duration-300 hover:text-[#1d9bf0]`} href='https://twitter.com/romanslonov' target='_blank' rel="noreferrer">
                    <span css={tw`sr-only`}>Twitter</span>
                    <TwitterIcon width={20} height={20} />
                  </a>
                </li>
              </ul>

              <Spotify />
            </div>
          </div>
          <div css={tw`order-1 md:order-2 flex-shrink-0`}>
            <Image css={tw`flex-shrink-0 rounded-full grayscale group-hover:grayscale-0 mb-4 md:mb-0`} priority src='/avatar.jpg' width={120} height={120} sizes={'20vw'} alt='Profile picture' />
          </div>
        </div>

        
      </header>

      <section>
        <h2 css={tw`text-xl font-bold mb-4`}>Recent posts</h2>

        <ul css={tw`divide-y`}>
          <li className='group' css={tw`relative py-4`}>
            <Link href="/">
              <h3 css={tw`font-medium`}>Minimal CMS in few minutes using Nuxt.js</h3>
            </Link>
            <div css={tw`flex items-center font-mono text-sm text-gray-500 mt-1 space-x-2`}>
              <span>Nov 10, 2022</span>
              <span>&#x2022;</span>
              <span>3 minutes read</span>
            </div>

            <div css={tw`opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300 absolute top-1/2 right-4 -translate-y-1/2`}>
              <ArrowRightLongIcon css={tw`h-6 w-6`} />
            </div>
          </li>
          <li className='group' css={tw`relative py-4`}>
            <Link href="/">
              <h3 css={tw`font-medium`}>The best way to manage modals in Vue.js</h3>
            </Link>
            <div css={tw`flex items-center font-mono text-sm text-gray-500 mt-1 space-x-2`}>
              <span>Nov 10, 2022</span>
              <span>&#x2022;</span>
              <span>8 minutes read</span>
            </div>

            <div css={tw`opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300 absolute top-1/2 right-4 -translate-y-1/2`}>
              <ArrowRightLongIcon css={tw`h-6 w-6`} />
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
