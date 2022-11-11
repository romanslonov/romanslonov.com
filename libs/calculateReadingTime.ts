export const calculateReadingTime = (text: string) => {
  const wpm = 265;
  const words = text.trim().split(/\s+/).length;
  
  return Math.ceil(words / wpm);
}