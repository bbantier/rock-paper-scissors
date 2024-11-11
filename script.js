function getComputerChoice() {
  // Generate a random number between 1 and 3 and store it in a variable
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // Return a string depending on the randomly generated number
  switch (randomNumber) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
    default:
      break;
  }
}

console.log(getComputerChoice());
