// LOOP PRACTICE
// -----------------------------------------------------------------
//! Take an input from the user. Starting with the 4th character,

//! log all characters until the end of the input.
//! If the input is shorter than 4 characters, nothing should be logged.

// suggest to the user that their name may look a little better if they capitalize the 4th character.
// for loops have how many parts?
// What is the first part of a for loop?
// A: initialization
// What is the second part of a for loop?
// A: break keepGoing
// What is the third part of a for loop?
// A: increment

// Hint hint: accessing a particular spot in a string is similar to accessing a particular spot in an array.
// stringVariableName[3] will give you the 4th character in a string.

// break keepGoing: when the loop should stop (true or false expression)

/**
for(assignment; break keepGoing; increment) {
  // scope of the for loop
}
while(break keepGoing) {
  // scope of the while loop
}
do {
  // scope of the do while loop
} while(break keepGoing);

const myFunciton = () => {
  // The scope of the function
};

const mySecondFunction = function() {
  // The scope of the function
}

console.log('player name is:', playerName);

 */





// -----------------------------------------------------------------
//! Pick a random number. Prompt the user to guess a number. If the number is correct,
//! end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).
const guessingGame = () => {
  let gotItCorrect = false;
  let numberOfGuesses = 0;
  const randomNumber = Math.floor(Math.random() * 10) + 1; // between 1 and 10
  do {
    const personInput = prompt("Guess a number between 1 and 10");
    const personInputNumber = Number(personInput);
    numberOfGuesses += 1;
    gotItCorrect = personInputNumber === randomNumber
    console.log('the random number', randomNumber);
    console.log('the guess', personInputNumber);
    if (gotItCorrect) {
      console.log(`It took ${numberOfGuesses} tries to guess the number`);
      console.log('You got it correct!', numberOfGuesses);
    }
  } while (!gotItCorrect);
}
// add a button that plays the guessing game to the body of the html
document.body.innerHTML = "<button onclick='guessingGame()'>Play the guessing game</button>";


// -----------------------------------------------------------------
//! Simulate a coin flip. Start a counter at 0. If the initial flip was heads,
//! leave the counter at 0 and log: "It took 0 retries to get heads!".
//! If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.

const coinFlip = () => {
  let count = 0;
  let coinFace;
  let keepGoing = true;
  while(keepGoing) {
    coinFace = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
    keepGoing = coinFace !== 'heads'
    if (!keepGoing) {
      alert(`It took ${count} retries to get heads!`);
    } else {
      count++;
    }
  }
}
// add a button that plays the guessing game to the body of the html
document.body.innerHTML += "<button onclick='coinFlip()'>Play Coin Flip </button>";

// COMPARISON PRACTICE
// -----------------------------------------------------------------
//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    or less than/equal to 50 and then log those messages separately to the console.
//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name
//!  - Log their name in reverse to the console.

