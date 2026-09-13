import http from 'http'

const server = http.createServer((req, res) => {
  console.log('request')
})

server.listen(3000, 'localhost', () => {
  console.log('listening on port 3000')
})