'use server'

import { createUser } from "@/lib/user";

export interface FormState {
  errors?: {
    email?: string;
    password?: string;
  }
}

export async function signup(prevState: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const errors: FormState['errors'] = {}

  if (!email.includes('@')) {
    errors.email = 'Please enter a valid email.'
  }

  if (password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters long.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    }
  }

  createUser(email, password)

  return { errors: {}}
} 