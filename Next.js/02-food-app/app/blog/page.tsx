import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <nav>
        <Link href="/blog/post-1">Post 1</Link>
        <Link href="/blog/post-2">Post 2</Link>
      </nav>
    </main>
  )
}
