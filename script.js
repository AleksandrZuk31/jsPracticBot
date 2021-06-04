'use strict'

function one() {
  let num = 33;
console.log(num);
  function two() {
    let question = +prompt('Угадай число от 1 до 100');  
    console.log(question);
      function tree() {
        if (question > num) {
          alert('Загаданное число меньше');
        } else if (question < num) {
          alert('Загаданное число больше');
        } else if (question === null) {
          alert('Игра окончена!');
        } else if (question === 33) {
          alert('Поздравляю, Вы угадали!!!');
        } else if (question === NaN) {
          alert('Введи число!');
        }

      return two();    
        
        } tree();
        } two();
         
  } 

one();
