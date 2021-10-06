var http =require('http');

http.createServer((req,res)=>{
    res.write('Hello World i am helping in npm');
    res.end();
}).listen(8092)