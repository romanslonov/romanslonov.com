import ArrowLongRightIcon from '@heroicons/react/24/solid/ArrowLongRightIcon';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
import tw from 'twin.macro';

import PostStats from './PostStats';

type Props = {
  posts: Post[];
};

export default function PostsList({ posts }: Props) {
  return (
    <section>
      <h2 css={tw`text-xl font-bold`}>Recent posts</h2>

      <ul css={tw`divide-y dark:divide-white/10`}>
        {posts.map((post) => (
          <li key={post.slug} className="group" css={tw`relative py-4`}>
            <Link href={'/blog/' + post.slug} css={tw`inline-block mb-2`}>
              <h3
                css={tw`text-lg font-medium transition-colors duration-300 hover:text-green-500`}
              >
                {post.title}
              </h3>
            </Link>
            <PostStats post={post} />

            <div
              css={tw`opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300 absolute top-1/2 right-4 -translate-y-1/2`}
            >
              <ArrowLongRightIcon width={24} height={24} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
