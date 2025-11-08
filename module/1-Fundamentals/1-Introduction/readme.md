# 1. Introduction to Node.js

## 1. What is Node.js?

- Node.js is a runtime environment that allows you to run JavaScript outside the browser (like on your computer or a server).
    - Normally, JavaScript runs inside browsers (like Chrome or Firefox).
    - Node.js lets you run JavaScript on your system, just like Python or C++.

- So, Node.js helps you use JavaScript to:
    - Build backend servers
    - Create command-line tools
    - Handle file systems
    - Connect to databases
    - Build real-time apps (like chat, games, APIs)

## How Node.js Works (V8 Engine + Event Loop)

- V8 Engine:
    - Node.js uses Google’s V8 engine, the same engine used by Google Chrome.
    - It takes JavaScript code and converts it into machine code (fast execution).

Example:
```
console.log("Hello Node!");

```
The V8 engine runs this JS directly on your computer — not inside a browser.

Event Loop:
    - Node.js is single-threaded but uses non-blocking I/O.
    - This means Node can handle many tasks at once without waiting.

Example (blocking vs non-blocking):
Non-blocking (Node.js way):
```
const fs = require('fs');

console.log("Start reading file...");

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("End of program");

```

Output order:
```
Start reading file...
End of program
(file content shows after a moment)

```
Node reads the file in the background and continues with other tasks → that’s the event loop.

## Node.js vs Browser JavaScript

| Feature            | Browser JavaScript         | Node.js                      |
| ------------------ | -------------------------- | ---------------------------- |
| Environment        | Runs in browser            | Runs on server/computer      |
| Access to DOM      | ✅ Yes                      | ❌ No (no HTML)               |
| File System Access | ❌ Not allowed              | ✅ Allowed (`fs` module)      |
| Modules            | ES Modules (import/export) | CommonJS (require/export)    |
| Example Use        | Web pages, UI              | APIs, backend servers, tools |

---



