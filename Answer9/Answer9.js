function digitSum(number) {
  let str = number.toString();
  let sum;
  let array = [];
  for (i = 0; i < str.length; i++) {
    let result = Number(str[i]);
    array.push(result);
  }
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
}
console.log(digitSum(243)); //9
console.log(digitSum(4367)); //20
console.log(digitSum(56349)); //27
