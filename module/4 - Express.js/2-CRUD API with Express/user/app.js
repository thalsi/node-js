const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

const errorMiddleware = require('./meddlewares/error.meddlewares');
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
