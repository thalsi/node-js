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
