const mongoose = require('mongoose');

const ProfileSchema= new mongoose.Schema({
    profile_name: String,
    age:Number,
    phone:Number
});

module.exports = mongoose.model('Profile', ProfileSchema);
