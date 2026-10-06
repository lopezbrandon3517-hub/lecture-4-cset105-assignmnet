const prompt = require(`prompt-sync`)();

// let num1 = prompt("please enter a number")

// console.log(num1)
// console.log("thank you for entering a number")
//  let num2 = prompt("please enter another number")
//  console.log(num2)

// console.log(num1 + num2);

// console.log("cat" + "cool")

let num1 = prompt("please enter a number")
if (num1 > 50){
    console.log("your input is greater than fifty");
}else if (num1 < 50){
    console.log("your input is less than fifty");
}
else if (num1 = 50){
    console.log("your input is equal to fifty")
}
