```
test-1
│── node_modules
│── models
│   └── User.js
│── routes
│   └── userRoutes.js
│── config
│   └── db.js
│── server.js
│── .env
│── package.json

```

1️⃣ Install required packages

Run inside test-1 folder:
```
npm init -y
npm install express mongoose dotenv

```


2️⃣ .env file (IMPORTANT)

Create .env in root folder
```
MONGO_URI=mongodb://127.0.0.1:27017/simplecrud
PORT=3000

```

3️⃣ MongoDB connection (config/db.js)
```
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ DB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

```

4️⃣ Model (models/User.js)

```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
});

module.exports = mongoose.model('User', userSchema);

```