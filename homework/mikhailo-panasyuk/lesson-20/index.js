var howYouOldButton = document.querySelector('.howYouOld');
var specialButton = document.querySelector('.special');
var sameNumberButton = document.querySelector('.sameNumber');
var checkYearButton = document.querySelector('.checkYear');
var checkPallindromButton = document.querySelector('.checkPallindrom');
var moneyExchangeButton = document.querySelector('.moneyExchange');
var discountButton = document.querySelector('.discount');
var squareButton = document.querySelector('.square');
var gameButton = document.querySelector('.game');
var nextDayButton = document.querySelector('.nextDay');

function howYouOld(){
    var userAnswer = prompt('Сколько вам лет');
    if( userAnswer >= 0){
        if(userAnswer >= 0 &&  userAnswer <= 11 && userAnswer != null){
            alert('Ты ребенок')
        }
        if(userAnswer >= 12 &&  userAnswer <= 17){
            alert('Ты подросток')
        }
        if(userAnswer >= 17 &&  userAnswer <= 59){
            alert('Ты Взрослый')
        }
        if(userAnswer >= 60 ){
            alert('Ты Пенсионер')
        }
    }else{
        alert('Введите коректные данные')
    }
}

function showSpeial(){
    var userAnswer = prompt('Ввведите число от 0 до 9');
    if( userAnswer >= 0 && userAnswer <= 9){
        if(userAnswer == 1){
            alert('!')
        }
        if(userAnswer == 2){
            alert('@')
        }
        if(userAnswer == 3){
            alert('#')
        }
        if(userAnswer == 4){
            alert('$')
        }
        if(userAnswer == 5){
            alert('%')
        }
        if(userAnswer == 6){
            alert('^')
        }
        if(userAnswer == 7){
            alert('&')
        }
        if(userAnswer == 8){
            alert('*')
        }
        if(userAnswer == 9){
            alert('(')
        }
        if(userAnswer == 0){
            alert(')')
        }
    }else{
        alert('Введите коректные данные')
    }
}

function sameNumberCheck(){
    var userAnswer = prompt('введите трехзначное число ( например 123)');
    var userNumber = parseInt(userAnswer);
    if(userAnswer.length == 3 && userNumber >= 100){
        newArr = userAnswer.split('');
        if(newArr[0] == newArr[1] || newArr[0] == newArr[2] || newArr[1] == newArr[0] || newArr[1] == newArr[2] || newArr[2] == newArr[0] || newArr[2] == newArr[1] ){
            alert('У вас одинаковые числа')
        }else{
            alert('Умничка')
        }
    }else{
        alert('Введите коректное число')
    }
}

function checkYear(){
    var userAnswer = prompt('Введите год');
    if( isNaN(userAnswer) || userAnswer == null || userAnswer == ""){
        alert('введи год')
    }else{
        if(userAnswer % 400 == 0  || userAnswer % 4 == 0 && userAnswer % 100 != 0 ){
            alert('Это высокосный год')
        }else{
            alert('Это обычный год')
        }
    }

}

function checkPallindrom(){
    var userAnswer = prompt('Введите 5-ти разрядное число ( например 55555)');
    if(isNaN(userAnswer)|| userAnswer.length != 5){
        alert('Введите корректное число')
    }else{
        userAnswerSplit = userAnswer.split('');
        if(userAnswerSplit[0] == userAnswerSplit[4] && userAnswerSplit[1] == userAnswerSplit[3]){
            alert('Это паллиндром')
        }else{
            alert('Это не паллиндром')
        }
    }
}

