function unzip(...arr) {
  let array = [];
  let str = [];
  let number = [];
  let bolean = [];
  arr.forEach((element) => {
    element.forEach((item) => {
      item.forEach((e) => {
        if (typeof e === "string") {
          str.push(e);
        } else if (e === +e) {
          number.push(e);
        } else {
          bolean.push(e);
        }
      });
    });
  });
  if (str !== " ") {
    array.push(str);
  }
  if (number !== " ") {
    array.push(number);
  }
  if (bolean !== " ") {
    array.push(bolean);
  }

  console.log(array);
}
unzip([
  ["a", 1, true],
  ["b", 2, false],
]); // [["a","b"],[1,2],[true,false]]
unzip([
  ["a", 1, true],
  ["b", 2],
]); // [["a","b"],[1,2],[true]]unzip([['a', 1, true], ['b', 2, false]]); // [["a","b"],[1,2],[true,false]]
unzip([
  ["a", 1, true],
  ["b", 2],
]); // [["a","b"],[1,2],[true]]
unzip([["a", true], ["b"]]);
