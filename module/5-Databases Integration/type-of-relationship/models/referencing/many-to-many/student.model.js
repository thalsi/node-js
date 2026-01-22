const mongoose = require('mongoose');

const studentSchema= mongoose.Schema({
    student_name:String,
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course_schema'
    }]
});

module.exports= new mongoose.model('student_schema',studentSchema);