const { model, Schema } = require('mongoose')

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [{
    type: String,
    name: String,
    duration: String,
    weight: Number,
    reps: Number, 
    sets: Number,
    distance: Number
  }]
})


module.exports = model('Workout', WorkoutSchema)