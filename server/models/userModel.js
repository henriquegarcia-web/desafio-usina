const pool = require('../config/database')

const User = {
  async createUser(username, passwordHash) {
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, passwordHash]
    )
    return result.rows[0]
  },
  async findUserByUsername(username) {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [
      username
    ])
    return result.rows[0]
  }
}

module.exports = User
