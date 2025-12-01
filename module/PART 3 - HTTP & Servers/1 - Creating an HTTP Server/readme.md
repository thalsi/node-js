# ✅ 1. Creating an HTTP Server in Node.js

Node.js provides a built-in module called http to create basic web servers.

A. Basic Server Setup
✅ Code Example
```
const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello, This is a basic HTTP server!");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});


```

Explanation

require('http') → imports the HTTP module.
http.createServer() → creates a server.
req → request object.
res → response object.
res.write() → send data.
res.end() → finish the response.
server.listen(3000) → start server on port 3000.