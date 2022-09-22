const express = require("express");
const app = express();
const {getAllMovies, searchMovieByName} = require('./controllers')
const morgan = require("morgan")
var cors = require("cors");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("The Movie Server is Running, you better go catch it");
});

app.get('/search', (req, res) => {
  getAllMovies()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
});

app.get('/search/:searchText', (req, res) => {
  let { searchText } = req.params;
  searchMovieByName(searchText)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
});


app.get("/secret", (req, res) => {
  res.status(200).send("You found a secret bro!");
});

module.exports = app;
