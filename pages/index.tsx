import Head from 'next/head'
import Image from 'next/image'
import tw from 'twin.macro'
import DribbbleIcon from '../components/Icons/Dribbble'
import GithubIcon from '../components/Icons/Github'
import TwitterIcon from '../components/Icons/Twitter'
import Spotify from '../components/Spotify/Spotify'
import { getAllPosts } from '../libs/posts'
import PostsList from '../components/PostsList'
import type { Post } from '../types/post';

type Props = {
  posts: Post[],
}

export default function Home({ posts }: Props) {
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

      <header css={tw`py-16`}>
        <div css={tw`flex flex-col items-center md:items-start md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8`}>
          <div css={tw`order-2 md:order-1`}>
            <h1 css={tw`text-center md:text-left text-4xl font-bold mb-8`}>Frontend &amp; <br/> UI/UX Designer</h1>
            <p css={tw`text-center md:text-left text-xl leading-8 text-gray-500 dark:text-gray-400 mb-8`}>Hey there 👋, I am Roman. Last 6+ years I develop fast and convenient User Interfaces that people enjoy. Design system enthusiast.</p>
            <div css={tw`flex justify-between`}>
              <ul css={tw`flex items-center space-x-4`}>
                <li>
                  <a title='Github' css={tw`transition-colors duration-300 hover:text-gray-400`} href='https://github.com/romanslonov' target='_blank' rel="noreferrer">
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
            <Image css={tw`flex-shrink-0 rounded-full dark:grayscale mb-4 md:mb-0`} priority src='/avatar.jpg' width={120} height={120} sizes={'20vw'} alt='Profile picture' />
          </div>
        </div>

        
      </header>

      <PostsList posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
  ]);

  return {
    props: {
      posts,
    },
  }
}