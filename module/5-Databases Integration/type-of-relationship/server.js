require('dotenv').config({path:'./dev.env'});

const express = require('express');
const connectDB= require('./config/db-connect');
const UserRouters=require('./routes/user-router');
const OneToMany=require('./routes/one-to-many.router');
const ManyToMany=require('./routes/many-to-many.router');

const app=express();


// middleware
app.use(express.json());

// Database connection
connectDB();

// Routers
app.use('/api', UserRouters);
app.use('/api', OneToMany);
app.use('/api', ManyToMany);

app.listen( process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})