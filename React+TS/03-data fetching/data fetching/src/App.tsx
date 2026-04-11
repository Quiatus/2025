import { useEffect, useState, type ReactNode } from "react";
import BlogPosts, {type BlogPost} from "./components/BlogPosts";
import { get } from "./util/http";
import img from './assets/data-fetching.png'
import ErrorMessage from "./components/ErrorMessage";

type RawPostsData = {
  id: number;
  userId: number;
  title: string;
  body: string
}

function App() {
  const [posts, setPosts] = useState<BlogPost[]>()
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState<string>()
  
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      try {
        const data = await get('https://jsonplaceholder.typicode.com/posts') as RawPostsData[]
  
        const blogPosts: BlogPost[] = data.map(post => {
          return {
            id: post.id,
            title: post.title,
            text: post.body
          }
        })
        setPosts(blogPosts)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }

      setIsFetching(false)
    }

    fetchPosts()
  }, [])

  let content: ReactNode

  if (error) {
    content = <ErrorMessage text={error}/>
  }

  if (posts) {
    content = <BlogPosts posts={posts}/>
  }

  if (isFetching) {
    content = <p id="loading-fallback">Loading...</p>
  }

  return <main>
    <img src={img} alt="data" />
    {content}
  </main>;
}

export default App;
