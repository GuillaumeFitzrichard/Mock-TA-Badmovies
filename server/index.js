var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var axios = require('axios');

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup


//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


// OPTION 1: Use regular routes

app.get('/genres', function(req, res) {
  axios.get(apiHelpers.genre)
  .then((res) => {
    console.log('index.js says: ', res.data)

  })
  
  .catch((error) => console.error(error))
  
  
  // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list

  // send back
});

app.get('/search', function(req, res) {
  // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie

  // and sort them by votes (worst first) using the search parameters in themoviedb API

  //would've used the genre_id generated from the genre select to populate the genre search query I generated on tmdb API in apiHelpers.js
  //`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1989&with_genres=${genre_id}`
});


app.post('/save', function(req, res) {

  //save movie as favorite

});

app.post('/delete', function(req, res) {

  //remove movie from favorites

});


//OPTION 2: Use Express Router

//IF you decide to go with this option, delete OPTION 1 to continue

//Routes

// const movieRoutes = require('./routes/movieRoutes.js');

// //Use routes
// app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
