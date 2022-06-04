import fs, { write } from 'fs'

export const read = async () => {
    // Write your code here
    const fileStream = fs.createReadStream('./files/fileToRead.txt');
    fileStream.on('data',(chunk)=> {
        process.stdout.write(chunk.toString('utf-8'))
    }) 
};

read()