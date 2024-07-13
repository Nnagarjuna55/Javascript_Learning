// using maps in js key value pairs

var myMap = new Map();

// store the values

myMap.set(0, "Naga")
myMap.set(1, "janu")
myMap.set(2, "riyo")
myMap.set(3, "jimmy")

//console.log(myMap)

// how to grab the values in map

// // calling the keys
// for (let key of myMap.keys()) {
//     console.log(`key is ${key}`)
// }
// //calling values
// for (let values of myMap.values()) {
//     console.log(`value is ${values}`)
// }

// Key value are calling
// for (let [key, value] of myMap) {
//     console.log(`key is: ${key} and value is: ${value}`)
// }

// using the for each

//myMap.forEach((key) => console.log(`${key}`));
//myMap.forEach((values) => console.log(`${values}`));

myMap.forEach((key,values)=>console.log(`${key} and key is ${values}`));

// myMap.delete(2);
// console.log(myMap)
