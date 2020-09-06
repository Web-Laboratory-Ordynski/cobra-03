let sortButton = document.querySelector('.sort');
let checkValueButton  = document.querySelector('.checkValue')
let statButton  = document.querySelector('.stat')
let nextDayButton  = document.querySelector('.nextDay')
let gameButton = document.querySelector('.game');
let questButton = document.querySelector('.quest')

function sort(){
    let userAnswer = prompt('Введите числа через запятую , я их отсртирую от большего к меньшему');
    let newArr = [];
    newArr = userAnswer.split(',');
    newArr = newArr.filter(Number);
    function compareNumbers(a, b) {
        return a - b;
    }
    alert(newArr.sort(compareNumbers));
};

function checkValue(){
  let userAnswer = prompt('Введите число')
  if(isNaN(userAnswer || userAnswer == null || userAnswer =="")){
    alert('write correct')
  }else{
    alert('you number long = ' + userAnswer.length)
  }
};

function stat(){
  let userAnswer = prompt('Введите 10 чисел через запятую , я выведу их статистику');
  let newArr = [];
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let even = 0;
  let odd = 0;
  
  if(userAnswer =='' || userAnswer == null){
    alert('sorry')
  }else{
    newArr = userAnswer.split(',');

  newArr.forEach(element => {
    switch (Math.sign(element)) {
      case 1:
        positive = positive +1;
        break;
      case -1:
        negative = negative +1;
        break;
      case 0:
        zero = zero +1;
        break;
      default: console.log('sorry')
        break;
    }

  });
  
  newArr.forEach(element =>{
    switch (element % 2) {
      case 1:
        even = even +1;
        break;
      case 0:
        odd = odd +1;
        break;
      default: console.log('sorry')
        break;
    }
  });

  alert('positive = '+positive+' '+ 'negative = '+negative+' ' +'zero = '+zero+' '+'even = '+even+' '+'odd = '+odd)
  }
  

};

function nextDay(){
  
  let today = new Date();
  result = window.confirm(today);
  if(result == true){
    nextDayPlus();
  }else{
    return;
  }
  
  function nextDayPlus(){
    today.setDate(today.getDate()+1);
    result = window.confirm(today);
    if(result == true){
      nextDayPlus();
    }else{
      return;
    }
  }
  
};

function game(){
  N = 101;
  minN = 1;
  maxN = 100;
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min; 
  }
  

  let firstAsk = getRandomInt(minN, maxN);
  userAnswer = prompt('загадай число от 0 до 100. Ok Это '+ firstAsk + '?, напиши Больше , Меньше  или Равно');
  
  if( userAnswer == "Больше"){
    minN = firstAsk +1;
    askAgain()
  }else if( userAnswer == "Меньше"){
    maxN = firstAsk -1;
    console.log(minN,maxN);
    askAgain()
  }

  function askAgain(){
    let nextAsk = getRandomInt(minN, maxN);
    userAnswer = prompt('Ok this is '+nextAsk+'?');

    switch (userAnswer) {
      case "Больше":
        minN = nextAsk +1; 
        askAgain()
        break;
      case "Меньше":
        maxN = nextAsk -1; 
        askAgain()
        break;
      case "Равно":
        alert('Ура победа вы загадали '+nextAsk);
        break;  
      default:
        break;
    }
  }
  
  
};

function quest(){
  alert('Условный оператор является единственным оператором JavaScript, который использует три операнда. Оператор принимает одно из двух значений в зависимости от заданного условия. Синтаксис оператора:');
}

sortButton.addEventListener('click', sort);
checkValueButton.addEventListener('click' , checkValue);
statButton.addEventListener('click' , stat);
nextDayButton.addEventListener('click' , nextDay);
gameButton.addEventListener('click' , game);
questButton.addEventListener('click' , quest);