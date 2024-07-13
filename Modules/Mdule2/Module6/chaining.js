let arr = [
    {name:"A",age:22, gender:"F"},
    {name:"B",age:45, gender:"M"},
    {name:"C",age:34, gender:"F"},
    {name:"D",age:31, gender:"M"},
    {name:"E",age:12, gender:"M"},
    {name:"F",age:35, gender:"F"},
    {name:"G",age:55, gender:"M"}
]

// let males = arr.filter(function(obj){
//     return obj.gender == "M"
// })
// let agesofMales=males.map(function(male){
//     return male.age
// })

let malesAges = arr.filter(function(obj){
    return obj.gender == "M"
}).map(function(male){
    return male.age
})

// console.log(males)
// console.log(agesofMales)

console.log(malesAges)