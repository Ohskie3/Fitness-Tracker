const router = require('express').Router()

router.use('/api', require('./exercise.js'))
router.use('/api', require('./stats.js'))


module.exports = router