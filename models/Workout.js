const { model, Schema } = require('mongoose')

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [{
    type: {
      type: String
    },
    name: {
      type: String
    },
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
  }]
})

// WorkoutSchema.virtual('duration').get(function () {
//   return this.exercises.reduce((t, exercise) => t + exercise.duration, 0)
// })

module.exports = model('Workout', WorkoutSchema)