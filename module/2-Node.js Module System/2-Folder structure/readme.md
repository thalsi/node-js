
## 2. Folder Structure Best Practices

A clean folder structure makes your project scalable.

Best Practice for Node.js Apps
```
project/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── tests/
│
├── package.json
└── README.md

```

📌 Folder Explanation
| Folder           | Purpose                                 |
| ---------------- | --------------------------------------- |
| **config/**      | Database, JWT, environment config       |
| **controllers/** | Request handlers (business logic entry) |
| **services/**    | Reusable logic functions                |
| **routes/**      | All API routes                          |
| **models/**      | Database models (Mongoose / Sequelize)  |
| **middlewares/** | Auth middleware, logging, validation    |
| **utils/**       | Helper functions                        |
| **tests/**       | Unit tests                              |


✔ If using CommonJS

File extensions: .js
Exports: module.exports = {}

✔ If using ES Modules

Use in package.json:
```
{
  "type": "module"
}

```

