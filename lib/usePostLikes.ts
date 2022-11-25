import useSWR from 'swr';

type Payload = {
  likes: number;
  isCurrentUserLiked: boolean;
};

const API_URL = `/api/likes`;

async function getPostLikes(slug: string): Promise<Payload> {
  const response = await fetch(`${API_URL}/${slug}`);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
}

async function updatePostLikes(slug: string): Promise<Payload> {
  const response = await fetch(`${API_URL}/${slug}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('An error occurred while posting the data.');
  }

  return response.json();
}

export function usePostLikes(slug: string) {
  const { data, error, mutate } = useSWR([API_URL, slug], () => getPostLikes(slug), {
    dedupingInterval: 5000,
  });

  const increment = () => {
    if (!data || data.isCurrentUserLiked) return;

    mutate({ likes: data.likes + 1, isCurrentUserLiked: true }, false);

    updatePostLikes(slug);
  };

  return {
    isLoading: !error && !data,
    isCurrentUserLike: data?.isCurrentUserLiked,
    likes: data?.likes,
    increment,
  };
}
