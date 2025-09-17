const http = require('node:http')
const hostname = 'localhost'
const port = 8080
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'data.txt')

fs.writeFileSync(filePath,"Hello Anh em")
const content = fs.readFileSync(filePath,'utf-8')
console.log("File content:", content);
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plan')
    res.end('Hello Wolrd \n')
})

server.listen(port,hostname,()=>{
    console.log(`Sever is running at http://${hostname}:${port}/`);
    
})