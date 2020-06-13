const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');
const genre_id = require('../index.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

//full URL to query least popular US films of 1989
// `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&primary_release_year=1989`

//query genres
//`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

//query by genre, year 1989
//`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1989&with_genres=${genrecode}`

module.exports = {
    genre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    searchGenre: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1989&with_genres=${genre_id}`




};