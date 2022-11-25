import CalendarDaysIcon from '@heroicons/react/20/solid/CalendarDaysIcon';
import ClockIcon from '@heroicons/react/20/solid/ClockIcon';
import EyeIcon from '@heroicons/react/20/solid/EyeIcon';
import HeartIcon from '@heroicons/react/20/solid/HeartIcon';
import { type Post } from 'contentlayer/generated';
import { calculateReadingTime } from 'lib/calculateReadingTime';
import { usePostLikes } from 'lib/usePostLikes';
import { usePostViews } from 'lib/usePostViews';
import { useEffect } from 'react';
import tw from 'twin.macro';

export default function PostStats({ post }: { post: Post }) {
  const { views, increment: incrementViews } = usePostViews(post.slug);
  const {
    likes,
    isCurrentUserLike,
    isLoading,
    increment: like,
  } = usePostLikes(post.slug);

  useEffect(() => {
    incrementViews();
  }, [post.slug]);

  const LikeButtonActive = tw`text-white bg-green-500`;
  const LikeButtonDisabled = tw`text-neutral-600 bg-neutral-200`;

  return (
          <CalendarDaysIcon width={20} height={20} />
        </span>
        <span>{calculateReadingTime(post.body.raw)} min</span>
      </div>
      <div>&#x2022;</div>
      <div css={tw` flex items-center space-x-1.5`}>
        <span css={tw`text-gray-500`}>
          <EyeIcon width={20} height={20} />
        </span>
        <span>{views ?? '-'}</span>
      </div>
      <div>&#x2022;</div>
      <div>
            <HeartIcon width={20} height={20} />
          </span>
          <span>Likes</span>
          <span css={tw`opacity-75`}>{likes ?? '-'}</span>
        </button>
      </div>
    </div>
  );
}
