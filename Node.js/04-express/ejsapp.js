import express from 'express'
import mongoose from 'mongoose'
import { router as blogRoutes } from './routes/blogRouters.js'
import { username, password } from './local.js'

const app = express()

const dbURI = `mongodb+srv://${username}:${password}@cluster0.nehwedc.mongodb.net/node-blog?retryWrites=true&w=majority`

async function connectDB() {
  try {
    await mongoose.connect(dbURI)
    console.log('DB connected')
    app.listen(3000, () => console.log('Server running on port 3000'))
  } catch (err) {
    console.log(err)
  }
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.use(blogRoutes)

app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})

connectDB()