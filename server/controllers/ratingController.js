const Rating = require('../models/ratingModel')

const ratingController = {
  async addRating(req, res) {
    const { userId, movieId, rating, review } = req.body
    try {
      const response = await Rating.addRating(userId, movieId, rating, review)
      res.json({ response })
    } catch (error) {
      console.error('Erro ao adicionar avaliação:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao adicionar avaliação.'
      })
    }
  },

  async getRatingsByMovie(req, res) {
    try {
      const ratings = await Rating.getRatingsByMovie(req.params.movieId)
      res.json({ ratings })
    } catch (error) {
      console.error('Erro ao obter avaliações:', error)
      res.status(500).json({
        code: 'INTERNAL_ERROR',
        message: 'Erro ao obter avaliações do filme.'
      })
    }
  }
}

module.exports = ratingController
