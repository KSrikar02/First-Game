let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//console.log(getComputerChoice());

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + "(user)" + " beat " + computerChoice + "(comp)";
    console.log("round won ");
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + "(user)" + " lost to  " + computerChoice + "(comp)" ;
    console.log("round lost");
}

function tie(userChoice, computerChoice) {
    result_p.innerHTML = userChoice + "(user)" + " and the   " + computerChoice + "(comp)" + "  drew  .";
    console.log("it's a draw ");
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) 
    {
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


function main() {
rock_div.addEventListener('click', function() {
    game("rock");
    
})

paper_div.addEventListener('click', function() {
    game("paper");
    
})

scissors_div.addEventListener('click', function() {
    game("scissors")
    
})
}

main();




