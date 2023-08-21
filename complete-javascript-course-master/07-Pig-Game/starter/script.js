'use strict';

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Name = document.querySelector('#name--0');
const player2Name = document.querySelector('#name--1');
let totalScoreP1 = 0;
let totalScoreP2 = 0;
let currentScore = 0;

const rollDice = function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = function displayDice(dice) {
  const changeImg = document.querySelector('.dice');
  changeImg.src = `dice-${dice}.png`;
};

const checkOne = function checkOne(dice) {
  return dice === 1 ? true : false;
};

const calCurrentScore = function calCurrentScore(dice) {
  currentScore = currentScore + dice;
  return currentScore;
};

const playerActive = function playerActive(player) {
  if (player === 0) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else if (player === 1) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
};

const displayCurrentScoreDOM = function displayCurrentScoreDOM(player, cscore) {
  if (player === 0) {
    document.querySelector(`#current--${player}`).textContent = cscore;
  } else if (player === 1) {
    document.querySelector(`#current--${player}`).textContent = cscore;
  }
};

const setCurrentScore = function setCurrentScore() {
  currentScore = 0;
};

const totalScores = function totalScores(player) {
  if (player === 0) {
    return (totalScoreP1 += currentScore);
  } else if (player === 1) {
    return (totalScoreP2 += currentScore);
  }
};

const displayDomScore = function displayCurrentScoreDOM(player, totalScore) {
  if (player === 0) {
    document.querySelector(`#score--${player}`).textContent = totalScore;
  } else if (player === 1) {
    document.querySelector(`#score--${player}`).textContent = totalScore;
  }
};

const checkWinner = function checkWinner(score) {
  return score >= 100 ? true : false;
};

const dispalyWinner = function checkWinner(player) {
  if (player === 0) {
    console.log('Player 1 wins!');
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    player1Name.textContent = 'Winner!';
  } else if (player === 1) {
    console.log('Player 2 wins!');
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    player2Name.textContent = 'Winner!';
  }
};
// Roll Function
const roll = function roll() {
  const diceRoll = rollDice();
  const check = checkOne(diceRoll);
  displayDice(diceRoll);

  // If Dice 1, current score to 0 and change player
  if (check) {
    currentScore = 0;
    if (player1.classList.contains('player--active')) {
      displayCurrentScoreDOM(0, currentScore);
      playerActive(0);
    } else if (player2.classList.contains('player--active')) {
      displayCurrentScoreDOM(1, currentScore);
      playerActive(1);
    }
  } else {
    currentScore = calCurrentScore(diceRoll);
    if (player1.classList.contains('player--active')) {
      displayCurrentScoreDOM(0, currentScore);
    } else if (player2.classList.contains('player--active')) {
      displayCurrentScoreDOM(1, currentScore);
    }
  }
};

// Hold Function
const hold = function hold() {
  let totals = 0;
  if (player1.classList.contains('player--active')) {
    totals = totalScores(0);
    displayDomScore(0, totals);
    if (checkWinner(totals)) {
      dispalyWinner(0);
    } else {
      setCurrentScore();
      displayCurrentScoreDOM(0, currentScore);
      playerActive(0);
    }
  } else if (player2.classList.contains('player--active')) {
    totals = totalScores(1);
    displayDomScore(1, totals);
    if (checkWinner(totals)) {
      dispalyWinner(1);
    } else {
      setCurrentScore();
      displayCurrentScoreDOM(1, currentScore);
      playerActive(1);
    }
  }
};

// New Game function
const newGame = function newGame() {
  totalScoreP1 = 0;
  totalScoreP2 = 0;
  setCurrentScore();
  document.querySelector('#current--0').textContent = currentScore;
  document.querySelector('#current--1').textContent = currentScore;
  document.querySelector('#score--0').textContent = totalScoreP1;
  document.querySelector('#score--1').textContent = totalScoreP2;
  player1Name.textContent = 'Player 1';
  player2Name.textContent = 'Player 2';
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  const changeImg = document.querySelector('.dice');
  changeImg.src = '';
  rollBtn.disabled = false;
  holdBtn.disabled = false;
};

rollBtn.addEventListener('click', roll);
holdBtn.addEventListener('click', hold);
newGameBtn.addEventListener('click', newGame);
