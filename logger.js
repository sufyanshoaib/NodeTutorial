const EventEmitter = require('events');
var url =  'http://';

class Logger extends EventEmitter {
    
    log(message) {
        console.log("message:", message);
    
        //Rasie an event
        this.emit('messageLogged',  { id: 1, url: url} ); //used mostly, emit event with argument
    }
    
}

module.exports = Logger;

