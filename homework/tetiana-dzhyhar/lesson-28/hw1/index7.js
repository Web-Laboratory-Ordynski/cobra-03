function getPurchaseDiscount(sumOfPurchase) {
  var amountInclDiscount;

  if (sumOfPurchase >= 200 && sumOfPurchase < 300) {
    amountInclDiscount = sumOfPurchase * ((100 - 3) / 100);
  } else if (sumOfPurchase >= 300 && sumOfPurchase < 500) {
    amountInclDiscount = sumOfPurchase * ((100 - 5) / 100);
  } else if (sumOfPurchase >= 500) {
    amountInclDiscount = sumOfPurchase * ((100 - 7) / 100);
  } else {
    amountInclDiscount = sumOfPurchase
  }

  return amountInclDiscount;
}

var args = process.argv;
var userSumOfPurchase = args[2];
userSumOfPurchase = Number(userSumOfPurchase);

console.log("Введено: ", userSumOfPurchase);
console.log("---------------");
var clientPurchaseWithDiscount = getPurchaseDiscount(userSumOfPurchase);
console.log("при сумі покупки в ", userSumOfPurchase, "ви оплатите ", clientPurchaseWithDiscount);