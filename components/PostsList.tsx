import Link from 'next/link';
import tw from 'twin.macro';
import ArrowRightLongIcon from './Icons/ArrowRightLong';

export default function PostsList ({ posts }) {
  return (<section>
    <h2 css={tw`text-xl font-bold mb-4`}>Recent posts</h2>

    <ul css={tw`divide-y dark:divide-white/10`}>
      {posts.map((post) => (
        <li key={post.slug} className='group' css={tw`relative py-4`}>
          <Link href={'/blog/' + post.slug}>
            <h3 css={tw`font-medium`}>{post.title}</h3>
          </Link>
          <div css={tw`flex items-center font-mono text-sm text-gray-500 dark:text-gray-400 mt-1 space-x-2`}>
            {/* <span>{format(post.date, 'H')}</span> */}
            <span>&#x2022;</span>
            <span>3 minutes read</span>
          </div>

          <div css={tw`opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300 absolute top-1/2 right-4 -translate-y-1/2`}>
            <ArrowRightLongIcon css={tw`h-6 w-6`} />
          </div>
        </li>
      ))}
    </ul>
  </section>)
}