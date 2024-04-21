'use client';

import { usePostLikes } from '@/lib/use-post-likes';
import { usePostViews } from '@/lib/use-post-views';
import { format } from 'date-fns';
import { useEffect } from 'react';

export default function PostStats({
  slug,
  publishedAt,
  interactable = false,
}: {
  slug: string;
  publishedAt: string;
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
    <div className="flex items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap text-sm text-neutral-500">
      <div className={'flex items-center gap-1 md:gap-2'}>
        <span className="whitespace-nowrap">
          {format(new Date(publishedAt), 'MMM d, YYY')}
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
