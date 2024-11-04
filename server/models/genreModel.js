const pool = require('../config/database')

const Genre = {
  async getAllGenres() {
    const result = await pool.query('SELECT * FROM genres ORDER BY name')
    return result.rows
  }
}

module.exports = Genre
