import  http  from 'http'
import outputData from './displayData/displayOutput.js'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});

// to display the data call the following function
outputData();

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});