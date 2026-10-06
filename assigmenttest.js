const prompt = require(`prompt-sync`)();

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

function randomOperatorGenerator(){

    if (easy === 1) {
        let pick = Math.floor(Math.random() * 9) +1;
        if (pick === 1) {
            operator = "+";
        }

        if (pick === 2){
            operator = "-";
        }

        numba1 = Math.floor(Math.random() * 9) + 1;
        numba2 = Math.floor(Math.random() * 9) + 1

        if (operator === "+") {
            actualAnwser = numba1 + numba2;
        } else {
            actualAnwser = numba1 - numba2;
        }

    }  else if (medium === 2) {
        let choose = Math.floor(Math.random() * 5) + 1

        if (choose === 1) operator = "+"
        if (choose === 2) operator = "-"
        if (choose === 3) operator = "*"
        if (choose === 4) operator = "/"
        if (choose === 5) operator = "%"


    }
}

// couldnt get further need more time and help