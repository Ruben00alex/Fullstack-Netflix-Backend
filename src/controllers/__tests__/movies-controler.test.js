const Chance = require('chance');
const chance = new Chance();


const moviesController = require('../movies-controller');
const MovieService = require('../../services/movies-service');

jest.mock('../../services/movies-service');

// title: "",
//     plot: "",
//     genre: "",
//     director: "",
//     year: 0,
//     cover: "",
//     runTime: "",
//     video: "",





describe('when adding a movie', () => {
    let movie, req, res;

    beforeEach(() => {
        movie = {
            title: chance.string(),
            plot: chance.string(),
            genre: chance.string(),
            director: chance.string(),
            year: chance.integer(),
            cover: chance.string(),
            runTime: chance.string(),
            video: chance.string(),
        };
        req = {
            body: movie,
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        MovieService.createMovie = jest.fn().mockResolvedValue(movie);
    })

    it('should call MovieService.createMovie with the movie data', async () => {
        await moviesController.createMovie(req, res);

        expect(MovieService.createMovie).toBeCalledWith(movie);
    })

    it('should call res.json with the save movie data', async () => {
        await moviesController.createMovie(req, res);

        expect(res.json).toBeCalledWith(movie);
    })

    //test for status 201 (created) when movie is created
    it('should call res.status with a 201 when the movie is created', async () => {
        await moviesController.createMovie(req, res);

        expect(res.status).toBeCalledWith(201);
    })

    it('should call res.status with 500 when the MovieService.createMovie service fails', async () => {
        const error = new Error();
        MovieService.createMovie = jest.fn().mockRejectedValue(error);

        await moviesController.createMovie(req, res);

        expect(res.status).toBeCalledWith(500);
    })

})

describe('when editing a movie', () => {
    let movie, req, res;

    beforeEach(() => {
        movie = {
            title: chance.string(),
            plot: chance.string(),
            genre: chance.string(),
            director: chance.string(),
            year: chance.integer(),
            cover: chance.string(),
            runTime: chance.string(),
            video: chance.string(),
        };
        req = {
            body: movie,
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        MovieService.editMovie = jest.fn().mockResolvedValue(movie);
    })

    it('should call MovieService.editMovie with the movie data', async () => {
        await moviesController.editMovie(req, res);

        expect(MovieService.editMovie).toBeCalledWith(movie);
    })

    it('should call res.json with the save movie data', async () => {
        await moviesController.editMovie(req, res);

        expect(res.json).toBeCalledWith(movie);
    })

    //test for status 201 (created) when movie is edited
    it('should call res.status with a 200 when the movie is created', async () => {
        await moviesController.editMovie(req, res);

        expect(res.status).toBeCalledWith(200);
    })

    it('should call res.status with 500 when the MovieService.editMovie service fails', async () => {
        const error = new Error();
        MovieService.editMovie = jest.fn().mockRejectedValue(error);

        await moviesController.editMovie(req, res);

        expect(res.status).toBeCalledWith(500);
    })

})


describe('when getting all movies', () => {
    let movies, req, res;

    beforeEach(() => {
        movies = [
            {
                title: chance.string(),
                plot: chance.string(),
                genre: chance.string(),
                director: chance.string(),
                year: chance.integer(),
                cover: chance.string(),
                runTime: chance.string(),
                video: chance.string(),
            },
            {
                title: chance.string(),
                plot: chance.string(),
                genre: chance.string(),
                director: chance.string(),
                year: chance.integer(),
                cover: chance.string(),
                runTime: chance.string(),
                video: chance.string(),
            },
        ];
        req = {};
        res = {
            json: jest.fn().mockReturnThis(),
        };

        MovieService.getAllMovies = jest.fn().mockResolvedValue(movies);
    })

    it('should call MovieService.getAllMovies', async () => {
        await moviesController.getAllMovies(req, res);

        expect(MovieService.getAllMovies).toBeCalled();
    })

    it('should call res.json with the movies data', async () => {
        await moviesController.getAllMovies(req, res);

        expect(res.json).toBeCalledWith(movies);
    })

    
})
