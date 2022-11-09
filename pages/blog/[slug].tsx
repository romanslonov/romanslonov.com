import { useRouter } from 'next/router'

export default function BlogSlug() {
  const { query } = useRouter();

  console.log(query.slug)

  return (
    <>
      <h1>Blog page</h1>
      {/* <p>{query}</p> */}
    </>
  )
}