'use strict'

//console.log(this)

//fn -> this

// function displayThis(){
//     console.log(this)
// }

// displayThis()

//obj -> fn -> this

// let myObj = {
//     name:'Arjun',
//     age:23,
//     myFn1:function(){
//         console.log(this)
//     }
// }
// myObj.myFn1()

//obj -> fn-> fn -> this

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