//const express = require('express')
import express from 'express'
import mongoose from 'mongoose'
import { Blog } from './models/blog.js'
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

app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs', async (req, res) => {
  try {
    const result = await Blog.find().sort({ createdAt: -1 })
    res.render('index', { title: 'All blogs', blogs: result })
  } catch (err) {
    console.log(err)
  }

})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' })
})

app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})

connectDB()

// app.use((req, res, next) => {
//   console.log('request made')
//   console.log('host: ', req.hostname)
//   console.log('path: ', req.path)
//   console.log('method: ', req.method)
//   next()
// })

// app.get('/add-blog', async (req, res) => {
//   const blog = new Blog({
//     title: 'New Blog',
//     snippet: 'About new blog',
//     body: 'text text text text'
//   })

//   try {
//     const result = await blog.save()
//     res.send(result)
//   } catch (err) {
//     console.log(err)
//   }
// })

// app.get('/all-blogs', async (req, res) => {
//   try {
//     const blogs = await Blog.find()
//     res.send(blogs)
//   } catch (err) {
//     console.log(err)
//   }
// })