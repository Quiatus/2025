'use server'

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

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

  const hashedPassword = hashUserPassword(password)

  try {
    const id = createUser(email, hashedPassword)
    createAuthSession(id)
    redirect('/training')
  } catch (error) {
    const dbError = error as { code?: string }

    if (dbError.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'This account already exists.'
        }
      }
    }

    throw error
  }
} 