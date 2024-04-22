import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '../utils';
import { CustomMDX } from '@/components/custom-mdx';
import PostStats from '@/components/post-stats';
import { Like } from '@/components/like';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  const { title, publishedAt: publishedTime, summary: description } = post.metadata;

  return {
    title: `${title} - Roman Slonov's Blog`,
    description,
    authors: { name: 'Roman Slonov', url: 'https://romanslonov.com' },
    openGraph: {
      title: title,
      description,
      type: 'article',
      publishedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function Page({ params }: Props) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      <article className="py-8 prose prose-p:text-neutral-600 prose-h1:leading-[42px] lg:prose-h1:leading-[56px] lg:prose-lg dark:prose-invert dark:prose-p:text-neutral-400 prose-h1:mb-4 xl:prose-h1:mb-4">
        <h1>{post.metadata.title}</h1>
        <PostStats
          publishedAt={post.metadata.publishedAt}
          slug={post.slug}
          interactable
        />
        <div>
          <CustomMDX source={post.content} />
        </div>
        <Like slug={post.slug} />
      </article>
    </>
  );
}
