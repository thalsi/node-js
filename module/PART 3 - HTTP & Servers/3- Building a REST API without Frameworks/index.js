const http =require('http');
const fs =require('fs');
const {parse} =require('url');
const path =require('path');

const dataFile = path.join(__dirname, "data.json");


// helper: read file
function readData(){
    const json= fs.readFileSync(dataFile );
    return JSON.stringify(json);
}

// helper: write file
function wirteData(item){
    fs.writeFileSync(dataFile, JSON.stringify(item, null, 3));
}

const server =http.createServer(async (req, res)=>{
    const {pathname} = parse(req.url, true);

    res.setHeader("Content-Type", "application/json");

    try{

    //---------------
    // GET/ User 
    //---------------
    if(pathname==='user'&& req.method==="GET"){
        const data=readData();
        return res.end(JSON.stringify(data));
    }

    

     // If route not found
     res.statusCode=404;
     return res.end(JSON.stringify({error: "Router not fond"}));

    } catch (err){
        // Global Error
        res.statusCode=500;
        res.end(JSON.stringify({error: "Server Error", detials: err.toString()}));
    }
});

server.listen(3000,()=>{
    console.log("Server is runing..., localhost:3000");
    
});