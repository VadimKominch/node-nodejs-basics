import process from 'process'

export const parseEnv = () => {
    const prefix = "FPS_"
    const result = Object.keys(process.env)
    .filter(el=>el.startsWith(prefix))
    .map(el => `${el}=${process.env[el]}`)
    .join("; ")
    console.log(result)
};

parseEnv()