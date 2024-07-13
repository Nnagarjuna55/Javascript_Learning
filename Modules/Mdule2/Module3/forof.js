// Using for of loop

var scores = [70, 80, 87, 90]
// syntax

for(var score of scores){
    score=score+5
    console.log(score)
}

// Method - entries()

var colors= ['yellow','red','blue','pink']
for(var [index, color] of colors.entries()){
    console.log(index+' -> ', color)
}

// String using to for of loop access the value

console.log()
var str='Hello'
for(var c of str){
    console.log(c)
}