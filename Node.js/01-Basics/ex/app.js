const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Home</title></head><body>')
    res.write('<h1>Welcome</h1>')
    res.write('<form action="/create-user" method="POST">')
    res.write('<input type="text" name="create-user"><button type="submit">Create</button>')
    res.write('</form>')
    res.write('<a href="/users">User list</a>')
    res.write('</body></html>')
    res.end()
  }

  if (url === '/users') {
    res.write('<html>')
    res.write('<head><title>Home</title></head><body>')
    res.write('<h1>Users</h1>')
    res.write('<ul>')
    res.write('<li>User 1</li>')
    res.write('<li>User 2</li>')
    res.write('<li>User 3</li>')
    res.write('</ul>')
    res.write('<a href="/">Home</a>')
    res.write('</body></html>')
    res.end()
  }

  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => body.push(chunk))

    return req.on('end', () => {
      const paresedBody = Buffer.concat(body).toString()
      const message = paresedBody.split('=')[1]
      console.log(message)
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    })
  }
})

server.listen(3000)