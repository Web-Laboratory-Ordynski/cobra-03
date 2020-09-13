var compareButton = document.querySelector('.compare');
var glowButton = document.querySelector('.glow');
var timeButton = document.querySelector('.time');
var calculateButton = document.querySelector('.calculate')
function compare(){   
    a = parseInt(prompt('1st'));
    b = parseInt(prompt('2nd'));

    if(a>b){
        console.log(1);
    }
    else if(a<b){
        console.log(-1);
    }
    else if(a==b){
        console.log(0);
    }
    else{
        console.log('write correct number')
    };
}

function glow(){
    let first = prompt('write 1st number');
    let second = prompt('write 2nd number');
    let third = prompt('write 3rd number');
    if(isNaN(first) == false 
    && isNaN(second) == false
    && isNaN(third) == false){
        let newNumber = String(first) + String(second) + String(third)
        alert(newNumber);
    }else{
        alert('write correct number')
    }
}

function time(){
    let hours = prompt('write hours');
    let minutes = prompt('write minutes');
    let seconds = prompt('write seconds');
    if(hours == ''){
        hours = '00';
    }
    if(minutes == ''){
        minutes = '00';
    }
    if(seconds == ''){
        seconds = '00';
    }
    if(isNaN(hours) == false
    && isNaN(minutes) == false
    && isNaN(seconds) == false
    && hours.length == 2
    && minutes.length == 2
    && seconds.length == 2){
        alert(String(hours)+':'+String(minutes)+':'+String(seconds))
    }else{
        alert('write correcet number')
    }
}

function counter(numberSum){
    numberSum = prompt ('что считаем?')
    function counterNumber(number){
        number = prompt('Введите число')
        alert(number +' ' + numberSum);
        return number +' ' + numberSum ;
    }
    return counterNumber()
}

compareButton.addEventListener('click', compare);
glowButton.addEventListener('click',glow);
timeButton.addEventListener('click', time);
calculateButton.addEventListener('click', counter);
