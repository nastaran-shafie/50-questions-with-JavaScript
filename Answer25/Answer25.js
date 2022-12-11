function flattenArr(array) {
  let array2 = [];
  array.forEach((element) => {
    element.forEach((item) => {
      array2.push(item);
    });
  });
  return array2;
}

console.log(
  flattenArr([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
