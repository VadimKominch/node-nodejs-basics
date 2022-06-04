import fs  from 'fs'
import zlib from 'zlib'

export const compress = async () => {

    const gzip = zlib.createGzip();
    const read = fs.createReadStream('./files/fileToCompress.txt');
    const write = fs.createWriteStream('./archive.gz');
    read.pipe(gzip).pipe(write);
};

compress()