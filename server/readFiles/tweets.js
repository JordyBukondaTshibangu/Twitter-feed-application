import fs from 'fs';
import { addTweets } from '../utils/modifyTweets.js';

const url = "./files/tweets.txt";


export const readTweets = () => {
  try {
    const data = fs.readFileSync(url, 'utf8')
    const tweets = addTweets(data);

    return tweets;
  
  } catch (err) {
    console.error(err)
  }
}

  