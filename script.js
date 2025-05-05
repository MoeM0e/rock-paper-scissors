const log = console.log

function getComputerChoice() {
    //Every time the function is called, generate a random number between 0-1 and multiply it by 100 so it's a number between 1-100
    let computerChoice = (Math.random() * 100)
    //If the number returned is less than 33, return the string "Rock"
    if (computerChoice < 33) {
        return "rock";
    //If the number returned is between 33 and 66, return "Paper"
    } else if (computerChoice >= 33 && computerChoice <= 66) {
        return "paper";
    //If it returns a number above 66, return "Scissors"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    //Every time the function is called, prompt the user to enter Rock, Paper or Scissors
    let humanChoice = prompt("Pick Rock, Paper or Scissors!");
    //To allow the user to input their choice regardless of case sensitivity, convert their entry to lower case
    let lcHumanChoice = humanChoice.toLowerCase();
    return lcHumanChoice;
}

//Intial scores for human and computer
let humanScore = 0;
let computerScore = 0;

function playRound(lcHumanChoice, computerChoice) {
    //If player choice is rock and computer choice is paper, declare player the loser, increment the computer's score by 1 and return that score
    if (lcHumanChoice === "rock" && computerChoice === "paper") {
        log("You lose! Paper beats rock.");
        computerScore = ++computerScore;
        return computerScore;
    //If player choice is rock and computer choice is scissors, declare player the winner, increment the player's score by 1 and return that score
    } else if (lcHumanChoice === "rock" && computerChoice === "scissors") {
        log("You win! Rock beats scissors.");
        humanScore = ++humanScore;
        return humanScore;
    //If player choice is paper and computer choice is rock, declare player the winner, increment the player's score by 1 and return that score
    } else if (lcHumanChoice === "paper" && computerChoice === "rock") {
        log("You win! Paper beats rock.");
        humanScore = ++humanScore;
        return humanScore;
    //If player choice is paper and computer choice is scissors, declare player the loser, increment the computer's score by 1 and return that score
    } else if (lcHumanChoice === "paper" && computerChoice === "scissors") {
        log("You lose! Scissors beats paper");
        computerScore = ++computerScore;
        return computerScore;
    //If player choice is scissors and computer choice is rock, declare player the loser, increment the computer's score by 1 and return that score
    } else if (lcHumanChoice === "scissors" && computerChoice === "rock") {
        log("You lose! Rock beats scissors");
        computerScore = ++computerScore;
        return computerScore;
    //If player choice is scissors and computer choice is paper, declare player the winner, increment the player's score by 1 and return that score
    } else if (lcHumanChoice === "scissors" && computerChoice === "paper") {
        log("You win! Scissors beats paper");
        humanScore = ++humanScore;
        return humanScore;
    //If none of the previous conditions are met, declare the round as a tie
    } else {
        log("It's a tie!");
    }
}

function playGame() {
    //Invoke the playRound() function 5 times and log the score as the game progresses
    playRound(getHumanChoice(), getComputerChoice());
    log("Your score is " + +humanScore);
    log("Computer score is " + +computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    log("Your score is " + +humanScore);
    log("Computer score is " + +computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    log("Your score is " + +humanScore);
    log("Computer score is " + +computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    log("Your score is " + +humanScore);
    log("Computer score is " + +computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    log("Your score is " + +humanScore);
    log("Computer score is " + +computerScore);

    //If the player's score is greater than the computer's, declare the player the winner
    if (humanScore > computerScore) {
        log("You Win!");
    //If the scores are a tie, declare the game as a tie
    } else if (humanScore === computerScore) {
        log("It's a tie!?");
    //If neither conditions are met, declare the computer the winner
    } else {
        log("Computer Wins!")
    }
}

playGame()