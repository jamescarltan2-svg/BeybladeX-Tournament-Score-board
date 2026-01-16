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
let roundCounter = 1;

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
    ptP2 = 0;
    SS1 += 1;
    roundCounter += 1;
    document.getElementById("setScore1").innerHTML = SS1;
    document.getElementById("roundCounter").innerHTML = roundCounter;
    document.getElementById("scorePlayer2").innerHTML = ptP2
    console.log('Set1 = '+SS1);
        
}}

function ptLimit2 () {if (ptP2 >=4) {
    ptP1 = 0;
    ptP2 = 0;
    SS2 += 1;
    roundCounter += 1;
    document.getElementById("setScore2").innerHTML = SS2;
    document.getElementById("roundCounter").innerHTML = roundCounter;
    document.getElementById("scorePlayer1").innerHTML = ptP1
    console.log('Set2 = '+ SS2);
    
}}

// Spin

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("spin1").onclick = function (){
    ptP1 += 1;
    spinCounter1 +=1;
    console.log('sf1 = '+ spinCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("spin2").onclick = function (){
    ptP2 += 1;
    spinCounter2 +=1;
    console.log('sf2 = '+spinCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

// Over

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("over1").onclick = function (){
    ptP1 += 2;
    overCounter1 +=1;
    console.log('of1 = '+ overCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("over2").onclick = function (){
    ptP2 += 2;
    overCounter2 +=1;
    console.log('of2 = '+ overCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

// Burst

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("burst1").onclick = function (){
    ptP1 += 2;
    burstCounter1 +=1;
    console.log('bf1 = '+ burstCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("burst2").onclick = function (){
    ptP2 += 2;
    burstCounter2 +=1;
    console.log('bf2 = '+ burstCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

// Extreme

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("extreme1").onclick = function (){
    ptP1 += 3;
    extremeCounter1 +=1;
    console.log('ef1 = '+ extremeCounter1);

    ptLimit1();
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("extreme2").onclick = function (){
    ptP2 += 3;
    extremeCounter2 +=1;
    console.log('ef2 = '+ extremeCounter2);

    ptLimit2();
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});


// Fetching Bey Data

let Name1;
let Name2;

// Run this when the page loads
window.onload = () => {
    setupSuggestions1();
    setupSuggestions2();
};

async function setupSuggestions1() {
    const suggestionList1 = document.getElementById("beybladeSuggestion1");
    
    try {
        const response = await fetch('https://scoreboard-qxhv.onrender.com/beyblades');
        const data = await response.json();

        // Access the array inside the object
        const beyblades = data.beybladeList; 

        suggestionList1.innerHTML = "";

        // Create an <option> for every name
        beyblades.forEach(bey => {
            const option = document.createElement("option");
            option.value = bey.name;
            suggestionList1.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading suggestions:", error);
    }
}

async function fetchBey1() {
    const searchInput1 = document.getElementById("searchInput1");
    const beyName1 = searchInput1.value.trim();
    
    if (!beyName1) return;


    try {
        const response = await fetch("https://scoreboard-qxhv.onrender.com/beyblades");

        if (!response.ok) {
            throw new Error ("Could not Fetch Resource");
        }

        const data = await response.json();
        const beybladeList = data.beybladeList;
        
        const user1Bey = beybladeList.find(bey => bey.name.toLowerCase() === beyName1.toLowerCase());

        if (user1Bey) { 
            Name1 = user1Bey.code;
            document.getElementById("p1Win").innerHTML = user1Bey.win;
            document.getElementById("p1Lose").innerHTML = user1Bey.lose;
            document.getElementById("nameBey1").innerHTML = user1Bey.name.toUpperCase();
        } else {
            console.warn("Beyblade not found on the list");
            alert("Beyblade not Found!")
        }     

    } catch (error) {
        console.error(error);
    }
}

async function setupSuggestions2() {
    const suggestionList2 = document.getElementById("beybladeSuggestion2");
    
    try {
        const response = await fetch('https://scoreboard-qxhv.onrender.com/beyblades');
        const data = await response.json(); 

        // Access the array inside the object
        const beyblades = data.beybladeList; 

        // Clear existing options
        suggestionList2.innerHTML = "";

        // Create an <option> for every name in the objects
        beyblades.forEach(bey => {
            const option = document.createElement("option");
            option.value = bey.name; // Pulling the name property
            suggestionList2.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading suggestions:", error);
    }
}

async function fetchBey2() {
    const searchInput2 = document.getElementById("searchInput2");
    const beyName2 = searchInput2.value.trim();
    
    if (!beyName2) return;


    try {
        const response = await fetch(`https://scoreboard-qxhv.onrender.com/beyblades`);

        if (!response.ok) {
            throw new Error ("Could not Fetch Resource");
        }

        const data = await response.json();
        const beybladeList = data.beybladeList;
        
        const user2Bey = beybladeList.find(bey => bey.name.toLowerCase() === beyName2.toLowerCase());

        if (user2Bey) {
            Name2 = user2Bey.code;
            document.getElementById("p2Win").innerHTML = user2Bey.win;
            document.getElementById("p2Lose").innerHTML = user2Bey.lose;
            document.getElementById("nameBey2").innerHTML = user2Bey.name.toUpperCase();
        } else {
            console.warn("Beyblade not found on the list");
            alert("Beyblade not Found!")
        }     

    } catch (error) {
        console.error(error);
    }
}


//Fetching & Posting Battle Record Former Work
// async function fetchBey1() {
//     try {

//         const beyName1 = document.getElementById("searchInput1").value.toUpperCase();

//         const response = await fetch (`http://localhost:8080/beyblade/${beyName1}`);

//         if(!response.ok){
//             throw new Error ("Could Not Fetch Resource")
//         }

//         const data = await response.json();
//         const beyblade = data.beyblade;
//         const winRecord = document.getElementById("p1Win");
//         const loseRecord = document.getElementById("p1Lose");
//         const nameBlade = document.getElementById("nameBey1");

//         winRecord.innerHTML = beyblade.win;
//         loseRecord.innerHTML = beyblade.lose;
//         nameBlade.innerHTML = beyblade.name.toUpperCase();

//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function fetchBey2() {
//     try {

//         const beyName2 = document.getElementById("searchInput2").value.toUpperCase();

//         const response = await fetch (`http://localhost:8080/beyblade/${beyName2}`);

//         if(!response.ok){
//             throw new Error ("Could Not Fetch Resource")
//         }

//         const data = await response.json();
//         const beyblade = data.beyblade;
//         const winRecord = document.getElementById("p2Win");
//         const loseRecord = document.getElementById("p2Lose");
//         const nameBlade = document.getElementById("nameBey2");

//         winRecord.innerHTML = beyblade.win;
//         loseRecord.innerHTML = beyblade.lose;
//         nameBlade.innerHTML = beyblade.name.toUpperCase();

//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }


//POSTING BATTLE RECORD

const battleRecord = {
    playerA: {
    code: "",
    score: 0,
    extremeFinish: 0,
    overFinish: 0,
    spinFinish: 0,
    burstFinish: 0
  },
  playerB: {
    code: "",
    score: 0,
    extremeFinish: 0,
    overFinish: 0,
    spinFinish: 0,
    burstFinish: 0
  }
}

function conversionBattleRecord() {

    const beyName1 = document.getElementById("searchInput1").value.toUpperCase();
    const beyName2 = document.getElementById("searchInput2").value.toUpperCase();
    
    //Player 1
    battleRecord.playerA.code = Name1;
    battleRecord.playerA.score = SS1;
    battleRecord.playerA.spinFinish = spinCounter1;
    battleRecord.playerA.overFinish = overCounter1;
    battleRecord.playerA.burstFinish = burstCounter1;
    battleRecord.playerA.extremeFinish = extremeCounter1;

    //Player 2
    battleRecord.playerB.code = Name2;
    battleRecord.playerB.score = SS2;
    battleRecord.playerB.spinFinish = spinCounter2;
    battleRecord.playerB.overFinish = overCounter2;
    battleRecord.playerB.burstFinish = burstCounter2;
    battleRecord.playerB.extremeFinish = extremeCounter2;

    return battleRecord;
}

// POSTING BATTLE RECORD
// async function postingBattleRecord() {
//     const finalRecord = conversionBattleRecord();

//     const url = 'http://localhost:8080/record';

//     const postOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application.json'
//         },
//         body: JSON.stringify(finalRecord)
//     };
// };

// try {
//     const response = await fetch(`http://localhost:8080/record`, postOptions);

//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('Battle Record Saved!', data);
    
// } catch (error) {
//     console.error('Error Saving Battle Record', error);
// }

// postingBattleRecord();


function postBattleRecordPromise() {
    const finalRecord = conversionBattleRecord(); 
    const url = 'https://scoreboard-qxhv.onrender.com/record';
    console.log(battleRecord)

    const loader = document.querySelector(".loader-hidden");

    loader.classList.remove("loader-hidden");

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalRecord)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(finalRecord);
        return response.json();
    })
    .then(data => {
        console.log('Battle record saved!', data);
    })
    .catch(error => {
        console.error('Error saving battle record:', error);
    })
    .finally (() => {
        loader.classList.add("loader-hidden");

        loader.addEventListener("transitionend", () => {
        loader.remove();
    }, {once: true});

    fetchBey1();
    fetchBey2();
    });
}

// Reset Button 

// P1-Reset
document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("P1-RESET").onclick = function (){
    ptP1 = 0;
    SS1 = 0;
    spinCounter1 = 0;
    overCounter1 = 0;
    burstCounter1 = 0;
    extremeCounter1 = 0;


    console.log('ptP1 = '+ ptP1);
    console.log('SS1 = '+ SS1);
    console.log('sf1 = '+ spinCounter1);
    console.log('of1 = '+ overCounter1);
    console.log('bf1 = '+ burstCounter1);
    console.log('ef1 = '+ extremeCounter1);
    document.getElementById("setScore1").innerHTML = SS1;
    document.getElementById("scorePlayer1").innerHTML = ptP1;
}
});

// P2-Reset

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("P2-RESET").onclick = function (){
    ptP2 = 0;
    SS2 = 0;
    spinCounter2 = 0;
    overCounter2 = 0;
    burstCounter2 = 0;
    extremeCounter2 = 0;


    console.log('ptP2 = '+ ptP2);
    console.log('SS2 = '+ SS2);
    console.log('sf2 = '+ spinCounter2);
    console.log('of2 = '+ overCounter2);
    console.log('bf2 = '+ burstCounter2);
    console.log('ef2 = '+ extremeCounter2);
    document.getElementById("setScore2").innerHTML = SS2;
    document.getElementById("scorePlayer2").innerHTML = ptP2;
}
});

