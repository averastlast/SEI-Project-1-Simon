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

//Start Button
document.querySelectorAll("input.start")[0].addEventListener("click", function() {
    startButtonAnimation ()
    setTimeout(function() {startButtonAnimation ()}, 1000)
    setTimeout(function() {blinkDiv (randomNumDef)}, 2100)
})

//Pattern Maker
function patternMaker() {
    user.patternArray.push(randomNumDef)
    computerSIMON.patternArray.push(randomNumDef)
    console.log(computerSIMON.patternArray + user.patternArray)
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

//Have a number link to a colored div?
function assignColorDiv(i) {
    return document.querySelectorAll("input.color")[i]
}

//Time of blink needs to be varied based on either pattern feed back or user click

//Blink Animation Test

document.querySelectorAll("input.color")[0].addEventListener("click", function() {
console.log("x")
setTimeout(function(){ document.querySelectorAll("input.color")[0].classList.add("lightOn") }, 300);
setTimeout(function(){ document.querySelectorAll("input.color")[0].classList.remove("lightOn") }, 1000);
})

//Main Animation. Time needs to be parametertized...
function blinkDiv (i) {
    setTimeout(function(){ document.querySelectorAll("input.color")[i].classList.add("lightOn") }, 300);
    setTimeout(function(){ document.querySelectorAll("input.color")[i].classList.remove("lightOn") }, 1000);
}

//Startup flash (flashes all squares to signal beginning of game)
function startButtonAnimation () {
    for (i = 0; i < 4; i++) {
        blinkDiv (i)
    }
}

//Random Number Generator 
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Pattern Array needs to be limited by level mode. Start with "Easy" array length 8.