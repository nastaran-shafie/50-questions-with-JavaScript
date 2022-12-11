let arr = [2, 5, 9, 6];
function contains(arr, num) {
  if (arr.includes(num)) {
    return true;
  } else {
    return false;
  }
}

console.log(contains(arr, 5)); // [True]
console.log(contains(arr, 12)); // [True]
