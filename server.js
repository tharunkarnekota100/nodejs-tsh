var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('emoji.json',(err,data)=>{
        res.write(data);
        res.end();
        console.log('API is running');
    })
}).listen(8095)