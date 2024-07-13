function placeOrder(drink){
    return new Promise (function(resolve, reject){
        if(drink==='coffee'){
            resolve('Order for coffeee resolved')
        }
        else{
            reject("the order for coffee rejected")
        }
    })
}

function processOrder(order){
    return new Promise(function(resolv){
        console.log('order is being procesed')
        resolve(`${order} and is resolved`)
        
    })
}

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// }) // solution with promisess


//Async await - Keyword

async function serveOrder(){
    try{
        let orderPlaced= await placeOrder('coffee')
        console.log(orderPlaced)
        let processedOrder = await processedOrder(orderPlaced)
        console.log(processedOrder)
    }catch(error){
        console.log(error)
    }
}
serveOrder()
