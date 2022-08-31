'use strict';











// 1 обозначить все фигуры

// 2 привести счет в равный 0  0  

// 3 создать функцию рандом

// 4 применить число к кубику

// 5 если число не 1 то прибавлять счет кубика к счету

// 6 переключиться на другого






const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceCurrent = document.querySelector('.dice');

let scores, activePlayer, currentScore, playing;


let winner = 'winner!';

const restart = function() {


  
  
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;
  
  
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;

  diceCurrent.classList.add('hidden');
player1.classList.remove('player--winner');
player2.classList.remove('player--winner');
player1.classList.add('player--active');
player2.classList.remove('player--active');
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
}

restart();

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
  if(playing) {

  
let dice = Math.floor(Math.random() * 6) + 1;

diceCurrent.classList.remove('hidden');
diceCurrent.src = `dice-${dice}.png`;

if(dice !== 1) {
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}
else {
  switchPlayer();
}
  }
})

btnHold.addEventListener('click', function(){
  if(playing) {
  // Add current score to the active player
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  //check if players score != 100
if(scores[activePlayer] >= 100) {
  playing = false;
  diceCurrent.classList.add('hidden');
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
  document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
  document.getElementById(`name--${activePlayer}`).textContent = winner;


} else { switchPlayer();}

  //switching to another player
}

})

btnNew.addEventListener('click', function(){

restart();




})

