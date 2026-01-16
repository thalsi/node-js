const express=require('express');
require('dotenv').config({path:'./dev.env'});


const app=express();

app.use(express.json());

app.listen( process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})