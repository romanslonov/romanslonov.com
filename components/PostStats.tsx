import CalendarDaysIcon from '@heroicons/react/20/solid/CalendarDaysIcon';
import ClockIcon from '@heroicons/react/20/solid/ClockIcon';
import EyeIcon from '@heroicons/react/20/solid/EyeIcon';
import HeartIcon from '@heroicons/react/20/solid/HeartIcon';
import LikeButton from 'components/LikeButton';
import { type Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import { calculateReadingTime } from 'lib/calculateReadingTime';
import { usePostLikes } from 'lib/usePostLikes';
import { usePostViews } from 'lib/usePostViews';
import { useEffect } from 'react';
import tw from 'twin.macro';

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

  const Item = tw`flex items-center space-x-2`;
  const IconWrapper = tw`text-gray-500`;

  useEffect(() => {
    incrementViews();
  }, [post.slug]);

  return (
    <div css={tw`flex items-center space-x-3`}>
      <div css={Item}>
        <span css={IconWrapper}>
          <CalendarDaysIcon width={20} height={20} />
        </span>
        <span>{format(new Date(post.date), 'MMM d, YYY')}</span>
      </div>
      <div>&#x2022;</div>
      <div css={Item}>
        <span css={IconWrapper}>
          <ClockIcon width={20} height={20} />
        </span>
        <span>{calculateReadingTime(post.body.raw)} min</span>
      </div>
      <div>&#x2022;</div>
      <div css={Item}>
        <span css={IconWrapper}>
          <EyeIcon width={20} height={20} />
        </span>
        <span>{views ?? '-'} views</span>
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
        <div css={Item}>
          <span css={IconWrapper}>
            <HeartIcon width={20} height={20} />
          </span>
          <span>{likes ?? '-'} likes</span>
        </div>
      )}
    </div>
  );
}
