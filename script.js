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
// 1 is rock, 2 is paper, 3 is scissors

//% 0 means tie, 2 means player win, -2 computer win, -1 player win, 1

let wins = 0
let loss = 0
let tied = 0


playerChoice = playerSelection()
computerChoice = getComputerChoice(1,4)

console.log(playerChoice)
console.log(computerChoice)

function playGame(player, computer) {
    result = ((player - computer) + 3) % 3
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

playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)
playGame(playerChoice, computerChoice)

console.log("You won " + wins + "times, lost " + loss + "times and tied " + tied + "times. Good job!")
/*
getComputerChoice
    set 1, 2, 3 to rock, paper, scissor
    use random function to determine beween 1-3.
    check for match 
    return choice


playerSelection
    accept input, 1 for rock, 2 for paper, 3 for scissor.
    check for match
    return choice

playGame
    take playerSelection and computerSelection and compare use if statement to determine winner 
        if (rock && paper),
            console.log(paper wins!)
        else if 

*/