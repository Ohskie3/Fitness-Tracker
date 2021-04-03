const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workout', (req, res) => {
  Workout.findById()
  .then(workout => res.json(workout))
  .catch(err => console.log(err))
})

router.get('/workouts', (req, res) => {
  Workout.find()
  .then(workouts => res.json(workouts))
  .catch(err => console.log(err))
})

router.post('/workout', (req, res) => {
  Workout.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

router.delete('/workout/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
  .then(workout => res.json(workout))
  .catch(err => console.log(err))
})


module.exports = router