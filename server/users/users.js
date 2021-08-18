const fs = require('fs');
const url = "./files/users.txt";

module.exports.readUsers = fs.readFile(url, 'utf8' , (error, data) => {
    if (error) {
      console.error(error);
      return;
    }

    const users = [];
    const content = data.split("\n");

    content.forEach(element => {
        const items = element.split('follows');
        let name = items[0].trim();
        items.shift();
        users.push({ name, followers : items });
    })

    console.log(users);
    
  })
  