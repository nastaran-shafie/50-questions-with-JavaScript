let arr = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
];
function zeroCount(array) {
  let result = [];
  array.forEach((element) => {
    element.forEach((item) => {
      if (item === 0) {
        result.push(item);
      }
    });
  });
  return result.length;
}

console.log(zeroCount(arr)); //5
