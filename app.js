const path = require('path');
const os = require('os');
const fs = require('fs');

console.log("mains"); 
global.setTimeout(() => {
   console.log("after timeout"); 
}, 20);

console.log(global); 


//Path Module
const pathObj = path.parse(__filename);
console.log("pathObj:", pathObj);

//OS Module
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log("Total memory: " + totalMemory);
console.log(`Total Free Memory: ${freeMemory}`);

//FS module
const files = fs.readdirSync('./');
console.log("Files in this folder via sync: " + files);

fs.readdir('./', function(err, f) {
   if(err) console.log("Error: " + err);
   else console.log("Files in this folder: ", f);
});

const Logger = require('./logger');
const logger = new Logger();


//Register a listener, // can also use addListener
logger.on ('messageLogged', (arg) => {
   console.log('Listener 2 is called', arg);
});
logger.on ('messageLogged', (arg) => {
   console.log('Listener 1 is called', arg);
});

logger.log('message');