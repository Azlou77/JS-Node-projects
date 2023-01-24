const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer()

server.on('request', (req, res) => {
  if (req.url === '/' && req.method === 'POST') {
    res.writeHead(201, { 'Content-Type': 'application/json' })
    fs.writeFile('data.json', JSON.stringify({ message: 'hello' }), err => {
      console.log(err)
    })
    res.write(JSON.stringify({ message: 'hello' }))
  } else {
    res.write(req.url)
  }
  res.end()
})

server.listen(1234, () => {
  console.log('Listening on port 1234')
})