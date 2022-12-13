// const request = require("supertest");


//example of desired test

// const { app, server } = require("../src/index");

// afterAll(() => {
//   server.close();
// });

// describe("when calling GET /products endpoint", () => {
//   it("sholud return a 200 status code", async () => {
//     const response = await request(app).get("/products");

//     expect(response.status).toBe(200);
//   });

//   it("should return an array of products", async () => {
//     const response = await request(app).get("/products");

//     expect(response.body).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           name: expect.any(String),
//           price: expect.any(Number),
//         }),
//       ])
//     );
//   });
// });

// describe("when calling POST /procucts endpoint", () => {
//   it("should return a 201 status code when a product is created", async () => {
//     const response = await request(app).post("/products").send({
//       name: "Cat",
//       description: "A sad cat",
//       imageUrl: "",
//       price: 1000,
//     });

//     expect(response.status).toBe(200);
//   });
// });

// Movie model
// title: "",
//     plot: "",
//     genre: "",
//     director: "",
//     year: 0,
//     cover: "",
//     runTime: "",
//     video: "",

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


        // This is what the object in the array should look like
        // {"__v": 0, "_id": "63943962ac6416593e629a61", "cover": "https://i.ytimg.com/vi/8hYlB38asDY/maxresdefault.jpg", "director": "Jon Favreau", "genre": ["Action", "Adventure", "Sci-Fi"], "plot": "A billionaire industrialist and genius inventor, Tony Stark, is conducting weapons tests overseas when he is attacked and captured", "runTime": "126 min", "title": "Iron Man", "video": "https://www.youtube.com/watch?v=8hYlB38asDY", "year": 2008}
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