'use stirct'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) 
};

function startGame () {
    let getRandomFloat = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
      };
    

    
    function numberUser() {
        let numberGame = getRandomFloat(1, 100);
        console.log(numberGame);
        
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
        console.dir(reaction);
    }
       }
       reaction(); 
    }
    numberUser();
   }
    
    startGame();

