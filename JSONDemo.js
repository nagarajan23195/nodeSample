var validJSOn = {
    "name": "Naga",
    "id": 23424,
    "role": function() { },
    "work": "tcs",
    "add": {
        "pincode": "53453"
    },
    "certification": [
        {
           "course": "java" ,"month": "aug"
        }, {
            "course":"devop" ,"month": "sep"
        }, {
            "course":"js","month": "dec"
        }
    ]

}

var a = JSON.stringify(validJSOn)
console.log("String :", a)
console.log("json again", JSON.parse(a))