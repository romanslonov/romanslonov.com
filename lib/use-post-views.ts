import useSwr from 'swr';
const API_URL = `/api/views`;

async function getPostViews(slug: string): Promise<{ views: number }> {
  const response = await fetch(`${API_URL}/${slug}`);

  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
}

async function updatePostViews(slug: string): Promise<{ views: number }> {
  const response = await fetch(`${API_URL}/${slug}`, { method: 'POST' });
  if (!response.ok) {
    throw new Error('An error occurred while posting the data.');
  }
  return response.json();
}

export function usePostViews(slug: string) {
  const { data: views, mutate } = useSwr([API_URL, slug], () =>
    getPostViews(slug).then((response) => response.views),
  );

  const increment = async () => {
    try {
      const response = await updatePostViews(slug);
      mutate(response.views);
    } catch (error) {}
  };

  return {
    views,
    increment,
  };
}
