// const Chance = require("chance");

// Example of a service test desired
// const OrderService = require("../orders-service");
// const ProductService = require("../product-service");

// const Order = require("../../models/order");

// const chance = new Chance();

// jest.mock("../../models/order");
// jest.mock("../product-service");

// describe("when calling addTotalToOrder", () => {
//   let order, product, total;

//   beforeEach(() => {
//     order = { products: [chance.guid()] };
//     product = {
//       price: chance.integer(),
//     };
//     total = product.price * order.products.length;


//     ProductService.getProductById = jest.fn().mockReturnValue(product);
//   });

//   it("should call ProductService.getProductById with the productId data", async () => {
//     await OrderService.addTotalToOrder(order);

//     expect(ProductService.getProductById).toBeCalledWith(order.products[0]);
//   });

//   it("should add the totals of the products to the order object", async () => {
//     await OrderService.addTotalToOrder(order);

//     expect(order.total).toBe(total)
//   });
// });

// describe("when calling saveOrder service method", () => {
//   let order;

//   beforeEach(() => {
//     order = {
//       name: chance.name(),
//       address: chance.address(),
//       city: chance.city(),
//       state: chance.state(),
//       zipCode: chance.zip(),
//       email: chance.email(),
//       phone: chance.phone(),
//       products: [chance.guid()],
//       total: chance.integer(),
//     };

//     OrderService.addTotalToOrder = jest.fn().mockReturnValue(order);
//     OrderSaveSpy = jest
//       .spyOn(new Order(), "save")
//       .mockImplementation(() => Promise.resolve(order));

//     OrderObjectSpy = jest
//       .spyOn(new Order(), "toObject")
//       .mockImplementation(() => Promise.resolve(order));
//   });

//   it("shoudl call OrderService.addToOrder with the order object", async () => {
//     await OrderService.saveOrder(order);

//     expect(OrderService.addTotalToOrder).toBeCalledWith(order);
//   });

//   it("should create a new order instance with the order data", async () => {
//     await OrderService.saveOrder(order);

//     expect(Order).toBeCalledWith(order);
//   });

//   it("should call the order save instance method", async () => {
//     await OrderService.saveOrder(order);

//     expect(OrderSaveSpy).toBeCalled();
//   });

//   it("should call the toObject instance method", async () => {
//     await OrderService.saveOrder(order);

//     expect(OrderObjectSpy).toBeCalled();
//   });

//   it("should return the saved order object from the database", async () => {
//     const newOrder = await OrderService.saveOrder(order);

//     expect(newOrder).toEqual(order);
//   });
// });

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