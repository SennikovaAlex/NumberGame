  
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
        let doNumber = function() {  
            let userNumber = prompt('Угадай число от 1 до 100'); 
       function reaction() {
    if (userNumber == null) {
        alert('Game over'); 
    } else if (!isNumber(userNumber)) {
        alert ('Введите число');
        doNumber() 
    } else if (userNumber > numberGame) {
        alert ('Загаданное число меньше');
        doNumber()
    } else if (userNumber < numberGame) {
        alert ('Загаданное число больше');
        doNumber()
    } else if (userNumber == numberGame) {
        alert ('Поздравляю, вы победили')
        console.dir(reaction);
    } }
    reaction();  } 
    doNumber();
    } 
    numberUser();
}
    
    startGame();
