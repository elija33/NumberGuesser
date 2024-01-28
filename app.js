/*
Game function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of gesses remaining
- Notify the player of the corrtec answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Element
const UIgame = document.querySelector("game");
const UIminNum = document.querySelector(".min-num");
const UImaxNum = document.querySelector(".max-num");
const UIguessBtn = document.querySelector("#guess-btn");
const UIguessInput = document.querySelector("#guess-input");
const UImessage = document.querySelector(".message");

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener("click", function () {
  let guess = parseInt(UIguessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // Disable input
    UIguessInput.disabled = true;
    // change the border color
    UIguessInput.style.borderColor = "green";
    // Letting user know they won
    setMessage(`${winningNum} is correct! You Win`, "green");
  } else {
  }
});

// Set message

function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}
