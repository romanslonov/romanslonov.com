import Image from 'next/image';
import PostsList from '@/components/posts-list';
import WorksList from '@/components/works-list';
import SideProjectsList from '@/components/side-projects-list';
import { SocialLinks } from '@/components/social-links';
import { ReactIcon } from '@/components/icons/react';
import { VueIcon } from '@/components/icons/vue';
import { NextjsIcon } from '@/components/icons/nextjs';
import { RemixIcon } from '@/components/icons/remix';
import { TypescriptIcon } from '@/components/icons/ts';
import { Badge } from '@/components/badge';

export default function Page() {
  return (
    <>
      <header className="pt-8 pb-16">
        <div className="relative mb-16 inline-block">
          <Image
            className="flex-shrink-0 mb-4 rounded-lg md:mb-0"
            priority
            src="/avatar.jpg"
            width={100}
            height={100}
            sizes={'20vw'}
            alt="Profile picture"
          />
          <div className="absolute right-[-160px] bottom-[-2px] flex items-center gap-2">
            <span className="relative flex w-5 h-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex border-4 dark:border-black border-white rounded-full w-5 h-5 bg-green-500"></span>
            </span>
            <p className="whitespace-nowrap font-medium text-sm">
              Available for part-time
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8 md:items-start md:flex-row md:justify-between md:space-y-0 md:space-x-8">
          <div className="order-2 md:order-1">
            <h1 className="mb-2 text-2xl font-bold">Frontend Developer &amp; Designer</h1>
            <p className="mb-8 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              Hi 👋 I am Roman. I am building web applications using{' '}
              <Badge>
                <ReactIcon height={12} width={12} /> React
              </Badge>
              ,{' '}
              <Badge>
                <VueIcon height={12} width={12} /> Vue
              </Badge>
              ,{' '}
              <Badge>
                <NextjsIcon height={12} width={12} /> Nextjs
              </Badge>{' '}
              ,{' '}
              <Badge>
                <RemixIcon height={12} width={12} /> Remix
              </Badge>{' '}
              and{' '}
              <Badge>
                <TypescriptIcon height={12} width={12} /> Typescript
              </Badge>
              . Connect with me for collaboration, part-time job, or just say hi.{' '}
              <a
                className="text-black dark:text-white font-medium hover:text-green-500 transition-colors duration-300 pb-0.5"
                href="mailto:hello@romanslonov.com"
              >
                hello@romanslonov.com
              </a>
              .
            </p>
            <SocialLinks />
          </div>
        </div>
      </header>
      <main className="space-y-16 pb-16">
        <SideProjectsList />
        <WorksList />
        <PostsList />
      </main>
    </>
  );
}
