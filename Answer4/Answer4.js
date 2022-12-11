let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

function deleteElement(array, number) {
  array.forEach((element) => {
    if (element !== number) {
      console.log(element);
    }
  });
}
deleteElement(arr, 56);
