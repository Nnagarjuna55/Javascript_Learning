//Using student score 
// Score is 90 to 100 print A
// score is 70 to 89 print B
// score is 50 to 69 print C
// score is < 50 print F

var studentScore = 95

if(studentScore > 90){
    console.log('Score grade is A')
}
else if(studentScore>70 && studentScore <89){
    console.log('Score grade is B')

}
else if(studentScore >50 && studentScore<69){
    console.log('Score grade is C')

}
else{
    console.log('Sore is F')
}