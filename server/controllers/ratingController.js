const Rating = require('../models/ratingModel')

const ratingController = {
  async addRating(req, res) {
    const { userId, movieId, rating, review } = req.body
    const response = await Rating.addRating(userId, movieId, rating, review)
    res.json(response)
  },
  async getRatingsByMovie(req, res) {
    const ratings = await Rating.getRatingsByMovie(req.params.movieId)
    res.json(ratings)
  }
}

module.exports = ratingController
