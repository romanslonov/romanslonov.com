'use client';

import CalendarDaysIcon from '@heroicons/react/20/solid/CalendarDaysIcon';
import ClockIcon from '@heroicons/react/20/solid/ClockIcon';
import EyeIcon from '@heroicons/react/20/solid/EyeIcon';
import HeartIcon from '@heroicons/react/20/solid/HeartIcon';
import LikeButton from '@/components/like-button';
import { type Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import { usePostLikes } from '@/lib/use-post-likes';
import { usePostViews } from '@/lib/use-post-views';
import { useEffect } from 'react';

export default function PostStats({
  post,
  interactable = false,
}: {
  post: Post;
  interactable?: boolean;
}) {
  const { views, increment: incrementViews } = usePostViews(post.slug);
  const {
    likes,
    isCurrentUserLike,
    isLoading,
    increment: like,
  } = usePostLikes(post.slug);

  useEffect(() => {
    if (interactable) {
      incrementViews();
    }
  }, [interactable]);

  return (
    <div className="flex items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap">
      <div className={'flex items-center gap-1 md:gap-2'}>
        <span className={'text-neutral-500'}>
          <CalendarDaysIcon width={20} height={20} />
        </span>
        <span className="whitespace-nowrap">
          {format(new Date(post.date), 'MMM d, YYY')}
        </span>
      </div>
      <div>&#x2022;</div>
      <div className={'flex items-center gap-1 md:gap-2'}>
        <span className={'text-neutral-500'}>
          <ClockIcon width={20} height={20} />
        </span>
        <span className="whitespace-nowrap">{post.readTime}</span>
      </div>
      <div>&#x2022;</div>
      <div className={'flex items-center gap-1 md:gap-2'}>
        <span className={'text-neutral-500'}>
          <EyeIcon width={20} height={20} />
        </span>
        <span className="whitespace-nowrap">{views ?? '-'} views</span>
      </div>
      <div>&#x2022;</div>
      {interactable ? (
        <div>
          <LikeButton
            isLoading={isLoading}
            likes={likes}
            isCurrentUserLike={isCurrentUserLike}
            action={() => like()}
          />
        </div>
      ) : (
        <div className={'flex items-center gap-1 md:gap-2'}>
          <span className={'text-neutral-500'}>
            <HeartIcon width={20} height={20} />
          </span>
          <span>{likes ?? '-'} likes</span>
        </div>
      )}
    </div>
  );
}
