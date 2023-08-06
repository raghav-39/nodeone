// this is the study of the inbuilt modules that is provided by the node.js
const os = require('os');
// this gives us the info about the current users
user = os.userInfo();
console.log(user);

// gives us the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS)

// there is one more built in module inside node js and that is called path
const path = require('path')
// console.log(path.sep) // this is the path seperator