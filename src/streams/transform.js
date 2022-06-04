import {Transform} from 'stream'

export const transform = async () => {
    const uppercase = new Transform({
        transform(chunk,encoding,callback) {
            callback(null,chunk.toString().toUpperCase());
        },
    });
    process.stdin.pipe(uppercase).pipe(process.stdout)
};

transform()