import Link from 'next/link';
import PostStats from './post-stats';
import { getBlogPosts } from '@/app/blog/utils';
import { compareDesc } from 'date-fns';

export default function PostsList() {
  const posts = getBlogPosts().sort((a, b) => {
    return compareDesc(
      new Date(a.metadata.publishedAt),
      new Date(b.metadata.publishedAt),
    );
  });
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Recent posts</h2>

      <ul className="divide-y dark:divide-white/10">
        {posts.map((post) => (
          <li key={post.slug} className="flex items-center justify-between relative py-1">
            <Link href={'/blog/' + post.slug} className="inline-block mb-2">
              <h3 className="font-medium transition-colors duration-300 hover:text-green-500">
                {post.metadata.title}
              </h3>
            </Link>
            <PostStats publishedAt={post.metadata.publishedAt} slug={post.slug} />
          </li>
        ))}
      </ul>
    </section>
  );
}
