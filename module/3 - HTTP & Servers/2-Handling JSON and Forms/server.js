const http = require("http");
const querystring = require("querystring");

const server=http.createServer((req, res)=>{
    if(req.method==='POST'){
        let body="";

        req.on("data",chunk=>{
            body+=chunk;
        });

        req.on("end",()=>{
            const contentType=req.headers['content-type'];

            if(contentType=='application/json'){
                const data=JSON.parse(body);
                res.end(JSON.stringify({type:"JSON", data: data}));
            }else if(contentType=='application/x-www-form-urlencoded'){
                console.log(body);
                
                const data=querystring.parse(body);
                res.end(JSON.stringify({type:"form", data: data}));
            }else{
                   res.end("Unsupported content type");
            }


        });
    } else {
    res.end("Send a POST request");
  }
});

server.listen(3000, ()=> console.log("Server is Runing on PORT :-3000"));
