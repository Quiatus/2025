import { useEffect, useState, type ReactNode } from "react";
import BlogPosts, {type BlogPost} from "./components/BlogPosts";
import { get } from "./util/http";
import img from './assets/data-fetching.png'

type RawPostsData = {
  id: number;
  userId: number;
  title: string;
  body: string
}

function App() {
  const [posts, setPosts] = useState<BlogPost[]>()
  
  useEffect(() => {
    async function fetchPosts() {
      const data = await get('https://jsonplaceholder.typicode.com/posts') as RawPostsData[]

      const blogPosts: BlogPost[] = data.map(post => {
        return {
          id: post.id,
          title: post.title,
          text: post.body
        }
      })

      setPosts(blogPosts)
    }

    fetchPosts()
  }, [])

  let content: ReactNode

  if (posts) {
    content = <BlogPosts posts={posts}/>
  }
  return <main>
    <img src={img} alt="data" />
    {content}
  </main>;
}

export default App;
