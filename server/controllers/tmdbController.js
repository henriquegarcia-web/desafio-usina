const fetch = require('node-fetch')

const TMDB_API_URL =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=pt-BR&page=1'
const TMDB_API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmYzMmI0YzM3YzUwYTdkYjA0YjlkYzRjODQ5ZDUyMSIsIm5iZiI6MTczMDY1MzU0My4xMzMyMTcsInN1YiI6IjY3MjdhYzQ3YzBiYzA3NDlkMGQ4YTkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ck7qXihv4UwIWpGK-6ul3X5RGZJJYRzOgIitmgZYIZA'

exports.searchMovies = async (req, res) => {
  const { query } = req.query

  if (!query) {
    return res.status(400).json({
      code: 'PARAM_MISSING',
      message: 'Parâmetro de pesquisa "query" é obrigatório.'
    })
  }

  const url = `${TMDB_API_URL}&query=${encodeURIComponent(query)}`

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      res.json({ data: data.results })
    } else {
      res.status(response.status).json({
        code: response.status,
        message: data.status_message || 'Erro ao buscar dados do TMDb.'
      })
    }
  } catch (err) {
    console.error('Erro ao buscar dados do TMDb:', err)
    res.status(500).json({
      code: 'INTERNAL_ERROR',
      message: 'Erro interno ao buscar dados do TMDb.'
    })
  }
}
