'use strict';

const questions = document.querySelectorAll('article');

console.log(questions);

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    // console.log(e.currentTarget);
    for (let question of questions) {
      question.classList.remove('show');
    }
    e.currentTarget.classList.add('show');
  });
});
