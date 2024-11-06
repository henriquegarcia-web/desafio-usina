const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AuthModel = require('../models/authModel')

const authController = {
  async register(req, res) {
    const { username, email, password } = req.body

    try {
      const existingUser = await AuthModel.findUserByUsername(username)
      if (existingUser) {
        return res.status(409).json({
          error: {
            code: 'USER_EXISTS',
            message: 'Nome de usuário já está em uso.'
          }
        })
      }

      const passwordHash = await bcrypt.hash(password, 10)
      const user = await AuthModel.createUser(username, email, passwordHash)

      const token = jwt.sign(
        { id: user.user_id, email: user.email, name: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )

      res.json({ user, token })
    } catch (error) {
      console.error('Erro ao registrar usuário:', error)
      res.status(500).json({
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Erro ao registrar o usuário.'
        }
      })
    }
  },

  async login(req, res) {
    const { email, password } = req.body

    try {
      const user = await AuthModel.findUserByEmail(email)
      if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        return res.status(401).json({
          error: {
            code: 'INVALID_CREDENTIALS',
            message: 'Credenciais inválidas.'
          }
        })
      }

      const token = jwt.sign(
        { id: user.user_id, email: user.email, name: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )

      res.json({ user, token })
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      res.status(500).json({
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Erro ao fazer login.'
        }
      })
    }
  },

  async verifyToken(req, res) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({
        error: {
          code: 'UNAUTHORIZED',
          message: 'Não autorizado.'
        }
      })
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      res.json({
        userId: decoded.id,
        email: decoded.email,
        name: decoded.name
      })
    } catch (error) {
      res.status(401).json({
        error: {
          code: 'INVALID_TOKEN',
          message: 'Token inválido.'
        }
      })
    }
  }
}

module.exports = authController
