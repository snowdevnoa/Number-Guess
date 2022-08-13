/*

Game rules: 
Players must guess between the min and max number
Only allowed 3 guesses
Notify player amount of guesses left
Notify player correct answer answer if wrong
Allow player to play again


*/

//game values
let min = 1,
  max = 10,
  numOfGuesses = 3,
  randomNum = Math.floor(Math.random() * 10 + 1);

//UI elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.getElementById('guess-btn'),
  guessInput = document.getElementById('guess-input'),
  message = document.querySelector('.message');

console.log(randomNum);

//assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// guess event
guessBtn.addEventListener('click', function () {
  console.log(guessInput.value); //remember this is a string so convert

  let guess = parseInt(guessInput.value);

  //Validate input

  if (guess > max || guess < min || isNaN(guess)) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //check if won
  if (guess === randomNum) {
    //disable input
    guessInput.disabled = 'true';
    //border green
    guessInput.style.borderColor = 'green';
    //set the message
    setMessage(`Congrats! ${randomNum} is correct :)`, 'green');

    //replay game
    restartGame();
  } else {
    numOfGuesses -= 1;
    if (numOfGuesses === 0) {
      //game over
      guessInput.disabled = 'true';
      guessInput.style.borderColor = 'red';

      setMessage(`Game Over :P The correct number was ${randomNum}`, 'red');

      restartGame();
    } else {
      // Wrong answer but game continues
      guessInput.style.borderColor = 'red';

      guessInput.value = '';

      setMessage(
        `${guess} is not correct, ${numOfGuesses} guesses left`,
        'red'
      );
    }
  }
});

//set message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

//replay game

function restartGame() {
  guessBtn.value = 'Play again?';
  guessBtn.addEventListener('click', () => {
    location.reload();
  });
}
