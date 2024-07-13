// Array provides you an ordered collection of data

var arr = [10, 'jimmy', true, 19.5]

console.log(arr)

// Access the index values


console.log(arr[1])

// using other way to access the values

var a = arr[0]

console.log(a)

// replacing elements in array using index

arr[0] = 'riyo'

console.log(arr)

//console.log() using to print line space

// finding the array length

console.log('the length of the array is', arr.length)

console.log()

// inbuilt js array methods

var arr2 = [12, 14, 56, 57]

var c = arr2.pop()

console.log(c)

//arr2.pop()
console.log(arr2)

// using push method

arr2.push(100)

console.log(arr2)

// shift method it is similar to pop reverse it removes the starting of the elements

var d = arr2.shift()
console.log(d)

console.log('Shifted array', arr2)

// unshifted array

arr2.unshift(102)
console.log('Unshiftes array', arr2)
console.log(arr[1])

