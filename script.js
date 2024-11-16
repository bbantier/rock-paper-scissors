const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");

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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });

  paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });

  scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });

  function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    let resultsText = "";

    if (humanChoice === computerChoice) {
      resultsText = "It's a tie!";
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        resultsText = "You win! Rock beats scissors.";
        humanScore++;
      } else {
        resultsText = "You lose! Paper beats rock.";
        computerScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        resultsText = "You win! Paper beats rock.";
        humanScore++;
      } else {
        resultsText = "You lose! Scissors beat paper.";
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        resultsText = "You win! Scissors beat paper.";
        humanScore++;
      } else {
        resultsText = "You lose! Rock beats scissors.";
        computerScore++;
      }
    }
    resultsDiv.innerHTML = `
     <p>Result:</p>
     <p>${resultsText}</p>
     <p>Player score: ${humanScore}</p>
     <p>Computer score: ${computerScore}</p>
    `;

    if (humanScore === 5) { 
      resultsDiv.innerHTML += `

        You win!
      `;
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      resultsDiv.innerHTML += `

        You lose...
      `;
      humanScore = 0;
      computerScore = 0;
    }
  }
}

playGame();
