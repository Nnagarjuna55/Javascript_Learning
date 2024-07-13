// const num = [1, 2, 3, 4, 10]

// let sum=0

// for(let i=0; i<=num.length; i++){
//     sum = sum+ num[i]
// }

// console.log(sum)

let num = [1, 2, 3, 4, 10]

let result = num.reduce(function(acc, value){
    let updatesum= acc+value
    return updatesum
},0)

console.log(result)


// product of values
let result1 = num.reduce(function(acc, value){
    let updatesum= acc*value
    return updatesum
},1)

console.log(result1)
