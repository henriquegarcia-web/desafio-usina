const Genre = require('../models/genreModel')

const genreController = {
  async getAllGenres(req, res) {
    try {
      const genres = await Genre.getAllGenres()
      res.json(genres)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Erro ao obter gêneros.' })
    }
  }
}

module.exports = genreController
