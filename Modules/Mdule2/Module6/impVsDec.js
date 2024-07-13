//we will be given a number and we have to that if the square of that number is even or not

// writing code in imperative

// const a=5
// const aSquared =a*a
// let isEven;

// if(aSquared % 2 == 0){
//     isEven = true
// }
// else{
//     isEven = false
// }

// console.log(isEven)

// Declarative way of writing code

// using ternary operator
const checkSquqreEven=(x)=>(x*x%2===0 ? true : false)
console.log(checkSquqreEven(4))