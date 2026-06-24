/* eslint-disable @next/next/no-img-element */
import { NewsItem } from "../lib/news";
import Link from "next/link";

interface NewsListProps {
  news: NewsItem[];
}

export default function NewsList({news}: NewsListProps) {
  return <ul className='news-list'>
    {news.map((newsItem) => 
      (<li key={newsItem.id}>
        <Link href={`/news/${newsItem.slug}`}>
          <img 
            src={`/images/news/${newsItem.image}`} 
            alt={newsItem.title}/>
          <span>{newsItem.title}</span>
        </Link>
      </li>))}
  </ul>
}