// Hoisting function

console.log(a)
greet()
// add(3,5)

var a = 'hi'

function greet(){
    console.log("Hello")
}


var add = function(a,b){
    console.log(a+b)
}

add(3,5)
