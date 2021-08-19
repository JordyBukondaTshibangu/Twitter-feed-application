import { readTweets }  from '../readFiles/tweets.js';
import { readUsers } from '../readFiles/users.js';


const users = readUsers();
const tweets = readTweets();

const outputData = () => {
    for(let i = 0; i < users.length; i++){

        let user = users[i]
    
        let string = `\n\t${user.name} \n`
    
        for(let j = 0; j < user.followers.length; j++){
    
            let userFollower = user.followers[j].trim().toLowerCase();
    
            tweets.filter(tweet => {
    
                if(tweet.author.toLowerCase().trim() == userFollower){
                    
                    string += `\t\t @${userFollower} : ${tweet.content}\n`
                    return {
                        author : userFollower,
                        content : tweet.content
                    }
                }
            })
    
        }
        console.log(string)
    }
}

export default outputData



