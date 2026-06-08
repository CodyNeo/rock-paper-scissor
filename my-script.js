const interface = document.querySelector('.game');
const text = document.querySelectorAll('.text');
const images = document.querySelectorAll('.image');
const choice = document.querySelectorAll('.choice');
let humanScore = 0;
let computerScore = 0;

function getComputerGuess(){
    let numGuess = Math.floor(Math.random() * 3) + 1;

    if (numGuess === 1){
        return "rock"
    } else if (numGuess === 2){
        return "paper"
    } else if (numGuess === 3){
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice){
    console.log("The computer chose " + computerChoice + " and you chose " + humanChoice);

    if (humanChoice === computerChoice){
        console.log('TIE! Nobody wins.');
        return 'tie';
    } else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("You lose! Paper beats rock.");
            return "computer";
        } else {
            console.log("You win! Rock beats scissor.");
            return "human";
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log("You lose! Paper beats rock.");
            return "computer";
        } else {
            console.log("You win! Rock beats scisssor.");
            return "human";
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            console.log("You lose! Paper beats rock.");
            return "computer";
        } else {
            console.log("You win! Rock beats scisssor.");
            return "human";
        }
    }
}

for (img of images){
    img.addEventListener('click',function(event) {

        let humanChoice = this.alt;
        let computerChoice = getComputerGuess();
    
        choice[0].setAttribute('src', `./images/${humanChoice}.jpeg`);
        choice[1].setAttribute('src', `./images/${computerChoice}.jpeg`);
        
        let winner = playRound(humanChoice, computerChoice);
        if (winner === "human"){
            humanScore++;
        } else if(winner === "computer") {
            computerScore++;
        }
        text[0].textContent = `Player's Score:${humanScore}`;
        text[1].textContent = `Compuetr's Score:${computerScore}`

        if (humanScore === 5){
            alert('YOU WIN!!');
            humanScore = 0;
            computerScore = 0;
            text[0].textContent = `Player's Score:${humanScore}`;
            text[1].textContent = `Compuetr's Score:${computerScore}`
        }
        if(computerScore === 5){
            alert('you lose...');
            humanScore = 0;
            computerScore = 0;
            text[0].textContent = `Player's Score:${humanScore}`;
            text[1].textContent = `Compuetr's Score:${computerScore}`
        }
    })
}