import HeartSolid from '@heroicons/react/20/solid/HeartIcon';
import HeartOutline from '@heroicons/react/24/outline/HeartIcon';
import { cva } from 'class-variance-authority';

type Props = {
  isLoading: boolean;
  likes: number | undefined;
  isCurrentUserLike: boolean | undefined;
  action: () => void;
};

const LikeButtonVarians = cva(
  'flex items-center px-2 py-2 space-x-1 font-medium rounded-md',
  {
    variants: {
      variant: {
        active: 'text-white bg-green-500',
        disabled:
          'text-neutral-600 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-700',
      },
    },
  },
);

export default function LikeButton({
  isLoading,
  likes,
  isCurrentUserLike,
  action,
}: Props) {
  return (
    <button
      disabled={isLoading || isCurrentUserLike}
      onClick={action}
      className={LikeButtonVarians({
        variant: isLoading || isCurrentUserLike ? 'disabled' : 'active',
      })}
    >
      <span>
        {isCurrentUserLike ? (
          <HeartSolid width={20} height={20} />
        ) : (
          <HeartOutline width={20} height={20} />
        )}
      </span>
      <span>Likes</span>
      <span className="opacity-75">{likes ?? '-'}</span>
    </button>
  );
}
