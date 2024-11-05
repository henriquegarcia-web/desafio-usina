const pool = require('../config/database')

const AuthModel = {
  async createUser(username, email, passwordHash) {
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [username, email, passwordHash]
    )
    return result.rows[0]
  },

  async findUserByUsername(username) {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [
      username
    ])
    return result.rows[0]
  },

  async findUserByEmail(email) {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email
    ])
    return result.rows[0]
  }
}

module.exports = AuthModel
