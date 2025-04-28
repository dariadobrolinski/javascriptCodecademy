let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a random target number between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10); 
}

// Compare guesses and return true if human wins
function compareGuesses(humanGuess, computerGuess, targetNumber) {
  const humanDifference = Math.abs(humanGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);

  return humanDifference <= computerDifference;
}

// Update the score depending on the winner
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Advance the round by 1
const advanceRound = () => {
  currentRoundNumber++;
}
