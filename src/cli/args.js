import process from 'process'

export const parseArgs = () => {
    const args = process.argv.slice(2)
    const tempArray = []

    for (let index = 0; index < args.length; index += 2) {
        // Do something if you want with the group
        tempArray.push(args.slice(index, index+2));
    }
    
    console.log(tempArray
        .map(el=>`${el[0].slice(2)} is ${el[1]}`)
        .join("; "))
};

parseArgs()