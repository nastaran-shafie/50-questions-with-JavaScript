let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
function printArray(array) {
  array.forEach((element) => {
    return element.forEach((item) => {
      console.log(item);
    });
  });
}
printArray(arr);
