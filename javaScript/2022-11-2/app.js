function arr(n) {
  // create a holder array
  var newArr = [];
  //   walk through the array
  for (let i = 0; i < n; i++) {
    // push every item to the new array except n
    newArr.push(i);
  }
  return newArr;
}

// alternate solution

arr = n => (n ? [...Array(n).keys()] : []);
