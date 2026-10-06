const prompt = require(`prompt-sync`)();


// function add(x,y,u){
//     let sum = x + y + u
//     return sum
// }
// console.log(add(5,5,5))

// function add(t,y){
//     let sum = t + y
//     return sum
// }

// console.log(add(3, + 3))

//dont forget commas case sensitive. thats the add function

// function min(t,u){
// if (t<u)
//     return t;
// else if(u<t)
//     return u;
// }

// console.log(min(8,3))

//this is finding the minimum of 2 numbers/variables. part 1 assigment


// function min(k,o,p){
//     if (k<o && k<p)
//         return k;

//     else if (o<k && o<p)
//         return o;

//     else if (p<o && p<k)
//         return p
// }

// console.log(min(9,3,5))

//this is finding the minimum of 3 just adding more variables. also add else if and recall past letures.


// function min(k,p,e,t){
//     if (k<p && k<e && k<t)
//         return k;

//     else if (p<k && p<e && p<t)
//         return p;

//     else if (e<t && e<p && e<p)
//         return e;

//     else if (t<e && t<p && t<k)

//         return t;
// }

// console.log(min(5,8,6,2))

// see thats doing 4 just more else ifs



// function isEven(t){
//     if(t%2==0)
//         return true
//     else return false

// }

// console.log(isEven(51))

//this is iseven function. percentage module to see whether its divisible by 2. problem
//to find whether even or odd

// function isEven(y){
//     if(y%2==0)
//         return true
//     else return false
// }
// console.log(isEven(61))

// same as last just this is practice.



// function nth(n){
//     let ans=2
//     for(i=0; i<n; i++){
//         ans=ans +4*i
//     }

//     return(ans)
// }

// function multi(u){
//     let ans=1 
//     for (t=0; t<u; t++){
//         ans=ans + 
//     }
// }

// function nthTermFibonacci(n){
//     if(n==1|| n==2) return 1;
//     return nthTermFibonacci(n-1) + nthTermFibonacci(n-2);
// }


// function nthTerm(n){
//     let x = 2
//     for(let i = 1; i<n; i++)
//         x = x + 4*i
//     return x
// }
// console.log(nthTerm(1))
// console.log(nthTerm(2))
// console.log(nthTerm(3))
// console.log(nthTerm(4))
// console.log(nthTerm(5))
// console.log(nthTerm(6))
//working function


// function nthTerm(n){
//     let x = 2
//     let a = ""
//     for(let i = 0; i<n; i++){
//         x = x + 4 * i
//         a = a + x + " "
//     }
//     return a
// }
// function factorial(n){

// }


var lives = 3;
var easy = 0;
var points = 0;
var hard = 0;
var medium = 0;
var numba1 = 0;
var numba2 = 0;
var operater = ""
var realanwser = 0;
function chooseGameMode(){
    let gamemode = Number(prompt("chosose mode 1 for max mode and select 2 for three out"));
    if (gamemode === 1) {
        gamemode = "max"
        console.log('you have chosen max mode')
    } else if (gamemode === 2){
        gamemode = "three out";
        console.log("you have chosen three out mode")
    } 

    let difficulty = prompt("please choose your difficulty: (easy, medium, or hard)");
    
    if (difficulty === "easy"){
        console.log("you have chosen easy difficulty");
        easy = 1;
        medium = 0;
        hard = 0;

    }
    else if (difficulty === "medium") {
        console.log("you have chosen medium difficulty")
        easy = 0;
        medium = 2;
        hard = 0;
        
    }
    else if (difficulty === "hard") {
        console.log("you have chosen hardest difficulty")
        easy = 0;
        medium = 0;
        hard = 3;
    }
    return gamemode;
} 