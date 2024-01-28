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
  winningNum = getRandomNum(min, max),
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

// Play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
UIguessBtn.addEventListener("click", function () {
  let guess = parseInt(UIguessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You Win`);
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over you lost
      gameOver(
        false,
        `Game Over, You Lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // Change border color
      UIguessInput.style.borderColor = "red";

      // clear the input
      UIguessInput.value = "";

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});
// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable input
  UIguessInput.disabled = true;
  // change the border color
  UIguessInput.style.borderColor = color;
  // Set text color
  UImessage.style.color = color;
  // Letting user know they won
  setMessage(msg);

  // Play Again
  UIguessBtn.value = "Play Again";
  UIguessBtn.className += "play-again";
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}
