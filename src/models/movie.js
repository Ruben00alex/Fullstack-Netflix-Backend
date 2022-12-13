const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    plot: { type: String, required: true },
    year: { type: Number, required: true },
    cover: { type: String, required: true },
    runTime: { type: String, required: true },
    genre: { type: [String], required: true },
    director: { type: String, required: true },
    video: { type: String, required: true },
});





const Movie = mongoose.model('Movie', movieSchema );

module.exports = Movie;