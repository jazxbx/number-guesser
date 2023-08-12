//Bonus

"use strict";

const AVAILABLE_ATTEMPTS = 5;

// Function to handle regular game mode

const playRegularGame = () => {
  let secretNum = Math.ceil(Math.random() * 10); //moved to local scope to prevent unpredictable side effects
  let tries = 0;

  while (tries < AVAILABLE_ATTEMPTS) {
    const guess = +prompt(
      `Guess a number from 1-10. You have ${
        AVAILABLE_ATTEMPTS - tries
      } attempts remaining.`
    );

    if (isNaN(guess) || guess < 1 || guess > 10 || !guess) {
      alert("Please enter a valid number between 1 and 10.");
      continue;
    }

    tries++;
    if (guess === secretNum) {
      alert(
        `🥳 You guessed correctly! The number was ${secretNum}. You guessed it in ${tries} tries.`
      );
      break;
    } else if (guess > secretNum) {
      alert(
        `Number is too high ☝️ ${
          tries != AVAILABLE_ATTEMPTS ? "Guess again!" : ""
        }`
      );
    } else {
      alert(
        `Number is too low 👇 ${
          tries != AVAILABLE_ATTEMPTS ? "Guess again!" : ""
        }`
      );
    }
    if (tries === AVAILABLE_ATTEMPTS) {
      alert(
        `Sorry, you have run out of attempts. The correct number was ${secretNum}.`
      );
    }
  }
};

//Function to handle bonus game mode

const playBonusGame = () => {
  // randomRNum generator
  const getRandomRange = (minNumber, maxNumber) => {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  };

  // Function to validate if minimum and max numbers are valid

  const areNumbersValid = (minNumber, maxNumber) => {
    if (
      minNumber === null ||
      isNaN(minNumber) ||
      minNumber > maxNumber ||
      maxNumber === null ||
      isNaN(maxNumber) ||
      maxNumber < minNumber
    ) {
      return false;
    }
    return true;
  };

  alert(
    `You are playing bonus mode!🥳 You get to choose the range of numbers to guess!👌`
  );
  let minNumber, maxNumber;

  // validate number
  while (true) {
    minNumber = +prompt(`Input the minimum number`);
    maxNumber = +prompt(`Input the maximum number`);
    if (areNumbersValid(minNumber, maxNumber)) {
      break;
    }
  }

  const randomNum = getRandomRange(minNumber, maxNumber);
  // console.log(`---random range ${randomNum}`);

  // while (bonusAttempts=true) incorrect syntax
  while (true) {
    const guess = +prompt(`Guess the random number!`);
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
const chooseGamemode = () => {
  let isActive = true;
  while (isActive) {
    let gameMode = prompt(
      `Welcome to Number Guesser! Do you want to play on regular or bonus mode?`
    );

    if (gameMode === null) {
      alert(`Goodbye!`);
      break;
    }
    gameMode = gameMode.trim(); // DO NOT FORGET ASSIGNMENT OPERATOR. Reassigned trim value of gameMode
    if (
      gameMode === "regular" ||
      gameMode === "regular mode"
      // gameMode === "regular mode" - Dont need to check since its trimmed.||
      // gameMode === "regular " ||
    ) {
      playRegularGame();
    } else if (
      gameMode === "bonus" ||
      gameMode === "bonus mode"
      // gameMode === "bonus " ||
      // gameMode === "bonus mode "
    ) {
      playBonusGame();
    } else {
      alert(`Not a valid response`);
      isActive = false;
    }
  }
};
chooseGamemode();
