
const prompt = require(`prompt-sync`)();

function userInput(){
let num1 = Number(prompt("please enter a number"))
while(isNaN(num1)){
    console.log("invalid input")
    num1 = Number(prompt("please enter a number"))
}
return num1
console.log("thank you")
}
let input1 = userInput()
let input2 = userInput()
let input3 = userInput()
console.log(`the sum is ${input1 + input2 + input3}`)

//this is the function key

