import tw from 'twin.macro';
import PostsList from '../components/PostsList';
import { getAllPosts } from '../libs/posts';
import type { Post } from '../types/post';

type Props = {
  posts: Post[],
}

export default function Blog({ posts }: Props) {
  return (
    <>
      <header>
        <h1 css={tw`font-bold text-4xl mb-2`}>Blog</h1>
        <p css={tw`text-gray-500 dark:text-gray-400`}>The place where I am sharing my thoughts, experience, etc.</p>  
      </header>
      <PostsList posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
  ]);

  return {
    props: {
      posts,
    },
  }
}