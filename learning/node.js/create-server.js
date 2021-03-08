const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

/*The http. createServer() method turns your computer into an HTTP server. ... createServer()
 method creates an HTTP Server object. The HTTP Server object can listen to ports on your computer and 
 execute a function, a requestListener, each time a request is made.*/

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});