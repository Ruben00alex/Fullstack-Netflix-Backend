
const supertest = require("supertest");

const {app, server} = require("../index");

afterAll(() => {
    server.close();
}
);

describe("when calling GET /movies endpoint", () => {
    it("should return a 200 status code", async () => {
        const response = await supertest(app).get("/movies");

        expect(response.status).toBe(200);
    });

    it("should return an array of movies", async () => {
        const response = await supertest(app).get("/movies");

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: expect.any(String),
                    plot: expect.any(String),
                    genre: expect.any(Array),
                    director: expect.any(String),
                    year: expect.any(Number),
                    cover: expect.any(String),
                    runTime: expect.any(String),
                    video: expect.any(String),
                    __v: expect.any(Number),
                    _id: expect.any(String),
                })
            ])
        );
    });



describe("when calling POST /movies endpoint", () => {
    it("should return a 201 status code when a movie is created", async () => {
        const response = await supertest(app).post("/movies").send({
            title: "Avengers: Endgame",
            plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
            genre: ["Action", "Adventure"," Drama"],
            director: "Anthony Russo",
            year: 2019,
            cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            runTime: "181 min",
            video: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        });

        expect(response.status).toBe(201);
    });
});
});