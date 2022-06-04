import {Worker} from "worker_threads";
import os from 'os'




export const performCalculations = async () => {
    const numOfCpus = os.cpus().length
    const promises = []
    
    for(let i = 0;i<numOfCpus;i++) {
        promises.push(new Promise(function(resolve) {
            let worker = new Worker("./worker.js",{workerData:{num:10+i}})
            worker.on("message",res=>{ 
                resolve({status:'resolved',data:res})
            })
            worker.on('error',() => {
                resolve({status:'error',data:null})
            })
        }))
    }
    const result = await Promise.all(promises)
    return result
};

const res = await performCalculations()
console.log(res)