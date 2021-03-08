const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('tut66.html','utf-8');

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);

});


server.listen(80,'127.0.0.3',()=>{
    console.log('listening on port 80');

});