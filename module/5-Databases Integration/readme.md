# 💾 PART 5 — Databases Integration

## 1. MongoDB (with Mongoose)

This section explains how to integrate **MongoDB** with **Node.js** using **Mongoose**, covering:

* Connecting to **MongoDB Atlas**
* Creating **Schemas & Models**
* Performing **CRUD operations**
* Handling **Relationships & Population**

---

## 📌 1. What is MongoDB?

MongoDB is a **NoSQL document database** that stores data in **JSON-like documents (BSON)**.

### Key Features

* Schema-less (flexible structure)
* High performance
* Easy scalability
* Works perfectly with JavaScript

---

## 📌 2. What is Mongoose?

Mongoose is an **ODM (Object Data Modeling)** library for MongoDB and Node.js.

### Why Mongoose?

* Schema-based structure
* Built-in validation
* Easy CRUD operations
* Relationship handling (populate)

---

## 📌 3. Connect to MongoDB Atlas

### Step 1: Create MongoDB Atlas Account

1. Go to MongoDB Atlas
2. Create a **Free Cluster**
3. Create a **Database User**
4. Add IP Address (0.0.0.0/0 for development)

---

### Step 2: Install Dependencies

```bash
npm install mongoose
```

---

### Step 3: Database Connection

```js
// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

```js
// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();
connectDB();

app.use(express.json());

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 📌 4. Creating Schemas & Models

### Example: User Schema

```js
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
```

### Schema Options

* `required`
* `unique`
* `default`
* `timestamps`

---

## 📌 5. CRUD Operations

### Create (POST)

```js
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});
```

---

### Read (GET)

```js
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

```js
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
```

---

### Update (PUT)

```js
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});
```

---

### Delete (DELETE)

```js
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});
```

---

## 📌 6. Relationships in MongoDB

### Types of Relationships

* One-to-One
* One-to-Many
* Many-to-Many

---

## 📌 7. One-to-Many Relationship Example

### User & Post Relationship

#### Post Schema

```js
// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
```

---

## 📌 8. Population (Join-like Operation)

### Fetch Posts with User Details

```js
app.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('user', 'name email');
  res.json(posts);
});
```

### populate()

* Joins related documents
* Avoids duplicate data
* Cleaner API responses

---

## 📌 9. Advanced Mongoose Features

### Validation

```js
email: {
  type: String,
  match: /.+\@.+\..+/
}
```

### Middleware (Hooks)

```js
userSchema.pre('save', function(next) {
  console.log('Before saving user');
  next();
});
```

---

## 📌 10. Best Practices

* Use environment variables
* Create separate model files
* Use try/catch or async handler
* Avoid over-population
* Index frequently queried fields

---

## ✅ Summary

✔ Connected MongoDB Atlas
✔ Created Schemas & Models
✔ Performed CRUD operations
✔ Implemented Relationships
✔ Used populate() effectively

---

➡️ Next: **Authentication & Authorization (JWT, Cookies, Sessions)**
