function removeEveryOther(arr) {
  //your code here
  console.log(arr);
  filteredArray = arr.filter((_, index) => index % 2 === 0);
  return filteredArray;
}

//   alternate solution

function removeEveryOther(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
