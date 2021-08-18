const fs = require('fs');
const url = "./files/tweets.txt";
const modifyTweets = require('../utils/modifyTweets');

module.exports.readTweets = fs.readFile(url, 'utf8' , (error, fileContent) => {
    if (error) {
      console.error(error);
      return;
    }
    modifyTweets.addTweets(fileContent);
})
  