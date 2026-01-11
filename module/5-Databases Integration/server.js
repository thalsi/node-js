const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> log('MongoDB Conneted !'))
.catch(err=>console.log(err));

app.listen(3000, ()=>{
    console.log("Server running on part 3000");
    
});
