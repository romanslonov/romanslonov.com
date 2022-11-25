import HeartSolid from '@heroicons/react/20/solid/HeartIcon';
import HeartOutline from '@heroicons/react/24/outline/HeartIcon';
import tw from 'twin.macro';

type Props = {
  isLoading: boolean;
  likes: number | undefined;
  isCurrentUserLike: boolean;
  action: () => void;
};

export default function LikeButton({
  isLoading,
  likes,
  isCurrentUserLike,
  action,
}: Props) {
  const LikeButtonActive = tw`text-white bg-green-500`;
  const LikeButtonDisabled = tw`text-neutral-600 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-700`;

  return (
    <button
      disabled={isLoading || isCurrentUserLike}
      onClick={action}
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
        {isCurrentUserLike ? (
          <HeartSolid width={20} height={20} />
        ) : (
          <HeartOutline width={20} height={20} />
        )}
      </span>
      <span>Likes</span>
      <span css={tw`opacity-75`}>{likes ?? '-'}</span>
    </button>
  );
}
