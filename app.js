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
    startButtonAnimation ()
    setTimeout(function() {startButtonAnimation ()}, 1000)
    if (switchOn || winRazz) {
        playGame()
    }
})

function playGame () {
    winRazz = false;
    computerSIMON.patternArray = []
    user.patternArray = []

    //if user selects easy
    patternPusher (9)
    //button lights up
    turnChanger()
}


//Gameplay Legnth, determines levels, taken from original game
//SKILL LVL 1 SEQ 8
//SKILL LVL 2 SEQ 14
//SKILL LVL 3 SEQ 20
//SKILL LVL 4 SEQ 31
function patternPusher (seqLength) {
    levelLimitor++;
    let randomNumDef = randomNum(0, 4)
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

divclick (0)
divclick (1)
divclick (2)
divclick (3)

function divclick (i) {
    document.querySelectorAll("input.color")[i].addEventListener("click", function() {
        divclickRecord()
        comparePattern(computerSIMON.patternArray, user.patternArray)
         blinkbeepDiv (i)
    })
}

function divclickRecord() {
   /* if () {
        user.patternArray.push(i)
    }*/
}

//Singular Div Animation. i is div refers to div class Time needs to be parametertized?
function blinkDiv (i) {
    setTimeout(function(){ litUpDiv (i) }, 100);
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