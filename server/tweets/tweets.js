import fs from 'fs';
import { addTweets } from '../utils/modifyTweets.js';

const url = "./files/tweets.txt";

export const readTweets = fs.readFile(url, 'utf8' , (error, fileContent) => {
    if (error) {
      console.error(error);
      return;
    }
    addTweets(fileContent);
})
  