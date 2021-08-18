import { readTweets }  from '../tweets/tweets.js';
import { readUsers } from '../users/users.js';


const users = readUsers();
const tweets = readTweets();

console.log(users)
console.log(tweets)