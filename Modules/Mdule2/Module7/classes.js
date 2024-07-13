class Person{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }
    Welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

let Person1 = new Person('A',32)
let Person2 = new Person('B',23)
let Person3 = new Person('C',25)

Person2.Welcome()

console.log(Person1)
console.log(Person2)
console.log(Person3)