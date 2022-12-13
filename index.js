const express = require('express');
require('dotenv').config();

const cors = require("cors");

//database connection
const mongoose = require('mongoose');

const app = express();
const port = 3000;


//import movies-router
const moviesRouter = require('./src/routers/movies-router.js');
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.SECRET_DB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error.message);
    }
}

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/movies', moviesRouter);


const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connectToDB();
}
);
  
  module.exports = { app, server };

