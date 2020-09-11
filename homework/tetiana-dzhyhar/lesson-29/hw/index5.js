// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
// отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. 
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) 
// для ввода чисел пользователем.

const sortingNumbers = (arrayOfNumbers) => {
  let numberCounter = 0;
  let numOfPositiveNumbers = 0;
  let numOfNegativeNumbers = 0;
  let numOfZeros = 0;
  for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
    if (arrayOfNumbers[i] > 0) {
      numOfPositiveNumbers += 1;
    } else if (arrayOfNumbers[i] < 0) {
      numOfNegativeNumbers += 1;
    } else {
      numOfZeros += 1
    }
  }

  console.log('у цьому масиві', numOfPositiveNumbers, 'додатніх чисел,', numOfNegativeNumbers, "від'ємних чисел", 'та', numOfZeros, 'нулів');
  return numberCounter;
}

const sortingNumbersByParity = (arrayOfNumbers) => {
  let numberCounterByParity = 0;
  let numOfEvenNumbers = 0;
  let numOfOddNumbers = 0;
  for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
    if (arrayOfNumbers[i] % 2 == 0 && arrayOfNumbers[i] != 0) {
      numOfEvenNumbers += 1;
    } else if (arrayOfNumbers[i] % 2 !== 0) {
      numOfOddNumbers += 1
    }
  }

  console.log('також у цьому масиві', numOfEvenNumbers, 'парних чисел та', numOfOddNumbers, 'непарних чисел');
  return numberCounterByParity;
}

var args = process.argv;
var userStringOfNumbers = args[2];
let userArray = userStringOfNumbers.split(",");

console.log("Введено: ", userStringOfNumbers);
console.log("---------------");
sortingNumbers(userArray);
sortingNumbersByParity(userArray);