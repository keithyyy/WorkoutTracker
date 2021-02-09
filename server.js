// calling our packages
const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose");
const path = require("path");

// Port to use for our app
const PORT = process.env.PORT || 8080;

// calling data models of our database
const db = require("./models")

// communicating with our database using express
const app = express();

// calling morgan to find out errors
app.use(logger("dev"));

// urlencoded to get our server to read an extended set of url characters
// express.json to turn incoming requests as json objects
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

// tell server to look in the "public" folder for our static HTML files.
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'))
})

app.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'))
})



app.listen(PORT, () => {
    console.log(`App is running on: ${PORT}!`)
})


