const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    post: String,
    user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'PostUser'
        }
});

module.exports = mongoose.model('Post', UserSchema);