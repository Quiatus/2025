const fs = require('fs')

const requestHandler = (res, req) => {
  const url = req.url
  const method = req.method
  
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    return req.on('end', () => {
      const paresedBody = Buffer.concat(body).toString()
      const message = paresedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Node</title></head>')
  res.write('<body>test</body>')
  res.write('</head>')
  res.end()
}

exports.handler = requestHandler