function moneyExchange(){
    var userNumber = prompt('Сколько у вас USD?')
    if(isNaN(userNumber) || userNumber == null || userNumber == "" || userNumber == 0){
        alert('введите корректные данные')
    }else{
        var userAnswer = prompt( 'выбирите, в какую валюту хочет перевести EUR, UAH или AZN')
        if( userAnswer == 'EUR' || userAnswer == 'eur'){
            exchangeValue = userNumber * 0.84 ;
            alert(' Вы получите '+ exchangeValue + " " + userAnswer);
        }
        if( userAnswer == 'UAH' || userAnswer == 'uah'){
            exchangeValue = userNumber * 27.49 ;
            alert(' Вы получите '+ exchangeValue + " " + userAnswer);
        }
        if( userAnswer == 'AZN' || userAnswer == 'azn'){
            exchangeValue = userNumber * 1.70 ;
            alert(' Вы получите '+ exchangeValue + " " + userAnswer);
        }
    }
    
}

function discount(){
    var userAnswer = prompt('Введите сумму покупок')
    if(isNaN(userAnswer) || userAnswer == null || userAnswer == "" || userAnswer == 0){
        alert('введите корректные данные')
    }else{
        if(userAnswer >= 200 && userAnswer < 300){
            userDiscount = userAnswer * 0.97
            alert('К оплате ' + userDiscount)
        }
        if(userAnswer >= 300 && userAnswer < 500){
            userDiscount = userAnswer * 0.95
            alert('К оплате ' + userDiscount)
        }
        if(userAnswer >= 500){
            userDiscount = userAnswer * 0.93
            alert('К оплате ' + userDiscount)
        }if(userAnswer < 200){
            alert('К оплате ' + userAnswer)
        }
    }
}

function squareCheck(){
    var firstAnswer = prompt('Введите длину окружности')
    if(isNaN(firstAnswer) || firstAnswer == null || firstAnswer == "" || firstAnswer == 0){
        alert('введите корректные данные')
    }else{
        var secondAnswer = prompt('Введите периметр квадрата')
        if(isNaN(secondAnswer) || secondAnswer == null || secondAnswer == "" || secondAnswer == 0){
            alert('введите корректные данные')
        }else{
            if(parseInt(secondAnswer) > parseInt(firstAnswer)){
                alert('Влезет')
            }else{
                alert('не влезет')
            }
        }
    }
}

function game(){
    var score = 0;
    var firstAnswer = prompt('2+2 = 4? Напишите Да или Нет');
    if(firstAnswer == "Да"){
        score = score + 2;
    }
    var secondAnswer = prompt('Сейчас 2020 год? Напишите Да или Нет');
    if(secondAnswer == "Да"){
        score = score + 2;
    }
    var lastAnswer = prompt('Ты любишь Beetroot? Напишите Да или Нет');
    if(lastAnswer == "Да"){
        score = score + 2;
    }
    
    alert("Твой счет "+ score)
}

function nextDay(){
    var firstAnswer = prompt('Введите число сегодняшнего дня ( например 29)')
    if(isNaN(firstAnswer) || firstAnswer == null || firstAnswer == "" || firstAnswer == 0 || firstAnswer.length > 2){
        alert('введите корректные данные')
    }else{
        var secondAnswer = prompt('Введите число тукущего месяца( например 11)')
        if(isNaN(secondAnswer) || secondAnswer == null || secondAnswer == "" || secondAnswer == 0 || secondAnswer.length > 2){
            alert('введите корректные данные')
        }else{
            var lastAnswer = prompt('Введите текущий год ( например 1998)')
            if(isNaN(lastAnswer) || lastAnswer == null || lastAnswer == "" || lastAnswer == 0 || lastAnswer.length > 4){
                alert('введите корректные данные')
            }else{
                let date = new Date(lastAnswer,parseInt(secondAnswer)-1,firstAnswer);
                date.setDate(date.getDate() + 1);
                alert( date );
            }
        }
    }
}

howYouOldButton.addEventListener("click", howYouOld);
specialButton.addEventListener('click',showSpeial);
sameNumberButton.addEventListener("click", sameNumberCheck);
checkYearButton.addEventListener('click', checkYear);
checkPallindromButton.addEventListener('click' , checkPallindrom);
moneyExchangeButton.addEventListener('click' , moneyExchange);
discountButton.addEventListener('click', discount);
squareButton.addEventListener('click', squareCheck);
gameButton.addEventListener('click' , game);
nextDayButton.addEventListener('click' , nextDay);
