import { useRouter } from 'next/router'

export default function Blog() {
  const { query } = useRouter();

  console.log(query.slug)

  return (
    <>
      <h1>Blog list</h1>
      {/* <p>{query}</p> */}
    </>
  )
}