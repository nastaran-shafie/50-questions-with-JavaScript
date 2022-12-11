console.log("object");
function numPower(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}
console.log(numPower(4, 3));
console.log(numPower(16, 2));
