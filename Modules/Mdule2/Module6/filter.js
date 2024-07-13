// let numbers = [1, 2, 33, 454, 55, 35]
// let evenArray=[]

// for(let i=0; i<=numbers.length;i++){
//     if(numbers[i]%2==0){
//         evenArray.push(numbers[i])
//     }
// }

// console.log(evenArray)


// filter

let num = [1, 3, 66, 55, 67]

let evenNum = num.filter(function(n){
    return n%2===0
})

console.log(evenNum)


// example

const transactions=[100, 3000, 5000, -3040, 394, -3900, 4905]

const dipositeAmount = transactions.filter(function(amount){
    return amount>0
})

console.log(dipositeAmount)