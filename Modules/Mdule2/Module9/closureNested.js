function greet() {
    let name = 'steve'
    function displayName() {
        console.log('Hi' +name)
        let age = 25
        function displayAge(){
            console.log('my age is' +age + "" + name)
        }
        return displayAge

    }
    return displayName
}

let g1 = greet()
g1()
let g2 = g1()
console.log(g2)
g2()
