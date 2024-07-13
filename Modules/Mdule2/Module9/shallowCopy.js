// using spred operator {...}

let firstPerson = {
    name: 'Adam',
    age: 24,
    address: {
        city: 'laknow',
        state: 'up'
    }
}
let seconPerson = { ...firstPerson }
seconPerson.name = 'stave'
seconPerson.address.city = 'Delhi'
console.log(firstPerson)
console.log(seconPerson)