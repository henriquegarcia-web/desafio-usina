const pool = require('../config/database')

const Movie = {
  async getAllMovies(userId) {
    const result = await pool.query('SELECT * FROM movies WHERE user_id = $1', [
      userId
    ])
    return result.rows
  },

  async getMovieById(id) {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id])
    return result.rows[0]
  },

  async createMovie(userId, title, genre, year, duration) {
    const result = await pool.query(
      'INSERT INTO movies (user_id, title, genre, year, duration) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, title, genre, year, duration]
    )
    return result.rows[0]
  },

  async updateMovie(id, title, genre, year, duration) {
    const result = await pool.query(
      'UPDATE movies SET title = $1, genre = $2, year = $3, duration = $4 WHERE id = $5 RETURNING *',
      [title, genre, year, duration, id]
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
          WHERE movie_id IN (
              SELECT movie_id
              FROM ratings
              WHERE user_id = $1
              AND rating >= 4
          ) AND user_id != $1
      )
      AND m.id NOT IN (
          SELECT movie_id
          FROM ratings
          WHERE user_id = $1
      )
      AND m.user_id != $1
      GROUP BY m.id, m.title, m.genre, m.year
      ORDER BY AVG(r.rating) DESC
      LIMIT 10;
    `
    const result = await pool.query(query, [userId])
    return result.rows
  }
}

module.exports = Movie
