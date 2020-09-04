// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function ifYearIsLeap(year) {
  if ((year < 0) || (year > 2020)) {
    console.log("ану введіть рік з 0 до 2020")
  } else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("ого, це високосний рік");
  } else {
    console.log('звичайний собі рік');
  }

}

var args = process.argv;
var userYear = args[2];
userYear = Number(userYear);

console.log("Введено: ", userYear);
console.log("---------------");
ifYearIsLeap(userYear);