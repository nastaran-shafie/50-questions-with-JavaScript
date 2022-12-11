function remove_array_element(arr, num) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      array.push(arr[i]);
    }
  }
  return array;
}

console.log(remove_array_element([2, 5, 9, 6], 5)); //[2, 9, 6]
