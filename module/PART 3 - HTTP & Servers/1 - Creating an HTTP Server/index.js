const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('Hello..! , This run server!');
    res.end();
});

server.listen(3000, ()=>{
    console.log("Sever runing on 3000 prot");
    
});