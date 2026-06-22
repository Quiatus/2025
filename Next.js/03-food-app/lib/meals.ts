import sql from 'better-sqlite3'
import { Meal, FormMeal } from '@/types/meal'
import { rndchar } from './utils'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql('meals.db')

export async function getMeals(): Promise<Meal[]> {
  await new Promise((res) => setTimeout(res, 500))
  return db.prepare('SELECT * FROM meals').all() as Meal[]
}

export function getMeal(slug: string): Meal | undefined {
  return db.prepare('select * FROM meals WHERE slug = ?').get(slug) as Meal | undefined
}

export async function saveMeal(meal: FormMeal) {
  const slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop()
  const fileName = `${slug}-${rndchar()}.${extension}`
  const bufferedImage = await meal.image.arrayBuffer()

  const stream = fs.createWriteStream(`public/images/${fileName}`)

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Unable to save image!')
    }
  })

  const dbRecord = {
    ...meal,
    slug: slug,
    image: `/images/${fileName}`
  }

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(dbRecord)
}