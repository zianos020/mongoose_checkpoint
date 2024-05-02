// 1- requiring express
const express = require("express");

// 2- creating 
const app = express();

// requiring dotenv
require ("dotenv").config();

// middlewear
app.use(express.jason());

//connecting database
const connectDB = require("./config/mongodb")
connectDB();

// routes
app.use('/api/contact', require('./routes/contact'));

//creating port
const port = process.env.port;

// 4- listening
app.listen (port, err => {
    err? console.error(`connection failed ${err}`) : console.log(`conncted SUCC on port ${port}`)
})