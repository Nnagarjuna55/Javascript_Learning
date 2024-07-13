// let arr = ['Hi','I','m','naga']

// let a=arr[1]
// let b=arr[2]
// console.log(a)
// console.log(b)

// destructuring works
// let arr = ['Hi','I', ,'m','naga']
// let [a,b,c,d,e]=arr
// console.log(a)

// console.log(e)
// console.log(a)
//console.log(c)

let myObj={
    name:'ram',
    age:34,
    gender:'M',
    address:{
        country:'England',
        city:'londan'
    }

}

let {name:n, age:a, gender:g, address:{country:c}}=myObj

console.log(n)
console.log(a)
console.log(g)
console.log(c)
