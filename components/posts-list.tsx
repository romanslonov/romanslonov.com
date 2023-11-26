import ArrowLongRightIcon from '@heroicons/react/24/solid/ArrowLongRightIcon';
import Link from 'next/link';
import { type Post } from 'contentlayer/generated';

import PostStats from './post-stats';

type Props = {
  posts: Post[];
};

export default function PostsList({ posts }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold">Recent posts</h2>

      <ul className="divide-y dark:divide-white/10">
        {posts.map((post) => (
          <li key={post.slug} className="group relative py-4">
            <Link href={'/blog/' + post.slug} className="inline-block mb-2">
              <h3 className="text-lg font-medium transition-colors duration-300 hover:text-green-500">
                {post.title}
              </h3>
            </Link>
            <PostStats post={post} />

            <div className="opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300 absolute top-1/2 right-4 -translate-y-1/2">
              <ArrowLongRightIcon width={24} height={24} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
