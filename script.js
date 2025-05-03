const log = console.log

function getComputerChoice() {
    //Every time the function is called, generate a random number and multiply it by 100 to make it a whole interger between 1-100
    let computerChoice = (Math.random() * 100)
    //If the number returned is less than 33, return the string "Rock"
    if (computerChoice < 33) {
        return log("rock")
    //If the number returned is between 33 and 66, return "Paper"
    } else if (computerChoice >= 33 && computerChoice <= 66) {
        return log("paper")
    //If it returns a number above 66, return "Scissors"
    } else {
        return log("scissors")
    }
}

log(getComputerChoice())

function getHumanChoice() {
    //Every time the function is called, prompt the user to enter Rock, Paper or Scissors
    let humanChoice = prompt("Pick Rock, Paper or Scissors!");
    //To allow the user to input their choice regardless of case sensitivity, convert their entry to lower case
    let lcHumanChoice = humanChoice.toLowerCase();
}

getHumanChoice();