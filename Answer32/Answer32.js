function addArrays(...array) {
  let array2 = [];
  array.forEach((element) => {
    element.forEach((item) => {
      array2.push(item);
    });
  });
  return array2;
}

console.log(addArrays([2, 3, 4], [6, 4, 9], [34, 6, 4]));
// [2, 3, 4, 6, 4, 9, 34, 6, 4]
