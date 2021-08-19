import fs from 'fs';
import { addTweets } from '../utils/modifyTweets.js';
import  { checkFileExistence }  from '../utils/checkFile.js'

const url = "./files/tweets.txt";


export const readTweets = () => {
  try {

        if(!checkFileExistence(url)){
          console.log("THE FILE DOES NOT EXIST")
          return new Error();
        }

        const data = fs.readFileSync(url, 'utf8')

        if(!data) {
          console.log("THE FILE IS EMPTY");
          return new Error();
        };
        
        const tweets = addTweets(data);

        return tweets;
  
  } catch (err) {
    console.error(err)
  }
}

  