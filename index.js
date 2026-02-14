console.log('initializing index.js');

//import dependencies
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const {connectDB}= require('./connection');

//init express app
const app = express();
const port = 8000;

//connect to mongodb
connectDB("mongodb://127.0.0.1:27017/blogDB");



//parse json data
app.use(express.json());

//parse urlencoded data
app.use(express.urlencoded({ extended: true }));

//use user routes
app.use('/api/users', userRoutes);







//start server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});