import fs from 'fs'
import { addUsers }  from '../utils/modifyUsers.js';
import  { checkFileExistence }  from '../utils/checkFile.js'

const url = "./files/users.txt";


export const readUsers = () => {
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
        
        const users = addUsers(data);

        return users;
  
  } catch (err) {
    console.log(err.message)
  }
}

  