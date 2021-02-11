// calling our data model maker, mongoose. 
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creating our Workout Schema model
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            // resistance training
            type: {
                type: String,
                required: true,
                trim: true,
                default: "",
            },
            weight: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            
            reps: {
                type: Number,
                default: 0
            },
            
            // cardio training
            duration: {
                type: Number,
                required: "Enter how long exercise took",
                
            },

            distance: {
                type: Number
            },
            
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;