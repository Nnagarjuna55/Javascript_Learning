// in js objects key value pairs
// create a object
var person = {
    // initialize the values

    firstName: ["kjfkj", "kjdschkj"],
    lastName: 'jorden',
    age: 40,
    car: 'res'
}

console.log(person)

// access the values inside of the objects

console.log(person.car) // . notation using to access the values

// using brackets to access the values

console.log(person['firstName'])

console.log(person.firstName[0])

console.log('Create object inside of the object')

// create one capital

var cap = {
    firstName: 'steve',
    lastName: 'jobs',
    age: 120,

    isAvenger: true,

    friends: ['joky', 'jimmy', 'toyak', 'tom'],

    address: {
        state: 'New york',
        city: {
            cityName: 'bng',
            pincode: 1234

        }

    }

}

// accesss the values

console.log(cap)

// access the inside of the values in object

console.log()

console.log(cap.address.city.cityName)

// access the index of friends names

console.log(cap.friends[2])

console.log()

cap.isAvenger = false
console.log(cap)

// update the values inside of the object

cap.movies = ['roy', 'tokky', 'jessy']

console.log(cap)

console.log()

// using delete method

delete cap.age
console.log(cap)