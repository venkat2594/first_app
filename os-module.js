const os = require('os');

//info about current user

const user= os.userInfo();

//method return the system update in seconds

console.log(`They system uptime is ${os.uptime()} seconds`);

const currentos= {
    name: os.type(),
    release:os.release(),
    totlamem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos);
