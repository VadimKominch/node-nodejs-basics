import cp from 'child_process'


export const spawnChildProcess = async (args) => {
    console.log(args)
    const child = cp.fork('./files/script.js',args, { stdio: [process.stdin, process.stdout, null, 'ipc'] });
};

spawnChildProcess([1,2,3])