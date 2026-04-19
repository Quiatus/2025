import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Post({ params }: Props) {
  const { slug } = await params

  return (
    <main>
      <h1>{slug}</h1>
      <Link href="../blog">Home</Link>
    </main>
  )
}
