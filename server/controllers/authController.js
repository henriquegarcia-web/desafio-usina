const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authController = {
  async register(req, res) {
    const { username, password } = req.body
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.createUser(username, passwordHash)
    res.json(user)
  },
  async login(req, res) {
    const { username, password } = req.body
    const user = await User.findUserByUsername(username)

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })
    res.json({ token })
  }
}

module.exports = authController
