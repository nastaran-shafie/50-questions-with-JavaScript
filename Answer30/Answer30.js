function getFactorial(num) {
  // If the number is less than 0, reject it.
  if (num < 0) return -1;
  // If the number is 0, its factorial is 1.
  else if (num == 0) return 1;
  // Otherwise, call the recursive procedure again
  else {
    return num * getFactorial(num - 1);
  }
}

console.log(getFactorial(5)); // 120br /> console.log(getFactorial(12)); // 479001600
