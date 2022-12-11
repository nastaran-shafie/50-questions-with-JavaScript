function countVowel(str) {
  let array = [];

  for (i = 0; i < str.length; i++) {
    let result = str[i].toLowerCase();
    switch (result) {
      case "a":
        array.push(result);
      case "u":
        array.push(result);
      case "e":
        array.push(result);
      case "o":
        array.push(result);
      case "i":
        array.push(result);
      case "y":
        array.push(result);
      case "w":
        array.push(result);
    }
  }
  let uniqueChars = [...new Set(array)];
  return uniqueChars.length;
  //   return array2.length;
}

console.log(countVowel("Hello")); //2
console.log(countVowel("Umbrella")); //3
