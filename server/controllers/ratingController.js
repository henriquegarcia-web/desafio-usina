const Rating = require('../models/ratingModel')

const ratingController = {
  async addRating(req, res) {
    const { userId, movieId, stars } = req.body
    const rating = await Rating.addRating(userId, movieId, stars)
    res.json(rating)
  },
  async getRatingsByMovie(req, res) {
    const ratings = await Rating.getRatingsByMovie(req.params.movieId)
    res.json(ratings)
  }
}

module.exports = ratingController
