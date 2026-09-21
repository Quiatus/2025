const express = require('express')

const app = express()

app.set('view engine', 'ejs')

// app.use((req, res, next) => {
//   console.log('request made')
//   console.log('host: ', req.hostname)
//   console.log('path: ', req.path)
//   console.log('method: ', req.method)
//   next()
// })

app.use(express.static('public'))

app.get('/', (req, res) => {
  const blogs = [
    { title: "Title A", snippet: "Lorem ipsum, dolor sit amet consectetur"},
    { title: "Title B", snippet: "Lorem ipsum, dolor sit amet consectetur"},
    { title: "Title C", snippet: "Lorem ipsum, dolor sit amet consectetur"},
  ]
  res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' })
})

app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})

app.listen(3000, () => console.log('Server running on port 3000'))