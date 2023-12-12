function rowWeights(array) {
  //your code here
  const subArr1 = array.filter((_, i) => i % 2 === 0);
  const subArr2 = array.filter((_, i) => i % 2 !== 0);

  let result = [];

  let ans1 = subArr1.reduce((a, c) => {
    return a + c;
  }, 0);

  let ans2 = subArr2.reduce((a, c) => {
    return a + c;
  }, 0);

  result.push(ans1, ans2);

  return result;
}

// alternate solution

function rowWeights(array) {
  var arr = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 == 0 ? (arr[0] += array[i]) : (arr[1] += array[i]);
  }
  return arr;
}
