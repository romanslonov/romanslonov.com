import useSwr from 'swr';
const API_URL = `/api/views`;

async function getPostViews(slug: string): Promise<number> {
  const response = await fetch(`${API_URL}/${slug}`);

  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
}

async function updatePostViews(slug: string): Promise<number> {
  const response = await fetch(`${API_URL}/${slug}`, { method: 'POST' });
  if (!response.ok) {
    throw new Error('An error occurred while posting the data.');
  }
  return response.json();
}

export function usePostViews(slug: string) {
  const { data: views, mutate } = useSwr([API_URL, slug], () => getPostViews(slug));

  const increment = () => {
    mutate(updatePostViews(slug).catch(() => 0));
  };

  return {
    views,
    increment,
  };
}
