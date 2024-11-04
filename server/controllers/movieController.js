const Movie = require('../models/movieModel')

const movieController = {
  async getAllMovies(req, res) {
    const movies = await Movie.getAllMovies()
    res.json(movies)
  },
  async getMovieById(req, res) {
    const movie = await Movie.getMovieById(req.params.id)
    res.json(movie)
  },
  async createMovie(req, res) {
    const { title, genre, year } = req.body
    const movie = await Movie.createMovie(title, genre, year)
    res.json(movie)
  },
  async updateMovie(req, res) {
    const { title, genre, year } = req.body
    const movie = await Movie.updateMovie(req.params.id, title, genre, year)
    res.json(movie)
  },
  async deleteMovie(req, res) {
    const movie = await Movie.deleteMovie(req.params.id)
    res.json(movie)
  },

  async getRecommendedMovies(req, res) {
    const { userId } = req.params
    try {
      const recommendedMovies = await Movie.getRecommendedMovies(userId)
      res.json(recommendedMovies)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Erro ao obter filmes recomendados.' })
    }
  }
}

module.exports = movieController
