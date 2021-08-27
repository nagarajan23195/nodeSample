var fs = require('fs')
console.log(".......",process.argv[2])

var a = process.argv[2]

if(a){
fs.readFile(a,function(error,data){
if(error){
    console.log("error fuck off")
}else{
    console.log("got d data", data.toString())
    console.log(data)
}
})
}