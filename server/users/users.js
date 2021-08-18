const fs = require('fs');
const url = "./files/users.txt";
const displayUsers  = require('../displayData/displayUsers');

module.exports.readUsers = fs.readFile(url, 'utf8' , (error, fileContent) => {
    if (error) {
      console.error(error);
      return;
    }

    displayUsers.displayUsers(fileContent);
    
  })
  