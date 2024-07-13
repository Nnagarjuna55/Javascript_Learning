// using the loops to print the values

// var a = 'Hello world'

// // using loop condition

// for(var i=0; i<10; i++){
//     console.log(a)
// }

// you have to write square each element of the array

var num = [2, 3, 4, 5, 6, 7,8]
var squreArr = []
for(var i=0; i<num.length;i++){
    //console.log(num[i]*num[i])
    squreArr.push(num[i]*num[i])
}

console.log('Squares of the elements is : ', squreArr)