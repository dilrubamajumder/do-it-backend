//dependencies
const express = require("express");

//configuration
const app = express();

//routes
app.get("/", (req, res) => {
    res.send("Welcome to Do-It server")
});

module.exports = app;
