const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        lowerCase: true,
        required: true,
    },
    fullName: {
        type: String,
        lowerCase: true,
        required: true,
    },
     placeName: {
        type: String,
        lowerCase: true,
        required: true,
    }, 
    phoneNumber: {
        type: String,
        required: true,
    },
});


const UserModel = db.model('finders',userSchema);


module.exports = UserModel;