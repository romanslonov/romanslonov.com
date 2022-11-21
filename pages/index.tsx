import { type Post, allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import tw from 'twin.macro';

import DribbbleIcon from '../components/Icons/Dribbble';
import GithubIcon from '../components/Icons/Github';
import TwitterIcon from '../components/Icons/Twitter';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import WorksList from '../components/WorksList';

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <>
      <SEO title="Roman Slonov" description="Frontend UI/UX Designer at ServerHub" />
      <header css={tw`pt-8 pb-16`}>
        <div
          css={tw`flex flex-col items-center space-y-8 md:items-start md:flex-row md:justify-between md:space-y-0 md:space-x-8`}
        >
          <div css={tw`order-2 md:order-1`}>
            <h1 css={tw`mb-8 text-4xl font-bold text-center md:text-left`}>
              Frontend &amp; <br /> UI/UX Designer
            </h1>
            <p
              css={tw`mb-8 text-xl leading-8 text-center text-gray-500 md:text-left dark:text-gray-400`}
            >
              Hey there 👋 I am Roman. Last 6+ years I develop fast and convenient User
              Interfaces that people enjoy. Design system enthusiast.{' '}
              <a
                css={tw`text-black dark:text-white hover:text-green-500 transition-colors duration-300 pb-0.5`}
                href="mailto:hello@romanslonov.com"
              >
                Reach me out
              </a>
              .
            </p>
            <div css={tw`flex justify-between`}>
              <ul css={tw`flex items-center space-x-4`}>
                <li>
                  <a
                    title="Github"
                    css={tw`transition-colors duration-300 hover:text-gray-400`}
                    href="https://github.com/romanslonov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span css={tw`sr-only`}>Github</span>
                    <GithubIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a
                    title="Dribbble"
                    css={tw`transition-colors duration-300 hover:text-[#ea4c89]`}
                    href="https://dribbble.com/romanslonov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span css={tw`sr-only`}>Dribbble</span>
                    <DribbbleIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a
                    title="Twitter"
                    css={tw`transition-colors duration-300 hover:text-[#1d9bf0]`}
                    href="https://twitter.com/romanslonov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span css={tw`sr-only`}>Twitter</span>
                    <TwitterIcon width={20} height={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div css={tw`flex-shrink-0 order-1 md:order-2`}>
            <Image
              css={tw`flex-shrink-0 mb-4 rounded-full dark:grayscale md:mb-0`}
              priority
              src="/avatar.jpg"
              width={120}
              height={120}
              sizes={'20vw'}
              alt="Profile picture"
            />
          </div>
        </div>
      </header>
      <main css={tw`space-y-16`}>
        <WorksList />
        <PostsList posts={posts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
      }),
    },
  };
}
