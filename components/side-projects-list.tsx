import { cx } from '@/lib/cx';
import LockClosedIcon from '@heroicons/react/20/solid/LockClosedIcon';
import Image from 'next/image';
import { type ComponentPropsWithoutRef } from 'react';
import type { Work } from 'types/work';

const items: Work[] = [
  {
    preview: {
      src: '/wishub_preview.webp',
      alt: 'Wishub preview',
      align: 'center',
    },
    name: 'Wishub',
    description: `Wishub is a web application that helps you to create and manage your wishlists. It's a place where you can store all your wishes and share them with your friends and family.`,
    url: 'https://wishub.app',
    available: true,
  },
  {
    preview: {
      src: '/unimark_preview.webp',
      alt: 'Unimark preview',
      align: 'left',
    },
    name: 'Unimark',
    description: `Unimark makes it easy to manage all of your bookmarks. Use our cloud or as a self-hosted and own your data.`,
    url: 'https://unimark.app',
    available: true,
  },
];

export function WorkItem({
  item: { name, description, url, preview },
}: ComponentPropsWithoutRef<'li'> & { item: Work }) {
  return (
    <li className="flex flex-col p-4 transition-colors duration-300 bg-neutral-100 dark:bg-neutral-800/60 rounded-xl">
      {preview ? (
        <Image
          src={preview.src}
          alt={preview.alt}
          width={600}
          height={400}
          sizes={'20vw'}
          priority
          className={cx([
            'mb-4 h-[200px] object-cover rounded-md',
            preview.align === 'left' && 'object-left',
            preview.align === 'center' && 'object-center',
          ])}
        ></Image>
      ) : (
        <div className="flex items-center justify-center dark:text-neutral-500 h-[200px] bg-neutral-300/50 dark:bg-neutral-800 rounded-md mb-4">
          <LockClosedIcon width={20} height={20} />
        </div>
      )}
      <h3 className="mb-2 text-xl font-bold">{name}</h3>
      <p
        className="flex-1 mb-4 text-neutral-500 dark:text-neutral-500"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {url ? (
        <a
          className="font-medium transition-colors text-center bg-neutral-200 dark:bg-neutral-800 py-4 rounded-lg duration-300 hover:text-green-500"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      ) : (
        <span className="font-medium text-center py-4 rounded-lg bg-neutral-300/30 dark:bg-neutral-800/40 dark:text-neutral-500">
          Coming soon
        </span>
      )}
    </li>
  );
}

export default function SideProjectsList() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">Side projects</h2>

      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <WorkItem key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}
