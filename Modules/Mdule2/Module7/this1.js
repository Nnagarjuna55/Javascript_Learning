// using this key word

//console.log(this) // prit empty braces {}

// function displayThis(){
//     console.log(this)
// }

// displayThis()

// object inside function using this key word

// let myObj1 = {
//     name:'Arjun',
//     age:23,
//     myFn1:function(){
//         console.log(this)
//     }
// }
// myObj1.myFn1()

//object inside the function inside the another function using this key word

let myObj2 = {
    name:'Arjun',
    age:23,
    myFn2:function(){
        function myFn3(){
            console.log(this)
        }
        myFn3()
    }
}

myObj2.myFn2()