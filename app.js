console.log("Hello World")

//Testing CSS class color change
document.querySelectorAll("input.start")[0].addEventListener("click", function() {
    console.log("x")
    document.querySelectorAll("input.yellow")[0].classList.add("lightOn")})

let patternBulid = []