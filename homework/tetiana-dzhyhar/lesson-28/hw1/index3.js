// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

function getSimbolByNumber(numOf3) {
  if (numOf3.length !== 3) {
    console.log("ану введіть трьохзначне число")
  } else if (numOf3[0] == numOf3[1] || numOf3[0] == numOf3[2] || numOf3[1] == numOf3[2]) {
    console.log("ого, це число має однакові цифри");
  } else {
    console.log('всі цифри цього цисла різні, давайте шось цікавіше');
  }

}

var args = process.argv;
var userNumber = args[2];
// userNumber = Number(userNumber);

console.log("Введено: ", userNumber);
console.log("---------------");
getSimbolByNumber(userNumber);