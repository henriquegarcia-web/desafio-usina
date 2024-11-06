const pool = require('../config/database')

const Movie = {
  async getAllMovies(userId) {
    const result = await pool.query('SELECT * FROM movies WHERE user_id = $1', [
      userId
    ])
    return result.rows
  },

  async getMovieById(id, userId) {
    const result = await pool.query(
      'SELECT * FROM movies WHERE movie_id = $1 AND user_id = $2',
      [id, userId]
    )
    return result.rows[0]
  },

  async createMovie(userId, title, description, genre, year, duration) {
    const result = await pool.query(
      'INSERT INTO movies (user_id, title, description, genre, year, duration) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [userId, title, description, genre, year, duration]
    )
    return result.rows[0]
  },

  async updateMovie(id, userId, title, description, genre, year, duration) {
    const result = await pool.query(
      'UPDATE movies SET title = $1, description = $2, genre = $3, year = $4, duration = $5 WHERE movie_id = $6 AND user_id = $7 RETURNING *',
      [title, description, genre, year, duration, id, userId]
    )
    return result.rows[0]
  },

  async deleteMovie(id, userId) {
    const result = await pool.query(
      'DELETE FROM movies WHERE movie_id = $1 AND user_id = $2 RETURNING *',
      [id, userId]
    )
    return result.rows[0]
  },

  async getRecommendedMovies(userId) {
    const query = `
      SELECT m.movie_id, m.title, m.genre, m.year
      FROM ratings r
      JOIN movies m ON m.movie_id = r.movie_id
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
      AND m.movie_id NOT IN (
          SELECT movie_id
          FROM ratings
          WHERE user_id = $1
      )
      AND m.user_id != $1
      GROUP BY m.movie_id, m.title, m.genre, m.year
      ORDER BY AVG(r.rating) DESC
      LIMIT 10;
    `
    const result = await pool.query(query, [userId])
    return result.rows
  }
}

module.exports = Movie
