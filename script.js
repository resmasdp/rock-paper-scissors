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

function getPlayerChoice(){
    return prompt("Please enter: Rock, Paper or Scissors: ").toLowerCase();
}

function playRound(){
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(computerChoice);
    console.log(playerChoice);
    if (computerChoice == "paper") {
        if (playerChoice == "rock"){return "lost"} 
        if (playerChoice == "paper"){return "tie"}
        if (playerChoice == "scissors"){return "won"}
    }
    else if (computerChoice == "rock") {
        if (playerChoice == "rock"){return "tie"} 
        if (playerChoice == "paper"){return "won"}
        if (playerChoice == "scissors"){return "lost"}
    }
    else if (computerChoice == "scissors") {
        if (playerChoice == "rock"){return "won"} 
        if (playerChoice == "paper"){return "lost"}
        if (playerChoice == "scissors"){return "tie"}
    }
    
}

function game(){

    let scoreP = 0;
    let scoreC = 0;



    for (let i = 0; i < 5; i++) {

        let scoreRound = playRound();
        console.log(scoreRound);

        if(scoreRound == "won"){
            scoreP++;
            console.log("You won this round!");
        }
        else if(scoreRound == "lost"){
            scoreC++;
            console.log("You lost this round!");
        }
        else{
            console.log("It was a tie!");
        }         
        console.log("Score   You: " + scoreP + " - Computer: " + scoreC);
        
    }
    console.log("Game end.")
}