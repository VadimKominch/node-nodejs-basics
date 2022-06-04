import fs from 'fs';

export const remove = async () => {
    fs.access('./files/fileToRemove.txt', fs.constants.F_OK, (err) => {
        if (err) throw new Error("FS operation failed")
        fs.promises.unlink('./files/fileToRemove.txt', (err) => {
            if(err) throw new Error("FS operation failed")
        })
    })
};

remove()