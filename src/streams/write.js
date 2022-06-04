import fs from 'fs'

export const write = async () => {
    const writeable = fs.createWriteStream('./files/fileToWrite.txt')
    process.stdin.on('data',(chunk)=>{
        writeable.write(chunk)
    })
};

write()