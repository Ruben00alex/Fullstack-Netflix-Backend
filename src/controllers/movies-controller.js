//import movies-service
const moviesService = require('../services/movies-service.js');

// GET /movies
const getAllMovies = async (req, res) => {
    try {
        let movies = await moviesService.getAllMovies();
        //set status to 200 and return the movies
        res.status = 200;
        res.json(movies);
    }
    catch (err) {
        res.status(500).json({ message: "There was an error getting the movies" });
    }
}

//POST /movies
const createMovie = async (req, res) => {

    try {
        let movie = await moviesService.createMovie(req.body);

        res.status(201).json(movie);
    }
    catch (err) {
        res.status(500).json({ message: "There was an error creating the movie" });
    }

}

const editMovie = async (req, res) => {
    try {
        console.log(req.body);
        let movie = await moviesService.editMovie(req.body);
        res.status(200).json(movie);

    }
    catch (err) {
        
        res.status(500).json({ message: "There was an error editing the movie" });
    }


}

const deleteMovie = async (req, res) => {
    try {
        let movie = await moviesService.deleteMovie(req.params.id);
        res.status(200).json(movie);

    }
    catch (err) {
        res.status(500).json({ message: "There was an error deleting the movie" });
    }


}


module.exports = {
    getAllMovies,
    createMovie,
    editMovie,
    deleteMovie
}