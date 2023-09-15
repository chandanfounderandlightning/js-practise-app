'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 20;
let lowScore = 0;
let getScoreValue;

const showMessage = function (message) {
  document.querySelector('.message').innerHTML = message;
};

document.querySelector('.check').addEventListener('click', function () {
  getScoreValue = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  if (!getScoreValue) {
    showMessage('⛔️ No number!');
  } else if (getScoreValue === secretNumber) {
    document.querySelector('.number').innerText = getScoreValue;
    showMessage('🎉 Correct Number!');
    document.querySelector('.highscore').innerText = highScore;
    document.body.style.background = 'green';
  } else if (highScore <= 0) {
    showMessage('💥 You lost the game!');
    document.querySelector('.score').innerText = lowScore;
  } else if (getScoreValue > secretNumber) {
    showMessage('📉 Too high!');
    document.querySelector('.score').innerText = highScore -= 1;
  } else if (getScoreValue < secretNumber) {
    showMessage('📉 Too low!');
    document.querySelector('.score').innerText = highScore -= 1;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  highScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerText = '?';
  showMessage('Start guessing...');
  document.querySelector('.score').innerText = highScore;
  document.body.style.background = '#222';
});
