'use strict';
// Selecting Elements
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Name = document.querySelector('#name--0');
const player2Name = document.querySelector('#name--1');
const diceImg = document.querySelector('.dice');
//declare variables
let scores, currentScore, activePlayer;
let playerWinner = 0;
// Initial values
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  document
    .querySelector(`.player--${playerWinner}`)
    .classList.remove('player--winner');
  diceImg.classList.add('hidden');
  document.querySelector('#current--0').textContent = currentScore;
  document.querySelector('#current--1').textContent = currentScore;
  document.querySelector('#score--0').textContent = scores[0];
  document.querySelector('#score--1').textContent = scores[1];
  player1Name.textContent = 'Player 1';
  player2Name.textContent = 'Player 2';
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  diceImg.classList.add('hidden');
  rollBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
};

init();

const rollDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = function (dice) {
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${dice}.png`;
};

const calCurrentScore = function (dice) {
  currentScore += dice;
  return currentScore;
};

const playerActive = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const totalScores = function (player) {
  return (scores[player] += currentScore);
};

// Roll
const roll = function () {
  const diceRoll = rollDice();
  displayDice(diceRoll);

  // If Dice 1, current score to 0 and change player
  if (diceRoll === 1) {
    switchPlayer();
  } else {
    currentScore = calCurrentScore(diceRoll);
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  }
};

// Hold
const hold = function () {
  let totals = 0;
  totals = totalScores(activePlayer);
  document.querySelector(`#score--${activePlayer}`).textContent = totals;
  // Player wins
  if (totals >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    playerWinner = activePlayer;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    rollBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
    // No winner switch player
  } else {
    switchPlayer();
  }
};

rollBtn.addEventListener('click', roll);
holdBtn.addEventListener('click', hold);
newGameBtn.addEventListener('click', init);
