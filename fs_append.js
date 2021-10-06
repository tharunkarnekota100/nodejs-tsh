var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.appendFile('test.txt',' msg you want to add without res.write() in arrow func will take previous res.write automatically with previous content only skips new content ',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8084)