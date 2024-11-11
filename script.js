function getComputerChoice() {
  // Generate a random number between 1 and 3 and store it in a variable
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // Return a string depending on the randomly generated number
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      break;
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper, Scissors?");
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let round = 1;

  function playRound(humanChoice, computerChoice) {
    // Gather human and computer choices
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    // Evaluate choices, pick a winner and update scores
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
      } else {
        console.log("You lose! Paper beats rock.");
        computerScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
      } else {
        console.log("You lose! Scissors beat paper.");
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        console.log("You win! Scissors beat paper.");
        humanScore++;
      } else {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
      }
    } else {
      console.log("Nope!");
    }
    console.log("Player score: ", humanScore);
    console.log("Computer score", computerScore);
  }
  // Play five rounds
  do {
    playRound();
    round++;
  }
  while (round <= 5);
  // Announce the winner and reset round number
  console.log(humanScore > computerScore ? "You win the game!" : (computerScore > humanScore ? "You lose the game..." : "It's a tie!"));
  round = 1;
}

playGame();