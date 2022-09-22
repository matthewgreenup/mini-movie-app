const knex = require("knex")(require("../knexfile.js")["development"]);

const getAllMovies = () => {
    return knex('movie')
}

module.exports = {getAllMovies}