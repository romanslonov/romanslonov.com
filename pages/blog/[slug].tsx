import { useRouter } from 'next/router'
import tw from 'twin.macro';
import markdownToHtml from '../../libs/markdownToHtml';
import { getAllPosts, getPostBySlug } from '../../libs/posts';

type Params = {
  params: {
    slug: string;
  }
}

export default function BlogSlug({ post }) {
  const { query } = useRouter();

  console.log(query.slug)

  return (
    <article className='prose prose-p:text-gray-500 lg:prose-xl dark:prose-invert dark:prose-p:text-gray-400 pt-8'>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
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