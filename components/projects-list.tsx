import ArrowRightCircleIcon from '@heroicons/react/20/solid/ArrowRightCircleIcon';
import ClockIcon from '@heroicons/react/24/outline/ClockIcon';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import GithubIcon from '@/components/icons/github';

const items = [
  {
    preview: {
      src: '/webvirtcloud.svg',
      alt: 'WebVirtCloud preview',
    },
    name: 'WebVirtCloud',
    description: `Meet a modern and powerful all-in-one cloud management platform for your company & your clients.`,
    url: 'https://webvirt.cloud',
    source: 'https://github.com/orgs/webvirtcloud/repositories',
  },
  {
    preview: {
      src: '/unimark.svg',
      alt: 'Unimark preview',
    },
    name: 'Unimark',
    description: `Unimark makes it easy to manage all of your bookmarks. Use our cloud or as a self-hosted and own your data.`,
    url: 'https://unimark.app',
    source: 'https://github.com/unimarkapp/unimark.app',
  },
  {
    preview: {
      src: '/wishub.svg',
      alt: 'Wishub preview',
    },
    name: 'Wishub',
    description: `Wishub is a web application that helps you to create and manage your wishlists.`,
    url: 'https://wishub.app',
    source: 'https://github.com/romanslonov/wishub.app',
  },
] as const;

export function Item({
  item: { name, description, url, source, preview },
}: ComponentPropsWithoutRef<'li'> & { item: (typeof items)[number] }) {
  return (
    <li className="border dark:border-neutral-800 dark:bg-neutral-900/50 p-6 shadow-sm rounded-lg">
      <div className="flex items-center gap-3 mb-2">
        <Image
          src={preview?.src}
          width={32}
          height={32}
          className="mb-2"
          alt={preview.alt}
        />
        <h3 className="mb-2 text-lg font-medium">{name}</h3>
      </div>
      <p
        className="flex-1 mb-4 text-sm text-neutral-500 dark:text-neutral-400"
      >{description}</p>
      <div className="flex items-center justify-between">
        <a
          href={source}
          target="_blank"
          className="transition-colors border rounded-lg shadow-sm py-1.5 dark:border-neutral-700 dark:hover:bg-neutral-900 px-2 hover:bg-neutral-50 inline-flex text-xs font-medium items-center gap-2"
        >
          <GithubIcon className="w-4 h-4" />
          Source code
        </a>
        <a
          href={url}
          target="_blank"
          className="transition-colors inline-flex text-sm hover:bg-neutral-100 py-1.5 px-2 rounded-lg dark:hover:bg-neutral-800 font-medium items-center gap-2"
        >
          Visit website
          <ArrowRightCircleIcon className="w-4 h-4" />
        </a>
      </div>
    </li>
  );
}

export default function ProjectsList() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="mb-4 text-lg font-medium">Projects</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
        <li className="h-full flex flex-col gap-2 items-center py-8 shadow-sm justify-center w-full rounded-lg dark:border-neutral-700/70 border border-dashed">
          <ClockIcon className="w-6 h-6 text-neutral-500/50" />
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            More coming soon
          </p>
        </li>
      </ul>
    </section>
  );
}
