import NewsList from "@/app/components/news-list"
import { getNewsForYear } from "@/app/lib/news";

interface FilteredNewsPageProps {
  params: Promise<{ year: string }>; 
}

export default async function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const { year } = await params
  //const newsYear = params.year
  const news = getNewsForYear(year)
  return <NewsList news={news} />
}
