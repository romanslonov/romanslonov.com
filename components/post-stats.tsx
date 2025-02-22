'use client';

import { cn } from '@/lib/cn';
import { usePostLikes } from '@/lib/use-post-likes';
import { usePostViews } from '@/lib/use-post-views';
import { format } from 'date-fns';
import { useEffect } from 'react';

export default function PostStats({
  slug,
  publishedAt,
  className,
  interactable = false,
}: {
  slug: string;
  publishedAt: string;
  className?: string;
  interactable?: boolean;
}) {
  const { views, increment: incrementViews } = usePostViews(slug);
  const { likes, isCurrentUserLike, isLoading, increment: like } = usePostLikes(slug);

  useEffect(() => {
    if (interactable) {
      incrementViews();
    }
  }, [interactable]);

  return (
    <div
      className={cn(
        'flex items-center font-mono tracking-tight text-xs gap-2 md:gap-3 flex-wrap md:flex-nowrap text-neutral-600 dark:text-neutral-400',
        className,
      )}
    >
      <div className={'flex items-center gap-1 md:gap-2'}>
        <span className="whitespace-nowrap">
          {format(new Date(publishedAt), 'MMM d, yyy')}
        </span>
      </div>
      <div>&#x2022;</div>
      <div className={'flex items-center gap-1 md:gap-2'}>
        <span className="whitespace-nowrap">{views ?? '-'} views</span>
      </div>
      <div>&#x2022;</div>
      <div className={'flex items-center gap-1 md:gap-2'}>
        <span>{likes ?? '-'} likes</span>
      </div>
    </div>
  );
}
