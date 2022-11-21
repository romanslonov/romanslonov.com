import { type Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import Image from 'next/image';
import tw from 'twin.macro';

import SEO from '../../components/SEO';
import { calculateReadingTime } from '../../libs/calculateReadingTime';

type Params = {
  params: {
    slug: string;
  };
};

type Props = {
  post: Post;
};

export default function SingleBlogPost({ post }: Props) {
  return (
    <>
      <SEO title={`${post.title} — Roman Slonov`} description={post.description} />
      <article className="pt-8 prose prose-p:text-gray-500 lg:prose-xl dark:prose-invert dark:prose-p:text-gray-400 prose-h1:mb-0 xl:prose-h1:mb-0">
        <h1>{post.title}</h1>
        <div css={tw`flex items-center justify-between`}>
          <div css={tw`flex items-center space-x-2 text-sm font-medium`}>
            <Image
              css={tw`flex-shrink-0 rounded-full dark:grayscale`}
              priority
              src="/avatar.jpg"
              width={40}
              height={40}
              sizes={'20vw'}
              alt="Profile picture"
            />
            <span>Roman Slonov</span>
            <span>&#x2022;</span>
            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            <span>&#x2022;</span>
            <span>{calculateReadingTime(post.body.raw)} min read</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
      </article>
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      post: allPosts.find((post) => post.slug === params?.slug),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
