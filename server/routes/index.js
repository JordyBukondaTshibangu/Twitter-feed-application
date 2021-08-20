import express from 'express';
import { readTweets }  from '../readFiles/tweets.js';
import { readUsers } from '../readFiles/users.js';


const users = readUsers();
const tweets = readTweets();

const router = express.Router();

router.get('/users', (req,res) => {
        
    if(!users){
        res.json({ message : "NO USER FOUND" })
        return;
    }
    res.status(200).json({ users });
})

router.get('/feeds', (req, res) => {
        
    if(!users){
        res.json({ message : "NO USER FOUND" })
        return;
    }
    res.status(200).json({ tweets });
})

export default router;