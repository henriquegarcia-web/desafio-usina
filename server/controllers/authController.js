const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AuthModel = require('../models/authModel')

const authController = {
  async register(req, res) {
    const { username, email, password } = req.body

    const existingUser = await AuthModel.findUserByUsername(username)
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken' })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await AuthModel.createUser(username, email, passwordHash)

    const token = jwt.sign(
      { id: user.user_id, email: user.email, name: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      }
    )

    res.json({ user, token })
  },

  async login(req, res) {
    const { email, password } = req.body
    console.log(email, password)
    const user = await AuthModel.findUserByEmail(email)

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: user.user_id, email: user.email, name: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      }
    )
    res.json({ user, token })
  },

  async verifyToken(req, res) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      res.json({
        userId: decoded.id,
        email: decoded.email,
        name: decoded.name
      })
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' })
    }
  }
}

module.exports = authController
