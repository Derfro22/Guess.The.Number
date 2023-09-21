let maxNumber;

// Ask the user to enter the max number until a valid number is provided
while (true) {
  maxNumber = prompt("Enter a max number:");

  if (!isNaN(maxNumber) && maxNumber > 1) {
    maxNumber = Number(maxNumber);
    break;
  } else {
    alert("Please enter a valid number greater than 1.");
  }
}

// Generate a random number between 1 and maxNumber
const targetNumber = Math.floor(Math.random() * (maxNumber - 1)) + 1;

let attempts = 0;

// Ask the user to guess the number until they guess it correctly
while (true) {
  const guess = prompt("Guess the number:");

// Check if the guess is a valid number
  if (!isNaN(guess)) {
    attempts++;

    const guessedNumber = parseInt(guess);

    // Check if the guessed number is correct
    if (guessedNumber === targetNumber) {
      alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
      break;
    } else if (guessedNumber < targetNumber) {
      alert("Incorrect guess. The number is higher.");
    } else {
      alert("Incorrect guess. The number is lower.");
    }
  } else {
    alert("Please enter a valid number.");
  }
}
