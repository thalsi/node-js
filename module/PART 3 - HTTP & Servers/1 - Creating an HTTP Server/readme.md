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


B. Sending Response Headers

Headers define content type, status, etc.

Example: Sending HTML with headers
```
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write("<h1>Welcome!</h1>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

```

Important Header Fields
| Header             | Description                   |
| ------------------ | ----------------------------- |
| `Content-Type`     | tells browser type of content |
| `text/plain`       | plain text                    |
| `text/html`        | HTML code                     |
| `application/json` | JSON data                     |
| `statusCode: 404`  | Not Found                     |
| `statusCode: 500`  | Server error                  |

C. Handling Routes Manually

In pure HTTP server, you manually check req.url.

Example: Simple Routing
```
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Home Page");
    }
    else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("About Page");
    }
    else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end("Contact Page");
    }
    else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

```


How It Works

req.url = route requested by client
You compare route and send response
You manually set status code and content


## ✅ 2. Handling JSON and Forms in Node.js

Node.js does not automatically parse POST data.
You must manually read the body using req.on("data") and req.on("end").

We will cover:
How POST data works
Handling JSON body
Handling URL-encoded form body (key=value&key2=value2)
Complete server example

✅ A. How POST Data Works in Node.js

Node.js receives POST data in chunks, so you collect it like this:
```
let body = "";

req.on("data", chunk => {
    body += chunk;
});

req.on("end", () => {
    console.log("Final Body:", body);
});

```

✅ B. Handling JSON POST Data

Client Sends (JSON)
```
{ "name": "Thasleeh", "age": 24 }

```
Server Code
```
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/json") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const data = JSON.parse(body); // convert string → JSON

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "JSON received successfully",
                received: data
            }));
        });
    } else {
        res.end("Send POST to /json");
    }
});

server.listen(3000, () => console.log("Server running on 3000"));

```

✅ C. Handling URL-Encoded Forms

(ex: <form method="POST">)

Example incoming body:
```
name=Thasleeh&age=24

```

Parse using querystring module
```
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/form") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const formData = querystring.parse(body); // converts to JS object

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Form received",
                received: formData
            }));
        });
    } else {
        res.end("Send POST to /form");
    }
});

server.listen(3000, () => console.log("Server running on 3000"));

```

✔ Example Output
```
{
  "message": "Form received",
  "received": {
    "name": "Thasleeh",
    "age": "24"
  }
}

```

✅ D. Accepting Both JSON & Forms (Auto-detect)
```
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            let contentType = req.headers["content-type"];
            let data;

            if (contentType === "application/json") {
                data = JSON.parse(body);
            } 
            else if (contentType === "application/x-www-form-urlencoded") {
                data = querystring.parse(body);
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ received: data }));
        });
    }
});

server.listen(3000, () => console.log("Server running on 3000"));

```