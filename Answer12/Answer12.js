let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
function findProd(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

console.log(findProd(arr1, arr2)); //[12, 90, 782, 312, 408, 1]
