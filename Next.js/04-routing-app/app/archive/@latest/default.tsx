import NewsList from "@/app/components/news-list"
import { getLatestNews } from "@/app/lib/news"

export default function LatestNewsPage() {
  const latestNews = getLatestNews()
  return (
    <>
      <h2>Latest News page</h2>
      <NewsList news={latestNews}/>
    </>
  )
}
