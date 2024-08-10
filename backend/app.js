//dependencies
const express = require("express");
const cors = require("cors")
const tasksController = require('./controllers/tasksController')

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json())

app.use('/tasks', tasksController)


//routes
app.get("/", (req, res) => {
    res.send('Welcome to Do-It server')
});


//exports
module.exports = app;
