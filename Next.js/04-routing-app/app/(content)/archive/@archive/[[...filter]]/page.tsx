import NewsList from "@/app/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/app/lib/news";
import Link from "next/link";
import { Suspense } from "react";

interface FilteredNewsProps {
  params: Promise<{ filter: string[] }>
}

interface FilterProps {
  year: string;
  month: string;
}

async function FilterHeader({year, month}: FilterProps) {
  const availableYears = await getAvailableNewsYears()
  let links = availableYears

  if (year && !availableYears.includes(year) || month && !getAvailableNewsMonths(year).includes(month)) {
    throw new Error('Invalid filter.')
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year)
  }

  if (year && month) {
    links = []
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

async function FilteredNews({year, month}: FilterProps) {
  let news
  
  if (year && !month) {
    news = await getNewsForYear(year)
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }

  let newsContent = <p>No news found.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news}/>
  }

  return newsContent
}

export default async function FilteredNewsPage({ params }: FilteredNewsProps) {
  const {filter} = await params
  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  return (
  <>
    <Suspense fallback={<p>Loading filter...</p>}>
      <FilterHeader year={selectedYear} month={selectedMonth}/>
    </Suspense>
    <Suspense fallback={<p>Loading news...</p>}>
      <FilteredNews year={selectedYear} month={selectedMonth}/>
    </Suspense>
  </>
  )
}
