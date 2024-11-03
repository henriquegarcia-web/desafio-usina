const pool = require('../config/database')

const Rating = {
  async addRating(userId, movieId, stars) {
    const result = await pool.query(
      'INSERT INTO ratings (user_id, movie_id, stars) VALUES ($1, $2, $3) RETURNING *',
      [userId, movieId, stars]
    )
    return result.rows[0]
  },
  async getRatingsByMovie(movieId) {
    const result = await pool.query(
      'SELECT * FROM ratings WHERE movie_id = $1',
      [movieId]
    )
    return result.rows
  }
}

module.exports = Rating
