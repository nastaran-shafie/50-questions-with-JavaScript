let arr = [13, 23, 12, 45, 22, 48, 66, 100];

function printEven(array) {
  array.forEach((element) => {
    if (element % 2 === 0) {
      console.log(element);
    }
  });
}
printEven(arr);
