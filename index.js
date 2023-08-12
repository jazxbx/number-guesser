//Bonus

"use strict";

const secretNum = Math.ceil(Math.random() * 10);
let attempts = 5;
let tries = 0;
let isActive = true;
let guess = 0;
let minNumber = 1;
let maxNumber = 5000;

console.log(`---guess --${guess}`);

console.log(secretNum, attempts);

// randomRNum generator
function getRandomRange(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

// Function to validate if minimum and max numbers are valid

function validateNumbers(minNumber, maxNumber) {
  if (minNumber === null || minNumber === 0 || minNumber < 0) {
    minNumber = +prompt(`Input a valid number`);
  } else {
    minNumber = +prompt(`Input the minimum number`);
  }

  if (maxNumber === null || maxNumber === 0 || maxNumber < minNumber) {
    maxNumber = +prompt(`Input a valid  number`);
  } else {
    maxNumber = +prompt(`Input the maximum number`);

    return minNumber, maxNumber;
  }
}

// Function to display alert message

// function alertFunc(guess, attempts, randomNum) {
//   guess += prompt(`What number am I thinking?🤔`);

//   if (guess > randomNum) {
//     alert(
//       `Number is too high ☝️ Guess again. You have ${attempts} attempts left!`
//     );
//   } else if (guess < randomNum) {
//     alert(
//       `Number is too low 👇 Guess again. You have ${attempts} attempts left!`
//     );
//   } else {
//     alert(
//       `Sorry, you have run out of attempts. The correct number was ${randomNum}.`
//     );
//   }
// }

// Function to handle regular game mode

const playRegularGame = () => {
  while (attempts > 0) {
    guess = +prompt(
      `Guess a number from 1-10. You have ${attempts} attempts remaining.`
    );

    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Please enter a valid number between 1 and 10.");
      continue;
    }

    if (guess === secretNum) {
      alert(
        `🥳 You guessed correctly! The number was ${secretNum}. You guessed it in ${attempts} tries.`
      );
      attempts--;
      break;
    } else if (guess > secretNum) {
      alert(`Number is too high ☝️ Guess again.`);
    } else {
      alert(`Number is too low 👇Guess again.`);
    }
    attempts--;

    if (attempts === 0) {
      alert(
        `Sorry, you have run out of attempts. The correct number was ${secretNum}.`
      );
    }
  }
};

//Function to handle bonus game mode

const playBonusGame = () => {
  alert(
    `You are playing bonus mode!🥳 You get to choose the range of numbers to guess!👌`
  );

  validateNumbers(minNumber, maxNumber);
  // const minNumber = +prompt(`Input the minimum number`);
  // const maxNumber = +prompt(`Input the maximum number`);
  // console.log(`---minimum-${minNumber}, maximum-${maxNumber}`);
  const randomNum = getRandomRange(minNumber, maxNumber);
  // console.log(`---random range ${randomNum}`);
  guess = +prompt(`Guess the random number!`);

  let bonusAttempts = true;

  // while (bonusAttempts=true) incorrect syntax
  while (bonusAttempts) {
    if (isNaN(guess) || guess < minNumber) {
      alert(`No number! 😖`);
      guess = +prompt(`Guess the random number! You have ${attempts} left`);
      continue;
    }

    if (guess === null) {
      alert(`Goodbye!`);
      break;
    }

    if (guess === randomNum) {
      if (attempts > 1) {
        tries++;
        alert(`You win! You guessed correctly in ${tries} tries.`);
      }
      bonusAttempts = false;
    } else if (guess > randomNum) {
      if (attempts > 1) {
        alert(`Guess is too high ☝️`);
        attempts--;
        guess = +prompt(`Guess the random number! You have ${attempts} left`);
      } else {
        alert(`You lost the game! The number was ${secretNum}`);
      }
    } else if (guess < randomNum) {
      if (attempts > 1) {
        alert(`Guess too low 👇`);
        attempts--;
        guess = +prompt(`Guess the random number! You have ${attempts} left`);
      } else {
        alert(`You lost the game! The random number was ${secretNum}!`);
        bonusAttempts = false;
      }
    }
  }
};

// Function to determine game mode
function chooseGamemode() {
  while (isActive) {
    const gameMode = prompt(
      `Welcome to Number Guesser! Do you want to play on regular or bonus mode?`
    );
    console.log(`--question what the game should be`);
    if (
      gameMode === "regular" ||
      gameMode === "regular " ||
      gameMode === "regular mode" ||
      gameMode === "regular mode"
    ) {
      playRegularGame();
    } else if (
      gameMode === "bonus" ||
      gameMode === "bonus " ||
      gameMode === "bonus mode" ||
      gameMode === "bonus mode "
    ) {
      playBonusGame();
    } else if (gameMode === null) {
      alert(`Goodbye!`);
      break;
    } else {
      alert(`Not a valid response`);
      isActive = false;
    }
  }
}
chooseGamemode();
