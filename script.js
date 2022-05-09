'use strict';

// define secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// math.random 0-1, 乘以20 就是 [0,20),+1就是[1,21),由于取不到21且只取整数，所以就是1-20
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  //   利用函数封装重复的选择
};
// define click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    displayMessage('❌ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    // inside a string
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // highest score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong (delete duplicated code)
  } else if (guess !== secretNumber) {
    if (score >= 2) {
      displayMessage(guess > secretNumber ? '🔼 Too High!' : '🔽 Too Low!');
      // 用表达式替代if else
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('😥 You Lost The Game!');
    }
  }
});

// A new game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 'score';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
