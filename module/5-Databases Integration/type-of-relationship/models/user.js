const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    name: String,
    age: Number,
    address:{
        city: String,
        pincode: Number
    }
});

module.exports = mongoose.model('User', UserSchema);