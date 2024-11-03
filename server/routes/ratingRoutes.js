const express = require('express')
const ratingController = require('../controllers/ratingController')

const router = express.Router()

router.post('/', ratingController.addRating)
router.get('/:movieId', ratingController.getRatingsByMovie)

module.exports = router
