function getComputerGuess(){
    let numGuess = Math.floor(Math.random() * 3) + 1;

    if (numGuess === 1){
        return "rock"
    } else if (numGuess === 2){
        return "paper"
    } else if (numGuess === 3){
        return "scissor"
    }
}

function getHumanGuess(){
    let humanGuess = prompt('Enter your choice:');
    if(humanGuess === 'rock' || humanGuess === "Rock" || humanGuess === "1" || humanGuess === "ROCK"){
        return "rock"
    } else if (humanGuess === 'paper' || humanGuess === "Paper" || humanGuess === "2" || humanGuess === "PAPER"){
        return "paper"
    } else if (humanGuess === 'scissor' || humanGuess === "Scissor" || humanGuess === "3" || humanGuess === "SCISSOR"){
        return "scissor"
    }
}

function playRound(humanChoice, computerChoice){
    console.log("The computer chose " + computerChoice + " and you chose " + humanChoice);
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("TIE! Nobody wins.");
            return "tie";
        } else if (computerChoice === "paper"){
            console.log("You lose! Paper beats rock.");
            return "computer";
        } else if (computerChoice === "scissor"){
            console.log("You win! Rock beats scissor.");
            return "human";
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "paper"){
            console.log("TIE! Nobody wins.");
            return "tie";
        } else if (computerChoice === "scissor"){
            console.log("You lose! Paper beats rock.");
            return "computer";
        } else if (computerChoice === "rock"){
            console.log("You win! Rock beats scisssor.");
            return "human";
        }
    } else if (humanChoice === "scissor"){
        if (computerChoice === "scissor"){
            console.log("TIE! Nobody wins.");
            return "tie";
        } else if (computerChoice === "rock"){
            console.log("You lose! Paper beats rock.");
            return "computer";
        } else if (computerChoice === "paper"){
            console.log("You win! Rock beats scisssor.");
            return "human";
        }
    }
}

function playGame (){
    let humanScore = 0;
    let computerScore = 0;

    for ( let i = 1 ; i <= 5 ; i++){
        let computerChoice = getComputerGuess();
        let humanChoice = getHumanGuess();
        let winner = playRound(humanChoice, computerChoice);
        if (winner === "human"){
            humanScore++;
        } else if(winner === "computer") {
            computerScore++;
        }
    }
    console.log("Final Score is \nyou scored: " + humanScore + "\ncomputer scored: " + computerScore);
    if (humanScore > computerScore){
        console.log("YOU WIN!!");
    } else if (humanScore < computerScore) {
        console.log("you lose...");
    } else {
        console.log("It's a tie.")
    }
}
playGame()