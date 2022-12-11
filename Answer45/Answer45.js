function array_filled(num1, num2) {
  let array = [];
  for (let i = 0; i < num1; i++) {
    array.push(num2);
  }
  return array;
}

console.log(array_filled(6, 0)); // [0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11)); //[11, 11, 11, 11]
