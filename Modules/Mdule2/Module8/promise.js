//how to produce a promise
let myPromise = new Promise(function (resolve, reject) {
    const a = 4
    const b = 4
    setTimeout(() => {
        if (a == b) {
            resolve('The values are equal')
        }
        else {
            reject('thevalues are not equal')
        }
    }, 2000)
})

// pending state 

//console.log(myPromise)

// fullfilled then method

//consuming your promise

myPromise.then(function(result){
    console.log(result)
})
// full filled your promise

myPromise.catch(function(failedResult){
    console.log(failedResult)
}) // rejected your promise