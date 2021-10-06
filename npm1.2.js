var http =require('http');
var uc = require('upper-case');

http.createServer((req,res)=>{
    res.write(uc.upperCase('Hello World i am helping in npm'));
    res.end();
}).listen(8093)