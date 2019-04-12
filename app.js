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

//Global Variables
let switchOn = null;
let winRazz
let levelLimitor = 0;
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
    // startButtonAnimation ()
    // setTimeout(function() {startButtonAnimation ()}, 1000)
    // if (switchOn || winRazz) {
        playGame()
    // }
})

function playGame () {
//COMPUTER CODE, TURN 1

//SELECT RANDOM NUMBER (0-3)
//     let randomNumDef = randomNum(0, 4)

//PUSHES THAT RANDOM NUMBER INTO COMPUTER ARRAY
//     computerSIMON.patternArray.push(randomNumDef)

//LIGHT UP THAT DIV CORRESPONDING TO RANDOM NUMBER
//     blinkDiv (randomNumDef) 

//CHECK TEST: WORKING
// console.log(computerSIMON.patternArray)

//USER CODE, TURN 1

//MAKES DIVS CLICK AND LIGHT IN RESPONSE AND RECORDING THAT DIV CLICK. NEED SOUND FILE ADD
document.querySelectorAll("input.color")[0].addEventListener("click", function() {
    blinkbeepDiv (0)
    user.patternArray.push(0)
    console.log(user.patternArray)
})

document.querySelectorAll("input.color")[1].addEventListener("click", function() {
    blinkbeepDiv (1)
    user.patternArray.push(1)
    console.log(user.patternArray)
})

document.querySelectorAll("input.color")[2].addEventListener("click", function() {
    blinkbeepDiv (2)
    user.patternArray.push(2)
    console.log(user.patternArray)
})

document.querySelectorAll("input.color")[3].addEventListener("click", function() {
    blinkbeepDiv (3)
    user.patternArray.push(3)
    console.log(user.patternArray)
})


}


//ATTEMPT TO SHORTEN CODE OF USER DIV CLICK, BREAKS WHEN RECORDING USER ARRAY BC OF CALL
function divclick (i) {
    document.querySelectorAll("input.color")[i].addEventListener("click", function() {
         blinkbeepDiv (i)
         user.patternArray.push(i)
    })
}
// divclick (0)
// divclick (1)
// divclick (2)
// divclick (3)




//Gameplay Legnth, determines levels, taken from original game
//SKILL LVL 1 SEQ 8
//SKILL LVL 2 SEQ 14
//SKILL LVL 3 SEQ 20
//SKILL LVL 4 SEQ 31
function patternPusher (seqLength) {
    levelLimitor++;
    
    if (levelLimitor>seqLength) {
        return;
    }
        computerSIMON.patternArray.push(randomNumDef)
    return randomNumDef
}

//Comparing Arrays
function comparePattern(x, y) {

    if (x.length != y.length) {
        return false;
    }

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            return false;
        }
    }

    return true;
}

//Turn Cnger
function turnChanger() {
    if (!user.turnStatus) {
        computerSIMON.turnStatus === true
    }
    else if (user.turnStatus) {
        computerSIMON.turnStatus === false
    }
  }

//When user clicks div[i] push i into userarray and does animation&sound??





// function divclickRecord() {
//    /* if () {
//         user.patternArray.push(i)
//     }*/
// }

//Singular Div Animation. i is div refers to div class Time needs to be parametertized?
function blinkDiv (i) {
    setTimeout(function(){ litUpDiv (i) }, 200);
    setTimeout(function(){ dimmedDownDiv (i) }, 1000);
}

//Lights up divs
function litUpDiv (i) {
    document.querySelectorAll("input.color")[i].classList.add("lightOn") 
}
//Dims down divs
function dimmedDownDiv (i) {
    document.querySelectorAll("input.color")[i].classList.remove("lightOn") 
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