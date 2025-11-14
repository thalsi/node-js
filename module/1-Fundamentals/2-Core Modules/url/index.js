const { URL } = require('url');

const meURL = new URL('https://example.com:8080/path/page?name=user&age=14#section2');

console.log(meURL);
console.log(meURL.searchParams.get('name'));


const http = require('http');

http.createServer((req, res) => {
    const myUrl = new URL(req.url, 'http://localhost:3000');

    console.log('Path:', myUrl.pathname);
    console.log('Query params:', myUrl.searchParams);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('URL parsed successfully!');
}).listen(3000);

console.log("Server running on port 3000");

