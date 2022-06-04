import fs from 'fs'

export const copy = async () => {
  fs.access("./files",(err)=>{
      if(err) throw new Error("FS operation failed")
  })
  fs.access("./files_copy",(err)=>{
    if(err) {
        fs.mkdir("./files_copy",(err)=>{
            if(err) throw new Error("FS operation failed")
        })
    } else {
        throw new Error("FS operation failed")
    }
})


fs.readdir("./files",(err, files) => {
    if(err) throw new Error("FS operation failed")
    files.forEach(file => {
        fs.copyFile(`./files/${file}`,`./files_copy/${file}`,(err)=>{
            if(err) throw new Error("FS operation failed")
        })
      })
})


    
};

copy()