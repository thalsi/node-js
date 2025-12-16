const http =require("http");

const server=http.createServer((req, res)=>{
    const url=req.url;

    if(url==="/"){
        res.writeHead(200, { "content-type": "text/plain"});
        res.end("Home Page")
    }

    if(url==="/html"){
        res.writeHead(200,{ "content-type": "text/html"});
        res.end("<h1>Header</h1> <p>Html from the server side...</p>")
    }

    if(url==="/json"){
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message:"This is JSON" }));
    }

});

server.listen(3000, ()=>{ console.log("Server is runing... in PORT=3000"); });