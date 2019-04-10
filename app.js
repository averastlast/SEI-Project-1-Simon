console.log("Hello World")

//Testing CSS class color change
document.querySelectorAll("input.start")[0].addEventListener("click", function() {
    console.log("x")
    document.querySelectorAll("input.yellow")[0].classList.add("lightOn")})
    //remove
    // document.querySelectorAll("input.yellow")[0].classList.remove("lightOn")

let patternBulid = []

//Blink Animation Test
document.querySelectorAll("input.red")[0].addEventListener("click", function() {

console.log("x")
setTimeout(function(){ document.querySelectorAll("input.red")[0].classList.add("lightOn") }, 1000);
setTimeout(function(){ document.querySelectorAll("input.red")[0].classList.remove("lightOn") }, 5000);


})



//Random Number Generator 
console.log(randomNum(1,5))
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }