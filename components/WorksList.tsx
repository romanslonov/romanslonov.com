import LockClosedIcon from '@heroicons/react/20/solid/LockClosedIcon';
import Image from 'next/image';
import tw from 'twin.macro';
import type { Work } from 'types/work';

const items: Work[] = [
  {
    preview: {
      src: '/eonix_preview.webp',
      alt: 'Eonix preview',
    },
    name: 'Eonix',
    description: `&quot;From cloud hosting and dedicated servers to different hosting solutions, our
    brands deliver the tools and support that business owners need to fuel their
    online presence and reach customers everywhere around the globe.&quot;`,
    url: 'https://eonix.net',
    available: true,
  },
  {
    name: 'SimplyStack Cloud Platform',
    description: `&quot;Get flexible cloud computing services with powerful tools, scalable in seconds and nothing short of global coverage. Our network is reliable by design, built for thriving businesses and more.&quot;`,
    available: false,
  },
];

export const Item = ({ item: { name, description, url, preview } }: { item: Work }) => {
  return (
    <li
      css={tw`flex flex-col p-8 transition-colors duration-300 bg-neutral-100 hover:bg-neutral-200/75 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl`}
    >
      {preview ? (
        <Image
          src={preview.src}
          alt={preview.alt}
          width={300}
          height={200}
          sizes={'20vw'}
          priority
          css={tw`mb-4 border rounded-md`}
        ></Image>
      ) : (
        <div
          css={tw`flex items-center justify-center text-gray-600 dark:text-gray-100 h-[180px] bg-neutral-300/50 dark:bg-neutral-600 rounded-md mb-4`}
        >
          <LockClosedIcon width={20} height={20} />
        </div>
      )}
      <h3 css={tw`mb-2 text-xl font-bold`}>{name}</h3>
      <p
        css={tw`flex-1 mb-4 text-lg text-gray-500 dark:text-gray-400`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {url ? (
        <a
          css={tw`font-medium transition-colors duration-300 hover:text-green-500`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      ) : (
        <span css={tw`font-medium`}>Coming soon</span>
      )}
    </li>
  );
};

export default function WorksList() {
  return (
    <section>
      <h2 css={tw`mb-4 text-xl font-bold`}>Latest work</h2>

      <ul css={tw`grid gap-4 md:grid-cols-2`}>
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}
