//
// let arr = [1, 2, 3, 4, 5]
// let squaredArr = []

// for(let i =0; i<=arr.length; i++){
//     squaredArr.push(arr[i]*arr[i])
// }

// console.log(squaredArr)

// map
// const num = [1, 2, 3, 4, 5]
// const squaredNum = num.map(function(n){
//     return n*n
// })

// console.log(squaredNum)


// example covert money to dollars using map

const transactions = [1000, 2000, 4005, -495, -3950, 8934]

let introDoller=80

let transactionsInDollar = transactions.map((amount)=>{
    return (amount/introDoller).toFixed(0)

})

console.log(transactionsInDollar)

// using foreach

let transactionsInDollar1 = transactions.forEach((amount)=>{
    //return (amount/introDoller).toFixed(0)
    console.log((amount/introDoller).toFixed(0))

})

console.log(transactionsInDollar1)