function simpleInt(money, increasse, year) {
  let result = money * increasse * year;
  return result + money;
}

console.log(simpleInt(20000, 5, 2)); //220000
console.log(simpleInt(150000, 25, 1)); //3900000
