//TESTING
console.log("Hello World")

//Objects to hold player and computer characteristics
//Hopefully can be used in the future to hold high score data
//Set up based on beginning code, eventually this didn't have to be an object.
//Will adjust variables in the future
let user = {
    patternArray: []
}
let computerSIMON = {
    patternArray: []
}

//Global Variable
let levelLimitor = 0;

//Start Button
document.querySelectorAll("input.start")[0].addEventListener("click", function () {

    //RESETS START BUTTON VALUE AFTER LOSS OR WIN, SCORE IS ALSO RESET
    if (document.querySelector("input.start").value !== 'Initiate Contact') {
        document.querySelector("input.start").value = 'Initiate Contact'
        document.getElementById("scorekeeper").innerHTML = ""
    }

    //START ANIMATION
    setTimeout(function () { startButtonAnimation() }, 10)

    //Determines sequence length based on selected level
    if (document.querySelectorAll("input.level")[0].checked) {
        levelLimitor = 8;
        console.log(levelLimitor)
    }
    if (document.querySelectorAll("input.level")[1].checked) {
        levelLimitor = 14;
        console.log(levelLimitor)
    }
    if (document.querySelectorAll("input.level")[2].checked) {
        levelLimitor = 20;
        console.log(levelLimitor)
    }
    playGame()
})

function playGame() {

    //COMPUTER CODE
    compSIMONrun()

    //USER CODE

    //MAKES DIVS CLICK AND LIGHT IN RESPONSE AND RECORDING THAT DIV CLICK. NEED SOUND FILE ADD
    //IF STATEMENT COMPARES ARRAY VALUES AS THEY ARE PROVIDED BY THE USER, ELSE IF STARTS THE COMPUTERS TURN
    //NEED TO MAKE BUTTONS NOT CLICKABLE DURING COMP SIMON RUN - RAN OUT OF TIME
    //WIN AND LOSE CONDITIONS EMPTY COMPUTER ARRAY TO START NEW GAME
    //START BUTTON CHANGES TO SIGNAL LOSS OR WIN

    //CAN BE CLEANED UP MORE IF MORE TIME, CODE REPEATS, 
    //EDGE CASES DO OCCUR SOMETIMES, NEEDS TESTING
    document.querySelectorAll("input.color")[0].addEventListener("click", function () {
        blinkDiv(0)
        user.patternArray.push(0)
        if (comparePattern(user.patternArray, computerSIMON.patternArray) === false) {
            //END GAME
            console.log("END GAME")
            document.getElementById("scorekeeper").innerHTML = ((computerSIMON.patternArray.length) - 1)
            document.querySelector("input.start").value = "Try Again?"
            computerSIMON.patternArray = []
        }
        //WIN CONDITIONS
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true && computerSIMON.patternArray.length === levelLimitor) {
            console.log("WIN")
            document.getElementById("scorekeeper").innerHTML = (user.patternArray.length)
            document.querySelector("input.start").value = "You WIN! Try Again?"
            computerSIMON.patternArray = []
        }
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true) {
            compSIMONrun()
        }

    })

    document.querySelectorAll("input.color")[1].addEventListener("click", function () {
        blinkDiv(1)
        user.patternArray.push(1)
        if (comparePattern(user.patternArray, computerSIMON.patternArray) === false) {
            //END GAME
            console.log("END GAME")
            document.getElementById("scorekeeper").innerHTML = ((computerSIMON.patternArray.length) - 1)
            document.querySelector("input.start").value = "Try Again?"
            computerSIMON.patternArray = []
        }
        //WIN CONDITIONS
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true && computerSIMON.patternArray.length === levelLimitor) {
            console.log("WIN")
            document.getElementById("scorekeeper").innerHTML = (user.patternArray.length)
            document.querySelector("input.start").value = "You WIN! Try Again?"
            computerSIMON.patternArray = []
        }
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true) {
            compSIMONrun()
            console.log("comp turn")
        }

    })

    document.querySelectorAll("input.color")[2].addEventListener("click", function () {
        blinkDiv(2)
        user.patternArray.push(2)
        if (comparePattern(user.patternArray, computerSIMON.patternArray) === false) {
            //END GAME
            console.log("END GAME")
            document.getElementById("scorekeeper").innerHTML = ((computerSIMON.patternArray.length) - 1)
            document.querySelector("input.start").value = "Try Again?"
            computerSIMON.patternArray = []
        }
        //WIN CONDITIONS
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true && computerSIMON.patternArray.length === levelLimitor) {
            console.log("WIN")
            document.getElementById("scorekeeper").innerHTML = (user.patternArray.length)
            document.querySelector("input.start").value = "You WIN! Try Again?"
            computerSIMON.patternArray = []
        }
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true) {
            compSIMONrun()
        }

    })

    document.querySelectorAll("input.color")[3].addEventListener("click", function () {
        blinkDiv(3);
        user.patternArray.push(3)
        if (comparePattern(user.patternArray, computerSIMON.patternArray) === false) {
            //END GAME
            console.log("END GAME")
            document.getElementById("scorekeeper").innerHTML = ((computerSIMON.patternArray.length) - 1)
            document.querySelector("input.start").value = "Try Again?"
            computerSIMON.patternArray = []
        }
        //WIN CONDITIONS
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true && computerSIMON.patternArray.length === levelLimitor) {
            console.log("WIN")
            document.getElementById("scorekeeper").innerHTML = (user.patternArray.length)
            document.querySelector("input.start").value = "You WIN! Try Again?"
            computerSIMON.patternArray = []
        }
        else if (compareLASTPattern(user.patternArray, computerSIMON.patternArray) === true) {
            compSIMONrun()
        }
    })

}

