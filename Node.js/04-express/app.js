const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'page')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'about.html'))
})

app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'page', '404.html'))
})

app.listen(3000, () => console.log('Server running on port 3000'))