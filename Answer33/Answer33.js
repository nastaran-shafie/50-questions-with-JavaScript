function letterCount(str, letter) {
  str = str.toLowerCase();
  letter = letter.toLowerCase();

  let letter_Count = 0;
  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) === letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(letterCount("Connect", "c")); // 2
console.log(letterCount("first person", "s")); // 2
