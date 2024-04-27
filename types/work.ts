export type Work = {
  preview: {
    src: string;
    alt: string;
    align: 'left' | 'center';
  };
  name: string;
  description: string;
  url?: string;
  available: boolean;
};
