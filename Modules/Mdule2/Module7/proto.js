let myObj={}
console.log(myObj)

let Person1={
    name:'Ram',
    age:20

}
console.log(Person1)

console.log(Person1.hasOwnProperty('name')) 

// using constuctor function

function Person(_name, _age){
    this.name = _name
    this.age = _age

}

let Person2 = new Person('stave', 25)

console.log(Person)