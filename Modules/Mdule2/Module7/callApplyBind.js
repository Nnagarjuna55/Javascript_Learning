let Person1 ={
    firstName :'steve',
    lastName : 'jobs',
    age : 24
}

let personDetails = function(city, power){
    console.log(` I am ${this.firstName} ${this.lastName} and my age ${this.age} years old and i am from ${city} I habe the ${power}`)
}

let Person2 = {

    firstName :'stony',
    lastName : 'jacks',
    age : 30

}

// using call method

personDetails.call(Person2, 'New yark', 'Iron man armour')

// using the apply method 

personDetails.apply(Person2, ['New yark', 'I am iron armour'])

// using Bind method

let myFun = personDetails.bind(Person2, 'New Yark', 'I am iron armour')

console.log(myFun)
myFun()


// Person1.personDetails()
// Person2.personDetails()
