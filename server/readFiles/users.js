import fs from 'fs'
import { addUsers }  from '../utils/modifyUsers.js';

const url = "./files/users.txt";

export const readUsers = () => {
  try {
    const data = fs.readFileSync(url, 'utf8')
    const users = addUsers(data);

    return users;
  
  } catch (err) {
    console.error(err)
  }
}

  