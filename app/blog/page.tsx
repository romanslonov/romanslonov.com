import PostsList from '@/components/posts-list';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Roman Slonov',
  description: 'The place where I am sharing my thoughts, experience, knowledge.',
};

export default function Page() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto md:space-y-16">
      <header>
        <h1 className="mb-2 text-2xl font-bold">Blog</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          The place where I am sharing my thoughts, experience, knowledge.
        </p>
      </header>
      <PostsList />
    </div>
  );
}
