const mongoose = require('mongoose');

const courseSchema= mongoose.Schema({
    course_name:String,
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'students_schema'
    }]
});

module.exports= new mongoose.model('course_schema',courseSchema);