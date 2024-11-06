const Movie = require('../models/movieModel')

const movieController = {
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.getAllMovies(req.params.userId)
      res.json({ movies })
    } catch (error) {
      console.error('Erro ao obter todos os filmes:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao obter lista de filmes.'
      })
    }
  },

  async getMovieById(req, res) {
    try {
      const movie = await Movie.getMovieById(req.params.id)
      res.json({ movie })
    } catch (error) {
      console.error('Erro ao obter filme por ID:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao obter detalhes do filme.'
      })
    }
  },

  async createMovie(req, res) {
    const { title, genre, year, duration } = req.body
    try {
      const movie = await Movie.createMovie(title, genre, year, duration)
      res.json({ movie })
    } catch (error) {
      console.error('Erro ao criar filme:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao criar o filme.'
      })
    }
  },

  async updateMovie(req, res) {
    const { title, genre, year, duration } = req.body
    try {
      const movie = await Movie.updateMovie(
        req.params.id,
        title,
        genre,
        year,
        duration
      )
      res.json({ movie })
    } catch (error) {
      console.error('Erro ao atualizar filme:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao atualizar o filme.'
      })
    }
  },

  async deleteMovie(req, res) {
    try {
      const movie = await Movie.deleteMovie(req.params.id)
      res.json({ movie })
    } catch (error) {
      console.error('Erro ao deletar filme:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao deletar o filme.'
      })
    }
  },

  async getRecommendedMovies(req, res) {
    const { userId } = req.params
    try {
      const recommendedMovies = await Movie.getRecommendedMovies(userId)
      res.json({ recommendedMovies })
    } catch (error) {
      console.error('Erro ao obter filmes recomendados:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao obter filmes recomendados.'
      })
    }
  }
}

module.exports = movieController
