'use strict';

// Selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Initialization conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const rollDice = () => {
  // a. Generate a random dice roll
  const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;

  // b. Display a dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomDiceRoll}.png`;

  // c. Check if dice rolled is 1.
  if (randomDiceRoll !== 1) {
    // Add dice to current score
    currentScore += randomDiceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // currentScore0El.textContent = currentScore;
  } else {
    // Switch to next player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

btnRoll.addEventListener('click', rollDice);
