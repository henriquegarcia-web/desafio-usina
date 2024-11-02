const express = require('express')
const authRoutes = require('./routes/authRoutes')
const movieRoutes = require('./routes/movieRoutes')
const ratingRoutes = require('./routes/ratingRoutes')

const app = express()

app.use(express.json())

app.use('/auth', authRoutes)
app.use('/movies', movieRoutes)
app.use('/ratings', ratingRoutes)

module.exports = app
