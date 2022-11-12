export type Work = {
  preview?: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  url?: string;
  available: boolean;
};
