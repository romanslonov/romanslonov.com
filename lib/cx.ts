import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A wrapper around clsx that merges tailwind classes.
 */
export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}