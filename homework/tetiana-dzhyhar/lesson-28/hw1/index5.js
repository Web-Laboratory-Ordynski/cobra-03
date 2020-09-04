// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

function ifNumberIsPalindrome(numOf5) {
  if (numOf5.length !== 5) {
    console.log("ану введіть п'ятизначне число")
  } else if (numOf5[0] == numOf5[4] && numOf5[1] == numOf5[3]) {
    console.log("ого, це число є паліндромом");
  } else {
    console.log('це число не паліндром, спробуйте ще');
  }

}

var args = process.argv;
var userNumber = args[2];
// userNumber = Number(userNumber);

console.log("Введено: ", userNumber);
console.log("---------------");
ifNumberIsPalindrome(userNumber);