function arrayPlusArray(arr1, arr2) {
  let combinedArr = arr1.concat(arr2);
  let result = combinedArr.reduce((a, c) => {
    return a + c;
  }, 0);
  return result;
}

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((a, b) => a + b, 0);
