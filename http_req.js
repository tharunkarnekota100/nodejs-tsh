var http = require('http');

http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
    console.log('server running..')
}).listen(8081)


//copy paste in server.js file and node server.js and localhost:8081/products