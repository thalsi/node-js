## 2. CRUD API with Express

CRUD means Create, Read, Update, Delete — the four basic operations of any backend API.

1️⃣ Router & Controllers
📌 What is a Router?

A Router is used to define API routes separately from the main app file.

📁 routes/user.routes.js
```
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

```

📌 What is a Controller?

A Controller contains the actual business logic for each route.

📁 controllers/user.controller.js
```
let users = [];

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({
    success: true,
    message: 'User created',
    data: user
  });
};

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
};

exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  users[index] = { ...users[index], ...req.body };

  res.status(200).json({
    success: true,
    message: 'User updated',
    data: users[index]
  });
};

exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'User deleted'
  });
};

```

2️⃣ Error Handling Middleware
📌 Why Error Middleware?

To handle errors globally instead of repeating code in every route.

📁 middlewares/error.middleware.js
```
module.exports = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
};

```
Use it in app.js
```
const errorMiddleware = require('./middlewares/error.middleware');

app.use(errorMiddleware);

```

3️⃣ Status Codes & JSON Responses
📌 Common HTTP Status Codes
| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |


📌 Standard JSON Response Format (Best Practice)
```
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}

```

For error:
```
{
  "success": false,
  "message": "Something went wrong"
}

```

4️⃣ Connect Router to App

📁 app.js
```
const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

```