const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    name: String,
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profile'
    }
});

module.exports = mongoose.model('User', UserSchema);