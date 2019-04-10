console.log("Hello World")

//Start Button
document.querySelectorAll("input.start")[0].addEventListener("click", function() {

})

//Objects to hold player and computer characteristics
let user = {
    turnStatus: false,
    patternArray: []
} 
let computerSIMON = {
    turnStatus: true,
    patternArray: []
} 


//Turn checker
function turnDecider() {
  }


//Have a number link to a colored div?
function assignColorBlink(i) {
    return document.querySelectorAll("input.color")[i]
}

//Blink Animation Test
document.querySelectorAll("input.color")[0].addEventListener("click", function() {
console.log("x")
setTimeout(function(){ document.querySelectorAll("input.color")[0].classList.add("lightOn") }, 300);
setTimeout(function(){ document.querySelectorAll("input.color")[0].classList.remove("lightOn") }, 1200);
})

//Random Number Generator 
console.log(randomNum(0,4))
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

