function move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}
console.log(move([10, 20, 30, 40, 50], 0, 2)); //[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); //[10, 20, 30, 50, 40]
