import { type Post, allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import tw from 'twin.macro';

import PostsList from '../components/PostsList';
import SEO from '../components/SEO';

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <>
      <SEO
        title="Blog — Roman Slonov"
        description="The place where I am sharing my thoughts, experience, knowledge."
      />
      <header>
        <h1 css={tw`mb-2 text-4xl font-bold`}>Blog</h1>
        <p css={tw`text-gray-500 dark:text-gray-400`}>
          The place where I am sharing my thoughts, experience, knowledge.
        </p>
      </header>
      <PostsList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
      }),
    },
  };
}
