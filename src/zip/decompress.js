import fs  from 'fs'
import zlib from 'zlib'

export const decompress = async () => {
    const gzip = zlib.createGunzip();
    const read = fs.createReadStream('./archive.gz');
    read.pipe(gzip).pipe(process.stdout);
};

decompress()