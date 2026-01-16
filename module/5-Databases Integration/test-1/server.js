require('dotenv').config({path:'./test.env'});

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// middleware
app.use(express.json());

// DB connect
connectDB();

// routes
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
