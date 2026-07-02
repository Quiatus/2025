'use client'

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';
import { Post as PostProps } from '@/types/types';
import { useOptimistic } from 'react';
import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';

interface PostComponentProps {
  post: PostProps;
  action: (postId: number) => Promise<void>;
}

function imageLoader({ src, quality }: ImageLoaderProps) {
  const urlStart = src.split('upload/')[0]
  const urlEnd = src.split('upload/')[1]
  const transformations = `w_200,q_${quality}`
  return `${urlStart}upload/${transformations}/${urlEnd}`
}

function Post({ post, action }: PostComponentProps) {
  return (
    <article className="post">
      <div className="post-image">
        <Image loader={imageLoader} src={post.imageUrl} fill alt={post.title} quality={80}/>
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={action.bind(null, post.id)} className={post.isLiked ? 'liked' : ''}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: { posts: PostProps[] }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId)

    if (updatedPostIndex === -1) {
      return prevPosts
    }

    const updatedPost = {...prevPosts[updatedPostIndex]}
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1)
    updatedPost.isLiked = !updatedPost.isLiked
    const newPosts = [...prevPosts]
    newPosts[updatedPostIndex] = updatedPost

    return newPosts
  })

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId: number) {
    updateOptimisticPosts(postId)
    await togglePostLikeStatus(postId)
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
