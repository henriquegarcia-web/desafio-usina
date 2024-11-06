const express = require('express')
const movieController = require('../controllers/movieController')

const router = express.Router()

router.get('/user/:userId', movieController.getAllMovies)
router.get('/:id/user/:userId', movieController.getMovieById)
router.post('/', movieController.createMovie)
router.put('/:id', movieController.updateMovie)
router.delete('/:id/user/:userId', movieController.deleteMovie)
router.get('/recommendations/:userId', movieController.getRecommendedMovies)

module.exports = router
