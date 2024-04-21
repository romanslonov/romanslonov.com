'use client';

import { cn } from '@/lib/cn';
import { usePostLikes } from '@/lib/use-post-likes';
import HeartIcon from '@heroicons/react/20/solid/HeartIcon';

export function Like({ slug }: { slug: string }) {
  const { likes, isCurrentUserLike, isLoading, increment: like } = usePostLikes(slug);

  return (
    <div className="fixed bottom-4 left-[50%] p-0.5 bg-white dark:bg-neutral-900 dark:border-neutral-800 translate-x-[-50%] border shadow-xl font-medium text-sm rounded-full">
      <button
        type="button"
        disabled={isCurrentUserLike || isLoading}
        onClick={() => like()}
        className={cn(
          'flex items-center gap-1 rounded-full pl-2 pr-4 py-1.5',
          isCurrentUserLike ? '' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
        )}
      >
        <HeartIcon
          className={cn(
            'w-5 h-5',
            isCurrentUserLike ? 'text-red-500' : 'text-neutral-500 dark:text-neutral-400',
          )}
        />
        {isLoading ? '...' : likes ?? '-'}
        <div className="h-4 mx-1 w-px bg-neutral-300 dark:bg-neutral-700"></div>
        {isCurrentUserLike ? 'Thanks!' : 'This was helpful?'}
      </button>
    </div>
  );
}
