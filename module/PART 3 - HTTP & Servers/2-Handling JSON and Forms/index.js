const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.method === 'POST'){
        let body='';

        req.on("data", chunk=>{
            body+=chunk.toString();
        });

        req.on("end", ()=>{
            console.log("Row Body:", body);
        
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("POST Data Recived");
    });

    } else{
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Send POST request");
    }

});

server.listen(3000, ()=>console.log("Server is runing.."));