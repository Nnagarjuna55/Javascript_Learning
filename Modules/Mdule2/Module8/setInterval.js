const { clearInterval } = require("timers")

function hello() {
    console.log("Hello")
}
let timer=setInterval(hello, 1000)

setTimeout(function () {
    clearInterval(timer)
},4000)