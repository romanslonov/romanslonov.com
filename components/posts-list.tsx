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
    <section className="max-w-3xl mx-auto">
      <h2 className="text-lg font-medium mb-4">Recent posts</h2>

      <ul className="divide-y dark:divide-white/10">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex sm:items-center flex-col sm:flex-row justify-between relative py-1.5"
          >
            <Link href={'/blog/' + post.slug} className="inline-block">
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
