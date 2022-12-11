function reverseNum(n) {
  n = n + "";
  return Number(n.split("").reverse().join(""));
}

console.log(reverseNum(123)); //321
console.log(reverseNum(5872)); //2785
