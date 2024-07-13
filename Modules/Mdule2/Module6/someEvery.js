const transactions = [1000,3000, 2000, 4000, 6000, 495, 499]

let resultSome=transactions.some(function(n){
    return n>0
})

console.log(resultSome)

// Every will be checks on the every element

let resultEvery=transactions.every(function(n){
    return n>0
})

console.log(resultEvery)