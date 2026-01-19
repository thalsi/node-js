# 💾 PART 5 — Databases Integration

## 1️⃣ MongoDB (with Mongoose)

### Relationships & Population (Easy Explanation with Examples)

---

## 🔗 What is a Relationship in MongoDB?

A **relationship** means **how one data is connected to another data**.

### Examples

* User → Posts
* Student → Courses
* Order → Products

MongoDB does **not** use joins like SQL.
Instead, it uses **Embedding** or **Referencing**.

---

## 📦 Two Ways to Create Relationships

1️⃣ **Embedding** (data inside data)
2️⃣ **Referencing** (connect using ID)

---

## 1️⃣ EMBEDDING

**Embedding** means putting one document **inside another document**.

### ✅ When to use?

* Small data
* Data always used together

---

### 🧑 Example: User with Address (Embedding)

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: {
    city: String,
    pincode: Number
  }
});

module.exports = mongoose.model('User', userSchema);
```

### Stored Data

```json
{
  "name": "Asha",
  "email": "asha@gmail.com",
  "address": {
    "city": "Kochi",
    "pincode": 682001
  }
}
```

### 👍 Pros

* Simple
* Fast

### 👎 Cons

* Not reusable
* Not good for large data

---

## 2️⃣ REFERENCING (Most Important)

**Referencing** means storing **only the ID** of another document.

This is similar to **foreign key** in SQL.

---

## 🔁 Types of Relationships

* 🔹 One-to-One
* 🔹 One-to-Many
* 🔹 Many-to-Many

---

## 🔹 One-to-One Relationship

### Example: User ↔ Profile

### Profile Schema

```js
const profileSchema = new mongoose.Schema({
  age: Number,
  phone: String
});

module.exports = mongoose.model('Profile', profileSchema);
```

### User Schema (Reference)

```js
const userSchema = new mongoose.Schema({
  name: String,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  }
});

module.exports = mongoose.model('User', userSchema);
```

### Stored User Data

```json
{
  "name": "Rahul",
  "profile": "65fa123abc456"
}
```

---

## 🔹 One-to-Many Relationship (Most Common)

### Example: User → Posts

One user can have **many posts**

---

### Post Schema

```js
const postSchema = new mongoose.Schema({
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Post', postSchema);
```

### User Schema

```js
const userSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('User', userSchema);
```

### Stored Post Data

```json
{
  "title": "My first post",
  "user": "65fauser123"
}
```

---

## 🔹 Many-to-Many Relationship

### Example: Student ↔ Courses

---

### Course Schema

```js
const courseSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Course', courseSchema);
```

### Student Schema

```js
const studentSchema = new mongoose.Schema({
  name: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }
  ]
});

module.exports = mongoose.model('Student', studentSchema);
```

---

## 🌟 POPULATION (Very Important)

**Population** means:

> Convert **ID** into **full data**

---

### ❌ Without Populate

```js
User.find()
```

Result:

```json
{
  "name": "Rahul",
  "profile": "65fa123abc456"
}
```

---

### ✅ With Populate

```js
User.find().populate('profile')
```

Result:

```json
{
  "name": "Rahul",
  "profile": {
    "age": 24,
    "phone": "9876543210"
  }
}
```

---

## 🔁 Populate One-to-Many Example

```js
Post.find().populate('user')
```

Result:

```json
{
  "title": "My first post",
  "user": {
    "name": "Rahul"
  }
}
```

---

## 🧠 Easy Rule to Remember

| Situation     | Use         |
| ------------- | ----------- |
| Small data    | Embedding   |
| Large data    | Referencing |
| Reusable data | Referencing |
| Need populate | Referencing |

---

## ✅ Final Summary

* **Embedding** = data inside data
* **Referencing** = store ID
* **populate()** = ID → full object
* One-to-Many & Many-to-Many → Referencing + Populate

---

✅ You can directly save this as:
`relationships-and-population.md`

If you want next:

* CRUD with relationships
* Real project example (User + Order)
* Diagram-based explanation

Just tell me 👍
