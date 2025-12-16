# Handling JSON and Forms in Node.js (HTTP Module)

Includes:
- Handling POST data manually
- Parsing JSON body
- Parsing URL-encoded forms (HTML form data)

## 1. Basic POST Handling (Raw Data)

Node.js http module does not automatically parse request body.
We must manually collect the incoming chunks:
```
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Raw Body:", body);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("POST data received");
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Send POST request");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));

```

## 2. Parsing JSON Body

When client sends JSON:
```
{
  "name": "John",
  "age": 25
}

```
Server Code to Parse JSON
```
if (req.method === "POST" && req.url === "/json") {
  let body = "";

  req.on("data", chunk => {
    body += chunk;
  });

  req.on("end", () => {
    const data = JSON.parse(body);   // convert string → JSON object

    console.log("Parsed JSON:", data);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "success", received: data }));
  });
}

```

## 3. Parsing URL-encoded Form Data

HTML form submits data like:
```
name=John&age=25&city=Delhi

```

Use Node’s built-in querystring module:
Server Code
```
const querystring = require("querystring");

if (req.method === "POST" && req.url === "/form") {
  let body = "";

  req.on("data", chunk => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = querystring.parse(body); // Convert to JS object

    console.log("Form Data:", data);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "form received", received: data }));
  });
}

```

4. Example HTML Form (for testing URL-encoded)

Save as form.html:
```
<form action="http://localhost:3000/form" method="POST">
  <input type="text" name="name" placeholder="Your Name">
  <input type="number" name="age">
  <button type="submit">Submit</button>
</form>

```

| Type            | Content-Type Header                 | Parse Method              |
| --------------- | ----------------------------------- | ------------------------- |
| **JSON**        | `application/json`                  | `JSON.parse(body)`        |
| **URL-encoded** | `application/x-www-form-urlencoded` | `querystring.parse(body)` |
| **Raw text**    | any                                 | body as string            |
