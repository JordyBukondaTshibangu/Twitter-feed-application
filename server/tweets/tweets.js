const fs = require('fs');
const url = "./files/tweets.txt";

module.exports.readTweets = fs.readFile(url, 'utf8' , (error, data) => {
    if (error) {
      console.error(error);
      return;
    }

    const tweets = [];
    const content = data.split("\n");

    content.forEach(element => {
        const items = element.split('>');
        let author = items[0].trim();
        items.shift();
        let content = items;
        tweets.push({ author, content});
    })
    
    // special function to display and return tweets
    // console.log(tweets)
  })
  