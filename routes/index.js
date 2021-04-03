const router = require('express').Router()

router.use('/api', require('./workoutRoutes.js'))
router.use('/api', require('./stats.js'))


module.exports = router