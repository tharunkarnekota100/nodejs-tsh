var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.writeFile('test2.txt','my new content by overriding previous ',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8086)