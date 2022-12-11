function printPattern(numbers) {
  var char = 0;
  for (let i = 1; i <= numbers; i++) {
    for (let j = 1; j <= i; j++) {
      if (i === 1) {
        char = "/*";
      }

      if (j === numbers) {
        char = char + i + "*/";
      } else {
        char = char + j;
      }
    }
    console.log(char);
    char = " ";
  }
}
printPattern(8);
