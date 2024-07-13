function Person(_name, _age){
    this.name = _name
    this.age = _age

}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} my age is ${this.age}`)
}

let Person1 = new Person ('ram', 29)
let Person2 = new Person ('tommy', 30)

console.log(Person1)

console.log(Person2)