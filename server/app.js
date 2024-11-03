const express = require('express')

const authRoutes = require('./routes/authRoutes')
const movieRoutes = require('./routes/movieRoutes')
const ratingRoutes = require('./routes/ratingRoutes')
const tmdbRoutes = require('./routes/tmdbRoutes')

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/ratings', ratingRoutes)
app.use('/api/tmdb', tmdbRoutes)

module.exports = app
