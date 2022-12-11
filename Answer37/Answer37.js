function findLargest(num1, num2, num3) {
  result = Math.max(num1, num2, num3);
  if (num1 === num2 && num2 == num3) {
    return num1 + " and " + num2 + " and " + num3 + " are equal";
  } else {
    if (result === num1) {
      return num1 + " is the largest one ";
    } else if (result === num2) {
      return num2 + "  is the largest one ";
    } else if (result === num3) {
      return num3 + " is the largest one ";
    }
  }
}
console.log(findLargest(2, 4, 8));
console.log(findLargest(2, 5, 2));
console.log(findLargest(5, 5, 5));
