'use client';

import { cn } from 'lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  const isCurrentRouteActive = (path: string) =>
    path === '/' ? path === pathname : pathname?.includes(path);

  const links = [
    { path: '/', name: 'Home' },
    { path: '/blog', name: 'Blog' },
  ];

  return (
    <nav className="flex items-center justify-between gap-4 pt-4">
      <ul className="flex items-center gap-4">
        {links.map(({ path, name }) => (
          <li key={path}>
            <Link href={path}>
              <span
                className={cn(
                  'relative inline-flex items-center font-medium transition-colors duration-300 space-x-3',
                  [
                    isCurrentRouteActive(path)
                      ? 'after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-black text-black dark:after:bg-white dark:text-white'
                      : 'hover:text-black dark:hover:text-white text-neutral-500 dark:text-neutral-400',
                  ],
                )}
              >
                <span>{name}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <a
            className="text-black dark:text-white font-medium hover:text-green-500 transition-colors duration-300 pb-0.5"
            href="mailto:hello@romanslonov.com"
          >
            hello@romanslonov.com
          </a>
        </li>
      </ul>
    </nav>
  );
};
