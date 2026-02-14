//users models

const mongoose = require('mongoose');

//define schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    email: {
        type: String,   
        required: true,
        unique: true
    },
    collage:{
        type: [String],
    },
    movies:{
        type: [String],
    },
    finance:{
        type: [String],
    },
    projects:{
        type: [String],
    },
});

//create model
const Users = mongoose.model('Users', userSchema);
module.exports = Users;