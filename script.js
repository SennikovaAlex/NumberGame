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

         let ind = 10;

        function doNumber(ind) {
      let userNumber = prompt('Угадай число от 1 до 100'); 
     
     let a = ind;
     let messege = function doAgain() { let asks = confirm('Хотите сыграть еще?'); 
        if (asks === true) {numberUser()}}; 
    
        if (userNumber == null) {
        alert('Game over'); 
        messege() // в усложненном прописано, что игра просто завершается, но даю пользователю шанс))
    } else if (!isNumber(userNumber)) {
        alert ('Введите число');
        doNumber(a) 
        
    } else if (userNumber > numberGame) {
        a--;
        if (a > 0) {
        alert ('Загаданное число меньше У вас осталось ' + a + 'попыток');
        doNumber(a) } else { let again = confirm('Ваши попытки исчерпаны, хотите начать заново?'); 
        if (again === true){numberUser()} else {alert('Game over')}}
    } else if (userNumber < numberGame) {
        a--;
        if (a > 0) { alert ('Загаданное число больше У вас осталось ' + a + 'попыток');
        doNumber(a)} else { let again = confirm('Ваши попытки исчерпаны, хотите начать заново?'); 
        if (again === true){numberUser()} else {alert('Game over')}}

    } else if (userNumber == numberGame) {
        alert ('Поздравляю, вы победили');
        messege()
    }
      
    } doNumber(ind); 
    }
    numberUser();
    
    }
  
    startGame();








