// setTimeout (cb, 2000)
// using asynchronous
console.log("Before")
function greet() {
    console.log("Hello setTimeOut print")
}

setTimeout(greet, 5000)

console.log("After")