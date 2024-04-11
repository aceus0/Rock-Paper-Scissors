function getComputerChoice(min, max) {
    let number = Math.random() * (max - min) + min;
    number = Math.floor(number);
    return number
}

function playerSelection() {
    let playerChoice = prompt("Hello player! Please choose rock, paper or scissors!");
    playerChoice = playerChoice.toLowerCase()

    if (playerChoice == 'rock') {
        return choice = 1;
    }   else if (playerChoice == 'paper') {
        return choice = 2;
    }   else if (playerChoice == 'scissors'){
        return choice = 3;
    }   else {
        console.log("You must choose rock, paper or scissors!")
    }
}

function playGame() {
    
    playerChoice = playerSelection()
    computerChoice = getComputerChoice(1,4)

    result = ((playerChoice - computerChoice) + 3) % 3
    console.log(result)
    if (result === 0) {
        console.log("You tied!")
        tied++;
    } else if (result === 1) {
        console.log("You won!")
        wins++;
    } else {
        console.log("You lost!")
        loss++;
    }
}



// 1 is rock, 2 is paper, 3 is scissors

//% 0 means tie, 2 means player win, -2 computer win, -1 player win, 1

let wins = 0
let loss = 0
let tied = 0


playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)

console.log("You won " + wins + " times, lost " + loss + " times and tied " + tied + " times. Good job!")
