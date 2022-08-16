//Define the html elements.

const scissors = document.getElementById('scissor');
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const start = document.getElementById('start')

const textScore = document.getElementById('textScore');
const pscore = document.getElementById('scoreplayer');
const cscore = document.getElementById('scorecomputer');


//Eventlisteners buttons


rock.addEventListener('click', () => {playRound('rock')});

paper.addEventListener('click', () => {playRound('paper')});

scissors.addEventListener('click', () => {playRound('scissors')});

start.addEventListener('click', startGame);

//disabling/enabling buttons

function disablePlayButtons() {
    rock.setAttribute('disabled', 'disabled');
    paper.setAttribute('disabled', 'disabled');
    scissors.setAttribute('disabled', 'disabled');  
}

function enablingPlayButtons() {
    rock.removeAttribute('disabled');
    paper.removeAttribute('disabled');
    scissors.removeAttribute('disabled');
}

function disableStartButton() {
    start.setAttribute('disabled', 'disabled');
}

function enablingStartButton() {

    start.textContent = "Restart";
    start.removeAttribute('disabled');

}


/* --------------  start  --------------------*/

//disable buttons at start
disablePlayButtons();


//declare empty scores
let scoreP = 0;
let scoreC = 0;

//set score to 0 and enables play buttons
function startGame(){

    scoreP = 0;
    scoreC = 0;

    start.textContent = ""; 

    postScore();

    disableStartButton();
    enablingPlayButtons();

    
}

//rps

function getComputerChoice(){
    let number = Math.floor(Math.random()*3);

    if (number == 0) {
        return "rock";        
    }
    else if (number == 1){
        return "paper"
    }
    else if (number == 2){
        return "scissors"
    }
}


function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if (computerChoice == "paper") {
        if (playerChoice == "rock"){endRound("lost")} 
        if (playerChoice == "paper"){endRound("tie")}
        if (playerChoice == "scissors"){endRound("won")}
    }
    else if (computerChoice == "rock") {
        if (playerChoice == "rock"){endRound("tie")} 
        if (playerChoice == "paper"){endRound("won")}
        if (playerChoice == "scissors"){endRound("lost")}
    }
    else if (computerChoice == "scissors") {
        if (playerChoice == "rock"){endRound("won")} 
        if (playerChoice == "paper"){endRound("lost")}
        if (playerChoice == "scissors"){endRound("tie")}
    }
    
}

function endRound(outcome){

    textScore.textContent = outcome;
    if (outcome == "lost"){ scoreC++;}
    else if(outcome == "won"){ scoreP++;}
    
    postScore();

    if (scoreP == 5 || scoreC == 5) {

        disablePlayButtons(); 
        enablingStartButton();
        start.textContent = "Restart";   
    }
}

function postScore() {
    
    cscore.textContent = scoreC;
    pscore.textContent = scoreP;

}
