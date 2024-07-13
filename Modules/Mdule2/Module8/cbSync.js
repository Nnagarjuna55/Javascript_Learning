const fs = require('fs')
console.log('First Line')

let data = fs.readFileSync('f1.txt')
console.log('file one data ->' + data)

let data1 = fs.readFileSync('f2.txt')
console.log('file 2 data ->' + data1)

console.log('Last Name')