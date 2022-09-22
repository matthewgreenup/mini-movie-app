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

const deleteMovieById = id => {
return knex('movie').where("id", id).del();
}

module.exports = { getAllMovies, searchMovieByName, deleteMovieById }
