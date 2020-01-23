const http = require('http'); //http is EventEmitter, so it can listen and emit events

//const server = http.createServer();
//Register a low level event, we dont use it in real world
/*server.on('connection', (socket) => {
    console.log('New Connection');
});*/

const server = http.createServer((req, res) => {
    if( req.url === '/') {
        res.write("hello on home page");
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
