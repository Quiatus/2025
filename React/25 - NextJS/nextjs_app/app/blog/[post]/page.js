export default async function BlogPost({ params }) {
  const { post } = await params

  return (
    <main>
      <h1>Blog post</h1>
      <p>{post}</p>
    </main>
  )
}
