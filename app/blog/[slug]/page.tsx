import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '../utils';
import { CustomMDX } from '@/components/custom-mdx';
import PostStats from '@/components/post-stats';
import { Like } from '@/components/like';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
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
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      <article className="py-8 mx-auto max-w-screen-md">
        <h1 className="text-2xl font-bold mb-2">{post.metadata.title}</h1>
        <PostStats
          publishedAt={post.metadata.publishedAt}
          slug={post.slug}
          interactable
          className="mb-6"
        />
        <CustomMDX source={post.content} />
        <Like slug={post.slug} />
      </article>
    </>
  );
}
