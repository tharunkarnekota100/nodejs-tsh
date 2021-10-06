var http = require('http');

http.createServer((req,res)=>{
    res.write('hello world');
    res.end();
    console.log('server running..')
}).listen(8080)

//copy paste in server.js file and node server.js and localhost:8080