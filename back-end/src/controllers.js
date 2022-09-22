const knex = require('knex')(require('../knexfile.js')['development'])

const getAllMovies = () => {
  return knex('movie')
}

const searchMovieByName = searchText => {
    searchText = searchText.toLowerCase();
    // console.log("search text is: ", searchText)
    return knex('movie')
      .whereILike('title', `%${searchText}%`)
      .select('*')
}

module.exports = { getAllMovies, searchMovieByName }
