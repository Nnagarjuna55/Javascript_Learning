// using method in class

class Car{
    constructor(name){
        this.brand=name
    }

    // create a method
    present(){
        return 'I am '+this.brand;
    }
}

const myCar=new Car("Ford")

console.log(myCar.present())
