import PostStats from '@/components/post-stats';
import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export function generateStaticParams(): Array<Props['params']> {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = allPosts.find((post) => post.slug === params.slug)!;

  if (!post) notFound();

  const description =
    post.description.length > 200
      ? `${post.description.substring(0, 200)}...`
      : post.description;

  return {
    title: `${post.title} - Roman Slonov's Blog`,
    description,
    authors: { name: 'Roman Slonov', url: 'https://romanslonov.com' },
    openGraph: {
      title: post.title,
      description,
      // images: post.image,
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function Page({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <article className="pt-8 prose prose-p:text-neutral-500 lg:prose-lg dark:prose-invert dark:prose-p:text-neutral-400 prose-h1:mb-0 xl:prose-h1:mb-0">
        <h1>{post.title}</h1>
        <div className="flex items-center">
          <div className="lg:flex lg:items-center lg:justify-between w-full text-sm font-medium">
            <div className="flex items-center gap-3">
              <Image
                className="flex-shrink-0 rounded-full"
                priority
                src="/avatar.jpg"
                width={40}
                height={40}
                sizes={'20vw'}
                alt="Profile picture"
              />
              <span className="font-bold">Roman Slonov</span>
            </div>
            {<PostStats interactable={true} post={post} />}
          </div>
        </div>
        <div>
          <MDXContent />
        </div>
      </article>
    </>
  );
}
