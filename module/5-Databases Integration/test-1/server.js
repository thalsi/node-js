require('dotenv').config();

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

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
