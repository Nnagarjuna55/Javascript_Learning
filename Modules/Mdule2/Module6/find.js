const transactions = [1000, 2000, 4005, -495, -3950, 8934]

let firstWithdrawl = transactions.find(function(n){
    return n<0
})

console.log('first withdrawl ->',firstWithdrawl)

// find the index

let firstWithdrawlIndex = transactions.findIndex(function(n){
    return n<0
})

console.log('Index ->',firstWithdrawlIndex)

