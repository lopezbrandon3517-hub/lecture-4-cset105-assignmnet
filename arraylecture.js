const prompt = require(`prompt-sync`)();

//oldway
// let item1 = "milk"
// let item2 = "egg"
// let item3 = "frostedflakes"
// let item4 = "salami"
// let item5 = "juice"
// console.log(`i had ${item2} in the morning`)
//old way of calling variables


// let grocerylist = ["milk", "egg", "frostedflakes", "salami", "juice"]

// console.log(`i had ${grocerylist[1]} for breakfast`)
//this is the new way of calling variables with array

//id name email age


//my own
// let studentinfo = ["nate", "27856783", "nate@gmail.com", "age"]
// console.log(`his name is ${studentinfo[0]}`)
//my own


// let student1 = ["jose", "id", "21", "jose@gmail.com"]
// let student2 = ["sarah"]
// console.log(`${student1[0]} and ${student2[0]} are friends`)


// let grocerylist = ["milk", "egg", "frsotedflakes", "salami", "juice", "bread"]

// for (let i=0; i < grocerylist.length; i++){
//     console.log(grocerylist[i])
// }
//loop array VERY IMPORTANT

// let grocerylist = ["milk", "egg", "frsotedflakes", "salami", "juice"]
// grocerylist.push("bread")
// console.log(grocerylist)
//added bread to the line using .push function

// let grocerylist = ["milk", "egg", "frsotedflakes", "salami", "juice"]



// let number = [1, [2, 3,], 4]
// console.log(number[1])
//this is an array in an array


// let usersinput = prompt("enter a number");
// let usersinput1 = prompt("enter a number");
// let usersinput2 = prompt("enter a number");
// let usersinput3 = prompt("enter a number");
// let usersinput4 = prompt("enter a number");

// Number(usersinput)
// console.log(usersinput)

// let usersinputs =[usersinput, usersinput1, usersinput2, usersinput3, usersinput4,];

// console.log(usersinputs)

// let ui = Number(prompt("please enter a number"))
// console.log(ui)

// let usersinput = Number(prompt("please enter a number"));

// let usersarray = [usersinput]




// let arr = []
// let sum = 0

// let usersinput = Number(prompt("how many numbers do you want"));
// for(let i = 0; i < usersinput; i++){
//     let numbers = Number(prompt("numbers"));
//     arr.push(numbers)
//     sum = sum + numbers
// }
// console.log(arr)
// console.log(sum)

//VERY IMPORTANT




// let previousitem = 0
// let currentitem = 1
// let arr = [previousitem, currentitem]
// let usersinput = Number(prompt("how many numbers you want"));
// for(let i = 0; usersinput - 2; i++){
//     let nextitem = previousitem + currentitem
//     arr.push(nextitem)
//     previousitem = currentitem
//     currentitem = nextitem
// }
// console.log(arr)


// let arr = [3, 7, 12, 8]
// let input = Number(prompt("input the index number"))
// arr.splice(input, 1)
// console.log(arr)
//very important

// function removeitems(){
//     let arr = [3, 7, 12, 8]
// let input = Number(prompt("input the index number"))
// arr.splice(input, 1)
// console.log(arr)
// }
// removeitems()
//same as last but made it into a function


// function additems(){
//     let arr = [3, 7, 12, 8]
// let input = Number(prompt("input the index number"))
// let item = Number(prompt("item please"))
// arr.splice(input, 0, 0, item)
// console.log(arr)
// }
// additems()

// let arr = []

// console.log("if you want to add item to your grocery list select 1", "if you want to search for item in your list select 2", "to quit program select 3", "select 4 if you want to remove a item from your list", "select 5 if you want to print the list");
// let input = (Number(prompt("please select a number 1-5")));
// if (input > 5){
//     console.log("please select a number 1-5")
// } else if (input = 1){
    
// }


// let str = "welcome to cset and we loved it here"
// let spiltedstr = str.split(" ")
// console.log(spiltedstr)

// let str = "welcome to cset and we loved it here"
// let spiltedstr = str.split(" ")
// console.log(spiltedstr)
// console.log(spiltedstr.join("_"))



// let arr = []
// let sum = 0

// let usersinput = Number(prompt("how many numbers do you want"));
// for(let i = 0; i < usersinput; i++){
//     let numbers = Number(prompt("numbers"));
//     arr.push(numbers)
//     sum = sum + numbers
// }
// console.log(arr)
// console.log(sum)


// console.log("if you want to add item to your grocery list select 1", "if you want to search for item in your list select 2", "to quit program select 3", "select 4 if you want to remove a item from your list", "select 5 if you want to print the list");
// let input = (Number(prompt("please select a number 1-5")));
// if (input > 5){
//     console.log("please select a number 1-5")
// } else if (input = 1){
//     console.log("please select how many items you have on your grocery list")
// }


let arr = [9, 8, 5, 7]
console.log(Math.max(...arr))