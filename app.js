let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + "(user)" + " beats " + computerChoice + "(comp)";
    if (userScore === 5) {
        alert("User wins! Restarting the game.");
        resetGame();
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + "(user)" + " loses to " + computerChoice + "(comp)";
    if (computerScore === 5) {
        alert("Computer wins! Restarting the game.");
        resetGame();
    }
}

function tie(userChoice, computerChoice) {
    result_p.innerHTML = userChoice + "(user)" + " and the " + computerChoice + "(comp)" + " drew.";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, computerChoice);
            break;
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Let's play!";
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();





