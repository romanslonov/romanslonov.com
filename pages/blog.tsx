import { useRouter } from 'next/router'
import PostsList from '../components/PostsList';
import { getAllPosts } from '../libs/posts';

export default function Blog({ posts }) {
  const { query } = useRouter();

  console.log(query.slug)

  return (
    <>
      <PostsList posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
  ]);

  return {
    props: {
      posts,
    },
  }
}