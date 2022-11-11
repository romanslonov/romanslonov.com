import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

export const Navigation = () => {
  const { pathname } = useRouter();

  const isCurrentRouteActive = (path: string) =>
    path === '/' ? path === pathname : pathname.includes(path);

  const links = [
    { path: '/', name: 'Home' },
    { path: '/blog', name: 'Blog' },
  ];

  return (
    <nav css={tw`pt-4`}>
      <ul css={tw`flex items-center justify-center md:justify-start space-x-4`}>
        {links.map(({ path, name }) => (
          <li key={path}>
            <Link href={path}>
              <span
                css={[
                  tw`relative inline-flex items-center font-medium transition-colors duration-300 space-x-3`,
                  isCurrentRouteActive(path)
                    ? tw`after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-black text-black dark:after:bg-white dark:text-white`
                    : tw`hover:text-black dark:hover:text-white text-gray-500 dark:text-gray-400`,
                ]}
              >
                <span>{name}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
