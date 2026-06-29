'use server'

import { uploadImage } from "@/lib/cloudinary";
import { storePost } from "@/lib/posts"
import { redirect } from "next/navigation"

export type FormState = {
  errors?: string[];
};

export async function createPost(prevState: FormState, formData: FormData): Promise<FormState> {
  const title = formData.get('title') as string
  const image = formData.get('image') as File
  const content = formData.get('content') as string

  const errors: string[] = []

  if (!title || title.trim().length === 0) {
    errors.push('Title is required')
  }

  if (!content || content.trim().length === 0) {
    errors.push('Content is required')
  }

  if (!image || image.size === 0) {
    errors.push('Image is required')
  }

  if (errors.length > 0) {
    return { errors }
  }

  let imageUrl

  try {
    imageUrl = await uploadImage(image)
  } catch (err) {
    throw new Error('Image upload failed, please try again later')
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  })

  redirect('/feed')
}