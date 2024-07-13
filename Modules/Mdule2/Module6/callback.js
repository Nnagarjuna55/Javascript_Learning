// call back function

function printFirstName(firstname, cb){
    console.log(firstname)
    cb('jobs')
}
//printFirstName('stave', printLastName)

function printLastName(lastname){
    console.log(lastname)
}
printFirstName('stave', printLastName)




//

const isEven = (n)=>{
    return n%2==0
}
let  printResult=(evenFn, num)=>{
    const isNumEven = evenFn(num)
    console.log(`The number ${num} is an Even number ${isNumEven}`)
}

printResult(isEven, 10)
printResult(isEven, 9)
