const http = require('node:http')
const hostname = 'localhost'
const port = 8080
const EventEmitter = require('events')
const chat = new EventEmitter()

chat.on("message",(user,msg)=>{
    console.log(`${user}:${msg}`)
})

chat.emit("message","Alice","Hello")
chat.emit("message","Bob","Hello Alice")
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plan')
    res.end('Hello Wolrd \n')
})

server.listen(port,hostname,()=>{
    console.log(`Sever is running at http://${hostname}:${port}/`);
    
})