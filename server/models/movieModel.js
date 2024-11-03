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
  }
}

module.exports = Movie
