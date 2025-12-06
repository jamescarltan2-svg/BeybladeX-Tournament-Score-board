// const beyName = document.querySelector('.nameBlade');
// const beyInsignia1 = document.querySelector('.beyInsignia1');
// const beyInsignia2 = document.querySelector('.beyInsignia2');

//Player 1
const p1Win = document.getElementById("p1Win");
const p1Lose = document.getElementById("p1Lose");
// const spinbtn1 = document.getElementById("spin1");
const overbtn1 = document.getElementById("over1");
const burstbtn1 = document.getElementById("burst1");
const extremebtn1 = document.getElementById("extreme1");
const player1Wins = document.getElementById("player1Wins");

//Player 2
const p2Win = document.getElementById("p2Win");
const p2Lose = document.getElementById("p2Lose");
const spinbtn2 = document.getElementById("spin2");
const overbtn2 = document.getElementById("over2");
const burstbtn2 = document.getElementById("burst2");
const extremebtn2 = document.getElementById("extreme2");

// Console Checking
// const printOut = (counter, pt) => {console.log(`${counter}: `)
//                                     console.log(`${pt}`)};
// printOut(``);

//Kindly use console checking only to check if counter is working for each finish category

// Point Set
let ptP1 = 0;
let ptP2 = 0;
let SS1 = 0;
let SS2 = 0;

// Finish Counter
let spinCounter1 = 0;
let overCounter1 = 0;
let burstCounter1 = 0;
let extremeCounter1 = 0;

let spinCounter2 = 0;
let overCounter2 = 0;
let burstCounter2 = 0;
let extremeCounter2 = 0;

// Point Limit -Set Score Increase

function ptLimit1 () {if (ptP1 >=4) {
    ptP1 = 0;
    SS1 += 1;
    document.getElementById("setScore1").innerHTML = SS1
    console.log(SS1);
        
}}

function ptLimit2 () {if (ptP2 >=4) {
    ptP2 = 0;
    SS2 += 1;
    document.getElementById("setScore2").innerHTML = SS2
    console.log(SS2);
    
}}

// function setLimit () {if (SS1 == 2) {
//     // player1Wins.classList.toggle('play');
// }}

// function setLimit () {if (SS2 == 2) {
//     // player2Wins.classList.toggle('play');
// }}


// Spin

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("spin1").onclick = function (){
    ptP1 += 1;
    spinCounter1 +=1;
    console.log(spinCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("spin2").onclick = function (){
    ptP2 += 1;
    spinCounter2 +=1;
    console.log(spinCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

// Over

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("over1").onclick = function (){
    ptP1 += 2;
    overCounter1 +=1;
    console.log(overCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("over2").onclick = function (){
    ptP2 += 2;
    overCounter2 +=1;
    console.log(overCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

// Burst

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("burst1").onclick = function (){
    ptP1 += 2;
    burstCounter1 +=1;
    console.log(burstCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("burst2").onclick = function (){
    ptP2 += 2;
    burstCounter2 +=1;
    console.log(burstCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

// Extreme

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("extreme1").onclick = function (){
    ptP1 += 3;
    extremeCounter1 +=1;
    console.log(extremeCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("extreme2").onclick = function (){
    ptP2 += 3;
    extremeCounter2 +=1;
    console.log(extremeCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

// localhost:8080/record
