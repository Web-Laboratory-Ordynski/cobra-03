// 2. Определить количество цифр в введенном числе.

const howManyNumerals = (number) => {
  let numOfDigits = 1;
  for (let counter = 1; counter <= number.length - 1; counter++) {
    numOfDigits += 1;
  }
  return numOfDigits
}

var args = process.argv;
var userNumber = args[2];

console.log("Введено: ", userNumber);
console.log("---------------");
let quantityOfNumerals = howManyNumerals(userNumber);
console.log('У цього числа', quantityOfNumerals, 'цифр');