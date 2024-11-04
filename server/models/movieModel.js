const pool = require('../config/database')

const Movie = {
  async getAllMovies() {
    const result = await pool.query('SELECT * FROM movies')
    return result.rows
  },
  async getMovieById(id) {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id])
    return result.rows[0]
  },
  async createMovie(title, genre, year) {
    const result = await pool.query(
      'INSERT INTO movies (title, genre, year) VALUES ($1, $2, $3) RETURNING *',
      [title, genre, year]
    )
    return result.rows[0]
  },
  async updateMovie(id, title, genre, year) {
    const result = await pool.query(
      'UPDATE movies SET title = $1, genre = $2, year = $3 WHERE id = $4 RETURNING *',
      [title, genre, year, id]
    )
    return result.rows[0]
  },
  async deleteMovie(id) {
    const result = await pool.query(
      'DELETE FROM movies WHERE id = $1 RETURNING *',
      [id]
    )
    return result.rows[0]
  },

  async getRecommendedMovies(userId) {
    const query = `
      SELECT m.id, m.title, m.genre, m.year
      FROM ratings r
      JOIN movies m ON m.id = r.movie_id
      WHERE r.user_id IN (
          SELECT user_id
          FROM ratings
          WHERE movie_id IN (SELECT movie_id FROM ratings WHERE user_id = $1 AND rating >= 4)
            AND user_id != $1
      )
      AND m.id NOT IN (SELECT movie_id FROM ratings WHERE user_id = $1)
      GROUP BY m.id, m.title
      ORDER BY AVG(r.rating) DESC
      LIMIT 10;
    `
    const result = await pool.query(query, [userId])
    return result.rows
  }
}

module.exports = Movie
