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

