function addNumber() {
  return Array.from(arguments).reduce((sum, value) => {
    if (Array.isArray(value)) {
      sum += getSum.apply(this, value);
    } else {
      sum += Number(value);
    }

    return sum;
  }, 0);
}

console.log(addNumber(2, 4, 5)); // 11
console.log(addNumber(10, 45, 34, 130)); // 219
