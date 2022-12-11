function genRandom(num1, num2) {
  let result = Math.random() * (num2 - num1) + num1;
  return parseInt(result);
}

console.log(genRandom(1, 10)); // random int between 1 to 10
console.log(genRandom(80, 90)); // random int between 80 to 90
console.log(genRandom(1000, 1002)); // random int between 80 to 90
