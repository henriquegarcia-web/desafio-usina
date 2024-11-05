const Genre = require('../models/genreModel')

const genreController = {
  async getAllGenres(req, res) {
    try {
      const genres = await Genre.getAllGenres()
      res.status(200).json({
        data: genres,
        message: 'Gêneros obtidos com sucesso.'
      })
    } catch (error) {
      console.error('Erro ao obter gêneros:', error)
      res.status(500).json({
        error: {
          message: 'Erro ao obter gêneros.',
          code: 'GENRE_FETCH_ERROR'
        }
      })
    }
  }
}

module.exports = genreController
