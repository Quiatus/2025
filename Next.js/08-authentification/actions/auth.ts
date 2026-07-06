'use server'

import { AuthMode } from "@/components/auth-form";
import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export interface FormState {
  errors?: {
    email?: string;
    password?: string;
  }
}

export interface UserType {
  id: string;
  email: string;
  password: string;
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
    await createAuthSession(id)
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

export async function login(prevState: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return {
      errors: {
        email: 'Could not authenticate user, please try again.'
      }
    }
  }

  const isValidPassword = verifyPassword(existingUser.password, password)

  if (!isValidPassword) {
    return {
      errors: {
        password: 'Invalid password, please try again.'
      }
    }
  }

  await createAuthSession(existingUser.id)
  redirect('/training')
}

export async function auth(mode: AuthMode, prevState: FormState, formData: FormData) {
  if (mode === 'login') {
    return login(prevState, formData)
  } 

  return signup(prevState, formData)
}

export async function logout() {
  await destroySession()
  redirect('/')
}