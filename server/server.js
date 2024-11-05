const http = require('http')

const app = require('./app')
const PORT = process.env.PORT || 3000

function testGenresRoute() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/genres',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const req = http.request(options, (res) => {
    let data = ''

    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      console.log('Retorno de /api/genres:', JSON.parse(data))
    })
  })

  req.on('error', (error) => {
    console.error('Erro na requisição de debug:', error)
  })

  req.end()
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)

  // testGenresRoute()
})
