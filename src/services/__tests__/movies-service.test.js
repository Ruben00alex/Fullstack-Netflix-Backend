

const Chance = require("chance");

const moviesService = require("../movies-service");

const Movie = require("../../models/movie");

let chance = new Chance();

jest.mock("../../models/movie");


describe("when calling createMovie", () => {
    let movie;
    
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
        

        
    }

    );
    
    it("should call Movie.create with the movie data", async () => {
        await moviesService.createMovie(movie);
        
        expect(Movie.create).toBeCalledWith(movie);
    })



    it("should return the created movie", async () => {
        Movie.create.mockReturnValue(movie);
        
        const createdMovie = await moviesService.createMovie(movie);
        
        expect(createdMovie).toEqual(movie);
    }
    )
})