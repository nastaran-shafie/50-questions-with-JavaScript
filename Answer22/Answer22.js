function circleValues(redious) {
  let area = redious * redious * 3.14;
  let Perimeter = 2 * 3.14 * redious;
  return `the area is : ${area} , the perimeter is : ${Perimeter}`;
}

console.log(circleValues(10)); //"Perimeter: 62.83, Area: 314.15" console.log(circleValues(15)); //"Perimeter: 94.24, Area: 706.85"
console.log(circleValues(25)); //"Perimeter: 157.07, Area: 1963.49"
