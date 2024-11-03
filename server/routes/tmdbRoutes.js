const express = require('express')
const router = express.Router()
const TmdbController = require('../controllers/tmdbController')

router.get('/search', TmdbController.searchMovies)

module.exports = router
