'use strict';

let score = 20;
let highScore = 0;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const scoreDom = document.querySelector('.score');
const highScoreDom = document.querySelector('.highScore');

// Display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Generate Secret Number
const newSecretNum = function () {
  let secretNum = Math.trunc(Math.random() * 20) + 1;
  return secretNum;
};

let genSecret = newSecretNum();

scoreDom.textContent = `Score: ${score}`;
highScoreDom.textContent = `High Score: ${highScore}`;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guessField').value);

  // No given value
  if (!guess) {
    displayMessage('No number to guess, please enter any 1-20 number to GUESS');
    // If value is morethan 20
  } else if (guess > 20) {
    displayMessage('Guess Between 1 - 20 only!');
    // If value is lessthan 1
  } else if (guess < 1) {
    displayMessage('Guess Between 1 - 20 only!');
    // Guess the correct number
  } else if (genSecret === guess) {
    displayMessage(`You have Guess ${guess}`);
    document.querySelector('.numToGuess').textContent = genSecret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.numToGuess').style.fontSize = '30px';
    checkBtn.disabled = true;
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        '.highScore'
      ).textContent = `High Score: ${highScore}`;
    } else {
      document.querySelector(
        '.highScore'
      ).textContent = `High Score: ${highScore}`;
    }
    // Guess is Higher
  } else if (guess !== genSecret) {
    if (score > 1) {
      displayMessage(guess > genSecret ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = `Score: ${score}`;
    } else {
      score = 0;
      highScore = 0;
      checkBtn.disabled = true;
      document.querySelector('.score').textContent = `Score: ${score}`;
      document.querySelector(
        '.highScore'
      ).textContent = `High Score: ${highScore}`;
      displayMessage('Gameover!');
      document.querySelector('.message').style.color = 'red';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  genSecret = newSecretNum();
  document.querySelector('.score').textContent = `Score: ${score}`;
  displayMessage('Start Guessing');
  document.querySelector('.message').style.color = 'white';
  document.querySelector('.guessField').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.numToGuess').textContent = '?';
  document.querySelector('.numToGuess').style.fontSize = '6rem';
  checkBtn.disabled = false;
});
