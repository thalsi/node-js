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

```
