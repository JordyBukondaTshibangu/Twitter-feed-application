const fs = require('fs');
const url = "./files/users.txt";
const modifyUsers  = require('../utils/modifyUsers');

module.exports.readUsers = fs.readFile(url, 'utf8' , (error, fileContent) => {
    if (error) {
      console.error(error);
      return;
    }
    modifyUsers.addUsers(fileContent);
    
  })
  