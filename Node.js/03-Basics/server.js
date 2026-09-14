import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  res.setHeader('Content_type', 'text/html')
  
  fs.readFile('./page/home.html', (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })

})

server.listen(3000, 'localhost', () => {
  console.log('listening on port 3000')
})