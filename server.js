const express= require('express')
const Port = 5000
var { updateMoney, j }= require('./arrayReadFromJSON.js')
const server = express()

server.get("/",function(res,res){
    console.log("got request")
    res.send({"aa":"bb",updateMoney,j})
})
server.listen(Port, function(){
    console.log("server is listen on port", Port)
})