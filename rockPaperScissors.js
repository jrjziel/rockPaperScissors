// JavaScript source code
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Invalid user input. Please choose either rock, paper, or scissors");
    }
}
const getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 3:
            return 'scissors';
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return console.log("Tie!")
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return console.log("The computer wins!")
        } else {
            return console.log("You win!")
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return console.log("The computer wins!")
        } else {
            return console.log("You win!")
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return console.log("The computer wins!")
        } else {
            return console.log("You win!")
        }
    }
}
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))

}
playGame();