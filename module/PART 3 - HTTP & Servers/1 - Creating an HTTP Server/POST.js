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
