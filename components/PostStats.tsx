import ClockSolid from 'components/Icons/ClockSolid';
import EyeSolid from 'components/Icons/EyeSolid';
import HeartOutline from 'components/Icons/HeartOutline';
import HeartSolid from 'components/Icons/HeartSolid';
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
    <div css={tw`flex items-center space-x-2`}>
      <div css={tw`flex items-center space-x-1.5`}>
        <span css={tw`text-gray-500`}>
          <ClockSolid size={20} />
        </span>
        <span>{calculateReadingTime(post.body.raw)} min</span>
      </div>
      <div>&#x2022;</div>
      <div css={tw` flex items-center space-x-1.5`}>
        <span css={tw`text-gray-500`}>
          <EyeSolid size={20} />
        </span>
        <span>{views ?? '-'}</span>
      </div>
      <div>&#x2022;</div>
      <div>
        <button
          disabled={isLoading || isCurrentUserLike}
          onClick={() => like()}
          css={[
            tw`flex items-center px-2 py-2 space-x-1 font-medium rounded-md`,
            isLoading
              ? LikeButtonDisabled
              : isCurrentUserLike
              ? LikeButtonDisabled
              : LikeButtonActive,
          ]}
        >
          <span>
            {isCurrentUserLike ? <HeartSolid size={20} /> : <HeartOutline size={20} />}
          </span>
          <span>Likes</span>
          <span css={tw`opacity-75`}>{likes ?? '-'}</span>
        </button>
      </div>
    </div>
  );
}
