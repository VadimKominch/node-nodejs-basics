import path from 'path';
import {fileURLToPath} from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let unknownObject;
const assertObj = {
    assert:{type:"json"}
}
if (random > 0.5) {
    import("./files/a.json",assertObj).then(res => unknownObject = res)
} else {
    import("./files/b.json",assertObj).then(res => unknownObject = res)
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

