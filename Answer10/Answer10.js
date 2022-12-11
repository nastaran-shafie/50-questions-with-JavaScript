let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
function findLargest(array) {
  let largestNum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largestNum) {
      largestNum = array[i];
    }
  }
  return largestNum;
}
console.log(findLargest(arr));
