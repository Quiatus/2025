import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation"

interface ImageProps {
  params: Promise<{ slug: string }>
}

export default async function ImagePage({ params }: ImageProps) {
  const { slug } = await params
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug)

  if (!newsItem) {
    notFound()
  }

  return <div className="fullscreen-image">
    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
  </div>
}