# 🧩 PART 3 — Advanced Express Topics (Express.js)

This section covers real‑world backend features you will use in almost every production Express application.


## 1️⃣ Query Parameters & Route Params

🔹 Route Parameters

- Used when data is part of the URL path.

Example URL
```
GET /users/25
```

Route
```
app.get('/users/:id', (req, res) => {
const userId = req.params.id;
res.send(`User ID: ${userId}`);
});
```
📌 req.params is always an object.


🔹 Multiple Route Params

```
app.get('/users/:id/posts/:postId', (req, res) => {
const { id, postId } = req.params;
res.json({ id, postId });
});
```

🔹 Query Parameters

Used for filters, search, pagination.

Example URL
```
GET /products?category=mobile&price=low
```

Access Query Params
```
app.get('/products', (req, res) => {
const { category, price } = req.query;
res.json({ category, price });
});
```
📌 req.query values are strings by default.

🔹Route Params vs Query Params              
|Feature	|Route Params |	Query Params    |
|-----------|-------------|-----------------|
|Position	|URL path	  |After ?          |
|Required	|Usually	  |Optional         |
|Use case	|IDs	      |Filters, sorting |

---

2️⃣ File Uploads (Using Multer)
🔹 Install Multer
```
npm install multer

```

🔹 Basic File Upload Setup
```
const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

```

🔹 Single File Upload

```
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('File uploaded successfully');
});

```
📌 HTML input name must be image

🔹 Multiple Files
```
app.post('/uploads', upload.array('images', 5), (req, res) => {
  res.send('Multiple files uploaded');
});

```

3️⃣ Authentication (JWT – JSON Web Token)
🔹 Install JWT
```
npm install jsonwebtoken

```

🔹 Generate Token (Login)
```
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const user = { id: 1, name: 'Admin' };

  const token = jwt.sign(user, 'SECRET_KEY', {
    expiresIn: '1h'
  });

  res.json({ token });
});

```

🔹 Middleware to Verify Token
```
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).send('Token required');

  jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    req.user = decoded;
    next();
  });
}

```

🔹 Protected Route
```
app.get('/dashboard', verifyToken, (req, res) => {
  res.send(`Welcome ${req.user.name}`);
});

```

📌 JWT = Stateless authentication


4️⃣ Cookies & Sessions

🔹 Cookies (Client-side storage)

Install
```
npm install cookie-parser

```

Setup
```
const cookieParser = require('cookie-parser');
app.use(cookieParser());

```

Set Cookie
```
app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'Thasleeh');
  res.send('Cookie set');
});

```

Read Cookie
```
app.get('/get-cookie', (req, res) => {
  res.send(req.cookies.user);
});

```

🔹 Sessions (Server-side storage)

Install
```
npm install express-session

```

Setup
```
const session = require('express-session');

app.use(session({
  secret: 'MY_SECRET',
  resave: false,
  saveUninitialized: true
}));

```

Use Session
```
app.get('/login', (req, res) => {
  req.session.user = 'Admin';
  res.send('Logged in');
});

app.get('/profile', (req, res) => {
  res.send(req.session.user);
});

```