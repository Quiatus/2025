import { UserType } from "@/actions/auth";
import db from "./db";

export function createUser(email: string, password: string) {
  const result = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run(email, password)
  return result.lastInsertRowid.toString()
}

export async function getUserByEmail(email: string): Promise< UserType | null> {
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as UserType
  return user || null
}