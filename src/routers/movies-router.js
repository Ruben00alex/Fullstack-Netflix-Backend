const express = require('express');
const router = express.Router();

// Import the Movie model
const Movie = require('../models/movie.js');


//import the movie controller
const moviesController = require('../controllers/movies-controller.js');

// GET /movies
router.get('/', moviesController.getAllMovies);

//POST /movies
router.post('/',moviesController.createMovie);

//PUT /movies
router.put('/:id', moviesController.editMovie);

//DELETE /movies
router.delete('/:id', moviesController.deleteMovie);


module.exports = router;