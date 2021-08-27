var a= require('./demo.json')
var fs = require('fs')
var { incrementFromDB }= require('./Node.js')

var j= a.certification
j.forEach(element => {
    console.log(element.month,element.course)
    return j
});
// var a1 = a.certification.map((each)=>{
//     // return "cour"(each),"month"(each)
//     return JSON.stringify(each)
// })
// for each and map diff
///if any updation requires 
var money =[10,100,1000]
var increment = incrementFromDB
// var increment = fs.readFileSync('27thaug2021.txt', function(error,increment){
//     console.log("flie reads", increment.toString(),error)  
//     console.log("yo yo read",increment)  
// })
var updateMoney = money.map((each)=>{
    return each*each*increment
})

console.log("Updated Money ",updateMoney,j)

module.exports = {updateMoney,j}