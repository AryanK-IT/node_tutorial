// OS Module
const { log } = require('console');
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

//method returs the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const curretOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(curretOs);
