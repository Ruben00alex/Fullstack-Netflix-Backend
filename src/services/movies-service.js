//import the movie model

const Movie = require('../models/movie.js');

// GET /movies
const getAllMovies = async () => {
    console.log('getAllMovies');
    try {
    let movies = await Movie.find().lean().exec();

    return movies;

    }
    catch (err) {
        console.log(err);
    }

}

//POST /movies

const createMovie = async (movie) => {
    let newMovie = await Movie.create(movie);
    
    return newMovie;
}


const editMovie = async (movie) =>{

    console.log(movie);
    let editedMovie = await Movie.findByIdAndUpdate(movie._id, movie)

    return editedMovie;

}

const deleteMovie = async (id) => {
    let deletedMovie = await Movie.findByIdAndDelete(id);

    return deletedMovie;
}

module.exports = {
    getAllMovies,
    createMovie,
    editMovie,
    deleteMovie

}