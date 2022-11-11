import Image from 'next/image';
import { format } from 'date-fns';
import tw from 'twin.macro';
import markdownToHtml from '../../libs/markdownToHtml';
import { getAllPosts, getPostBySlug } from '../../libs/posts';
import { calculateReadingTime } from '../../libs/calculateReadingTime';
import type { Post } from '../../types/post';

type Params = {
  params: {
    slug: string;
  }
}

type Props = {
  post: Post,
}

export default function BlogSlug({ post }: Props) {
  return (
    <article className='prose prose-h1:mb-0 xl:prose-h1:mb-0 prose-p:text-gray-500 lg:prose-xl dark:prose-invert dark:prose-p:text-gray-400 pt-8'>
      <h1>{post.title}</h1>
      <div css={tw`flex items-center justify-between`}>
        <div css={tw`flex items-center text-sm font-medium space-x-2`}>
          <Image css={tw`flex-shrink-0 rounded-full dark:grayscale`} priority src='/avatar.jpg' width={40} height={40} sizes={'20vw'} alt='Profile picture' />
          <span>Roman Slonov</span>
          <span>&#x2022;</span>
          <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
          <span>&#x2022;</span>
          <span>{calculateReadingTime(post.content)} min read</span>
        </div>
      </div>
      {post.html && <div dangerouslySetInnerHTML={{ __html: post.html }}></div>}
    </article>
  )
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'description',
    'content',
  ])
  const html = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post as Post,
        html,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}