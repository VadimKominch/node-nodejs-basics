import fs from 'fs'

export const rename = async () => {
    fs.access('./files/wrongFilename.txt', fs.constants.F_OK, (err) => {
        if (err) throw new Error("FS operation failed")
        fs.access('./files/properFilename.md', fs.constants.F_OK, (err,f) => {
            if (!err) throw new Error("FS operation failed")
            fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (error) => {
                if (error) throw new Error("FS operation failed")
              });
          });
      });


};

rename()