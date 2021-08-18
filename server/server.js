const http = require('http');
const { readUsers } = require('./users/users');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});

// read files ( in the user file)

readUsers;
// insert files in data ()
// format data
// dispay formatted data
// call a route to display data in the frontend



// handle frontend request


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});