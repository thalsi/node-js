# Node.js http Module — FULL EXPLAIN + EXAMPLES

Node.js has a built-in module called http.

It is used to:

✔ Create a server
✔ Listen on a port
✔ Receive requests
✔ Send responses
✔ Handle routing
✔ Handle different methods (GET, POST, PUT, DELETE)

You do NOT need to install anything.

Just require:
```
const http = require('http');

```

## 1. Create a Simple HTTP Server

```
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

```

Explanation

- http.createServer() → creates server
- (req, res) → request & response
- writeHead() → sets status code + headers
- end() → sends response & close
- listen(3000) → server on port 3000

Open browser →
👉 http://localhost:3000

You will see Hello World.

## 2. Read Request URL (Routing)

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page</h1>");
    } 
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});

🔍 Explanation

This is manual routing:
| URL      | Output     |
| -------- | ---------- |
| `/`      | Home Page  |
| `/about` | About Page |
| others   | 404        |


## 3. Handling GET Request with JSON

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/data") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ name: "Thasleeh", language: "Node.js" }));
    }
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

🔍 Output

If you open:
👉 http://localhost:5000/data

You will get:

```
{
 "name": "Thasleeh",
 "language": "Node.js"
}

```
## 4. Handling POST Request

POST request means: Client sends data → Server reads data

Example: Read Body Data
```
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/save") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString(); // joining data
        });

        req.on("end", () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data received", body: body }));
        });
    }
});

server.listen(6000, () => {
    console.log("Server running on http://localhost:6000");
});


```

🔍 Test using Postman / Thunder Client

POST → http://localhost:6000/save

Send JSON:
```
{"msg":"Hello"}

```

Response:
```
{
  "message": "Data received",
  "body": "{\"msg\":\"Hello\"}"
}

```

## 5. Serving HTML File

You can serve a file using fs + http.

```
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", "utf8", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
});

server.listen(7000, () => {
    console.log("Server running on http://localhost:7000");
});

```

index.html will be displayed in browser.

## 6. Full Mini API (CRUD) Example

```
const http = require("http");

let items = ["Apple", "Mango"];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/items") {
        res.end(JSON.stringify(items));
    }

    else if (req.method === "POST" && req.url === "/items") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            items.push(JSON.parse(body).name);
            res.end(JSON.stringify(items));
        });
    }

    else if (req.method === "DELETE" && req.url.startsWith("/items")) {
        const index = req.url.split("/")[2];
        items.splice(index, 1);
        res.end(JSON.stringify(items));
    }

    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

server.listen(8000, () => console.log("API on http://localhost:8000"));

```