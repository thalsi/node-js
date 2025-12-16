# PART 4 — Express.js (Most Popular Framework)

Express.js is the most popular Node.js framework used to build web servers and REST APIs easily and efficiently.

## 1️⃣ Introduction to Express

What is Express?

Express.js is a minimal, fast, and flexible Node.js web framework.

It helps you:
    Create servers easily
    Handle routes (URLs)
    Use middleware
    Build REST APIs

👉 Express is built on top of Node.js HTTP module.

Why use Express?

|Without Express	|With Express          |
|-------------------|----------------------|
|Complex code	|Clean & simple            |
|Manual routing	|Easy routing              |
|Hard middleware	|Powerful middleware   |
|More boilerplate|	Less code              |

## 2️⃣ Install & Setup Express

Step 1: Create project
```
mkdir express-app
cd express-app
npm init -y
```

Step 2: Install Express
```
npm install express
```

Step 3: Basic Server Setup
```
const express = require('express');
const app = express();


const PORT = 3000;


app.get('/', (req, res) => {
res.send('Hello Express!');
});


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
```
📌 Visit: http://localhost:3000


## 3️⃣ Middleware Concept
What is Middleware?

Middleware is a function that runs between request and response.

📌 Flow:
```
Request → Middleware → Route → Response
```

Example Middleware
```
app.use((req, res, next) => {
console.log('Middleware executed');
next(); // move to next middleware/route
});
```


Types of Middleware

1. Application-level
2. Router-level
3. Built-in
4. Third-party

Built-in Middleware
JSON Parser
```
app.use(express.json());
```

URL Encoded Data
```
app.use(express.urlencoded({ extended: true }));
```

Custom Middleware Example
```
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);
```

## 4️⃣ Serving Static Files
What are Static Files?

HTML
CSS
Images
JS files

Create Public Folder
```
project
├── public
│ ├── index.html
│ └── style.css
```

Use express.static()
```
app.use(express.static('public'));
```
📌 Open: http://localhost:3000/index.html

## 5️⃣ Routing in Express
Basic Routing
```
app.get('/about', (req, res) => {
res.send('About Page');
});


app.post('/login', (req, res) => {
res.send('Login Success');
});
```

HTTP Methods

- GET
- POST
- PUT
- DELETE

## 6️⃣ Route Parameters
```
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

📌 URL: /user/10

## 7️⃣ Query Parameters
```
app.get('/search', (req, res) => {
res.send(req.query);
});
```
📌 URL: /search?name=John&age=25


## 8️⃣ Modular Routing (Best Practice)
Why Modular Routes?

- Clean code
- Easy maintenance
- Scalable project


Folder Structure
```
project
├── routes
│ ├── user.routes.js
│ └── product.routes.js
├── app.js
```

user.routes.js
```
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
res.send('User list');
});


router.get('/:id', (req, res) => {
res.send(`User ${req.params.id}`);
});


module.exports = router;
```

app.js
```
const express = require('express');
const app = express();

const userRoutes = require('./routes/user.routes');

app.use('/users', userRoutes);

app.listen(3000);
```
📌 URL:
/users
/users/1

