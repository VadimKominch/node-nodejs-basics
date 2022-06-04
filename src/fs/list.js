import fs from 'fs'

export const list = async () => {
    fs.readdir("./files",(err, files) => {
        if(err) throw new Error("FS operation failed")
        files.forEach(file => {
            console.log(file)
          })
    })
};

list()