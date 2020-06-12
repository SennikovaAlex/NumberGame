'use stirct'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) //Если число конечное то тру
};

function startGame (number) {
let numberGame = number;

function numberUser() {
  let userNumber = prompt('Угадай число от 1 до 100'); 
   function reaction() {
if (userNumber == null) {
    alert('Game over'); 
} else if (!isNumber(userNumber)) {
    alert ('Введите число');
    numberUser() 
} else if (userNumber > numberGame) {
    alert ('Загаданное число больше');
 numberUser()
} else if (userNumber < numberGame) {
    alert ('Загаданное число меньше');
    numberUser()
} else if (userNumber == numberGame) {
    alert ('Поздравляю, вы победили')
}
   }
   reaction(); 
}
numberUser();
}

startGame(56);






