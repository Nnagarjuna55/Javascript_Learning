let firstPerson = {
    name: 'Adam',
    age: 24,
    address: {
        city: 'laknow',
        state: 'up'
    }
}

let seconPerson=JSON.parse(JSON.stringify(firstPerson)) // Deep copy

seconPerson.address.city='Delhi'

console.log(firstPerson)
console.log(seconPerson)