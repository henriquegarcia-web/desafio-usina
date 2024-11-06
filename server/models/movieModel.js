const pool = require('../config/database')

const Movie = {
  async getAllMovies(
    userId,
    { searchTerm, genre, year, minDuration, maxDuration }
  ) {
    let query = `
      SELECT * FROM movies 
      WHERE user_id = $1 OR user_id IS DISTINCT FROM $1
    `
    const queryParams = [userId]
    let filterIndex = 2

    if (searchTerm) {
      query += ` AND (title ILIKE $${filterIndex} OR description ILIKE $${filterIndex})`
      queryParams.push(`%${searchTerm}%`)
      filterIndex++
    }
    if (genre) {
      query += ` AND genre = $${filterIndex}`
      queryParams.push(genre)
      filterIndex++
    }
    if (year) {
      query += ` AND year = $${filterIndex}`
      queryParams.push(year)
      filterIndex++
    }
    if (minDuration) {
      query += ` AND duration >= $${filterIndex}`
      queryParams.push(minDuration)
      filterIndex++
    }
    if (maxDuration) {
      query += ` AND duration <= $${filterIndex}`
      queryParams.push(maxDuration)
      filterIndex++
    }

    const result = await pool.query(query, queryParams)
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
    if (year < 1888) {
      throw new Error('O ano do filme deve ser maior ou igual a 1888.')
    }

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
      FROM movies m
      LEFT JOIN ratings r ON m.movie_id = r.movie_id
      WHERE m.user_id IS DISTINCT FROM $1
      GROUP BY m.movie_id, m.title, m.genre, m.year
      ORDER BY AVG(r.rating) DESC
      LIMIT 10;
    `

    const result = await pool.query(query, [userId])
    return result.rows
  }
}

module.exports = Movie
