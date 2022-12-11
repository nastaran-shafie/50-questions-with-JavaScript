const checkPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return true;
};

console.log(checkPrime(27)); // false
console.log(checkPrime(19)); // true
