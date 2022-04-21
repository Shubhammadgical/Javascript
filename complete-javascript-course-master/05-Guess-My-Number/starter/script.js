'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretnum);

const displatmsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretnum) {
    document.querySelector('.number').textContent = secretnum;
    //document.querySelector('.message').textContent = 'Correct Answer';
    displatmsg('Correct Answer!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnum) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      //document.querySelector('.message').textContent = guess > secretnum ? 'Too high!' : 'Too low!';
      displatmsg(guess > secretnum ? 'Too high!' : 'Too low!');
    } else {
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.message').textContent = 'You lost the game!';
      displatmsg('You lost the game!');
    }
  } //else if (guess > secretnum) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = 'Too high!';
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //     }
  //   } else if (guess < secretnum) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = 'Too low!';
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //     }
  //   }
  console.log(score);
});

document.querySelector('.again').addEventListener('click', function () {
  secretnum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretnum);
  //document.querySelector('.message').textContent = 'Start guessing...';
  displatmsg('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
