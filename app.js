console.log("Hello World")

//Objects to hold player and computer characteristics
let user = {
    turnStatus: false,
    patternArray: []
} 
let computerSIMON = {
    turnStatus: true,
    patternArray: []
} 
//Varible so that the SAME random number is pushed to both arrays
let randomNumDef = randomNum(0,4)

//Global Variables
let switchOn = null;
let winRazz
let onBTNClickCount = 0;

//On Button, alters by click number
document.querySelectorAll("input.on")[0].addEventListener("click", function() { 
    onBTNClickCount+=1; 
//ON    
    if (onBTNClickCount % 2 !== 0) {
        switchOn = true
    }
//OFF    
    else {
        switchOn = false
    }
})

//Start Button
document.querySelectorAll("input.start")[0].addEventListener("click", function() {
    startButtonAnimation ()
    setTimeout(function() {startButtonAnimation ()}, 1000)
    if (switchOn || winRazz) {

    }
})

//Gameplay
function playGame () {
    for (let i = 0; i < 9; i++) {
        computerSIMON.patternArray.push(randomNum(0,4))
    }
}

//Pattern Maker
function patternMaker() {
    computerSIMON.patternArray.push(randomNumDef)
}

//Comparing Arrays
function comparePattern(x, y) {
let arrayStatus = null;
    if (x.length === y.length) {
        arrayStatus = true;
    }
    for (let i = 0; i < x.length; i++) {
        if (x[i]===y[i]) {
            arrayStatus = true;
        }
        else {
           return arrayStatus = false;
        } 
    }
    return arrayStatus;
}

//Turn Changer
function turnChanger() {
    if (!user.turnStatus) {
        computerSIMON.turnStatus === true
        console.log("false turn")
    }
    else if (user.turnStatus) {
        computerSIMON.turnStatus === false
    }
  }

//When user clicks div[i]
//push i into userarray and does animation&sound??
function playerTurn (i) {
    document.querySelectorAll("input.color")[i].addEventListener("click", function() {
        user.patternArray.push(i)
        blinkbeepDiv (i)
    })

}

//Singular Div Animation. i is div refers to div class Time needs to be parametertized?
function blinkDiv (i) {
    setTimeout(function(){ document.querySelectorAll("input.color")[i].classList.add("lightOn") }, 300);
    setTimeout(function(){ document.querySelectorAll("input.color")[i].classList.remove("lightOn") }, 1000);
}

//Singular Div Audio ????
function audioDiv () {
    
}

//Singular Div AnimatedAudio WORK!!!!!!
function blinkbeepDiv (i) {
    blinkDiv (i)
    //audioDiv (i)
}
//Startup flash (flashes all squares to signal beginning of game) WORK!!!!!!!
function startButtonAnimation () {
    for (let i = 0; i < 4; i++) {
        blinkDiv (i)
        //audioDiv (i)
    }
}

//Random Number Generator 
//Source: https://www.w3schools.com/js/js_random.asp
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Pattern Array needs to be limited by level mode. Start with "Easy" array length 8.