function Person(_name,_age){
    var name=_name
    this.age = _age

    this.getName = function(){
        return name
    }
}

let Person1 = new Person('A', 24)
console.log(Person1.getName())