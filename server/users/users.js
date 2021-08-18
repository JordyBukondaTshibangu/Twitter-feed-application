import fs from 'fs'
import { addUsers }  from '../utils/modifyUsers.js';

const url = "./files/users.txt";

export const readUsers = fs.readFile(url, 'utf8' , (error, fileContent) => {
    if (error) {
      console.error(error);
      return;
    }
    addUsers(fileContent);
    
  })
  