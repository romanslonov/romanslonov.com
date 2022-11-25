import PostStats from 'components/PostStats';
import SEO from 'components/SEO';
import { type Post, allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import tw from 'twin.macro';

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
        <div css={tw`flex items-center`}>
          <div css={tw`flex items-center justify-between w-full text-sm font-medium`}>
            <div css={tw`flex items-center space-x-2`}>
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
            </div>
            {<PostStats interactable={true} post={post} />}
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
