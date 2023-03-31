'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}

// Check event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   No number is entered
  if (!guess) {
     displayMessage('😡 no number entered');
  }
  //   correct guess
  else if (guess === randomNumber) {
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '45rem';

    if(score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // wrong guess
  else{
    if(score > 0) { 
      score--;
      displayMessage(guess > randomNumber ? '📈 Too High' : '📉 Too Low');
      document.querySelector('.score').textContent = score;
    }
    else { // score === 0
      displayMessage('You lost the game');
    }
  }
});

// Restart game event listener, easier way to restart the game. But doesn't work with highScore because it resets it to 0

// document.querySelector('.again').addEventListener('click', function () {
//   document.location.reload();
//   return false;
// });


// The harder way to restart game
document.querySelector(".again").addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing ...');
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = "15rem";
});
