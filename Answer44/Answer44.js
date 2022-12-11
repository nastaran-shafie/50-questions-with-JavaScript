function array_filled(number, word) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(word);
  }
  return array;
}

console.log(array_filled(3, "default value")); // ["default value", "default value", "default value"]

console.log(array_filled(4, "password")); // ["password", "password", "password", "password"]
