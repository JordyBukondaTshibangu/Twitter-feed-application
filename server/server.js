const http = require('http');
require('./displayData/displayOutput');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});