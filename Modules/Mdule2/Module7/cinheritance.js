class Person{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }
    Welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this.classStrength=_classStrength
    }
    test(){
        super.Welcome()
    }

}

class Student{
    constructor(_name,_age,_cgpa){
        super(_name,_age)
        this.cgpa=_cgpa
    }

}

let Person1 = new Person('x',24)
let Tacher1 = new Teacher('a',50, 78)
let Student1 = new Student('B',16, 9.0)

console.log(Person1)
console.log(Teacher1)
console.log(Student1)

Teacher1.test()