function minMax(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return [min, max];
}

// alternate solution

function minMax(arr) {
  var max = arr[0],
    min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return [min, max];
}
