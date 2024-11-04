const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')
const movieRoutes = require('./routes/movieRoutes')
const ratingRoutes = require('./routes/ratingRoutes')
const tmdbRoutes = require('./routes/tmdbRoutes')
const genreRoutes = require('./routes/genreRoutes')

const app = express()

const allowedOrigins = ['http://localhost:5173', 'https://dominio-prod.com']

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/ratings', ratingRoutes)
app.use('/api/tmdb', tmdbRoutes)
app.use('/api/genres', genreRoutes)

module.exports = app