function compSIMONrun() {

    //SELECT RANDOM NUMBER (0-3)
    let randomNumDef = randomNum(0, 4)

    //PUSHES THAT RANDOM NUMBER INTO COMPUTER ARRAY
    computerSIMON.patternArray.push(randomNumDef)

    //LIGHT UP THAT DIV CORRESPONDING TO RANDOM NUMBER, PATTERN.
    if (levelLimitor === 8) {
        for (let k = computerSIMON.patternArray.length - 1; k >= 0; k--) {
            setTimeout(function () { blinkDiv(computerSIMON.patternArray[k]) }, (1000 + (k * 1000)))
        }
    }
    if (levelLimitor === 14) {
        for (let k = computerSIMON.patternArray.length - 1; k >= 0; k--) {
            setTimeout(function () { blinkDiv(computerSIMON.patternArray[k]) }, (1000 + (k * 500)))
        }
    }
    if (levelLimitor === 20) {
        for (let k = computerSIMON.patternArray.length - 1; k >= 0; k--) {
            setTimeout(function () { blinkDiv(computerSIMON.patternArray[k]) }, (1000 + (k * 350)))
        }
    }
    //RESET PLAYER ARRAY
    user.patternArray = []

    //CHECK TEST: WORKING
    console.log(computerSIMON.patternArray)
    //Change turn status
    computerSIMON.turnStatus = false;
}

//Comparing Arrays - KEEP
//TOOK OUT COMPARING LENGTH PART, WAS ENDING CODE TOO EARLY
function comparePattern(x, y) {
    // if (x.length != y.length) {
    //     return false;
    // }
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            return false;
        }
    }
    return true;
}

//Compare the LAST ELEMENT of Arrays
function compareLASTPattern(x, y) {
    if (x.length != y.length) {
        return false;
    }
    for (let i = (x.length - 1); i < x.length; i++) {
        if (x[i] !== y[i]) {
            return false;
        }
    }
    return true;
}

//Singular Div Animation. i is div refers to div class - KEEP
function blinkDiv(i) {
    if (levelLimitor === 8) {
        setTimeout(function () { litUpDiv(i) }, 100);
        setTimeout(function () { dimmedDownDiv(i) }, 1000);
    }
    else if (levelLimitor === 14) {
        setTimeout(function () { litUpDiv(i) }, 100);
        setTimeout(function () { dimmedDownDiv(i) }, 600);
    }
    else if (levelLimitor === 20) {
        setTimeout(function () { litUpDiv(i) }, 100);
        setTimeout(function () { dimmedDownDiv(i) }, 350);
    }
}

//Lights up divs, starts audio - KEEP
function litUpDiv(i) {
    document.querySelectorAll("input.color")[i].classList.add("lightOn")
    document.querySelectorAll("audio")[i].play()
}
//Dims down divs - KEEP
function dimmedDownDiv(i) {
    document.querySelectorAll("input.color")[i].classList.remove("lightOn")
    document.querySelectorAll("audio")[i].pause();
    document.querySelectorAll("audio")[i].currentTime = 0;
}

//Startup flash (flashes all squares to signal beginning of game) WORK!!!!!!!
function startButtonAnimation() {
    for (let i = 0; i < 4; i++) {
        blinkDiv(i)
    }
}

//Random Number Generator - KEEP
//Source: https://www.w3schools.com/js/js_random.asp
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}