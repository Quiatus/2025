const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'page')))

app.listen(3000, () => console.log('Server running'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile('./page/about.html', { root: __dirname})
})

app.get('/about-us', (req, res) => {
  res.redirect('/about', { root: __dirname})
})

app.use((req, res) => {
  res.status(404).sendFile('./page/404.html', { root: __dirname})
})
