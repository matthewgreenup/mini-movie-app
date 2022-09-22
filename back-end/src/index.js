const express = require("express");
const app = express();
const {getAllMovies} = require('./controllers')
const morgan = require("morgan")
var cors = require("cors");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  getAllMovies()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
});


app.get("/secret", (req, res) => {
  res.status(200).send("You found a secret bro!");
});

module.exports = app;
