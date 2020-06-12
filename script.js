'use stirct'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) 
};

function startGame (number) {
    let numberGame = number;

    function numberUser() { 
         let ind = 10;
        function doNumber(ind) {
      let userNumber = prompt('Угадай число от 1 до 100'); 
     console.log(ind);
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
    
    startGame(56);








