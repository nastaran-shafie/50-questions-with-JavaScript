let srting = "hi";

function count(str) {
  let array = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      array.push(str[i]);
    }
  }
  return array.length;
}
console.log(count("nastaran"));
