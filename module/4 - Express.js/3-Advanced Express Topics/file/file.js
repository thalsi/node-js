const express = require('express');
const app = express();

app.use(express.json());

// serve uploaded files
app.use('/uploads', express.static('uploads'));

const userRoutes = require('./file-router');
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});