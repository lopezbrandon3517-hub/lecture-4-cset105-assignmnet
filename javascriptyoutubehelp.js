const prompt = require(`prompt-sync`)();


// console.log("hello" + "3")

// console.log(64.78 * 3)

// console.log(20.95 + 7.99)

// console.log("$" + "28.93")

// console.log('items (' + (1 + 1) + '): $' + (2095 + 799) / 100)

// console.log('tools (' + (5 + 6) +'): $' + (3098 + 5434) / 100)

// console.log(`items (${1 + 1})`)


// console.log(`${20 / 5}`)

// console.log(`${6 * 6}`)
// how to make simple equations

// console.log(`items(${1 + 1}): $${(2095 + 799) / 100}`)
// more harder equation

// console.log(`items(${2 + 2}): $${(3000 + 4000) / 100}`)

//another example

// let cool = 8;
// console.log(cool);
//output will be 3 easy variable.

// let calculation1 = 2 + 2;
// console.log(calculation1)

// console.log(calculation1 + 2);

// let result = calculation1 + 2;
// console.log(result)

// let message = 'hello';
// console.log(message);

// if (true){
//     console.log(`hello`);
// }  else {
//     console.log(`else`);
// }
// simple if statement

// if (false){
//     console.log(`yessir`)
// }  else {
//     console.log (`negas`)
// }

//simple if statement again just messing with the true and false

// if (false){
//     console.log(`this is understandable`);
// } else {
//     console.log(`this is not do able`)
// }

// if (30 > 16){
//     console.log("you can drive");
// } else {
//     console.log("you cannot drive")
// }
//this was a simple bolean if statement. good example and refrence

// if (20 === 21){
//     console.log("this is true")
// } else {
//     console.log("this is not true")
// }

// this was another example but with false.

// if (5 < 4){
//     console.log("you cannot drive");
// } else if (2 > 2){
//     console.log("you can drive");
// } else {
//     console.log("you cannot drive");
// }
// triple if statement where all are wrong and prints last statement

// let variable1 = 5;

// if (variable1 < 1){
//     console.log("cannot go");
// } else if (variable1 < 1){
//     console.log("still csnnot go");
// } else {
//     console.log("kill yourself");
// }
// triple if statement and else where no condition is met so prints final line
//good example

// const randomNumber = Math.random();

// if (randomNumber >= 0 && randomNumber < 1 / 3){
//     console.log("rock");
// } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
//     console.log("paper");
// } else if (randomNumber >=  2 / 3 && randomNumber < 1){
//     console.log("scissors");
// }
// this is a rock paper scissors random generator
// great example to look at

// console.log(!true);
//this is the not operater flips boolean value to the opposite

// if (5) {
//     console.log(`truthy`)
// }

// var cartQuantity = 5;

// if (cartQuantity > 0) {
//     console.log("cart has products");
// }

// let variable1 = (11 * 11)

// if (variable1 > 100) {
//     console.log("variable1 is greater than 100");
// } else if (variable1 < 100) {
//     console.log("variable1 is under 100");
// }
//this is letting the result of equation be the variable good example.

// function function1 () {
//     console.log("hello");
//     console.log(2 + 2);
// }

// function1(); 

// function calculateTax() {
//     console.log(1000 * 0.1);
// }

// calculateTax();

// this is example of creating your own function and calling it back

// function CalculateMultiples(){
//     console.log(5 * 6);
// }

// CalculateMultiples();
// this was another exampple of making your own function and calling it back.

// function calculateTax1(parameter1){
//     console.log(parameter1 * 0.1);
// }

// calculateTax1(2000);
// calculate tax function example.

// function calculateTax(cost, taxPercent){
//     console.log(cost * taxPercent);
// }

// calculateTax(3000, 0.1);
//  example with 2 parameters then calling the function back

// function calculateTax(cost, taxPercent = 0.1){
//     console.log(cost * taxPercent);
// }

// calculateTax(1000);

// this is another pararmeter example but using a default value. 

// const product = {
//     name: `socks`,
//     price: 1090
// };
// console.log(product);

// if (5 > 7)
//     console.log("five is greater than seven")
//     else if (2 < 1){
//         console.log("two is less than one")
//     } else console.log("choose again")

// var cool = {
//     price: 20,
//     quantity: 5
// }
// console.log(cool.price)
// console.log(cool.quantity)

// var yolo = {
//     quantity: 5,
//     price: 10
// }
// console.log(yolo)


// let variable1 = prompt("please enter a number")

// if (variable1 > 5){
//     console.log("your input is greater than five")
// }
// else console.log("your input is less than five")

//this is using prompt function

// let variable2 = prompt("please enter a number")

// if (variable2 > 50){
//     console.log("your input is greater than fifty")
// } else if (variable2 < 50){
// console.log("your input is less than fifty")
// }

// also taking input with prompt function and using if statements and loops

// let firstname = prompt("please enter your first name");
// console.log(firstname)
// let lastname = prompt("and your last name, please?:");
// console.log(lastname)
// console.log("it is nice to meet you,", firstname, lastname,"!");
//very easy exercise taking input and giving it back then asking for more input. then returning it back

// let usersnum1 = Number(prompt("please enter your first number"));
// console.log(usersnum1);
// let usersnum2 = Number(prompt("please enter your second number"))
// console.log(usersnum2);
// console.log(`the sum of your two numbers is ${usersnum1 + usersnum2}`);
//very easy example using number function to turn their string into a number then using prompt function to take input and add their 2 inputs to get the sum

// let usersnum = Number(prompt("please enter a number"));
// console.log(usersnum)
// console.log(`the square of your number is ${usersnum * usersnum}`);
//easy ask for number then return them the square of their number.

// let usersnum = Number(prompt("please enter a number"));
// if (isNaN(usersnum)){
//     console.log("hey why didint you enter a number");
// } else console.log (`the square of your number is ${usersnum * usersnum}`);
//this is using isNaN function. asking for input then giving square

// let usersnumber1 = Number(prompt("please enter a number"));
// console.log(usersnumber1);
// if (isNaN(usersnumber1)){
//     console.log("why didint you enter a number")
// } else console.log(`the square of your number is ${usersnumber1 * usersnumber1}`);

// for(let num1 =1; num1 <= 10; num1++){
//     console.log(num1);
// }
// this is a for loop good example.

// for(let num21 = 5; num21 <= 50; num21++){
//     console.log(num21)
// }
//another example of a for loop

// for(let num21 = 5; num21 <= 50; num21+=2){
//     console.log(num21)
// } 

// let number = 1
// while(number <= 10){
//     console.log(number);
//     number = number + 1;
// }
//while loop example



// let number1 = 1;
// do{
//     console.log(number1);
//     number1 = number1 + 1
// } while(number1 <=10)
//    this is a do while loop example

let input1 = Number(prompt("please enetr a nummber"));
if (isNaN(input1)){
    console.log("try again")
} else console.log("thank you")
let input2 = Number(prompt("please enter another number"));
if (isNaN(input2)){
    console.log("try again")
}else console.log("thank you")

console.log(input1 * input1 - input2 * input2);