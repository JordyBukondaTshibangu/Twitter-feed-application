const http = require('http');
const { readUsers } = require('./users/users');
const { readTweets } = require('./tweets/tweets');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});

// readUsers;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});