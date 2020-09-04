// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише(1–!, 2– @, 3–# и т.д).

function getSimbolByNumber(num) {
  var simbol;
  if (num === 0) {
    simbol = ")";
  } else if (num === 1) {
    simbol = "!";
  } else if (num === 2) {
    simbol = "@";
  } else if (num === 3) {
    simbol = "#";
  } else if (num === 4) {
    simbol = "$";
  } else if (num === 5) {
    simbol = "%";
  } else if (num === 6) {
    simbol = "^";
  } else if (num === 7) {
    simbol = "&";
  } else if (num === 8) {
    simbol = "*";
  } else if (num === 9) {
    simbol = "(";
  } else {
    simbol = "введіть число від 0 до 9";
  }

  return simbol;
}

var args = process.argv;
var userNumber = args[2];
userNumber = Number(userNumber);

console.log("Введено: ", userNumber);
console.log("---------------");
var numberCategorySimbol = getSimbolByNumber(userNumber);
console.log(userNumber, "відповідає ", numberCategorySimbol);