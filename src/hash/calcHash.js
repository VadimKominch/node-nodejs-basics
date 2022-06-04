import crypto from 'crypto'
import fs from 'fs/promises'

export const calculateHash = async () => {
    // Write your code here
    const data =  await fs.readFile('./files/fileToCalculateHashFor.txt')
    .then(res => crypto.createHash('sha256').update(res).digest('hex'))

    return data
};

const res = await calculateHash()
console.log(res)