

function getComputerChoice(min, max) {
    let number = Math.random() * (max - min) + min;
    number = Math.floor(number);
    console.log(number)
    return number
}

function playerSelection(playerChoice) {
    if (playerChoice == 'Rock') {
        return choice = 1;
    }   else if (playerChoice == 'Paper') {
        return choice = 2;
    }   else if (playerChoice == 'Scissors'){
        return choice = 3;
    }   else {
        console.log("You must choose rock, paper or scissors!")
    }
}

function playGame(playerChoice) {
    
    

    playerChoice = playerSelection(playerChoice)
    computerChoice = getComputerChoice(1,4)
    
    switch (playerChoice) {
        case 1 : playerChoiceDisplay.textContent = "🪨";
        break;
        case 2 : playerChoiceDisplay.textContent = "📰";
        break;
        case 3 : playerChoiceDisplay.textContent = "✂️";
        break;
    }
    switch (computerChoice) {
        case 1 : computerChoiceDisplay.textContent = "🪨";
        break;
        case 2 : computerChoiceDisplay.textContent = "📰";
        break;
        case 3 : computerChoiceDisplay.textContent = "✂️";
        break;
    }


    result = ((playerChoice - computerChoice) + 3) % 3
    console.log(result)
    if (result === 0) {
        announcement.textContent = "You tied!";
        ties.textContent = `Ties: ${++tied}`;
    } else if (result === 1) {
        announcement.textContent = "You won!";
        playerScore.textContent = `Wins: ${++wins}`;
    } else {
        announcement.textContent = "You lost!";
        computerScore.textContent = `Losses: ${++loss}`;
    }

    if ((wins === 5) || (loss === 5)) {
        if (wins === 5) {
            alert("YOU HAVE WON!")
            wins = 0
            tied = 0
            loss = 0
            computerScore.textContent = `Losses: ${loss}`;
            playerScore.textContent = `Wins: ${wins}`;
            totalTies.textContent = `Ties: ${tied}`;
        }
        else {
            alert("The computer has beaten you...")
            wins = 0
            tied = 0
            loss = 0
            computerScore.textContent = `Losses: ${loss}`;
            playerScore.textContent = `Wins: ${wins}`;
            totalTies.textContent = `Ties: ${tied}`;
        }
    }
}



// 1 is rock, 2 is paper, 3 is scissors

//% 0 means tie, 2 means player win, -2 computer win, -1 player win, 1

let wins = 0
let loss = 0
let tied = 0
let playerChoice;
let computerChoice;

//Things to Manipulate
const playerScore = document.querySelector('#player')
const totalTies = document.querySelector('#ties')
const computerScore = document.querySelector('#computer')

const announcement = document.querySelector('#announce');
const playerChoiceDisplay = document.querySelector('#playerChoice');
const computerChoiceDisplay = document.querySelector('#computerChoice');

const choiceButtons = document.querySelector('#buttons');

choiceButtons.addEventListener('click', (e) => {
    choice = e.target.textContent;
    playGame(choice);
})


if ((wins == 5) || loss == 5); 









