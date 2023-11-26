import { allPosts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import DribbbleIcon from '@/components/icons/dribbble';
import GithubIcon from '@/components/icons/github';
import XIcon from '@/components/icons/x';
import PostsList from '@/components/posts-list';
import WorksList from '@/components/works-list';

export default function Page() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <header className="pt-8 pb-16">
        <div className="flex flex-col items-center space-y-8 md:items-start md:flex-row md:justify-between md:space-y-0 md:space-x-8">
          <div className="order-2 md:order-1">
            <h1 className="mb-8 text-4xl font-bold text-center md:text-left">
              Frontend Developer &amp; <br /> UI/UX Designer
            </h1>
            <p className="mb-8 text-xl leading-8 text-center text-neutral-500 md:text-left dark:text-neutral-400">
              Hey there 👋 I am Roman. Last 6+ years I develop fast and convenient User
              Interfaces that people enjoy. Design system enthusiast.{' '}
              <a
                className="text-black dark:text-white hover:text-green-500 transition-colors duration-300 pb-0.5"
                href="mailto:hello@romanslonov.com"
              >
                Reach me out
              </a>
              .
            </p>
            <div className="flex justify-between">
              <ul className="flex items-center space-x-4">
                <li>
                  <a
                    title="Github"
                    className="transition-colors duration-300 hover:text-neutral-400"
                    href="https://github.com/romanslonov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Github</span>
                    <GithubIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a
                    title="Dribbble"
                    className="transition-colors duration-300 hover:text-[#ea4c89]"
                    href="https://dribbble.com/romanslonov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Dribbble</span>
                    <DribbbleIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a
                    title="X"
                    className="transition-colors duration-300 hover:text-neutral-400"
                    href="https://x.com/romanslonov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">X</span>
                    <XIcon width={20} height={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0 order-1 md:order-2">
            <Image
              className="flex-shrink-0 mb-4 rounded-full md:mb-0"
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
      <main className="space-y-16">
        <WorksList />
        <PostsList posts={posts} />
      </main>
    </>
  );
}
