import PostsList from '@/components/posts-list';
import { type Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog — Roman Slonov',
  description: 'The place where I am sharing my thoughts, experience, knowledge.',
};

export default function Page() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div className="space-y-8 md:space-y-16">
      <header>
        <h1 className="mb-2 text-4xl font-bold">Blog</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          The place where I am sharing my thoughts, experience, knowledge.
        </p>
      </header>
      <PostsList posts={posts} />
    </div>
  );
}
