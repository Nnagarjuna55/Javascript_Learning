// Class inheritance using extend key word

class Car {
    constructor(name) {
        this.brand = name

    }
    present() {
        return 'I have a' + this.brand;
    }
}

// using extend key word

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ',it is a' + this.model;
    }
}

const myCar = new Model(" Ford", "Mustang");
console.log(myCar.show())