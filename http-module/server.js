const http = require('http');
const port = 3000;
const host = "localhost";

const server = http.createServer((req,res)=>{
    res.end("<h1>Server created successfully.....</h1>")
});

server.listen(port,host,()=>{
    console.log(`Server running at http://${host}:${port}/`);
});