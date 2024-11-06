const Movie = require('../models/movieModel')

const movieController = {
  async getAllMovies(req, res) {
    try {
      const userId = req.params.userId
      const filters = {
        searchTerm: req.query.searchTerm || null,
        genre: req.query.genre || null,
        year: req.query.year ? parseInt(req.query.year) : null,
        minDuration: req.query.minDuration
          ? parseInt(req.query.minDuration)
          : null,
        maxDuration: req.query.maxDuration
          ? parseInt(req.query.maxDuration)
          : null
      }
      const movies = await Movie.getAllMovies(userId, filters)
      res.json(movies)
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
      const movie = await Movie.getMovieById(req.params.id, req.params.userId)
      res.json(movie)
    } catch (error) {
      console.error('Erro ao obter filme por ID:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao obter detalhes do filme.'
      })
    }
  },

  async createMovie(req, res) {
    const { userId, title, description, genre, year, duration } = req.body
    try {
      if (year < 1888) {
        return res.status(400).json({
          code: 'INVALID_YEAR',
          message: 'O ano do filme deve ser maior ou igual a 1888.'
        })
      }
      const movie = await Movie.createMovie(
        userId,
        title,
        description,
        genre,
        year,
        duration
      )
      res.json(movie)
    } catch (error) {
      console.error('Erro ao criar filme:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao criar o filme.'
      })
    }
  },

  async updateMovie(req, res) {
    const { userId, title, description, genre, year, duration } = req.body
    try {
      const movie = await Movie.updateMovie(
        req.params.id,
        userId,
        title,
        description,
        genre,
        year,
        duration
      )
      res.json(movie)
    } catch (error) {
      console.error('Erro ao atualizar filme:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao atualizar o filme.'
      })
    }
  },

  async deleteMovie(req, res) {
    const { userId } = req.params
    try {
      const movie = await Movie.deleteMovie(req.params.id, userId)
      res.json(movie)
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
      res.json(recommendedMovies)
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
