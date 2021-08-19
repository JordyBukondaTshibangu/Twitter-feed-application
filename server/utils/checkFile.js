import fs from 'fs';

export const checkFileExistence = url => {
    if (!fs.existsSync(url)) return false;
    return true;
}